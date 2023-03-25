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
function Authorization (clientApi) {
  this.api = clientApi
}

/**
 * Obtains all the configuration of the authorization detection method that is currently set for a context.
 * @param {string} contextid
 **/
Authorization.prototype.getAuthorizationDetectionMethod = function (args) {
  return this.api.request('/authorization/view/getAuthorizationDetectionMethod/', { contextId: args.contextid })
}

/**
 * Sets the authorization detection method for a context as one that identifies un-authorized messages based on: the message's status code or a regex pattern in the response's header or body. Also, whether all conditions must match or just some can be specified via the logicalOperator parameter, which accepts two values: "AND" (default), "OR".
 * @param {string} contextid
 * @param {string} headerregex
 * @param {string} bodyregex
 * @param {string} statuscode
 * @param {string} logicaloperator
 **/
Authorization.prototype.setBasicAuthorizationDetectionMethod = function (args) {
  const params = { contextId: args.contextid }
  if (args.headerregex && args.headerregex !== null) {
    params.headerRegex = args.headerregex
  }
  if (args.bodyregex && args.bodyregex !== null) {
    params.bodyRegex = args.bodyregex
  }
  if (args.statuscode && args.statuscode !== null) {
    params.statusCode = args.statuscode
  }
  if (args.logicaloperator && args.logicaloperator !== null) {
    params.logicalOperator = args.logicaloperator
  }
  return this.api.request('/authorization/action/setBasicAuthorizationDetectionMethod/', params)
}

module.exports = Authorization
