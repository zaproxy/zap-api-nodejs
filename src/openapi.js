/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2023 the ZAP development team
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

'use strict'

/**
 * This file was automatically generated.
 */
function Openapi (clientApi) {
  this.api = clientApi
}

/**
 * Imports an OpenAPI definition from a local file.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} file - The file that contains the OpenAPI definition.
 * @param {string} target - The Target URL to override the server URL present in the definition.
 * @param {string} contextid
 **/
Openapi.prototype.importFile = function (args) {
  const params = { file: args.file }
  if (args.target && args.target !== null) {
    params.target = args.target
  }
  if (args.contextid && args.contextid !== null) {
    params.contextId = args.contextid
  }
  return this.api.request('/openapi/action/importFile/', params)
}

/**
 * Imports an OpenAPI definition from a URL.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} url - The URL locating the OpenAPI definition.
 * @param {string} hostoverride - The Target URL (called hostOverride for historical reasons) to override the server URL present in the definition.
 * @param {string} contextid
 **/
Openapi.prototype.importUrl = function (args) {
  const params = { url: args.url }
  if (args.hostoverride && args.hostoverride !== null) {
    params.hostOverride = args.hostoverride
  }
  if (args.contextid && args.contextid !== null) {
    params.contextId = args.contextid
  }
  return this.api.request('/openapi/action/importUrl/', params)
}

module.exports = Openapi
