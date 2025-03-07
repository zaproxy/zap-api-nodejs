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

class Selenium {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Returns the browser extensions option.
   * @returns {Promise<any>} A promise that resolves with the option.
   */
  optionBrowserExtensions = () =>
    this.api.request('/selenium/view/optionBrowserExtensions');

  /**
   * Returns the current path to the Chrome binary.
   * @returns {Promise<any>} A promise that resolves with the Chrome binary path.
   */
  optionChromeBinaryPath = () =>
    this.api.request('/selenium/view/optionChromeBinaryPath');

  /**
   * Returns the current path to ChromeDriver.
   * @returns {Promise<any>} A promise that resolves with the ChromeDriver path.
   */
  optionChromeDriverPath = () =>
    this.api.request('/selenium/view/optionChromeDriverPath');

  /**
   * Returns the current path to the Firefox binary.
   * @returns {Promise<any>} A promise that resolves with the Firefox binary path.
   */
  optionFirefoxBinaryPath = () =>
    this.api.request('/selenium/view/optionFirefoxBinaryPath');

  /**
   * Returns the current default Firefox profile name.
   * @returns {Promise<any>} A promise that resolves with the default Firefox profile.
   */
  optionFirefoxDefaultProfile = () =>
    this.api.request('/selenium/view/optionFirefoxDefaultProfile');

  /**
   * Returns the current path to the Firefox driver (geckodriver).
   * @returns {Promise<any>} A promise that resolves with the Firefox driver path.
   */
  optionFirefoxDriverPath = () =>
    this.api.request('/selenium/view/optionFirefoxDriverPath');

  /**
   * Returns the current path to the IEDriverServer.
   * @returns {Promise<any>} A promise that resolves with the IEDriverServer path.
   */
  optionIeDriverPath = () =>
    this.api.request('/selenium/view/optionIeDriverPath');

  /**
   * Returns the last used directory path.
   * @returns {Promise<any>} A promise that resolves with the last used directory.
   */
  optionLastDirectory = () =>
    this.api.request('/selenium/view/optionLastDirectory');

  /**
   * Returns the current path to the PhantomJS binary.
   * @returns {Promise<any>} A promise that resolves with the PhantomJS binary path.
   */
  optionPhantomJsBinaryPath = () =>
    this.api.request('/selenium/view/optionPhantomJsBinaryPath');

  /**
   * Gets the browser arguments.
   * @param {{ browser: string }} args - Object containing:
   *   - browser: The browser name, e.g. "chrome" or "firefox".
   * @returns {Promise<any>} A promise that resolves with the browser arguments.
   */
  getBrowserArguments = ({ browser }) =>
    this.api.request('/selenium/view/getBrowserArguments', { browser });

  /**
   * Sets the current path to the Chrome binary.
   * @param {{ string: string }} args - Object containing:
   *   - string: The path to the Chrome binary.
   * @returns {Promise<any>} A promise that resolves when the path is set.
   */
  setOptionChromeBinaryPath = ({ string }) =>
    this.api.request('/selenium/action/setOptionChromeBinaryPath', { String: string });

  /**
   * Sets the current path to ChromeDriver.
   * @param {{ string: string }} args - Object containing:
   *   - string: The path to ChromeDriver.
   * @returns {Promise<any>} A promise that resolves when the path is set.
   */
  setOptionChromeDriverPath = ({ string }) =>
    this.api.request('/selenium/action/setOptionChromeDriverPath', { String: string });

  /**
   * Sets the current path to the Firefox binary.
   * @param {{ string: string }} args - Object containing:
   *   - string: The path to the Firefox binary.
   * @returns {Promise<any>} A promise that resolves when the path is set.
   */
  setOptionFirefoxBinaryPath = ({ string }) =>
    this.api.request('/selenium/action/setOptionFirefoxBinaryPath', { String: string });

  /**
   * Sets the default Firefox profile.
   * @param {{ string: string }} args - Object containing:
   *   - string: The default Firefox profile name.
   * @returns {Promise<any>} A promise that resolves when the profile is set.
   */
  setOptionFirefoxDefaultProfile = ({ string }) =>
    this.api.request('/selenium/action/setOptionFirefoxDefaultProfile', { String: string });

  /**
   * Sets the current path to the Firefox driver (geckodriver).
   * @param {{ string: string }} args - Object containing:
   *   - string: The path to the Firefox driver.
   * @returns {Promise<any>} A promise that resolves when the path is set.
   */
  setOptionFirefoxDriverPath = ({ string }) =>
    this.api.request('/selenium/action/setOptionFirefoxDriverPath', { String: string });

  /**
   * Sets the current path to IEDriverServer.
   * @param {{ string: string }} args - Object containing:
   *   - string: The path to the IEDriverServer.
   * @returns {Promise<any>} A promise that resolves when the path is set.
   */
  setOptionIeDriverPath = ({ string }) =>
    this.api.request('/selenium/action/setOptionIeDriverPath', { String: string });

  /**
   * Sets the last used directory path.
   * @param {{ string: string }} args - Object containing:
   *   - string: The directory path.
   * @returns {Promise<any>} A promise that resolves when the directory is set.
   */
  setOptionLastDirectory = ({ string }) =>
    this.api.request('/selenium/action/setOptionLastDirectory', { String: string });

  /**
   * Sets the current path to the PhantomJS binary.
   * @param {{ string: string }} args - Object containing:
   *   - string: The path to the PhantomJS binary.
   * @returns {Promise<any>} A promise that resolves when the path is set.
   */
  setOptionPhantomJsBinaryPath = ({ string }) =>
    this.api.request('/selenium/action/setOptionPhantomJsBinaryPath', { String: string });

  /**
   * Adds a browser argument.
   * @param {{ browser: string, argument: string, enabled?: string }} args - Object containing:
   *   - browser: The browser, e.g. "chrome" or "firefox".
   *   - argument: The argument to add.
   *   - enabled: (Optional) The enabled state ("true" or "false").
   * @returns {Promise<any>} A promise that resolves when the argument is added.
   */
  addBrowserArgument = ({ browser, argument, enabled }) => {
    const params = { browser, argument };
    if (enabled) params.enabled = enabled;
    return this.api.request('/selenium/action/addBrowserArgument', params);
  };

  /**
   * Launches a browser proxying through ZAP.
   * @param {{ browser: string }} args - Object containing:
   *   - browser: The browser to launch (e.g. "chrome" or "firefox").
   * @returns {Promise<any>} A promise that resolves when the browser is launched.
   */
  launchBrowser = ({ browser }) =>
    this.api.request('/selenium/action/launchBrowser', { browser });

  /**
   * Removes a browser argument.
   * @param {{ browser: string, argument: string }} args - Object containing:
   *   - browser: The browser (e.g. "chrome" or "firefox").
   *   - argument: The argument to remove.
   * @returns {Promise<any>} A promise that resolves when the argument is removed.
   */
  removeBrowserArgument = ({ browser, argument }) =>
    this.api.request('/selenium/action/removeBrowserArgument', { browser, argument });

  /**
   * Sets whether a browser argument is enabled.
   * @param {{ browser: string, argument: string, enabled: string }} args - Object containing:
   *   - browser: The browser (e.g. "chrome" or "firefox").
   *   - argument: The argument.
   *   - enabled: The enabled state ("true" or "false").
   * @returns {Promise<any>} A promise that resolves when the setting is applied.
   */
  setBrowserArgumentEnabled = ({ browser, argument, enabled }) =>
    this.api.request('/selenium/action/setBrowserArgumentEnabled', { browser, argument, enabled });
}

module.exports = Selenium;
