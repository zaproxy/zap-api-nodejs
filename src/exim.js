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

class Exim {
  /**
   * Creates an instance of Exim.
   * @param {object} clientApi - The client API instance.
   */
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Imports a HAR file.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ filepath: string }} args - Object containing the file path.
   * @returns {Promise<any>} A promise that resolves with the response.
   */
  importHar = ({ filepath }) =>
    this.api.request('/exim/action/importHar', { filePath: filepath });

  /**
   * Imports URLs (one per line) from the file with the given file system path.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ filepath: string }} args - Object containing the file path.
   * @returns {Promise<any>} A promise that resolves with the response.
   */
  importUrls = ({ filepath }) =>
    this.api.request('/exim/action/importUrls', { filePath: filepath });

  /**
   * Imports previously exported ZAP messages from the specified file.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ filepath: string }} args - Object containing the file path.
   * @returns {Promise<any>} A promise that resolves with the response.
   */
  importZapLogs = ({ filepath }) =>
    this.api.request('/exim/action/importZapLogs', { filePath: filepath });

  /**
   * Imports ModSecurity2 logs from the specified file.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ filepath: string }} args - Object containing the file path.
   * @returns {Promise<any>} A promise that resolves with the response.
   */
  importModsec2Logs = ({ filepath }) =>
    this.api.request('/exim/action/importModsec2Logs', { filePath: filepath });

  /**
   * Exports the Sites Tree in YAML format.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ filepath: string }} args - Object containing the file path.
   * @returns {Promise<any>} A promise that resolves with the response.
   */
  exportSitesTree = ({ filepath }) =>
    this.api.request('/exim/action/exportSitesTree/', { filePath: filepath });

  /**
   * Prunes the Sites Tree based on a YAML file.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ filepath: string }} args - Object containing the file path.
   * @returns {Promise<any>} A promise that resolves with the response.
   */
  pruneSitesTree = ({ filepath }) =>
    this.api.request('/exim/action/pruneSitesTree/', { filePath: filepath });

  /**
   * Exports HTTP messages in HAR format, optionally filtered by URL and paginated.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ baseurl?: string, start?: string, count?: string }} [args={}] - Object containing filter parameters.
   * @returns {Promise<any>} A promise that resolves with the HAR data.
   */
  exportHar = ({ baseurl, start, count } = {}) =>
    this.api.request('/exim/other/exportHar/', { baseurl, start, count });

  /**
   * Exports HAR-formatted HTTP messages by their IDs.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ ids: string }} args - Object containing comma-separated message IDs.
   * @returns {Promise<any>} A promise that resolves with the HAR data.
   */
  exportHarById = ({ ids }) =>
    this.api.request('/exim/other/exportHarById/', { ids });

  /**
   * Sends the first HAR request entry, optionally following redirections.
   * Returns the request sent and response received (in HAR format).
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ request: string, followredirects?: string }} args - Object containing the HAR request and optional followRedirects flag.
   * @returns {Promise<any>} A promise that resolves with the HAR response.
   */
  sendHarRequest = ({ request, followredirects }) => {
    const params = { request };
    if (followredirects) params.followRedirects = followredirects;
    return this.api.request('/exim/other/sendHarRequest/', params);
  };
}

module.exports = Exim;
