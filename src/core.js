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

class Core {
  /**
   * Creates an instance of the Core API.
   * @param {object} clientApi - The client API instance.
   */
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets the names of the hosts accessed through/by ZAP.
   * @returns {Promise<any>} A promise that resolves with the hosts.
   */
  getHosts = () => this.api.request('/core/view/hosts');

  /**
   * Gets the sites accessed through/by ZAP (scheme and domain).
   * @returns {Promise<any>} A promise that resolves with the sites.
   */
  getSites = () => this.api.request('/core/view/sites');

  /**
   * Gets the URLs accessed through/by ZAP, optionally filtering by base URL.
   * @param {{ baseurl: string }} param0 - Object containing the base URL.
   * @returns {Promise<any>} A promise that resolves with the URLs.
   */
  getUrls = ({ baseurl }) => this.api.request('/core/view/urls', { baseurl });

  /**
   * Gets the child nodes underneath the specified URL in the Sites tree.
   * @param {{ url: string }} param0 - Object containing the URL.
   * @returns {Promise<any>} A promise that resolves with the child nodes.
   */
  childNodes = ({ url }) => this.api.request('/core/view/childNodes', { url });

  /**
   * Gets the HTTP message with the given ID.
   * @param {{ id: string }} param0 - Object containing the message ID.
   * @returns {Promise<any>} A promise that resolves with the message details.
   */
  message = ({ id }) => this.api.request('/core/view/message', { id });

  /**
   * Gets the HTTP messages sent by ZAP, optionally filtering by base URL and paginating.
   * @param {{ baseurl: string, start: string, count: string }} param0 - Object containing base URL, start index, and count.
   * @returns {Promise<any>} A promise that resolves with the messages.
   */
  messages = ({ baseurl, start, count }) => this.api.request('/core/view/messages', { baseurl, start, count });

  /**
   * Gets the HTTP messages with the given IDs.
   * @param {{ ids: string }} param0 - Object containing comma-separated message IDs.
   * @returns {Promise<any>} A promise that resolves with the messages.
   */
  messagesById = ({ ids }) => this.api.request('/core/view/messagesById', { ids });

  /**
   * Gets the number of messages, optionally filtered by base URL.
   * @param {{ baseurl: string }} param0 - Object containing the base URL.
   * @returns {Promise<any>} A promise that resolves with the message count.
   */
  numberOfMessages = ({ baseurl }) => this.api.request('/core/view/numberOfMessages', { baseurl });

  /**
   * Gets the current mode of ZAP.
   * @returns {Promise<any>} A promise that resolves with the mode.
   */
  mode = () => this.api.request('/core/view/mode');

  /**
   * Gets the ZAP version.
   * @returns {Promise<any>} A promise that resolves with the version.
   */
  version = () => this.api.request('/core/view/version');

  /**
   * Gets the regular expressions applied to URLs to exclude them from the local proxies.
   * @returns {Promise<any>} A promise that resolves with the exclusion regexes.
   */
  excludedFromProxy = () => this.api.request('/core/view/excludedFromProxy');

  /**
   * Gets the location of the current session file.
   * @returns {Promise<any>} A promise that resolves with the session file location.
   */
  sessionLocation = () => this.api.request('/core/view/sessionLocation');

  /**
   * Gets the domains excluded from the outgoing proxy.
   * @returns {Promise<any>} A promise that resolves with the excluded domains.
   */
  proxyChainExcludedDomains = () => this.api.request('/core/view/proxyChainExcludedDomains');

  /**
   * Gets the path to ZAP's home directory.
   * @returns {Promise<any>} A promise that resolves with the home directory path.
   */
  zapHomePath = () => this.api.request('/core/view/zapHomePath');

  /**
   * Gets the maximum number of alert instances to include in a report.
   * @returns {Promise<any>} A promise that resolves with the maximum alert instances.
   */
  optionMaximumAlertInstances = () => this.api.request('/core/view/optionMaximumAlertInstances');

  /**
   * Gets whether related alerts will be merged in reports.
   * @returns {Promise<any>} A promise that resolves with the merge-related alerts setting.
   */
  optionMergeRelatedAlerts = () => this.api.request('/core/view/optionMergeRelatedAlerts');

  /**
   * Gets the file path for the alert overrides file.
   * @returns {Promise<any>} A promise that resolves with the alert overrides file path.
   */
  optionAlertOverridesFilePath = () => this.api.request('/core/view/optionAlertOverridesFilePath');

  /**
   * Gets the home directory for ZAP.
   * @returns {Promise<any>} A promise that resolves with the home directory.
   */
  homeDirectory = () => this.api.request('/core/view/homeDirectory');

  /**
   * Gets the proxy chain skip name option.
   * @returns {Promise<any>} A promise that resolves with the proxy chain skip name.
   */
  optionProxyChainSkipName = () => this.api.request('/core/view/optionProxyChainSkipName');

  /**
   * Gets the proxy excluded domains.
   * @returns {Promise<any>} A promise that resolves with the proxy excluded domains.
   */
  optionProxyExcludedDomains = () => this.api.request('/core/view/optionProxyExcludedDomains');

  /**
   * Gets whether proxy excluded domains are enabled.
   * @returns {Promise<any>} A promise that resolves with the proxy excluded domains enabled flag.
   */
  optionProxyExcludedDomainsEnabled = () => this.api.request('/core/view/optionProxyExcludedDomainsEnabled');

  /**
   * Gets the alert with the specified ID.
   * @param {{ id: string }} param0 - Object containing the alert ID.
   * @returns {Promise<any>} A promise that resolves with the alert details.
   */
  alert = ({ id }) => this.api.request('/core/view/alert', { id });

  /**
   * Gets alerts, optionally filtered by base URL, start index, count, and risk ID.
   * @param {{ baseurl?: string, start?: string, count?: string, riskId?: string }} [params={}]
   * @returns {Promise<any>} A promise that resolves with the alerts.
   */
  alerts = (params = {}) => this.api.request('/core/view/alerts', params);

  /**
   * Gets a summary of alerts, optionally filtered by base URL.
   * @param {{ baseurl: string }} param0 - Object containing the base URL.
   * @returns {Promise<any>} A promise that resolves with the alerts summary.
   */
  alertsSummary = ({ baseurl }) => this.api.request('/core/view/alertsSummary', { baseurl });

  /**
   * Gets the number of alerts, optionally filtered by base URL and risk ID.
   * @param {{ baseurl: string, riskId: string }} param0 - Object containing the base URL and risk ID.
   * @returns {Promise<any>} A promise that resolves with the number of alerts.
   */
  numberOfAlerts = ({ baseurl, riskId }) => this.api.request('/core/view/numberOfAlerts', { baseurl, riskId });

  /**
   * Gets the default user agent for HTTP messages.
   * @returns {Promise<any>} A promise that resolves with the default user agent.
   */
  optionDefaultUserAgent = () => this.api.request('/core/view/optionDefaultUserAgent');

  /**
   * Gets the TTL for successful DNS queries (in seconds).
   * @returns {Promise<any>} A promise that resolves with the DNS TTL.
   */
  optionDnsTtlSuccessfulQueries = () => this.api.request('/core/view/optionDnsTtlSuccessfulQueries');

  /**
   * Gets the current HTTP state.
   * @returns {Promise<any>} A promise that resolves with the HTTP state.
   */
  optionHttpState = () => this.api.request('/core/view/optionHttpState');

  /**
   * Gets whether HTTP state is enabled.
   * @returns {Promise<any>} A promise that resolves with the HTTP state enabled flag.
   */
  optionHttpStateEnabled = () => this.api.request('/core/view/optionHttpStateEnabled');

  /**
   * Gets the proxy chain name.
   * @returns {Promise<any>} A promise that resolves with the proxy chain name.
   */
  optionProxyChainName = () => this.api.request('/core/view/optionProxyChainName');

  /**
   * Gets the proxy chain password.
   * @returns {Promise<any>} A promise that resolves with the proxy chain password.
   */
  optionProxyChainPassword = () => this.api.request('/core/view/optionProxyChainPassword');

  /**
   * Gets the proxy chain port.
   * @returns {Promise<any>} A promise that resolves with the proxy chain port.
   */
  optionProxyChainPort = () => this.api.request('/core/view/optionProxyChainPort');

  /**
   * Gets the proxy chain prompt setting.
   * @returns {Promise<any>} A promise that resolves with the proxy chain prompt setting.
   */
  optionProxyChainPrompt = () => this.api.request('/core/view/optionProxyChainPrompt');

  /**
   * Gets the proxy chain realm.
   * @returns {Promise<any>} A promise that resolves with the proxy chain realm.
   */
  optionProxyChainRealm = () => this.api.request('/core/view/optionProxyChainRealm');

  /**
   * Gets the proxy chain user name.
   * @returns {Promise<any>} A promise that resolves with the proxy chain user name.
   */
  optionProxyChainUserName = () => this.api.request('/core/view/optionProxyChainUserName');

  /**
   * Gets the setting for single cookie request header.
   * @returns {Promise<any>} A promise that resolves with the setting.
   */
  optionSingleCookieRequestHeader = () => this.api.request('/core/view/optionSingleCookieRequestHeader');

  /**
   * Gets the connection timeout in seconds.
   * @returns {Promise<any>} A promise that resolves with the timeout value.
   */
  optionTimeoutInSecs = () => this.api.request('/core/view/optionTimeoutInSecs');

  /**
   * Gets whether to use the proxy chain.
   * @returns {Promise<any>} A promise that resolves with the proxy chain usage flag.
   */
  optionUseProxyChain = () => this.api.request('/core/view/optionUseProxyChain');

  /**
   * Gets whether proxy chain authentication is enabled.
   * @returns {Promise<any>} A promise that resolves with the proxy chain authentication flag.
   */
  optionUseProxyChainAuth = () => this.api.request('/core/view/optionUseProxyChainAuth');

  /**
   * Gets whether the SOCKS proxy is used.
   * @returns {Promise<any>} A promise that resolves with the SOCKS proxy usage flag.
   */
  optionUseSocksProxy = () => this.api.request('/core/view/optionUseSocksProxy');

  /**
   * Accesses a URL, optionally following redirections.
   * @param {{ url: string, followRedirects: string }} param0 - Object containing the URL and a followRedirects flag.
   * @returns {Promise<any>} A promise that resolves with the access result.
   */
  accessUrl = ({ url, followRedirects }) => this.api.request('/core/action/accessUrl', { url, followRedirects });

  /**
   * Shuts down ZAP.
   * @returns {Promise<any>} A promise that resolves when ZAP is shut down.
   */
  shutdown = () => this.api.request('/core/action/shutdown');

  /**
   * Creates a new session.
   * @param {{ name: string, overwrite: string }} param0 - Object containing the session name and overwrite flag.
   * @returns {Promise<any>} A promise that resolves when the session is created.
   */
  newSession = ({ name, overwrite }) => this.api.request('/core/action/newSession', { name, overwrite });

  /**
   * Loads a session.
   * @param {{ name: string }} param0 - Object containing the session name.
   * @returns {Promise<any>} A promise that resolves when the session is loaded.
   */
  loadSession = ({ name }) => this.api.request('/core/action/loadSession', { name });

  /**
   * Saves the session.
   * @param {{ name: string, overwrite: string }} param0 - Object containing the session name and overwrite flag.
   * @returns {Promise<any>} A promise that resolves when the session is saved.
   */
  saveSession = ({ name, overwrite }) => this.api.request('/core/action/saveSession', { name, overwrite });

  /**
   * Snapshots the session.
   * @param {{ name: string, overwrite: string }} param0 - Object containing the session name and overwrite flag.
   * @returns {Promise<any>} A promise that resolves when the snapshot is created.
   */
  snapshotSession = ({ name, overwrite }) => this.api.request('/core/action/snapshotSession', { name, overwrite });

  /**
   * Clears the URL exclusions for the proxy.
   * @returns {Promise<any>} A promise that resolves when the exclusions are cleared.
   */
  clearExcludedFromProxy = () => this.api.request('/core/action/clearExcludedFromProxy');

  /**
   * Excludes a URL from the proxy.
   * @param {{ regex: string }} param0 - Object containing the regex pattern.
   * @returns {Promise<any>} A promise that resolves when the URL is excluded.
   */
  excludeFromProxy = ({ regex }) => this.api.request('/core/action/excludeFromProxy', { regex });

  /**
   * Sets the home directory.
   * @param {{ dir: string }} param0 - Object containing the directory path.
   * @returns {Promise<any>} A promise that resolves when the home directory is set.
   */
  setHomeDirectory = ({ dir }) => this.api.request('/core/action/setHomeDirectory', { dir });

  /**
   * Sets the operating mode.
   * @param {{ mode: string }} param0 - Object containing the mode.
   * @returns {Promise<any>} A promise that resolves when the mode is set.
   */
  setMode = ({ mode }) => this.api.request('/core/action/setMode', { mode });

  /**
   * Generates a new Root CA certificate.
   * @returns {Promise<any>} A promise that resolves when the certificate is generated.
   */
  generateRootCA = () => this.api.request('/core/action/generateRootCA');

  /**
   * Sends an HTTP request.
   * @param {{ request: string, followRedirects: string }} param0 - Object containing the request and followRedirects flag.
   * @returns {Promise<any>} A promise that resolves with the request/response details.
   */
  sendRequest = ({ request, followRedirects }) =>
    this.api.request('/core/action/sendRequest', { request, followRedirects });

  /**
   * Runs garbage collection.
   * @returns {Promise<any>} A promise that resolves when garbage collection is complete.
   */
  runGarbageCollection = () => this.api.request('/core/action/runGarbageCollection');

  /**
   * Deletes a site node based on URL, HTTP method, and post data.
   * @param {{ url: string, method: string, postData: string }} param0 - Object containing URL, HTTP method, and post data.
   * @returns {Promise<any>} A promise that resolves when the site node is deleted.
   */
  deleteSiteNode = ({ url, method, postData }) => this.api.request('/core/action/deleteSiteNode', { url, method, postData });

  /**
   * Adds an excluded domain for the proxy chain.
   * @param {{ value: string, isRegex: boolean, isEnabled: boolean }} param0 - Object containing the domain value, isRegex flag, and isEnabled flag.
   * @returns {Promise<any>} A promise that resolves when the domain is added.
   */
  addProxyChainExcludedDomain = ({ value, isRegex, isEnabled }) =>
    this.api.request('/core/action/addProxyChainExcludedDomain', { value, isRegex, isEnabled });

  /**
   * Modifies an excluded domain for the proxy chain.
   * @param {{ idx: string, value: string, isRegex: boolean, isEnabled: boolean }} param0 - Object containing the index, domain value, isRegex flag, and isEnabled flag.
   * @returns {Promise<any>} A promise that resolves when the domain is modified.
   */
  modifyProxyChainExcludedDomain = ({ idx, value, isRegex, isEnabled }) =>
    this.api.request('/core/action/modifyProxyChainExcludedDomain', { idx, value, isRegex, isEnabled });

  /**
   * Removes an excluded domain for the proxy chain.
   * @param {{ idx: string }} param0 - Object containing the index.
   * @returns {Promise<any>} A promise that resolves when the domain is removed.
   */
  removeProxyChainExcludedDomain = ({ idx }) =>
    this.api.request('/core/action/removeProxyChainExcludedDomain', { idx });

  /**
   * Enables all excluded domains for the proxy chain.
   * @returns {Promise<any>} A promise that resolves when all domains are enabled.
   */
  enableAllProxyChainExcludedDomains = () =>
    this.api.request('/core/action/enableAllProxyChainExcludedDomains');

  /**
   * Disables all excluded domains for the proxy chain.
   * @returns {Promise<any>} A promise that resolves when all domains are disabled.
   */
  disableAllProxyChainExcludedDomains = () =>
    this.api.request('/core/action/disableAllProxyChainExcludedDomains');

  /**
   * Sets the maximum number of alert instances in a report.
   * @param {{ numberOfInstances: number }} param0 - Object containing the maximum number.
   * @returns {Promise<any>} A promise that resolves when the value is set.
   */
  setOptionMaximumAlertInstances = ({ numberOfInstances }) =>
    this.api.request('/core/action/setOptionMaximumAlertInstances', { numberOfInstances });

  /**
   * Sets whether to merge related alerts in reports.
   * @param {{ enabled: string }} param0 - Object containing the enabled flag.
   * @returns {Promise<any>} A promise that resolves when the setting is applied.
   */
  setOptionMergeRelatedAlerts = ({ enabled }) =>
    this.api.request('/core/action/setOptionMergeRelatedAlerts', { enabled });

  /**
   * Sets the file path for the alert overrides file.
   * @param {{ filePath: string }} param0 - Object containing the file path.
   * @returns {Promise<any>} A promise that resolves when the file path is set.
   */
  setOptionAlertOverridesFilePath = ({ filePath }) =>
    this.api.request('/core/action/setOptionAlertOverridesFilePath', { filePath });

  /**
   * Sets the default user agent for ZAP.
   * @param {{ userAgent: string }} param0 - Object containing the user agent.
   * @returns {Promise<any>} A promise that resolves when the user agent is set.
   */
  setOptionDefaultUserAgent = ({ userAgent }) =>
    this.api.request('/core/action/setOptionDefaultUserAgent', { String: userAgent });

  /**
   * Sets the TTL (in seconds) for successful DNS queries.
   * @param {{ timeInSeconds: number }} param0 - Object containing the TTL.
   * @returns {Promise<any>} A promise that resolves when the TTL is set.
   */
  setOptionDnsTtlSuccessfulQueries = ({ timeInSeconds }) =>
    this.api.request('/core/action/setOptionDnsTtlSuccessfulQueries', { Integer: timeInSeconds });

  /**
   * Sets whether HTTP state is enabled.
   * @param {{ isSet: boolean }} param0 - Object containing the flag.
   * @returns {Promise<any>} A promise that resolves when the setting is applied.
   */
  setOptionHttpStateEnabled = ({ isSet }) =>
    this.api.request('/core/action/setOptionHttpStateEnabled', { Boolean: isSet });

  /**
   * Sets the proxy chain name.
   * @param {{ proxyChainName: string }} param0 - Object containing the name.
   * @returns {Promise<any>} A promise that resolves when the name is set.
   */
  setOptionProxyChainName = ({ proxyChainName }) =>
    this.api.request('/core/action/setOptionProxyChainName', { String: proxyChainName });

  /**
   * Sets the proxy chain password.
   * @param {{ proxyChainPassword: string }} param0 - Object containing the password.
   * @returns {Promise<any>} A promise that resolves when the password is set.
   */
  setOptionProxyChainPassword = ({ proxyChainPassword }) =>
    this.api.request('/core/action/setOptionProxyChainPassword', { String: proxyChainPassword });

  /**
   * Sets the proxy chain port.
   * @param {{ port: number }} param0 - Object containing the port number.
   * @returns {Promise<any>} A promise that resolves when the port is set.
   */
  setOptionProxyChainPort = ({ port }) =>
    this.api.request('/core/action/setOptionProxyChainPort', { Integer: port });

  /**
   * Sets whether the proxy chain prompt is enabled.
   * @param {{ isSet: boolean }} param0 - Object containing the flag.
   * @returns {Promise<any>} A promise that resolves when the prompt setting is applied.
   */
  setOptionProxyChainPrompt = ({ isSet }) =>
    this.api.request('/core/action/setOptionProxyChainPrompt', { Boolean: isSet });

  /**
   * Sets the proxy chain realm.
   * @param {{ chainRealm: string }} param0 - Object containing the realm.
   * @returns {Promise<any>} A promise that resolves when the realm is set.
   */
  setOptionProxyChainRealm = ({ chainRealm }) =>
    this.api.request('/core/action/setOptionProxyChainRealm', { String: chainRealm });

  /**
   * Sets the proxy chain skip name.
   * @param {{ chainSkipName: string }} param0 - Object containing the skip name.
   * @returns {Promise<any>} A promise that resolves when the skip name is set.
   */
  setOptionProxyChainSkipName = ({ chainSkipName }) =>
    this.api.request('/core/action/setOptionProxyChainSkipName', { String: chainSkipName });

  /**
   * Sets the proxy chain user name.
   * @param {{ chainUserName: string }} param0 - Object containing the user name.
   * @returns {Promise<any>} A promise that resolves when the user name is set.
   */
  setOptionProxyChainUserName = ({ chainUserName }) =>
    this.api.request('/core/action/setOptionProxyChainUserName', { String: chainUserName });

  /**
   * Sets whether the single cookie request header option is enabled.
   * @param {{ isSet: boolean }} param0 - Object containing the flag.
   * @returns {Promise<any>} A promise that resolves when the option is set.
   */
  setOptionSingleCookieRequestHeader = ({ isSet }) =>
    this.api.request('/core/action/setOptionSingleCookieRequestHeader', { Boolean: isSet });

  /**
   * Sets the connection timeout (in seconds).
   * @param {{ timeInSeconds: number }} param0 - Object containing the timeout.
   * @returns {Promise<any>} A promise that resolves when the timeout is set.
   */
  setOptionTimeoutInSecs = ({ timeInSeconds }) =>
    this.api.request('/core/action/setOptionTimeoutInSecs', { Integer: timeInSeconds });

  /**
   * Sets whether to use the proxy chain.
   * @param {{ isSet: boolean }} param0 - Object containing the flag.
   * @returns {Promise<any>} A promise that resolves when the option is set.
   */
  setOptionUseProxyChain = ({ isSet }) =>
    this.api.request('/core/action/setOptionUseProxyChain', { Boolean: isSet });

  /**
   * Sets whether to use proxy chain authentication.
   * @param {{ isSet: boolean }} param0 - Object containing the flag.
   * @returns {Promise<any>} A promise that resolves when the option is set.
   */
  setOptionUseProxyChainAuth = ({ isSet }) =>
    this.api.request('/core/action/setOptionUseProxyChainAuth', { Boolean: isSet });

  /**
   * Sets whether to use the SOCKS proxy.
   * @param {{ isSet: boolean }} param0 - Object containing the flag.
   * @returns {Promise<any>} A promise that resolves when the option is set.
   */
  setOptionUseSocksProxy = ({ isSet }) =>
    this.api.request('/core/action/setOptionUseSocksProxy', { Boolean: isSet });

  /**
   * Retrieves the proxy PAC file.
   * @returns {Promise<any>} A promise that resolves with the proxy PAC content.
   */
  proxypac = () => this.api.request('/core/other/proxy.pac');

  /**
   * Retrieves the Root CA certificate used by the local proxies.
   * @returns {Promise<any>} A promise that resolves with the Root CA certificate.
   */
  rootcert = () => this.api.request('/core/other/rootcert');

  /**
   * Sets the outgoing proxy.
   * @param {{ proxy: string }} param0 - Object containing the proxy.
   * @returns {Promise<any>} A promise that resolves when the proxy is set.
   */
  setproxy = ({ proxy }) =>
    this.api.request('/core/other/setproxy', { proxy });

  /**
   * Generates an XML report.
   * @returns {Promise<any>} A promise that resolves with the XML report.
   */
  xmlreport = () => this.api.request('/core/other/xmlreport');

  /**
   * Generates an HTML report.
   * @returns {Promise<any>} A promise that resolves with the HTML report.
   */
  htmlreport = () => this.api.request('/core/other/htmlreport');

  /**
   * Generates a JSON report.
   * @returns {Promise<any>} A promise that resolves with the JSON report.
   */
  jsonreport = () => this.api.request('/core/other/jsonreport');

  /**
   * Generates a Markdown report.
   * @returns {Promise<any>} A promise that resolves with the Markdown report.
   */
  mdreport = () => this.api.request('/core/other/mdreport');

  /**
   * Gets the HAR representation of a message by ID.
   * @param {{ id: string }} param0 - Object containing the message ID.
   * @returns {Promise<any>} A promise that resolves with the HAR message.
   */
  messageHar = ({ id }) =>
    this.api.request('/core/other/messageHar', { id });

  /**
   * Gets HAR-formatted messages, optionally filtered by base URL, start, and count.
   * @param {{ baseurl: string, start: string, count: string }} param0 - Object containing the filter parameters.
   * @returns {Promise<any>} A promise that resolves with the HAR messages.
   */
  messagesHar = ({ baseurl, start, count }) =>
    this.api.request('/core/other/messagesHar', { baseurl, start, count });

  /**
   * Gets HAR-formatted messages by IDs.
   * @param {{ ids: string }} param0 - Object containing comma-separated message IDs.
   * @returns {Promise<any>} A promise that resolves with the HAR messages.
   */
  messagesHarById = ({ ids }) =>
    this.api.request('/core/other/messagesHarById', { ids });

  /**
   * Sends an HTTP request from HAR data, optionally following redirections.
   * @param {{ request: string, followRedirects: string }} param0 - Object containing HAR request data and followRedirects flag.
   * @returns {Promise<any>} A promise that resolves with the response in HAR format.
   */
  sendHarRequest = ({ request, followRedirects }) =>
    this.api.request('/core/other/sendHarRequest', { request, followRedirects });
}

module.exports = Core;
