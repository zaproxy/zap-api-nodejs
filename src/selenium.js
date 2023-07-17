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

module.exports = Selenium
