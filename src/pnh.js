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
function Pnh(clientApi) {
  this.api = clientApi;
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.monitor = function (id, message, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pnh/action/monitor/', {'id' : id, 'message' : message}, callback);
    return;
  }
  return this.api.requestPromise('/pnh/action/monitor/', {'id' : id, 'message' : message});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.oracle = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pnh/action/oracle/', {'id' : id}, callback);
    return;
  }
  return this.api.requestPromise('/pnh/action/oracle/', {'id' : id});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.startMonitoring = function (url, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pnh/action/startMonitoring/', {'url' : url}, callback);
    return;
  }
  return this.api.requestPromise('/pnh/action/startMonitoring/', {'url' : url});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.stopMonitoring = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pnh/action/stopMonitoring/', {'id' : id}, callback);
    return;
  }
  return this.api.requestPromise('/pnh/action/stopMonitoring/', {'id' : id});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.pnh = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/pnh/other/pnh/', callback);
    return;
  }
  return this.api.requestPromiseOther('/pnh/other/pnh/');
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.manifest = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/pnh/other/manifest/', callback);
    return;
  }
  return this.api.requestPromiseOther('/pnh/other/manifest/');
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.service = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/pnh/other/service/', callback);
    return;
  }
  return this.api.requestPromiseOther('/pnh/other/service/');
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.fx_pnhxpi = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/pnh/other/fx_pnh.xpi/', callback);
    return;
  }
  return this.api.requestPromiseOther('/pnh/other/fx_pnh.xpi/');
};

module.exports = Pnh;
