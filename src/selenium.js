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
function Selenium (clientApi) {
  this.api = clientApi
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionBrowserExtensions = function () {
  return this.api.request('/selenium/view/optionBrowserExtensions/')
}

/**
 * Returns the current path to Chrome binary
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionChromeBinaryPath = function () {
  return this.api.request('/selenium/view/optionChromeBinaryPath/')
}

/**
 * Returns the current path to ChromeDriver
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionChromeDriverPath = function () {
  return this.api.request('/selenium/view/optionChromeDriverPath/')
}

/**
 * Returns the current path to Firefox binary
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionFirefoxBinaryPath = function () {
  return this.api.request('/selenium/view/optionFirefoxBinaryPath/')
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionFirefoxDefaultProfile = function () {
  return this.api.request('/selenium/view/optionFirefoxDefaultProfile/')
}

/**
 * Returns the current path to Firefox driver (geckodriver)
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionFirefoxDriverPath = function () {
  return this.api.request('/selenium/view/optionFirefoxDriverPath/')
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionIeDriverPath = function () {
  return this.api.request('/selenium/view/optionIeDriverPath/')
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionLastDirectory = function () {
  return this.api.request('/selenium/view/optionLastDirectory/')
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionPhantomJsBinaryPath = function () {
  return this.api.request('/selenium/view/optionPhantomJsBinaryPath/')
}

/**
 * Gets the browser arguments.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} browser - The browser, chrome or firefox.
 **/
Selenium.prototype.getBrowserArguments = function (args) {
  return this.api.request('/selenium/view/getBrowserArguments/', { browser: args.browser })
}

/**
 * Sets the current path to Chrome binary
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionChromeBinaryPath = function (args) {
  return this.api.request('/selenium/action/setOptionChromeBinaryPath/', { String: args.string })
}

/**
 * Sets the current path to ChromeDriver
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionChromeDriverPath = function (args) {
  return this.api.request('/selenium/action/setOptionChromeDriverPath/', { String: args.string })
}

/**
 * Sets the current path to Firefox binary
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionFirefoxBinaryPath = function (args) {
  return this.api.request('/selenium/action/setOptionFirefoxBinaryPath/', { String: args.string })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.setOptionFirefoxDefaultProfile = function (args) {
  return this.api.request('/selenium/action/setOptionFirefoxDefaultProfile/', { String: args.string })
}

/**
 * Sets the current path to Firefox driver (geckodriver)
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionFirefoxDriverPath = function (args) {
  return this.api.request('/selenium/action/setOptionFirefoxDriverPath/', { String: args.string })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.setOptionIeDriverPath = function (args) {
  return this.api.request('/selenium/action/setOptionIeDriverPath/', { String: args.string })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.setOptionLastDirectory = function (args) {
  return this.api.request('/selenium/action/setOptionLastDirectory/', { String: args.string })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.setOptionPhantomJsBinaryPath = function (args) {
  return this.api.request('/selenium/action/setOptionPhantomJsBinaryPath/', { String: args.string })
}

/**
 * Adds a browser argument.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} browser - The browser, chrome or firefox.
 * @param {string} argument - The argument.
 * @param {string} enabled - The enabled state, true or false.
 **/
Selenium.prototype.addBrowserArgument = function (args) {
  const params = { browser: args.browser, argument: args.argument }
  if (args.enabled && args.enabled !== null) {
    params.enabled = args.enabled
  }
  return this.api.request('/selenium/action/addBrowserArgument/', params)
}

/**
 * Removes a browser argument.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} browser - The browser, chrome or firefox.
 * @param {string} argument - The argument.
 **/
Selenium.prototype.removeBrowserArgument = function (args) {
  return this.api.request('/selenium/action/removeBrowserArgument/', { browser: args.browser, argument: args.argument })
}

/**
 * Sets whether or not a browser argument is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} browser - The browser, chrome or firefox.
 * @param {string} argument - The argument.
 * @param {string} enabled - The enabled state, true or false.
 **/
Selenium.prototype.setBrowserArgumentEnabled = function (args) {
  return this.api.request('/selenium/action/setBrowserArgumentEnabled/', { browser: args.browser, argument: args.argument, enabled: args.enabled })
}

module.exports = Selenium
