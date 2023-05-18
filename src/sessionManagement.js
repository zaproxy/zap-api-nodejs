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
function SessionManagement (clientApi) {
  this.api = clientApi
}

/**
 * Gets the name of the session management methods.
 **/
SessionManagement.prototype.getSupportedSessionManagementMethods = function () {
  return this.api.request('/sessionManagement/view/getSupportedSessionManagementMethods/')
}

/**
 * Gets the configuration parameters for the session management method with the given name.
 * @param {string} methodname
 **/
SessionManagement.prototype.getSessionManagementMethodConfigParams = function (args) {
  return this.api.request('/sessionManagement/view/getSessionManagementMethodConfigParams/', { methodName: args.methodname })
}

/**
 * Gets the name of the session management method for the context with the given ID.
 * @param {string} contextid
 **/
SessionManagement.prototype.getSessionManagementMethod = function (args) {
  return this.api.request('/sessionManagement/view/getSessionManagementMethod/', { contextId: args.contextid })
}

/**
 * Sets the session management method for the context with the given ID.
 * @param {string} contextid
 * @param {string} methodname
 * @param {string} methodconfigparams
 **/
SessionManagement.prototype.setSessionManagementMethod = function (args) {
  const params = { contextId: args.contextid, methodName: args.methodname }
  if (args.methodconfigparams && args.methodconfigparams !== null) {
    params.methodConfigParams = args.methodconfigparams
  }
  return this.api.request('/sessionManagement/action/setSessionManagementMethod/', params)
}

module.exports = SessionManagement
