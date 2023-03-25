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
function Exim (clientApi) {
  this.api = clientApi
}

/**
 * Imports a HAR file.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} filepath
 **/
Exim.prototype.importHar = function (args) {
  return this.api.request('/exim/action/importHar/', { filePath: args.filepath })
}

/**
 * Imports URLs (one per line) from the file with the given file system path.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} filepath
 **/
Exim.prototype.importUrls = function (args) {
  return this.api.request('/exim/action/importUrls/', { filePath: args.filepath })
}

/**
 * Imports previously exported ZAP messages from the file with the given file system path.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} filepath
 **/
Exim.prototype.importZapLogs = function (args) {
  return this.api.request('/exim/action/importZapLogs/', { filePath: args.filepath })
}

/**
 * Imports ModSecurity2 logs from the file with the given file system path.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} filepath
 **/
Exim.prototype.importModsec2Logs = function (args) {
  return this.api.request('/exim/action/importModsec2Logs/', { filePath: args.filepath })
}

/**
 * Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} baseurl - The URL below which messages should be included.
 * @param {string} start - The position (or offset) within the results to use as a starting position for the information returned.
 * @param {string} count - The number of results to return.
 **/
Exim.prototype.exportHar = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  if (args.start && args.start !== null) {
    params.start = args.start
  }
  if (args.count && args.count !== null) {
    params.count = args.count
  }
  return this.api.request('/exim/other/exportHar/', params, 'other')
}

/**
 * Gets the HTTP messages with the given IDs, in HAR format.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} ids - The ID (number(s)) of the message(s) to be returned.
 **/
Exim.prototype.exportHarById = function (args) {
  return this.api.request('/exim/other/exportHarById/', { ids: args.ids }, 'other')
}

/**
 * Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} request - The raw JSON of a HAR request.
 * @param {string} followredirects - True if redirects should be followed, false otherwise.
 **/
Exim.prototype.sendHarRequest = function (args) {
  const params = { request: args.request }
  if (args.followredirects && args.followredirects !== null) {
    params.followRedirects = args.followredirects
  }
  return this.api.request('/exim/other/sendHarRequest/', params, 'other')
}

module.exports = Exim
