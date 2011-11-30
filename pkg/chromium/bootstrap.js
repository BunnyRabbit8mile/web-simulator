window.th_panel = {LAYOUT_HTML: '<!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <!DOCTYPE html> <html manifest="cache.manifest">  <head>  <link href="#URL_PREFIX#ripple.css" type="text/css" rel="stylesheet" />  </head>  <body>  <section id="ui">  <section id="emulator-booting"></section>  <section class="logo"></section>  <section id="extension-url" class="irrelevant">#URL_PREFIX#</section>  <div class="beta ui-text-beta">beta</div>  <section class="top main">  <section class="ui-state-default omni-bar" style="display: none;">  <div id="history-back" class="ui-state-default ui-corner-all ui-icon-container ui-icon-container-left">  <span class="ui-icon ui-icon-arrowthick-1-w"></span>  </div>  <div id="history-forward" class="ui-state-default ui-corner-all ui-icon-container">  <span class="ui-icon ui-icon-arrowthick-1-e"></span>  </div>  <div id="history-reload" class="ui-state-default ui-corner-all ui-icon-container">  <span class="ui-icon ui-icon-arrowrefresh-1-e"></span>  </div>  <input class="ui-widget-content ui-corner-all" type="text" value="">  <span class="options">  <div id="options-button" class="ui-state-default ui-corner-all ui-icon-container ui-icon-container-right">  <span class="ui-icon ui-icon-wrench"></span>  </div>  <ul id="options-menu">  <li id="options-menu-build" class="not-ready"><a>Package</a></li>  <li id="options-menu-sign" class="not-ready"><a>Package &amp; Sign</a></li>  <li id="options-menu-launch" class="not-ready"><a>Package &amp; Launch</a></li>  <li id="options-menu-build-warning"><hr>Remote Web Inspector Enabled</li>  <li><hr></li>  <li id="options-menu-settings" class="not-ready"><a>Settings...</a></li>  <li><hr></li>  <li id="options-menu-about"><a>About Ripple Emulator</a></li>  </ul>  </span>  <div id="options-progress" class="progress"></div>  </section>  </section>  <section class="left-panel-collapse ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrowthick-1-w"></span>  </section>  <section id="left" class="left sortable main"></section>  <section class="middle">  <section id="device-container" class="device-wrapper">  <section id="viewport-container" class="viewport-wrapper">  <section id="overlay-views"><!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="dialog-window" class="overlay-dialog">  <div id="dialog-wrapper" class="overlay-dialog-wrapper">  <div id="dialog-title" class="overlay-dialog-title"></div>  <div id="dialog-box" class="overlay-dialog-box">  <div id="dialog-message" class="overlay-dialog-message"></div>  <div id="dialog-buttons" class="overlay-dialog-buttons"></div>  </div>  </div> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="menu-window" class="overlay-menu">  <div id="menu-box" class="overlay-menu-box">  <div id="menu-buttons" class="overlay-menu-buttons"></div>  </div> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="background-window" class="overlay">  <h1>The app is currently in the background</h1>  <button id="background-return" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Return to application</span>  </button> </section> </section>  </section>  <div id="menu-button" class="menu-button-wrapper" title="Click to press menu key"></div>  <div id="back-button" class="back-button-wrapper" title="Click to press back key"></div>  </section>  </section>  <section class="main ui-widget" id="panel-notification" style="display: none;">  <section class="panel-notification-closebtn">X</section>  <section id="panel-notification-text"></section>  </section>  <section class="right-panel-collapse ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrowthick-1-e"></span>  </section>  <section class="right sortable main"></section>  <section id="options-window"></section>  <section class="error-window"></section>  <section class="error-dialog main ui-corner-all">  <section class="error-logo"></section>  <section class="error-text">  <h1>Looks like what we have here is a failure to... emulate</h1>  <p>You'+"'"+'re seeing this window because it looks like the zombie apocalypse has started.</p>  <p>For some strange reason it looks like we are unable to load. This could be a problem  with your application, with ours or that you may require more time to finish loading.  Hit "Wait" to give your application more time. Hit "FIRE!!" to pick up a shotgun and blow away all  all of Ripple'+"'"+'s settings in an attempt to purge out the bad stuff.</p>  <br />  <button id="error-wait" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Wait</span>  </button>  <button id="error-panic" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">FIRE!!</span>  </button>  <p>If you want to help make things better, drop us a line at <a style="color: #F0F0F0" href="https://github.com/blackberry/Ripple-UI/issues">github</a></p>  </section>  <section class="error-hippo"></section>  </section>  <!-- Divs for overlay and platform select dialog -->  <div class="first-run-window"></div>  <section id="panel-views" class="irrelevant"><!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="information-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Information</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="information-sub-container" class="info ui-widget-content ui-corner-all" style="display: none;"></section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="platform-events-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Events</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="platform-events-container" class="info ui-widget-content ui-corner-all" style="display: none;">  <p>Select the event that you want to fire.</p>  <select id="platform-events-select" class="ui-state-default ui-corner-all"></select>  <select id="platform-events-args" class="ui-state-default ui-corner-all" style="display: none"></select>  <br />  <button id="platform-events-fire" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Fire Event</span>  </button>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="push-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Push</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="push" class="info ui-widget-content ui-corner-all" style="display: none;">  <section class="push-info">  <table id="push-fields" class="panel-table">  <tr>  <td><label class="ui-text-label">Port</label></td>  <td><select id="port-select" class="ui-state-default ui-corner-all"></select></td>  </tr>  </table>  <table class="panel-table">  <tr>  <td colspan="2">  <textarea class="ui-state-default ui-corner-all" id="push-text" rows="4" style="width: 90%;"></textarea>  </td>  </tr>  <tr>  <td colspan="2">  <button id="push-send" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Push</span>  </button>  </td>  </tr>  </table>  </section>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="filesystem-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">File System</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="file-container" class="info ui-widget-content ui-corner-all" style="display: none;">  <p>You can map the following virtual paths (ex. /virtual/photos/) to specific locations on your drive.</p>  <p>You may specify any valid URI location (ex. http://domain.com/files).</p>  <p>Empty values will cause the virtual routes to point to your relative location.</p>  <p class="ui-text-label" >/virtual/...</p>  <table class="panel-table">  <tr>  <td><label class="ui-text-label">photos/</label></td>  <td><input id="panel-filesystem-photos" class="ui-state-default ui-corner-all" type="text" value=""/></td>  </tr>  <tr>  <td><label class="ui-text-label">videos/</label></td>  <td><input id="panel-filesystem-videos" class="ui-state-default ui-corner-all" type="text" value=""/></td>  </tr>  <tr>  <td><label class="ui-text-label">music/</label></td>  <td><input id="panel-filesystem-music" class="ui-state-default ui-corner-all" type="text" value=""/></td>  </tr>  <tr>  <td><label class="ui-text-label">downloads/</label></td>  <td><input id="panel-filesystem-downloads" class="ui-state-default ui-corner-all" type="text" value=""/></td>  </tr>  </table>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="preferences" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Storage</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="preferences-list" class="info ui-widget-content ui-corner-all" style="display: none;">  <table class="preferences-table ui-widget-content">  <thead><tr><th><label class="ui-text-label">Key</label></th><th><label class="ui-text-label">Value</label></th></tr></thead>  <tbody id="preferences-list-body"></tbody>  </table>  <section class="preferences-count" id="preferences-count"></section>  <span class="preferences-count">Total:&nbsp;</span>  <span class="ui-text-highlight preferences-note">(read-only preference colour)</span><br/>  <button id="preferences-clear-button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Clear All</span>  </button>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="platforms-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Platforms</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section class="info ui-widget-content ui-corner-all" style="display: none;">  <table class="panel-table">  <tr>  <td><label class="ui-text-label">Platform</label></td>  <td><select id="platform-select" class="ui-state-default ui-corner-all"></select></td>  </tr>  <tr>  <td><label class="ui-text-label">Version</label></td>  <td><select id="version-select" class="ui-state-default ui-corner-all"></select></td>  </tr>  </table>  <button id="change-platform" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Change Platform</span>  </button>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="messaging-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Messaging</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="messaging" class="info ui-widget-content ui-corner-all" style="display: none;">  <section class="messaging-info">  <table id="messaging-sms-fields" class="panel-table">  <tr>  <td><label class="ui-text-label">From</label></td>  <td><input id="messaging-sms-number" type="text" class="ui-state-default ui-corner-all"></td>  </tr>  </table>  <table class="panel-table">  <tr>  <td colspan="2">  <textarea class="ui-state-default ui-corner-all" id="messaging-text" rows="4" style="width: 90%;"></textarea>  </td>  </tr>  <tr>  <td colspan="2">  <button id="messaging-send" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Send SMS</span>  </button>  </td>  </tr>  </table>  </section>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="phone-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Phone</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section class="info ui-widget-content ui-corner-all" style="display: none">  <table class="panel-table">  <tr>  <td><label class="ui-text-label">Type</label></td>  <td><select id="phone-event-types" class="ui-state-default ui-corner-all"></select></td>  </tr>  <tr>  <td><label class="ui-text-label">Call id</label></td>  <td><input id="phone-call-id" type="text" class="ui-state-default ui-corner-all"></td>  </tr>  <tr id="phone-event-error-container" style="display: none">  <td><label class="ui-text-label">Error</label></td>  <td><select id="phone-event-error-types" class="ui-state-default ui-corner-all"></select></td>  </tr>  </table>  <table class="panel-table">  <tr>  <td>  <button id="phone-logs-clear" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Clear Logs</span>  </button>  </td>  <td>  <button id="phone-event-send" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Fire Event</span>  </button>  </td>  </tr>  </table>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="gps-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Geo Location</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section class="info ui-widget-content ui-corner-all" style="display: none;">  <p></p>  <table class="panel-table">  <tr>  <td><label id="label-geo-latitude" class="ui-text-label" for="geo-latitude">Latitude</label></td>  <td><input id="geo-latitude" class="ui-state-default ui-corner-all" type="number" value=""></td>  </tr>  <tr>  <td><label id="label-geo-longitude" class="ui-text-label" for="geo-longitude">Longitude</label>  </td>  <td><input id="geo-longitude" class="ui-state-default ui-corner-all" type="number" value=""></td>  </tr>  <tr>  <td><label id="label-geo-altitude" class="ui-text-label" for="geo-altitude">Altitude</label></td>  <td><input id="geo-altitude" class="ui-state-default ui-corner-all" type="number" value=""></td>  </tr>  <tr id="geo-cellid-container">  <td><label id="label-geo-cellid" class="ui-text-label" for="geo-cellid">Cell Id</label></td>  <td><input id="geo-cellid" class="ui-state-default ui-corner-all" type="number" value=""></td>  </tr>  <tr>  <td><label id="label-geo-accuracy" class="ui-text-label" for="geo-accuracy">Accuracy</label></td>  <td><input id="geo-accuracy" class="ui-state-default ui-corner-all" type="number" value=""></td>  </tr>  <tr>  <td><label id="label-geo-altitudeaccuracy" class="ui-text-label" for="geo-altitudeaccuracy">Altitude Accuracy</label></td>  <td><input id="geo-altitudeaccuracy" class="ui-state-default ui-corner-all" type="number" value=""></td>  </tr>  <tr id="geo-heading-container">  <td><label id="label-geo-heading" class="ui-text-label" for="geo-heading">Heading</label></td>  <td>  <label id="geo-heading-label" class="range-label-left">N</label>  <input id="geo-heading" type="range" value="0" min="0" max="359.5" step="0.5" class="ui-state-default ui-corner-all">  </td>  </tr>  <tr id="geo-speed-container">  <td><label id="label-geo-speed" class="ui-text-label" for="geo-speed">Speed</label></td>  <td><input id="geo-speed" class="ui-state-default ui-corner-all" type="number" value=""></td>  </tr>  <tr id="geo-delay-container">  <td><span class="ui-text-label">GPS Delay (seconds)</span></td>  <td>  <label id="geo-delay-label" class="range-label-left">0</label>  <input id="geo-delay" type="range" value="0" min="0" max="30" class="ui-state-default ui-corner-all">  </td>  </tr>  <tr id="geo-timeout-container">  <td>  <span class="ui-text-label">Simulate GPS Timeout</span>  </td>  <td>  <input id="geo-timeout" type="checkbox" />  </td>  </tr>  </table>  <div id="geo-map">  <img id="geo-map-img">  <div id="geo-map-marker"></div>  <div id="geo-map-direction">  <div id="geo-map-arrow"></div>  <div id="geo-map-direction-label"></div>  </div>  </div>  <section class="geo-map-zoom-controls">  <button id="geo-map-zoom-decrease" class="geo-map-zoom-btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">-</span>  </button>  <button id="geo-map-zoom-increase" class="geo-map-zoom-btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">+</span>  </button>  <section class="h3 geo-map-zoomlevel">  Zoom Level:&nbsp;  <span id="geo-map-zoomlevel-value"></span>  </section>  </section>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="devices-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Devices</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section class="info ui-widget-content ui-corner-all" style="display: none;">  <select id="device-select" class="ui-state-default ui-corner-all"></select>  <table class="panel-table">  <tr>  <td><label class="ui-text-label">Orientation</label></td>  <td>  <div id="layout-portrait"></div>  <div id="layout-landscape"></div>  </td>  </tr>  </table>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="accelerometer-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Accelerometer</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="accelerometer" class="info ui-widget-content ui-corner-all" style="display: none;">  <section class="accelerometer-info">  <canvas style="display: block;" id="accelerometer-canvas" width="300" height="200"></canvas>  <table class="panel-table">  <tr>  <td colspan="2" style="text-align: center"> <em>  Click and drag with the mouse to manipulate the device. <br/>  Hold the Shift key to modify '+"'"+'alpha'+"'"+'  </em>  </td>  </tr>  <tr>  <td><label class="ui-text-label" for="accelerometer-x">xAxis:</label></td>  <td><span id="accelerometer-x"></span>m / s^2</td>  </tr>  <tr>  <td><label class="ui-text-label" for="accelerometer-y">yAxis:</label></td>  <td><span id="accelerometer-y"></span> m / s^2</td>  </tr>  <tr>  <td><label class="ui-text-label" for="accelerometer-z">zAxis:</label></td>  <td><span id="accelerometer-z"></span> m / s^2</td>  </tr>  <tr>  <td><label class="ui-text-label" for="accelerometer-alpha">alpha:</label></td>  <td><span id="accelerometer-alpha"></span> deg</td>  </tr>  <tr>  <td><label class="ui-text-label" for="accelerometer-beta">beta:</label></td>  <td><span id="accelerometer-beta"></span> deg</td>  </tr>  <tr>  <td><label class="ui-text-label" for="accelerometer-gamma">gamma:</label></td>  <td><span id="accelerometer-gamma"></span> deg</td>  </tr>  <tr>  <td></td>  <td>  <button id="accelerometer-shake" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Shake</span>  </button>  </td>  </tr>  </table>  </section>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="settings-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Settings</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section class="info ui-widget-content ui-corner-all" style="display: none;">  <table class="panel-table">  <tr>  <td><label class="ui-text-label">Tooltips</label></td>  <td>  <button id="settings-toggletooltips" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">  <span class="ui-button-text">Toggle</span>  </button>  </td>  </tr>  <tr>  <td><label class="ui-text-label">Cross Domain Proxy</label></td>  <td>  <select id="settings-xhr-proxy" class="ui-state-default ui-corner-all">  <option value="false">Enabled</option>  <option value="true">Disabled</option>  </select>  </td>  </tr>  <tr class="theme-switcher">  <td><label class="ui-text-label">Themes</label></td>  <td><select id="theme-select" class="ui-state-default ui-corner-all"></select></td>  </tr>  </table>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="devicesettings-panel-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Device &amp; Network Settings</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="devicesettings-content-container" class="info ui-widget-content ui-corner-all" style="display: none;">  <p>Configure device information, settings and events for the current platform.</p>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="config-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Config</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section class="info ui-widget-content ui-corner-all" style="display: none;">  <p>  This section is a graphical representation of your configuration file. It is color coded to indicate success / failure.  Expand each node to see the details.  </p>  <p>  The colors represent the following:  </p>  <ul>  <li class="ui-text-pass">Validation passed</li>  <li class="ui-text-fail">Validation failed</li>  <li class="ui-text-missing">Node is missing, but not required</li>  </ul>  <section id="widget-config"></section>  </section> </section> <!--  * Copyright 2011 Research In Motion Limited.  *  * Licensed under the Apache License, Version 2.0 (the "License");  * you may not use this file except in compliance with the License.  * You may obtain a copy of the License at  *  * http://www.apache.org/licenses/LICENSE-2.0  *  * Unless required by applicable law or agreed to in writing, software  * distributed under the License is distributed on an "AS IS" BASIS,  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  * See the License for the specific language governing permissions and  * limitations under the License. --> <section id="multimedia-container" class="ui-box ui-state-default ui-corner-all">  <section class="h2 info-header">  <section class="collapse-handle">Multimedia</section>  <section class="drag-handle ui-state-default ui-corner-all ui-state-hover">  <span class="ui-icon ui-icon-arrow-4"></span>  </section>  </section>  <section id="media-container" class="info ui-widget-content ui-corner-all" style="display: none;">  <h3>Multimedia</h3>  <table class="panel-table">  <tr>  <td><label class="ui-text-label">Is audio playing?</label></td>  <td id="multimedia-isaudioplaying">false</td>  </tr>  <tr>  <td><label class="ui-text-label">Is video playing?</label></td>  <td id="multimedia-isvideoplaying">false</td>  </tr>  <tr>  <td><label class="ui-text-label">Volume:</label></td>  <td>  <span id="media-volume-value" class="range-label-right">05</span>  <input id="media-volume" type="range" min="0" max="10" value="5" />  </td>  </tr>  </table>  <h3>Audio Player</h3>  <table class="panel-table audio-table">  <tr>  <td><label class="ui-text-label">Opened File:</label></td>  <td id="media-audio-file"></td>  </tr>  <tr>  <td><label class="ui-text-label">State:</label></td>  <td id="media-audio-state"></td>  </tr>  <tr>  <td><label class="ui-text-label">Progress:</label></td>  <td id="media-audio-progress"></td>  </tr>  </table>  <h3>Video Player</h3>  <table class="panel-table video-table">  <tr>  <td><label class="ui-text-label">Opened File:</label></td>  <td id="media-video-file"></td>  </tr>  <tr>  <td><label class="ui-text-label">State:</label></td>  <td id="media-video-state"></td>  </tr>  <tr>  <td><label class="ui-text-label">Progress:</label></td>  <td id="media-video-progress"></td>  </tr>  </table>  </section> </section> </section>  <section id="dialog-views" class="irrelevant"><div id="about-dialog" class="ui-state-default">  <div class="about-logo"></div>  <span><strong>Ripple Mobile Emulator</strong>  <span id="about-dialog-ripple-version">(v0.9.1)</span>  </span><br/>  <ul style="font-size: 0.8em">  <li>Ripple UI <span id="about-dialog-ripple-ui-version">(checking...)</span>  </li>  <li>Ripple Framework <span id="about-dialog-ripple-framework-version">(v0.9.1)</span>  </li>  <li>Ripple Build &amp; Deploy <span id="about-dialog-ripple-build-deploy-version">(checking...)</span>  </li>  </ul> </div> <section id="settings-dialog">  <div id="settings-tabs">  <ul>  <li><a href="#settings-tabs-build">Package</a></li>  </ul>  <div id="settings-tabs-build">  </div>  </div>  <button id="settings-action" class="cap-text" style="float: right"></button> </section> </section>  <div class="platform-select-dialog main ui-corner-all">  <section class="platform-select-logo"></section>  <section class="platform-select-text">  <h2>Are you ready for this?!?!</h2>  <p>You'+"'"+'re seeing this window because this is the first time you'+"'"+'ve enabled for this specific URL. Please select the platform/runtime you wish to start testing with.</p>  <br />  <section class="platform-select-buttons">  </section>  </section>  </div>  </section>  <script src="#URL_PREFIX#ripple.js" type="text/javascript"></script>  </body> </html> '};/*
 *  Copyright 2011 Research In Motion Limited.
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
if (!window.tinyHippos) {
    window.tinyHippos = {};
    var _panel = th_panel;

    (function () {
        var injection = _panel.LAYOUT_HTML.replace(/#URL_PREFIX#/g, document.querySelector(".emulator-bootstrap").id);

        document.open();

        document.addEventListener("tinyHipposInterpreted", function () {
            require('ripple/bootstrap').bootstrap();
        }, false);

        document.write(injection);

        window.setTimeout(function () {
            document.close();
        }, 100);
    }());
}

delete window.th_panel;