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

'use strict'

/**
 * This file was automatically generated.
 */
function RuleConfig (clientApi) {
  this.api = clientApi
}

/**
 * Show the specified rule configuration
 * @param {string} key
 **/
RuleConfig.prototype.ruleConfigValue = function (args) {
  return this.api.request('/ruleConfig/view/ruleConfigValue/', { key: args.key })
}

/**
 * Show all of the rule configurations
 **/
RuleConfig.prototype.allRuleConfigs = function () {
  return this.api.request('/ruleConfig/view/allRuleConfigs/')
}

/**
 * Reset the specified rule configuration, which must already exist
 * @param {string} key
 **/
RuleConfig.prototype.resetRuleConfigValue = function (args) {
  return this.api.request('/ruleConfig/action/resetRuleConfigValue/', { key: args.key })
}

/**
 * Reset all of the rule configurations
 **/
RuleConfig.prototype.resetAllRuleConfigValues = function () {
  return this.api.request('/ruleConfig/action/resetAllRuleConfigValues/')
}

/**
 * Set the specified rule configuration, which must already exist
 * @param {string} key
 * @param {string} value
 **/
RuleConfig.prototype.setRuleConfigValue = function (args) {
  const params = { key: args.key }
  if (args.value && args.value !== null) {
    params.value = args.value
  }
  return this.api.request('/ruleConfig/action/setRuleConfigValue/', params)
}

module.exports = RuleConfig
