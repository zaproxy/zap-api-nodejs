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
function Core (clientApi) {
  this.api = clientApi
}

/**
 * Gets the name of the hosts accessed through/by ZAP
 **/
Core.prototype.hosts = function () {
  return this.api.request('/core/view/hosts/')
}

/**
 * Gets the sites accessed through/by ZAP (scheme and domain)
 **/
Core.prototype.sites = function () {
  return this.api.request('/core/view/sites/')
}

/**
 * Gets the URLs accessed through/by ZAP, optionally filtering by (base) URL.
 * @param {string} baseurl - The highest URL in the Sites tree under which URLs should be included.
 **/
Core.prototype.urls = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  return this.api.request('/core/view/urls/', params)
}

/**
 * Gets the child nodes underneath the specified URL in the Sites tree
 * @param {string} url
 **/
Core.prototype.childNodes = function (args) {
  const params = { }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  return this.api.request('/core/view/childNodes/', params)
}

/**
 * Gets the HTTP message with the given ID. Returns the ID, request/response headers and bodies, cookies, note, type, RTT, and timestamp.
 * @param {string} id
 **/
Core.prototype.message = function (args) {
  return this.api.request('/core/view/message/', { id: args.id })
}

/**
 * Gets the HTTP messages sent by ZAP, request and response, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * @param {string} baseurl - The highest URL in the Sites tree under which messages should be included.
 * @param {string} start
 * @param {string} count
 **/
Core.prototype.messages = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  if (args.start && args.start !== null) {
    params.start = args.start
  }
  if (args.count && args.count !== null) {
    params.count = args.count
  }
  return this.api.request('/core/view/messages/', params)
}

/**
 * Gets the HTTP messages with the given IDs.
 * @param {string} ids
 **/
Core.prototype.messagesById = function (args) {
  return this.api.request('/core/view/messagesById/', { ids: args.ids })
}

/**
 * Gets the number of messages, optionally filtering by URL
 * @param {string} baseurl - The highest URL in the Sites tree under which messages should be included.
 **/
Core.prototype.numberOfMessages = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  return this.api.request('/core/view/numberOfMessages/', params)
}

/**
 * Gets the mode
 **/
Core.prototype.mode = function () {
  return this.api.request('/core/view/mode/')
}

/**
 * Gets ZAP version
 **/
Core.prototype.version = function () {
  return this.api.request('/core/view/version/')
}

/**
 * Gets the regular expressions, applied to URLs, to exclude from the local proxies.
 **/
Core.prototype.excludedFromProxy = function () {
  return this.api.request('/core/view/excludedFromProxy/')
}

/**
 * Gets the location of the current session file
 **/
Core.prototype.sessionLocation = function () {
  return this.api.request('/core/view/sessionLocation/')
}

/**
 * Gets all the domains that are excluded from the outgoing proxy. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.
 **/
Core.prototype.proxyChainExcludedDomains = function () {
  return this.api.request('/core/view/proxyChainExcludedDomains/')
}

/**
 * Gets the path to ZAP's home directory.
 **/
Core.prototype.zapHomePath = function () {
  return this.api.request('/core/view/zapHomePath/')
}

/**
 * Gets the maximum number of alert instances to include in a report.
 **/
Core.prototype.optionMaximumAlertInstances = function () {
  return this.api.request('/core/view/optionMaximumAlertInstances/')
}

/**
 * Gets whether or not related alerts will be merged in any reports generated.
 **/
Core.prototype.optionMergeRelatedAlerts = function () {
  return this.api.request('/core/view/optionMergeRelatedAlerts/')
}

/**
 * Gets the path to the file with alert overrides.
 **/
Core.prototype.optionAlertOverridesFilePath = function () {
  return this.api.request('/core/view/optionAlertOverridesFilePath/')
}

/**
 *
 **/
Core.prototype.homeDirectory = function () {
  return this.api.request('/core/view/homeDirectory/')
}

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyChainSkipName = function () {
  return this.api.request('/core/view/optionProxyChainSkipName/')
}

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyExcludedDomains = function () {
  return this.api.request('/core/view/optionProxyExcludedDomains/')
}

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyExcludedDomainsEnabled = function () {
  return this.api.request('/core/view/optionProxyExcludedDomainsEnabled/')
}

/**
 * Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method
 * @param {string} id
 **/
Core.prototype.alert = function (args) {
  return this.api.request('/core/view/alert/', { id: args.id })
}

/**
 * Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts
 * @param {string} baseurl - The highest URL in the Sites tree under which alerts should be included.
 * @param {string} start
 * @param {string} count
 * @param {string} riskid
 **/
Core.prototype.alerts = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  if (args.start && args.start !== null) {
    params.start = args.start
  }
  if (args.count && args.count !== null) {
    params.count = args.count
  }
  if (args.riskid && args.riskid !== null) {
    params.riskId = args.riskid
  }
  return this.api.request('/core/view/alerts/', params)
}

/**
 * Gets number of alerts grouped by each risk level, optionally filtering by URL
 * @param {string} baseurl - The highest URL in the Sites tree under which alerts should be included.
 **/
Core.prototype.alertsSummary = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  return this.api.request('/core/view/alertsSummary/', params)
}

/**
 * Gets the number of alerts, optionally filtering by URL or riskId
 * @param {string} baseurl - The highest URL in the Sites tree under which alerts should be included.
 * @param {string} riskid
 **/
Core.prototype.numberOfAlerts = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  if (args.riskid && args.riskid !== null) {
    params.riskId = args.riskid
  }
  return this.api.request('/core/view/numberOfAlerts/', params)
}

/**
 * Gets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).
 **/
Core.prototype.optionDefaultUserAgent = function () {
  return this.api.request('/core/view/optionDefaultUserAgent/')
}

/**
 * Gets the TTL (in seconds) of successful DNS queries.
 **/
Core.prototype.optionDnsTtlSuccessfulQueries = function () {
  return this.api.request('/core/view/optionDnsTtlSuccessfulQueries/')
}

/**
 *
 **/
Core.prototype.optionHttpState = function () {
  return this.api.request('/core/view/optionHttpState/')
}

/**
 *
 **/
Core.prototype.optionHttpStateEnabled = function () {
  return this.api.request('/core/view/optionHttpStateEnabled/')
}

/**
 *
 **/
Core.prototype.optionProxyChainName = function () {
  return this.api.request('/core/view/optionProxyChainName/')
}

/**
 *
 **/
Core.prototype.optionProxyChainPassword = function () {
  return this.api.request('/core/view/optionProxyChainPassword/')
}

/**
 *
 **/
Core.prototype.optionProxyChainPort = function () {
  return this.api.request('/core/view/optionProxyChainPort/')
}

/**
 *
 **/
Core.prototype.optionProxyChainPrompt = function () {
  return this.api.request('/core/view/optionProxyChainPrompt/')
}

/**
 *
 **/
Core.prototype.optionProxyChainRealm = function () {
  return this.api.request('/core/view/optionProxyChainRealm/')
}

/**
 *
 **/
Core.prototype.optionProxyChainUserName = function () {
  return this.api.request('/core/view/optionProxyChainUserName/')
}

/**
 *
 **/
Core.prototype.optionSingleCookieRequestHeader = function () {
  return this.api.request('/core/view/optionSingleCookieRequestHeader/')
}

/**
 * Gets the connection time out (in seconds).
 **/
Core.prototype.optionTimeoutInSecs = function () {
  return this.api.request('/core/view/optionTimeoutInSecs/')
}

/**
 *
 **/
Core.prototype.optionUseProxyChain = function () {
  return this.api.request('/core/view/optionUseProxyChain/')
}

/**
 *
 **/
Core.prototype.optionUseProxyChainAuth = function () {
  return this.api.request('/core/view/optionUseProxyChainAuth/')
}

/**
 * Gets whether or not the SOCKS proxy should be used.
 **/
Core.prototype.optionUseSocksProxy = function () {
  return this.api.request('/core/view/optionUseSocksProxy/')
}

/**
 * Convenient and simple action to access a URL, optionally following redirections. Returns the request sent and response received and followed redirections, if any. Other actions are available which offer more control on what is sent, like, 'sendRequest' or 'sendHarRequest'.
 * @param {string} url
 * @param {string} followredirects
 **/
Core.prototype.accessUrl = function (args) {
  const params = { url: args.url }
  if (args.followredirects && args.followredirects !== null) {
    params.followRedirects = args.followredirects
  }
  return this.api.request('/core/action/accessUrl/', params)
}

/**
 * Shuts down ZAP
 **/
Core.prototype.shutdown = function () {
  return this.api.request('/core/action/shutdown/')
}

/**
 * Creates a new session, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 * @param {string} overwrite
 **/
Core.prototype.newSession = function (args) {
  const params = { }
  if (args.name && args.name !== null) {
    params.name = args.name
  }
  if (args.overwrite && args.overwrite !== null) {
    params.overwrite = args.overwrite
  }
  return this.api.request('/core/action/newSession/', params)
}

/**
 * Loads the session with the given name. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 **/
Core.prototype.loadSession = function (args) {
  return this.api.request('/core/action/loadSession/', { name: args.name })
}

/**
 * Saves the session.
 * @param {string} name - The name (or path) of the session. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} overwrite - If existing files should be overwritten, attempting to overwrite the files of the session already in use/saved will lead to an error ("already_exists").
 **/
Core.prototype.saveSession = function (args) {
  const params = { name: args.name }
  if (args.overwrite && args.overwrite !== null) {
    params.overwrite = args.overwrite
  }
  return this.api.request('/core/action/saveSession/', params)
}

/**
 * Snapshots the session, optionally with the given name, and overwriting existing files. If no name is specified the name of the current session with a timestamp appended is used. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 * @param {string} overwrite
 **/
Core.prototype.snapshotSession = function (args) {
  const params = { }
  if (args.name && args.name !== null) {
    params.name = args.name
  }
  if (args.overwrite && args.overwrite !== null) {
    params.overwrite = args.overwrite
  }
  return this.api.request('/core/action/snapshotSession/', params)
}

/**
 * Clears the regexes of URLs excluded from the local proxies.
 **/
Core.prototype.clearExcludedFromProxy = function () {
  return this.api.request('/core/action/clearExcludedFromProxy/')
}

/**
 * Adds a regex of URLs that should be excluded from the local proxies.
 * @param {string} regex
 **/
Core.prototype.excludeFromProxy = function (args) {
  return this.api.request('/core/action/excludeFromProxy/', { regex: args.regex })
}

/**
 *
 * @param {string} dir
 **/
Core.prototype.setHomeDirectory = function (args) {
  return this.api.request('/core/action/setHomeDirectory/', { dir: args.dir })
}

/**
 * Sets the mode, which may be one of [safe, protect, standard, attack]
 * @param {string} mode
 **/
Core.prototype.setMode = function (args) {
  return this.api.request('/core/action/setMode/', { mode: args.mode })
}

/**
 * Generates a new Root CA certificate for the local proxies.
 **/
Core.prototype.generateRootCA = function () {
  return this.api.request('/core/action/generateRootCA/')
}

/**
 * Sends the HTTP request, optionally following redirections. Returns the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 * @param {string} request
 * @param {string} followredirects
 **/
Core.prototype.sendRequest = function (args) {
  const params = { request: args.request }
  if (args.followredirects && args.followredirects !== null) {
    params.followRedirects = args.followredirects
  }
  return this.api.request('/core/action/sendRequest/', params)
}

/**
 *
 **/
Core.prototype.runGarbageCollection = function () {
  return this.api.request('/core/action/runGarbageCollection/')
}

/**
 * Deletes the site node found in the Sites Tree on the basis of the URL, HTTP method, and post data (if applicable and specified).
 * @param {string} url
 * @param {string} method
 * @param {string} postdata
 **/
Core.prototype.deleteSiteNode = function (args) {
  const params = { url: args.url }
  if (args.method && args.method !== null) {
    params.method = args.method
  }
  if (args.postdata && args.postdata !== null) {
    params.postData = args.postdata
  }
  return this.api.request('/core/action/deleteSiteNode/', params)
}

/**
 * Adds a domain to be excluded from the outgoing proxy, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).
 * @param {string} value
 * @param {string} isregex
 * @param {string} isenabled
 **/
Core.prototype.addProxyChainExcludedDomain = function (args) {
  const params = { value: args.value }
  if (args.isregex && args.isregex !== null) {
    params.isRegex = args.isregex
  }
  if (args.isenabled && args.isenabled !== null) {
    params.isEnabled = args.isenabled
  }
  return this.api.request('/core/action/addProxyChainExcludedDomain/', params)
}

/**
 * Modifies a domain excluded from the outgoing proxy. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view proxyChainExcludedDomains.
 * @param {string} idx
 * @param {string} value
 * @param {string} isregex
 * @param {string} isenabled
 **/
Core.prototype.modifyProxyChainExcludedDomain = function (args) {
  const params = { idx: args.idx }
  if (args.value && args.value !== null) {
    params.value = args.value
  }
  if (args.isregex && args.isregex !== null) {
    params.isRegex = args.isregex
  }
  if (args.isenabled && args.isenabled !== null) {
    params.isEnabled = args.isenabled
  }
  return this.api.request('/core/action/modifyProxyChainExcludedDomain/', params)
}

/**
 * Removes a domain excluded from the outgoing proxy, with the given index. The index can be obtained with the view proxyChainExcludedDomains.
 * @param {string} idx
 **/
Core.prototype.removeProxyChainExcludedDomain = function (args) {
  return this.api.request('/core/action/removeProxyChainExcludedDomain/', { idx: args.idx })
}

/**
 * Enables all domains excluded from the outgoing proxy.
 **/
Core.prototype.enableAllProxyChainExcludedDomains = function () {
  return this.api.request('/core/action/enableAllProxyChainExcludedDomains/')
}

/**
 * Disables all domains excluded from the outgoing proxy.
 **/
Core.prototype.disableAllProxyChainExcludedDomains = function () {
  return this.api.request('/core/action/disableAllProxyChainExcludedDomains/')
}

/**
 * Sets the maximum number of alert instances to include in a report. A value of zero is treated as unlimited.
 * @param {string} numberofinstances
 **/
Core.prototype.setOptionMaximumAlertInstances = function (args) {
  return this.api.request('/core/action/setOptionMaximumAlertInstances/', { numberOfInstances: args.numberofinstances })
}

/**
 * Sets whether or not related alerts will be merged in any reports generated.
 * @param {string} enabled
 **/
Core.prototype.setOptionMergeRelatedAlerts = function (args) {
  return this.api.request('/core/action/setOptionMergeRelatedAlerts/', { enabled: args.enabled })
}

/**
 * Sets (or clears, if empty) the path to the file with alert overrides.
 * @param {string} filepath
 **/
Core.prototype.setOptionAlertOverridesFilePath = function (args) {
  const params = { }
  if (args.filepath && args.filepath !== null) {
    params.filePath = args.filepath
  }
  return this.api.request('/core/action/setOptionAlertOverridesFilePath/', params)
}

/**
 * Enables use of a PKCS12 client certificate for the certificate with the given file system path, password, and optional index.
 * @param {string} filepath
 * @param {string} password
 * @param {string} index
 **/
Core.prototype.enablePKCS12ClientCertificate = function (args) {
  const params = { filePath: args.filepath, password: args.password }
  if (args.index && args.index !== null) {
    params.index = args.index
  }
  return this.api.request('/core/action/enablePKCS12ClientCertificate/', params)
}

/**
 * Disables the option for use of client certificates.
 **/
Core.prototype.disableClientCertificate = function () {
  return this.api.request('/core/action/disableClientCertificate/')
}

/**
 * Create a zip file of the ZAP core and add-on SBOMs
 * @param {string} filepath - The path of the zip file to create
 **/
Core.prototype.createSbomZip = function (args) {
  return this.api.request('/core/action/createSbomZip/', { filePath: args.filepath })
}

/**
 * Deletes all alerts of the current session.
 **/
Core.prototype.deleteAllAlerts = function () {
  return this.api.request('/core/action/deleteAllAlerts/')
}

/**
 * Deletes the alert with the given ID.
 * @param {string} id
 **/
Core.prototype.deleteAlert = function (args) {
  return this.api.request('/core/action/deleteAlert/', { id: args.id })
}

/**
 * Sets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).
 * @param {string} string
 **/
Core.prototype.setOptionDefaultUserAgent = function (args) {
  return this.api.request('/core/action/setOptionDefaultUserAgent/', { String: args.string })
}

/**
 * Sets the TTL (in seconds) of successful DNS queries (applies after ZAP restart).
 * @param {string} integer
 **/
Core.prototype.setOptionDnsTtlSuccessfulQueries = function (args) {
  return this.api.request('/core/action/setOptionDnsTtlSuccessfulQueries/', { Integer: args.integer })
}

/**
 *
 * @param {string} bool
 **/
Core.prototype.setOptionHttpStateEnabled = function (args) {
  return this.api.request('/core/action/setOptionHttpStateEnabled/', { Boolean: args.bool })
}

/**
 *
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainName = function (args) {
  return this.api.request('/core/action/setOptionProxyChainName/', { String: args.string })
}

/**
 *
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainPassword = function (args) {
  return this.api.request('/core/action/setOptionProxyChainPassword/', { String: args.string })
}

/**
 *
 * @param {string} integer
 **/
Core.prototype.setOptionProxyChainPort = function (args) {
  return this.api.request('/core/action/setOptionProxyChainPort/', { Integer: args.integer })
}

/**
 *
 * @param {string} bool
 **/
Core.prototype.setOptionProxyChainPrompt = function (args) {
  return this.api.request('/core/action/setOptionProxyChainPrompt/', { Boolean: args.bool })
}

/**
 *
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainRealm = function (args) {
  return this.api.request('/core/action/setOptionProxyChainRealm/', { String: args.string })
}

/**
 * Use actions [add|modify|remove]ProxyChainExcludedDomain instead.
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainSkipName = function (args) {
  return this.api.request('/core/action/setOptionProxyChainSkipName/', { String: args.string })
}

/**
 *
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainUserName = function (args) {
  return this.api.request('/core/action/setOptionProxyChainUserName/', { String: args.string })
}

/**
 *
 * @param {string} bool
 **/
Core.prototype.setOptionSingleCookieRequestHeader = function (args) {
  return this.api.request('/core/action/setOptionSingleCookieRequestHeader/', { Boolean: args.bool })
}

/**
 * Sets the connection time out (in seconds).
 * @param {string} integer
 **/
Core.prototype.setOptionTimeoutInSecs = function (args) {
  return this.api.request('/core/action/setOptionTimeoutInSecs/', { Integer: args.integer })
}

/**
 * Sets whether or not the outgoing proxy should be used. The address/hostname of the outgoing proxy must be set to enable this option.
 * @param {string} bool
 **/
Core.prototype.setOptionUseProxyChain = function (args) {
  return this.api.request('/core/action/setOptionUseProxyChain/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Core.prototype.setOptionUseProxyChainAuth = function (args) {
  return this.api.request('/core/action/setOptionUseProxyChainAuth/', { Boolean: args.bool })
}

/**
 * Sets whether or not the SOCKS proxy should be used.
 * @param {string} bool - true if the SOCKS proxy should be used, false otherwise.
 **/
Core.prototype.setOptionUseSocksProxy = function (args) {
  return this.api.request('/core/action/setOptionUseSocksProxy/', { Boolean: args.bool })
}

/**
 *
 **/
Core.prototype.proxypac = function () {
  return this.api.request('/core/other/proxy.pac/', 'other')
}

/**
 * Gets the Root CA certificate used by the local proxies.
 **/
Core.prototype.rootcert = function () {
  return this.api.request('/core/other/rootcert/', 'other')
}

/**
 *
 * @param {string} proxy
 **/
Core.prototype.setproxy = function (args) {
  return this.api.request('/core/other/setproxy/', { proxy: args.proxy }, 'other')
}

/**
 * Generates a report in XML format
 **/
Core.prototype.xmlreport = function () {
  return this.api.request('/core/other/xmlreport/', 'other')
}

/**
 * Generates a report in HTML format
 **/
Core.prototype.htmlreport = function () {
  return this.api.request('/core/other/htmlreport/', 'other')
}

/**
 * Generates a report in JSON format
 **/
Core.prototype.jsonreport = function () {
  return this.api.request('/core/other/jsonreport/', 'other')
}

/**
 * Generates a report in Markdown format
 **/
Core.prototype.mdreport = function () {
  return this.api.request('/core/other/mdreport/', 'other')
}

/**
 * Gets the message with the given ID in HAR format
 * @param {string} id
 **/
Core.prototype.messageHar = function (args) {
  return this.api.request('/core/other/messageHar/', { id: args.id }, 'other')
}

/**
 * Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Core.prototype.messagesHar = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  if (args.start && args.start !== null) {
    params.start = args.start
  }
  if (args.count && args.count !== null) {
    params.count = args.count
  }
  return this.api.request('/core/other/messagesHar/', params, 'other')
}

/**
 * Gets the HTTP messages with the given IDs, in HAR format.
 * @param {string} ids
 **/
Core.prototype.messagesHarById = function (args) {
  return this.api.request('/core/other/messagesHarById/', { ids: args.ids }, 'other')
}

/**
 * Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 * @param {string} request
 * @param {string} followredirects
 **/
Core.prototype.sendHarRequest = function (args) {
  const params = { request: args.request }
  if (args.followredirects && args.followredirects !== null) {
    params.followRedirects = args.followredirects
  }
  return this.api.request('/core/other/sendHarRequest/', params, 'other')
}

/**
 * Download a file from the transfer directory
 * @param {string} filename - The name of the file, may include subdirectories
 **/
Core.prototype.fileDownload = function (args) {
  return this.api.request('/core/other/fileDownload/', { fileName: args.filename }, 'other')
}

/**
 * Upload a file to the transfer directory. Only POST requests accepted with encodings of "multipart/form-data" or "application/x-www-form-urlencoded".
 * @param {string} filename - The name of the file, may include subdirectories.
 * @param {string} filecontents - The contents of the file.
 **/
Core.prototype.fileUpload = function (args) {
  return this.api.request('/core/other/fileUpload/', { fileName: args.filename, fileContents: args.filecontents }, 'other', 'POST')
}

module.exports = Core
