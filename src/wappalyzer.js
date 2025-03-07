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

class Wappalyzer {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Lists all the sites recognized by the wappalyzer addon.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the recognized sites.
   */
  listSites = () =>
    this.api.request('/wappalyzer/view/listSites');

  /**
   * Lists all sites and their associated applications (technologies).
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with sites and their technologies.
   */
  listAll = () =>
    this.api.request('/wappalyzer/view/listAll');

  /**
   * Lists all the applications (technologies) associated with a specific site.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ site: string }} args - Object containing:
   *   - site: The site URL.
   * @returns {Promise<any>} A promise resolving with the site's technologies.
   */
  listSite = ({ site }) =>
    this.api.request('/wappalyzer/view/listSite', { site });
}

module.exports = Wappalyzer;
