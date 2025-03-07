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

class Replacer {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Returns full details of all the rules.
   * This component is optional and will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the rules.
   */
  rules = () =>
    this.api.request('/replacer/view/rules');

  /**
   * Adds a replacer rule.
   * This component is optional and will only work if it is installed.
   *
   * @param {{
   *   description: string,
   *   enabled: string,
   *   matchType: string,
   *   matchRegex: string,
   *   matchString: string,
   *   replacement?: string,
   *   initiators?: string,
   *   url?: string,
   * }} args - Object containing:
   *   - description: A user-friendly description.
   *   - enabled: 'true' or 'false' indicating whether the rule is enabled.
   *   - matchType: One of [REQ_HEADER, REQ_HEADER_STR, REQ_BODY_STR, RESP_HEADER, RESP_HEADER_STR, RESP_BODY_STR].
   *   - matchRegex: 'true' if the matchString should be treated as a regex, otherwise 'false'.
   *   - matchString: The string to be matched.
   *   - replacement: (Optional) The replacement string.
   *   - initiators: (Optional) A comma-separated list of initiator IDs.
   *   - url: (Optional) A regex to match the URL of the message.
   * @returns {Promise<any>} A promise resolving with the result.
   */
  addRule = ({ description, enabled, matchType, matchRegex, matchString, replacement, initiators, url }) =>
    this.api.request('/replacer/action/addRule', { description, enabled, matchType, matchRegex, matchString, replacement, initiators, url });

  /**
   * Removes the rule with the given description.
   * This component is optional and will only work if it is installed.
   *
   * @param {{ description: string }} args - Object containing:
   *   - description: The rule description.
   * @returns {Promise<any>} A promise resolving with the result.
   */
  removeRule = ({ description }) =>
    this.api.request('/replacer/action/removeRule', { description });

  /**
   * Enables or disables the rule with the given description.
   * This component is optional and will only work if it is installed.
   *
   * @param {{ description: string, bool: string }} args - Object containing:
   *   - description: The rule description.
   *   - bool: "true" or "false" indicating if the rule should be enabled.
   * @returns {Promise<any>} A promise resolving with the result.
   */
  setEnabled = ({ description, bool }) =>
    this.api.request('/replacer/action/setEnabled', { description, bool });
}

module.exports = Replacer;
