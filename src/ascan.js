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
Ascan.prototype.status = function (args, callback) {
  const params = {};
  if (args.scanid && args.scanid !== null) {
    params['scanId'] = args.scanid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/status/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/status/', params);
};

/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.scanProgress = function (args, callback) {
  const params = {};
  if (args.scanid && args.scanid !== null) {
    params['scanId'] = args.scanid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/scanProgress/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/scanProgress/', params);
};

/**
 * Gets the IDs of the messages sent during the scan with the given ID. A message can be obtained with 'message' core view.
 * @param {string} scanid
 **/
Ascan.prototype.messagesIds = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/messagesIds/', {'scanId': args.scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/messagesIds/', {'scanId': args.scanid});
};

/**
 * Gets the IDs of the alerts raised during the scan with the given ID. An alert can be obtained with 'alert' core view.
 * @param {string} scanid
 **/
Ascan.prototype.alertsIds = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/alertsIds/', {'scanId': args.scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/alertsIds/', {'scanId': args.scanid});
};

/**
 * 
 **/
Ascan.prototype.scans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/scans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/scans/');
};

/**
 * 
 **/
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

/**
 * Gets the scan rules, optionally, of the given scan policy or scanner policy/category ID.
 * @param {string} scanpolicyname
 * @param {string} policyid
 **/
Ascan.prototype.scanners = function (args, callback) {
  const params = {};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (args.policyid && args.policyid !== null) {
    params['policyId'] = args.policyid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/scanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/scanners/', params);
};

/**
 * 
 * @param {string} scanpolicyname
 * @param {string} policyid
 **/
Ascan.prototype.policies = function (args, callback) {
  const params = {};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (args.policyid && args.policyid !== null) {
    params['policyId'] = args.policyid;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/policies/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/policies/', params);
};

/**
 * 
 **/
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

/**
 * 
 **/
Ascan.prototype.optionAttackPolicy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionAttackPolicy/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionAttackPolicy/');
};

/**
 * 
 **/
Ascan.prototype.optionDefaultPolicy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionDefaultPolicy/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionDefaultPolicy/');
};

/**
 * 
 **/
Ascan.prototype.optionDelayInMs = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionDelayInMs/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionDelayInMs/');
};

/**
 * 
 **/
Ascan.prototype.optionHandleAntiCSRFTokens = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionHandleAntiCSRFTokens/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionHandleAntiCSRFTokens/');
};

/**
 * 
 **/
Ascan.prototype.optionHostPerScan = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionHostPerScan/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionHostPerScan/');
};

/**
 * 
 **/
Ascan.prototype.optionMaxChartTimeInMins = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxChartTimeInMins/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxChartTimeInMins/');
};

/**
 * 
 **/
Ascan.prototype.optionMaxResultsToList = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxResultsToList/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxResultsToList/');
};

/**
 * 
 **/
Ascan.prototype.optionMaxRuleDurationInMins = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxRuleDurationInMins/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxRuleDurationInMins/');
};

/**
 * 
 **/
Ascan.prototype.optionMaxScanDurationInMins = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxScanDurationInMins/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxScanDurationInMins/');
};

/**
 * 
 **/
Ascan.prototype.optionMaxScansInUI = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionMaxScansInUI/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionMaxScansInUI/');
};

/**
 * 
 **/
Ascan.prototype.optionTargetParamsEnabledRPC = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionTargetParamsEnabledRPC/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionTargetParamsEnabledRPC/');
};

/**
 * 
 **/
Ascan.prototype.optionTargetParamsInjectable = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionTargetParamsInjectable/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionTargetParamsInjectable/');
};

/**
 * 
 **/
Ascan.prototype.optionThreadPerHost = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionThreadPerHost/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionThreadPerHost/');
};

/**
 * Tells whether or not the active scanner should add a query parameter to GET request that don't have parameters to start with.
 **/
Ascan.prototype.optionAddQueryParam = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionAddQueryParam/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionAddQueryParam/');
};

/**
 * 
 **/
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

/**
 * 
 **/
Ascan.prototype.optionPromptInAttackMode = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionPromptInAttackMode/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionPromptInAttackMode/');
};

/**
 * 
 **/
Ascan.prototype.optionPromptToClearFinishedScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionPromptToClearFinishedScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionPromptToClearFinishedScans/');
};

/**
 * 
 **/
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

/**
 * Tells whether or not the active scanner should scan null JSON values.
 **/
Ascan.prototype.optionScanNullJsonValues = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionScanNullJsonValues/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionScanNullJsonValues/');
};

/**
 * 
 **/
Ascan.prototype.optionShowAdvancedDialog = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/view/optionShowAdvancedDialog/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/view/optionShowAdvancedDialog/');
};

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
Ascan.prototype.scan = function (args, callback) {
  const params = {};
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
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/scan/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/scan/', params);
};

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
Ascan.prototype.scanAsUser = function (args, callback) {
  const params = {};
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
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/scanAsUser/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/scanAsUser/', params);
};

/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.pause = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/pause/', {'scanId': args.scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/pause/', {'scanId': args.scanid});
};

/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.resume = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/resume/', {'scanId': args.scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/resume/', {'scanId': args.scanid});
};

/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.stop = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/stop/', {'scanId': args.scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/stop/', {'scanId': args.scanid});
};

/**
 * 
 * @param {string} scanid
 **/
Ascan.prototype.removeScan = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/removeScan/', {'scanId': args.scanid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/removeScan/', {'scanId': args.scanid});
};

/**
 * 
 **/
Ascan.prototype.pauseAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/pauseAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/pauseAllScans/');
};

/**
 * 
 **/
Ascan.prototype.resumeAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/resumeAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/resumeAllScans/');
};

/**
 * 
 **/
Ascan.prototype.stopAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/stopAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/stopAllScans/');
};

/**
 * 
 **/
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
 * @param {string} regex
 **/
Ascan.prototype.excludeFromScan = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/excludeFromScan/', {'regex': args.regex}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/excludeFromScan/', {'regex': args.regex});
};

/**
 * Enables all scan rules of the scan policy with the given name, or the default if none given.
 * @param {string} scanpolicyname
 **/
Ascan.prototype.enableAllScanners = function (args, callback) {
  const params = {};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/enableAllScanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/enableAllScanners/', params);
};

/**
 * Disables all scan rules of the scan policy with the given name, or the default if none given.
 * @param {string} scanpolicyname
 **/
Ascan.prototype.disableAllScanners = function (args, callback) {
  const params = {};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/disableAllScanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/disableAllScanners/', params);
};

/**
 * Enables the scan rules with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.enableScanners = function (args, callback) {
  const params = {'ids': args.ids};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/enableScanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/enableScanners/', params);
};

/**
 * Disables the scan rules with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.disableScanners = function (args, callback) {
  const params = {'ids': args.ids};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/disableScanners/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/disableScanners/', params);
};

/**
 * 
 * @param {string} ids
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setEnabledPolicies = function (args, callback) {
  const params = {'ids': args.ids};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setEnabledPolicies/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setEnabledPolicies/', params);
};

/**
 * 
 * @param {string} id
 * @param {string} attackstrength
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setPolicyAttackStrength = function (args, callback) {
  const params = {'id': args.id, 'attackStrength': args.attackstrength};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setPolicyAttackStrength/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setPolicyAttackStrength/', params);
};

/**
 * 
 * @param {string} id
 * @param {string} alertthreshold
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setPolicyAlertThreshold = function (args, callback) {
  const params = {'id': args.id, 'alertThreshold': args.alertthreshold};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setPolicyAlertThreshold/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setPolicyAlertThreshold/', params);
};

/**
 * 
 * @param {string} id
 * @param {string} attackstrength
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setScannerAttackStrength = function (args, callback) {
  const params = {'id': args.id, 'attackStrength': args.attackstrength};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setScannerAttackStrength/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setScannerAttackStrength/', params);
};

/**
 * 
 * @param {string} id
 * @param {string} alertthreshold
 * @param {string} scanpolicyname
 **/
Ascan.prototype.setScannerAlertThreshold = function (args, callback) {
  const params = {'id': args.id, 'alertThreshold': args.alertthreshold};
  if (args.scanpolicyname && args.scanpolicyname !== null) {
    params['scanPolicyName'] = args.scanpolicyname;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setScannerAlertThreshold/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setScannerAlertThreshold/', params);
};

/**
 * 
 * @param {string} scanpolicyname
 * @param {string} alertthreshold
 * @param {string} attackstrength
 **/
Ascan.prototype.addScanPolicy = function (args, callback) {
  const params = {'scanPolicyName': args.scanpolicyname};
  if (args.alertthreshold && args.alertthreshold !== null) {
    params['alertThreshold'] = args.alertthreshold;
  }
  if (args.attackstrength && args.attackstrength !== null) {
    params['attackStrength'] = args.attackstrength;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/addScanPolicy/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/addScanPolicy/', params);
};

/**
 * 
 * @param {string} scanpolicyname
 **/
Ascan.prototype.removeScanPolicy = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/removeScanPolicy/', {'scanPolicyName': args.scanpolicyname}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/removeScanPolicy/', {'scanPolicyName': args.scanpolicyname});
};

/**
 * 
 * @param {string} scanpolicyname
 * @param {string} alertthreshold
 * @param {string} attackstrength
 **/
Ascan.prototype.updateScanPolicy = function (args, callback) {
  const params = {'scanPolicyName': args.scanpolicyname};
  if (args.alertthreshold && args.alertthreshold !== null) {
    params['alertThreshold'] = args.alertthreshold;
  }
  if (args.attackstrength && args.attackstrength !== null) {
    params['attackStrength'] = args.attackstrength;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/updateScanPolicy/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/updateScanPolicy/', params);
};

/**
 * Imports a Scan Policy using the given file system path.
 * @param {string} path
 **/
Ascan.prototype.importScanPolicy = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/importScanPolicy/', {'path': args.path}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/importScanPolicy/', {'path': args.path});
};

/**
 * Adds a new parameter excluded from the scan, using the specified name. Optionally sets if the new entry applies to a specific URL (default, all URLs) and sets the ID of the type of the parameter (default, ID of any type). The type IDs can be obtained with the view excludedParamTypes. 
 * @param {string} name
 * @param {string} type
 * @param {string} url
 **/
Ascan.prototype.addExcludedParam = function (args, callback) {
  const params = {'name': args.name};
  if (args.type && args.type !== null) {
    params['type'] = args.type;
  }
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/addExcludedParam/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/addExcludedParam/', params);
};

/**
 * Modifies a parameter excluded from the scan. Allows to modify the name, the URL and the type of parameter. The parameter is selected with its index, which can be obtained with the view excludedParams.
 * @param {string} idx
 * @param {string} name
 * @param {string} type
 * @param {string} url
 **/
Ascan.prototype.modifyExcludedParam = function (args, callback) {
  const params = {'idx': args.idx};
  if (args.name && args.name !== null) {
    params['name'] = args.name;
  }
  if (args.type && args.type !== null) {
    params['type'] = args.type;
  }
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/modifyExcludedParam/', params, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/modifyExcludedParam/', params);
};

/**
 * Removes a parameter excluded from the scan, with the given index. The index can be obtained with the view excludedParams.
 * @param {string} idx
 **/
Ascan.prototype.removeExcludedParam = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/removeExcludedParam/', {'idx': args.idx}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/removeExcludedParam/', {'idx': args.idx});
};

/**
 * Skips the scanner using the given IDs of the scan and the scanner.
 * @param {string} scanid
 * @param {string} scannerid
 **/
Ascan.prototype.skipScanner = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/skipScanner/', {'scanId': args.scanid, 'scannerId': args.scannerid}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/skipScanner/', {'scanId': args.scanid, 'scannerId': args.scannerid});
};

/**
 * 
 * @param {string} string
 **/
Ascan.prototype.setOptionAttackPolicy = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionAttackPolicy/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionAttackPolicy/', {'String': args.string});
};

/**
 * 
 * @param {string} string
 **/
Ascan.prototype.setOptionDefaultPolicy = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionDefaultPolicy/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionDefaultPolicy/', {'String': args.string});
};

/**
 * Sets whether or not the active scanner should add a query param to GET requests which do not have parameters to start with.
 * @param {string} bool
 **/
Ascan.prototype.setOptionAddQueryParam = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionAddQueryParam/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionAddQueryParam/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionAllowAttackOnStart = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionAllowAttackOnStart/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionAllowAttackOnStart/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionDelayInMs = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionDelayInMs/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionDelayInMs/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionHandleAntiCSRFTokens = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionHandleAntiCSRFTokens/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionHandleAntiCSRFTokens/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionHostPerScan = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionHostPerScan/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionHostPerScan/', {'Integer': args.integer});
};

/**
 * Sets whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scanner that's sending the requests.
 * @param {string} bool
 **/
Ascan.prototype.setOptionInjectPluginIdInHeader = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionInjectPluginIdInHeader/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionInjectPluginIdInHeader/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxChartTimeInMins = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxChartTimeInMins/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxChartTimeInMins/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxResultsToList = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxResultsToList/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxResultsToList/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxRuleDurationInMins = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxRuleDurationInMins/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxRuleDurationInMins/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxScanDurationInMins = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxScanDurationInMins/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxScanDurationInMins/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionMaxScansInUI = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionMaxScansInUI/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionMaxScansInUI/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionPromptInAttackMode = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionPromptInAttackMode/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionPromptInAttackMode/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionPromptToClearFinishedScans = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionPromptToClearFinishedScans/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionPromptToClearFinishedScans/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionRescanInAttackMode = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionRescanInAttackMode/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionRescanInAttackMode/', {'Boolean': args.bool});
};

/**
 * Sets whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.
 * @param {string} bool
 **/
Ascan.prototype.setOptionScanHeadersAllRequests = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionScanHeadersAllRequests/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionScanHeadersAllRequests/', {'Boolean': args.bool});
};

/**
 * Sets whether or not the active scanner should scan null JSON values.
 * @param {string} bool - true to scan null values, false otherwise.
 **/
Ascan.prototype.setOptionScanNullJsonValues = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionScanNullJsonValues/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionScanNullJsonValues/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} bool
 **/
Ascan.prototype.setOptionShowAdvancedDialog = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionShowAdvancedDialog/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionShowAdvancedDialog/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionTargetParamsEnabledRPC = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionTargetParamsEnabledRPC/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionTargetParamsEnabledRPC/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionTargetParamsInjectable = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionTargetParamsInjectable/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionTargetParamsInjectable/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} integer
 **/
Ascan.prototype.setOptionThreadPerHost = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ascan/action/setOptionThreadPerHost/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ascan/action/setOptionThreadPerHost/', {'Integer': args.integer});
};

module.exports = Ascan;
