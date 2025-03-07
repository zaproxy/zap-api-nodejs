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
/**
 * Class representing the Authorization API for ZAP Proxy.
 * Provides methods to get and set the authorization detection method for a context.
 *
 * @param {object} clientApi - The client API instance for making HTTP requests.
 */
class Authorization {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Obtains all the configuration of the authorization detection method for a given context.
   *
   * @param {{ contextId: string }} args - Object containing the context ID.
   * @returns {Promise} - A promise that resolves with the configuration details.
   */
  getAuthorizationDetectionMethod = ({ contextId }) =>
    this.api.request('/authorization/view/getAuthorizationDetectionMethod', { contextId });

  /**
   * Sets the basic authorization detection method for a context.
   * This method configures detection based on the response's header, body regex patterns,
   * status code, and logical operator ("AND" or "OR") to determine unauthorized messages.
   *
   * @param {{
   *   contextId: string,
   *   headerRegex: string,
   *   bodyRegex: string,
   *   statusCode: string,
   *   logicalOperator: string
   * }} args - Object containing the configuration parameters.
   * @returns {Promise} - A promise that resolves when the method is set.
   */
  setBasicAuthorizationDetectionMethod = ({ contextId, headerRegex, bodyRegex, statusCode, logicalOperator }) =>
    this.api.request('/authorization/action/setBasicAuthorizationDetectionMethod', { contextId, headerRegex, bodyRegex, statusCode, logicalOperator });
}

module.exports = Authorization;
