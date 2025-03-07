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

class ForcedUser {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Returns 'true' if 'forced user' mode is enabled, 'false' otherwise.
   * @returns {Promise<any>} A promise that resolves with the forced user mode status.
   */
  isForcedUserModeEnabled = () =>
    this.api.request('/forcedUser/view/isForcedUserModeEnabled');

  /**
   * Gets the user (ID) set as the forced user for the specified context.
   * @param {{ contextId: string }} args - Object containing the context ID.
   * @returns {Promise<any>} A promise that resolves with the forced user ID.
   */
  getForcedUser = ({ contextId }) =>
    this.api.request('/forcedUser/view/getForcedUser', { contextId });

  /**
   * Sets the user (ID) to be used as the forced user for the specified context.
   * @param {{ contextId: string, userId: string }} args - Object containing the context ID and user ID.
   * @returns {Promise<any>} A promise that resolves when the forced user is set.
   */
  setForcedUser = ({ contextId, userId }) =>
    this.api.request('/forcedUser/action/setForcedUser', { contextId, userId });

  /**
   * Enables or disables forced user mode.
   * @param {{ isSet: string }} args - Object containing a string value that represents the boolean state.
   * @returns {Promise<any>} A promise that resolves when the forced user mode is updated.
   */
  setForcedUserModeEnabled = ({ isSet }) =>
    this.api.request('/forcedUser/action/setForcedUserModeEnabled', { boolean: `${isSet}` });
}

module.exports = ForcedUser;
