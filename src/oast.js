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
function Oast (clientApi) {
  this.api = clientApi
}

/**
 * Gets the service used with the active scanner, if any.
 * This component is optional and therefore the API will only work if it is installed
 **/
Oast.prototype.getActiveScanService = function () {
  return this.api.request('/oast/view/getActiveScanService/')
}

/**
 * Gets all of the services.
 * This component is optional and therefore the API will only work if it is installed
 **/
Oast.prototype.getServices = function () {
  return this.api.request('/oast/view/getServices/')
}

/**
 * Gets the BOAST options.
 * This component is optional and therefore the API will only work if it is installed
 **/
Oast.prototype.getBoastOptions = function () {
  return this.api.request('/oast/view/getBoastOptions/')
}

/**
 * Gets the Callback options.
 * This component is optional and therefore the API will only work if it is installed
 **/
Oast.prototype.getCallbackOptions = function () {
  return this.api.request('/oast/view/getCallbackOptions/')
}

/**
 * Gets the Interactsh options.
 * This component is optional and therefore the API will only work if it is installed
 **/
Oast.prototype.getInteractshOptions = function () {
  return this.api.request('/oast/view/getInteractshOptions/')
}

/**
 * Gets the number of days the OAST records will be kept for.
 * This component is optional and therefore the API will only work if it is installed
 **/
Oast.prototype.getDaysToKeepRecords = function () {
  return this.api.request('/oast/view/getDaysToKeepRecords/')
}

/**
 * Sets the service used with the active scanner.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} name - The name of the service.
 **/
Oast.prototype.setActiveScanService = function (args) {
  return this.api.request('/oast/action/setActiveScanService/', { name: args.name })
}

/**
 * Sets the BOAST options.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} server - The server URL.
 * @param {string} pollinsecs - The polling frequency.
 **/
Oast.prototype.setBoastOptions = function (args) {
  return this.api.request('/oast/action/setBoastOptions/', { server: args.server, pollInSecs: args.pollinsecs })
}

/**
 * Sets the Callback options.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} localaddress - The local address
 * @param {string} remoteaddress - The remote address.
 * @param {string} port - The port to listen on.
 **/
Oast.prototype.setCallbackOptions = function (args) {
  return this.api.request('/oast/action/setCallbackOptions/', { localAddress: args.localaddress, remoteAddress: args.remoteaddress, port: args.port })
}

/**
 * Sets the Interactsh options.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} server - The server URL.
 * @param {string} pollinsecs - The polling frequency.
 * @param {string} authtoken - The Interactsh authentication token.
 **/
Oast.prototype.setInteractshOptions = function (args) {
  return this.api.request('/oast/action/setInteractshOptions/', { server: args.server, pollInSecs: args.pollinsecs, authToken: args.authtoken })
}

/**
 * Sets the number of days the OAST records will be kept for.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} days - The number of days.
 **/
Oast.prototype.setDaysToKeepRecords = function (args) {
  return this.api.request('/oast/action/setDaysToKeepRecords/', { days: args.days })
}

module.exports = Oast
