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
function Break (clientApi) {
  this.api = clientApi
}

/**
 * Returns True if ZAP will break on both requests and responses
 **/
Break.prototype.isBreakAll = function () {
  return this.api.request('/break/view/isBreakAll/')
}

/**
 * Returns True if ZAP will break on requests
 **/
Break.prototype.isBreakRequest = function () {
  return this.api.request('/break/view/isBreakRequest/')
}

/**
 * Returns True if ZAP will break on responses
 **/
Break.prototype.isBreakResponse = function () {
  return this.api.request('/break/view/isBreakResponse/')
}

/**
 * Returns the HTTP message currently intercepted (if any)
 **/
Break.prototype.httpMessage = function () {
  return this.api.request('/break/view/httpMessage/')
}

/**
 * Controls the global break functionality. The type may be one of: http-all, http-request or http-response. The state may be true (for turning break on for the specified type) or false (for turning break off). Scope is not currently used.
 * @param {string} type
 * @param {string} state
 * @param {string} scope
 **/
Break.prototype.brk = function (args) {
  const params = { type: args.type, state: args.state }
  if (args.scope && args.scope !== null) {
    params.scope = args.scope
  }
  return this.api.request('/break/action/break/', params)
}

/**
 * Overwrites the currently intercepted message with the data provided
 * @param {string} httpheader
 * @param {string} httpbody
 **/
Break.prototype.setHttpMessage = function (args) {
  const params = { httpHeader: args.httpheader }
  if (args.httpbody && args.httpbody !== null) {
    params.httpBody = args.httpbody
  }
  return this.api.request('/break/action/setHttpMessage/', params)
}

/**
 * Submits the currently intercepted message and unsets the global request/response breakpoints
 **/
Break.prototype.cont = function () {
  return this.api.request('/break/action/continue/')
}

/**
 * Submits the currently intercepted message, the next request or response will automatically be intercepted
 **/
Break.prototype.step = function () {
  return this.api.request('/break/action/step/')
}

/**
 * Drops the currently intercepted message
 **/
Break.prototype.drop = function () {
  return this.api.request('/break/action/drop/')
}

/**
 * Adds a custom HTTP breakpoint. The string is the string to match. Location may be one of: url, request_header, request_body, response_header or response_body. Match may be: contains or regex. Inverse (match) may be true or false. Lastly, ignorecase (when matching the string) may be true or false.
 * @param {string} string
 * @param {string} location
 * @param {string} match
 * @param {string} inverse
 * @param {string} ignorecase
 **/
Break.prototype.addHttpBreakpoint = function (args) {
  return this.api.request('/break/action/addHttpBreakpoint/', { string: args.string, location: args.location, match: args.match, inverse: args.inverse, ignorecase: args.ignorecase })
}

/**
 * Removes the specified breakpoint
 * @param {string} string
 * @param {string} location
 * @param {string} match
 * @param {string} inverse
 * @param {string} ignorecase
 **/
Break.prototype.removeHttpBreakpoint = function (args) {
  return this.api.request('/break/action/removeHttpBreakpoint/', { string: args.string, location: args.location, match: args.match, inverse: args.inverse, ignorecase: args.ignorecase })
}

module.exports = Break
