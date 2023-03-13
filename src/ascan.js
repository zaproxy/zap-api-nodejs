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


'use strict';

/**
 * This file was automatically generated.
 */
function Ascan(clientApi) {
  this.api = clientApi;
}
/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.status = async function (args) {
  const params = { };
  if (args.scanid && args.scanid !== null) {
    params['scanId'] = args.scanid;
  }
    return await this.api.request('/ascan/view/status/', params)
}
/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.scanProgress = async function (args) {
  const params = { };
  if (args.scanid && args.scanid !== null) {
    params['scanId'] = args.scanid;
  }
    return await this.api.request('/ascan/view/scanProgress/', params)
}
/**
 * Gets the IDs of the messages sent during the scan with the given ID. A message can be obtained with 'message' core view.
 * @param {string} scanid
 **/
Ascan.prototype.messagesIds = async function (args) {
    return await this.api.request('/ascan/view/messagesIds/', {'scanId': args.scanid })
}
/**
 * Gets the IDs of the alerts raised during the scan with the given ID. An alert can be obtained with 'alert' core view.
 * @param {string} scanid
 **/
Ascan.prototype.alertsIds = async function (args) {
    return await this.api.request('/ascan/view/alertsIds/', {'scanId': args.scanid })
}
/**
 * 
 **/
Ascan.prototype.scans = async function () {
    return await this.api.request('/ascan/view/scans/')
}
/**
 * 
 **/
Ascan.prototype.scanPolicyNames = async function () {
    return await this.api.request('/ascan/view/scanPolicyNames/')
}
/**
 * Gets the regexes of URLs excluded from the active scans.
 **/
Ascan.prototype.excludedFromScan = async function () {
    return await this.api.request('/ascan/view/excludedFromScan/')
}
/**
 * Gets the scan rules, optionally, of the given scan policy or scanner policy/category ID.
 * @param {string} scanpolicyname
 * @param {string} policyid
 **/
Ascan.prototype.scanners = async function (args) {
  const params = { };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (args.policyid && args.policyid !== null) {
    params['policyId'] = args.policyid;
  }
    return await this.api.request('/ascan/view/scanners/', params)
}
/**
 * 
 * @param {string} scanpolicyname
 * @param {string} policyid
 **/
Ascan.prototype.policies = async function (args) {
  const params = { };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (args.policyid && args.policyid !== null) {
    params['policyId'] = args.policyid;
  }
    return await this.api.request('/ascan/view/policies/', params)
}
/**
 * 
 **/
Ascan.prototype.attackModeQueue = async function () {
    return await this.api.request('/ascan/view/attackModeQueue/')
}
/**
 * Gets all the parameters that are excluded. For each parameter the following are shown: the name, the URL, and the parameter type.
 **/
Ascan.prototype.excludedParams = async function () {
    return await this.api.request('/ascan/view/excludedParams/')
}
/**
 * Use view excludedParams instead.
 **/
Ascan.prototype.optionExcludedParamList = async function () {
    return await this.api.request('/ascan/view/optionExcludedParamList/')
}
/**
 * Gets all the types of excluded parameters. For each type the following are shown: the ID and the name.
 **/
Ascan.prototype.excludedParamTypes = async function () {
    return await this.api.request('/ascan/view/excludedParamTypes/')
}
/**
 * 
 **/
Ascan.prototype.optionAttackPolicy = async function () {
    return await this.api.request('/ascan/view/optionAttackPolicy/')
}
/**
 * 
 **/
Ascan.prototype.optionDefaultPolicy = async function () {
    return await this.api.request('/ascan/view/optionDefaultPolicy/')
}
/**
 * 
 **/
Ascan.prototype.optionDelayInMs = async function () {
    return await this.api.request('/ascan/view/optionDelayInMs/')
}
/**
 * 
 **/
Ascan.prototype.optionHandleAntiCSRFTokens = async function () {
    return await this.api.request('/ascan/view/optionHandleAntiCSRFTokens/')
}
/**
 * 
 **/
Ascan.prototype.optionHostPerScan = async function () {
    return await this.api.request('/ascan/view/optionHostPerScan/')
}
/**
 * 
 **/
Ascan.prototype.optionMaxChartTimeInMins = async function () {
    return await this.api.request('/ascan/view/optionMaxChartTimeInMins/')
}
/**
 * 
 **/
Ascan.prototype.optionMaxResultsToList = async function () {
    return await this.api.request('/ascan/view/optionMaxResultsToList/')
}
/**
 * 
 **/
Ascan.prototype.optionMaxRuleDurationInMins = async function () {
    return await this.api.request('/ascan/view/optionMaxRuleDurationInMins/')
}
/**
 * 
 **/
Ascan.prototype.optionMaxScanDurationInMins = async function () {
    return await this.api.request('/ascan/view/optionMaxScanDurationInMins/')
}
/**
 * 
 **/
Ascan.prototype.optionMaxScansInUI = async function () {
    return await this.api.request('/ascan/view/optionMaxScansInUI/')
}
/**
 * 
 **/
Ascan.prototype.optionTargetParamsEnabledRPC = async function () {
    return await this.api.request('/ascan/view/optionTargetParamsEnabledRPC/')
}
/**
 * 
 **/
Ascan.prototype.optionTargetParamsInjectable = async function () {
    return await this.api.request('/ascan/view/optionTargetParamsInjectable/')
}
/**
 * 
 **/
Ascan.prototype.optionThreadPerHost = async function () {
    return await this.api.request('/ascan/view/optionThreadPerHost/')
}
/**
 * Tells whether or not the active scanner should add a query parameter to GET request that don't have parameters to start with.
 **/
Ascan.prototype.optionAddQueryParam = async function () {
    return await this.api.request('/ascan/view/optionAddQueryParam/')
}
/**
 * 
 **/
Ascan.prototype.optionAllowAttackOnStart = async function () {
    return await this.api.request('/ascan/view/optionAllowAttackOnStart/')
}
/**
 * Tells whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scan rule that's sending the requests.
 **/
Ascan.prototype.optionInjectPluginIdInHeader = async function () {
    return await this.api.request('/ascan/view/optionInjectPluginIdInHeader/')
}
/**
 * 
 **/
Ascan.prototype.optionPromptInAttackMode = async function () {
    return await this.api.request('/ascan/view/optionPromptInAttackMode/')
}
/**
 * 
 **/
Ascan.prototype.optionPromptToClearFinishedScans = async function () {
    return await this.api.request('/ascan/view/optionPromptToClearFinishedScans/')
}
/**
 * 
 **/
Ascan.prototype.optionRescanInAttackMode = async function () {
    return await this.api.request('/ascan/view/optionRescanInAttackMode/')
}
/**
 * Tells whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.
 **/
Ascan.prototype.optionScanHeadersAllRequests = async function () {
    return await this.api.request('/ascan/view/optionScanHeadersAllRequests/')
}
/**
 * Tells whether or not the active scanner should scan null JSON values.
 **/
Ascan.prototype.optionScanNullJsonValues = async function () {
    return await this.api.request('/ascan/view/optionScanNullJsonValues/')
}
/**
 * 
 **/
Ascan.prototype.optionShowAdvancedDialog = async function () {
    return await this.api.request('/ascan/view/optionShowAdvancedDialog/')
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
Ascan.prototype.scan = async function (args) {
  const params = { };
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (args.recurse && args.recurse !== null) {
    params['recurse'] = args.recurse;
  }
  if (args.inscopeonly && args.inscopeonly !== null) {
    params['inScopeOnly'] = args.inscopeonly;
  }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (args.method && args.method !== null) {
    params['method'] = args.method;
  }
  if (args.postdata && args.postdata !== null) {
    params['postData'] = args.postdata;
  }
  if (args.contextid && args.contextid !== null) {
    params['contextId'] = args.contextid;
  }
    return await this.api.request('/ascan/action/scan/', params)
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
Ascan.prototype.scanAsUser = async function (args) {
  const params = { };
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (args.contextid && args.contextid !== null) {
    params['contextId'] = args.contextid;
  }
  if (args.userid && args.userid !== null) {
    params['userId'] = args.userid;
  }
  if (args.recurse && args.recurse !== null) {
    params['recurse'] = args.recurse;
  }
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (args.method && args.method !== null) {
    params['method'] = args.method;
  }
  if (args.postdata && args.postdata !== null) {
    params['postData'] = args.postdata;
  }
    return await this.api.request('/ascan/action/scanAsUser/', params)
}
/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.pause = async function (args) {
    return await this.api.request('/ascan/action/pause/', {'scanId': args.scanid })
}
/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.resume = async function (args) {
    return await this.api.request('/ascan/action/resume/', {'scanId': args.scanid })
}
/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.stop = async function (args) {
    return await this.api.request('/ascan/action/stop/', {'scanId': args.scanid })
}
/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.removeScan = async function (args) {
    return await this.api.request('/ascan/action/removeScan/', {'scanId': args.scanid })
}
/**
 * 
 **/
Ascan.prototype.pauseAllScans = async function () {
    return await this.api.request('/ascan/action/pauseAllScans/')
}
/**
 * 
 **/
Ascan.prototype.resumeAllScans = async function () {
    return await this.api.request('/ascan/action/resumeAllScans/')
}
/**
 * 
 **/
Ascan.prototype.stopAllScans = async function () {
    return await this.api.request('/ascan/action/stopAllScans/')
}
/**
 * 
 **/
Ascan.prototype.removeAllScans = async function () {
    return await this.api.request('/ascan/action/removeAllScans/')
}
/**
 * Clears the regexes of URLs excluded from the active scans.
 **/
Ascan.prototype.clearExcludedFromScan = async function () {
    return await this.api.request('/ascan/action/clearExcludedFromScan/')
}
/**
 * Adds a regex of URLs that should be excluded from the active scans.
 * @param {string} regex
 **/
Ascan.prototype.excludeFromScan = async function (args) {
    return await this.api.request('/ascan/action/excludeFromScan/', {'regex': args.regex })
}
/**
 * Enables all scan rules of the scan policy with the given name, or the default if none given.
 * @param {string} scanpolicyname
 **/
Ascan.prototype.enableAllScanners = async function (args) {
  const params = { };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/enableAllScanners/', params)
}
/**
 * Disables all scan rules of the scan policy with the given name, or the default if none given.
 * @param {string} scanpolicyname
 **/
Ascan.prototype.disableAllScanners = async function (args) {
  const params = { };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/disableAllScanners/', params)
}
/**
 * Enables the scan rules with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.enableScanners = async function (args) {
  const params = {'ids': args.ids };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/enableScanners/', params)
}
/**
 * Disables the scan rules with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.disableScanners = async function (args) {
  const params = {'ids': args.ids };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/disableScanners/', params)
}
/**
 * 
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setEnabledPolicies = async function (args) {
  const params = {'ids': args.ids };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/setEnabledPolicies/', params)
}
/**
 * 
 * @param {string} id
 * @param {string} attackstrength
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setPolicyAttackStrength = async function (args) {
  const params = {'id': args.id, 'attackStrength': args.attackstrength };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/setPolicyAttackStrength/', params)
}
/**
 * 
 * @param {string} id
 * @param {string} alertthreshold
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setPolicyAlertThreshold = async function (args) {
  const params = {'id': args.id, 'alertThreshold': args.alertthreshold };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/setPolicyAlertThreshold/', params)
}
/**
 * 
 * @param {string} id
 * @param {string} attackstrength
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setScannerAttackStrength = async function (args) {
  const params = {'id': args.id, 'attackStrength': args.attackstrength };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/setScannerAttackStrength/', params)
}
/**
 * 
 * @param {string} id
 * @param {string} alertthreshold
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setScannerAlertThreshold = async function (args) {
  const params = {'id': args.id, 'alertThreshold': args.alertthreshold };
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
    return await this.api.request('/ascan/action/setScannerAlertThreshold/', params)
}
/**
 * 
 * @param {string} scanpolicyname
 * @param {string} alertthreshold
 * @param {string} attackstrength
 **/
Ascan.prototype.addScanPolicy = async function (args) {
  const params = {'scanPolicyName': args.scanpolicyname };
  if (args.alertthreshold && args.alertthreshold !== null) {
    params['alertThreshold'] = args.alertthreshold;
  }
  if (args.attackstrength && args.attackstrength !== null) {
    params['attackStrength'] = args.attackstrength;
  }
    return await this.api.request('/ascan/action/addScanPolicy/', params)
}
/**
 * 
 * @param {string} scanpolicyname
 **/
Ascan.prototype.removeScanPolicy = async function (args) {
    return await this.api.request('/ascan/action/removeScanPolicy/', {'scanPolicyName': args.scanpolicyname })
}
/**
 * 
 * @param {string} scanpolicyname
 * @param {string} alertthreshold
 * @param {string} attackstrength
 **/
Ascan.prototype.updateScanPolicy = async function (args) {
  const params = {'scanPolicyName': args.scanpolicyname };
  if (args.alertthreshold && args.alertthreshold !== null) {
    params['alertThreshold'] = args.alertthreshold;
  }
  if (args.attackstrength && args.attackstrength !== null) {
    params['attackStrength'] = args.attackstrength;
  }
    return await this.api.request('/ascan/action/updateScanPolicy/', params)
}
/**
 * Imports a Scan Policy using the given file system path.
 * @param {string} path
 **/
Ascan.prototype.importScanPolicy = async function (args) {
    return await this.api.request('/ascan/action/importScanPolicy/', {'path': args.path })
}
/**
 * Adds a new parameter excluded from the scan, using the specified name. Optionally sets if the new entry applies to a specific URL (default, all URLs) and sets the ID of the type of the parameter (default, ID of any type). The type IDs can be obtained with the view excludedParamTypes. 
 * @param {string} name
 * @param {string} type
 * @param {string} url
 **/
Ascan.prototype.addExcludedParam = async function (args) {
  const params = {'name': args.name };
  if (args.type && args.type !== null) {
    params['type'] = args.type;
  }
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
    return await this.api.request('/ascan/action/addExcludedParam/', params)
}
/**
 * Modifies a parameter excluded from the scan. Allows to modify the name, the URL and the type of parameter. The parameter is selected with its index, which can be obtained with the view excludedParams.
 * @param {string} idx
 * @param {string} name
 * @param {string} type
 * @param {string} url
 **/
Ascan.prototype.modifyExcludedParam = async function (args) {
  const params = {'idx': args.idx };
  if (args.name && args.name !== null) {
    params['name'] = args.name;
  }
  if (args.type && args.type !== null) {
    params['type'] = args.type;
  }
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
    return await this.api.request('/ascan/action/modifyExcludedParam/', params)
}
/**
 * Removes a parameter excluded from the scan, with the given index. The index can be obtained with the view excludedParams.
 * @param {string} idx
 **/
Ascan.prototype.removeExcludedParam = async function (args) {
    return await this.api.request('/ascan/action/removeExcludedParam/', {'idx': args.idx })
}
/**
 * Skips the scan rule using the given IDs of the scan and the scan rule.
 * @param {string} scanid
 * @param {string} scannerid
 **/
Ascan.prototype.skipScanner = async function (args) {
    return await this.api.request('/ascan/action/skipScanner/', {'scanId': args.scanid, 'scannerId': args.scannerid })
}
/**
 * 
 * @param {string} string
 **/
Ascan.prototype.setOptionAttackPolicy = async function (args) {
    return await this.api.request('/ascan/action/setOptionAttackPolicy/', {'String': args.string })
}
/**
 * 
 * @param {string} string
 **/
Ascan.prototype.setOptionDefaultPolicy = async function (args) {
    return await this.api.request('/ascan/action/setOptionDefaultPolicy/', {'String': args.string })
}
/**
 * Sets whether or not the active scanner should add a query param to GET requests which do not have parameters to start with.
 * @param {string} bool
 **/
Ascan.prototype.setOptionAddQueryParam = async function (args) {
    return await this.api.request('/ascan/action/setOptionAddQueryParam/', {'Boolean': args.bool })
}
/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionAllowAttackOnStart = async function (args) {
    return await this.api.request('/ascan/action/setOptionAllowAttackOnStart/', {'Boolean': args.bool })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionDelayInMs = async function (args) {
    return await this.api.request('/ascan/action/setOptionDelayInMs/', {'Integer': args.integer })
}
/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionHandleAntiCSRFTokens = async function (args) {
    return await this.api.request('/ascan/action/setOptionHandleAntiCSRFTokens/', {'Boolean': args.bool })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionHostPerScan = async function (args) {
    return await this.api.request('/ascan/action/setOptionHostPerScan/', {'Integer': args.integer })
}
/**
 * Sets whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scan rule that's sending the requests.
 * @param {string} bool
 **/
Ascan.prototype.setOptionInjectPluginIdInHeader = async function (args) {
    return await this.api.request('/ascan/action/setOptionInjectPluginIdInHeader/', {'Boolean': args.bool })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxChartTimeInMins = async function (args) {
    return await this.api.request('/ascan/action/setOptionMaxChartTimeInMins/', {'Integer': args.integer })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxResultsToList = async function (args) {
    return await this.api.request('/ascan/action/setOptionMaxResultsToList/', {'Integer': args.integer })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxRuleDurationInMins = async function (args) {
    return await this.api.request('/ascan/action/setOptionMaxRuleDurationInMins/', {'Integer': args.integer })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxScanDurationInMins = async function (args) {
    return await this.api.request('/ascan/action/setOptionMaxScanDurationInMins/', {'Integer': args.integer })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxScansInUI = async function (args) {
    return await this.api.request('/ascan/action/setOptionMaxScansInUI/', {'Integer': args.integer })
}
/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionPromptInAttackMode = async function (args) {
    return await this.api.request('/ascan/action/setOptionPromptInAttackMode/', {'Boolean': args.bool })
}
/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionPromptToClearFinishedScans = async function (args) {
    return await this.api.request('/ascan/action/setOptionPromptToClearFinishedScans/', {'Boolean': args.bool })
}
/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionRescanInAttackMode = async function (args) {
    return await this.api.request('/ascan/action/setOptionRescanInAttackMode/', {'Boolean': args.bool })
}
/**
 * Sets whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.
 * @param {string} bool
 **/
Ascan.prototype.setOptionScanHeadersAllRequests = async function (args) {
    return await this.api.request('/ascan/action/setOptionScanHeadersAllRequests/', {'Boolean': args.bool })
}
/**
 * Sets whether or not the active scanner should scan null JSON values.
 * @param {string} bool - true to scan null values, false otherwise.
 **/
Ascan.prototype.setOptionScanNullJsonValues = async function (args) {
    return await this.api.request('/ascan/action/setOptionScanNullJsonValues/', {'Boolean': args.bool })
}
/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionShowAdvancedDialog = async function (args) {
    return await this.api.request('/ascan/action/setOptionShowAdvancedDialog/', {'Boolean': args.bool })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionTargetParamsEnabledRPC = async function (args) {
    return await this.api.request('/ascan/action/setOptionTargetParamsEnabledRPC/', {'Integer': args.integer })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionTargetParamsInjectable = async function (args) {
    return await this.api.request('/ascan/action/setOptionTargetParamsInjectable/', {'Integer': args.integer })
}
/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionThreadPerHost = async function (args) {
    return await this.api.request('/ascan/action/setOptionThreadPerHost/', {'Integer': args.integer })
}
module.exports = Ascan;
