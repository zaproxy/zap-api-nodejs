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

class Break {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Returns true if ZAP is set to break on both requests and responses.
   * @returns {Promise}
   */
  isBreakAll() {
    return this.api.request('/break/view/isBreakAll');
  }

  /**
   * Returns true if ZAP is set to break on requests.
   * @returns {Promise}
   */
  isBreakRequest() {
    return this.api.request('/break/view/isBreakRequest');
  }

  /**
   * Returns true if ZAP is set to break on responses.
   * @returns {Promise}
   */
  isBreakResponse() {
    return this.api.request('/break/view/isBreakResponse');
  }

  /**
   * Returns the currently intercepted HTTP message (if any).
   * @returns {Promise}
   */
  httpMessage() {
    return this.api.request('/break/view/httpMessage');
  }

  /**
   * Controls the global break functionality.
   *
   * @param {{ type: string, state: string, scope: string }} args - Object with properties:
   *   - type: The break type ('http-all', 'http-request', or 'http-response').
   *   - state: 'true' to enable breaking, 'false' to disable.
   *   - scope: Scope value (currently not used).
   * @returns {Promise}
   */
  brk({ type, state, scope }) {
    return this.api.request('/break/action/break', { type, state, scope });
  }

  /**
   * Overwrites the currently intercepted HTTP message with new data.
   *
   * @param {{ httpheader: string, httpbody?: string }} args - Object with properties:
   *   - httpheader: The new HTTP header.
   *   - httpbody: The new HTTP body (optional).
   * @returns {Promise}
   */
  setHttpMessage(args) {
    const params = { httpHeader: args.httpheader };
    if (args.httpbody) {
      params.httpBody = args.httpbody;
    }
    return this.api.request('/break/action/setHttpMessage', params);
  }

  /**
   * Submits the intercepted message and clears the global breakpoints.
   * @returns {Promise}
   */
  cont() {
    return this.api.request('/break/action/continue');
  }

  /**
   * Submits the intercepted message and enables interception for the next message.
   * @returns {Promise}
   */
  step() {
    return this.api.request('/break/action/step');
  }

  /**
   * Drops the currently intercepted message.
   * @returns {Promise}
   */
  drop() {
    return this.api.request('/break/action/drop');
  }

  /**
   * Adds a custom HTTP breakpoint.
   *
   * @param {{ string: string, location: string, match: string, inverse: string, ignorecase: string }} args - HTTP Breakpoint properties.
   * @returns {Promise}
   */
  addHttpBreakpoint({ string, location, match, inverse, ignorecase }) {
    return this.api.request('/break/action/addHttpBreakpoint', { string, location, match, inverse, ignorecase });
  }

  /**
   * Removes a custom HTTP breakpoint.
   *
   * @param {{ string: string, location: string, match: string, inverse: string, ignorecase: string }} args - HTTP Breakpoint properties.
   * @returns {Promise}
   */
  removeHttpBreakpoint({ string, location, match, inverse, ignorecase }) {
    return this.api.request('/break/action/removeHttpBreakpoint', { string, location, match, inverse, ignorecase });
  }
}

module.exports = Break;
