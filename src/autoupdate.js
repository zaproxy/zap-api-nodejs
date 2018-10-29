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
function Autoupdate(clientApi) {
  this.api = clientApi;
}

/**
 * Returns the latest version number
 **/
Autoupdate.prototype.latestVersionNumber = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/latestVersionNumber/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/latestVersionNumber/');
};

/**
 * Returns 'true' if ZAP is on the latest version
 **/
Autoupdate.prototype.isLatestVersion = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/isLatestVersion/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/isLatestVersion/');
};

/**
 * Return a list of all of the installed add-ons
 **/
Autoupdate.prototype.installedAddons = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/installedAddons/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/installedAddons/');
};

/**
 * Return a list of any add-ons that have been added to the Marketplace since the last check for updates
 **/
Autoupdate.prototype.newAddons = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/newAddons/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/newAddons/');
};

/**
 * Return a list of any add-ons that have been changed in the Marketplace since the last check for updates
 **/
Autoupdate.prototype.updatedAddons = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/updatedAddons/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/updatedAddons/');
};

/**
 * Return a list of all of the add-ons on the ZAP Marketplace (this information is read once and then cached)
 **/
Autoupdate.prototype.marketplaceAddons = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/marketplaceAddons/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/marketplaceAddons/');
};

Autoupdate.prototype.optionAddonDirectories = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionAddonDirectories/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionAddonDirectories/');
};

Autoupdate.prototype.optionDayLastChecked = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionDayLastChecked/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionDayLastChecked/');
};

Autoupdate.prototype.optionDayLastInstallWarned = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionDayLastInstallWarned/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionDayLastInstallWarned/');
};

Autoupdate.prototype.optionDayLastUpdateWarned = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionDayLastUpdateWarned/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionDayLastUpdateWarned/');
};

Autoupdate.prototype.optionDownloadDirectory = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionDownloadDirectory/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionDownloadDirectory/');
};

Autoupdate.prototype.optionCheckAddonUpdates = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionCheckAddonUpdates/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionCheckAddonUpdates/');
};

Autoupdate.prototype.optionCheckOnStart = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionCheckOnStart/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionCheckOnStart/');
};

Autoupdate.prototype.optionDownloadNewRelease = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionDownloadNewRelease/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionDownloadNewRelease/');
};

Autoupdate.prototype.optionInstallAddonUpdates = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionInstallAddonUpdates/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionInstallAddonUpdates/');
};

Autoupdate.prototype.optionInstallScannerRules = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionInstallScannerRules/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionInstallScannerRules/');
};

Autoupdate.prototype.optionReportAlphaAddons = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionReportAlphaAddons/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionReportAlphaAddons/');
};

Autoupdate.prototype.optionReportBetaAddons = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionReportBetaAddons/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionReportBetaAddons/');
};

Autoupdate.prototype.optionReportReleaseAddons = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/view/optionReportReleaseAddons/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/view/optionReportReleaseAddons/');
};

/**
 * Downloads the latest release, if any 
 **/
Autoupdate.prototype.downloadLatestRelease = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/downloadLatestRelease/', callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/downloadLatestRelease/');
};

/**
 * Installs or updates the specified add-on, returning when complete (ie not asynchronously)
 **/
Autoupdate.prototype.installAddon = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/installAddon/', {'id' : id}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/installAddon/', {'id' : id});
};

/**
 * Uninstalls the specified add-on 
 **/
Autoupdate.prototype.uninstallAddon = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/uninstallAddon/', {'id' : id}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/uninstallAddon/', {'id' : id});
};

Autoupdate.prototype.setOptionCheckAddonUpdates = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/setOptionCheckAddonUpdates/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/setOptionCheckAddonUpdates/', {'Boolean' : bool});
};

Autoupdate.prototype.setOptionCheckOnStart = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/setOptionCheckOnStart/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/setOptionCheckOnStart/', {'Boolean' : bool});
};

Autoupdate.prototype.setOptionDownloadNewRelease = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/setOptionDownloadNewRelease/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/setOptionDownloadNewRelease/', {'Boolean' : bool});
};

Autoupdate.prototype.setOptionInstallAddonUpdates = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/setOptionInstallAddonUpdates/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/setOptionInstallAddonUpdates/', {'Boolean' : bool});
};

Autoupdate.prototype.setOptionInstallScannerRules = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/setOptionInstallScannerRules/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/setOptionInstallScannerRules/', {'Boolean' : bool});
};

Autoupdate.prototype.setOptionReportAlphaAddons = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/setOptionReportAlphaAddons/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/setOptionReportAlphaAddons/', {'Boolean' : bool});
};

Autoupdate.prototype.setOptionReportBetaAddons = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/setOptionReportBetaAddons/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/setOptionReportBetaAddons/', {'Boolean' : bool});
};

Autoupdate.prototype.setOptionReportReleaseAddons = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/autoupdate/action/setOptionReportReleaseAddons/', {'Boolean' : bool}, callback);
    return;
  }
  return this.api.requestPromise('/autoupdate/action/setOptionReportReleaseAddons/', {'Boolean' : bool});
};

module.exports = Autoupdate;
