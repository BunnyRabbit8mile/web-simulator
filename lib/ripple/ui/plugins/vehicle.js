/*
 *  Copyright 2013 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var utils = require('ripple/utils'),
    event = require('ripple/event'),
    db = require('ripple/db'),
    exception = require('ripple/exception'),
    vehicledb = require('ripple/platform/ivi/3.0/spec/vehicledb'),
    _vehicleGlobal = {
        dataIndex: 0,
        subscribes: {},
        time: null,
        noShow: ["time", "zone", "source"],
        properties: vehicledb.properties,
        status: "stop",
        oldManual: 0
    },
    _t;

function _trimString (str, length) {
    return str.length > length ? str.substring(0, length) + "...": str;
}

function _getPropertyUnit (property) {
    var propertyUnits = {
        "VehicleSpeed-vehicleSpeed": "KPH",
        "EngineSpeed-engineSpeed": "RPM",
        "TripMeter-tripMeters": "[M,...]",
        "CruiseControlStatus-speed": "KPH",
        "Fuel-level": "%",
        "Fuel-instantConsumption": "ML/S",
        "Fuel-instantEconomy": "KM/L",
        "Fuel-averageEconomy": "KM/L",
        "EngineOil-remaining": "%",
        "EngineOil-temperature": "C",
        "EngineOil-pressure": "KPA",
        "ExteriorBrightness-exteriorBrightness": "LUX",
        "Temperature-interior": "C",
        "Temperature-exterior": "C",
        "HVAC-targetTemperature": "C",
        "Sunroof-openness": "%",
        "Sunroof-tilt": "%",
        "ConvertibleRoof-openness": "%",
        "Size-width": "MM",
        "Size-height": "MM",
        "Size-length": "MM",
        "WheelInformation-frontWheelRadius": "MM",
        "WheelInformation-rearWheelRadius": "MM",
        "WheelInformation-wheelTrack": "MM",
        "Odometer-odometer": "KM",
        "Fluid-transmission": "%",
        "Fluid-brake": "%",
        "Fluid-washer": "%",
        "Battery-voltage": "V",
        "Battery-current": "A",
        "TirePressure-leftFront": "KPA",
        "TirePressure-rightFront": "KPA",
        "TirePressure-leftRear": "KPA",
        "TirePressure-rightRear": "KPA",
        "TireTemperature-leftFront": "C",
        "TireTemperature-rightFront": "C",
        "TireTemperature-leftRear": "C",
        "TireTemperature-rightRear": "C",
        "VehicleTopSpeedLimit-vehicleTopSpeedLimit": "KPH"
    };

    return !propertyUnits[property] ? "" : "(" + propertyUnits[property] + ")";
}

function _initializeVehicleSupported() {
    try {
        db.saveObject("ivi-vehicle-db", vehicledb);

        _inializeConfig();
        _initializeSettingRunning();
        _initializeProperties();
        _setSupportedProperties();
        _initializePropertiesSetting();
        _initializeVehicleDomEvent();
        _initializeVehicleEvent();

        _runVehicleInfo();
        jQuery("#vehicle-container .vehicle-property-auto").hide();
        jQuery("#vehicle-container .vehicle-property-manual").show();

        jQuery(function () {
            var stop = false;
            jQuery("#vehicle-supported-properties h3").click(function (event) {
                if (stop) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    stop = false;
                }
            });
            jQuery("#vehicle-supported-properties").accordion("destroy").accordion({
                header: "> div > h3",
                autoHeight: false
            });
        });
    } catch (e) {
        exception.handle(e, true);
    }
}

function _setAutoPropertyValue () {
    var runInputSelector = "#vehicle-container .vehicle-property-manual input";

    //run set
    jQuery(runInputSelector).bind("change", function () {
		var propertyId = this.id, item,
            btVehicleDB = db.retrieveObject("ivi-vehicle-db"),
            property, type, val, data;

        item = propertyId.split("-");
        property = item[0];
        type = item[1];
        val = this.value;

        if (val.indexOf(",") > -1) {
            val = val.split(",");
        }

        if (btVehicleDB.history[btVehicleDB.now]) {
            data = btVehicleDB.history[btVehicleDB.now];
        }
        else {
            data = btVehicleDB.data[btVehicleDB.now];
        }

        btVehicleDB.history[btVehicleDB.now] = utils.copy(data);

        if (btVehicleDB.history[btVehicleDB.now][property] &&
            btVehicleDB.supported.indexOf(property) > -1) {
            btVehicleDB.history[btVehicleDB.now][property][type] = val;

            btVehicleDB.historyCount++;
            saveVehicleData(btVehicleDB);

            event.trigger("vehicle-db-refresh");

            if (_vehicleGlobal.subscribes[property]) {
                event.trigger("vehicle-subscribe-request", [property, false,
                    btVehicleDB.history[btVehicleDB.now][property].zone]);
            }
        }
    });
}

function saveVehicleData (btVehicleDB) {
    var dataKey;

    if (btVehicleDB.historyCount > 2000) {
        for (dataKey in btVehicleDB.history) {
            delete btVehicleDB.history[dataKey];
            break;
        }
    }

    db.saveObject("ivi-vehicle-db", btVehicleDB);
}

/**
 * initialize vehicle properties to panel("Supported Properties")
 * @private
 */
function _initializeProperties () {
    var i, inputHtml = "", tdHtml = "", tdNum = 0,
        inputContainer = jQuery("#vehicle-container #vehicle-supported-types"),
        viewContainer = jQuery("#vehicle-container #vehicle-supported-view"),
        properties = db.retrieveObject("ivi-vehicle-db").properties,
        pro, realPro;

    for (i = 0; i < properties.length; i++) {
        realPro = properties[i];
        pro = _trimString(realPro, 12);

        inputHtml += '<input type="checkbox" id="' + realPro +
            '-supported" name="vehicle-supported" value="' + realPro +
            '" />';
        inputContainer.append(inputHtml);

        if (tdNum % 3 === 0) {
            tdHtml += '<tr><td id="' + realPro + '-view" ' +
                'class="vehicle-unsupported" title="' + realPro + '">' +
                pro + '</td>';
        }
        else if (tdNum % 3 === 1){
            tdHtml += '<td id="' + realPro + '-view" ' +
                'class="vehicle-unsupported" title="' + realPro + '">' +
                pro + '</td>';
        }
        else if (tdNum % 3 === 2){
            tdHtml += '<td id="' + realPro + '-view" ' +
                'class="vehicle-unsupported" title="' + realPro + '">' +
                pro + '</td></tr>';
        }
        tdNum++;
    }
    inputContainer.html(inputHtml);
    viewContainer.html(tdHtml);
}

/**
 * set vehicle supported properties.
 * @private
 */
function _setSupportedProperties () {
    var supported = db.retrieveObject("ivi-vehicle-db").supported, i,
        inputSelector = "#vehicle-container div#vehicle-supported-types input",
        viewSelector = "#vehicle-container table#vehicle-supported-view td",
        inputEls, viewEls;

    for (i = 0; i < supported.length; i++) {
        inputEls = jQuery(inputSelector + "#" + supported[i] + "-supported");
        if (inputEls && inputEls.length > 0) {
            inputEls.attr("checked", "checked");
        }

        viewEls = jQuery(viewSelector + "#" + supported[i] + "-view");
        if (viewEls && viewEls.length > 0) {
            viewEls.removeClass("vehicle-unsupported");
            viewEls.addClass("vehicle-supported");
        }
    }
}

function _makeSettingHtml (settingData) {
    var property, propertyItems, item, viewHtml = "", style,
        optionHtml = "", i, optionName, option, options, attr;

    for (property in settingData) {
        viewHtml += '<tr><td colspan="2" class="vehicle-property-setting-title">' +
            property + '</td></tr>';

        propertyItems = settingData[property];
        for (item in propertyItems) {
            if (propertyItems[item].type === "radio") {
                if (propertyItems[item].default == true) {
                    viewHtml += '<tr><td> ' + item + '</td>' +
                        '<td align="right" class="vehicle-property-setting-set">' +
                        '<input id="' + property + '-' + item + '-set" ' +
                        ' value="true" type="checkbox" checked />' +
                        '<label for="' + property + '-' + item + '-set">' +
                        propertyItems[item].options[0] + '</label>' +
                        '</td></tr>';
                }
                else {
                    viewHtml += '<tr><td> ' + item + '</td>' +
                        '<td align="right" class="vehicle-property-setting-set">' +
                        '<input id="' + property + '-' + item + '-set" ' +
                        ' value="true" type="checkbox" /> ' +
                        '<label for="' + property + '-' + item + '-set">' +
                        propertyItems[item].options[0] + '</label>' +
                        ' </td></tr>';
                }
            }
            else if (propertyItems[item].type === "select") {
                optionHtml = "";
                options = propertyItems[item].options;
                for (i = 0; i < options.length; i++) {
                    option = options[i];
                    for (optionName in option) {
                        if (option[optionName] == propertyItems[item].default) {
                            optionHtml += '<option value="' + option[optionName] + '" selected>' +
                                optionName + '</option>';
                        }
                        else {
                            optionHtml += '<option value="' + option[optionName] + '">' +
                                optionName + '</option>';
                        }
                        break;
                    }
                }
                viewHtml += '<tr><td> ' + item + '</td>' +
                    '<td class="vehicle-property-setting-set">' +
                    '<select id="' + property + '-' + item + '-set">' +
                    optionHtml + '</select></td></tr>';
            }
            else if (propertyItems[item].type === "text") {
                attr = "";
                style = "";
                if (propertyItems[item].default == null) {
                    attr = "disabled";
                    style = "color: red;";
                }
                viewHtml += '<tr><td style="'+ style +'"> ' + item +
                    _getPropertyUnit(property + '-' + item) + '</td>' +
                    '<td class="vehicle-property-setting-set" title="' +
                    propertyItems[item].title + '">' +
                    '<input id="' + property + '-' + item + '-set" type="text" ' +
                    attr + ' value="' + propertyItems[item].default + '" />' +
                    '</td></tr>';
            }
        }
    }

    return viewHtml;
}

/**
 * initialize vehicle setting
 * @private
 */
function _initializePropertiesSetting () {
    var btVehicleDB = db.retrieveObject("ivi-vehicle-db"),
        enabledSet = btVehicleDB.enabledSet,
        stopSet = btVehicleDB.stopSet,
        settingSelector = "#vehicle-container div#vehicle-properties-setting",
        viewHtml = "";

    viewHtml += '<table class="vehicle-property-setting">';

    viewHtml += _makeSettingHtml(enabledSet);
    viewHtml += _makeSettingHtml(stopSet);
    viewHtml += '</table>';

    jQuery(settingSelector).html(viewHtml);
}

function _runVehicleInfo () {
    var time, property, propertyItem, tableString = '', i = 0, now, newData,
        btVehicleDB = db.retrieveObject("ivi-vehicle-db"), value, data,
        content = jQuery("#vehicle-container table.vehicle-supported-info");

    _vehicleGlobal.dataIndex = _vehicleGlobal.dataIndex % btVehicleDB.dataCount;

    now = (new Date()).getTime();
    tableString += '<tr style="display: none;"><td align="left">Time</td><td align="right">' + now + '</td></tr>';
    _vehicleGlobal.time = now;

    for (time in btVehicleDB.data) {
        if (i !== _vehicleGlobal.dataIndex) {
            i++;
            continue;
        }
        break;
    }

    data = btVehicleDB.data[time];

    for (property in data) {
        if (btVehicleDB.supported.indexOf(property) === -1) continue;

        if (_vehicleGlobal.subscribes[property]) {
            event.trigger("vehicle-subscribe-request", [property, false,
                btVehicleDB.data[time][property].zone]);
        }

        if (btVehicleDB.enabledSet[property]) continue;
        if (btVehicleDB.stopSet[property]) continue;
        if (btVehicleDB.config[btVehicleDB.config.current][property]) continue;

        tableString += '<tr><td colspan="2" class="vehicle-property-title">' +
            property + '</td></tr>';

        for (propertyItem in data[property]) {
            if (_vehicleGlobal.noShow.indexOf(propertyItem) > -1) continue;
            if (/^[A-Z][A-Z_]+[A-Z0-9]$/.test(propertyItem) &&
                propertyItem !== "WMI" &&
                propertyItem !== "VIN") continue;

            value = btVehicleDB.data[time][property][propertyItem];

            tableString += '<tr><td align="left">' + propertyItem + _getPropertyUnit(property + '-' + propertyItem) +
                '</td><td align="right" class="vehicle-property-auto">' + value +
                '</td><td align="right" class="vehicle-property-manual">' +
                '<input style="text-align: right;" type="text" value="' + value +'" id="' + property + '-' + propertyItem + '-set">' +
                '</td></tr>';
        }
    }

    content.html('');
    content.html(tableString);

    _setAutoPropertyValue();

    newData = utils.copy(btVehicleDB.data[time]);
    btVehicleDB.history[now] = newData;
    btVehicleDB.now = now;
    btVehicleDB.historyCount++;
    saveVehicleData(btVehicleDB);

    event.trigger("vehicle-db-refresh");

    _vehicleGlobal.dataIndex++;
}

/**
 * initialize vehicle dom events
 * @private
 */
function _initializeVehicleDomEvent () {
    var viewSelector = "#vehicle-container #vehicle-supported-view td",
        runSelector = "#vehicle-container #vehicle-run",
        carSelector = "#vehicle-container #vehicle-config-cars",
        searchSelector = "#vehicle-container #vehicle-supported-search",
        setSelector1 = "#vehicle-container .vehicle-property-setting-set select",
        setSelector2 = "#vehicle-container .vehicle-property-setting-set input:checkbox",
        setSelector3 = "#vehicle-container .vehicle-property-setting-set input:text",
        setSelector;

    setSelector = setSelector1 + "," + setSelector2 + "," + setSelector3;

    //add vehicle supported click event
    jQuery(viewSelector).bind("click", function () {
        var content = jQuery(this).html(),
            inputPropertyID = content + "-supported",
            element = jQuery(this),
            vehicleChecked,
            btVehicleDB = db.retrieveObject("ivi-vehicle-db"),
            inputSelector = "#vehicle-container #vehicle-supported-types input";

        if (element.hasClass("vehicle-unsupported")) {
            jQuery(inputSelector + "#" + inputPropertyID).attr("checked", "checked");
            element.removeClass("vehicle-unsupported");
            element.addClass("vehicle-supported");
        }
        else {
            jQuery(inputSelector + "#" + inputPropertyID).removeAttr("checked");
            element.removeClass("vehicle-supported");
            element.addClass("vehicle-unsupported");
        }

        vehicleChecked = jQuery(inputSelector + ":checked");
        btVehicleDB.supported.length = 0;
        vehicleChecked.each(function (index, els) {
            btVehicleDB.supported.push(els.value);
        });

        db.saveObject("ivi-vehicle-db", btVehicleDB);
        event.trigger("vehicle-db-refresh");
    });

    //run
    jQuery(runSelector).bind("click", function () {
        var element = jQuery(this),
            noSetSelector = "#vehicle-container .vehicle-noSet";

        if (element.hasClass("vehicle-unsupported")) {
            element.removeClass("vehicle-unsupported");
            element.addClass("vehicle-supported");

            _vehicleGlobal.status = "run";
            jQuery(noSetSelector).show();

            _t = window.setInterval(function () {
                _runVehicleInfo();
                jQuery("#vehicle-container .vehicle-property-auto").show();
                jQuery("#vehicle-container .vehicle-property-manual").hide();
            }, 2000);
        }
        else {
            element.removeClass("vehicle-supported");
            element.addClass("vehicle-unsupported");

            _vehicleGlobal.status = "stop";
            jQuery(noSetSelector).hide();

            window.clearTimeout(_t);
            jQuery("#vehicle-container .vehicle-property-auto").hide();
            jQuery("#vehicle-container .vehicle-property-manual").show();
        }
    });

    //filter
    jQuery(searchSelector).bind("keyup", function () {
        var filterText = this.value.toLowerCase(), realPro, pro,
            filterProperty, tableString = "", index = 0, i,
            vehicleView = jQuery("#vehicle-container table#vehicle-supported-view");

        vehicleView.html("");

        for (i = 0; i < _vehicleGlobal.properties.length; i++) {
            realPro = _vehicleGlobal.properties[i];
            pro = _trimString(realPro, 12);
            filterProperty = realPro.toLowerCase();

            if (filterProperty.indexOf(filterText) > -1) {
                if (index % 3 === 0) {
                    tableString += '<tr><td id="' + realPro + '-view" ' +
                        'class="vehicle-unsupported" title="' + realPro + '">' +
                        pro + '</td>';
                }
                else if (index % 3 === 1){
                    tableString += '<td id="' + realPro + '-view" ' +
                        'class="vehicle-unsupported" title="' + realPro + '">' +
                        pro + '</td>';
                }
                else if (index % 3 === 2){
                    tableString += '<td id="' + realPro + '-view" ' +
                        'class="vehicle-unsupported" title="' + realPro + '">' +
                        pro + '</td></tr>';
                }
                index++;
            }
        }
        vehicleView.html(tableString);

        _setSupportedProperties();
    });

    //set
    jQuery(setSelector).bind("change", function () {
        var propertyId = this.id, item, dic = false, dicAttr,
            btVehicleDB = db.retrieveObject("ivi-vehicle-db"),
            property, type, val, data, time;

        item = propertyId.split("-");
        property = item[0];
        type = item[1];
        val = this.type && this.type === "checkbox" ?
            (this.checked ? true : false) : this.value;

        if (item.length === 4) {
            dicAttr = item[2];
            dic = true;
        }

        for (time in btVehicleDB.data) {
            if (dic) {
                btVehicleDB.data[time][property][type][dicAttr] = val;
            }
            else {
                btVehicleDB.data[time][property][type] = val;
            }
        }

        if (btVehicleDB.history[btVehicleDB.now]) {
            data = btVehicleDB.history[btVehicleDB.now];
        }
        else {
            data = btVehicleDB.data[btVehicleDB.now];
        }
        btVehicleDB.history[btVehicleDB.now] = utils.copy(data);

        if (btVehicleDB.history[btVehicleDB.now][property] &&
            btVehicleDB.supported.indexOf(property) > -1) {
            if (dic) {
                btVehicleDB.history[btVehicleDB.now][property][type][dicAttr] = val;
            }
            else {
                btVehicleDB.history[btVehicleDB.now][property][type] = val;
            }

            btVehicleDB.historyCount++;
            saveVehicleData(btVehicleDB);
            event.trigger("vehicle-db-refresh");

            if (_vehicleGlobal.subscribes[property]) {
                event.trigger("vehicle-subscribe-request", [property, false,
                    btVehicleDB.history[btVehicleDB.now][property].zone]);
            }
        }
    });

    //car config
    jQuery(carSelector).bind("change", function () {
        var btVehicleDB = db.retrieveObject("ivi-vehicle-db"),
            property, propertyItems, item, viewHtml = "", config,
            configView = jQuery("#vehicle-container #vehicle-config-view"),
            propertyObj, time, data;

        config = btVehicleDB.config[this.value];
        btVehicleDB.config.current = this.value;

        for (property in btVehicleDB.config[btVehicleDB.config.current]) {
            propertyObj = btVehicleDB.config[btVehicleDB.config.current][property];

            for (time in btVehicleDB.data) {
                data = btVehicleDB.data[time];
                data[property] = utils.copy(propertyObj);
            }

            btVehicleDB.history[btVehicleDB.now] = utils.copy(btVehicleDB.data[btVehicleDB.now]);
            btVehicleDB.historyCount++;
        }

        saveVehicleData(btVehicleDB);

        for (property in config) {
            viewHtml += '<tr><td colspan="2" class="vehicle-property-setting-title">' +
                property + '</td></tr>';

            if (_vehicleGlobal.subscribes[property]) {
                event.trigger("vehicle-subscribe-request", [property, false,
                    config[property].zone]);
            }

            propertyItems = config[property];
            for (item in propertyItems) {
                viewHtml += '<tr><td> ' + item + _getPropertyUnit(property + '-' + item) + '</td>' +
                    '<td class="vehicle-property-setting-set">' + propertyItems[item] +
                    '<input id="' + property + '-' + item + '-set" type="hidden" ' +
                    'value="' + propertyItems[item] + '" />' +
                    '</td></tr>';
            }
        }

        configView.html(viewHtml);
    });
}

function _inializeConfig () {
    var btVehicleDB = db.retrieveObject("ivi-vehicle-db"),
        property, propertyItems, item, viewHtml = "", config,
        configView = jQuery("#vehicle-container #vehicle-config-view");

    config = btVehicleDB.config[btVehicleDB.config.current];

    for (property in config) {
        viewHtml += '<tr><td colspan="2" class="vehicle-property-setting-title">' +
            property + '</td></tr>';

        propertyItems = config[property];
        for (item in propertyItems) {
            viewHtml += '<tr><td> ' + item + _getPropertyUnit(property + '-' + item) + '</td>' +
                '<td class="vehicle-property-setting-set">' + propertyItems[item] +
                '<input id="' + property + '-' + item + '-set" type="hidden" ' +
                'value="' + propertyItems[item] + '" />' +
                '</td></tr>';
        }
    }

    configView.html(viewHtml);
}

function _initializeSettingRunning () {
    var btVehicleDB = db.retrieveObject("ivi-vehicle-db"),
        property, propertyObj, time, data, item, propertyItemObj,
        dic = false, dicAttr, dicName;

    for (property in btVehicleDB.enabledSet) {
        propertyObj = btVehicleDB.enabledSet[property];
        propertyItemObj = {};

        for (item in propertyObj) {
            if (item.indexOf("-") > -1) {
                dic = true;
                dicName = item.split("-")[0];
                dicAttr = item.split("-")[1];
                if (!propertyItemObj[dicName]) {
                    propertyItemObj[dicName] = {};
                }
                propertyItemObj[dicName][dicAttr] = propertyObj[item].default;
            }
            else {
                propertyItemObj[item] = propertyObj[item].default;
            }
        }

        for (time in btVehicleDB.data) {
            data = btVehicleDB.data[time];
            data[property] = propertyItemObj;
            data.zone = 0;
        }
    }

    for (property in btVehicleDB.stopSet) {
        propertyObj = btVehicleDB.stopSet[property];
        propertyItemObj = {};

        for (item in propertyObj) {
            propertyItemObj[item] = propertyObj[item].default;
        }

        for (time in btVehicleDB.data) {
            data = btVehicleDB.data[time];
            data[property] = propertyItemObj;
            data.zone = 0;
        }
    }

    for (property in btVehicleDB.config[btVehicleDB.config.current]) {
        propertyObj = btVehicleDB.config[btVehicleDB.config.current][property];
        for (time in btVehicleDB.data) {
            data = btVehicleDB.data[time];
            data[property] = utils.copy(propertyObj);
            data.zone = 0;
        }
    }

    db.saveObject("ivi-vehicle-db", btVehicleDB);
}

function _initializeVehicleEvent () {
    event.on("vehicle-history-request", function (property, zone, startTime, endTime) {
        var supported, data, value, values = [], status, time,
            btVehicleDB = db.retrieveObject("ivi-vehicle-db");

        supported = btVehicleDB.supported;
        data = btVehicleDB.history;

        if (supported.indexOf(property) > -1) {
            for (time in data) {
                if (time >= startTime && time <= endTime &&
                    data[time].hasOwnProperty(property)) {
                    value = data[time][property];
                    value.time = time;
                    values.push(value);
                }
            }
            status = true;
        }
        else {
            status = false;
        }

        event.trigger("vehicle-history-response", [values, status]);
    });

    event.on("vehicle-subscribe-request", function (property, isInitial, zone) {
        if (isInitial) {
            _vehicleGlobal.subscribes[property] = true;
            return;
        }

        var supported, value, status, time, history,
            btVehicleDB = db.retrieveObject("ivi-vehicle-db"),
            propertyObj = {};

        supported = btVehicleDB.supported;
        history = btVehicleDB.history;

        if (supported.indexOf(property) > -1) {
            if (!_vehicleGlobal.time) {
                for (time in history) {
                    _vehicleGlobal.time = time;
                    break;
                }
            }

            value = history[_vehicleGlobal.time][property];
            value.time = _vehicleGlobal.time;
            status = true;
        }
        else {
            status = false;
        }

        propertyObj.val = value;
        propertyObj.supported = status;
        propertyObj.type = property;

        event.trigger("vehicle-subscribe-response", [propertyObj]);
    });
}

module.exports = {
    panel: {
        domId: "vehicle-container",
        collapsed: true,
        pane: "right",
        titleName: "Vehicle Information",
        display: true
    },
    initialize: function () {
        _initializeVehicleSupported();
    }
};