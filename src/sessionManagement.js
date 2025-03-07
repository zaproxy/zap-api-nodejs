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

class SessionManagement {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets the names of the supported session management methods.
   * @returns {Promise<object>} A promise resolving to the session management methods.
   */
  getSupportedSessionManagementMethods = () =>
    this.api.request('/sessionManagement/view/getSupportedSessionManagementMethods');

  /**
   * Gets the configuration parameters for the specified session management method.
   * @param {{ methodName: string }} args - Object containing:
   *   - methodName: The name of the session management method.
   * @returns {Promise<object>} A promise resolving to the configuration parameters of the method.
   */
  getSessionManagementMethodConfigParams = ({ methodName }) =>
    this.api.request('/sessionManagement/view/getSessionManagementMethodConfigParams', { methodName });

  /**
   * Gets the session management method configured for a specific context.
   * @param {{ contextId: string }} args - Object containing:
   *   - contextId: The ID of the context.
   * @returns {Promise<object>} A promise resolving to the session management method for the context.
   */
  getSessionManagementMethod = ({ contextId }) =>
    this.api.request('/sessionManagement/view/getSessionManagementMethod', { contextId });

  /**
   * Sets the session management method for a specified context.
   * @param {{ contextId: string, methodName: string, methodConfigParams: string }} args - Object containing:
   *   - contextId: The ID of the context.
   *   - methodName: The name of the session management method to set.
   *   - methodConfigParams: A JSON string containing the configuration parameters for the method.
   * @returns {Promise<object>} A promise resolving to the result of the operation.
   */
  setSessionManagementMethod = ({ contextId, methodName, methodConfigParams }) =>
    this.api.request('/sessionManagement/action/setSessionManagementMethod', {
      contextId,
      methodName,
      methodConfigParams,
    });
}

module.exports = SessionManagement;
