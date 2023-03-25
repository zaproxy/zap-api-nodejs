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

'use strict'

/**
 * This file was automatically generated.
 */
function Users (clientApi) {
  this.api = clientApi
}

/**
 * Gets a list of users that belong to the context with the given ID, or all users if none provided.
 * @param {string} contextid - The Context ID
 **/
Users.prototype.usersList = function (args) {
  const params = { }
  if (args.contextid && args.contextid !== null) {
    params.contextId = args.contextid
  }
  return this.api.request('/users/view/usersList/', params)
}

/**
 * Gets the data of the user with the given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.getUserById = function (args) {
  return this.api.request('/users/view/getUserById/', { contextId: args.contextid, userId: args.userid })
}

/**
 * Gets the configuration parameters for the credentials of the context with the given ID.
 * @param {string} contextid - The Context ID
 **/
Users.prototype.getAuthenticationCredentialsConfigParams = function (args) {
  return this.api.request('/users/view/getAuthenticationCredentialsConfigParams/', { contextId: args.contextid })
}

/**
 * Gets the authentication credentials of the user with given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - the User ID
 **/
Users.prototype.getAuthenticationCredentials = function (args) {
  return this.api.request('/users/view/getAuthenticationCredentials/', { contextId: args.contextid, userId: args.userid })
}

/**
 * Gets the authentication state information for the user identified by the Context and User Ids.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.getAuthenticationState = function (args) {
  return this.api.request('/users/view/getAuthenticationState/', { contextId: args.contextid, userId: args.userid })
}

/**
 * Gets the authentication session information for the user identified by the Context and User Ids, e.g. cookies and realm credentials.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.getAuthenticationSession = function (args) {
  return this.api.request('/users/view/getAuthenticationSession/', { contextId: args.contextid, userId: args.userid })
}

/**
 * Creates a new user with the given name for the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} name
 **/
Users.prototype.newUser = function (args) {
  return this.api.request('/users/action/newUser/', { contextId: args.contextid, name: args.name })
}

/**
 * Removes the user with the given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.removeUser = function (args) {
  return this.api.request('/users/action/removeUser/', { contextId: args.contextid, userId: args.userid })
}

/**
 * Sets whether or not the user, with the given ID that belongs to the context with the given ID, should be enabled.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 * @param {string} enabled
 **/
Users.prototype.setUserEnabled = function (args) {
  return this.api.request('/users/action/setUserEnabled/', { contextId: args.contextid, userId: args.userid, enabled: args.enabled })
}

/**
 * Renames the user with the given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 * @param {string} name
 **/
Users.prototype.setUserName = function (args) {
  return this.api.request('/users/action/setUserName/', { contextId: args.contextid, userId: args.userid, name: args.name })
}

/**
 * Sets the authentication credentials for the user with the given ID that belongs to the context with the given ID.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 * @param {string} authcredentialsconfigparams
 **/
Users.prototype.setAuthenticationCredentials = function (args) {
  const params = { contextId: args.contextid, userId: args.userid }
  if (args.authcredentialsconfigparams && args.authcredentialsconfigparams !== null) {
    params.authCredentialsConfigParams = args.authcredentialsconfigparams
  }
  return this.api.request('/users/action/setAuthenticationCredentials/', params)
}

/**
 * Tries to authenticate as the identified user, returning the authentication request and whether it appears to have succeeded.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.authenticateAsUser = function (args) {
  return this.api.request('/users/action/authenticateAsUser/', { contextId: args.contextid, userId: args.userid })
}

/**
 * Tries to poll as the identified user, returning the authentication request and whether it appears to have succeeded. This will only work if the polling verification strategy has been configured.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 **/
Users.prototype.pollAsUser = function (args) {
  return this.api.request('/users/action/pollAsUser/', { contextId: args.contextid, userId: args.userid })
}

/**
 * Sets fields in the authentication state for the user identified by the Context and User Ids.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 * @param {string} lastpollresult - Last Poll Result - optional, should be 'true' or 'false'.
 * @param {string} lastpolltimeinms - Last Poll Time in Milliseconds - optional, should be a long or 'NOW' for the current time in ms.
 * @param {string} requestssincelastpoll - Requests Since Last Poll - optional, should be an integer.
 **/
Users.prototype.setAuthenticationState = function (args) {
  const params = { contextId: args.contextid, userId: args.userid }
  if (args.lastpollresult && args.lastpollresult !== null) {
    params.lastPollResult = args.lastpollresult
  }
  if (args.lastpolltimeinms && args.lastpolltimeinms !== null) {
    params.lastPollTimeInMs = args.lastpolltimeinms
  }
  if (args.requestssincelastpoll && args.requestssincelastpoll !== null) {
    params.requestsSinceLastPoll = args.requestssincelastpoll
  }
  return this.api.request('/users/action/setAuthenticationState/', params)
}

/**
 * Sets the specified cookie for the user identified by the Context and User Ids.
 * @param {string} contextid - The Context ID
 * @param {string} userid - The User ID
 * @param {string} domain - The Cookie Domain
 * @param {string} name - The Cookie Name
 * @param {string} value - The Cookie Value
 * @param {string} path - The Cookie Path - optional default no path
 * @param {string} secure - If the Cookie is secure - optional default false
 **/
Users.prototype.setCookie = function (args) {
  const params = { contextId: args.contextid, userId: args.userid, domain: args.domain, name: args.name, value: args.value }
  if (args.path && args.path !== null) {
    params.path = args.path
  }
  if (args.secure && args.secure !== null) {
    params.secure = args.secure
  }
  return this.api.request('/users/action/setCookie/', params)
}

module.exports = Users
