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

class Reveal {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Retrieves the current reveal setting (i.e. whether hidden fields are shown and disabled fields enabled).
   * This component is optional and will only work if it is installed.
   * @returns {Promise<any>} A promise resolving with the reveal state.
   */
  reveal = () => this.api.request('/reveal/view/reveal');

  /**
   * Sets whether hidden fields should be shown and disabled fields enabled.
   * This component is optional and will only work if it is installed.
   * @param {{ reveal: string }} args - Object containing:
   *   - reveal: The reveal setting (e.g. "true" or "false").
   * @returns {Promise<any>} A promise resolving when the setting is applied.
   */
  setReveal = ({ reveal }) =>
    this.api.request('/reveal/action/setReveal', { reveal });
}

module.exports = Reveal;
