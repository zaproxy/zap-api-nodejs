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
function Custompayloads (clientApi) {
  this.api = clientApi
}

/**
 * Lists all available categories.
 * This component is optional and therefore the API will only work if it is installed
 **/
Custompayloads.prototype.customPayloadsCategories = function () {
  return this.api.request('/custompayloads/view/customPayloadsCategories/')
}

/**
 * Lists all the payloads currently loaded (category, payload, enabled state). Optionally filtered by category.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} category - The category for which the payloads should be displayed.
 **/
Custompayloads.prototype.customPayloads = function (args) {
  const params = { }
  if (args.category && args.category !== null) {
    params.category = args.category
  }
  return this.api.request('/custompayloads/view/customPayloads/', params)
}

/**
 * Disables payloads for a given category.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} category - The category for which the payloads should be disabled (leave empty for all).
 **/
Custompayloads.prototype.disableCustomPayloads = function (args) {
  const params = { }
  if (args.category && args.category !== null) {
    params.category = args.category
  }
  return this.api.request('/custompayloads/action/disableCustomPayloads/', params)
}

/**
 * Enables payloads for a given category.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} category - The category for which the payloads should be enabled (leave empty for all).
 **/
Custompayloads.prototype.enableCustomPayloads = function (args) {
  const params = { }
  if (args.category && args.category !== null) {
    params.category = args.category
  }
  return this.api.request('/custompayloads/action/enableCustomPayloads/', params)
}

/**
 * Removes a payload.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} category - The category of the payload being removed.
 * @param {string} payload - The payload being removed.
 **/
Custompayloads.prototype.removeCustomPayload = function (args) {
  const params = { category: args.category }
  if (args.payload && args.payload !== null) {
    params.payload = args.payload
  }
  return this.api.request('/custompayloads/action/removeCustomPayload/', params)
}

/**
 * Adds a new payload.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} category - The category for the new payload.
 * @param {string} payload - The payload to be added.
 **/
Custompayloads.prototype.addCustomPayload = function (args) {
  const params = { category: args.category }
  if (args.payload && args.payload !== null) {
    params.payload = args.payload
  }
  return this.api.request('/custompayloads/action/addCustomPayload/', params)
}

/**
 * Enables a given payload.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} category - The category for the payload being enabled.
 * @param {string} payload - The payload being enabled.
 **/
Custompayloads.prototype.enableCustomPayload = function (args) {
  const params = { category: args.category }
  if (args.payload && args.payload !== null) {
    params.payload = args.payload
  }
  return this.api.request('/custompayloads/action/enableCustomPayload/', params)
}

/**
 * Disables a given payload.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} category - The category for the payload being disabled.
 * @param {string} payload - The payload being disabled.
 **/
Custompayloads.prototype.disableCustomPayload = function (args) {
  const params = { category: args.category }
  if (args.payload && args.payload !== null) {
    params.payload = args.payload
  }
  return this.api.request('/custompayloads/action/disableCustomPayload/', params)
}

module.exports = Custompayloads
