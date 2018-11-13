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
function SessionManagement(clientApi) {
  this.api = clientApi;
}

SessionManagement.prototype.getSupportedSessionManagementMethods = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/sessionManagement/view/getSupportedSessionManagementMethods/', callback);
    return;
  }
  return this.api.requestPromise('/sessionManagement/view/getSupportedSessionManagementMethods/');
};

SessionManagement.prototype.getSessionManagementMethodConfigParams = function (methodname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/sessionManagement/view/getSessionManagementMethodConfigParams/', {'methodName' : methodname}, callback);
    return;
  }
  return this.api.requestPromise('/sessionManagement/view/getSessionManagementMethodConfigParams/', {'methodName' : methodname});
};

SessionManagement.prototype.getSessionManagementMethod = function (contextid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/sessionManagement/view/getSessionManagementMethod/', {'contextId' : contextid}, callback);
    return;
  }
  return this.api.requestPromise('/sessionManagement/view/getSessionManagementMethod/', {'contextId' : contextid});
};

SessionManagement.prototype.setSessionManagementMethod = function (contextid, methodname, methodconfigparams, callback) {
  const params = {'contextId' : contextid, 'methodName' : methodname};
  if (methodconfigparams && methodconfigparams !== null) {
    params['methodConfigParams'] = methodconfigparams;
  }
  if (typeof callback === 'function') {
    this.api.request('/sessionManagement/action/setSessionManagementMethod/', params, callback);
    return;
  }
  return this.api.requestPromise('/sessionManagement/action/setSessionManagementMethod/', params);
};

module.exports = SessionManagement;
