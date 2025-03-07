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

class Stats {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets statistics, optionally filtered by a key prefix.
   *
   * @param {{ keyPrefix?: string }} [args={}] - Object containing:
   *   - keyPrefix: (Optional) The key prefix to filter by.
   * @returns {Promise<any>} A promise resolving with the statistics.
   */
  stats = ({ keyPrefix } = {}) => {
    return this.api.request('/stats/view/stats', { keyPrefix });
  };

  /**
   * Gets all the site based statistics, optionally filtered by a key prefix.
   *
   * @param {{ keyPrefix?: string }} [args={}] - Object containing:
   *   - keyPrefix: (Optional) The key prefix to filter by.
   * @returns {Promise<any>} A promise resolving with all site statistics.
   */
  allSitesStats = ({ keyPrefix } = {}) => {
    return this.api.request('/stats/view/allSitesStats', { keyPrefix });
  };

  /**
   * Gets all the statistics for a site, optionally filtered by a key prefix.
   *
   * @param {{ site: string, keyPrefix?: string }} args - Object containing:
   *   - site: The site to get statistics for.
   *   - keyPrefix: (Optional) The key prefix to filter by.
   * @returns {Promise<any>} A promise resolving with the site statistics.
   */
  siteStats = ({ site, keyPrefix }) => {
    return this.api.request('/stats/view/siteStats', { site, keyPrefix });
  };

  /**
   * Gets the Statsd service hostname.
   *
   * @returns {Promise<any>} A promise resolving with the Statsd hostname.
   */
  optionStatsdHost = () =>
    this.api.request('/stats/view/optionStatsdHost');

  /**
   * Gets the Statsd service port.
   *
   * @returns {Promise<any>} A promise resolving with the Statsd port.
   */
  optionStatsdPort = () =>
    this.api.request('/stats/view/optionStatsdPort');

  /**
   * Gets the prefix to be applied to all stats sent to the configured Statsd service.
   *
   * @returns {Promise<any>} A promise resolving with the Statsd prefix.
   */
  optionStatsdPrefix = () =>
    this.api.request('/stats/view/optionStatsdPrefix');

  /**
   * Checks if in-memory statistics are enabled.
   *
   * @returns {Promise<any>} A promise resolving with a boolean indicating if in-memory stats are enabled.
   */
  optionInMemoryEnabled = () =>
    this.api.request('/stats/view/optionInMemoryEnabled');

  /**
   * Checks if a Statsd server has been correctly configured.
   *
   * @returns {Promise<any>} A promise resolving with a boolean indicating if Statsd is enabled.
   */
  optionStatsdEnabled = () =>
    this.api.request('/stats/view/optionStatsdEnabled');

  /**
   * Clears all of the statistics, optionally filtered by a key prefix.
   *
   * @param {{ keyPrefix?: string }} [args={}] - Object containing:
   *   - keyPrefix: (Optional) The key prefix to filter by.
   * @returns {Promise<any>} A promise resolving when statistics are cleared.
   */
  clearStats = ({ keyPrefix } = {}) => {
    return this.api.request('/stats/action/clearStats', { keyPrefix });
  };

  /**
   * Sets the Statsd service hostname.
   *
   * @param {{ string: string }} args - Object containing:
   *   - string: The hostname (empty string to stop using Statsd).
   * @returns {Promise<any>} A promise resolving when the hostname is set.
   */
  setOptionStatsdHost = ({ string }) =>
    this.api.request('/stats/action/setOptionStatsdHost', { String: string });

  /**
   * Sets the prefix to be applied to all stats sent to the configured Statsd service.
   *
   * @param {{ string: string }} args - Object containing:
   *   - string: The prefix string.
   * @returns {Promise<any>} A promise resolving when the prefix is set.
   */
  setOptionStatsdPrefix = ({ string }) =>
    this.api.request('/stats/action/setOptionStatsdPrefix', { String: string });

  /**
   * Sets whether in-memory statistics are enabled.
   *
   * @param {{ bool: boolean }} args - Object containing:
   *   - bool: True to enable in-memory statistics, false otherwise.
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setOptionInMemoryEnabled = ({ bool }) =>
    this.api.request('/stats/action/setOptionInMemoryEnabled', { Boolean: bool });

  /**
   * Sets the Statsd service port.
   *
   * @param {{ integer: number }} args - Object containing:
   *   - integer: The port number.
   * @returns {Promise<any>} A promise resolving when the port is set.
   */
  setOptionStatsdPort = ({ integer }) =>
    this.api.request('/stats/action/setOptionStatsdPort', { Integer: integer });
}

module.exports = Stats;
