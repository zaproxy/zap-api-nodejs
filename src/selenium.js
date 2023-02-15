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
function Selenium(clientApi) {
  this.api = clientApi;
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionBrowserExtensions = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/view/optionBrowserExtensions/', callback);
    return;
  }
  return this.api.requestPromise('/selenium/view/optionBrowserExtensions/');
};

/**
 * Returns the current path to Chrome binary
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionChromeBinaryPath = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/view/optionChromeBinaryPath/', callback);
    return;
  }
  return this.api.requestPromise('/selenium/view/optionChromeBinaryPath/');
};

/**
 * Returns the current path to ChromeDriver
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionChromeDriverPath = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/view/optionChromeDriverPath/', callback);
    return;
  }
  return this.api.requestPromise('/selenium/view/optionChromeDriverPath/');
};

/**
 * Returns the current path to Firefox binary
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionFirefoxBinaryPath = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/view/optionFirefoxBinaryPath/', callback);
    return;
  }
  return this.api.requestPromise('/selenium/view/optionFirefoxBinaryPath/');
};

/**
 * Returns the current path to Firefox driver (geckodriver)
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionFirefoxDriverPath = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/view/optionFirefoxDriverPath/', callback);
    return;
  }
  return this.api.requestPromise('/selenium/view/optionFirefoxDriverPath/');
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionIeDriverPath = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/view/optionIeDriverPath/', callback);
    return;
  }
  return this.api.requestPromise('/selenium/view/optionIeDriverPath/');
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionLastDirectory = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/view/optionLastDirectory/', callback);
    return;
  }
  return this.api.requestPromise('/selenium/view/optionLastDirectory/');
};

/**
 * Returns the current path to PhantomJS binary
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.optionPhantomJsBinaryPath = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/view/optionPhantomJsBinaryPath/', callback);
    return;
  }
  return this.api.requestPromise('/selenium/view/optionPhantomJsBinaryPath/');
};

/**
 * Sets the current path to Chrome binary
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionChromeBinaryPath = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/action/setOptionChromeBinaryPath/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/selenium/action/setOptionChromeBinaryPath/', {'String': args.string});
};

/**
 * Sets the current path to ChromeDriver
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionChromeDriverPath = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/action/setOptionChromeDriverPath/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/selenium/action/setOptionChromeDriverPath/', {'String': args.string});
};

/**
 * Sets the current path to Firefox binary
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionFirefoxBinaryPath = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/action/setOptionFirefoxBinaryPath/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/selenium/action/setOptionFirefoxBinaryPath/', {'String': args.string});
};

/**
 * Sets the current path to Firefox driver (geckodriver)
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionFirefoxDriverPath = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/action/setOptionFirefoxDriverPath/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/selenium/action/setOptionFirefoxDriverPath/', {'String': args.string});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.setOptionIeDriverPath = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/action/setOptionIeDriverPath/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/selenium/action/setOptionIeDriverPath/', {'String': args.string});
};

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Selenium.prototype.setOptionLastDirectory = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/action/setOptionLastDirectory/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/selenium/action/setOptionLastDirectory/', {'String': args.string});
};

/**
 * Sets the current path to PhantomJS binary
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string
 **/
Selenium.prototype.setOptionPhantomJsBinaryPath = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/selenium/action/setOptionPhantomJsBinaryPath/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/selenium/action/setOptionPhantomJsBinaryPath/', {'String': args.string});
};

module.exports = Selenium;
