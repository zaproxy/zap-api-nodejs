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

class Openapi {
  /**
   * @param {object} clientApi - The client API instance.
   */
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Imports an OpenAPI definition from a local file.
   * This component is optional and will only work if it is installed.
   *
   * @param {{ file: string, target?: string, contextId?: string, userId?: string }} args - Object containing:
   *   - file: The file that contains the OpenAPI definition.
   *   - target: (Optional) The target URL to override the server URL in the definition.
   *   - contextId: (Optional) The context ID.
   *   - userId: (Optional) The user ID.
   * @returns {Promise<any>} A promise resolving with the import result.
   */
  importFile = ({ file, target, contextId, userId }) => {
    return this.api.request('/openapi/action/importFile', { file, target, contextId, userId });
  };

  /**
   * Imports an OpenAPI definition from a URL.
   * This component is optional and will only work if it is installed.
   *
   * @param {{ url: string, hostOverride?: string, contextId?: string, userId?: string }} args - Object containing:
   *   - url: The URL locating the OpenAPI definition.
   *   - hostOverride: (Optional) The target URL to override the server URL in the definition.
   *   - contextId: (Optional) The context ID.
   *   - userId: (Optional) The user ID.
   * @returns {Promise<any>} A promise resolving with the import result.
   */
  importUrl = ({ url, hostOverride, contextId, userId }) => {
    return this.api.request('/openapi/action/importUrl', { url, hostOverride, contextId, userId });
  };
}

module.exports = Openapi;

