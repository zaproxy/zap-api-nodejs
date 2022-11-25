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
function Exim(clientApi) {
  this.api = clientApi;
}

/**
 * Imports a HAR file.
 * This component is optional and therefore the API will only work if it is installed
 **/
Exim.prototype.importHar = function (filepath, callback) {
  if (typeof callback === 'function') {
    this.api.request('/exim/action/importHar/', {'filePath': filepath}, callback);
    return;
  }
  return this.api.requestPromise('/exim/action/importHar/', {'filePath': filepath});
};

/**
 * Imports URLs (one per line) from the file with the given file system path.
 * This component is optional and therefore the API will only work if it is installed
 **/
Exim.prototype.importUrls = function (filepath, callback) {
  if (typeof callback === 'function') {
    this.api.request('/exim/action/importUrls/', {'filePath': filepath}, callback);
    return;
  }
  return this.api.requestPromise('/exim/action/importUrls/', {'filePath': filepath});
};

/**
 * Imports previously exported ZAP messages from the file with the given file system path.
 * This component is optional and therefore the API will only work if it is installed
 **/
Exim.prototype.importZapLogs = function (filepath, callback) {
  if (typeof callback === 'function') {
    this.api.request('/exim/action/importZapLogs/', {'filePath': filepath}, callback);
    return;
  }
  return this.api.requestPromise('/exim/action/importZapLogs/', {'filePath': filepath});
};

/**
 * Imports ModSecurity2 logs from the file with the given file system path.
 * This component is optional and therefore the API will only work if it is installed
 **/
Exim.prototype.importModsec2Logs = function (filepath, callback) {
  if (typeof callback === 'function') {
    this.api.request('/exim/action/importModsec2Logs/', {'filePath': filepath}, callback);
    return;
  }
  return this.api.requestPromise('/exim/action/importModsec2Logs/', {'filePath': filepath});
};

/**
 * Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages
 * This component is optional and therefore the API will only work if it is installed
 **/
Exim.prototype.exportHar = function (baseurl, start, count, callback) {
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
    this.api.requestOther('/exim/other/exportHar/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/exim/other/exportHar/', params);
};

/**
 * Gets the HTTP messages with the given IDs, in HAR format.
 * This component is optional and therefore the API will only work if it is installed
 **/
Exim.prototype.exportHarById = function (ids, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/exim/other/exportHarById/', {'ids': ids}, callback);
    return;
  }
  return this.api.requestPromiseOther('/exim/other/exportHarById/', {'ids': ids});
};

/**
 * Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
 * This component is optional and therefore the API will only work if it is installed
 **/
Exim.prototype.sendHarRequest = function (request, followredirects, callback) {
  const params = {'request': request};
  if (followredirects && followredirects !== null) {
    params['followRedirects'] = followredirects;
  }
  if (typeof callback === 'function') {
    this.api.requestOther('/exim/other/sendHarRequest/', params, callback);
    return;
  }
  return this.api.requestPromiseOther('/exim/other/sendHarRequest/', params);
};

module.exports = Exim;
