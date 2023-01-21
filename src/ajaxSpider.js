/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2022 the ZAP development team
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
function AjaxSpider(clientApi) {
  this.api = clientApi;
}

/**
 * Gets the allowed resources. The allowed resources are always fetched even if out of scope, allowing to include necessary resources (e.g. scripts) from 3rd-parties.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.allowedResources = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/allowedResources/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/allowedResources/');
};

/**
 * Gets the current status of the crawler. Actual values are Stopped and Running.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.status = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/status/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/status/');
};

/**
 * Gets the current results of the crawler.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.results = function (start, count, callback) {
  const params = {};
  if (start && start !== null) {
    params['start'] = start;
  }
  if (count && count !== null) {
    params['count'] = count;
  }
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/results/', params, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/results/', params);
};

/**
 * Gets the number of resources found.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.numberOfResults = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/numberOfResults/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/numberOfResults/');
};

/**
 * Gets the full crawled content detected by the AJAX Spider. Returns a set of values based on 'inScope' URLs, 'outOfScope' URLs, and 'errors' encountered during the last/current run of the AJAX Spider.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.fullResults = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/fullResults/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/fullResults/');
};

/**
 * Gets the configured browser to use for crawling.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionBrowserId = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionBrowserId/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionBrowserId/');
};

/**
 * Gets the time to wait after an event (in milliseconds). For example: the wait delay after the cursor hovers over an element, in order for a menu to display, etc.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionEventWait = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionEventWait/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionEventWait/');
};

/**
 * Gets the configured value for the max crawl depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionMaxCrawlDepth = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionMaxCrawlDepth/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionMaxCrawlDepth/');
};

/**
 * Gets the configured value for the maximum crawl states allowed.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionMaxCrawlStates = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionMaxCrawlStates/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionMaxCrawlStates/');
};

/**
 * Gets the configured max duration of the crawl, the value is in minutes.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionMaxDuration = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionMaxDuration/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionMaxDuration/');
};

/**
 * Gets the configured number of browsers to be used.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionNumberOfBrowsers = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionNumberOfBrowsers/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionNumberOfBrowsers/');
};

/**
 * Gets the configured time to wait after reloading the page, this value is in milliseconds.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionReloadWait = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionReloadWait/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionReloadWait/');
};

/**
 * Gets the configured value for 'Click Default Elements Only', HTML elements such as 'a', 'button', 'input', all associated with some action or links on the page.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionClickDefaultElems = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionClickDefaultElems/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionClickDefaultElems/');
};

/**
 * Gets the value configured for the AJAX Spider to know if it should click on the elements only once.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionClickElemsOnce = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionClickElemsOnce/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionClickElemsOnce/');
};

/**
 * Gets if the AJAX Spider will use random values in form fields when crawling, if set to true.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.optionRandomInputs = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/view/optionRandomInputs/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/view/optionRandomInputs/');
};

/**
 * Runs the AJAX Spider against a given target.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.scan = function (url, inscope, contextname, subtreeonly, callback) {
  const params = {};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (inscope && inscope !== null) {
    params['inScope'] = inscope;
  }
  if (contextname && contextname !== null) {
    params['contextName'] = contextname;
  }
  if (subtreeonly && subtreeonly !== null) {
    params['subtreeOnly'] = subtreeonly;
  }
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/scan/', params, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/scan/', params);
};

/**
 * Runs the AJAX Spider from the perspective of a User of the web application.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.scanAsUser = function (contextname, username, url, subtreeonly, callback) {
  const params = {'contextName': contextname, 'userName': username};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (subtreeonly && subtreeonly !== null) {
    params['subtreeOnly'] = subtreeonly;
  }
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/scanAsUser/', params, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/scanAsUser/', params);
};

/**
 * Stops the AJAX Spider.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.stop = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/stop/', callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/stop/');
};

/**
 * Adds an allowed resource.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.addAllowedResource = function (regex, enabled, callback) {
  const params = {'regex': regex};
  if (enabled && enabled !== null) {
    params['enabled'] = enabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/addAllowedResource/', params, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/addAllowedResource/', params);
};

/**
 * Removes an allowed resource.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.removeAllowedResource = function (regex, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/removeAllowedResource/', {'regex': regex}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/removeAllowedResource/', {'regex': regex});
};

/**
 * Sets whether or not an allowed resource is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setEnabledAllowedResource = function (regex, enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setEnabledAllowedResource/', {'regex': regex, 'enabled': enabled}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setEnabledAllowedResource/', {'regex': regex, 'enabled': enabled});
};

/**
 * Sets the configuration of the AJAX Spider to use one of the supported browsers.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionBrowserId = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionBrowserId/', {'String': string}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionBrowserId/', {'String': string});
};

/**
 * Sets whether or not the the AJAX Spider will only click on the default HTML elements.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionClickDefaultElems = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionClickDefaultElems/', {'Boolean': bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionClickDefaultElems/', {'Boolean': bool});
};

/**
 * When enabled, the crawler attempts to interact with each element (e.g., by clicking) only once.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionClickElemsOnce = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionClickElemsOnce/', {'Boolean': bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionClickElemsOnce/', {'Boolean': bool});
};

/**
 * Sets the time to wait after an event (in milliseconds). For example: the wait delay after the cursor hovers over an element, in order for a menu to display, etc.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionEventWait = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionEventWait/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionEventWait/', {'Integer': integer});
};

/**
 * Sets the maximum depth that the crawler can reach.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionMaxCrawlDepth = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxCrawlDepth/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxCrawlDepth/', {'Integer': integer});
};

/**
 * Sets the maximum number of states that the crawler should crawl.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionMaxCrawlStates = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxCrawlStates/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxCrawlStates/', {'Integer': integer});
};

/**
 * The maximum time that the crawler is allowed to run.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionMaxDuration = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxDuration/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxDuration/', {'Integer': integer});
};

/**
 * Sets the number of windows to be used by AJAX Spider.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionNumberOfBrowsers = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionNumberOfBrowsers/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionNumberOfBrowsers/', {'Integer': integer});
};

/**
 * When enabled, inserts random values into form fields.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionRandomInputs = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionRandomInputs/', {'Boolean': bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionRandomInputs/', {'Boolean': bool});
};

/**
 * Sets the time to wait after the page is loaded before interacting with it.
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionReloadWait = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionReloadWait/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionReloadWait/', {'Integer': integer});
};

module.exports = AjaxSpider;
