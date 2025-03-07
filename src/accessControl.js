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

class AccessControl {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets the Access Control scan progress (percentage integer) for the given context ID.
   * @param {{ contextId: string }} args
   * @returns {Promise}
   */
  getScanProgress = ({ contextId }) =>
    this.api.request('/accessControl/view/getScanProgress', { contextId });

  /**
   * Gets the Access Control scan status (description string) for the given context ID.
   * @param {{ contextId: string }} args
   * @returns {Promise}
   */
  getScanStatus = ({ contextId }) =>
    this.api.request('/accessControl/view/getScanStatus', { contextId });

  /**
   * Starts an Access Control scan with the given context ID and user ID.
   * @param {{
   *   contextId: string,
   *   userId: string,
   *   scanAsUnAuthUser: string,
   *   raiseAlert: string,
   *   alertRiskLevel: string,
   * }} args
   * @returns {Promise}
   */
  scan = ({ contextId, userId, scanAsUnAuthUser, raiseAlert, alertRiskLevel }) =>
    this.api.request('/accessControl/action/scan', { contextId, userId, scanAsUnAuthUser, raiseAlert, alertRiskLevel });

  /**
   * Generates an Access Control report for the given context ID and saves it based on the provided filename.
   * @param {{ contextId: string, fileName: string }} args
   * @returns {Promise}
   */
  writeHTMLreport = ({ contextId, fileName }) =>
    this.api.request('/accessControl/action/writeHTMLreport', { contextId, fileName });
}

module.exports = AccessControl;
