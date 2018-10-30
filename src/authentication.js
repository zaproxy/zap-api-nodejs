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
function Authentication(clientApi) {
  this.api = clientApi;
}

Authentication.prototype.getSupportedAuthenticationMethods = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/authentication/view/getSupportedAuthenticationMethods/', callback);
    return;
  }
  return this.api.requestPromise('/authentication/view/getSupportedAuthenticationMethods/');
};

Authentication.prototype.getAuthenticationMethodConfigParams = function (authmethodname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/authentication/view/getAuthenticationMethodConfigParams/', {'authMethodName' : authmethodname}, callback);
    return;
  }
  return this.api.requestPromise('/authentication/view/getAuthenticationMethodConfigParams/', {'authMethodName' : authmethodname});
};

Authentication.prototype.getAuthenticationMethod = function (contextid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/authentication/view/getAuthenticationMethod/', {'contextId' : contextid}, callback);
    return;
  }
  return this.api.requestPromise('/authentication/view/getAuthenticationMethod/', {'contextId' : contextid});
};

Authentication.prototype.getLoggedInIndicator = function (contextid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/authentication/view/getLoggedInIndicator/', {'contextId' : contextid}, callback);
    return;
  }
  return this.api.requestPromise('/authentication/view/getLoggedInIndicator/', {'contextId' : contextid});
};

Authentication.prototype.getLoggedOutIndicator = function (contextid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/authentication/view/getLoggedOutIndicator/', {'contextId' : contextid}, callback);
    return;
  }
  return this.api.requestPromise('/authentication/view/getLoggedOutIndicator/', {'contextId' : contextid});
};

Authentication.prototype.setAuthenticationMethod = function (contextid, authmethodname, authmethodconfigparams, callback) {
  const params = {'contextId' : contextid, 'authMethodName' : authmethodname};
  if (authmethodconfigparams && authmethodconfigparams !== null) {
    params['authMethodConfigParams'] = authmethodconfigparams;
  }
  if (typeof callback === 'function') {
    this.api.request('/authentication/action/setAuthenticationMethod/', params, callback);
    return;
  }
  return this.api.requestPromise('/authentication/action/setAuthenticationMethod/', params);
};

Authentication.prototype.setLoggedInIndicator = function (contextid, loggedinindicatorregex, callback) {
  if (typeof callback === 'function') {
    this.api.request('/authentication/action/setLoggedInIndicator/', {'contextId' : contextid, 'loggedInIndicatorRegex' : loggedinindicatorregex}, callback);
    return;
  }
  return this.api.requestPromise('/authentication/action/setLoggedInIndicator/', {'contextId' : contextid, 'loggedInIndicatorRegex' : loggedinindicatorregex});
};

Authentication.prototype.setLoggedOutIndicator = function (contextid, loggedoutindicatorregex, callback) {
  if (typeof callback === 'function') {
    this.api.request('/authentication/action/setLoggedOutIndicator/', {'contextId' : contextid, 'loggedOutIndicatorRegex' : loggedoutindicatorregex}, callback);
    return;
  }
  return this.api.requestPromise('/authentication/action/setLoggedOutIndicator/', {'contextId' : contextid, 'loggedOutIndicatorRegex' : loggedoutindicatorregex});
};

module.exports = Authentication;
