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
function Core(clientApi) {
  this.api = clientApi;
}

/**
 * Gets the name of the hosts accessed through/by ZAP
 **/
Core.prototype.hosts = async function () {
    return await this.api.request('/core/view/hosts/')
}

/**
 * Gets the sites accessed through/by ZAP (scheme and domain)
 **/
Core.prototype.sites = async function () {
    return await this.api.request('/core/view/sites/')
}

/**
 * Gets the URLs accessed through/by ZAP, optionally filtering by (base) URL.
 * @param {string} baseurl
 **/
Core.prototype.urls = async function (args) {
  const params = { };
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
    return await this.api.request('/core/view/urls/', params)
}

/**
 * Gets the child nodes underneath the specified URL in the Sites tree
 * @param {string} url
 **/
Core.prototype.childNodes = async function (args) {
  const params = { };
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
    return await this.api.request('/core/view/childNodes/', params)
}

/**
 * Gets the HTTP message with the given ID. Returns the ID, request/response headers and bodies, cookies, note, type, RTT, and timestamp.
 * @param {string} id
 **/
Core.prototype.message = async function (args) {
    return await this.api.request('/core/view/message/', {'id': args.id })
}

/**
 * Gets the HTTP messages sent by ZAP, request and response, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Core.prototype.messages = async function (args) {
  const params = { };
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (args.start && args.start !== null) {
    params['start'] = args.start;
  }
  if (args.count && args.count !== null) {
    params['count'] = args.count;
  }
    return await this.api.request('/core/view/messages/', params)
}

/**
 * Gets the HTTP messages with the given IDs.
 * @param {string} ids
 **/
Core.prototype.messagesById = async function (args) {
    return await this.api.request('/core/view/messagesById/', {'ids': args.ids })
}

/**
 * Gets the number of messages, optionally filtering by URL
 * @param {string} baseurl
 **/
Core.prototype.numberOfMessages = async function (args) {
  const params = { };
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
    return await this.api.request('/core/view/numberOfMessages/', params)
}

/**
 * Gets the mode
 **/
Core.prototype.mode = async function () {
    return await this.api.request('/core/view/mode/')
}

/**
 * Gets ZAP version
 **/
Core.prototype.version = async function () {
    return await this.api.request('/core/view/version/')
}

/**
 * Gets the regular expressions, applied to URLs, to exclude from the local proxies.
 **/
Core.prototype.excludedFromProxy = async function () {
    return await this.api.request('/core/view/excludedFromProxy/')
}

/**
 * Gets the location of the current session file
 **/
Core.prototype.sessionLocation = async function () {
    return await this.api.request('/core/view/sessionLocation/')
}

/**
 * Gets all the domains that are excluded from the outgoing proxy. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.
 **/
Core.prototype.proxyChainExcludedDomains = async function () {
    return await this.api.request('/core/view/proxyChainExcludedDomains/')
}

/**
 * Gets the path to ZAP's home directory.
 **/
Core.prototype.zapHomePath = async function () {
    return await this.api.request('/core/view/zapHomePath/')
}

/**
 * Gets the maximum number of alert instances to include in a report.
 **/
Core.prototype.optionMaximumAlertInstances = async function () {
    return await this.api.request('/core/view/optionMaximumAlertInstances/')
}

/**
 * Gets whether or not related alerts will be merged in any reports generated.
 **/
Core.prototype.optionMergeRelatedAlerts = async function () {
    return await this.api.request('/core/view/optionMergeRelatedAlerts/')
}

/**
 * Gets the path to the file with alert overrides.
 **/
Core.prototype.optionAlertOverridesFilePath = async function () {
    return await this.api.request('/core/view/optionAlertOverridesFilePath/')
}

/**
 * 
 **/
Core.prototype.homeDirectory = async function () {
    return await this.api.request('/core/view/homeDirectory/')
}

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyChainSkipName = async function () {
    return await this.api.request('/core/view/optionProxyChainSkipName/')
}

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyExcludedDomains = async function () {
    return await this.api.request('/core/view/optionProxyExcludedDomains/')
}

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyExcludedDomainsEnabled = async function () {
    return await this.api.request('/core/view/optionProxyExcludedDomainsEnabled/')
}

/**
 * Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method
 * @param {string} id
 **/
Core.prototype.alert = async function (args) {
    return await this.api.request('/core/view/alert/', {'id': args.id })
}

/**
 * Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 * @param {string} riskid
 **/
Core.prototype.alerts = async function (args) {
  const params = { };
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (args.start && args.start !== null) {
    params['start'] = args.start;
  }
  if (args.count && args.count !== null) {
    params['count'] = args.count;
  }
  if (args.riskid && args.riskid !== null) {
    params['riskId'] = args.riskid;
  }
    return await this.api.request('/core/view/alerts/', params)
}

/**
 * Gets number of alerts grouped by each risk level, optionally filtering by URL
 * @param {string} baseurl
 **/
Core.prototype.alertsSummary = async function (args) {
  const params = { };
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
    return await this.api.request('/core/view/alertsSummary/', params)
}

/**
 * Gets the number of alerts, optionally filtering by URL or riskId
 * @param {string} baseurl
 * @param {string} riskid
 **/
Core.prototype.numberOfAlerts = async function (args) {
  const params = { };
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (args.riskid && args.riskid !== null) {
    params['riskId'] = args.riskid;
  }
    return await this.api.request('/core/view/numberOfAlerts/', params)
}

/**
 * Gets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).
 **/
Core.prototype.optionDefaultUserAgent = async function () {
    return await this.api.request('/core/view/optionDefaultUserAgent/')
}

/**
 * Gets the TTL (in seconds) of successful DNS queries.
 **/
Core.prototype.optionDnsTtlSuccessfulQueries = async function () {
    return await this.api.request('/core/view/optionDnsTtlSuccessfulQueries/')
}

/**
 * 
 **/
Core.prototype.optionHttpState = async function () {
    return await this.api.request('/core/view/optionHttpState/')
}

/**
 * 
 **/
Core.prototype.optionHttpStateEnabled = async function () {
    return await this.api.request('/core/view/optionHttpStateEnabled/')
}

/**
 * 
 **/
Core.prototype.optionProxyChainName = async function () {
    return await this.api.request('/core/view/optionProxyChainName/')
}

/**
 * 
 **/
Core.prototype.optionProxyChainPassword = async function () {
    return await this.api.request('/core/view/optionProxyChainPassword/')
}

/**
 * 
 **/
Core.prototype.optionProxyChainPort = async function () {
    return await this.api.request('/core/view/optionProxyChainPort/')
}

/**
 * 
 **/
Core.prototype.optionProxyChainPrompt = async function () {
    return await this.api.request('/core/view/optionProxyChainPrompt/')
}

/**
 * 
 **/
Core.prototype.optionProxyChainRealm = async function () {
    return await this.api.request('/core/view/optionProxyChainRealm/')
}

/**
 * 
 **/
Core.prototype.optionProxyChainUserName = async function () {
    return await this.api.request('/core/view/optionProxyChainUserName/')
}

/**
 * 
 **/
Core.prototype.optionSingleCookieRequestHeader = async function () {
    return await this.api.request('/core/view/optionSingleCookieRequestHeader/')
}

/**
 * Gets the connection time out (in seconds).
 **/
Core.prototype.optionTimeoutInSecs = async function () {
    return await this.api.request('/core/view/optionTimeoutInSecs/')
}

/**
 * 
 **/
Core.prototype.optionUseProxyChain = async function () {
    return await this.api.request('/core/view/optionUseProxyChain/')
}

/**
 * 
 **/
Core.prototype.optionUseProxyChainAuth = async function () {
    return await this.api.request('/core/view/optionUseProxyChainAuth/')
}

/**
 * Gets whether or not the SOCKS proxy should be used.
 **/
Core.prototype.optionUseSocksProxy = async function () {
    return await this.api.request('/core/view/optionUseSocksProxy/')
}

/**
 * Convenient and simple action to access a URL, optionally following redirections. Returns the request sent and response received and followed redirections, if any. Other actions are available which offer more control on what is sent, like, 'sendRequest' or 'sendHarRequest'.
 * @param {string} url
 * @param {string} followredirects
 **/
Core.prototype.accessUrl = async function (args) {
  const params = {'url': args.url };
  if (args.followredirects && args.followredirects !== null) {
    params['followRedirects'] = args.followredirects;
  }
    return await this.api.request('/core/action/accessUrl/', params)
}

/**
 * Shuts down ZAP
 **/
Core.prototype.shutdown = async function () {
    return await this.api.request('/core/action/shutdown/')
}

/**
 * Creates a new session, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 * @param {string} overwrite
 **/
Core.prototype.newSession = async function (args) {
  const params = { };
  if (args.name && args.name !== null) {
    params['name'] = args.name;
  }
  if (args.overwrite && args.overwrite !== null) {
    params['overwrite'] = args.overwrite;
  }
    return await this.api.request('/core/action/newSession/', params)
}

/**
 * Loads the session with the given name. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 **/
Core.prototype.loadSession = async function (args) {
    return await this.api.request('/core/action/loadSession/', {'name': args.name })
}

/**
 * Saves the session.
 * @param {string} name - The name (or path) of the session. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} overwrite - If existing files should be overwritten, attempting to overwrite the files of the session already in use/saved will lead to an error ("already_exists").
 **/
Core.prototype.saveSession = async function (args) {
  const params = {'name': args.name };
  if (args.overwrite && args.overwrite !== null) {
    params['overwrite'] = args.overwrite;
  }
    return await this.api.request('/core/action/saveSession/', params)
}

/**
 * Snapshots the session, optionally with the given name, and overwriting existing files. If no name is specified the name of the current session with a timestamp appended is used. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 * @param {string} overwrite
 **/
Core.prototype.snapshotSession = async function (args) {
  const params = { };
  if (args.name && args.name !== null) {
    params['name'] = args.name;
  }
  if (args.overwrite && args.overwrite !== null) {
    params['overwrite'] = args.overwrite;
  }
    return await this.api.request('/core/action/snapshotSession/', params)
}

/**
 * Clears the regexes of URLs excluded from the local proxies.
 **/
Core.prototype.clearExcludedFromProxy = async function () {
    return await this.api.request('/core/action/clearExcludedFromProxy/')
}

/**
 * Adds a regex of URLs that should be excluded from the local proxies.
 * @param {string} regex
 **/
Core.prototype.excludeFromProxy = async function (args) {
    return await this.api.request('/core/action/excludeFromProxy/', {'regex': args.regex })
}

/**
 * 
 * @param {string} dir
 **/
Core.prototype.setHomeDirectory = async function (args) {
    return await this.api.request('/core/action/setHomeDirectory/', {'dir': args.dir })
}

/**
 * Sets the mode, which may be one of [safe, protect, standard, attack]
 * @param {string} mode
 **/
Core.prototype.setMode = async function (args) {
    return await this.api.request('/core/action/setMode/', {'mode': args.mode })
}

/**
 * Generates a new Root CA certificate for the local proxies.
 **/
Core.prototype.generateRootCA = async function () {
    return await this.api.request('/core/action/generateRootCA/')
}

/**
 * Sends the HTTP request, optionally following redirections. Returns the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 * @param {string} request
 * @param {string} followredirects
 **/
Core.prototype.sendRequest = async function (args) {
  const params = {'request': args.request };
  if (args.followredirects && args.followredirects !== null) {
    params['followRedirects'] = args.followredirects;
  }
    return await this.api.request('/core/action/sendRequest/', params)
}

/**
 * 
 **/
Core.prototype.runGarbageCollection = async function () {
    return await this.api.request('/core/action/runGarbageCollection/')
}

/**
 * Deletes the site node found in the Sites Tree on the basis of the URL, HTTP method, and post data (if applicable and specified). 
 * @param {string} url
 * @param {string} method
 * @param {string} postdata
 **/
Core.prototype.deleteSiteNode = async function (args) {
  const params = {'url': args.url };
  if (args.method && args.method !== null) {
    params['method'] = args.method;
  }
  if (args.postdata && args.postdata !== null) {
    params['postData'] = args.postdata;
  }
    return await this.api.request('/core/action/deleteSiteNode/', params)
}

/**
 * Adds a domain to be excluded from the outgoing proxy, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).
 * @param {string} value
 * @param {string} isregex
 * @param {string} isenabled
 **/
Core.prototype.addProxyChainExcludedDomain = async function (args) {
  const params = {'value': args.value };
  if (args.isregex && args.isregex !== null) {
    params['isRegex'] = args.isregex;
  }
  if (args.isenabled && args.isenabled !== null) {
    params['isEnabled'] = args.isenabled;
  }
    return await this.api.request('/core/action/addProxyChainExcludedDomain/', params)
}

/**
 * Modifies a domain excluded from the outgoing proxy. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view proxyChainExcludedDomains.
 * @param {string} idx
 * @param {string} value
 * @param {string} isregex
 * @param {string} isenabled
 **/
Core.prototype.modifyProxyChainExcludedDomain = async function (args) {
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
    return await this.api.request('/core/action/modifyProxyChainExcludedDomain/', params)
}

/**
 * Removes a domain excluded from the outgoing proxy, with the given index. The index can be obtained with the view proxyChainExcludedDomains.
 * @param {string} idx
 **/
Core.prototype.removeProxyChainExcludedDomain = async function (args) {
    return await this.api.request('/core/action/removeProxyChainExcludedDomain/', {'idx': args.idx })
}

/**
 * Enables all domains excluded from the outgoing proxy.
 **/
Core.prototype.enableAllProxyChainExcludedDomains = async function () {
    return await this.api.request('/core/action/enableAllProxyChainExcludedDomains/')
}

/**
 * Disables all domains excluded from the outgoing proxy.
 **/
Core.prototype.disableAllProxyChainExcludedDomains = async function () {
    return await this.api.request('/core/action/disableAllProxyChainExcludedDomains/')
}

/**
 * Sets the maximum number of alert instances to include in a report. A value of zero is treated as unlimited.
 * @param {string} numberofinstances
 **/
Core.prototype.setOptionMaximumAlertInstances = async function (args) {
    return await this.api.request('/core/action/setOptionMaximumAlertInstances/', {'numberOfInstances': args.numberofinstances })
}

/**
 * Sets whether or not related alerts will be merged in any reports generated.
 * @param {string} enabled
 **/
Core.prototype.setOptionMergeRelatedAlerts = async function (args) {
    return await this.api.request('/core/action/setOptionMergeRelatedAlerts/', {'enabled': args.enabled })
}

/**
 * Sets (or clears, if empty) the path to the file with alert overrides.
 * @param {string} filepath
 **/
Core.prototype.setOptionAlertOverridesFilePath = async function (args) {
  const params = { };
  if (args.filepath && args.filepath !== null) {
    params['filePath'] = args.filepath;
  }
    return await this.api.request('/core/action/setOptionAlertOverridesFilePath/', params)
}

/**
 * Enables use of a PKCS12 client certificate for the certificate with the given file system path, password, and optional index.
 * @param {string} filepath
 * @param {string} password
 * @param {string} index
 **/
Core.prototype.enablePKCS12ClientCertificate = async function (args) {
  const params = {'filePath': args.filepath, 'password': args.password };
  if (args.index && args.index !== null) {
    params['index'] = args.index;
  }
    return await this.api.request('/core/action/enablePKCS12ClientCertificate/', params)
}

/**
 * Disables the option for use of client certificates.
 **/
Core.prototype.disableClientCertificate = async function () {
    return await this.api.request('/core/action/disableClientCertificate/')
}

/**
 * Deletes all alerts of the current session.
 **/
Core.prototype.deleteAllAlerts = async function () {
    return await this.api.request('/core/action/deleteAllAlerts/')
}

/**
 * Deletes the alert with the given ID. 
 * @param {string} id
 **/
Core.prototype.deleteAlert = async function (args) {
    return await this.api.request('/core/action/deleteAlert/', {'id': args.id })
}

/**
 * Sets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).
 * @param {string} string
 **/
Core.prototype.setOptionDefaultUserAgent = async function (args) {
    return await this.api.request('/core/action/setOptionDefaultUserAgent/', {'String': args.string })
}

/**
 * Sets the TTL (in seconds) of successful DNS queries (applies after ZAP restart).
 * @param {string} integer
 **/
Core.prototype.setOptionDnsTtlSuccessfulQueries = async function (args) {
    return await this.api.request('/core/action/setOptionDnsTtlSuccessfulQueries/', {'Integer': args.integer })
}

/**
 * 
 * @param {string} bool
 **/
Core.prototype.setOptionHttpStateEnabled = async function (args) {
    return await this.api.request('/core/action/setOptionHttpStateEnabled/', {'Boolean': args.bool })
}

/**
 * 
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainName = async function (args) {
    return await this.api.request('/core/action/setOptionProxyChainName/', {'String': args.string })
}

/**
 * 
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainPassword = async function (args) {
    return await this.api.request('/core/action/setOptionProxyChainPassword/', {'String': args.string })
}

/**
 * 
 * @param {string} integer
 **/
Core.prototype.setOptionProxyChainPort = async function (args) {
    return await this.api.request('/core/action/setOptionProxyChainPort/', {'Integer': args.integer })
}

/**
 * 
 * @param {string} bool
 **/
Core.prototype.setOptionProxyChainPrompt = async function (args) {
    return await this.api.request('/core/action/setOptionProxyChainPrompt/', {'Boolean': args.bool })
}

/**
 * 
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainRealm = async function (args) {
    return await this.api.request('/core/action/setOptionProxyChainRealm/', {'String': args.string })
}

/**
 * Use actions [add|modify|remove]ProxyChainExcludedDomain instead.
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainSkipName = async function (args) {
    return await this.api.request('/core/action/setOptionProxyChainSkipName/', {'String': args.string })
}

/**
 * 
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainUserName = async function (args) {
    return await this.api.request('/core/action/setOptionProxyChainUserName/', {'String': args.string })
}

/**
 * 
 * @param {string} bool
 **/
Core.prototype.setOptionSingleCookieRequestHeader = async function (args) {
    return await this.api.request('/core/action/setOptionSingleCookieRequestHeader/', {'Boolean': args.bool })
}

/**
 * Sets the connection time out (in seconds).
 * @param {string} integer
 **/
Core.prototype.setOptionTimeoutInSecs = async function (args) {
    return await this.api.request('/core/action/setOptionTimeoutInSecs/', {'Integer': args.integer })
}

/**
 * Sets whether or not the outgoing proxy should be used. The address/hostname of the outgoing proxy must be set to enable this option.
 * @param {string} bool
 **/
Core.prototype.setOptionUseProxyChain = async function (args) {
    return await this.api.request('/core/action/setOptionUseProxyChain/', {'Boolean': args.bool })
}

/**
 * 
 * @param {string} bool
 **/
Core.prototype.setOptionUseProxyChainAuth = async function (args) {
    return await this.api.request('/core/action/setOptionUseProxyChainAuth/', {'Boolean': args.bool })
}

/**
 * Sets whether or not the SOCKS proxy should be used.
 * @param {string} bool - true if the SOCKS proxy should be used, false otherwise.
 **/
Core.prototype.setOptionUseSocksProxy = async function (args) {
    return await this.api.request('/core/action/setOptionUseSocksProxy/', {'Boolean': args.bool })
}

/**
 * 
 **/
Core.prototype.proxypac = async function () {
    return await this.api.request('/core/other/proxy.pac/', 'other')
}

/**
 * Gets the Root CA certificate used by the local proxies.
 **/
Core.prototype.rootcert = async function () {
    return await this.api.request('/core/other/rootcert/', 'other')
}

/**
 * 
 * @param {string} proxy
 **/
Core.prototype.setproxy = async function (args) {
    return await this.api.request('/core/other/setproxy/', {'proxy': args.proxy }, 'other')
}

/**
 * Generates a report in XML format
 **/
Core.prototype.xmlreport = async function () {
    return await this.api.request('/core/other/xmlreport/', 'other')
}

/**
 * Generates a report in HTML format
 **/
Core.prototype.htmlreport = async function () {
    return await this.api.request('/core/other/htmlreport/', 'other')
}

/**
 * Generates a report in JSON format
 **/
Core.prototype.jsonreport = async function () {
    return await this.api.request('/core/other/jsonreport/', 'other')
}

/**
 * Generates a report in Markdown format
 **/
Core.prototype.mdreport = async function () {
    return await this.api.request('/core/other/mdreport/', 'other')
}

/**
 * Gets the message with the given ID in HAR format
 * @param {string} id
 **/
Core.prototype.messageHar = async function (args) {
    return await this.api.request('/core/other/messageHar/', {'id': args.id }, 'other')
}

/**
 * Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Core.prototype.messagesHar = async function (args) {
  const params = { };
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (args.start && args.start !== null) {
    params['start'] = args.start;
  }
  if (args.count && args.count !== null) {
    params['count'] = args.count;
  }
    return await this.api.request('/core/other/messagesHar/', params, 'other')
}

/**
 * Gets the HTTP messages with the given IDs, in HAR format.
 * @param {string} ids
 **/
Core.prototype.messagesHarById = async function (args) {
    return await this.api.request('/core/other/messagesHarById/', {'ids': args.ids }, 'other')
}

/**
 * Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 * @param {string} request
 * @param {string} followredirects
 **/
Core.prototype.sendHarRequest = async function (args) {
  const params = {'request': args.request };
  if (args.followredirects && args.followredirects !== null) {
    params['followRedirects'] = args.followredirects;
  }
    return await this.api.request('/core/other/sendHarRequest/', params, 'other')
}

module.exports = Core;
