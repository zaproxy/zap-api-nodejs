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
function Core(clientApi) {
  this.api = clientApi;
}

/**
 * Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method
 **/
Core.prototype.alert = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/alert/', {'id' : id}, callback);
    return;
  }
  return this.api.requestPromise('/core/view/alert/', {'id' : id});
};

/**
 * Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts
 **/
Core.prototype.alerts = function (baseurl, start, count, riskid, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (start && start !== null) {
    params['start'] = start;
  }
  if (count && count !== null) {
    params['count'] = count;
  }
  if (riskid && riskid !== null) {
    params['riskId'] = riskid;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/alerts/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/alerts/', params);
};

/**
 * Gets number of alerts grouped by each risk level, optionally filtering by URL
 **/
Core.prototype.alertsSummary = function (baseurl, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/alertsSummary/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/alertsSummary/', params);
};

/**
 * Gets the number of alerts, optionally filtering by URL or riskId
 **/
Core.prototype.numberOfAlerts = function (baseurl, riskid, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (riskid && riskid !== null) {
    params['riskId'] = riskid;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/numberOfAlerts/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/numberOfAlerts/', params);
};

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
 **/
Core.prototype.urls = function (baseurl, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/urls/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/urls/', params);
};

/**
 * Gets the HTTP message with the given ID. Returns the ID, request/response headers and bodies, cookies, note, type, RTT, and timestamp.
 **/
Core.prototype.message = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/message/', {'id' : id}, callback);
    return;
  }
  return this.api.requestPromise('/core/view/message/', {'id' : id});
};

/**
 * Gets the HTTP messages sent by ZAP, request and response, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 **/
Core.prototype.messages = function (baseurl, start, count, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (start && start !== null) {
    params['start'] = start;
  }
  if (count && count !== null) {
    params['count'] = count;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/view/messages/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/view/messages/', params);
};

/**
 * Gets the HTTP messages with the given IDs.
 **/
Core.prototype.messagesById = function (ids, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/messagesById/', {'ids' : ids}, callback);
    return;
  }
  return this.api.requestPromise('/core/view/messagesById/', {'ids' : ids});
};

/**
 * Gets the number of messages, optionally filtering by URL
 **/
Core.prototype.numberOfMessages = function (baseurl, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
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

Core.prototype.homeDirectory = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/homeDirectory/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/homeDirectory/');
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

Core.prototype.optionHttpState = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionHttpState/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionHttpState/');
};

Core.prototype.optionProxyChainName = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainName/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainName/');
};

Core.prototype.optionProxyChainPassword = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainPassword/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainPassword/');
};

Core.prototype.optionProxyChainPort = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainPort/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainPort/');
};

Core.prototype.optionProxyChainRealm = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainRealm/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainRealm/');
};

Core.prototype.optionProxyChainUserName = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainUserName/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainUserName/');
};

Core.prototype.optionTimeoutInSecs = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionTimeoutInSecs/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionTimeoutInSecs/');
};

Core.prototype.optionHttpStateEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionHttpStateEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionHttpStateEnabled/');
};

Core.prototype.optionProxyChainPrompt = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionProxyChainPrompt/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionProxyChainPrompt/');
};

Core.prototype.optionSingleCookieRequestHeader = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionSingleCookieRequestHeader/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionSingleCookieRequestHeader/');
};

Core.prototype.optionUseProxyChain = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionUseProxyChain/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionUseProxyChain/');
};

Core.prototype.optionUseProxyChainAuth = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/view/optionUseProxyChainAuth/', callback);
    return;
  }
  return this.api.requestPromise('/core/view/optionUseProxyChainAuth/');
};

/**
 * Convenient and simple action to access a URL, optionally following redirections. Returns the request sent and response received and followed redirections, if any. Other actions are available which offer more control on what is sent, like, 'sendRequest' or 'sendHarRequest'.
 **/
Core.prototype.accessUrl = function (url, followredirects, callback) {
  const params = {'url' : url};
  if (followredirects && followredirects !== null) {
    params['followRedirects'] = followredirects;
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
 **/
Core.prototype.newSession = function (name, overwrite, callback) {
  const params = {};
  if (name && name !== null) {
    params['name'] = name;
  }
  if (overwrite && overwrite !== null) {
    params['overwrite'] = overwrite;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/newSession/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/newSession/', params);
};

/**
 * Loads the session with the given name. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 **/
Core.prototype.loadSession = function (name, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/loadSession/', {'name' : name}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/loadSession/', {'name' : name});
};

/**
 * Saves the session with the name supplied, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.
 **/
Core.prototype.saveSession = function (name, overwrite, callback) {
  const params = {'name' : name};
  if (overwrite && overwrite !== null) {
    params['overwrite'] = overwrite;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/saveSession/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/saveSession/', params);
};

Core.prototype.snapshotSession = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/snapshotSession/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/snapshotSession/');
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
 **/
Core.prototype.excludeFromProxy = function (regex, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/excludeFromProxy/', {'regex' : regex}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/excludeFromProxy/', {'regex' : regex});
};

Core.prototype.setHomeDirectory = function (dir, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setHomeDirectory/', {'dir' : dir}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setHomeDirectory/', {'dir' : dir});
};

/**
 * Sets the mode, which may be one of [safe, protect, standard, attack]
 **/
Core.prototype.setMode = function (mode, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setMode/', {'mode' : mode}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setMode/', {'mode' : mode});
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
 **/
Core.prototype.sendRequest = function (request, followredirects, callback) {
  const params = {'request' : request};
  if (followredirects && followredirects !== null) {
    params['followRedirects'] = followredirects;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/sendRequest/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/sendRequest/', params);
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
 **/
Core.prototype.deleteAlert = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/deleteAlert/', {'id' : id}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/deleteAlert/', {'id' : id});
};

Core.prototype.runGarbageCollection = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/runGarbageCollection/', callback);
    return;
  }
  return this.api.requestPromise('/core/action/runGarbageCollection/');
};

/**
 * Deletes the site node found in the Sites Tree on the basis of the URL, HTTP method, and post data (if applicable and specified). 
 **/
Core.prototype.deleteSiteNode = function (url, method, postdata, callback) {
  const params = {'url' : url};
  if (method && method !== null) {
    params['method'] = method;
  }
  if (postdata && postdata !== null) {
    params['postData'] = postdata;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/deleteSiteNode/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/deleteSiteNode/', params);
};

/**
 * Adds a domain to be excluded from the outgoing proxy, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).
 **/
Core.prototype.addProxyChainExcludedDomain = function (value, isregex, isenabled, callback) {
  const params = {'value' : value};
  if (isregex && isregex !== null) {
    params['isRegex'] = isregex;
  }
  if (isenabled && isenabled !== null) {
    params['isEnabled'] = isenabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/addProxyChainExcludedDomain/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/addProxyChainExcludedDomain/', params);
};

/**
 * Modifies a domain excluded from the outgoing proxy. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view proxyChainExcludedDomains.
 **/
Core.prototype.modifyProxyChainExcludedDomain = function (idx, value, isregex, isenabled, callback) {
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
    this.api.request('/core/action/modifyProxyChainExcludedDomain/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/modifyProxyChainExcludedDomain/', params);
};

/**
 * Removes a domain excluded from the outgoing proxy, with the given index. The index can be obtained with the view proxyChainExcludedDomains.
 **/
Core.prototype.removeProxyChainExcludedDomain = function (idx, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/removeProxyChainExcludedDomain/', {'idx' : idx}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/removeProxyChainExcludedDomain/', {'idx' : idx});
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
 **/
Core.prototype.setOptionMaximumAlertInstances = function (numberofinstances, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionMaximumAlertInstances/', {'numberOfInstances' : numberofinstances}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionMaximumAlertInstances/', {'numberOfInstances' : numberofinstances});
};

/**
 * Sets whether or not related alerts will be merged in any reports generated.
 **/
Core.prototype.setOptionMergeRelatedAlerts = function (enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionMergeRelatedAlerts/', {'enabled' : enabled}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionMergeRelatedAlerts/', {'enabled' : enabled});
};

/**
 * Sets (or clears, if empty) the path to the file with alert overrides.
 **/
Core.prototype.setOptionAlertOverridesFilePath = function (filepath, callback) {
  const params = {};
  if (filepath && filepath !== null) {
    params['filePath'] = filepath;
  }
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionAlertOverridesFilePath/', params, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionAlertOverridesFilePath/', params);
};

/**
 * Sets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).
 **/
Core.prototype.setOptionDefaultUserAgent = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionDefaultUserAgent/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionDefaultUserAgent/', {'String' : string});
};

Core.prototype.setOptionProxyChainName = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainName/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainName/', {'String' : string});
};

Core.prototype.setOptionProxyChainPassword = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainPassword/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainPassword/', {'String' : string});
};

Core.prototype.setOptionProxyChainRealm = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainRealm/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainRealm/', {'String' : string});
};

/**
 * Use actions [add|modify|remove]ProxyChainExcludedDomain instead.
 **/
Core.prototype.setOptionProxyChainSkipName = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainSkipName/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainSkipName/', {'String' : string});
};

Core.prototype.setOptionProxyChainUserName = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainUserName/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainUserName/', {'String' : string});
};

/**
 * Sets the TTL (in seconds) of successful DNS queries (applies after ZAP restart).
 **/
Core.prototype.setOptionDnsTtlSuccessfulQueries = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionDnsTtlSuccessfulQueries/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionDnsTtlSuccessfulQueries/', {'Integer' : integer});
};

Core.prototype.setOptionHttpStateEnabled = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionHttpStateEnabled/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionHttpStateEnabled/', {'Boolean' : bool});
};

Core.prototype.setOptionProxyChainPort = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainPort/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainPort/', {'Integer' : integer});
};

Core.prototype.setOptionProxyChainPrompt = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionProxyChainPrompt/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionProxyChainPrompt/', {'Boolean' : bool});
};

Core.prototype.setOptionSingleCookieRequestHeader = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionSingleCookieRequestHeader/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionSingleCookieRequestHeader/', {'Boolean' : bool});
};

Core.prototype.setOptionTimeoutInSecs = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionTimeoutInSecs/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionTimeoutInSecs/', {'Integer' : integer});
};

/**
 * Sets whether or not the outgoing proxy should be used. The address/hostname of the outgoing proxy must be set to enable this option.
 **/
Core.prototype.setOptionUseProxyChain = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionUseProxyChain/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionUseProxyChain/', {'Boolean' : bool});
};

Core.prototype.setOptionUseProxyChainAuth = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/core/action/setOptionUseProxyChainAuth/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/core/action/setOptionUseProxyChainAuth/', {'Boolean' : bool});
};

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

Core.prototype.setproxy = function (proxy, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/setproxy/', {'proxy' : proxy}, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/setproxy/', {'proxy' : proxy});
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
 **/
Core.prototype.messageHar = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/messageHar/', {'id' : id}, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/messageHar/', {'id' : id});
};

/**
 * Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 **/
Core.prototype.messagesHar = function (baseurl, start, count, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (start && start !== null) {
    params['start'] = start;
  }
  if (count && count !== null) {
    params['count'] = count;
  }
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/messagesHar/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/messagesHar/', params);
};

/**
 * Gets the HTTP messages with the given IDs, in HAR format.
 **/
Core.prototype.messagesHarById = function (ids, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/messagesHarById/', {'ids' : ids}, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/messagesHarById/', {'ids' : ids});
};

/**
 * Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 **/
Core.prototype.sendHarRequest = function (request, followredirects, callback) {
  const params = {'request' : request};
  if (followredirects && followredirects !== null) {
    params['followRedirects'] = followredirects;
  }
  if (typeof callback === 'function') {
    this.api.requestOther('/core/other/sendHarRequest/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/core/other/sendHarRequest/', params);
};

module.exports = Core;
