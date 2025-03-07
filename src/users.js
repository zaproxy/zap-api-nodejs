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

class Users {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets a list of users that belong to the context with the given ID, or all users if none provided.
   *
   * @param {{ contextId?: string }} [args={}] - Object containing:
   *   - contextId: (Optional) The Context ID.
   * @returns {Promise<any>} A promise resolving with the users list.
   */
  usersList = ({ contextId } = {}) => {
    const params = {};
    if (contextId) params.contextId = contextId;
    return this.api.request('/users/view/usersList', params);
  };

  /**
   * Gets the data of the user with the given ID that belongs to the context with the given ID.
   *
   * @param {{ contextId: string, userId: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   * @returns {Promise<any>} A promise resolving with the user data.
   */
  getUserById = ({ contextId, userId }) =>
    this.api.request('/users/view/getUserById', { contextId, userId: userId });

  /**
   * Gets the configuration parameters for the credentials of the context with the given ID.
   *
   * @param {{ contextId: string }} args - Object containing:
   *   - contextId: The Context ID.
   * @returns {Promise<any>} A promise resolving with the authentication credentials config parameters.
   */
  getAuthenticationCredentialsConfigParams = ({ contextId }) =>
    this.api.request('/users/view/getAuthenticationCredentialsConfigParams', { contextId });

  /**
   * Gets the authentication credentials of the user with given ID that belongs to the context with the given ID.
   *
   * @param {{ contextId: string, userId: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   * @returns {Promise<any>} A promise resolving with the authentication credentials.
   */
  getAuthenticationCredentials = ({ contextId, userId }) =>
    this.api.request('/users/view/getAuthenticationCredentials', { contextId, userId: userId });

  /**
   * Gets the authentication state information for the user identified by the Context and User IDs.
   *
   * @param {{ contextId: string, userId: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   * @returns {Promise<any>} A promise resolving with the authentication state.
   */
  getAuthenticationState = ({ contextId, userId }) =>
    this.api.request('/users/view/getAuthenticationState', { contextId, userId: userId });

  /**
   * Gets the authentication session information for the user identified by the Context and User IDs.
   *
   * @param {{ contextId: string, userId: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   * @returns {Promise<any>} A promise resolving with the authentication session.
   */
  getAuthenticationSession = ({ contextId, userId }) =>
    this.api.request('/users/view/getAuthenticationSession', { contextId, userId: userId });

  /**
   * Creates a new user with the given name for the context with the given ID.
   *
   * @param {{ contextId: string, name: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - name: The user name.
   * @returns {Promise<any>} A promise resolving with the new user.
   */
  newUser = ({ contextId, name }) =>
    this.api.request('/users/action/newUser', { contextId, name });

  /**
   * Removes the user with the given ID that belongs to the context with the given ID.
   *
   * @param {{ contextId: string, userId: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   * @returns {Promise<any>} A promise resolving when the user is removed.
   */
  removeUser = ({ contextId, userId }) =>
    this.api.request('/users/action/removeUser', { contextId, userId: userId });

  /**
   * Sets whether the user, with the given ID that belongs to the context with the given ID, should be enabled.
   *
   * @param {{ contextId: string, userId: string, enabled: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   *   - enabled: Whether the user should be enabled.
   * @returns {Promise<any>} A promise resolving when the user is enabled/disabled.
   */
  setUserEnabled = ({ contextId, userId, enabled }) =>
    this.api.request('/users/action/setUserEnabled', { contextId, userId, enabled });

  /**
   * Renames the user with the given ID that belongs to the context with the given ID.
   *
   * @param {{ contextId: string, userId: string, name: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   *   - name: The new username.
   * @returns {Promise<any>} A promise resolving when the user is renamed.
   */
  setUserName = ({ contextId, userId, name }) =>
    this.api.request('/users/action/setUserName', { contextId, userId, name });

  /**
   * Sets the authentication credentials for the user with the given ID that belongs to the context with the given ID.
   *
   * @param {{ contextId: string, userId: string, authCredentialsConfigParams?: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   *   - authCredentialsConfigParams: (Optional) The authentication credentials config parameters.
   * @returns {Promise<any>} A promise resolving when the credentials are set.
   */
  setAuthenticationCredentials = ({ contextId, userId, authCredentialsConfigParams }) =>
    this.api.request('/users/action/setAuthenticationCredentials', { contextId, userId, authCredentialsConfigParams });


  /**
   * Tries to authenticate as the identified user.
   *
   * @param {{ contextId: string, userId: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   * @returns {Promise<any>} A promise resolving with the authentication results.
   */
  authenticateAsUser = ({ contextId, userId }) =>
    this.api.request('/users/action/authenticateAsUser', { contextId, userId: userId });

  /**
   * Tries to poll as the identified user.
   *
   * @param {{ contextId: string, userId: string }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   * @returns {Promise<any>} A promise resolving with the polling results.
   */
  pollAsUser = ({ contextId, userId }) =>
    this.api.request('/users/action/pollAsUser', { contextId, userId: userId });

  /**
   * Sets fields in the authentication state for the user identified by the Context and User IDs.
   *
   * @param {{
   *   contextId: string,
   *   userId: string,
   *   lastPollResult?: string,
   *   lastPollTimeInMs?: string,
   *   requestsSinceLastPoll?: string,
   * }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   *   - lastPollResult: (Optional) Last Poll Result ('true' or 'false').
   *   - lastPollTimeInMs: (Optional) Last Poll Time in Milliseconds (long or 'NOW').
   *   - requestsSinceLastPoll: (Optional) Requests Since Last Poll (integer).
   * @returns {Promise<any>} A promise resolving when the state is set.
   */
  setAuthenticationState = ({ contextId, userId, lastPollResult, lastPollTimeInMs, requestsSinceLastPoll }) =>
    this.api.request('/users/action/setAuthenticationState', { contextId, userId, lastPollResult, lastPollTimeInMs, requestsSinceLastPoll });


  /**
   * Sets the specified cookie for the user identified by the Context and User IDs.
   *
   * @param {{
   *   contextId: string,
   *   userId: string,
   *   domain: string,
   *   name: string,
   *   value: string,
   *   path?: string,
   *   secure?: string,
   * }} args - Object containing:
   *   - contextId: The Context ID.
   *   - userId: The User ID.
   *   - domain: The Cookie Domain.
   *   - name: The Cookie Name.
   *   - value: The Cookie Value.
   *   - path: (Optional) The Cookie Path.
   *   - secure: (Optional) If the Cookie is secure.
   * @returns {Promise<any>} A promise resolving when the cookie is set.
   */
  setCookie = ({ contextId, userId, domain, name, value, path, secure }) =>
    this.api.request('/users/action/setCookie', { contextId, userId, domain, name, value, path, secure });

}

module.exports = Users;
