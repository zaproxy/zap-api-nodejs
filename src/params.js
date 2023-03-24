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

/**
 * This file was automatically generated.
 */
function Params(clientApi) {
  this.api = clientApi;
}

/**
 * Shows the parameters for the specified site, or for all sites if the site is not specified
 * @param {string} site
 **/
Params.prototype.params = async function (args) {
  const params = { };
  if (args.site && args.site !== null) {
    params['site'] = args.site;
  }
    return await this.api.request('/params/view/params/', params)
}

module.exports = Params;
