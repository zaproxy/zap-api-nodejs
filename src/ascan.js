/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2018 the ZAP development team
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

Ascan.prototype.status = function (scanid, callback) {
  const params = {};
  if (scanid && scanid !== null) {
    params['scanId'] = scanid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/status/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/status/', params);
};

Ascan.prototype.scanProgress = function (scanid, callback) {
  const params = {};
  if (scanid && scanid !== null) {
    params['scanId'] = scanid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/scanProgress/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/scanProgress/', params);
};

/**
 * Gets the IDs of the messages sent during the scan with the given ID. A message can be obtained with 'message' core view.
 **/
Ascan.prototype.messagesIds = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/messagesIds/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/messagesIds/', {'scanId' : scanid});
};

/**
 * Gets the IDs of the alerts raised during the scan with the given ID. An alert can be obtained with 'alert' core view.
 **/
Ascan.prototype.alertsIds = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/alertsIds/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/alertsIds/', {'scanId' : scanid});
};

Ascan.prototype.scans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/scans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/scans/');
};

Ascan.prototype.scanPolicyNames = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/scanPolicyNames/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/scanPolicyNames/');
};

/**
 * Gets the regexes of URLs excluded from the active scans.
 **/
Ascan.prototype.excludedFromScan = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/excludedFromScan/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/excludedFromScan/');
};

Ascan.prototype.scanners = function (scanpolicyname, policyid, callback) {
  const params = {};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (policyid && policyid !== null) {
    params['policyId'] = policyid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/scanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/scanners/', params);
};

Ascan.prototype.policies = function (scanpolicyname, policyid, callback) {
  const params = {};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (policyid && policyid !== null) {
    params['policyId'] = policyid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/policies/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/policies/', params);
};

Ascan.prototype.attackModeQueue = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/attackModeQueue/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/attackModeQueue/');
};

/**
 * Gets all the parameters that are excluded. For each parameter the following are shown: the name, the URL, and the parameter type.
 **/
Ascan.prototype.excludedParams = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/excludedParams/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/excludedParams/');
};

/**
 * Use view excludedParams instead.
 **/
Ascan.prototype.optionExcludedParamList = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionExcludedParamList/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionExcludedParamList/');
};

/**
 * Gets all the types of excluded parameters. For each type the following are shown: the ID and the name.
 **/
Ascan.prototype.excludedParamTypes = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/excludedParamTypes/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/excludedParamTypes/');
};

Ascan.prototype.optionAttackPolicy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionAttackPolicy/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionAttackPolicy/');
};

Ascan.prototype.optionDefaultPolicy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionDefaultPolicy/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionDefaultPolicy/');
};

Ascan.prototype.optionDelayInMs = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionDelayInMs/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionDelayInMs/');
};

Ascan.prototype.optionHandleAntiCSRFTokens = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionHandleAntiCSRFTokens/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionHandleAntiCSRFTokens/');
};

Ascan.prototype.optionHostPerScan = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionHostPerScan/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionHostPerScan/');
};

Ascan.prototype.optionMaxChartTimeInMins = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxChartTimeInMins/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxChartTimeInMins/');
};

Ascan.prototype.optionMaxResultsToList = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxResultsToList/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxResultsToList/');
};

Ascan.prototype.optionMaxRuleDurationInMins = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxRuleDurationInMins/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxRuleDurationInMins/');
};

Ascan.prototype.optionMaxScanDurationInMins = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxScanDurationInMins/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxScanDurationInMins/');
};

Ascan.prototype.optionMaxScansInUI = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxScansInUI/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxScansInUI/');
};

Ascan.prototype.optionTargetParamsEnabledRPC = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionTargetParamsEnabledRPC/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionTargetParamsEnabledRPC/');
};

Ascan.prototype.optionTargetParamsInjectable = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionTargetParamsInjectable/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionTargetParamsInjectable/');
};

Ascan.prototype.optionThreadPerHost = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionThreadPerHost/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionThreadPerHost/');
};

Ascan.prototype.optionAllowAttackOnStart = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionAllowAttackOnStart/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionAllowAttackOnStart/');
};

/**
 * Tells whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scanner that's sending the requests.
 **/
Ascan.prototype.optionInjectPluginIdInHeader = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionInjectPluginIdInHeader/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionInjectPluginIdInHeader/');
};

Ascan.prototype.optionPromptInAttackMode = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionPromptInAttackMode/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionPromptInAttackMode/');
};

Ascan.prototype.optionPromptToClearFinishedScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionPromptToClearFinishedScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionPromptToClearFinishedScans/');
};

Ascan.prototype.optionRescanInAttackMode = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionRescanInAttackMode/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionRescanInAttackMode/');
};

/**
 * Tells whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.
 **/
Ascan.prototype.optionScanHeadersAllRequests = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionScanHeadersAllRequests/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionScanHeadersAllRequests/');
};

Ascan.prototype.optionShowAdvancedDialog = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionShowAdvancedDialog/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionShowAdvancedDialog/');
};

/**
 * Runs the active scanner against the given URL and/or Context. Optionally, the 'recurse' parameter can be used to scan URLs under the given URL, the parameter 'inScopeOnly' can be used to constrain the scan to URLs that are in scope (ignored if a Context is specified), the parameter 'scanPolicyName' allows to specify the scan policy (if none is given it uses the default scan policy), the parameters 'method' and 'postData' allow to select a given request in conjunction with the given URL.
 **/
Ascan.prototype.scan = function (url, recurse, inscopeonly, scanpolicyname, method, postdata, contextid, callback) {
  const params = {};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (recurse && recurse !== null) {
    params['recurse'] = recurse;
  }
  if (inscopeonly && inscopeonly !== null) {
    params['inScopeOnly'] = inscopeonly;
  }
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (method && method !== null) {
    params['method'] = method;
  }
  if (postdata && postdata !== null) {
    params['postData'] = postdata;
  }
  if (contextid && contextid !== null) {
    params['contextId'] = contextid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/scan/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/scan/', params);
};

/**
 * Active Scans from the perspective of a User, obtained using the given Context ID and User ID. See 'scan' action for more details.
 **/
Ascan.prototype.scanAsUser = function (url, contextid, userid, recurse, scanpolicyname, method, postdata, callback) {
  const params = {};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (contextid && contextid !== null) {
    params['contextId'] = contextid;
  }
  if (userid && userid !== null) {
    params['userId'] = userid;
  }
  if (recurse && recurse !== null) {
    params['recurse'] = recurse;
  }
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (method && method !== null) {
    params['method'] = method;
  }
  if (postdata && postdata !== null) {
    params['postData'] = postdata;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/scanAsUser/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/scanAsUser/', params);
};

Ascan.prototype.pause = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/pause/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/pause/', {'scanId' : scanid});
};

Ascan.prototype.resume = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/resume/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/resume/', {'scanId' : scanid});
};

Ascan.prototype.stop = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/stop/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/stop/', {'scanId' : scanid});
};

Ascan.prototype.removeScan = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/removeScan/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/removeScan/', {'scanId' : scanid});
};

Ascan.prototype.pauseAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/pauseAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/pauseAllScans/');
};

Ascan.prototype.resumeAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/resumeAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/resumeAllScans/');
};

Ascan.prototype.stopAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/stopAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/stopAllScans/');
};

Ascan.prototype.removeAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/removeAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/removeAllScans/');
};

/**
 * Clears the regexes of URLs excluded from the active scans.
 **/
Ascan.prototype.clearExcludedFromScan = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/clearExcludedFromScan/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/clearExcludedFromScan/');
};

/**
 * Adds a regex of URLs that should be excluded from the active scans.
 **/
Ascan.prototype.excludeFromScan = function (regex, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/excludeFromScan/', {'regex' : regex}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/excludeFromScan/', {'regex' : regex});
};

Ascan.prototype.enableAllScanners = function (scanpolicyname, callback) {
  const params = {};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/enableAllScanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/enableAllScanners/', params);
};

Ascan.prototype.disableAllScanners = function (scanpolicyname, callback) {
  const params = {};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/disableAllScanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/disableAllScanners/', params);
};

Ascan.prototype.enableScanners = function (ids, scanpolicyname, callback) {
  const params = {'ids' : ids};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/enableScanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/enableScanners/', params);
};

Ascan.prototype.disableScanners = function (ids, scanpolicyname, callback) {
  const params = {'ids' : ids};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/disableScanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/disableScanners/', params);
};

Ascan.prototype.setEnabledPolicies = function (ids, scanpolicyname, callback) {
  const params = {'ids' : ids};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setEnabledPolicies/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setEnabledPolicies/', params);
};

Ascan.prototype.setPolicyAttackStrength = function (id, attackstrength, scanpolicyname, callback) {
  const params = {'id' : id, 'attackStrength' : attackstrength};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setPolicyAttackStrength/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setPolicyAttackStrength/', params);
};

Ascan.prototype.setPolicyAlertThreshold = function (id, alertthreshold, scanpolicyname, callback) {
  const params = {'id' : id, 'alertThreshold' : alertthreshold};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setPolicyAlertThreshold/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setPolicyAlertThreshold/', params);
};

Ascan.prototype.setScannerAttackStrength = function (id, attackstrength, scanpolicyname, callback) {
  const params = {'id' : id, 'attackStrength' : attackstrength};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setScannerAttackStrength/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setScannerAttackStrength/', params);
};

Ascan.prototype.setScannerAlertThreshold = function (id, alertthreshold, scanpolicyname, callback) {
  const params = {'id' : id, 'alertThreshold' : alertthreshold};
  if (scanpolicyname && scanpolicyname !== null) {
    params['scanPolicyName'] = scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setScannerAlertThreshold/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setScannerAlertThreshold/', params);
};

Ascan.prototype.addScanPolicy = function (scanpolicyname, alertthreshold, attackstrength, callback) {
  const params = {'scanPolicyName' : scanpolicyname};
  if (alertthreshold && alertthreshold !== null) {
    params['alertThreshold'] = alertthreshold;
  }
  if (attackstrength && attackstrength !== null) {
    params['attackStrength'] = attackstrength;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/addScanPolicy/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/addScanPolicy/', params);
};

Ascan.prototype.removeScanPolicy = function (scanpolicyname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/removeScanPolicy/', {'scanPolicyName' : scanpolicyname}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/removeScanPolicy/', {'scanPolicyName' : scanpolicyname});
};

Ascan.prototype.updateScanPolicy = function (scanpolicyname, alertthreshold, attackstrength, callback) {
  const params = {'scanPolicyName' : scanpolicyname};
  if (alertthreshold && alertthreshold !== null) {
    params['alertThreshold'] = alertthreshold;
  }
  if (attackstrength && attackstrength !== null) {
    params['attackStrength'] = attackstrength;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/updateScanPolicy/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/updateScanPolicy/', params);
};

/**
 * Imports a Scan Policy using the given file system path.
 **/
Ascan.prototype.importScanPolicy = function (path, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/importScanPolicy/', {'path' : path}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/importScanPolicy/', {'path' : path});
};

/**
 * Adds a new parameter excluded from the scan, using the specified name. Optionally sets if the new entry applies to a specific URL (default, all URLs) and sets the ID of the type of the parameter (default, ID of any type). The type IDs can be obtained with the view excludedParamTypes. 
 **/
Ascan.prototype.addExcludedParam = function (name, type, url, callback) {
  const params = {'name' : name};
  if (type && type !== null) {
    params['type'] = type;
  }
  if (url && url !== null) {
    params['url'] = url;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/addExcludedParam/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/addExcludedParam/', params);
};

/**
 * Modifies a parameter excluded from the scan. Allows to modify the name, the URL and the type of parameter. The parameter is selected with its index, which can be obtained with the view excludedParams.
 **/
Ascan.prototype.modifyExcludedParam = function (idx, name, type, url, callback) {
  const params = {'idx' : idx};
  if (name && name !== null) {
    params['name'] = name;
  }
  if (type && type !== null) {
    params['type'] = type;
  }
  if (url && url !== null) {
    params['url'] = url;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/modifyExcludedParam/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/modifyExcludedParam/', params);
};

/**
 * Removes a parameter excluded from the scan, with the given index. The index can be obtained with the view excludedParams.
 **/
Ascan.prototype.removeExcludedParam = function (idx, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/removeExcludedParam/', {'idx' : idx}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/removeExcludedParam/', {'idx' : idx});
};

/**
 * Skips the scanner using the given IDs of the scan and the scanner.
 **/
Ascan.prototype.skipScanner = function (scanid, scannerid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/skipScanner/', {'scanId' : scanid, 'scannerId' : scannerid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/skipScanner/', {'scanId' : scanid, 'scannerId' : scannerid});
};

Ascan.prototype.setOptionAttackPolicy = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionAttackPolicy/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionAttackPolicy/', {'String' : string});
};

Ascan.prototype.setOptionDefaultPolicy = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionDefaultPolicy/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionDefaultPolicy/', {'String' : string});
};

Ascan.prototype.setOptionAllowAttackOnStart = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionAllowAttackOnStart/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionAllowAttackOnStart/', {'Boolean' : bool});
};

Ascan.prototype.setOptionDelayInMs = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionDelayInMs/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionDelayInMs/', {'Integer' : integer});
};

Ascan.prototype.setOptionHandleAntiCSRFTokens = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionHandleAntiCSRFTokens/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionHandleAntiCSRFTokens/', {'Boolean' : bool});
};

Ascan.prototype.setOptionHostPerScan = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionHostPerScan/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionHostPerScan/', {'Integer' : integer});
};

/**
 * Sets whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scanner that's sending the requests.
 **/
Ascan.prototype.setOptionInjectPluginIdInHeader = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionInjectPluginIdInHeader/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionInjectPluginIdInHeader/', {'Boolean' : bool});
};

Ascan.prototype.setOptionMaxChartTimeInMins = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxChartTimeInMins/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxChartTimeInMins/', {'Integer' : integer});
};

Ascan.prototype.setOptionMaxResultsToList = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxResultsToList/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxResultsToList/', {'Integer' : integer});
};

Ascan.prototype.setOptionMaxRuleDurationInMins = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxRuleDurationInMins/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxRuleDurationInMins/', {'Integer' : integer});
};

Ascan.prototype.setOptionMaxScanDurationInMins = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxScanDurationInMins/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxScanDurationInMins/', {'Integer' : integer});
};

Ascan.prototype.setOptionMaxScansInUI = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxScansInUI/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxScansInUI/', {'Integer' : integer});
};

Ascan.prototype.setOptionPromptInAttackMode = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionPromptInAttackMode/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionPromptInAttackMode/', {'Boolean' : bool});
};

Ascan.prototype.setOptionPromptToClearFinishedScans = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionPromptToClearFinishedScans/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionPromptToClearFinishedScans/', {'Boolean' : bool});
};

Ascan.prototype.setOptionRescanInAttackMode = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionRescanInAttackMode/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionRescanInAttackMode/', {'Boolean' : bool});
};

/**
 * Sets whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.
 **/
Ascan.prototype.setOptionScanHeadersAllRequests = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionScanHeadersAllRequests/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionScanHeadersAllRequests/', {'Boolean' : bool});
};

Ascan.prototype.setOptionShowAdvancedDialog = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionShowAdvancedDialog/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionShowAdvancedDialog/', {'Boolean' : bool});
};

Ascan.prototype.setOptionTargetParamsEnabledRPC = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionTargetParamsEnabledRPC/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionTargetParamsEnabledRPC/', {'Integer' : integer});
};

Ascan.prototype.setOptionTargetParamsInjectable = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionTargetParamsInjectable/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionTargetParamsInjectable/', {'Integer' : integer});
};

Ascan.prototype.setOptionThreadPerHost = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionThreadPerHost/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionThreadPerHost/', {'Integer' : integer});
};

module.exports = Ascan;
