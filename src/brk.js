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
function Break(clientApi) {
  this.api = clientApi;
}

/**
 * Returns True if ZAP will break on both requests and responses
 **/
Break.prototype.isBreakAll = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/view/isBreakAll/', callback);
    return;
  }
  return this.api.requestPromise('/break/view/isBreakAll/');
};

/**
 * Returns True if ZAP will break on requests
 **/
Break.prototype.isBreakRequest = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/view/isBreakRequest/', callback);
    return;
  }
  return this.api.requestPromise('/break/view/isBreakRequest/');
};

/**
 * Returns True if ZAP will break on responses
 **/
Break.prototype.isBreakResponse = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/view/isBreakResponse/', callback);
    return;
  }
  return this.api.requestPromise('/break/view/isBreakResponse/');
};

/**
 * Returns the HTTP message currently intercepted (if any)
 **/
Break.prototype.httpMessage = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/view/httpMessage/', callback);
    return;
  }
  return this.api.requestPromise('/break/view/httpMessage/');
};

/**
 * Controls the global break functionality. The type may be one of: http-all, http-request or http-response. The state may be true (for turning break on for the specified type) or false (for turning break off). Scope is not currently used.
 **/
Break.prototype.brk = function (type, state, scope, callback) {
  const params = {'type' : type, 'state' : state};
  if (scope && scope !== null) {
    params['scope'] = scope;
  }
  if (typeof callback === 'function') {
    this.api.request('/break/action/break/', params, callback);
    return;
  }
  return this.api.requestPromise('/break/action/break/', params);
};

/**
 * Overwrites the currently intercepted message with the data provided
 **/
Break.prototype.setHttpMessage = function (httpheader, httpbody, callback) {
  const params = {'httpHeader' : httpheader};
  if (httpbody && httpbody !== null) {
    params['httpBody'] = httpbody;
  }
  if (typeof callback === 'function') {
    this.api.request('/break/action/setHttpMessage/', params, callback);
    return;
  }
  return this.api.requestPromise('/break/action/setHttpMessage/', params);
};

/**
 * Submits the currently intercepted message and unsets the global request/response break points
 **/
Break.prototype.cont = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/action/continue/', callback);
    return;
  }
  return this.api.requestPromise('/break/action/continue/');
};

/**
 * Submits the currently intercepted message, the next request or response will automatically be intercepted
 **/
Break.prototype.step = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/action/step/', callback);
    return;
  }
  return this.api.requestPromise('/break/action/step/');
};

/**
 * Drops the currently intercepted message
 **/
Break.prototype.drop = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/action/drop/', callback);
    return;
  }
  return this.api.requestPromise('/break/action/drop/');
};

/**
 * Adds a custom HTTP breakpont. The string is the string to match. Location may be one of: url, request_header, request_body, response_header or response_body. Match may be: contains or regex. Inverse (match) may be true or false. Lastly, ignorecase (when matching the string) may be true or false.  
 **/
Break.prototype.addHttpBreakpoint = function (string, location, match, inverse, ignorecase, callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/action/addHttpBreakpoint/', {'string' : string, 'location' : location, 'match' : match, 'inverse' : inverse, 'ignorecase' : ignorecase}, callback);
    return;
  }
  return this.api.requestPromise('/break/action/addHttpBreakpoint/', {'string' : string, 'location' : location, 'match' : match, 'inverse' : inverse, 'ignorecase' : ignorecase});
};

/**
 * Removes the specified break point
 **/
Break.prototype.removeHttpBreakpoint = function (string, location, match, inverse, ignorecase, callback) {
  if (typeof callback === 'function') {
    this.api.request('/break/action/removeHttpBreakpoint/', {'string' : string, 'location' : location, 'match' : match, 'inverse' : inverse, 'ignorecase' : ignorecase}, callback);
    return;
  }
  return this.api.requestPromise('/break/action/removeHttpBreakpoint/', {'string' : string, 'location' : location, 'match' : match, 'inverse' : inverse, 'ignorecase' : ignorecase});
};

module.exports = Break;
