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

/**
 * Class representing the RuleConfig API for ZAProxy.
 */
class RuleConfig {
  /**
   * @param {object} clientApi - The client API instance.
   */
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Shows the specified rule configuration.
   *
   * @param {{ key: string }} args - Object containing:
   *   - key: The key of the rule configuration.
   * @returns {Promise<any>} A promise resolving with the rule configuration value.
   */
  ruleConfigValue = ({ key }) =>
    this.api.request('/ruleConfig/view/ruleConfigValue', { key });

  /**
   * Shows all of the rule configurations.
   *
   * @returns {Promise<any>} A promise resolving with all rule configurations.
   */
  allRuleConfigs = () =>
    this.api.request('/ruleConfig/view/allRuleConfigs');

  /**
   * Resets the specified rule configuration.
   *
   * @param {{ key: string }} args - Object containing:
   *   - key: The key of the rule configuration to reset.
   * @returns {Promise<any>} A promise resolving when the rule configuration is reset.
   */
  resetRuleConfigValue = ({ key }) =>
    this.api.request('/ruleConfig/action/resetRuleConfigValue', { key });

  /**
   * Resets all the rule configurations.
   *
   * @returns {Promise<any>} A promise resolving when all rule configurations are reset.
   */
  resetAllRuleConfigValues = () =>
    this.api.request('/ruleConfig/action/resetAllRuleConfigValues');

  /**
   * Sets the specified rule configuration.
   *
   * @param {{ key: string, value: string }} args - Object containing:
   *   - key: The key of the rule configuration.
   *   - value: The value to set.
   * @returns {Promise<any>} A promise resolving when the rule configuration is set.
   */
  setRuleConfigValue = ({ key, value }) =>
    this.api.request('/ruleConfig/action/setRuleConfigValue', { key, value });
}

module.exports = RuleConfig;
