/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2025 the ZAP development team
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
function Client (clientApi) {
  this.api = clientApi
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Client.prototype.reportObject = function (args) {
  return this.api.request('/client/action/reportObject/', { objectJson: args.objectjson })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Client.prototype.reportEvent = function (args) {
  return this.api.request('/client/action/reportEvent/', { eventJson: args.eventjson })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Client.prototype.reportZestStatement = function (args) {
  return this.api.request('/client/action/reportZestStatement/', { statementJson: args.statementjson })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Client.prototype.reportZestScript = function (args) {
  return this.api.request('/client/action/reportZestScript/', { scriptJson: args.scriptjson })
}

/**
 * Exports the Client Map to a file.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} pathyaml - The file system path to the file.
 **/
Client.prototype.exportClientMap = function (args) {
  return this.api.request('/client/action/exportClientMap/', { pathYaml: args.pathyaml })
}

module.exports = Client
