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
function HttpSessions(clientApi) {
  this.api = clientApi;
}

/**
 * Gets all of the sites that have sessions.
 **/
HttpSessions.prototype.sites = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/view/sites/', callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/view/sites/');
};

/**
 * Gets the sessions for the given site. Optionally returning just the session with the given name.
 **/
HttpSessions.prototype.sessions = function (site, session, callback) {
  const params = {'site' : site};
  if (session && session !== null) {
    params['session'] = session;
  }
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/view/sessions/', params, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/view/sessions/', params);
};

/**
 * Gets the name of the active session for the given site.
 **/
HttpSessions.prototype.activeSession = function (site, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/view/activeSession/', {'site' : site}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/view/activeSession/', {'site' : site});
};

/**
 * Gets the names of the session tokens for the given site.
 **/
HttpSessions.prototype.sessionTokens = function (site, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/view/sessionTokens/', {'site' : site}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/view/sessionTokens/', {'site' : site});
};

/**
 * Creates an empty session for the given site. Optionally with the given name.
 **/
HttpSessions.prototype.createEmptySession = function (site, session, callback) {
  const params = {'site' : site};
  if (session && session !== null) {
    params['session'] = session;
  }
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/action/createEmptySession/', params, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/action/createEmptySession/', params);
};

/**
 * Removes the session from the given site.
 **/
HttpSessions.prototype.removeSession = function (site, session, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/action/removeSession/', {'site' : site, 'session' : session}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/action/removeSession/', {'site' : site, 'session' : session});
};

/**
 * Sets the given session as active for the given site.
 **/
HttpSessions.prototype.setActiveSession = function (site, session, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/action/setActiveSession/', {'site' : site, 'session' : session}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/action/setActiveSession/', {'site' : site, 'session' : session});
};

/**
 * Unsets the active session of the given site.
 **/
HttpSessions.prototype.unsetActiveSession = function (site, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/action/unsetActiveSession/', {'site' : site}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/action/unsetActiveSession/', {'site' : site});
};

/**
 * Adds the session token to the given site.
 **/
HttpSessions.prototype.addSessionToken = function (site, sessiontoken, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/action/addSessionToken/', {'site' : site, 'sessionToken' : sessiontoken}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/action/addSessionToken/', {'site' : site, 'sessionToken' : sessiontoken});
};

/**
 * Removes the session token from the given site.
 **/
HttpSessions.prototype.removeSessionToken = function (site, sessiontoken, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/action/removeSessionToken/', {'site' : site, 'sessionToken' : sessiontoken}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/action/removeSessionToken/', {'site' : site, 'sessionToken' : sessiontoken});
};

/**
 * Sets the value of the session token of the given session for the given site.
 **/
HttpSessions.prototype.setSessionTokenValue = function (site, session, sessiontoken, tokenvalue, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/action/setSessionTokenValue/', {'site' : site, 'session' : session, 'sessionToken' : sessiontoken, 'tokenValue' : tokenvalue}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/action/setSessionTokenValue/', {'site' : site, 'session' : session, 'sessionToken' : sessiontoken, 'tokenValue' : tokenvalue});
};

/**
 * Renames the session of the given site.
 **/
HttpSessions.prototype.renameSession = function (site, oldsessionname, newsessionname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/httpSessions/action/renameSession/', {'site' : site, 'oldSessionName' : oldsessionname, 'newSessionName' : newsessionname}, callback);
    return;
  }
  return this.api.requestPromise('/httpSessions/action/renameSession/', {'site' : site, 'oldSessionName' : oldsessionname, 'newSessionName' : newsessionname});
};

module.exports = HttpSessions;
