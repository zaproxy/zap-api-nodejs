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
function Users(clientApi) {
  this.api = clientApi;
}

/**
 * Gets a list of users that belong to the context with the given ID, or all users if none provided.
 **/
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

/**
 * Gets the data of the user with the given ID that belongs to the context with the given ID.
 **/
Users.prototype.getUserById = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getUserById/', {'contextId': contextid, 'userId': userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getUserById/', {'contextId': contextid, 'userId': userid});
};

/**
 * Gets the configuration parameters for the credentials of the context with the given ID.
 **/
Users.prototype.getAuthenticationCredentialsConfigParams = function (contextid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationCredentialsConfigParams/', {'contextId': contextid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationCredentialsConfigParams/', {'contextId': contextid});
};

/**
 * Gets the authentication credentials of the user with given ID that belongs to the context with the given ID.
 **/
Users.prototype.getAuthenticationCredentials = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationCredentials/', {'contextId': contextid, 'userId': userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationCredentials/', {'contextId': contextid, 'userId': userid});
};

/**
 * Gets the authentication state information for the user identified by the Context and User Ids.
 **/
Users.prototype.getAuthenticationState = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationState/', {'contextId': contextid, 'userId': userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationState/', {'contextId': contextid, 'userId': userid});
};

/**
 * Gets the authentication session information for the user identified by the Context and User Ids, e.g. cookies and realm credentials.
 **/
Users.prototype.getAuthenticationSession = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/view/getAuthenticationSession/', {'contextId': contextid, 'userId': userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/view/getAuthenticationSession/', {'contextId': contextid, 'userId': userid});
};

/**
 * Creates a new user with the given name for the context with the given ID.
 **/
Users.prototype.newUser = function (contextid, name, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/newUser/', {'contextId': contextid, 'name': name}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/newUser/', {'contextId': contextid, 'name': name});
};

/**
 * Removes the user with the given ID that belongs to the context with the given ID.
 **/
Users.prototype.removeUser = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/removeUser/', {'contextId': contextid, 'userId': userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/removeUser/', {'contextId': contextid, 'userId': userid});
};

/**
 * Sets whether or not the user, with the given ID that belongs to the context with the given ID, should be enabled.
 **/
Users.prototype.setUserEnabled = function (contextid, userid, enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/setUserEnabled/', {'contextId': contextid, 'userId': userid, 'enabled': enabled}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setUserEnabled/', {'contextId': contextid, 'userId': userid, 'enabled': enabled});
};

/**
 * Renames the user with the given ID that belongs to the context with the given ID.
 **/
Users.prototype.setUserName = function (contextid, userid, name, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/setUserName/', {'contextId': contextid, 'userId': userid, 'name': name}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setUserName/', {'contextId': contextid, 'userId': userid, 'name': name});
};

/**
 * Sets the authentication credentials for the user with the given ID that belongs to the context with the given ID.
 **/
Users.prototype.setAuthenticationCredentials = function (contextid, userid, authcredentialsconfigparams, callback) {
  const params = {'contextId': contextid, 'userId': userid};
  if (authcredentialsconfigparams && authcredentialsconfigparams !== null) {
    params['authCredentialsConfigParams'] = authcredentialsconfigparams;
  }
  if (typeof callback === 'function') {
    this.api.request('/users/action/setAuthenticationCredentials/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setAuthenticationCredentials/', params);
};

/**
 * Tries to authenticate as the identified user, returning the authentication request and whether it appears to have succeeded.
 **/
Users.prototype.authenticateAsUser = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/authenticateAsUser/', {'contextId': contextid, 'userId': userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/authenticateAsUser/', {'contextId': contextid, 'userId': userid});
};

/**
 * Tries to poll as the identified user, returning the authentication request and whether it appears to have succeeded. This will only work if the polling verification strategy has been configured.
 **/
Users.prototype.pollAsUser = function (contextid, userid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/users/action/pollAsUser/', {'contextId': contextid, 'userId': userid}, callback);
    return;
  }
  return this.api.requestPromise('/users/action/pollAsUser/', {'contextId': contextid, 'userId': userid});
};

/**
 * Sets fields in the authentication state for the user identified by the Context and User Ids.
 **/
Users.prototype.setAuthenticationState = function (contextid, userid, lastpollresult, lastpolltimeinms, requestssincelastpoll, callback) {
  const params = {'contextId': contextid, 'userId': userid};
  if (lastpollresult && lastpollresult !== null) {
    params['lastPollResult'] = lastpollresult;
  }
  if (lastpolltimeinms && lastpolltimeinms !== null) {
    params['lastPollTimeInMs'] = lastpolltimeinms;
  }
  if (requestssincelastpoll && requestssincelastpoll !== null) {
    params['requestsSinceLastPoll'] = requestssincelastpoll;
  }
  if (typeof callback === 'function') {
    this.api.request('/users/action/setAuthenticationState/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setAuthenticationState/', params);
};

/**
 * Sets the specified cookie for the user identified by the Context and User Ids.
 **/
Users.prototype.setCookie = function (contextid, userid, domain, name, value, path, secure, callback) {
  const params = {'contextId': contextid, 'userId': userid, 'domain': domain, 'name': name, 'value': value};
  if (path && path !== null) {
    params['path'] = path;
  }
  if (secure && secure !== null) {
    params['secure'] = secure;
  }
  if (typeof callback === 'function') {
    this.api.request('/users/action/setCookie/', params, callback);
    return;
  }
  return this.api.requestPromise('/users/action/setCookie/', params);
};

module.exports = Users;
