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
function Users(clientApi) {
  this.api = clientApi;
}

Users.prototype.usersList = function (contextid, callback) {
  const params = {};
  if (contextid && contextid !== null) {
    params['contextId'] = contextid;
  }
  if (typeof callback === 'function') {
    this.api.request('/users/view/usersList/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/view/usersList/', params);
};

Users.prototype.getUserById = function (contextid, userid, callback) {
  const params = {};
  if (contextid && contextid !== null) {
    params['contextId'] = contextid;
  }
  if (userid && userid !== null) {
    params['userId'] = userid;
  }
  if (typeof callback === 'function') {
    this.api.request('/users/view/getUserById/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getUserById/', params);
};

Users.prototype.getAuthenticationCredentialsConfigParams = function (contextid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationCredentialsConfigParams/', {'contextId' : contextid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationCredentialsConfigParams/', {'contextId' : contextid});
};

Users.prototype.getAuthenticationCredentials = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationCredentials/', {'contextId' : contextid, 'userId' : userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationCredentials/', {'contextId' : contextid, 'userId' : userid});
};

Users.prototype.newUser = function (contextid, name, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/newUser/', {'contextId' : contextid, 'name' : name}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/newUser/', {'contextId' : contextid, 'name' : name});
};

Users.prototype.removeUser = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/removeUser/', {'contextId' : contextid, 'userId' : userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/removeUser/', {'contextId' : contextid, 'userId' : userid});
};

Users.prototype.setUserEnabled = function (contextid, userid, enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/setUserEnabled/', {'contextId' : contextid, 'userId' : userid, 'enabled' : enabled}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setUserEnabled/', {'contextId' : contextid, 'userId' : userid, 'enabled' : enabled});
};

Users.prototype.setUserName = function (contextid, userid, name, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/setUserName/', {'contextId' : contextid, 'userId' : userid, 'name' : name}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setUserName/', {'contextId' : contextid, 'userId' : userid, 'name' : name});
};

Users.prototype.setAuthenticationCredentials = function (contextid, userid, authcredentialsconfigparams, callback) {
  const params = {'contextId' : contextid, 'userId' : userid};
  if (authcredentialsconfigparams && authcredentialsconfigparams !== null) {
    params['authCredentialsConfigParams'] = authcredentialsconfigparams;
  }
  if (typeof callback === 'function') {
    this.api.request('/users/action/setAuthenticationCredentials/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setAuthenticationCredentials/', params);
};

module.exports = Users;
