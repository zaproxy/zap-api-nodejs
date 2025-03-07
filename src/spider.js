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

class Spider {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Retrieves the status of a specific spider scan.
   *
   * @param {{ scanId?: string }} [args={}] - Object containing:
   *   - scanId: (Optional) The ID of the scan.
   * @returns {Promise<any>} A promise resolving with the scan status.
   */
  status = ({ scanId } = {}) => {
    const params = {};
    if (scanId) params.scanId = scanId;
    return this.api.request('/spider/view/status', params);
  };

  /**
   * Retrieves the partial results (URLs found) for a specific spider scan.
   *
   * @param {{ scanId?: string }} [args={}] - Object containing:
   *   - scanId: (Optional) The ID of the scan.
   * @returns {Promise<any>} A promise resolving with the partial results.
   */
  results = ({ scanId } = {}) => {
    const params = {};
    if (scanId) params.scanId = scanId;
    return this.api.request('/spider/view/results', params);
  };

  /**
   * Retrieves the full results for a specific spider scan.
   *
   * @param {{ scanId: string }} args - Object containing:
   *   - scanId: The ID of the scan.
   * @returns {Promise<any>} A promise resolving with the full results.
   */
  fullResults = ({ scanId }) =>
    this.api.request('/spider/view/fullResults', { scanId });

  /**
   * Retrieves a list of all spider scans.
   *
   * @returns {Promise<any>} A promise resolving with the list of scans.
   */
  scans = () =>
    this.api.request('/spider/view/scans');

  /**
   * Retrieves the regexes of URLs excluded from spider scans.
   *
   * @returns {Promise<any>} A promise resolving with the exclusion regexes.
   */
  excludedFromScan = () =>
    this.api.request('/spider/view/excludedFromScan');

  /**
   * Returns a list of unique URLs from the history table added by the spider.
   *
   * @returns {Promise<any>} A promise resolving with the unique URLs.
   */
  allUrls = () =>
    this.api.request('/spider/view/allUrls');

  /**
   * Returns a list of node names added to the Sites tree by a scan.
   *
   * @param {{ scanId?: string }} [args={}] - Object containing:
   *   - scanId: (Optional) The ID of the scan.
   * @returns {Promise<any>} A promise resolving with the list of added nodes.
   */
  addedNodes = ({ scanId } = {}) => {
    const params = {};
    if (scanId) params.scanId = scanId;
    return this.api.request('/spider/view/addedNodes', params);
  };

  /**
   * Gets all domains that are always in scope.
   *
   * @returns {Promise<any>} A promise resolving with the domains.
   */
  domainsAlwaysInScope = () =>
    this.api.request('/spider/view/domainsAlwaysInScope');

  /**
   * Returns the option for domains always in scope.
   *
   * @returns {Promise<any>} A promise resolving with the option.
   */
  optionDomainsAlwaysInScope = () =>
    this.api.request('/spider/view/optionDomainsAlwaysInScope');

  /**
   * Returns whether domains always in scope are enabled.
   *
   * @returns {Promise<any>} A promise resolving with the enabled flag.
   */
  optionDomainsAlwaysInScopeEnabled = () =>
    this.api.request('/spider/view/optionDomainsAlwaysInScopeEnabled');

  /**
   * Gets the parameter handling mode for the spider.
   *
   * @returns {Promise<any>} A promise resolving with the parameter handling mode.
   */
  optionHandleParameters = () =>
    this.api.request('/spider/view/optionHandleParameters');

  /**
   * Gets the maximum number of child nodes per node that can be crawled.
   *
   * @returns {Promise<any>} A promise resolving with the maximum children setting.
   */
  optionMaxChildren = () =>
    this.api.request('/spider/view/optionMaxChildren');

  /**
   * Gets the maximum crawl depth (0 for unlimited).
   *
   * @returns {Promise<any>} A promise resolving with the maximum crawl depth.
   */
  optionMaxDepth = () =>
    this.api.request('/spider/view/optionMaxDepth');

  /**
   * Gets the maximum duration (in minutes) that the spider can run.
   *
   * @returns {Promise<any>} A promise resolving with the maximum duration.
   */
  optionMaxDuration = () =>
    this.api.request('/spider/view/optionMaxDuration');

  /**
   * Gets the maximum parse size in bytes for responses.
   *
   * @returns {Promise<any>} A promise resolving with the maximum parse size.
   */
  optionMaxParseSizeBytes = () =>
    this.api.request('/spider/view/optionMaxParseSizeBytes');

  /**
   * Gets the maximum number of scans that can appear in the UI.
   *
   * @returns {Promise<any>} A promise resolving with the maximum UI scans.
   */
  optionMaxScansInUI = () =>
    this.api.request('/spider/view/optionMaxScansInUI');

  /**
   * Gets the current skip URL string used by the spider.
   *
   * @returns {Promise<any>} A promise resolving with the skip URL string.
   */
  optionSkipURLString = () =>
    this.api.request('/spider/view/optionSkipURLString');

  /**
   * Gets the number of threads the spider is allowed to use.
   *
   * @returns {Promise<any>} A promise resolving with the thread count.
   */
  optionThreadCount = () =>
    this.api.request('/spider/view/optionThreadCount');

  /**
   * Gets the user agent string used by the spider.
   *
   * @returns {Promise<any>} A promise resolving with the user agent string.
   */
  optionUserAgent = () =>
    this.api.request('/spider/view/optionUserAgent');

  /**
   * Checks whether the spider accepts cookies.
   *
   * @returns {Promise<any>} A promise resolving with the cookie acceptance flag.
   */
  optionAcceptCookies = () =>
    this.api.request('/spider/view/optionAcceptCookies');

  /**
   * Checks whether the spider handles OData parameters.
   *
   * @returns {Promise<any>} A promise resolving with the OData handling flag.
   */
  optionHandleODataParametersVisited = () =>
    this.api.request('/spider/view/optionHandleODataParametersVisited');

  /**
   * Checks whether the spider parses comments.
   *
   * @returns {Promise<any>} A promise resolving with the parse comments flag.
   */
  optionParseComments = () =>
    this.api.request('/spider/view/optionParseComments');

  /**
   * Checks whether the spider parses .ds_store files.
   *
   * @returns {Promise<any>} A promise resolving with the parse .ds_store flag.
   */
  optionParseDsStore = () =>
    this.api.request('/spider/view/optionParseDsStore');

  /**
   * Checks whether the spider parses Git metadata.
   *
   * @returns {Promise<any>} A promise resolving with the parse Git flag.
   */
  optionParseGit = () =>
    this.api.request('/spider/view/optionParseGit');

  /**
   * Checks whether the spider parses robots.txt.
   *
   * @returns {Promise<any>} A promise resolving with the parse robots.txt flag.
   */
  optionParseRobotsTxt = () =>
    this.api.request('/spider/view/optionParseRobotsTxt');

  /**
   * Checks whether the spider parses SVN entries.
   *
   * @returns {Promise<any>} A promise resolving with the parse SVN entries flag.
   */
  optionParseSVNEntries = () =>
    this.api.request('/spider/view/optionParseSVNEntries');

  /**
   * Checks whether the spider parses sitemap.xml files.
   *
   * @returns {Promise<any>} A promise resolving with the parse sitemap.xml flag.
   */
  optionParseSitemapXml = () =>
    this.api.request('/spider/view/optionParseSitemapXml');

  /**
   * Checks whether the spider should POST forms.
   *
   * @returns {Promise<any>} A promise resolving with the POST form flag.
   */
  optionPostForm = () =>
    this.api.request('/spider/view/optionPostForm');

  /**
   * Checks whether the spider processes forms.
   *
   * @returns {Promise<any>} A promise resolving with the process form flag.
   */
  optionProcessForm = () =>
    this.api.request('/spider/view/optionProcessForm');

  /**
   * Checks whether the 'Referer' header is sent during spidering.
   *
   * @returns {Promise<any>} A promise resolving with the send Referer header flag.
   */
  optionSendRefererHeader = () =>
    this.api.request('/spider/view/optionSendRefererHeader');

  /**
   * Checks whether the advanced dialog is shown in the spider UI.
   *
   * @returns {Promise<any>} A promise resolving with the advanced dialog flag.
   */
  optionShowAdvancedDialog = () =>
    this.api.request('/spider/view/optionShowAdvancedDialog');

  /**
   * Sets how the spider handles parameters.
   *
   * @param {{ string: string }} args - Object containing:
   *   - string: The parameter handling mode.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionHandleParameters = ({ string }) =>
    this.api.request('/spider/action/setOptionHandleParameters', { String: string });

  /**
   * Sets the skip URL string for the spider.
   *
   * @param {{ string: string }} args - Object containing:
   *   - string: The skip URL string or pattern.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionSkipURLString = ({ string }) =>
    this.api.request('/spider/action/setOptionSkipURLString', { String: string });

  /**
   * Sets the user agent string for the spider.
   *
   * @param {{ string: string }} args - Object containing:
   *   - string: The user agent string.
   * @returns {Promise<any>} A promise resolving when the user agent is set.
   */
  setOptionUserAgent = ({ string }) =>
    this.api.request('/spider/action/setOptionUserAgent', { String: string });

  /**
   * Sets whether the spider accepts cookies.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to accept cookies, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionAcceptCookies = ({ bool }) =>
    this.api.request('/spider/action/setOptionAcceptCookies', { Boolean: bool });

  /**
   * Sets whether the spider handles OData parameters.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to handle OData parameters, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionHandleODataParametersVisited = ({ bool }) =>
    this.api.request('/spider/action/setOptionHandleODataParametersVisited', { Boolean: bool });

  /**
   * Sets the maximum number of child nodes per node.
   *
   * @param {{ integer: number }} args - Object containing:
   *   - integer: The maximum number of child nodes.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionMaxChildren = ({ integer }) =>
    this.api.request('/spider/action/setOptionMaxChildren', { Integer: integer });

  /**
   * Sets the maximum crawl depth (0 for unlimited).
   *
   * @param {{ integer: number }} args - Object containing:
   *   - integer: The maximum crawl depth.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionMaxDepth = ({ integer }) =>
    this.api.request('/spider/action/setOptionMaxDepth', { Integer: integer });

  /**
   * Sets the maximum duration (in minutes) the spider can run.
   *
   * @param {{ integer: number }} args - Object containing:
   *   - integer: The maximum duration in minutes.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionMaxDuration = ({ integer }) =>
    this.api.request('/spider/action/setOptionMaxDuration', { Integer: integer });

  /**
   * Sets the maximum parse size in bytes for responses.
   *
   * @param {{ integer: number }} args - Object containing:
   *   - integer: The maximum parse size in bytes.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionMaxParseSizeBytes = ({ integer }) =>
    this.api.request('/spider/action/setOptionMaxParseSizeBytes', { Integer: integer });

  /**
   * Sets the maximum number of scans in the UI.
   *
   * @param {{ integer: number }} args - Object containing:
   *   - integer: The maximum number of scans.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionMaxScansInUI = ({ integer }) =>
    this.api.request('/spider/action/setOptionMaxScansInUI', { Integer: integer });

  /**
   * Sets whether the spider parses comments.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to parse comments, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionParseComments = ({ bool }) =>
    this.api.request('/spider/action/setOptionParseComments', { Boolean: bool });

  /**
   * Sets whether the spider parses .ds_store files.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to parse .ds_store files, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionParseDsStore = ({ bool }) =>
    this.api.request('/spider/action/setOptionParseDsStore', { Boolean: bool });

  /**
   * Sets whether the spider parses Git metadata.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to parse Git metadata, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionParseGit = ({ bool }) =>
    this.api.request('/spider/action/setOptionParseGit', { Boolean: bool });

  /**
   * Sets whether the spider parses robots.txt.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to parse robots.txt, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionParseRobotsTxt = ({ bool }) =>
    this.api.request('/spider/action/setOptionParseRobotsTxt', { Boolean: bool });

  /**
   * Sets whether the spider parses SVN entries.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to parse SVN entries, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionParseSVNEntries = ({ bool }) =>
    this.api.request('/spider/action/setOptionParseSVNEntries', { Boolean: bool });

  /**
   * Sets whether the spider parses sitemap.xml files.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to parse sitemap.xml files, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionParseSitemapXml = ({ bool }) =>
    this.api.request('/spider/action/setOptionParseSitemapXml', { Boolean: bool });

  /**
   * Sets whether the spider should POST forms.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to POST forms, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionPostForm = ({ bool }) =>
    this.api.request('/spider/action/setOptionPostForm', { Boolean: bool });

  /**
   * Sets whether the spider processes forms.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to process forms, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionProcessForm = ({ bool }) =>
    this.api.request('/spider/action/setOptionProcessForm', { Boolean: bool });

  /**
   * Sets whether the 'Referer' header is sent during spidering.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to send the 'Referer' header, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionSendRefererHeader = ({ bool }) =>
    this.api.request('/spider/action/setOptionSendRefererHeader', { Boolean: bool });

  /**
   * Sets whether the advanced dialog is shown in the spider UI.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to show the advanced dialog, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionShowAdvancedDialog = ({ bool }) =>
    this.api.request('/spider/action/setOptionShowAdvancedDialog', { Boolean: bool });

  /**
   * Sets the number of threads the spider should use.
   *
   * @param {{ integer: number }} args - Object containing:
   *   - integer: The number of threads.
   * @returns {Promise<any>} A promise resolving when the thread count is set.
   */
  setOptionThreadCount = ({ integer }) =>
    this.api.request('/spider/action/setOptionThreadCount', { Integer: integer });

  /**
   * Runs the spider from the perspective of a given user in a context.
   *
   * @param {{
   *   contextId: string,
   *   userId: string,
   *   url?: string,
   *   maxChildren?: string,
   *   recurse?: string,
   *   subtreeOnly?: string
   * }} args - Object containing:
   *   - contextId: The context's ID.
   *   - userId: The user's ID.
   *   - url: (Optional) The starting URL.
   *   - maxChildren: (Optional) Maximum children per node.
   *   - recurse: (Optional) Whether to recurse.
   *   - subtreeOnly: (Optional) Whether to limit the scan to a subtree.
   * @returns {Promise<any>} A promise resolving with the scan result.
   */
  scanAsUser = ({ contextId, userId, url, maxChildren, recurse, subtreeOnly }) =>
    this.api.request('/spider/action/scanAsUser', { contextId, userId, url, maxChildren, recurse, subtreeOnly });

  /**
   * Runs the spider with the provided options.
   *
   * @param {{
   *   url?: string,
   *   maxChildren?: string,
   *   recurse?: string,
   *   contextName?: string,
   *   subtreeOnly?: string
   * }} [args={}] - Object containing spider options.
   * @returns {Promise<any>} A promise resolving with the scan result.
   */
  scan = ({ url, maxChildren, recurse, contextName, subtreeOnly } = {}) =>
    this.api.request('/spider/action/scan', { url, maxChildren, recurse, contextName, subtreeOnly });

  /**
   * Pauses a running spider scan.
   *
   * @param {{ scanId: string }} args - Object containing the scan ID.
   * @returns {Promise<any>} A promise resolving when the scan is paused.
   */
  pause = ({ scanId }) =>
    this.api.request('/spider/action/pause', { scanId });

  /**
   * Resumes a paused spider scan.
   *
   * @param {{ scanId: string }} args - Object containing the scan ID.
   * @returns {Promise<any>} A promise resolving when the scan is resumed.
   */
  resume = ({ scanId }) =>
    this.api.request('/spider/action/resume', { scanId });

  /**
   * Stops a running spider scan.
   *
   * @param {{ scanId?: string }} [args={}] - Object optionally containing the scan ID.
   * @returns {Promise<any>} A promise resolving when the scan is stopped.
   */
  stop = ({ scanId } = {}) => {
    const params = {};
    if (scanId) params.scanId = scanId;
    return this.api.request('/spider/action/stop', params);
  };

  /**
   * Removes a spider scan by its ID.
   *
   * @param {{ scanId: string }} args - Object containing the scan ID.
   * @returns {Promise<any>} A promise resolving when the scan is removed.
   */
  removeScan = ({ scanId }) =>
    this.api.request('/spider/action/removeScan', { scanId });

  /**
   * Pauses all ongoing spider scans.
   *
   * @returns {Promise<any>} A promise resolving when all scans are paused.
   */
  pauseAllScans = () =>
    this.api.request('/spider/action/pauseAllScans');

  /**
   * Resumes all paused spider scans.
   *
   * @returns {Promise<any>} A promise resolving when all scans are resumed.
   */
  resumeAllScans = () =>
    this.api.request('/spider/action/resumeAllScans');

  /**
   * Stops all ongoing spider scans.
   *
   * @returns {Promise<any>} A promise resolving when all scans are stopped.
   */
  stopAllScans = () =>
    this.api.request('/spider/action/stopAllScans');

  /**
   * Removes all spider scans.
   *
   * @returns {Promise<any>} A promise resolving when all scans are removed.
   */
  removeAllScans = () =>
    this.api.request('/spider/action/removeAllScans');

  /**
   * Clears the regexes of URLs excluded from spider scans.
   *
   * @returns {Promise<any>} A promise resolving when the exclusions are cleared.
   */
  clearExcludedFromScan = () =>
    this.api.request('/spider/action/clearExcludedFromScan');

  /**
   * Adds a regex for URLs to be excluded from spider scans.
   *
   * @param {{ regex: string }} args - Object containing:
   *   - regex: The regex pattern.
   * @returns {Promise<any>} A promise resolving when the exclusion is added.
   */
  excludeFromScan = ({ regex }) =>
    this.api.request('/spider/action/excludeFromScan', { regex });

  /**
   * Adds a domain to always be in scope.
   *
   * @param {{
   *   value: string,
   *   isRegex?: boolean,
   *   isEnabled?: boolean
   * }} args - Object containing:
   *   - value: The domain or regex.
   *   - isRegex: (Optional) True if value is a regex.
   *   - isEnabled: (Optional) True if the domain is enabled.
   * @returns {Promise<any>} A promise resolving when the domain is added.
   */
  addDomainAlwaysInScope = ({ value, isRegex, isEnabled }) =>
    this.api.request('/spider/action/addDomainAlwaysInScope', { value, isRegex, isEnabled });

  /**
   * Modifies a domain that's always in scope.
   *
   * @param {{
   *   idx: number,
   *   value?: string,
   *   isRegex?: boolean,
   *   isEnabled?: boolean
   * }} args - Object containing:
   *   - idx: The index of the domain.
   *   - value: (Optional) The new domain or regex.
   *   - isRegex: (Optional) True if value is a regex.
   *   - isEnabled: (Optional) True if the domain should be enabled.
   * @returns {Promise<any>} A promise resolving when the domain is modified.
   */
  modifyDomainAlwaysInScope = ({ idx, value, isRegex, isEnabled }) =>
    this.api.request('/spider/action/modifyDomainAlwaysInScope', { idx, value, isRegex, isEnabled });

  /**
   * Removes a domain that's always in scope by its index.
   *
   * @param {{ idx: number }} args - Object containing:
   *   - idx: The index of the domain to remove.
   * @returns {Promise<any>} A promise resolving when the domain is removed.
   */
  removeDomainAlwaysInScope = ({ idx }) =>
    this.api.request('/spider/action/removeDomainAlwaysInScope', { idx });

  /**
   * Enables all domains that are always in scope.
   *
   * @returns {Promise<any>} A promise resolving when all domains are enabled.
   */
  enableAllDomainsAlwaysInScope = () =>
    this.api.request('/spider/action/enableAllDomainsAlwaysInScope');

  /**
   * Disables all domains that are always in scope.
   *
   * @returns {Promise<any>} A promise resolving when all domains are disabled.
   */
  disableAllDomainsAlwaysInScope = () =>
    this.api.request('/spider/action/disableAllDomainsAlwaysInScope');
}

module.exports = Spider;
