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
function Ascan (clientApi) {
  this.api = clientApi
}

/**
 *
 * @param {string} scanid
 **/
Ascan.prototype.status = function (args) {
  const params = { }
  if (args.scanid && args.scanid !== null) {
    params.scanId = args.scanid
  }
  return this.api.request('/ascan/view/status/', params)
}

/**
 *
 * @param {string} scanid
 **/
Ascan.prototype.scanProgress = function (args) {
  const params = { }
  if (args.scanid && args.scanid !== null) {
    params.scanId = args.scanid
  }
  return this.api.request('/ascan/view/scanProgress/', params)
}

/**
 * Gets the IDs of the messages sent during the scan with the given ID. A message can be obtained with 'message' core view.
 * @param {string} scanid
 **/
Ascan.prototype.messagesIds = function (args) {
  return this.api.request('/ascan/view/messagesIds/', { scanId: args.scanid })
}

/**
 * Gets the IDs of the alerts raised during the scan with the given ID. An alert can be obtained with 'alert' core view.
 * @param {string} scanid
 **/
Ascan.prototype.alertsIds = function (args) {
  return this.api.request('/ascan/view/alertsIds/', { scanId: args.scanid })
}

/**
 *
 **/
Ascan.prototype.scans = function () {
  return this.api.request('/ascan/view/scans/')
}

/**
 *
 **/
Ascan.prototype.scanPolicyNames = function () {
  return this.api.request('/ascan/view/scanPolicyNames/')
}

/**
 * Gets the regexes of URLs excluded from the active scans.
 **/
Ascan.prototype.excludedFromScan = function () {
  return this.api.request('/ascan/view/excludedFromScan/')
}

/**
 * Gets the scan rules, optionally, of the given scan policy or scanner policy/category ID.
 * @param {string} scanpolicyname
 * @param {string} policyid
 **/
Ascan.prototype.scanners = function (args) {
  const params = { }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  if (args.policyid && args.policyid !== null) {
    params.policyId = args.policyid
  }
  return this.api.request('/ascan/view/scanners/', params)
}

/**
 *
 * @param {string} scanpolicyname
 * @param {string} policyid
 **/
Ascan.prototype.policies = function (args) {
  const params = { }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  if (args.policyid && args.policyid !== null) {
    params.policyId = args.policyid
  }
  return this.api.request('/ascan/view/policies/', params)
}

/**
 *
 **/
Ascan.prototype.attackModeQueue = function () {
  return this.api.request('/ascan/view/attackModeQueue/')
}

/**
 * Gets all the parameters that are excluded. For each parameter the following are shown: the name, the URL, and the parameter type.
 **/
Ascan.prototype.excludedParams = function () {
  return this.api.request('/ascan/view/excludedParams/')
}

/**
 * Use view excludedParams instead.
 **/
Ascan.prototype.optionExcludedParamList = function () {
  return this.api.request('/ascan/view/optionExcludedParamList/')
}

/**
 * Gets all the types of excluded parameters. For each type the following are shown: the ID and the name.
 **/
Ascan.prototype.excludedParamTypes = function () {
  return this.api.request('/ascan/view/excludedParamTypes/')
}

/**
 *
 **/
Ascan.prototype.optionAttackPolicy = function () {
  return this.api.request('/ascan/view/optionAttackPolicy/')
}

/**
 *
 **/
Ascan.prototype.optionDefaultPolicy = function () {
  return this.api.request('/ascan/view/optionDefaultPolicy/')
}

/**
 *
 **/
Ascan.prototype.optionDelayInMs = function () {
  return this.api.request('/ascan/view/optionDelayInMs/')
}

/**
 *
 **/
Ascan.prototype.optionHandleAntiCSRFTokens = function () {
  return this.api.request('/ascan/view/optionHandleAntiCSRFTokens/')
}

/**
 *
 **/
Ascan.prototype.optionHostPerScan = function () {
  return this.api.request('/ascan/view/optionHostPerScan/')
}

/**
 * Gets the maximum number of alerts that a rule can raise before being skipped.
 **/
Ascan.prototype.optionMaxAlertsPerRule = function () {
  return this.api.request('/ascan/view/optionMaxAlertsPerRule/')
}

/**
 *
 **/
Ascan.prototype.optionMaxChartTimeInMins = function () {
  return this.api.request('/ascan/view/optionMaxChartTimeInMins/')
}

/**
 *
 **/
Ascan.prototype.optionMaxResultsToList = function () {
  return this.api.request('/ascan/view/optionMaxResultsToList/')
}

/**
 *
 **/
Ascan.prototype.optionMaxRuleDurationInMins = function () {
  return this.api.request('/ascan/view/optionMaxRuleDurationInMins/')
}

/**
 *
 **/
Ascan.prototype.optionMaxScanDurationInMins = function () {
  return this.api.request('/ascan/view/optionMaxScanDurationInMins/')
}

/**
 *
 **/
Ascan.prototype.optionMaxScansInUI = function () {
  return this.api.request('/ascan/view/optionMaxScansInUI/')
}

/**
 *
 **/
Ascan.prototype.optionTargetParamsEnabledRPC = function () {
  return this.api.request('/ascan/view/optionTargetParamsEnabledRPC/')
}

/**
 *
 **/
Ascan.prototype.optionTargetParamsInjectable = function () {
  return this.api.request('/ascan/view/optionTargetParamsInjectable/')
}

/**
 *
 **/
Ascan.prototype.optionThreadPerHost = function () {
  return this.api.request('/ascan/view/optionThreadPerHost/')
}

/**
 * Tells whether or not the active scanner should add a query parameter to GET request that don't have parameters to start with.
 **/
Ascan.prototype.optionAddQueryParam = function () {
  return this.api.request('/ascan/view/optionAddQueryParam/')
}

/**
 *
 **/
Ascan.prototype.optionAllowAttackOnStart = function () {
  return this.api.request('/ascan/view/optionAllowAttackOnStart/')
}

/**
 * Tells whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scan rule that's sending the requests.
 **/
Ascan.prototype.optionInjectPluginIdInHeader = function () {
  return this.api.request('/ascan/view/optionInjectPluginIdInHeader/')
}

/**
 *
 **/
Ascan.prototype.optionPromptInAttackMode = function () {
  return this.api.request('/ascan/view/optionPromptInAttackMode/')
}

/**
 *
 **/
Ascan.prototype.optionPromptToClearFinishedScans = function () {
  return this.api.request('/ascan/view/optionPromptToClearFinishedScans/')
}

/**
 *
 **/
Ascan.prototype.optionRescanInAttackMode = function () {
  return this.api.request('/ascan/view/optionRescanInAttackMode/')
}

/**
 * Tells whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.
 **/
Ascan.prototype.optionScanHeadersAllRequests = function () {
  return this.api.request('/ascan/view/optionScanHeadersAllRequests/')
}

/**
 * Tells whether or not the active scanner should scan null JSON values.
 **/
Ascan.prototype.optionScanNullJsonValues = function () {
  return this.api.request('/ascan/view/optionScanNullJsonValues/')
}

/**
 *
 **/
Ascan.prototype.optionShowAdvancedDialog = function () {
  return this.api.request('/ascan/view/optionShowAdvancedDialog/')
}

/**
 * Runs the active scanner against the given URL or Context. Optionally, the 'recurse' parameter can be used to scan URLs under the given URL, the parameter 'inScopeOnly' can be used to constrain the scan to URLs that are in scope (ignored if a Context is specified), the parameter 'scanPolicyName' allows to specify the scan policy (if none is given it uses the default scan policy), the parameters 'method' and 'postData' allow to select a given request in conjunction with the given URL.
 * @param {string} url
 * @param {string} recurse
 * @param {string} inscopeonly
 * @param {string} scanpolicyname
 * @param {string} method
 * @param {string} postdata
 * @param {string} contextid
 **/
Ascan.prototype.scan = function (args) {
  const params = { }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.recurse && args.recurse !== null) {
    params.recurse = args.recurse
  }
  if (args.inscopeonly && args.inscopeonly !== null) {
    params.inScopeOnly = args.inscopeonly
  }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  if (args.method && args.method !== null) {
    params.method = args.method
  }
  if (args.postdata && args.postdata !== null) {
    params.postData = args.postdata
  }
  if (args.contextid && args.contextid !== null) {
    params.contextId = args.contextid
  }
  return this.api.request('/ascan/action/scan/', params)
}

/**
 * Active Scans from the perspective of a User, obtained using the given Context ID and User ID. See 'scan' action for more details.
 * @param {string} url
 * @param {string} contextid
 * @param {string} userid
 * @param {string} recurse
 * @param {string} scanpolicyname
 * @param {string} method
 * @param {string} postdata
 **/
Ascan.prototype.scanAsUser = function (args) {
  const params = { }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.contextid && args.contextid !== null) {
    params.contextId = args.contextid
  }
  if (args.userid && args.userid !== null) {
    params.userId = args.userid
  }
  if (args.recurse && args.recurse !== null) {
    params.recurse = args.recurse
  }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  if (args.method && args.method !== null) {
    params.method = args.method
  }
  if (args.postdata && args.postdata !== null) {
    params.postData = args.postdata
  }
  return this.api.request('/ascan/action/scanAsUser/', params)
}

/**
 *
 * @param {string} scanid
 **/
Ascan.prototype.pause = function (args) {
  return this.api.request('/ascan/action/pause/', { scanId: args.scanid })
}

/**
 *
 * @param {string} scanid
 **/
Ascan.prototype.resume = function (args) {
  return this.api.request('/ascan/action/resume/', { scanId: args.scanid })
}

/**
 *
 * @param {string} scanid
 **/
Ascan.prototype.stop = function (args) {
  return this.api.request('/ascan/action/stop/', { scanId: args.scanid })
}

/**
 *
 * @param {string} scanid
 **/
Ascan.prototype.removeScan = function (args) {
  return this.api.request('/ascan/action/removeScan/', { scanId: args.scanid })
}

/**
 *
 **/
Ascan.prototype.pauseAllScans = function () {
  return this.api.request('/ascan/action/pauseAllScans/')
}

/**
 *
 **/
Ascan.prototype.resumeAllScans = function () {
  return this.api.request('/ascan/action/resumeAllScans/')
}

/**
 *
 **/
Ascan.prototype.stopAllScans = function () {
  return this.api.request('/ascan/action/stopAllScans/')
}

/**
 *
 **/
Ascan.prototype.removeAllScans = function () {
  return this.api.request('/ascan/action/removeAllScans/')
}

/**
 * Clears the regexes of URLs excluded from the active scans.
 **/
Ascan.prototype.clearExcludedFromScan = function () {
  return this.api.request('/ascan/action/clearExcludedFromScan/')
}

/**
 * Adds a regex of URLs that should be excluded from the active scans.
 * @param {string} regex
 **/
Ascan.prototype.excludeFromScan = function (args) {
  return this.api.request('/ascan/action/excludeFromScan/', { regex: args.regex })
}

/**
 * Enables all scan rules of the scan policy with the given name, or the default if none given.
 * @param {string} scanpolicyname
 **/
Ascan.prototype.enableAllScanners = function (args) {
  const params = { }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/enableAllScanners/', params)
}

/**
 * Disables all scan rules of the scan policy with the given name, or the default if none given.
 * @param {string} scanpolicyname
 **/
Ascan.prototype.disableAllScanners = function (args) {
  const params = { }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/disableAllScanners/', params)
}

/**
 * Enables the scan rules with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.enableScanners = function (args) {
  const params = { ids: args.ids }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/enableScanners/', params)
}

/**
 * Disables the scan rules with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.disableScanners = function (args) {
  const params = { ids: args.ids }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/disableScanners/', params)
}

/**
 *
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setEnabledPolicies = function (args) {
  const params = { ids: args.ids }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/setEnabledPolicies/', params)
}

/**
 *
 * @param {string} id
 * @param {string} attackstrength
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setPolicyAttackStrength = function (args) {
  const params = { id: args.id, attackStrength: args.attackstrength }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/setPolicyAttackStrength/', params)
}

/**
 *
 * @param {string} id
 * @param {string} alertthreshold
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setPolicyAlertThreshold = function (args) {
  const params = { id: args.id, alertThreshold: args.alertthreshold }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/setPolicyAlertThreshold/', params)
}

/**
 *
 * @param {string} id
 * @param {string} attackstrength
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setScannerAttackStrength = function (args) {
  const params = { id: args.id, attackStrength: args.attackstrength }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/setScannerAttackStrength/', params)
}

/**
 *
 * @param {string} id
 * @param {string} alertthreshold
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setScannerAlertThreshold = function (args) {
  const params = { id: args.id, alertThreshold: args.alertthreshold }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params.scanPolicyName = args.scanpolicyname
  }
  return this.api.request('/ascan/action/setScannerAlertThreshold/', params)
}

/**
 *
 * @param {string} scanpolicyname
 * @param {string} alertthreshold
 * @param {string} attackstrength
 **/
Ascan.prototype.addScanPolicy = function (args) {
  const params = { scanPolicyName: args.scanpolicyname }
  if (args.alertthreshold && args.alertthreshold !== null) {
    params.alertThreshold = args.alertthreshold
  }
  if (args.attackstrength && args.attackstrength !== null) {
    params.attackStrength = args.attackstrength
  }
  return this.api.request('/ascan/action/addScanPolicy/', params)
}

/**
 *
 * @param {string} scanpolicyname
 **/
Ascan.prototype.removeScanPolicy = function (args) {
  return this.api.request('/ascan/action/removeScanPolicy/', { scanPolicyName: args.scanpolicyname })
}

/**
 *
 * @param {string} scanpolicyname
 * @param {string} alertthreshold
 * @param {string} attackstrength
 **/
Ascan.prototype.updateScanPolicy = function (args) {
  const params = { scanPolicyName: args.scanpolicyname }
  if (args.alertthreshold && args.alertthreshold !== null) {
    params.alertThreshold = args.alertthreshold
  }
  if (args.attackstrength && args.attackstrength !== null) {
    params.attackStrength = args.attackstrength
  }
  return this.api.request('/ascan/action/updateScanPolicy/', params)
}

/**
 * Imports a Scan Policy using the given file system path.
 * @param {string} path
 **/
Ascan.prototype.importScanPolicy = function (args) {
  return this.api.request('/ascan/action/importScanPolicy/', { path: args.path })
}

/**
 * Adds a new parameter excluded from the scan, using the specified name. Optionally sets if the new entry applies to a specific URL (default, all URLs) and sets the ID of the type of the parameter (default, ID of any type). The type IDs can be obtained with the view excludedParamTypes.
 * @param {string} name
 * @param {string} type
 * @param {string} url
 **/
Ascan.prototype.addExcludedParam = function (args) {
  const params = { name: args.name }
  if (args.type && args.type !== null) {
    params.type = args.type
  }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  return this.api.request('/ascan/action/addExcludedParam/', params)
}

/**
 * Modifies a parameter excluded from the scan. Allows to modify the name, the URL and the type of parameter. The parameter is selected with its index, which can be obtained with the view excludedParams.
 * @param {string} idx
 * @param {string} name
 * @param {string} type
 * @param {string} url
 **/
Ascan.prototype.modifyExcludedParam = function (args) {
  const params = { idx: args.idx }
  if (args.name && args.name !== null) {
    params.name = args.name
  }
  if (args.type && args.type !== null) {
    params.type = args.type
  }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  return this.api.request('/ascan/action/modifyExcludedParam/', params)
}

/**
 * Removes a parameter excluded from the scan, with the given index. The index can be obtained with the view excludedParams.
 * @param {string} idx
 **/
Ascan.prototype.removeExcludedParam = function (args) {
  return this.api.request('/ascan/action/removeExcludedParam/', { idx: args.idx })
}

/**
 * Skips the scan rule using the given IDs of the scan and the scan rule.
 * @param {string} scanid
 * @param {string} scannerid
 **/
Ascan.prototype.skipScanner = function (args) {
  return this.api.request('/ascan/action/skipScanner/', { scanId: args.scanid, scannerId: args.scannerid })
}

/**
 *
 * @param {string} string
 **/
Ascan.prototype.setOptionAttackPolicy = function (args) {
  return this.api.request('/ascan/action/setOptionAttackPolicy/', { String: args.string })
}

/**
 *
 * @param {string} string
 **/
Ascan.prototype.setOptionDefaultPolicy = function (args) {
  return this.api.request('/ascan/action/setOptionDefaultPolicy/', { String: args.string })
}

/**
 * Sets whether or not the active scanner should add a query param to GET requests which do not have parameters to start with.
 * @param {string} bool
 **/
Ascan.prototype.setOptionAddQueryParam = function (args) {
  return this.api.request('/ascan/action/setOptionAddQueryParam/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Ascan.prototype.setOptionAllowAttackOnStart = function (args) {
  return this.api.request('/ascan/action/setOptionAllowAttackOnStart/', { Boolean: args.bool })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionDelayInMs = function (args) {
  return this.api.request('/ascan/action/setOptionDelayInMs/', { Integer: args.integer })
}

/**
 *
 * @param {string} bool
 **/
Ascan.prototype.setOptionHandleAntiCSRFTokens = function (args) {
  return this.api.request('/ascan/action/setOptionHandleAntiCSRFTokens/', { Boolean: args.bool })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionHostPerScan = function (args) {
  return this.api.request('/ascan/action/setOptionHostPerScan/', { Integer: args.integer })
}

/**
 * Sets whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scan rule that's sending the requests.
 * @param {string} bool
 **/
Ascan.prototype.setOptionInjectPluginIdInHeader = function (args) {
  return this.api.request('/ascan/action/setOptionInjectPluginIdInHeader/', { Boolean: args.bool })
}

/**
 * Sets the maximum number of alerts that a rule can raise before being skipped.
 * @param {string} integer - The maximum alerts.
 **/
Ascan.prototype.setOptionMaxAlertsPerRule = function (args) {
  return this.api.request('/ascan/action/setOptionMaxAlertsPerRule/', { Integer: args.integer })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxChartTimeInMins = function (args) {
  return this.api.request('/ascan/action/setOptionMaxChartTimeInMins/', { Integer: args.integer })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxResultsToList = function (args) {
  return this.api.request('/ascan/action/setOptionMaxResultsToList/', { Integer: args.integer })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxRuleDurationInMins = function (args) {
  return this.api.request('/ascan/action/setOptionMaxRuleDurationInMins/', { Integer: args.integer })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxScanDurationInMins = function (args) {
  return this.api.request('/ascan/action/setOptionMaxScanDurationInMins/', { Integer: args.integer })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxScansInUI = function (args) {
  return this.api.request('/ascan/action/setOptionMaxScansInUI/', { Integer: args.integer })
}

/**
 *
 * @param {string} bool
 **/
Ascan.prototype.setOptionPromptInAttackMode = function (args) {
  return this.api.request('/ascan/action/setOptionPromptInAttackMode/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Ascan.prototype.setOptionPromptToClearFinishedScans = function (args) {
  return this.api.request('/ascan/action/setOptionPromptToClearFinishedScans/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Ascan.prototype.setOptionRescanInAttackMode = function (args) {
  return this.api.request('/ascan/action/setOptionRescanInAttackMode/', { Boolean: args.bool })
}

/**
 * Sets whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.
 * @param {string} bool
 **/
Ascan.prototype.setOptionScanHeadersAllRequests = function (args) {
  return this.api.request('/ascan/action/setOptionScanHeadersAllRequests/', { Boolean: args.bool })
}

/**
 * Sets whether or not the active scanner should scan null JSON values.
 * @param {string} bool - true to scan null values, false otherwise.
 **/
Ascan.prototype.setOptionScanNullJsonValues = function (args) {
  return this.api.request('/ascan/action/setOptionScanNullJsonValues/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Ascan.prototype.setOptionShowAdvancedDialog = function (args) {
  return this.api.request('/ascan/action/setOptionShowAdvancedDialog/', { Boolean: args.bool })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionTargetParamsEnabledRPC = function (args) {
  return this.api.request('/ascan/action/setOptionTargetParamsEnabledRPC/', { Integer: args.integer })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionTargetParamsInjectable = function (args) {
  return this.api.request('/ascan/action/setOptionTargetParamsInjectable/', { Integer: args.integer })
}

/**
 *
 * @param {string} integer
 **/
Ascan.prototype.setOptionThreadPerHost = function (args) {
  return this.api.request('/ascan/action/setOptionThreadPerHost/', { Integer: args.integer })
}

module.exports = Ascan
