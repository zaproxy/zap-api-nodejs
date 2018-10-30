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
function Search(clientApi) {
  this.api = clientApi;
}

Search.prototype.urlsByUrlRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.request('/search/view/urlsByUrlRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/urlsByUrlRegex/', params);
};

Search.prototype.urlsByRequestRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.request('/search/view/urlsByRequestRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/urlsByRequestRegex/', params);
};

Search.prototype.urlsByResponseRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.request('/search/view/urlsByResponseRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/urlsByResponseRegex/', params);
};

Search.prototype.urlsByHeaderRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.request('/search/view/urlsByHeaderRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/urlsByHeaderRegex/', params);
};

Search.prototype.messagesByUrlRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.request('/search/view/messagesByUrlRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/messagesByUrlRegex/', params);
};

Search.prototype.messagesByRequestRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.request('/search/view/messagesByRequestRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/messagesByRequestRegex/', params);
};

Search.prototype.messagesByResponseRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.request('/search/view/messagesByResponseRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/messagesByResponseRegex/', params);
};

Search.prototype.messagesByHeaderRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.request('/search/view/messagesByHeaderRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/messagesByHeaderRegex/', params);
};

Search.prototype.harByUrlRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.requestOther('/search/other/harByUrlRegex/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/search/other/harByUrlRegex/', params);
};

Search.prototype.harByRequestRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.requestOther('/search/other/harByRequestRegex/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/search/other/harByRequestRegex/', params);
};

Search.prototype.harByResponseRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.requestOther('/search/other/harByResponseRegex/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/search/other/harByResponseRegex/', params);
};

Search.prototype.harByHeaderRegex = function (regex, baseurl, start, count, callback) {
  const params = {'regex' : regex};
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
    this.api.requestOther('/search/other/harByHeaderRegex/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/search/other/harByHeaderRegex/', params);
};

module.exports = Search;
