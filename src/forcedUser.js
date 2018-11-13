/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2018 the ZAP development team
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
function ForcedUser(clientApi) {
  this.api = clientApi;
}

/**
 * Returns 'true' if 'forced user' mode is enabled, 'false' otherwise
 **/
ForcedUser.prototype.isForcedUserModeEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/forcedUser/view/isForcedUserModeEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/forcedUser/view/isForcedUserModeEnabled/');
};

/**
 * Gets the user (ID) set as 'forced user' for the given context (ID)
 **/
ForcedUser.prototype.getForcedUser = function (contextid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/forcedUser/view/getForcedUser/', {'contextId' : contextid}, callback);
    return;
  }
  return this.api.requestPromise('/forcedUser/view/getForcedUser/', {'contextId' : contextid});
};

/**
 * Sets the user (ID) that should be used in 'forced user' mode for the given context (ID)
 **/
ForcedUser.prototype.setForcedUser = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/forcedUser/action/setForcedUser/', {'contextId' : contextid, 'userId' : userid}, callback);
    return;
  }
  return this.api.requestPromise('/forcedUser/action/setForcedUser/', {'contextId' : contextid, 'userId' : userid});
};

/**
 * Sets if 'forced user' mode should be enabled or not
 **/
ForcedUser.prototype.setForcedUserModeEnabled = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/forcedUser/action/setForcedUserModeEnabled/', {'boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/forcedUser/action/setForcedUserModeEnabled/', {'boolean' : bool});
};

module.exports = ForcedUser;
