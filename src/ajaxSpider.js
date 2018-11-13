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
function AjaxSpider(clientApi) {
  this.api = clientApi;
}

/**
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
 * Runs the spider against the given URL and/or context, optionally, spidering everything in scope. The parameter 'contextName' can be used to constrain the scan to a Context, the option 'in scope' is ignored if a context was also specified. The parameter 'subtreeOnly' allows to restrict the spider under a site's subtree (using the specified 'url').
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
 * Runs the spider from the perspective of a User, obtained using the given context name and user name. The parameter 'url' allows to specify the starting point for the spider, otherwise it's used an existing URL from the context (if any). The parameter 'subtreeOnly' allows to restrict the spider under a site's subtree (using the specified 'url').
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.scanAsUser = function (contextname, username, url, subtreeonly, callback) {
  const params = {'contextName' : contextname, 'userName' : username};
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
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionBrowserId = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionBrowserId/', {'String' : string}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionBrowserId/', {'String' : string});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionClickDefaultElems = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionClickDefaultElems/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionClickDefaultElems/', {'Boolean' : bool});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionClickElemsOnce = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionClickElemsOnce/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionClickElemsOnce/', {'Boolean' : bool});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionEventWait = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionEventWait/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionEventWait/', {'Integer' : integer});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionMaxCrawlDepth = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxCrawlDepth/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxCrawlDepth/', {'Integer' : integer});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionMaxCrawlStates = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxCrawlStates/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxCrawlStates/', {'Integer' : integer});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionMaxDuration = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionMaxDuration/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionMaxDuration/', {'Integer' : integer});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionNumberOfBrowsers = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionNumberOfBrowsers/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionNumberOfBrowsers/', {'Integer' : integer});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionRandomInputs = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionRandomInputs/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionRandomInputs/', {'Boolean' : bool});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
AjaxSpider.prototype.setOptionReloadWait = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/ajaxSpider/action/setOptionReloadWait/', {'Integer' : integer}, callback);
    return;
  }
  return this.api.requestPromise('/ajaxSpider/action/setOptionReloadWait/', {'Integer' : integer});
};

module.exports = AjaxSpider;
