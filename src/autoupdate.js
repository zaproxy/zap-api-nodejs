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
/**
 * Class representing the Autoupdate API for ZAP Proxy.
 * Provides methods to query version info, manage add-ons, and configure update options.
 *
 * @param {object} clientApi - The client API instance for making HTTP requests.
 */
class Autoupdate {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Returns the latest version number.
   * @returns {Promise} - A promise resolving to the latest version number.
   */
  latestVersionNumber = () =>
    this.api.request('/autoupdate/view/latestVersionNumber');

  /**
   * Returns 'true' if ZAP is on the latest version.
   * @returns {Promise} - A promise resolving to a boolean.
   */
  isLatestVersion = () =>
    this.api.request('/autoupdate/view/isLatestVersion');

  /**
   * Returns a list of all installed add-ons.
   * @returns {Promise} - A promise resolving to the list of installed add-ons.
   */
  installedAddons = () =>
    this.api.request('/autoupdate/view/installedAddons');

  /**
   * Returns a list of all local add-ons (installed or not).
   * @returns {Promise} - A promise resolving to the list of local add-ons.
   */
  localAddons = () =>
    this.api.request('/autoupdate/view/localAddons');

  /**
   * Returns a list of new add-ons added to the Marketplace since the last update check.
   * @returns {Promise} - A promise resolving to the list of new add-ons.
   */
  newAddons = () =>
    this.api.request('/autoupdate/view/newAddons');

  /**
   * Returns a list of updated add-ons from the Marketplace since the last update check.
   * @returns {Promise} - A promise resolving to the list of updated add-ons.
   */
  updatedAddons = () =>
    this.api.request('/autoupdate/view/updatedAddons');

  /**
   * Returns a list of all add-ons on the ZAP Marketplace (cached).
   * @returns {Promise} - A promise resolving to the list of marketplace add-ons.
   */
  marketplaceAddons = () =>
    this.api.request('/autoupdate/view/marketplaceAddons');

  /**
   * Returns the configured add-on directories.
   * @returns {Promise}
   */
  optionAddonDirectories = () =>
    this.api.request('/autoupdate/view/optionAddonDirectories');

  /**
   * Returns the day the update check was last performed.
   * @returns {Promise}
   */
  optionDayLastChecked = () =>
    this.api.request('/autoupdate/view/optionDayLastChecked');

  /**
   * Returns the day the install warning was last issued.
   * @returns {Promise}
   */
  optionDayLastInstallWarned = () =>
    this.api.request('/autoupdate/view/optionDayLastInstallWarned');

  /**
   * Returns the day the update warning was last issued.
   * @returns {Promise}
   */
  optionDayLastUpdateWarned = () =>
    this.api.request('/autoupdate/view/optionDayLastUpdateWarned');

  /**
   * Returns the download directory option.
   * @returns {Promise}
   */
  optionDownloadDirectory = () =>
    this.api.request('/autoupdate/view/optionDownloadDirectory');

  /**
   * Returns whether add-on update checking is enabled.
   * @returns {Promise}
   */
  optionCheckAddonUpdates = () =>
    this.api.request('/autoupdate/view/optionCheckAddonUpdates');

  /**
   * Returns whether update check on start is enabled.
   * @returns {Promise}
   */
  optionCheckOnStart = () =>
    this.api.request('/autoupdate/view/optionCheckOnStart');

  /**
   * Returns whether downloading new releases is enabled.
   * @returns {Promise}
   */
  optionDownloadNewRelease = () =>
    this.api.request('/autoupdate/view/optionDownloadNewRelease');

  /**
   * Returns whether installing add-on updates is enabled.
   * @returns {Promise}
   */
  optionInstallAddonUpdates = () =>
    this.api.request('/autoupdate/view/optionInstallAddonUpdates');

  /**
   * Returns whether installing scanner rules is enabled.
   * @returns {Promise}
   */
  optionInstallScannerRules = () =>
    this.api.request('/autoupdate/view/optionInstallScannerRules');

  /**
   * Returns whether alpha add-ons are reported.
   * @returns {Promise}
   */
  optionReportAlphaAddons = () =>
    this.api.request('/autoupdate/view/optionReportAlphaAddons');

  /**
   * Returns whether beta add-ons are reported.
   * @returns {Promise}
   */
  optionReportBetaAddons = () =>
    this.api.request('/autoupdate/view/optionReportBetaAddons');

  /**
   * Returns whether release add-ons are reported.
   * @returns {Promise}
   */
  optionReportReleaseAddons = () =>
    this.api.request('/autoupdate/view/optionReportReleaseAddons');

  /**
   * Downloads the latest release, if available.
   * @returns {Promise}
   */
  downloadLatestRelease = () =>
    this.api.request('/autoupdate/action/downloadLatestRelease');

  /**
   * Installs or updates the specified add-on.
   * @param {{ id: string }} args - Object containing the add-on ID.
   * @returns {Promise}
   */
  installAddon = ({ id }) =>
    this.api.request('/autoupdate/action/installAddon', { id });

  /**
   * Installs a local add-on from the specified file.
   * @param {{ file: string }} args - Object containing the file path.
   * @returns {Promise}
   */
  installLocalAddon = ({ file }) =>
    this.api.request('/autoupdate/action/installLocalAddon', { file });

  /**
   * Uninstalls the specified add-on.
   * @param {{ id: string }} args - Object containing the add-on ID.
   * @returns {Promise}
   */
  uninstallAddon = ({ id }) =>
    this.api.request('/autoupdate/action/uninstallAddon', { id });

  /**
   * Sets whether add-on update checking is enabled.
   * @param {{ isSet: boolean }} args - Object containing the boolean flag.
   * @returns {Promise}
   */
  setOptionCheckAddonUpdates = ({ isSet }) =>
    this.api.request('/autoupdate/action/setOptionCheckAddonUpdates', { Boolean: String(isSet) });

  /**
   * Sets whether to check for updates on start.
   * @param {{ isSet: boolean }} args - Object containing the boolean flag.
   * @returns {Promise}
   */
  setOptionCheckOnStart = ({ isSet }) =>
    this.api.request('/autoupdate/action/setOptionCheckOnStart', { Boolean: String(isSet) });

  /**
   * Sets whether downloading new releases is enabled.
   * @param {{ isSet: boolean }} args - Object containing the boolean flag.
   * @returns {Promise}
   */
  setOptionDownloadNewRelease = ({ isSet }) =>
    this.api.request('/autoupdate/action/setOptionDownloadNewRelease', { Boolean: String(isSet) });

  /**
   * Sets whether installing add-on updates is enabled.
   * @param {{ isSet: boolean }} args - Object containing the boolean flag.
   * @returns {Promise}
   */
  setOptionInstallAddonUpdates = ({ isSet }) =>
    this.api.request('/autoupdate/action/setOptionInstallAddonUpdates', { Boolean: String(isSet) });

  /**
   * Sets whether installing scanner rules is enabled.
   * @param {{ isSet: boolean }} args - Object containing the boolean flag.
   * @returns {Promise}
   */
  setOptionInstallScannerRules = ({ isSet }) =>
    this.api.request('/autoupdate/action/setOptionInstallScannerRules', { Boolean: String(isSet) });

  /**
   * Sets whether to report alpha add-ons.
   * @param {{ isSet: boolean }} args - Object containing the boolean flag.
   * @returns {Promise}
   */
  setOptionReportAlphaAddons = ({ isSet }) =>
    this.api.request('/autoupdate/action/setOptionReportAlphaAddons', { Boolean: String(isSet) });

  /**
   * Sets whether to report beta add-ons.
   * @param {{ isSet: boolean }} args - Object containing the boolean flag.
   * @returns {Promise}
   */
  setOptionReportBetaAddons = ({ isSet }) =>
    this.api.request('/autoupdate/action/setOptionReportBetaAddons', { Boolean: String(isSet) });

  /**
   * Sets whether to report release add-ons.
   * @param {{ isSet: boolean }} args - Object containing the boolean flag.
   * @returns {Promise}
   */
  setOptionReportReleaseAddons = ({ isSet }) =>
    this.api.request('/autoupdate/action/setOptionReportReleaseAddons', { Boolean: String(isSet) });
}

module.exports = Autoupdate;
