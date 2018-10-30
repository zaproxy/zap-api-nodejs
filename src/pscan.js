/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2018 the ZAP development team
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
 * Lists all passive scanners with its ID, name, enabled state and alert threshold.
 **/
Pscan.prototype.scanners = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/view/scanners/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/view/scanners/');
};

/**
 * Sets whether or not the passive scanning is enabled (Note: the enabled state is not persisted).
 **/
Pscan.prototype.setEnabled = function (enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/setEnabled/', {'enabled' : enabled}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/setEnabled/', {'enabled' : enabled});
};

/**
 * Sets whether or not the passive scan should be performed only on messages that are in scope.
 **/
Pscan.prototype.setScanOnlyInScope = function (onlyinscope, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/setScanOnlyInScope/', {'onlyInScope' : onlyinscope}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/setScanOnlyInScope/', {'onlyInScope' : onlyinscope});
};

/**
 * Enables all passive scanners
 **/
Pscan.prototype.enableAllScanners = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/enableAllScanners/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/enableAllScanners/');
};

/**
 * Disables all passive scanners
 **/
Pscan.prototype.disableAllScanners = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/disableAllScanners/', callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/disableAllScanners/');
};

/**
 * Enables all passive scanners with the given IDs (comma separated list of IDs)
 **/
Pscan.prototype.enableScanners = function (ids, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/enableScanners/', {'ids' : ids}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/enableScanners/', {'ids' : ids});
};

/**
 * Disables all passive scanners with the given IDs (comma separated list of IDs)
 **/
Pscan.prototype.disableScanners = function (ids, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/disableScanners/', {'ids' : ids}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/disableScanners/', {'ids' : ids});
};

/**
 * Sets the alert threshold of the passive scanner with the given ID, accepted values for alert threshold: OFF, DEFAULT, LOW, MEDIUM and HIGH
 **/
Pscan.prototype.setScannerAlertThreshold = function (id, alertthreshold, callback) {
  if (typeof callback === 'function') {
    this.api.request('/pscan/action/setScannerAlertThreshold/', {'id' : id, 'alertThreshold' : alertthreshold}, callback);
    return;
  }
  return this.api.requestPromise('/pscan/action/setScannerAlertThreshold/', {'id' : id, 'alertThreshold' : alertthreshold});
};

module.exports = Pscan;
