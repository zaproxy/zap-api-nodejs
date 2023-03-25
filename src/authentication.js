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
function Authentication (clientApi) {
  this.api = clientApi
}

/**
 * Gets the name of the authentication methods.
 **/
Authentication.prototype.getSupportedAuthenticationMethods = function () {
  return this.api.request('/authentication/view/getSupportedAuthenticationMethods/')
}

/**
 * Gets the configuration parameters for the authentication method with the given name.
 * @param {string} authmethodname
 **/
Authentication.prototype.getAuthenticationMethodConfigParams = function (args) {
  return this.api.request('/authentication/view/getAuthenticationMethodConfigParams/', { authMethodName: args.authmethodname })
}

/**
 * Gets the name of the authentication method for the context with the given ID.
 * @param {string} contextid
 **/
Authentication.prototype.getAuthenticationMethod = function (args) {
  return this.api.request('/authentication/view/getAuthenticationMethod/', { contextId: args.contextid })
}

/**
 * Gets the logged in indicator for the context with the given ID.
 * @param {string} contextid
 **/
Authentication.prototype.getLoggedInIndicator = function (args) {
  return this.api.request('/authentication/view/getLoggedInIndicator/', { contextId: args.contextid })
}

/**
 * Gets the logged out indicator for the context with the given ID.
 * @param {string} contextid
 **/
Authentication.prototype.getLoggedOutIndicator = function (args) {
  return this.api.request('/authentication/view/getLoggedOutIndicator/', { contextId: args.contextid })
}

/**
 * Sets the authentication method for the context with the given ID.
 * @param {string} contextid
 * @param {string} authmethodname
 * @param {string} authmethodconfigparams
 **/
Authentication.prototype.setAuthenticationMethod = function (args) {
  const params = { contextId: args.contextid, authMethodName: args.authmethodname }
  if (args.authmethodconfigparams && args.authmethodconfigparams !== null) {
    params.authMethodConfigParams = args.authmethodconfigparams
  }
  return this.api.request('/authentication/action/setAuthenticationMethod/', params)
}

/**
 * Sets the logged in indicator for the context with the given ID.
 * @param {string} contextid
 * @param {string} loggedinindicatorregex
 **/
Authentication.prototype.setLoggedInIndicator = function (args) {
  return this.api.request('/authentication/action/setLoggedInIndicator/', { contextId: args.contextid, loggedInIndicatorRegex: args.loggedinindicatorregex })
}

/**
 * Sets the logged out indicator for the context with the given ID.
 * @param {string} contextid
 * @param {string} loggedoutindicatorregex
 **/
Authentication.prototype.setLoggedOutIndicator = function (args) {
  return this.api.request('/authentication/action/setLoggedOutIndicator/', { contextId: args.contextid, loggedOutIndicatorRegex: args.loggedoutindicatorregex })
}

module.exports = Authentication
