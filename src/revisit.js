/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2022 the ZAP development team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';

/**
 * This file was automatically generated.
 */
function Revisit(clientApi) {
  this.api = clientApi;
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Revisit.prototype.revisitList = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/revisit/view/revisitList/', callback);
    return;
  }
  return this.api.requestPromise('/revisit/view/revisitList/');
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Revisit.prototype.revisitSiteOn = function (site, starttime, endtime, callback) {
  if (typeof callback === 'function') {
    this.api.request('/revisit/action/revisitSiteOn/', {'site': site, 'startTime': starttime, 'endTime': endtime}, callback);
    return;
  }
  return this.api.requestPromise('/revisit/action/revisitSiteOn/', {'site': site, 'startTime': starttime, 'endTime': endtime});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Revisit.prototype.revisitSiteOff = function (site, callback) {
  if (typeof callback === 'function') {
    this.api.request('/revisit/action/revisitSiteOff/', {'site': site}, callback);
    return;
  }
  return this.api.requestPromise('/revisit/action/revisitSiteOff/', {'site': site});
};

module.exports = Revisit;
