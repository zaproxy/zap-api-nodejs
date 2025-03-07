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

class Revisit {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Retrieves the list of revisit entries.
   * @returns {Promise<any>} A promise resolving with the revisit list.
   */
  revisitList = () => this.api.request('/revisit/view/revisitList');

  /**
   * Activates revisit on a site.
   * @param {{ site: string, startTime: string, endTime: string }} args - Object containing:
   *   - site: The site to be revisited.
   *   - startTime: The start time for the revisit.
   *   - endTime: The end time for the revisit.
   * @returns {Promise<any>} A promise resolving with the action result.
   */
  revisitSiteOn = ({ site, startTime, endTime }) =>
    this.api.request('/revisit/action/revisitSiteOn', { site, startTime, endTime });

  /**
   * Deactivates revisit on a site.
   * @param {{ site: string }} args - Object containing:
   *   - site: The site for which revisit should be turned off.
   * @returns {Promise<any>} A promise resolving with the action result.
   */
  revisitSiteOff = ({ site }) =>
    this.api.request('/revisit/action/revisitSiteOff', { site });
}

module.exports = Revisit;
