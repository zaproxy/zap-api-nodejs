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

class HttpSessions {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets all the sites that have sessions.
   * @returns {Promise<any>} A promise resolving with the list of sites.
   */
  sites = () => this.api.request('/httpSessions/view/sites');

  /**
   * Gets the sessions for the given site, optionally returning only the specified session.
   * @param {{ site: string, session?: string }} args - Object containing the site and optional session name.
   * @returns {Promise<any>} A promise resolving with the sessions.
   */
  sessions = ({ site, session }) => {
    const params = { site };
    if (session) params.session = session;
    return this.api.request('/httpSessions/view/sessions', params);
  };

  /**
   * Gets the name of the active session for the given site.
   * @param {{ site: string }} args - Object containing the site.
   * @returns {Promise<any>} A promise resolving with the active session name.
   */
  activeSession = ({ site }) =>
    this.api.request('/httpSessions/view/activeSession', { site });

  /**
   * Gets the session tokens for the given site.
   * @param {{ site: string }} args - Object containing the site.
   * @returns {Promise<any>} A promise resolving with the session tokens.
   */
  sessionTokens = ({ site }) =>
    this.api.request('/httpSessions/view/sessionTokens', { site });

  /**
   * Gets the default session tokens.
   * @returns {Promise<any>} A promise resolving with the default session tokens.
   */
  defaultSessionTokens = () =>
    this.api.request('/httpSessions/view/defaultSessionTokens');

  /**
   * Creates an empty session for the given site, optionally with a specified name.
   * @param {{ site: string, session?: string }} args - Object containing the site and optional session name.
   * @returns {Promise<any>} A promise resolving when the session is created.
   */
  createEmptySession = ({ site, session }) => {
    const params = { site };
    if (session) params.session = session;
    return this.api.request('/httpSessions/action/createEmptySession', params);
  };

  /**
   * Removes the session for the given site.
   * @param {{ site: string, session: string }} args - Object containing the site and session.
   * @returns {Promise<any>} A promise resolving when the session is removed.
   */
  removeSession = ({ site, session }) =>
    this.api.request('/httpSessions/action/removeSession', { site, session });

  /**
   * Sets the given session as active for the given site.
   * @param {{ site: string, session: string }} args - Object containing the site and session.
   * @returns {Promise<any>} A promise resolving when the active session is set.
   */
  setActiveSession = ({ site, session }) =>
    this.api.request('/httpSessions/action/setActiveSession', { site, session });

  /**
   * Unsets the active session for the given site.
   * @param {{ site: string }} args - Object containing the site.
   * @returns {Promise<any>} A promise resolving when the active session is unset.
   */
  unsetActiveSession = ({ site }) =>
    this.api.request('/httpSessions/action/unsetActiveSession', { site });

  /**
   * Adds a session token to the given site.
   * @param {{ site: string, sessiontoken: string }} args - Object containing the site and session token.
   * @returns {Promise<any>} A promise resolving when the session token is added.
   */
  addSessionToken = ({ site, sessiontoken }) =>
    this.api.request('/httpSessions/action/addSessionToken', { site, sessionToken: sessiontoken });

  /**
   * Removes the session token from the given site.
   * @param {{ site: string, sessiontoken: string }} args - Object containing the site and session token.
   * @returns {Promise<any>} A promise resolving when the session token is removed.
   */
  removeSessionToken = ({ site, sessiontoken }) =>
    this.api.request('/httpSessions/action/removeSessionToken', { site, sessionToken: sessiontoken });

  /**
   * Sets the value of the session token for the given session and site.
   * @param {{ site: string, session: string, sessiontoken: string, tokenvalue: string }} args - Object containing the site, session, session token, and token value.
   * @returns {Promise<any>} A promise resolving when the token value is set.
   */
  setSessionTokenValue = ({ site, session, sessiontoken, tokenvalue }) =>
    this.api.request('/httpSessions/action/setSessionTokenValue', { site, session, sessionToken: sessiontoken, tokenValue: tokenvalue });

  /**
   * Renames the session for the given site.
   * @param {{ site: string, oldsessionname: string, newsessionname: string }} args - Object containing the site, old session name, and new session name.
   * @returns {Promise<any>} A promise resolving when the session is renamed.
   */
  renameSession = ({ site, oldsessionname, newsessionname }) =>
    this.api.request('/httpSessions/action/renameSession', { site, oldSessionName: oldsessionname, newSessionName: newsessionname });

  /**
   * Adds a default session token with the given name and optional enabled state.
   * @param {{ sessiontoken: string, tokenenabled?: string }} args - Object containing the session token and optional enabled flag.
   * @returns {Promise<any>} A promise resolving when the default session token is added.
   */
  addDefaultSessionToken = ({ sessiontoken, tokenenabled }) => {
    const params = { sessionToken: sessiontoken };
    if (tokenenabled) params.tokenEnabled = tokenenabled;
    return this.api.request('/httpSessions/action/addDefaultSessionToken', params);
  };

  /**
   * Sets whether the default session token is enabled.
   * @param {{ sessiontoken: string, tokenenabled: string }} args - Object containing the session token and enabled flag.
   * @returns {Promise<any>} A promise resolving when the default session token enabled state is updated.
   */
  setDefaultSessionTokenEnabled = ({ sessiontoken, tokenenabled }) =>
    this.api.request('/httpSessions/action/setDefaultSessionTokenEnabled', { sessionToken: sessiontoken, tokenEnabled: tokenenabled });

  /**
   * Removes the default session token with the given name.
   * @param {{ sessiontoken: string }} args - Object containing the session token.
   * @returns {Promise<any>} A promise resolving when the default session token is removed.
   */
  removeDefaultSessionToken = ({ sessiontoken }) =>
    this.api.request('/httpSessions/action/removeDefaultSessionToken', { sessionToken: sessiontoken });
}

module.exports = HttpSessions;
