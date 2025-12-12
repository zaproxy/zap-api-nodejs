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
function Postman (clientApi) {
  this.api = clientApi
}

/**
 * Imports a Postman collection from a file.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} file - The path to the file to be imported.
 **/
Postman.prototype.importFile = function (args) {
  return this.api.request('/postman/action/importFile/', { file: args.file })
}

/**
 * Imports a Postman collection from a URL.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} url - The URL from which to retrieve the collection to be imported.
 **/
Postman.prototype.importUrl = function (args) {
  return this.api.request('/postman/action/importUrl/', { url: args.url })
}

module.exports = Postman
