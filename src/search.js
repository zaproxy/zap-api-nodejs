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
function Search(clientApi) {
  this.api = clientApi;
}

/**
 * Returns the URLs of the HTTP messages that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.urlsByUrlRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.request('/search/view/urlsByUrlRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/urlsByUrlRegex/', params);
};

/**
 * Returns the URLs of the HTTP messages that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.urlsByRequestRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.request('/search/view/urlsByRequestRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/urlsByRequestRegex/', params);
};

/**
 * Returns the URLs of the HTTP messages that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.urlsByResponseRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.request('/search/view/urlsByResponseRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/urlsByResponseRegex/', params);
};

/**
 * Returns the URLs of the HTTP messages that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.urlsByHeaderRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.request('/search/view/urlsByHeaderRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/urlsByHeaderRegex/', params);
};

/**
 * Returns the HTTP messages that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.messagesByUrlRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.request('/search/view/messagesByUrlRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/messagesByUrlRegex/', params);
};

/**
 * Returns the HTTP messages that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.messagesByRequestRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.request('/search/view/messagesByRequestRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/messagesByRequestRegex/', params);
};

/**
 * Returns the HTTP messages that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.messagesByResponseRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.request('/search/view/messagesByResponseRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/messagesByResponseRegex/', params);
};

/**
 * Returns the HTTP messages that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.messagesByHeaderRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.request('/search/view/messagesByHeaderRegex/', params, callback);
    return;
  }
  return this.api.requestPromise('/search/view/messagesByHeaderRegex/', params);
};

/**
 * Returns the HTTP messages, in HAR format, that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.harByUrlRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.requestOther('/search/other/harByUrlRegex/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/search/other/harByUrlRegex/', params);
};

/**
 * Returns the HTTP messages, in HAR format, that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.harByRequestRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.requestOther('/search/other/harByRequestRegex/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/search/other/harByRequestRegex/', params);
};

/**
 * Returns the HTTP messages, in HAR format, that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.harByResponseRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.requestOther('/search/other/harByResponseRegex/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/search/other/harByResponseRegex/', params);
};

/**
 * Returns the HTTP messages, in HAR format, that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages.
 * @param {string} regex
 * @param {string} baseurl
 * @param {string} start
 * @param {string} count
 **/
Search.prototype.harByHeaderRegex = function (args, callback) {
  const params = {'regex': args.regex};
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
    this.api.requestOther('/search/other/harByHeaderRegex/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/search/other/harByHeaderRegex/', params);
};

module.exports = Search;
