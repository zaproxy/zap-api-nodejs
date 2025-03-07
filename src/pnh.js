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

class Pnh {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Sends a monitor message.
   * @param {{ id: string, message: string }} args - Object containing the monitor ID and message.
   * @returns {Promise<any>} A promise resolving with the response.
   */
  monitor = ({ id, message }) =>
    this.api.request('/pnh/action/monitor', { id, message });

  /**
   * Sends an oracle command for the specified monitor.
   * @param {{ id: string }} args - Object containing the monitor ID.
   * @returns {Promise<any>} A promise resolving with the response.
   */
  oracle = ({ id }) =>
    this.api.request('/pnh/action/oracle', { id });

  /**
   * Starts monitoring for the specified URL.
   * @param {{ url: string }} args - Object containing the URL.
   * @returns {Promise<any>} A promise resolving with the response.
   */
  startMonitoring = ({ url }) =>
    this.api.request('/pnh/action/startMonitoring', { url });

  /**
   * Stops monitoring for the specified monitor.
   * @param {{ id: string }} args - Object containing the monitor ID.
   * @returns {Promise<any>} A promise resolving with the response.
   */
  stopMonitoring = ({ id }) =>
    this.api.request('/pnh/action/stopMonitoring', { id });

  /**
   * Retrieves Pnh data.
   * @returns {Promise<any>} A promise resolving with the Pnh data.
   */
  pnh = () =>
    this.api.request('/pnh/other/pnh/');

  /**
   * Retrieves the manifest.
   * @returns {Promise<any>} A promise resolving with the manifest data.
   */
  manifest = () =>
    this.api.request('/pnh/other/manifest/');

  /**
   * Retrieves service data.
   * @returns {Promise<any>} A promise resolving with the service data.
   */
  service = () =>
    this.api.request('/pnh/other/service/');

  /**
   * Retrieves the Firefox XPI file for Pnh.
   * @returns {Promise<any>} A promise resolving with the XPI file data.
   */
  fxPnhXpi = () =>
    this.api.request('/pnh/other/fx_pnh.xpi/');
}

module.exports = Pnh;
