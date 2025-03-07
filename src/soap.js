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

class Soap {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Imports a WSDL definition from a local file.
   * This component is optional and will only work if it is installed.
   *
   * @param {{ file: string }} args - Object containing:
   *   - file: The file path of the WSDL definition.
   * @returns {Promise<any>} A promise resolving with the result.
   */
  importFile = ({ file }) =>
    this.api.request('/soap/action/importFile', { file });

  /**
   * Imports a WSDL definition from a URL.
   * This component is optional and will only work if it is installed.
   *
   * @param {{ url: string }} args - Object containing:
   *   - url: The URL locating the WSDL definition.
   * @returns {Promise<any>} A promise resolving with the result.
   */
  importUrl = ({ url }) =>
    this.api.request('/soap/action/importUrl', { url });
}

module.exports = Soap;
