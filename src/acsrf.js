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

'use strict'

/**
 * This file was automatically generated.
 */
function Acsrf (clientApi) {
  this.api = clientApi
}

/**
 * Lists the names of all anti-CSRF tokens
 **/
Acsrf.prototype.optionTokensNames = function () {
  return this.api.request('/acsrf/view/optionTokensNames/')
}

/**
 * Define if ZAP should detect CSRF tokens by searching for partial matches
 **/
Acsrf.prototype.optionPartialMatchingEnabled = function () {
  return this.api.request('/acsrf/view/optionPartialMatchingEnabled/')
}

/**
 * Adds an anti-CSRF token with the given name, enabled by default
 * @param {string} string
 **/
Acsrf.prototype.addOptionToken = function (args) {
  return this.api.request('/acsrf/action/addOptionToken/', { String: args.string })
}

/**
 * Removes the anti-CSRF token with the given name
 * @param {string} string
 **/
Acsrf.prototype.removeOptionToken = function (args) {
  return this.api.request('/acsrf/action/removeOptionToken/', { String: args.string })
}

/**
 * Define if ZAP should detect CSRF tokens by searching for partial matches.
 * @param {string} bool
 **/
Acsrf.prototype.setOptionPartialMatchingEnabled = function (args) {
  return this.api.request('/acsrf/action/setOptionPartialMatchingEnabled/', { Boolean: args.bool })
}

/**
 * Generate a form for testing lack of anti-CSRF tokens - typically invoked via ZAP
 * @param {string} hrefid - Define which request will be used
 * @param {string} actionurl - Define the action URL to be used in the generated form
 **/
Acsrf.prototype.genForm = function (args) {
  const params = { hrefId: args.hrefid }
  if (args.actionurl && args.actionurl !== null) {
    params.actionUrl = args.actionurl
  }
  return this.api.request('/acsrf/other/genForm/', params, 'other')
}

module.exports = Acsrf
