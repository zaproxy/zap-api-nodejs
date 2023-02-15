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
function Reveal(clientApi) {
  this.api = clientApi;
}

/**
 * Tells if shows hidden fields and enables disabled fields
 * This component is optional and therefore the API will only work if it is installed
 **/
Reveal.prototype.reveal = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/reveal/view/reveal/', callback);
    return;
  }
  return this.api.requestPromise('/reveal/view/reveal/');
};

/**
 * Sets if shows hidden fields and enables disabled fields
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} reveal
 **/
Reveal.prototype.setReveal = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/reveal/action/setReveal/', {'reveal': args.reveal}, callback);
    return;
  }
  return this.api.requestPromise('/reveal/action/setReveal/', {'reveal': args.reveal});
};

module.exports = Reveal;
