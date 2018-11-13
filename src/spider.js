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
function Spider(clientApi) {
  this.api = clientApi;
}

Spider.prototype.status = function (scanid, callback) {
  const params = {};
  if (scanid && scanid !== null) {
    params['scanId'] = scanid;
  }
  if (typeof callback === 'function') {
    this.api.request('/spider/view/status/', params, callback);
    return;
  }
  return this.api.requestPromise('/spider/view/status/', params);
};

Spider.prototype.results = function (scanid, callback) {
  const params = {};
  if (scanid && scanid !== null) {
    params['scanId'] = scanid;
  }
  if (typeof callback === 'function') {
    this.api.request('/spider/view/results/', params, callback);
    return;
  }
  return this.api.requestPromise('/spider/view/results/', params);
};

Spider.prototype.fullResults = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/fullResults/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/spider/view/fullResults/', {'scanId' : scanid});
};

Spider.prototype.scans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/scans/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/scans/');
};

/**
 * Gets the regexes of URLs excluded from the spider scans.
 **/
Spider.prototype.excludedFromScan = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/excludedFromScan/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/excludedFromScan/');
};

/**
 * Returns a list of unique URLs from the history table based on HTTP messages added by the Spider.
 **/
Spider.prototype.allUrls = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/allUrls/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/allUrls/');
};

/**
 * Returns a list of the names of the nodes added to the Sites tree by the specified scan.
 **/
Spider.prototype.addedNodes = function (scanid, callback) {
  const params = {};
  if (scanid && scanid !== null) {
    params['scanId'] = scanid;
  }
  if (typeof callback === 'function') {
    this.api.request('/spider/view/addedNodes/', params, callback);
    return;
  }
  return this.api.requestPromise('/spider/view/addedNodes/', params);
};

/**
 * Gets all the domains that are always in scope. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.
 **/
Spider.prototype.domainsAlwaysInScope = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/domainsAlwaysInScope/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/domainsAlwaysInScope/');
};

/**
 * Use view domainsAlwaysInScope instead.
 **/
Spider.prototype.optionDomainsAlwaysInScope = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionDomainsAlwaysInScope/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionDomainsAlwaysInScope/');
};

/**
 * Use view domainsAlwaysInScope instead.
 **/
Spider.prototype.optionDomainsAlwaysInScopeEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionDomainsAlwaysInScopeEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionDomainsAlwaysInScopeEnabled/');
};

Spider.prototype.optionHandleParameters = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionHandleParameters/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionHandleParameters/');
};

/**
 * Gets the maximum number of child nodes (per node) that can be crawled, 0 means no limit.
 **/
Spider.prototype.optionMaxChildren = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionMaxChildren/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionMaxChildren/');
};

Spider.prototype.optionMaxDepth = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionMaxDepth/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionMaxDepth/');
};

Spider.prototype.optionMaxDuration = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionMaxDuration/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionMaxDuration/');
};

/**
 * Gets the maximum size, in bytes, that a response might have to be parsed.
 **/
Spider.prototype.optionMaxParseSizeBytes = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionMaxParseSizeBytes/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionMaxParseSizeBytes/');
};

Spider.prototype.optionMaxScansInUI = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionMaxScansInUI/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionMaxScansInUI/');
};

Spider.prototype.optionRequestWaitTime = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionRequestWaitTime/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionRequestWaitTime/');
};

Spider.prototype.optionScope = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionScope/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionScope/');
};

Spider.prototype.optionScopeText = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionScopeText/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionScopeText/');
};

Spider.prototype.optionSkipURLString = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionSkipURLString/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionSkipURLString/');
};

Spider.prototype.optionThreadCount = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionThreadCount/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionThreadCount/');
};

Spider.prototype.optionUserAgent = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionUserAgent/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionUserAgent/');
};

/**
 * Gets whether or not a spider process should accept cookies while spidering.
 **/
Spider.prototype.optionAcceptCookies = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionAcceptCookies/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionAcceptCookies/');
};

Spider.prototype.optionHandleODataParametersVisited = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionHandleODataParametersVisited/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionHandleODataParametersVisited/');
};

Spider.prototype.optionParseComments = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionParseComments/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionParseComments/');
};

Spider.prototype.optionParseGit = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionParseGit/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionParseGit/');
};

Spider.prototype.optionParseRobotsTxt = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionParseRobotsTxt/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionParseRobotsTxt/');
};

Spider.prototype.optionParseSVNEntries = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionParseSVNEntries/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionParseSVNEntries/');
};

Spider.prototype.optionParseSitemapXml = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionParseSitemapXml/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionParseSitemapXml/');
};

Spider.prototype.optionPostForm = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionPostForm/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionPostForm/');
};

Spider.prototype.optionProcessForm = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionProcessForm/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionProcessForm/');
};

/**
 * Gets whether or not the 'Referer' header should be sent while spidering.
 **/
Spider.prototype.optionSendRefererHeader = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionSendRefererHeader/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionSendRefererHeader/');
};

Spider.prototype.optionShowAdvancedDialog = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/view/optionShowAdvancedDialog/', callback);
    return;
  }
  return this.api.requestPromise('/spider/view/optionShowAdvancedDialog/');
};

/**
 * Runs the spider against the given URL (or context). Optionally, the 'maxChildren' parameter can be set to limit the number of children scanned, the 'recurse' parameter can be used to prevent the spider from seeding recursively, the parameter 'contextName' can be used to constrain the scan to a Context and the parameter 'subtreeOnly' allows to restrict the spider under a site's subtree (using the specified 'url').
 **/
Spider.prototype.scan = function (url, maxchildren, recurse, contextname, subtreeonly, callback) {
  const params = {};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (maxchildren && maxchildren !== null) {
    params['maxChildren'] = maxchildren;
  }
  if (recurse && recurse !== null) {
    params['recurse'] = recurse;
  }
  if (contextname && contextname !== null) {
    params['contextName'] = contextname;
  }
  if (subtreeonly && subtreeonly !== null) {
    params['subtreeOnly'] = subtreeonly;
  }
  if (typeof callback === 'function') {
    this.api.request('/spider/action/scan/', params, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/scan/', params);
};

/**
 * Runs the spider from the perspective of a User, obtained using the given Context ID and User ID. See 'scan' action for more details.
 **/
Spider.prototype.scanAsUser = function (contextid, userid, url, maxchildren, recurse, subtreeonly, callback) {
  const params = {'contextId' : contextid, 'userId' : userid};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (maxchildren && maxchildren !== null) {
    params['maxChildren'] = maxchildren;
  }
  if (recurse && recurse !== null) {
    params['recurse'] = recurse;
  }
  if (subtreeonly && subtreeonly !== null) {
    params['subtreeOnly'] = subtreeonly;
  }
  if (typeof callback === 'function') {
    this.api.request('/spider/action/scanAsUser/', params, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/scanAsUser/', params);
};

Spider.prototype.pause = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/pause/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/pause/', {'scanId' : scanid});
};

Spider.prototype.resume = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/resume/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/resume/', {'scanId' : scanid});
};

Spider.prototype.stop = function (scanid, callback) {
  const params = {};
  if (scanid && scanid !== null) {
    params['scanId'] = scanid;
  }
  if (typeof callback === 'function') {
    this.api.request('/spider/action/stop/', params, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/stop/', params);
};

Spider.prototype.removeScan = function (scanid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/removeScan/', {'scanId' : scanid}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/removeScan/', {'scanId' : scanid});
};

Spider.prototype.pauseAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/pauseAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/spider/action/pauseAllScans/');
};

Spider.prototype.resumeAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/resumeAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/spider/action/resumeAllScans/');
};

Spider.prototype.stopAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/stopAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/spider/action/stopAllScans/');
};

Spider.prototype.removeAllScans = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/removeAllScans/', callback);
    return;
  }
  return this.api.requestPromise('/spider/action/removeAllScans/');
};

/**
 * Clears the regexes of URLs excluded from the spider scans.
 **/
Spider.prototype.clearExcludedFromScan = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/clearExcludedFromScan/', callback);
    return;
  }
  return this.api.requestPromise('/spider/action/clearExcludedFromScan/');
};

/**
 * Adds a regex of URLs that should be excluded from the spider scans.
 **/
Spider.prototype.excludeFromScan = function (regex, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/excludeFromScan/', {'regex' : regex}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/excludeFromScan/', {'regex' : regex});
};

/**
 * Adds a new domain that's always in scope, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).
 **/
Spider.prototype.addDomainAlwaysInScope = function (value, isregex, isenabled, callback) {
  const params = {'value' : value};
  if (isregex && isregex !== null) {
    params['isRegex'] = isregex;
  }
  if (isenabled && isenabled !== null) {
    params['isEnabled'] = isenabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/spider/action/addDomainAlwaysInScope/', params, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/addDomainAlwaysInScope/', params);
};

/**
 * Modifies a domain that's always in scope. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view domainsAlwaysInScope.
 **/
Spider.prototype.modifyDomainAlwaysInScope = function (idx, value, isregex, isenabled, callback) {
  const params = {'idx' : idx};
  if (value && value !== null) {
    params['value'] = value;
  }
  if (isregex && isregex !== null) {
    params['isRegex'] = isregex;
  }
  if (isenabled && isenabled !== null) {
    params['isEnabled'] = isenabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/spider/action/modifyDomainAlwaysInScope/', params, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/modifyDomainAlwaysInScope/', params);
};

/**
 * Removes a domain that's always in scope, with the given index. The index can be obtained with the view domainsAlwaysInScope.
 **/
Spider.prototype.removeDomainAlwaysInScope = function (idx, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/removeDomainAlwaysInScope/', {'idx' : idx}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/removeDomainAlwaysInScope/', {'idx' : idx});
};

/**
 * Enables all domains that are always in scope.
 **/
Spider.prototype.enableAllDomainsAlwaysInScope = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/enableAllDomainsAlwaysInScope/', callback);
    return;
  }
  return this.api.requestPromise('/spider/action/enableAllDomainsAlwaysInScope/');
};

/**
 * Disables all domains that are always in scope.
 **/
Spider.prototype.disableAllDomainsAlwaysInScope = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/disableAllDomainsAlwaysInScope/', callback);
    return;
  }
  return this.api.requestPromise('/spider/action/disableAllDomainsAlwaysInScope/');
};

Spider.prototype.setOptionHandleParameters = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionHandleParameters/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionHandleParameters/', {'String' : string});
};

/**
 * Use actions [add|modify|remove]DomainAlwaysInScope instead.
 **/
Spider.prototype.setOptionScopeString = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionScopeString/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionScopeString/', {'String' : string});
};

Spider.prototype.setOptionSkipURLString = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionSkipURLString/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionSkipURLString/', {'String' : string});
};

Spider.prototype.setOptionUserAgent = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionUserAgent/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionUserAgent/', {'String' : string});
};

/**
 * Sets whether or not a spider process should accept cookies while spidering.
 **/
Spider.prototype.setOptionAcceptCookies = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionAcceptCookies/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionAcceptCookies/', {'Boolean' : bool});
};

Spider.prototype.setOptionHandleODataParametersVisited = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionHandleODataParametersVisited/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionHandleODataParametersVisited/', {'Boolean' : bool});
};

/**
 * Sets the maximum number of child nodes (per node) that can be crawled, 0 means no limit.
 **/
Spider.prototype.setOptionMaxChildren = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionMaxChildren/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionMaxChildren/', {'Integer' : integer});
};

Spider.prototype.setOptionMaxDepth = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionMaxDepth/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionMaxDepth/', {'Integer' : integer});
};

Spider.prototype.setOptionMaxDuration = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionMaxDuration/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionMaxDuration/', {'Integer' : integer});
};

/**
 * Sets the maximum size, in bytes, that a response might have to be parsed. This allows the spider to skip big responses/files.
 **/
Spider.prototype.setOptionMaxParseSizeBytes = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionMaxParseSizeBytes/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionMaxParseSizeBytes/', {'Integer' : integer});
};

Spider.prototype.setOptionMaxScansInUI = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionMaxScansInUI/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionMaxScansInUI/', {'Integer' : integer});
};

Spider.prototype.setOptionParseComments = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionParseComments/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionParseComments/', {'Boolean' : bool});
};

Spider.prototype.setOptionParseGit = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionParseGit/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionParseGit/', {'Boolean' : bool});
};

Spider.prototype.setOptionParseRobotsTxt = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionParseRobotsTxt/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionParseRobotsTxt/', {'Boolean' : bool});
};

Spider.prototype.setOptionParseSVNEntries = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionParseSVNEntries/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionParseSVNEntries/', {'Boolean' : bool});
};

Spider.prototype.setOptionParseSitemapXml = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionParseSitemapXml/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionParseSitemapXml/', {'Boolean' : bool});
};

Spider.prototype.setOptionPostForm = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionPostForm/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionPostForm/', {'Boolean' : bool});
};

Spider.prototype.setOptionProcessForm = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionProcessForm/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionProcessForm/', {'Boolean' : bool});
};

Spider.prototype.setOptionRequestWaitTime = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionRequestWaitTime/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionRequestWaitTime/', {'Integer' : integer});
};

/**
 * Sets whether or not the 'Referer' header should be sent while spidering.
 **/
Spider.prototype.setOptionSendRefererHeader = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionSendRefererHeader/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionSendRefererHeader/', {'Boolean' : bool});
};

Spider.prototype.setOptionShowAdvancedDialog = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionShowAdvancedDialog/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionShowAdvancedDialog/', {'Boolean' : bool});
};

Spider.prototype.setOptionThreadCount = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/spider/action/setOptionThreadCount/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/spider/action/setOptionThreadCount/', {'Integer' : integer});
};

module.exports = Spider;
