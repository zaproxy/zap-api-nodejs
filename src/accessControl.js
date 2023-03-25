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
function AccessControl (clientApi) {
  this.api = clientApi
}

/**
 * Gets the Access Control scan progress (percentage integer) for the given context ID.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} contextid
 **/
AccessControl.prototype.getScanProgress = function (args) {
  return this.api.request('/accessControl/view/getScanProgress/', { contextId: args.contextid })
}

/**
 * Gets the Access Control scan status (description string) for the given context ID.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} contextid
 **/
AccessControl.prototype.getScanStatus = function (args) {
  return this.api.request('/accessControl/view/getScanStatus/', { contextId: args.contextid })
}

/**
 * Starts an Access Control scan with the given context ID and user ID. (Optional parameters: user ID for Unauthenticated user, boolean identifying whether or not Alerts are raised, and the Risk level for the Alerts.) [This assumes the Access Control rules were previously established via ZAP gui and the necessary Context exported/imported.]
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} contextid
 * @param {string} userid
 * @param {string} scanasunauthuser
 * @param {string} raisealert
 * @param {string} alertrisklevel
 **/
AccessControl.prototype.scan = function (args) {
  const params = { contextId: args.contextid, userId: args.userid }
  if (args.scanasunauthuser && args.scanasunauthuser !== null) {
    params.scanAsUnAuthUser = args.scanasunauthuser
  }
  if (args.raisealert && args.raisealert !== null) {
    params.raiseAlert = args.raisealert
  }
  if (args.alertrisklevel && args.alertrisklevel !== null) {
    params.alertRiskLevel = args.alertrisklevel
  }
  return this.api.request('/accessControl/action/scan/', params)
}

/**
 * Generates an Access Control report for the given context ID and saves it based on the provided filename (path).
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} contextid
 * @param {string} filename
 **/
AccessControl.prototype.writeHTMLreport = function (args) {
  return this.api.request('/accessControl/action/writeHTMLreport/', { contextId: args.contextid, fileName: args.filename })
}

module.exports = AccessControl
