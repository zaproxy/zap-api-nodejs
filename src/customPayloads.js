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

class CustomPayloads {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Lists all available categories.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with available categories.
   */
  customPayloadsCategories = () =>
    this.api.request('/custompayloads/view/customPayloadsCategories/');

  /**
   * Lists all the payloads currently loaded (category, payload, enabled state).
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ category?: string }} [args={}] - Object containing:
   *   - category: (Optional) The category for which the payloads should be displayed.
   * @returns {Promise<any>} A promise resolving with the loaded payloads.
   */
  customPayloads = ({ category } = {}) =>
    this.api.request('/custompayloads/view/customPayloads/', { category });


  /**
   * Disables payloads for a given category.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ category?: string }} [args={}] - Object containing:
   *   - category: (Optional) The category for which the payloads should be disabled (leave empty for all).
   * @returns {Promise<any>} A promise resolving when payloads are disabled.
   */
  disableCustomPayloads = ({ category } = {}) =>
    this.api.request('/custompayloads/action/disableCustomPayloads/', { category });


  /**
   * Enables payloads for a given category.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ category?: string }} [args={}] - Object containing:
   *   - category: (Optional) The category for which the payloads should be enabled (leave empty for all).
   * @returns {Promise<any>} A promise resolving when payloads are enabled.
   */
  enableCustomPayloads = ({ category } = {}) =>
    this.api.request('/custompayloads/action/enableCustomPayloads/', { category });

  /**
   * Removes a payload.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ category: string, payload?: string }} args - Object containing:
   *   - category: The category of the payload being removed.
   *   - payload: (Optional) The payload being removed.
   * @returns {Promise<any>} A promise resolving when the payload is removed.
   */
  removeCustomPayload = ({ category, payload }) =>
    this.api.request('/custompayloads/action/removeCustomPayload/', { category, payload });

  /**
   * Adds a new payload.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ category: string, payload?: string }} args - Object containing:
   *   - category: The category for the new payload.
   *   - payload: (Optional) The payload to be added.
   * @returns {Promise<any>} A promise resolving when the payload is added.
   */
  addCustomPayload = ({ category, payload }) =>
    this.api.request('/custompayloads/action/addCustomPayload/', { category, payload });

  /**
   * Enables a given payload.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ category: string, payload?: string }} args - Object containing:
   *   - category: The category for the payload being enabled.
   *   - payload: (Optional) The payload being enabled.
   * @returns {Promise<any>} A promise resolving when the payload is enabled.
   */
  enableCustomPayload = ({ category, payload }) =>
    this.api.request('/custompayloads/action/enableCustomPayload/', { category, payload });

  /**
   * Disables a given payload.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ category: string, payload?: string }} args - Object containing:
   *   - category: The category for the payload being disabled.
   *   - payload: (Optional) The payload being disabled.
   * @returns {Promise<any>} A promise resolving when the payload is disabled.
   */
  disableCustomPayload = ({ category, payload }) =>
    this.api.request('/custompayloads/action/disableCustomPayload/', { category, payload });

}

module.exports = CustomPayloads;
