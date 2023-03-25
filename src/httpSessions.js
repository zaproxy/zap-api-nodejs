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
function HttpSessions (clientApi) {
  this.api = clientApi
}

/**
 * Gets all of the sites that have sessions.
 **/
HttpSessions.prototype.sites = function () {
  return this.api.request('/httpSessions/view/sites/')
}

/**
 * Gets the sessions for the given site. Optionally returning just the session with the given name.
 * @param {string} site
 * @param {string} session
 **/
HttpSessions.prototype.sessions = function (args) {
  const params = { site: args.site }
  if (args.session && args.session !== null) {
    params.session = args.session
  }
  return this.api.request('/httpSessions/view/sessions/', params)
}

/**
 * Gets the name of the active session for the given site.
 * @param {string} site
 **/
HttpSessions.prototype.activeSession = function (args) {
  return this.api.request('/httpSessions/view/activeSession/', { site: args.site })
}

/**
 * Gets the names of the session tokens for the given site.
 * @param {string} site
 **/
HttpSessions.prototype.sessionTokens = function (args) {
  return this.api.request('/httpSessions/view/sessionTokens/', { site: args.site })
}

/**
 * Gets the default session tokens.
 **/
HttpSessions.prototype.defaultSessionTokens = function () {
  return this.api.request('/httpSessions/view/defaultSessionTokens/')
}

/**
 * Creates an empty session for the given site. Optionally with the given name.
 * @param {string} site
 * @param {string} session
 **/
HttpSessions.prototype.createEmptySession = function (args) {
  const params = { site: args.site }
  if (args.session && args.session !== null) {
    params.session = args.session
  }
  return this.api.request('/httpSessions/action/createEmptySession/', params)
}

/**
 * Removes the session from the given site.
 * @param {string} site
 * @param {string} session
 **/
HttpSessions.prototype.removeSession = function (args) {
  return this.api.request('/httpSessions/action/removeSession/', { site: args.site, session: args.session })
}

/**
 * Sets the given session as active for the given site.
 * @param {string} site
 * @param {string} session
 **/
HttpSessions.prototype.setActiveSession = function (args) {
  return this.api.request('/httpSessions/action/setActiveSession/', { site: args.site, session: args.session })
}

/**
 * Unsets the active session of the given site.
 * @param {string} site
 **/
HttpSessions.prototype.unsetActiveSession = function (args) {
  return this.api.request('/httpSessions/action/unsetActiveSession/', { site: args.site })
}

/**
 * Adds the session token to the given site.
 * @param {string} site
 * @param {string} sessiontoken
 **/
HttpSessions.prototype.addSessionToken = function (args) {
  return this.api.request('/httpSessions/action/addSessionToken/', { site: args.site, sessionToken: args.sessiontoken })
}

/**
 * Removes the session token from the given site.
 * @param {string} site
 * @param {string} sessiontoken
 **/
HttpSessions.prototype.removeSessionToken = function (args) {
  return this.api.request('/httpSessions/action/removeSessionToken/', { site: args.site, sessionToken: args.sessiontoken })
}

/**
 * Sets the value of the session token of the given session for the given site.
 * @param {string} site
 * @param {string} session
 * @param {string} sessiontoken
 * @param {string} tokenvalue
 **/
HttpSessions.prototype.setSessionTokenValue = function (args) {
  return this.api.request('/httpSessions/action/setSessionTokenValue/', { site: args.site, session: args.session, sessionToken: args.sessiontoken, tokenValue: args.tokenvalue })
}

/**
 * Renames the session of the given site.
 * @param {string} site
 * @param {string} oldsessionname
 * @param {string} newsessionname
 **/
HttpSessions.prototype.renameSession = function (args) {
  return this.api.request('/httpSessions/action/renameSession/', { site: args.site, oldSessionName: args.oldsessionname, newSessionName: args.newsessionname })
}

/**
 * Adds a default session token with the given name and enabled state.
 * @param {string} sessiontoken
 * @param {string} tokenenabled
 **/
HttpSessions.prototype.addDefaultSessionToken = function (args) {
  const params = { sessionToken: args.sessiontoken }
  if (args.tokenenabled && args.tokenenabled !== null) {
    params.tokenEnabled = args.tokenenabled
  }
  return this.api.request('/httpSessions/action/addDefaultSessionToken/', params)
}

/**
 * Sets whether or not the default session token with the given name is enabled.
 * @param {string} sessiontoken
 * @param {string} tokenenabled
 **/
HttpSessions.prototype.setDefaultSessionTokenEnabled = function (args) {
  return this.api.request('/httpSessions/action/setDefaultSessionTokenEnabled/', { sessionToken: args.sessiontoken, tokenEnabled: args.tokenenabled })
}

/**
 * Removes the default session token with the given name.
 * @param {string} sessiontoken
 **/
HttpSessions.prototype.removeDefaultSessionToken = function (args) {
  return this.api.request('/httpSessions/action/removeDefaultSessionToken/', { sessionToken: args.sessiontoken })
}

module.exports = HttpSessions
