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
 * @param {string} start - The position (or offset) within the results to use as a starting position for the information returned.
 * @param {string} count - The number of results to return.
 **/
AjaxSpider.prototype.results = function (args, callback) {
  const params = {};
  if (args.start && args.start !== null) {
    params['start'] = args.start;
  }
  if (args.count && args.count !== null) {
    params['count'] = args.count;
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
 * @param {string} url - The starting URL (needs to include the 'scheme').
 * @param {string} inscope - A boolean (true/false) indicating whether or not the scan should be restricted to 'inScope' only resources (default value is false).
 * @param {string} contextname - The name for any defined context. If the value does not match a defined context then an error will occur.
 * @param {string} subtreeonly - A boolean (true/false) indicating whether or not the crawl should be constrained to a specific path (default value is false).
 **/
AjaxSpider.prototype.scan = function (args, callback) {
  const params = {};
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (args.inscope && args.inscope !== null) {
    params['inScope'] = args.inscope;
  }
  if (args.contextname && args.contextname !== null) {
    params['contextName'] = args.contextname;
  }
  if (args.subtreeonly && args.subtreeonly !== null) {
    params['subtreeOnly'] = args.subtreeonly;
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
 * @param {string} contextname - The name for any defined context. If the value does not match a defined context then an error will occur.
 * @param {string} username - The name of the user to be used when crawling. The "userName" should be previously defined on the context configuration.
 * @param {string} url - The starting URL (needs to include the 'scheme').
 * @param {string} subtreeonly - A boolean (true/false) indicating whether or not the crawl should be constrained to a specific path (default value is false).
 **/
AjaxSpider.prototype.scanAsUser = function (args, callback) {
  const params = {'contextName': args.contextname, 'userName': args.username};
  if (args.url && args.url !== null) {
    params['url'] = args.url;
  }
  if (args.subtreeonly && args.subtreeonly !== null) {
    params['subtreeOnly'] = args.subtreeonly;
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
 * @param {string} regex - The regular expression of the allowed resource.
 * @param {string} enabled - If the allowed resource should be enabled or not.
 **/
AjaxSpider.prototype.addAllowedResource = function (args, callback) {
  const params = {'regex': args.regex};
  if (args.enabled && args.enabled !== null) {
    params['enabled'] = args.enabled;
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
 * @param {string} regex - The regular expression of the allowed resource.
 **/
AjaxSpider.prototype.removeAllowedResource = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/removeAllowedResource/', {'regex': args.regex}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/removeAllowedResource/', {'regex': args.regex});
};

/**
 * Sets whether or not an allowed resource is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} regex - The regular expression of the allowed resource.
 * @param {string} enabled - If the allowed resource should be enabled or not.
 **/
AjaxSpider.prototype.setEnabledAllowedResource = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setEnabledAllowedResource/', {'regex': args.regex, 'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setEnabledAllowedResource/', {'regex': args.regex, 'enabled': args.enabled});
};

/**
 * Sets the configuration of the AJAX Spider to use one of the supported browsers.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string - The name of the browser to be used by the AJAX Spider. (See the Selenium add-on help for a list of supported browsers.)
 **/
AjaxSpider.prototype.setOptionBrowserId = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionBrowserId/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionBrowserId/', {'String': args.string});
};

/**
 * Sets whether or not the the AJAX Spider will only click on the default HTML elements.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool - A boolean (true/false) indicating if only default elements such as 'a' 'button' 'input' should be clicked (default is true).
 **/
AjaxSpider.prototype.setOptionClickDefaultElems = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionClickDefaultElems/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionClickDefaultElems/', {'Boolean': args.bool});
};

/**
 * When enabled, the crawler attempts to interact with each element (e.g., by clicking) only once.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool - A boolean (true/false) indicating whether or not the AJAX Spider should only click on elements once. If this is set to false, the crawler will attempt to click multiple times; which is more rigorous but may take considerably more time (default is true).
 **/
AjaxSpider.prototype.setOptionClickElemsOnce = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionClickElemsOnce/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionClickElemsOnce/', {'Boolean': args.bool});
};

/**
 * Sets the time to wait after an event (in milliseconds). For example: the wait delay after the cursor hovers over an element, in order for a menu to display, etc.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The time that the AJAX Spider should wait for each event (default is 1000 milliseconds).
 **/
AjaxSpider.prototype.setOptionEventWait = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionEventWait/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionEventWait/', {'Integer': args.integer});
};

/**
 * Sets the maximum depth that the crawler can reach.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The maximum depth that the crawler should explore (zero means unlimited depth, default is 10).
 **/
AjaxSpider.prototype.setOptionMaxCrawlDepth = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxCrawlDepth/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxCrawlDepth/', {'Integer': args.integer});
};

/**
 * Sets the maximum number of states that the crawler should crawl.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The maximum number of states that the AJAX Spider should explore (zero means unlimited crawl states, default is 0)
 **/
AjaxSpider.prototype.setOptionMaxCrawlStates = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxCrawlStates/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxCrawlStates/', {'Integer': args.integer});
};

/**
 * The maximum time that the crawler is allowed to run.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The maximum amount of time that the AJAX Spider is allowed to run (zero means unlimited running time, default is 60 minutes).
 **/
AjaxSpider.prototype.setOptionMaxDuration = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxDuration/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxDuration/', {'Integer': args.integer});
};

/**
 * Sets the number of windows to be used by AJAX Spider.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The number of windows that the AJAX Spider can use. The more windows, the faster the process will be. However, more windows also means greater resource usage (CPU, Memory, etc), and could lead to concurrency issues depending on the app being explored (default is 1).
 **/
AjaxSpider.prototype.setOptionNumberOfBrowsers = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionNumberOfBrowsers/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionNumberOfBrowsers/', {'Integer': args.integer});
};

/**
 * When enabled, inserts random values into form fields.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool - A boolean (true/false) indicating whether or not random values should be use in form fields. Otherwise, empty values are submitted (default is true).
 **/
AjaxSpider.prototype.setOptionRandomInputs = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionRandomInputs/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionRandomInputs/', {'Boolean': args.bool});
};

/**
 * Sets the time to wait after the page is loaded before interacting with it.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The number of milliseconds the AJAX Spider should wait after a page is loaded (default is 1000).
 **/
AjaxSpider.prototype.setOptionReloadWait = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionReloadWait/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionReloadWait/', {'Integer': args.integer});
};

module.exports = AjaxSpider;
