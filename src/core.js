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
Core.prototype.hosts = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/hosts/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/hosts/');
};

/**
 * Gets the sites accessed through/by ZAP (scheme and domain)
 **/
Core.prototype.sites = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/sites/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/sites/');
};

/**
 * Gets the URLs accessed through/by ZAP, optionally filtering by (base) URL.
 * @param {string} baseurl
 **/
Core.prototype.urls = function (args, callback) {
  const params = {};
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/urls/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/urls/', params);
};

/**
 * Gets the child nodes underneath the specified URL in the Sites tree
 * @param {string} url
 **/
Core.prototype.childNodes = function (args, callback) {
  const params = {};
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/childNodes/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/childNodes/', params);
};

/**
 * Gets the HTTP message with the given ID. Returns the ID, request/response headers and bodies, cookies, note, type, RTT, and timestamp.
 * @param {string} id
 **/
Core.prototype.message = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/message/', {'id': args.id}, callback);
    return;
  }
  return this.api.requestPromise('/core/view/message/', {'id': args.id});
};

/**
 * Gets the HTTP messages sent by ZAP, request and response, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Core.prototype.messages = function (args, callback) {
  const params = {};
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (args.start && args.start !== null) {
    params['start'] = args.start;
  }
  if (args.count && args.count !== null) {
    params['count'] = args.count;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/messages/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/messages/', params);
};

/**
 * Gets the HTTP messages with the given IDs.
 * @param {string} ids
 **/
Core.prototype.messagesById = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/messagesById/', {'ids': args.ids}, callback);
    return;
  }
  return this.api.requestPromise('/core/view/messagesById/', {'ids': args.ids});
};

/**
 * Gets the number of messages, optionally filtering by URL
 * @param {string} baseurl
 **/
Core.prototype.numberOfMessages = function (args, callback) {
  const params = {};
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/numberOfMessages/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/numberOfMessages/', params);
};

/**
 * Gets the mode
 **/
Core.prototype.mode = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/mode/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/mode/');
};

/**
 * Gets ZAP version
 **/
Core.prototype.version = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/version/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/version/');
};

/**
 * Gets the regular expressions, applied to URLs, to exclude from the local proxies.
 **/
Core.prototype.excludedFromProxy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/excludedFromProxy/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/excludedFromProxy/');
};

/**
 * Gets the location of the current session file
 **/
Core.prototype.sessionLocation = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/sessionLocation/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/sessionLocation/');
};

/**
 * Gets all the domains that are excluded from the outgoing proxy. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.
 **/
Core.prototype.proxyChainExcludedDomains = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/proxyChainExcludedDomains/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/proxyChainExcludedDomains/');
};

/**
 * Gets the path to ZAP's home directory.
 **/
Core.prototype.zapHomePath = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/zapHomePath/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/zapHomePath/');
};

/**
 * Gets the maximum number of alert instances to include in a report.
 **/
Core.prototype.optionMaximumAlertInstances = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionMaximumAlertInstances/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionMaximumAlertInstances/');
};

/**
 * Gets whether or not related alerts will be merged in any reports generated.
 **/
Core.prototype.optionMergeRelatedAlerts = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionMergeRelatedAlerts/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionMergeRelatedAlerts/');
};

/**
 * Gets the path to the file with alert overrides.
 **/
Core.prototype.optionAlertOverridesFilePath = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionAlertOverridesFilePath/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionAlertOverridesFilePath/');
};

/**
 * 
 **/
Core.prototype.homeDirectory = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/homeDirectory/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/homeDirectory/');
};

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyChainSkipName = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainSkipName/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainSkipName/');
};

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyExcludedDomains = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyExcludedDomains/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyExcludedDomains/');
};

/**
 * Use view proxyChainExcludedDomains instead.
 **/
Core.prototype.optionProxyExcludedDomainsEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyExcludedDomainsEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyExcludedDomainsEnabled/');
};

/**
 * Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method
 * @param {string} id
 **/
Core.prototype.alert = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/alert/', {'id': args.id}, callback);
    return;
  }
  return this.api.requestPromise('/core/view/alert/', {'id': args.id});
};

/**
 * Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 * @param {string} riskid
 **/
Core.prototype.alerts = function (args, callback) {
  const params = {};
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
  if (typeof callback === 'function') {
    this.api.request('/core/view/alerts/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/alerts/', params);
};

/**
 * Gets number of alerts grouped by each risk level, optionally filtering by URL
 * @param {string} baseurl
 **/
Core.prototype.alertsSummary = function (args, callback) {
  const params = {};
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/alertsSummary/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/alertsSummary/', params);
};

/**
 * Gets the number of alerts, optionally filtering by URL or riskId
 * @param {string} baseurl
 * @param {string} riskid
 **/
Core.prototype.numberOfAlerts = function (args, callback) {
  const params = {};
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (args.riskid && args.riskid !== null) {
    params['riskId'] = args.riskid;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/numberOfAlerts/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/numberOfAlerts/', params);
};

/**
 * Gets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).
 **/
Core.prototype.optionDefaultUserAgent = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionDefaultUserAgent/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionDefaultUserAgent/');
};

/**
 * Gets the TTL (in seconds) of successful DNS queries.
 **/
Core.prototype.optionDnsTtlSuccessfulQueries = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionDnsTtlSuccessfulQueries/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionDnsTtlSuccessfulQueries/');
};

/**
 * 
 **/
Core.prototype.optionHttpState = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionHttpState/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionHttpState/');
};

/**
 * 
 **/
Core.prototype.optionHttpStateEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionHttpStateEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionHttpStateEnabled/');
};

/**
 * 
 **/
Core.prototype.optionProxyChainName = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainName/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainName/');
};

/**
 * 
 **/
Core.prototype.optionProxyChainPassword = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainPassword/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainPassword/');
};

/**
 * 
 **/
Core.prototype.optionProxyChainPort = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainPort/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainPort/');
};

/**
 * 
 **/
Core.prototype.optionProxyChainPrompt = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainPrompt/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainPrompt/');
};

/**
 * 
 **/
Core.prototype.optionProxyChainRealm = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainRealm/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainRealm/');
};

/**
 * 
 **/
Core.prototype.optionProxyChainUserName = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainUserName/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainUserName/');
};

/**
 * 
 **/
Core.prototype.optionSingleCookieRequestHeader = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionSingleCookieRequestHeader/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionSingleCookieRequestHeader/');
};

/**
 * Gets the connection time out (in seconds).
 **/
Core.prototype.optionTimeoutInSecs = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionTimeoutInSecs/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionTimeoutInSecs/');
};

/**
 * 
 **/
Core.prototype.optionUseProxyChain = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionUseProxyChain/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionUseProxyChain/');
};

/**
 * 
 **/
Core.prototype.optionUseProxyChainAuth = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionUseProxyChainAuth/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionUseProxyChainAuth/');
};

/**
 * Gets whether or not the SOCKS proxy should be used.
 **/
Core.prototype.optionUseSocksProxy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionUseSocksProxy/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionUseSocksProxy/');
};

/**
 * Convenient and simple action to access a URL, optionally following redirections. Returns the request sent and response received and followed redirections, if any. Other actions are available which offer more control on what is sent, like, 'sendRequest' or 'sendHarRequest'.
 * @param {string} url
 * @param {string} followredirects
 **/
Core.prototype.accessUrl = function (args, callback) {
  const params = {'url': args.url};
  if (args.followredirects && args.followredirects !== null) {
    params['followRedirects'] = args.followredirects;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/accessUrl/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/accessUrl/', params);
};

/**
 * Shuts down ZAP
 **/
Core.prototype.shutdown = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/shutdown/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/shutdown/');
};

/**
 * Creates a new session, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 * @param {string} overwrite
 **/
Core.prototype.newSession = function (args, callback) {
  const params = {};
  if (args.name && args.name !== null) {
    params['name'] = args.name;
  }
  if (args.overwrite && args.overwrite !== null) {
    params['overwrite'] = args.overwrite;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/newSession/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/newSession/', params);
};

/**
 * Loads the session with the given name. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 **/
Core.prototype.loadSession = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/loadSession/', {'name': args.name}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/loadSession/', {'name': args.name});
};

/**
 * Saves the session.
 * @param {string} name - The name (or path) of the session. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} overwrite - If existing files should be overwritten, attempting to overwrite the files of the session already in use/saved will lead to an error ("already_exists").
 **/
Core.prototype.saveSession = function (args, callback) {
  const params = {'name': args.name};
  if (args.overwrite && args.overwrite !== null) {
    params['overwrite'] = args.overwrite;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/saveSession/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/saveSession/', params);
};

/**
 * Snapshots the session, optionally with the given name, and overwriting existing files. If no name is specified the name of the current session with a timestamp appended is used. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 * @param {string} name
 * @param {string} overwrite
 **/
Core.prototype.snapshotSession = function (args, callback) {
  const params = {};
  if (args.name && args.name !== null) {
    params['name'] = args.name;
  }
  if (args.overwrite && args.overwrite !== null) {
    params['overwrite'] = args.overwrite;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/snapshotSession/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/snapshotSession/', params);
};

/**
 * Clears the regexes of URLs excluded from the local proxies.
 **/
Core.prototype.clearExcludedFromProxy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/clearExcludedFromProxy/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/clearExcludedFromProxy/');
};

/**
 * Adds a regex of URLs that should be excluded from the local proxies.
 * @param {string} regex
 **/
Core.prototype.excludeFromProxy = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/excludeFromProxy/', {'regex': args.regex}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/excludeFromProxy/', {'regex': args.regex});
};

/**
 * 
 * @param {string} dir
 **/
Core.prototype.setHomeDirectory = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setHomeDirectory/', {'dir': args.dir}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setHomeDirectory/', {'dir': args.dir});
};

/**
 * Sets the mode, which may be one of [safe, protect, standard, attack]
 * @param {string} mode
 **/
Core.prototype.setMode = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setMode/', {'mode': args.mode}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setMode/', {'mode': args.mode});
};

/**
 * Generates a new Root CA certificate for the local proxies.
 **/
Core.prototype.generateRootCA = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/generateRootCA/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/generateRootCA/');
};

/**
 * Sends the HTTP request, optionally following redirections. Returns the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 * @param {string} request
 * @param {string} followredirects
 **/
Core.prototype.sendRequest = function (args, callback) {
  const params = {'request': args.request};
  if (args.followredirects && args.followredirects !== null) {
    params['followRedirects'] = args.followredirects;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/sendRequest/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/sendRequest/', params);
};

/**
 * 
 **/
Core.prototype.runGarbageCollection = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/runGarbageCollection/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/runGarbageCollection/');
};

/**
 * Deletes the site node found in the Sites Tree on the basis of the URL, HTTP method, and post data (if applicable and specified). 
 * @param {string} url
 * @param {string} method
 * @param {string} postdata
 **/
Core.prototype.deleteSiteNode = function (args, callback) {
  const params = {'url': args.url};
  if (args.method && args.method !== null) {
    params['method'] = args.method;
  }
  if (args.postdata && args.postdata !== null) {
    params['postData'] = args.postdata;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/deleteSiteNode/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/deleteSiteNode/', params);
};

/**
 * Adds a domain to be excluded from the outgoing proxy, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).
 * @param {string} value
 * @param {string} isregex
 * @param {string} isenabled
 **/
Core.prototype.addProxyChainExcludedDomain = function (args, callback) {
  const params = {'value': args.value};
  if (args.isregex && args.isregex !== null) {
    params['isRegex'] = args.isregex;
  }
  if (args.isenabled && args.isenabled !== null) {
    params['isEnabled'] = args.isenabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/addProxyChainExcludedDomain/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/addProxyChainExcludedDomain/', params);
};

/**
 * Modifies a domain excluded from the outgoing proxy. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view proxyChainExcludedDomains.
 * @param {string} idx
 * @param {string} value
 * @param {string} isregex
 * @param {string} isenabled
 **/
Core.prototype.modifyProxyChainExcludedDomain = function (args, callback) {
  const params = {'idx': args.idx};
  if (args.value && args.value !== null) {
    params['value'] = args.value;
  }
  if (args.isregex && args.isregex !== null) {
    params['isRegex'] = args.isregex;
  }
  if (args.isenabled && args.isenabled !== null) {
    params['isEnabled'] = args.isenabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/modifyProxyChainExcludedDomain/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/modifyProxyChainExcludedDomain/', params);
};

/**
 * Removes a domain excluded from the outgoing proxy, with the given index. The index can be obtained with the view proxyChainExcludedDomains.
 * @param {string} idx
 **/
Core.prototype.removeProxyChainExcludedDomain = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/removeProxyChainExcludedDomain/', {'idx': args.idx}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/removeProxyChainExcludedDomain/', {'idx': args.idx});
};

/**
 * Enables all domains excluded from the outgoing proxy.
 **/
Core.prototype.enableAllProxyChainExcludedDomains = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/enableAllProxyChainExcludedDomains/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/enableAllProxyChainExcludedDomains/');
};

/**
 * Disables all domains excluded from the outgoing proxy.
 **/
Core.prototype.disableAllProxyChainExcludedDomains = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/disableAllProxyChainExcludedDomains/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/disableAllProxyChainExcludedDomains/');
};

/**
 * Sets the maximum number of alert instances to include in a report. A value of zero is treated as unlimited.
 * @param {string} numberofinstances
 **/
Core.prototype.setOptionMaximumAlertInstances = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionMaximumAlertInstances/', {'numberOfInstances': args.numberofinstances}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionMaximumAlertInstances/', {'numberOfInstances': args.numberofinstances});
};

/**
 * Sets whether or not related alerts will be merged in any reports generated.
 * @param {string} enabled
 **/
Core.prototype.setOptionMergeRelatedAlerts = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionMergeRelatedAlerts/', {'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionMergeRelatedAlerts/', {'enabled': args.enabled});
};

/**
 * Sets (or clears, if empty) the path to the file with alert overrides.
 * @param {string} filepath
 **/
Core.prototype.setOptionAlertOverridesFilePath = function (args, callback) {
  const params = {};
  if (args.filepath && args.filepath !== null) {
    params['filePath'] = args.filepath;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionAlertOverridesFilePath/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionAlertOverridesFilePath/', params);
};

/**
 * Enables use of a PKCS12 client certificate for the certificate with the given file system path, password, and optional index.
 * @param {string} filepath
 * @param {string} password
 * @param {string} index
 **/
Core.prototype.enablePKCS12ClientCertificate = function (args, callback) {
  const params = {'filePath': args.filepath, 'password': args.password};
  if (args.index && args.index !== null) {
    params['index'] = args.index;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/enablePKCS12ClientCertificate/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/enablePKCS12ClientCertificate/', params);
};

/**
 * Disables the option for use of client certificates.
 **/
Core.prototype.disableClientCertificate = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/disableClientCertificate/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/disableClientCertificate/');
};

/**
 * Deletes all alerts of the current session.
 **/
Core.prototype.deleteAllAlerts = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/deleteAllAlerts/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/deleteAllAlerts/');
};

/**
 * Deletes the alert with the given ID. 
 * @param {string} id
 **/
Core.prototype.deleteAlert = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/deleteAlert/', {'id': args.id}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/deleteAlert/', {'id': args.id});
};

/**
 * Sets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).
 * @param {string} string
 **/
Core.prototype.setOptionDefaultUserAgent = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionDefaultUserAgent/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionDefaultUserAgent/', {'String': args.string});
};

/**
 * Sets the TTL (in seconds) of successful DNS queries (applies after ZAP restart).
 * @param {string} integer
 **/
Core.prototype.setOptionDnsTtlSuccessfulQueries = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionDnsTtlSuccessfulQueries/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionDnsTtlSuccessfulQueries/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} bool
 **/
Core.prototype.setOptionHttpStateEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionHttpStateEnabled/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionHttpStateEnabled/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainName = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainName/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainName/', {'String': args.string});
};

/**
 * 
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainPassword = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainPassword/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainPassword/', {'String': args.string});
};

/**
 * 
 * @param {string} integer
 **/
Core.prototype.setOptionProxyChainPort = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainPort/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainPort/', {'Integer': args.integer});
};

/**
 * 
 * @param {string} bool
 **/
Core.prototype.setOptionProxyChainPrompt = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainPrompt/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainPrompt/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainRealm = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainRealm/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainRealm/', {'String': args.string});
};

/**
 * Use actions [add|modify|remove]ProxyChainExcludedDomain instead.
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainSkipName = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainSkipName/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainSkipName/', {'String': args.string});
};

/**
 * 
 * @param {string} string
 **/
Core.prototype.setOptionProxyChainUserName = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainUserName/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainUserName/', {'String': args.string});
};

/**
 * 
 * @param {string} bool
 **/
Core.prototype.setOptionSingleCookieRequestHeader = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionSingleCookieRequestHeader/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionSingleCookieRequestHeader/', {'Boolean': args.bool});
};

/**
 * Sets the connection time out (in seconds).
 * @param {string} integer
 **/
Core.prototype.setOptionTimeoutInSecs = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionTimeoutInSecs/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionTimeoutInSecs/', {'Integer': args.integer});
};

/**
 * Sets whether or not the outgoing proxy should be used. The address/hostname of the outgoing proxy must be set to enable this option.
 * @param {string} bool
 **/
Core.prototype.setOptionUseProxyChain = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionUseProxyChain/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionUseProxyChain/', {'Boolean': args.bool});
};

/**
 * 
 * @param {string} bool
 **/
Core.prototype.setOptionUseProxyChainAuth = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionUseProxyChainAuth/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionUseProxyChainAuth/', {'Boolean': args.bool});
};

/**
 * Sets whether or not the SOCKS proxy should be used.
 * @param {string} bool - true if the SOCKS proxy should be used, false otherwise.
 **/
Core.prototype.setOptionUseSocksProxy = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionUseSocksProxy/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionUseSocksProxy/', {'Boolean': args.bool});
};

/**
 * 
 **/
Core.prototype.proxypac = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/proxy.pac/', callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/proxy.pac/');
};

/**
 * Gets the Root CA certificate used by the local proxies.
 **/
Core.prototype.rootcert = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/rootcert/', callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/rootcert/');
};

/**
 * 
 * @param {string} proxy
 **/
Core.prototype.setproxy = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/setproxy/', {'proxy': args.proxy}, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/setproxy/', {'proxy': args.proxy});
};

/**
 * Generates a report in XML format
 **/
Core.prototype.xmlreport = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/xmlreport/', callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/xmlreport/');
};

/**
 * Generates a report in HTML format
 **/
Core.prototype.htmlreport = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/htmlreport/', callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/htmlreport/');
};

/**
 * Generates a report in JSON format
 **/
Core.prototype.jsonreport = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/jsonreport/', callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/jsonreport/');
};

/**
 * Generates a report in Markdown format
 **/
Core.prototype.mdreport = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/mdreport/', callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/mdreport/');
};

/**
 * Gets the message with the given ID in HAR format
 * @param {string} id
 **/
Core.prototype.messageHar = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/messageHar/', {'id': args.id}, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/messageHar/', {'id': args.id});
};

/**
 * Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Core.prototype.messagesHar = function (args, callback) {
  const params = {};
  if (args.baseurl && args.baseurl !== null) {
    params['baseurl'] = args.baseurl;
  }
  if (args.start && args.start !== null) {
    params['start'] = args.start;
  }
  if (args.count && args.count !== null) {
    params['count'] = args.count;
  }
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/messagesHar/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/messagesHar/', params);
};

/**
 * Gets the HTTP messages with the given IDs, in HAR format.
 * @param {string} ids
 **/
Core.prototype.messagesHarById = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/messagesHarById/', {'ids': args.ids}, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/messagesHarById/', {'ids': args.ids});
};

/**
 * Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 * @param {string} request
 * @param {string} followredirects
 **/
Core.prototype.sendHarRequest = function (args, callback) {
  const params = {'request': args.request};
  if (args.followredirects && args.followredirects !== null) {
    params['followRedirects'] = args.followredirects;
  }
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/sendHarRequest/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/sendHarRequest/', params);
};

module.exports = Core;
