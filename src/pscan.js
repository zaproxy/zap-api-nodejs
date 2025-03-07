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
 * Class representing the Passive Scan (Pscan) API for ZAProxy.
 */
class Pscan {
  /**
   * @param {object} clientApi - The client API instance.
   */
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Tells whether the passive scan should be performed only on messages that are in scope.
   * @returns {Promise<any>} A promise resolving with the scan-only-in-scope status.
   */
  scanOnlyInScope() {
    return this.api.request('/pscan/view/scanOnlyInScope');
  }

  /**
   * Gets the number of records the passive scanner still has to scan.
   * @returns {Promise<any>} A promise resolving with the record count.
   */
  recordsToScan() {
    return this.api.request('/pscan/view/recordsToScan');
  }

  /**
   * Lists all passive scan rules with their ID, name, enabled state, and alert threshold.
   * @returns {Promise<any>} A promise resolving with the list of scanners.
   */
  scanners() {
    return this.api.request('/pscan/view/scanners');
  }

  /**
   * Shows information about the passive scan rule currently being run (if any).
   * @returns {Promise<any>} A promise resolving with the current rule details.
   */
  currentRule() {
    return this.api.request('/pscan/view/currentRule');
  }

  /**
   * Shows information about the passive scan tasks currently being run (if any).
   * @returns {Promise<any>} A promise resolving with the current tasks.
   */
  currentTasks() {
    return this.api.request('/pscan/view/currentTasks');
  }

  /**
   * Gets the maximum number of alerts a passive scan rule should raise.
   * @returns {Promise<any>} A promise resolving with the maximum alerts per rule.
   */
  maxAlertsPerRule() {
    return this.api.request('/pscan/view/maxAlertsPerRule');
  }

  /**
   * Sets whether the passive scanning is enabled.
   * @param {{ enabled: string }} args - Object containing the enabled flag.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setEnabled({ enabled }) {
    return this.api.request('/pscan/action/setEnabled', { enabled });
  }

  /**
   * Sets whether the passive scan should be performed only on messages that are in scope.
   * @param {{ onlyInScope: string }} args - Object containing the onlyInScope flag.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setScanOnlyInScope({ onlyInScope }) {
    return this.api.request('/pscan/action/setScanOnlyInScope', { onlyInScope });
  }

  /**
   * Enables all passive scan rules.
   * @returns {Promise<any>} A promise resolving when all scanners are enabled.
   */
  enableAllScanners() {
    return this.api.request('/pscan/action/enableAllScanners');
  }

  /**
   * Disables all passive scan rules.
   * @returns {Promise<any>} A promise resolving when all scanners are disabled.
   */
  disableAllScanners() {
    return this.api.request('/pscan/action/disableAllScanners');
  }

  /**
   * Enables passive scan rules with the given IDs (comma-separated list).
   * @param {{ ids: string }} args - Object containing the comma-separated IDs.
   * @returns {Promise<any>} A promise resolving when the scanners are enabled.
   */
  enableScanners({ ids }) {
    return this.api.request('/pscan/action/enableScanners', { ids });
  }

  /**
   * Disables passive scan rules with the given IDs (comma-separated list).
   * @param {{ ids: string }} args - Object containing the comma-separated IDs.
   * @returns {Promise<any>} A promise resolving when the scanners are disabled.
   */
  disableScanners({ ids }) {
    return this.api.request('/pscan/action/disableScanners', { ids });
  }

  /**
   * Sets the alert threshold of the passive scanner with the given ID.
   * Accepted values: OFF, DEFAULT, LOW, MEDIUM, HIGH.
   * @param {{ id: string, alertThreshold: string }} args - Object containing the scanner ID and alert threshold.
   * @returns {Promise<any>} A promise resolving when the threshold is set.
   */
  setScannerAlertThreshold({ id, alertThreshold }) {
    return this.api.request('/pscan/action/setScannerAlertThreshold', { id, alertThreshold });
  }

  /**
   * Sets the maximum number of alerts a passive scan rule should raise.
   * @param {{ maxAlerts: string }} args - Object containing the maximum alerts.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setMaxAlertsPerRule({ maxAlerts }) {
    return this.api.request('/pscan/action/setMaxAlertsPerRule', { maxAlerts });
  }

  /**
   * Disables all passive scan tags.
   * @returns {Promise<any>} A promise resolving when all tags are disabled.
   */
  disableAllTags() {
    return this.api.request('/pscan/action/disableAllTags');
  }

  /**
   * Enables all passive scan tags.
   * @returns {Promise<any>} A promise resolving when all tags are enabled.
   */
  enableAllTags() {
    return this.api.request('/pscan/action/enableAllTags');
  }

  /**
   * Clears the passive scan queue.
   * @returns {Promise<any>} A promise resolving when the queue is cleared.
   */
  clearQueue() {
    return this.api.request('/pscan/action/clearQueue');
  }
}

module.exports = Pscan;
