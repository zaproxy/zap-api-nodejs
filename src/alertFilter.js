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

class AlertFilter {
  /**
   * Manages alert filter-related API requests.
   * @param {object} clientApi - The client API object for making requests.
   */
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Lists the alert filters of the context with the given ID.
   * @param {string} contextId
   * @returns {Promise}
   */
  alertFilterList = ({ contextId }) =>
    this.api.request('/alertFilter/view/alertFilterList', { contextId });

  /**
   * Lists the global alert filters.
   * @returns {Promise}
   */
  globalAlertFilterList = () =>
    this.api.request('/alertFilter/view/globalAlertFilterList');

  /**
   * Adds a new alert filter for the context with the given ID.
   * @param {{
   *   contextId: string,
   *   ruleId: string,
   *   newLevel: string,
   *   url: string,
   *   urlIsRegex: boolean,
   *   parameter: string,
   *   enabled: boolean,
   *   parameterIsRegex: boolean,
   *   attack: string,
   *   attackIsRegex: boolean,
   *   evidence: string,
   *   evidenceIsRegex: boolean,
   * }} args
   * @returns {Promise}
   */
  addAlertFilter = ({
                      contextId,
                      ruleId,
                      newLevel,
                      url,
                      urlIsRegex,
                      parameter,
                      enabled,
                      parameterIsRegex,
                      attack,
                      attackIsRegex,
                      evidence,
                      evidenceIsRegex,
                    }) =>
    this.api.request('/alertFilter/action/addAlertFilter', {
      contextId,
      ruleId,
      newLevel,
      url,
      urlIsRegex: String(urlIsRegex),
      parameter,
      enabled: String(enabled),
      parameterIsRegex: String(parameterIsRegex),
      attack,
      attackIsRegex: String(attackIsRegex),
      evidence,
      evidenceIsRegex: String(evidenceIsRegex),
    });

  /**
   * Removes an alert filter from the context with the given ID.
   * @param {{
   *   contextId: string,
   *   ruleId: string,
   *   newLevel: string,
   *   url: string,
   *   urlIsRegex: boolean,
   *   parameter: string,
   *   enabled: boolean,
   *   parameterIsRegex: boolean,
   *   attack: string,
   *   attackIsRegex: boolean,
   *   evidence: string,
   *   evidenceIsRegex: boolean,
   * }} args
   * @returns {Promise}
   */
  removeAlertFilter = ({
                         contextId,
                         ruleId,
                         newLevel,
                         url,
                         urlIsRegex,
                         parameter,
                         enabled,
                         parameterIsRegex,
                         attack,
                         attackIsRegex,
                         evidence,
                         evidenceIsRegex,
                       }) =>
    this.api.request('/alertFilter/action/removeAlertFilter', {
      contextId,
      ruleId,
      newLevel,
      url,
      urlIsRegex: String(urlIsRegex),
      parameter,
      enabled: String(enabled),
      parameterIsRegex: String(parameterIsRegex),
      attack,
      attackIsRegex: String(attackIsRegex),
      evidence,
      evidenceIsRegex: String(evidenceIsRegex),
    });

  /**
   * Adds a new global alert filter.
   * @param {{
   *   ruleId: string,
   *   newLevel: string,
   *   url: string,
   *   urlIsRegex: boolean,
   *   parameter: string,
   *   enabled: boolean,
   *   parameterIsRegex: boolean,
   *   attack: string,
   *   attackIsRegex: boolean,
   *   evidence: string,
   *   evidenceIsRegex: boolean,
   * }} args
   * @returns {Promise}
   */
  addGlobalAlertFilter = ({
                            ruleId,
                            newLevel,
                            url,
                            urlIsRegex,
                            parameter,
                            enabled,
                            parameterIsRegex,
                            attack,
                            attackIsRegex,
                            evidence,
                            evidenceIsRegex,
                          }) =>
    this.api.request('/alertFilter/action/addGlobalAlertFilter', {
      ruleId,
      newLevel,
      url,
      urlIsRegex: String(urlIsRegex),
      parameter,
      enabled: String(enabled),
      parameterIsRegex: String(parameterIsRegex),
      attack,
      attackIsRegex: String(attackIsRegex),
      evidence,
      evidenceIsRegex: String(evidenceIsRegex),
    });

  /**
   * Removes a global alert filter.
   * @param {{
   *   ruleId: string,
   *   newLevel: string,
   *   url: string,
   *   urlIsRegex: boolean,
   *   parameter: string,
   *   enabled: boolean,
   *   parameterIsRegex: boolean,
   *   attack: string,
   *   attackIsRegex: boolean,
   *   evidence: string,
   *   evidenceIsRegex: boolean,
   * }} args
   * @returns {Promise}
   */
  removeGlobalAlertFilter = ({
                               ruleId,
                               newLevel,
                               url,
                               urlIsRegex,
                               parameter,
                               enabled,
                               parameterIsRegex,
                               attack,
                               attackIsRegex,
                               evidence,
                               evidenceIsRegex,
                             }) =>
    this.api.request('/alertFilter/action/removeGlobalAlertFilter', {
      ruleId,
      newLevel,
      url,
      urlIsRegex: String(urlIsRegex),
      parameter,
      enabled: String(enabled),
      parameterIsRegex: String(parameterIsRegex),
      attack,
      attackIsRegex: String(attackIsRegex),
      evidence,
      evidenceIsRegex: String(evidenceIsRegex),
    });

  /**
   * Applies all currently enabled Global and Context alert filters.
   * @returns {Promise}
   */
  applyAll = () =>
    this.api.request('/alertFilter/action/applyAll');

  /**
   * Applies all currently enabled Context alert filters.
   * @returns {Promise}
   */
  applyContext = () =>
    this.api.request('/alertFilter/action/applyContext');

  /**
   * Applies all currently enabled Global alert filters.
   * @returns {Promise}
   */
  applyGlobal = () =>
    this.api.request('/alertFilter/action/applyGlobal');

  /**
   * Tests all currently enabled Global and Context alert filters.
   * @returns {Promise}
   */
  testAll = () =>
    this.api.request('/alertFilter/action/testAll');

  /**
   * Tests all currently enabled Context alert filters.
   * @returns {Promise}
   */
  testContext = () =>
    this.api.request('/alertFilter/action/testContext');

  /**
   * Tests all currently enabled Global alert filters.
   * @returns {Promise}
   */
  testGlobal = () =>
    this.api.request('/alertFilter/action/testGlobal');
}

module.exports = AlertFilter;
