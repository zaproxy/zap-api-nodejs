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
function ImportLogFiles(clientApi) {
  this.api = clientApi;
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
ImportLogFiles.prototype.ImportZAPLogFromFile = function (filepath, callback) {
  if (typeof callback === 'function') {
    this.api.request('/importLogFiles/action/ImportZAPLogFromFile/', {'FilePath' : filepath}, callback);
    return;
  }
  return this.api.requestPromise('/importLogFiles/action/ImportZAPLogFromFile/', {'FilePath' : filepath});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
ImportLogFiles.prototype.ImportModSecurityLogFromFile = function (filepath, callback) {
  if (typeof callback === 'function') {
    this.api.request('/importLogFiles/action/ImportModSecurityLogFromFile/', {'FilePath' : filepath}, callback);
    return;
  }
  return this.api.requestPromise('/importLogFiles/action/ImportModSecurityLogFromFile/', {'FilePath' : filepath});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
ImportLogFiles.prototype.ImportZAPHttpRequestResponsePair = function (httprequest, httpresponse, callback) {
  if (typeof callback === 'function') {
    this.api.request('/importLogFiles/action/ImportZAPHttpRequestResponsePair/', {'HTTPRequest' : httprequest, 'HTTPResponse' : httpresponse}, callback);
    return;
  }
  return this.api.requestPromise('/importLogFiles/action/ImportZAPHttpRequestResponsePair/', {'HTTPRequest' : httprequest, 'HTTPResponse' : httpresponse});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
ImportLogFiles.prototype.PostModSecurityAuditEvent = function (auditeventstring, callback) {
  const params = {};
  if (auditeventstring && auditeventstring !== null) {
    params['AuditEventString'] = auditeventstring;
  }
  if (typeof callback === 'function') {
    this.api.request('/importLogFiles/action/PostModSecurityAuditEvent/', params, callback);
    return;
  }
  return this.api.requestPromise('/importLogFiles/action/PostModSecurityAuditEvent/', params);
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
ImportLogFiles.prototype.OtherPostModSecurityAuditEvent = function (auditeventstring, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/importLogFiles/other/OtherPostModSecurityAuditEvent/', {'AuditEventString' : auditeventstring}, callback);
    return;
  }
  return this.api.requestPromiseOther('/importLogFiles/other/OtherPostModSecurityAuditEvent/', {'AuditEventString' : auditeventstring});
};

module.exports = ImportLogFiles;
