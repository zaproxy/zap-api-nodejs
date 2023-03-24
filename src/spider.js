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
function Spider(clientApi) {
  this.api = clientApi;
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid
 **/
Spider.prototype.status = async function (args) {
  const params = { };
  if (args.scanid && args.scanid !== null) {
    params['scanId'] = args.scanid;
  }
    return await this.api.request('/spider/view/status/', params)
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid
 **/
Spider.prototype.results = async function (args) {
  const params = { };
  if (args.scanid && args.scanid !== null) {
    params['scanId'] = args.scanid;
  }
    return await this.api.request('/spider/view/results/', params)
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid
 **/
Spider.prototype.fullResults = async function (args) {
    return await this.api.request('/spider/view/fullResults/', {'scanId': args.scanid })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.scans = async function () {
    return await this.api.request('/spider/view/scans/')
}

/**
 * Gets the regexes of URLs excluded from the spider scans.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.excludedFromScan = async function () {
    return await this.api.request('/spider/view/excludedFromScan/')
}

/**
 * Returns a list of unique URLs from the history table based on HTTP messages added by the Spider.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.allUrls = async function () {
    return await this.api.request('/spider/view/allUrls/')
}

/**
 * Returns a list of the names of the nodes added to the Sites tree by the specified scan.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid
 **/
Spider.prototype.addedNodes = async function (args) {
  const params = { };
  if (args.scanid && args.scanid !== null) {
    params['scanId'] = args.scanid;
  }
    return await this.api.request('/spider/view/addedNodes/', params)
}

/**
 * Gets all the domains that are always in scope. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.domainsAlwaysInScope = async function () {
    return await this.api.request('/spider/view/domainsAlwaysInScope/')
}

/**
 * Use view domainsAlwaysInScope instead.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionDomainsAlwaysInScope = async function () {
    return await this.api.request('/spider/view/optionDomainsAlwaysInScope/')
}

/**
 * Use view domainsAlwaysInScope instead.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionDomainsAlwaysInScopeEnabled = async function () {
    return await this.api.request('/spider/view/optionDomainsAlwaysInScopeEnabled/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionHandleParameters = async function () {
    return await this.api.request('/spider/view/optionHandleParameters/')
}

/**
 * Gets the maximum number of child nodes (per node) that can be crawled, 0 means no limit.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionMaxChildren = async function () {
    return await this.api.request('/spider/view/optionMaxChildren/')
}

/**
 * Gets the maximum depth the spider can crawl, 0 if unlimited.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionMaxDepth = async function () {
    return await this.api.request('/spider/view/optionMaxDepth/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionMaxDuration = async function () {
    return await this.api.request('/spider/view/optionMaxDuration/')
}

/**
 * Gets the maximum size, in bytes, that a response might have to be parsed.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionMaxParseSizeBytes = async function () {
    return await this.api.request('/spider/view/optionMaxParseSizeBytes/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionMaxScansInUI = async function () {
    return await this.api.request('/spider/view/optionMaxScansInUI/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionRequestWaitTime = async function () {
    return await this.api.request('/spider/view/optionRequestWaitTime/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionSkipURLString = async function () {
    return await this.api.request('/spider/view/optionSkipURLString/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionThreadCount = async function () {
    return await this.api.request('/spider/view/optionThreadCount/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionUserAgent = async function () {
    return await this.api.request('/spider/view/optionUserAgent/')
}

/**
 * Gets whether or not a spider process should accept cookies while spidering.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionAcceptCookies = async function () {
    return await this.api.request('/spider/view/optionAcceptCookies/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionHandleODataParametersVisited = async function () {
    return await this.api.request('/spider/view/optionHandleODataParametersVisited/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionParseComments = async function () {
    return await this.api.request('/spider/view/optionParseComments/')
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionParseDsStore = async function () {
    return await this.api.request('/spider/view/optionParseDsStore/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionParseGit = async function () {
    return await this.api.request('/spider/view/optionParseGit/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionParseRobotsTxt = async function () {
    return await this.api.request('/spider/view/optionParseRobotsTxt/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionParseSVNEntries = async function () {
    return await this.api.request('/spider/view/optionParseSVNEntries/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionParseSitemapXml = async function () {
    return await this.api.request('/spider/view/optionParseSitemapXml/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionPostForm = async function () {
    return await this.api.request('/spider/view/optionPostForm/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionProcessForm = async function () {
    return await this.api.request('/spider/view/optionProcessForm/')
}

/**
 * Gets whether or not the 'Referer' header should be sent while spidering.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionSendRefererHeader = async function () {
    return await this.api.request('/spider/view/optionSendRefererHeader/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.optionShowAdvancedDialog = async function () {
    return await this.api.request('/spider/view/optionShowAdvancedDialog/')
}

/**
 * Runs the spider against the given URL (or context). Optionally, the 'maxChildren' parameter can be set to limit the number of children scanned, the 'recurse' parameter can be used to prevent the spider from seeding recursively, the parameter 'contextName' can be used to constrain the scan to a Context and the parameter 'subtreeOnly' allows to restrict the spider under a site's subtree (using the specified 'url').
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} url
 * @param {string} maxchildren
 * @param {string} recurse
 * @param {string} contextname
 * @param {string} subtreeonly
 **/
Spider.prototype.scan = async function (args) {
  const params = { };
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (args.maxchildren && args.maxchildren !== null) {
    params['maxChildren'] = args.maxchildren;
  }
  if (args.recurse && args.recurse !== null) {
    params['recurse'] = args.recurse;
  }
  if (args.contextname && args.contextname !== null) {
    params['contextName'] = args.contextname;
  }
  if (args.subtreeonly && args.subtreeonly !== null) {
    params['subtreeOnly'] = args.subtreeonly;
  }
    return await this.api.request('/spider/action/scan/', params)
}

/**
 * Runs the spider from the perspective of a User, obtained using the given Context ID and User ID. See 'scan' action for more details.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} contextid
 * @param {string} userid
 * @param {string} url
 * @param {string} maxchildren
 * @param {string} recurse
 * @param {string} subtreeonly
 **/
Spider.prototype.scanAsUser = async function (args) {
  const params = {'contextId': args.contextid, 'userId': args.userid };
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (args.maxchildren && args.maxchildren !== null) {
    params['maxChildren'] = args.maxchildren;
  }
  if (args.recurse && args.recurse !== null) {
    params['recurse'] = args.recurse;
  }
  if (args.subtreeonly && args.subtreeonly !== null) {
    params['subtreeOnly'] = args.subtreeonly;
  }
    return await this.api.request('/spider/action/scanAsUser/', params)
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid
 **/
Spider.prototype.pause = async function (args) {
    return await this.api.request('/spider/action/pause/', {'scanId': args.scanid })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid
 **/
Spider.prototype.resume = async function (args) {
    return await this.api.request('/spider/action/resume/', {'scanId': args.scanid })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid
 **/
Spider.prototype.stop = async function (args) {
  const params = { };
  if (args.scanid && args.scanid !== null) {
    params['scanId'] = args.scanid;
  }
    return await this.api.request('/spider/action/stop/', params)
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid
 **/
Spider.prototype.removeScan = async function (args) {
    return await this.api.request('/spider/action/removeScan/', {'scanId': args.scanid })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.pauseAllScans = async function () {
    return await this.api.request('/spider/action/pauseAllScans/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.resumeAllScans = async function () {
    return await this.api.request('/spider/action/resumeAllScans/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.stopAllScans = async function () {
    return await this.api.request('/spider/action/stopAllScans/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.removeAllScans = async function () {
    return await this.api.request('/spider/action/removeAllScans/')
}

/**
 * Clears the regexes of URLs excluded from the spider scans.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.clearExcludedFromScan = async function () {
    return await this.api.request('/spider/action/clearExcludedFromScan/')
}

/**
 * Adds a regex of URLs that should be excluded from the spider scans.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} regex
 **/
Spider.prototype.excludeFromScan = async function (args) {
    return await this.api.request('/spider/action/excludeFromScan/', {'regex': args.regex })
}

/**
 * Adds a new domain that's always in scope, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} value
 * @param {string} isregex
 * @param {string} isenabled
 **/
Spider.prototype.addDomainAlwaysInScope = async function (args) {
  const params = {'value': args.value };
  if (args.isregex && args.isregex !== null) {
    params['isRegex'] = args.isregex;
  }
  if (args.isenabled && args.isenabled !== null) {
    params['isEnabled'] = args.isenabled;
  }
    return await this.api.request('/spider/action/addDomainAlwaysInScope/', params)
}

/**
 * Modifies a domain that's always in scope. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view domainsAlwaysInScope.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} idx
 * @param {string} value
 * @param {string} isregex
 * @param {string} isenabled
 **/
Spider.prototype.modifyDomainAlwaysInScope = async function (args) {
  const params = {'idx': args.idx };
  if (args.value && args.value !== null) {
    params['value'] = args.value;
  }
  if (args.isregex && args.isregex !== null) {
    params['isRegex'] = args.isregex;
  }
  if (args.isenabled && args.isenabled !== null) {
    params['isEnabled'] = args.isenabled;
  }
    return await this.api.request('/spider/action/modifyDomainAlwaysInScope/', params)
}

/**
 * Removes a domain that's always in scope, with the given index. The index can be obtained with the view domainsAlwaysInScope.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} idx
 **/
Spider.prototype.removeDomainAlwaysInScope = async function (args) {
    return await this.api.request('/spider/action/removeDomainAlwaysInScope/', {'idx': args.idx })
}

/**
 * Enables all domains that are always in scope.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.enableAllDomainsAlwaysInScope = async function () {
    return await this.api.request('/spider/action/enableAllDomainsAlwaysInScope/')
}

/**
 * Disables all domains that are always in scope.
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.disableAllDomainsAlwaysInScope = async function () {
    return await this.api.request('/spider/action/disableAllDomainsAlwaysInScope/')
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Spider.prototype.setOptionHandleParameters = async function (args) {
    return await this.api.request('/spider/action/setOptionHandleParameters/', {'String': args.string })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Spider.prototype.setOptionSkipURLString = async function (args) {
    return await this.api.request('/spider/action/setOptionSkipURLString/', {'String': args.string })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Spider.prototype.setOptionUserAgent = async function (args) {
    return await this.api.request('/spider/action/setOptionUserAgent/', {'String': args.string })
}

/**
 * Sets whether or not a spider process should accept cookies while spidering.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionAcceptCookies = async function (args) {
    return await this.api.request('/spider/action/setOptionAcceptCookies/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionHandleODataParametersVisited = async function (args) {
    return await this.api.request('/spider/action/setOptionHandleODataParametersVisited/', {'Boolean': args.bool })
}

/**
 * Sets the maximum number of child nodes (per node) that can be crawled, 0 means no limit.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer
 **/
Spider.prototype.setOptionMaxChildren = async function (args) {
    return await this.api.request('/spider/action/setOptionMaxChildren/', {'Integer': args.integer })
}

/**
 * Sets the maximum depth the spider can crawl, 0 for unlimited depth.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer
 **/
Spider.prototype.setOptionMaxDepth = async function (args) {
    return await this.api.request('/spider/action/setOptionMaxDepth/', {'Integer': args.integer })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer
 **/
Spider.prototype.setOptionMaxDuration = async function (args) {
    return await this.api.request('/spider/action/setOptionMaxDuration/', {'Integer': args.integer })
}

/**
 * Sets the maximum size, in bytes, that a response might have to be parsed. This allows the spider to skip big responses/files.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer
 **/
Spider.prototype.setOptionMaxParseSizeBytes = async function (args) {
    return await this.api.request('/spider/action/setOptionMaxParseSizeBytes/', {'Integer': args.integer })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer
 **/
Spider.prototype.setOptionMaxScansInUI = async function (args) {
    return await this.api.request('/spider/action/setOptionMaxScansInUI/', {'Integer': args.integer })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionParseComments = async function (args) {
    return await this.api.request('/spider/action/setOptionParseComments/', {'Boolean': args.bool })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Spider.prototype.setOptionParseDsStore = async function (args) {
    return await this.api.request('/spider/action/setOptionParseDsStore/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionParseGit = async function (args) {
    return await this.api.request('/spider/action/setOptionParseGit/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionParseRobotsTxt = async function (args) {
    return await this.api.request('/spider/action/setOptionParseRobotsTxt/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionParseSVNEntries = async function (args) {
    return await this.api.request('/spider/action/setOptionParseSVNEntries/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionParseSitemapXml = async function (args) {
    return await this.api.request('/spider/action/setOptionParseSitemapXml/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionPostForm = async function (args) {
    return await this.api.request('/spider/action/setOptionPostForm/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionProcessForm = async function (args) {
    return await this.api.request('/spider/action/setOptionProcessForm/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer
 **/
Spider.prototype.setOptionRequestWaitTime = async function (args) {
    return await this.api.request('/spider/action/setOptionRequestWaitTime/', {'Integer': args.integer })
}

/**
 * Sets whether or not the 'Referer' header should be sent while spidering.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionSendRefererHeader = async function (args) {
    return await this.api.request('/spider/action/setOptionSendRefererHeader/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool
 **/
Spider.prototype.setOptionShowAdvancedDialog = async function (args) {
    return await this.api.request('/spider/action/setOptionShowAdvancedDialog/', {'Boolean': args.bool })
}

/**
 * 
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer
 **/
Spider.prototype.setOptionThreadCount = async function (args) {
    return await this.api.request('/spider/action/setOptionThreadCount/', {'Integer': args.integer })
}

module.exports = Spider;
