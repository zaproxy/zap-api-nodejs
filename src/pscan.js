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
function Pscan (clientApi) {
  this.api = clientApi
}

/**
 * Tells whether or not the passive scan should be performed only on messages that are in scope.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.scanOnlyInScope = function () {
  return this.api.request('/pscan/view/scanOnlyInScope/')
}

/**
 * The number of records the passive scanner still has to scan.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.recordsToScan = function () {
  return this.api.request('/pscan/view/recordsToScan/')
}

/**
 * Lists all passive scan rules with their ID, name, enabled state, and alert threshold.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.scanners = function () {
  return this.api.request('/pscan/view/scanners/')
}

/**
 * Shows information about the passive scan rule currently being run (if any).
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.currentRule = function () {
  return this.api.request('/pscan/view/currentRule/')
}

/**
 * Shows information about the passive scan tasks currently being run (if any).
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.currentTasks = function () {
  return this.api.request('/pscan/view/currentTasks/')
}

/**
 * Gets the maximum number of alerts a passive scan rule should raise.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.maxAlertsPerRule = function () {
  return this.api.request('/pscan/view/maxAlertsPerRule/')
}

/**
 * Sets whether or not the passive scanning is enabled (Note: the enabled state is not persisted).
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} enabled - The enabled state, true or false.
 **/
Pscan.prototype.setEnabled = function (args) {
  return this.api.request('/pscan/action/setEnabled/', { enabled: args.enabled })
}

/**
 * Sets whether or not the passive scan should be performed only on messages that are in scope.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} onlyinscope - The scan state, true or false.
 **/
Pscan.prototype.setScanOnlyInScope = function (args) {
  return this.api.request('/pscan/action/setScanOnlyInScope/', { onlyInScope: args.onlyinscope })
}

/**
 * Enables all passive scan rules.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.enableAllScanners = function () {
  return this.api.request('/pscan/action/enableAllScanners/')
}

/**
 * Disables all passive scan rules.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.disableAllScanners = function () {
  return this.api.request('/pscan/action/disableAllScanners/')
}

/**
 * Enables passive scan rules.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} ids - A comma separated list of scan rule IDs.
 **/
Pscan.prototype.enableScanners = function (args) {
  return this.api.request('/pscan/action/enableScanners/', { ids: args.ids })
}

/**
 * Disables passive scan rules.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} ids - A comma separated list of scan rule IDs.
 **/
Pscan.prototype.disableScanners = function (args) {
  return this.api.request('/pscan/action/disableScanners/', { ids: args.ids })
}

/**
 * Sets the alert threshold of a passive scan rule.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} id - The ID of the scan rule.
 * @param {string} alertthreshold - The alert threshold: OFF, DEFAULT, LOW, MEDIUM and HIGH
 **/
Pscan.prototype.setScannerAlertThreshold = function (args) {
  return this.api.request('/pscan/action/setScannerAlertThreshold/', { id: args.id, alertThreshold: args.alertthreshold })
}

/**
 * Sets the maximum number of alerts a passive scan rule can raise.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} maxalerts - The maximum number of alerts.
 **/
Pscan.prototype.setMaxAlertsPerRule = function (args) {
  return this.api.request('/pscan/action/setMaxAlertsPerRule/', { maxAlerts: args.maxalerts })
}

/**
 * Disables all passive scan tags.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.disableAllTags = function () {
  return this.api.request('/pscan/action/disableAllTags/')
}

/**
 * Enables all passive scan tags.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.enableAllTags = function () {
  return this.api.request('/pscan/action/enableAllTags/')
}

/**
 * Clears the passive scan queue.
 * This component is optional and therefore the API will only work if it is installed
 **/
Pscan.prototype.clearQueue = function () {
  return this.api.request('/pscan/action/clearQueue/')
}

module.exports = Pscan
