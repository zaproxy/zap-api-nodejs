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

class Acsrf {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Lists the names of all anti-CSRF tokens.
   * @returns {Promise}
   */
  optionTokensNames = () => this.api.request('/acsrf/view/optionTokensNames');

  /**
   * Define if ZAP should detect CSRF tokens by searching for partial matches.
   * @returns {Promise}
   */
  optionPartialMatchingEnabled = () => this.api.request('/acsrf/view/optionPartialMatchingEnabled');

  /**
   * Adds an anti-CSRF token with the given name, enabled by default.
   * @param {{ tokenName: string }} args
   * @returns {Promise}
   */
  addOptionToken = ({ tokenName }) =>
    this.api.request('/acsrf/action/addOptionToken', { 'String': `${tokenName}` });

  /**
   * Removes the anti-CSRF token with the given name.
   * @param {{ tokenName: string }} args
   * @returns {Promise}
   */
  removeOptionToken = ({ tokenName }) =>
    this.api.request('/acsrf/action/removeOptionToken', { 'String': tokenName });

  /**
   * Define if ZAP should detect CSRF tokens by searching for partial matches.
   * @param {boolean} isSet
   * @returns {Promise}
   */
  setOptionPartialMatchingEnabled = isSet =>
    this.api.request('/acsrf/action/setOptionPartialMatchingEnabled', { 'Boolean': `${isSet}` });

  /**
   * Generate a form for testing lack of anti-CSRF tokens - typically invoked via ZAP.
   * @param {{ hrefId: string, actionUrl: string }} args - Defines which request will be used and the action URL.
   * @returns {Promise}
   */
  genForm = ({ hrefId, actionUrl }) =>
    this.api.request('/acsrf/other/genForm/', { hrefId, actionUrl });
}

module.exports = Acsrf;
