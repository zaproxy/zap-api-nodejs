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

class Alert {
  /**
   * @param {object} clientApi - The client API instance.
   */
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets the alert with the given ID.
   * @param {{ id: string }} args
   * @returns {Promise}
   */
  alert = ({ id }) => this.api.request('/alert/view/alert', { id });

  /**
   * Retrieves alerts, optionally filtered by URL or risk ID, with pagination.
   * @param {{ baseurl?: string, start?: string, count?: string, riskId?: 0|1|2|3 }} [args={}]
   * @returns {Promise}
   */
  getAlerts = ({ baseurl, start, count, riskId } = {}) =>
    this.api.request('/alert/view/alerts', { baseurl, start, count, riskId });

  /**
   * Retrieves a summary of alerts, optionally filtered by URL.
   * @param {{ baseurl?: string }} [args={}]
   * @returns {Promise}
   */
  alertsSummary = ({ baseurl } = {}) =>
    this.api.request('/alert/view/alertsSummary', { baseurl });

  /**
   * Retrieves the number of alerts, optionally filtered by URL or risk ID.
   * @param {{ baseurl?: string, riskId?: 0|1|2|3 }} args
   * @returns {Promise}
   */
  numberOfAlerts = ({ baseurl, riskId }) =>
    this.api.request('/alert/view/numberOfAlerts', { baseurl, riskId });

  /**
   * Retrieves a detailed summary of alerts, optionally filtered by URL.
   * @param {{ url?: string, recurse?: boolean }} args
   * @returns {Promise}
   */
  alertsByRisk = ({ url, recurse }) =>
    this.api.request('/alert/view/alertsByRisk', { url, recurse });

  /**
   * Retrieves a count of alerts, similar to alertsPerRisk, optionally filtered.
   * @param {{ url?: string, recurse?: boolean }} args
   * @returns {Promise}
   */
  alertCountsByRisk = ({ url, recurse }) =>
    this.api.request('/alert/view/alertCountsByRisk', { url, recurse });

  /**
   * Deletes all alerts of the current session.
   * @returns {Promise}
   */
  deleteAllAlerts = () =>
    this.api.request('/alert/action/deleteAllAlerts');

  /**
   * Deletes an alert by a given ID.
   * @param {{ id: string }} args
   * @returns {Promise}
   */
  deleteAlert = ({ id }) =>
    this.api.request('/alert/action/deleteAlert', { id });

  /**
   * Updates the confidence of specified alerts.
   * @param {{ ids?: string, confidenceId?: 1|2|3|4 }} args
   * @returns {Promise}
   */
  updateAlertsConfidence = ({ ids, confidenceId }) =>
    this.api.request('/alert/action/updateAlertsConfidence', { ids, confidenceId: `${confidenceId}` });

  /**
   * Updates the risk of specified alerts.
   * @param {{ ids?: string, riskId?: 0|1|2|3 }} args
   * @returns {Promise}
   */
  updateAlertsRisk = ({ ids, riskId }) =>
    this.api.request('/alert/action/updateAlertsRisk', { ids, riskId: `${riskId}` });

  /**
   * Updates an alert with the given details.
   * @param {{
   *   id?: string,
   *   name?: string,
   *   riskId?: 0|1|2|3,
   *   confidenceId?: 1|2|3|4,
   *   description: string,
   *   param?: string,
   *   attack?: string,
   *   otherInfo?: string,
   *   solution?: string,
   *   references?: string,
   *   evidence?: string,
   *   cweId?: string,
   *   wascId?: string
   * }} args
   * @returns {Promise}
   */
  updateAlert = ({
                   id,
                   name,
                   riskId,
                   confidenceId,
                   description,
                   param,
                   attack,
                   otherInfo,
                   solution,
                   references,
                   evidence,
                   cweId,
                   wascId,
                 }) =>
    this.api.request('/alert/action/updateAlert', {
      id,
      name,
      riskId,
      confidenceId,
      description,
      param,
      attack,
      otherInfo,
      solution,
      references,
      evidence,
      cweId,
      wascId,
    });

  /**
   * Adds an alert associated with a given message ID, with detailed parameters.
   * Only provided parameters are included in the request.
   * @param {{
   *   messageId: string,
   *   name: string,
   *   riskId: 0|1|2|3,
   *   confidenceId: 1|2|3|4,
   *   description: string,
   *   param?: string,
   *   attack?: string,
   *   otherInfo?: string,
   *   solution?: string,
   *   references?: string,
   *   evidence?: string,
   *   cweId?: string,
   *   wascId?: string
   * }} args
   * @returns {Promise}
   */
  addAlert = ({
                messageId,
                name,
                riskId,
                confidenceId,
                description,
                param,
                attack,
                otherInfo,
                solution,
                references,
                evidence,
                cweId,
                wascId,
              }) =>
    this.api.request('/alert/action/addAlert', {
      messageId,
      name,
      riskId,
      confidenceId,
      description,
      param,
      attack,
      otherInfo,
      solution,
      references,
      evidence,
      cweId,
      wascId,
    });
}

module.exports = Alert;
