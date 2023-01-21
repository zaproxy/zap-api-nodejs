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
function Openapi(clientApi) {
  this.api = clientApi;
}

/**
 * Imports an OpenAPI definition from a local file.
 * This component is optional and therefore the API will only work if it is installed
 **/
Openapi.prototype.importFile = function (file, target, contextid, callback) {
  const params = {'file': file};
  if (target && target !== null) {
    params['target'] = target;
  }
  if (contextid && contextid !== null) {
    params['contextId'] = contextid;
  }
  if (typeof callback === 'function') {
    this.api.request('/openapi/action/importFile/', params, callback);
    return;
  }
  return this.api.requestPromise('/openapi/action/importFile/', params);
};

/**
 * Imports an OpenAPI definition from a URL.
 * This component is optional and therefore the API will only work if it is installed
 **/
Openapi.prototype.importUrl = function (url, hostoverride, contextid, callback) {
  const params = {'url': url};
  if (hostoverride && hostoverride !== null) {
    params['hostOverride'] = hostoverride;
  }
  if (contextid && contextid !== null) {
    params['contextId'] = contextid;
  }
  if (typeof callback === 'function') {
    this.api.request('/openapi/action/importUrl/', params, callback);
    return;
  }
  return this.api.requestPromise('/openapi/action/importUrl/', params);
};

module.exports = Openapi;
