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
function Acsrf(clientApi) {
  this.api = clientApi;
}

/**
 * Lists the names of all anti-CSRF tokens
 **/
Acsrf.prototype.optionTokensNames = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/acsrf/view/optionTokensNames/', callback);
    return;
  }
  return this.api.requestPromise('/acsrf/view/optionTokensNames/');
};

/**
 * Define if ZAP should detect CSRF tokens by searching for partial matches
 **/
Acsrf.prototype.optionPartialMatchingEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/acsrf/view/optionPartialMatchingEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/acsrf/view/optionPartialMatchingEnabled/');
};

/**
 * Adds an anti-CSRF token with the given name, enabled by default
 **/
Acsrf.prototype.addOptionToken = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/acsrf/action/addOptionToken/', {'String': string}, callback);
    return;
  }
  return this.api.requestPromise('/acsrf/action/addOptionToken/', {'String': string});
};

/**
 * Removes the anti-CSRF token with the given name
 **/
Acsrf.prototype.removeOptionToken = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/acsrf/action/removeOptionToken/', {'String': string}, callback);
    return;
  }
  return this.api.requestPromise('/acsrf/action/removeOptionToken/', {'String': string});
};

/**
 * Define if ZAP should detect CSRF tokens by searching for partial matches.
 **/
Acsrf.prototype.setOptionPartialMatchingEnabled = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/acsrf/action/setOptionPartialMatchingEnabled/', {'Boolean': bool}, callback);
    return;
  }
  return this.api.requestPromise('/acsrf/action/setOptionPartialMatchingEnabled/', {'Boolean': bool});
};

/**
 * Generate a form for testing lack of anti-CSRF tokens - typically invoked via ZAP
 **/
Acsrf.prototype.genForm = function (hrefid, actionurl, callback) {
  const params = {'hrefId': hrefid};
  if (actionurl && actionurl !== null) {
    params['actionUrl'] = actionurl;
  }
  if (typeof callback === 'function') {
    this.api.requestOther('/acsrf/other/genForm/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/acsrf/other/genForm/', params);
};

module.exports = Acsrf;
