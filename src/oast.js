/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2025 the ZAP development team
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

class Oast {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets the service used with the active scanner, if any.
   * This component is optional and therefore the API will only work if it is installed.
   * @returns {Promise<any>} A promise that resolves with the active scan service.
   */
  getActiveScanService = () =>
    this.api.request('/oast/view/getActiveScanService/');

  /**
   * Gets all the services.
   * This component is optional and therefore the API will only work if it is installed.
   * @returns {Promise<any>} A promise that resolves with all the services.
   */
  getServices = () =>
    this.api.request('/oast/view/getServices/');

  /**
   * Gets the BOAST options.
   * This component is optional and therefore the API will only work if it is installed.
   * @returns {Promise<any>} A promise that resolves with the BOAST options.
   */
  getBoastOptions = () =>
    this.api.request('/oast/view/getBoastOptions/');

  /**
   * Gets the Callback options.
   * This component is optional and therefore the API will only work if it is installed.
   * @returns {Promise<any>} A promise that resolves with the callback options.
   */
  getCallbackOptions = () =>
    this.api.request('/oast/view/getCallbackOptions/');

  /**
   * Gets the Interactsh options.
   * This component is optional and therefore the API will only work if it is installed.
   * @returns {Promise<any>} A promise that resolves with the Interactsh options.
   */
  getInteractshOptions = () =>
    this.api.request('/oast/view/getInteractshOptions/');

  /**
   * Gets the number of days the OAST records will be kept for.
   * This component is optional and therefore the API will only work if it is installed.
   * @returns {Promise<any>} A promise that resolves with the number of days to keep records.
   */
  getDaysToKeepRecords = () =>
    this.api.request('/oast/view/getDaysToKeepRecords/');

  /**
   * Sets the service used with the active scanner.
   * This component is optional and therefore the API will only work if it is installed.
   * @param {{ name: string }} args - Object containing the service name.
   * @returns {Promise<any>} A promise that resolves when the active scan service is set.
   */
  setActiveScanService = ({ name }) =>
    this.api.request('/oast/action/setActiveScanService/', { name });

  /**
   * Sets the BOAST options.
   * This component is optional and therefore the API will only work if it is installed.
   * @param {{ server: string, pollinsecs: string }} args - Object containing the server URL and polling frequency.
   * @returns {Promise<any>} A promise that resolves when the BOAST options are set.
   */
  setBoastOptions = ({ server, pollinsecs }) =>
    this.api.request('/oast/action/setBoastOptions/', { server, pollInSecs: pollinsecs });

  /**
   * Sets the Callback options.
   * This component is optional and therefore the API will only work if it is installed.
   * @param {{ localaddress: string, remoteaddress: string, port: string }} args - Object containing the local address, remote address, and port.
   * @returns {Promise<any>} A promise that resolves when the callback options are set.
   */
  setCallbackOptions = ({ localaddress, remoteaddress, port }) =>
    this.api.request('/oast/action/setCallbackOptions/', { localAddress: localaddress, remoteAddress: remoteaddress, port });

  /**
   * Sets the Interactsh options.
   * This component is optional and therefore the API will only work if it is installed.
   * @param {{ server: string, pollinsecs: string, authtoken: string }} args - Object containing the server URL, polling frequency, and authentication token.
   * @returns {Promise<any>} A promise that resolves when the Interactsh options are set.
   */
  setInteractshOptions = ({ server, pollinsecs, authtoken }) =>
    this.api.request('/oast/action/setInteractshOptions/', { server, pollInSecs: pollinsecs, authToken: authtoken });

  /**
   * Sets the number of days the OAST records will be kept for.
   * This component is optional and therefore the API will only work if it is installed.
   * @param {{ days: string }} args - Object containing the number of days.
   * @returns {Promise<any>} A promise that resolves when the days to keep records is set.
   */
  setDaysToKeepRecords = ({ days }) =>
    this.api.request('/oast/action/setDaysToKeepRecords/', { days });
}

module.exports = Oast;
