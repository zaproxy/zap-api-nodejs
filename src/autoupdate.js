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
function Autoupdate (clientApi) {
  this.api = clientApi
}

/**
 * Returns the latest version number
 **/
Autoupdate.prototype.latestVersionNumber = function () {
  return this.api.request('/autoupdate/view/latestVersionNumber/')
}

/**
 * Returns 'true' if ZAP is on the latest version
 **/
Autoupdate.prototype.isLatestVersion = function () {
  return this.api.request('/autoupdate/view/isLatestVersion/')
}

/**
 * Return a list of all of the installed add-ons
 **/
Autoupdate.prototype.installedAddons = function () {
  return this.api.request('/autoupdate/view/installedAddons/')
}

/**
 * Returns a list with all local add-ons, installed or not.
 **/
Autoupdate.prototype.localAddons = function () {
  return this.api.request('/autoupdate/view/localAddons/')
}

/**
 * Return a list of any add-ons that have been added to the Marketplace since the last check for updates
 **/
Autoupdate.prototype.newAddons = function () {
  return this.api.request('/autoupdate/view/newAddons/')
}

/**
 * Return a list of any add-ons that have been changed in the Marketplace since the last check for updates
 **/
Autoupdate.prototype.updatedAddons = function () {
  return this.api.request('/autoupdate/view/updatedAddons/')
}

/**
 * Return a list of all of the add-ons on the ZAP Marketplace (this information is read once and then cached)
 **/
Autoupdate.prototype.marketplaceAddons = function () {
  return this.api.request('/autoupdate/view/marketplaceAddons/')
}

/**
 *
 **/
Autoupdate.prototype.optionAddonDirectories = function () {
  return this.api.request('/autoupdate/view/optionAddonDirectories/')
}

/**
 *
 **/
Autoupdate.prototype.optionDayLastChecked = function () {
  return this.api.request('/autoupdate/view/optionDayLastChecked/')
}

/**
 *
 **/
Autoupdate.prototype.optionDayLastInstallWarned = function () {
  return this.api.request('/autoupdate/view/optionDayLastInstallWarned/')
}

/**
 *
 **/
Autoupdate.prototype.optionDayLastUpdateWarned = function () {
  return this.api.request('/autoupdate/view/optionDayLastUpdateWarned/')
}

/**
 *
 **/
Autoupdate.prototype.optionDownloadDirectory = function () {
  return this.api.request('/autoupdate/view/optionDownloadDirectory/')
}

/**
 *
 **/
Autoupdate.prototype.optionCheckAddonUpdates = function () {
  return this.api.request('/autoupdate/view/optionCheckAddonUpdates/')
}

/**
 *
 **/
Autoupdate.prototype.optionCheckOnStart = function () {
  return this.api.request('/autoupdate/view/optionCheckOnStart/')
}

/**
 *
 **/
Autoupdate.prototype.optionDownloadNewRelease = function () {
  return this.api.request('/autoupdate/view/optionDownloadNewRelease/')
}

/**
 *
 **/
Autoupdate.prototype.optionInstallAddonUpdates = function () {
  return this.api.request('/autoupdate/view/optionInstallAddonUpdates/')
}

/**
 *
 **/
Autoupdate.prototype.optionInstallScannerRules = function () {
  return this.api.request('/autoupdate/view/optionInstallScannerRules/')
}

/**
 *
 **/
Autoupdate.prototype.optionReportAlphaAddons = function () {
  return this.api.request('/autoupdate/view/optionReportAlphaAddons/')
}

/**
 *
 **/
Autoupdate.prototype.optionReportBetaAddons = function () {
  return this.api.request('/autoupdate/view/optionReportBetaAddons/')
}

/**
 *
 **/
Autoupdate.prototype.optionReportReleaseAddons = function () {
  return this.api.request('/autoupdate/view/optionReportReleaseAddons/')
}

/**
 * Downloads the latest release, if any
 **/
Autoupdate.prototype.downloadLatestRelease = function () {
  return this.api.request('/autoupdate/action/downloadLatestRelease/')
}

/**
 * Installs or updates the specified add-on, returning when complete (i.e. not asynchronously)
 * @param {string} id
 **/
Autoupdate.prototype.installAddon = function (args) {
  return this.api.request('/autoupdate/action/installAddon/', { id: args.id })
}

/**
 *
 * @param {string} file
 **/
Autoupdate.prototype.installLocalAddon = function (args) {
  return this.api.request('/autoupdate/action/installLocalAddon/', { file: args.file })
}

/**
 * Uninstalls the specified add-on
 * @param {string} id
 **/
Autoupdate.prototype.uninstallAddon = function (args) {
  return this.api.request('/autoupdate/action/uninstallAddon/', { id: args.id })
}

/**
 *
 * @param {string} bool
 **/
Autoupdate.prototype.setOptionCheckAddonUpdates = function (args) {
  return this.api.request('/autoupdate/action/setOptionCheckAddonUpdates/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Autoupdate.prototype.setOptionCheckOnStart = function (args) {
  return this.api.request('/autoupdate/action/setOptionCheckOnStart/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Autoupdate.prototype.setOptionDownloadNewRelease = function (args) {
  return this.api.request('/autoupdate/action/setOptionDownloadNewRelease/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Autoupdate.prototype.setOptionInstallAddonUpdates = function (args) {
  return this.api.request('/autoupdate/action/setOptionInstallAddonUpdates/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Autoupdate.prototype.setOptionInstallScannerRules = function (args) {
  return this.api.request('/autoupdate/action/setOptionInstallScannerRules/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Autoupdate.prototype.setOptionReportAlphaAddons = function (args) {
  return this.api.request('/autoupdate/action/setOptionReportAlphaAddons/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Autoupdate.prototype.setOptionReportBetaAddons = function (args) {
  return this.api.request('/autoupdate/action/setOptionReportBetaAddons/', { Boolean: args.bool })
}

/**
 *
 * @param {string} bool
 **/
Autoupdate.prototype.setOptionReportReleaseAddons = function (args) {
  return this.api.request('/autoupdate/action/setOptionReportReleaseAddons/', { Boolean: args.bool })
}

module.exports = Autoupdate
