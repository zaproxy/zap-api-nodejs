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
 * This file was automatically generated.
 */
function Pscan(clientApi) {
  this.api = clientApi;
}

/**
 * Tells whether or not the passive scan should be performed only on messages that are in scope.
 **/
Pscan.prototype.scanOnlyInScope = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/view/scanOnlyInScope/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/view/scanOnlyInScope/');
};

/**
 * The number of records the passive scanner still has to scan
 **/
Pscan.prototype.recordsToScan = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/view/recordsToScan/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/view/recordsToScan/');
};

/**
 * Lists all passive scan rules with their ID, name, enabled state, and alert threshold.
 **/
Pscan.prototype.scanners = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/view/scanners/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/view/scanners/');
};

/**
 * Show information about the passive scan rule currently being run (if any).
 **/
Pscan.prototype.currentRule = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/view/currentRule/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/view/currentRule/');
};

/**
 * Show information about the passive scan tasks currently being run (if any).
 **/
Pscan.prototype.currentTasks = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/view/currentTasks/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/view/currentTasks/');
};

/**
 * Gets the maximum number of alerts a passive scan rule should raise.
 **/
Pscan.prototype.maxAlertsPerRule = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/view/maxAlertsPerRule/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/view/maxAlertsPerRule/');
};

/**
 * Sets whether or not the passive scanning is enabled (Note: the enabled state is not persisted).
 * @param {string} enabled
 **/
Pscan.prototype.setEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/setEnabled/', {'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/setEnabled/', {'enabled': args.enabled});
};

/**
 * Sets whether or not the passive scan should be performed only on messages that are in scope.
 * @param {string} onlyinscope
 **/
Pscan.prototype.setScanOnlyInScope = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/setScanOnlyInScope/', {'onlyInScope': args.onlyinscope}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/setScanOnlyInScope/', {'onlyInScope': args.onlyinscope});
};

/**
 * Enables all passive scan rules
 **/
Pscan.prototype.enableAllScanners = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/enableAllScanners/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/enableAllScanners/');
};

/**
 * Disables all passive scan rules
 **/
Pscan.prototype.disableAllScanners = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/disableAllScanners/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/disableAllScanners/');
};

/**
 * Enables all passive scan rules with the given IDs (comma separated list of IDs)
 * @param {string} ids
 **/
Pscan.prototype.enableScanners = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/enableScanners/', {'ids': args.ids}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/enableScanners/', {'ids': args.ids});
};

/**
 * Disables all passive scan rules with the given IDs (comma separated list of IDs)
 * @param {string} ids
 **/
Pscan.prototype.disableScanners = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/disableScanners/', {'ids': args.ids}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/disableScanners/', {'ids': args.ids});
};

/**
 * Sets the alert threshold of the passive scanner with the given ID, accepted values for alert threshold: OFF, DEFAULT, LOW, MEDIUM and HIGH
 * @param {string} id
 * @param {string} alertthreshold
 **/
Pscan.prototype.setScannerAlertThreshold = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/setScannerAlertThreshold/', {'id': args.id, 'alertThreshold': args.alertthreshold}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/setScannerAlertThreshold/', {'id': args.id, 'alertThreshold': args.alertthreshold});
};

/**
 * Sets the maximum number of alerts a passive scan rule should raise.
 * @param {string} maxalerts
 **/
Pscan.prototype.setMaxAlertsPerRule = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/setMaxAlertsPerRule/', {'maxAlerts': args.maxalerts}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/setMaxAlertsPerRule/', {'maxAlerts': args.maxalerts});
};

/**
 * Disables all passive scan tags.
 **/
Pscan.prototype.disableAllTags = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/disableAllTags/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/disableAllTags/');
};

/**
 * Enables all passive scan tags.
 **/
Pscan.prototype.enableAllTags = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/enableAllTags/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/enableAllTags/');
};

/**
 * Clears the passive scan queue.
 **/
Pscan.prototype.clearQueue = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/clearQueue/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/clearQueue/');
};

module.exports = Pscan;
