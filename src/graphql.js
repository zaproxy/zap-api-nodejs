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
function Graphql (clientApi) {
  this.api = clientApi
}

/**
 * Returns how arguments are currently specified.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionArgsType = function () {
  return this.api.request('/graphql/view/optionArgsType/')
}

/**
 * Returns whether or not lenient maximum query generation depth is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionLenientMaxQueryDepthEnabled = function () {
  return this.api.request('/graphql/view/optionLenientMaxQueryDepthEnabled/')
}

/**
 * Returns the current maximum additional query generation depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionMaxAdditionalQueryDepth = function () {
  return this.api.request('/graphql/view/optionMaxAdditionalQueryDepth/')
}

/**
 * Returns the current maximum arguments generation depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionMaxArgsDepth = function () {
  return this.api.request('/graphql/view/optionMaxArgsDepth/')
}

/**
 * Returns the current maximum query generation depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionMaxQueryDepth = function () {
  return this.api.request('/graphql/view/optionMaxQueryDepth/')
}

/**
 * Returns whether or not optional arguments are currently specified.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionOptionalArgsEnabled = function () {
  return this.api.request('/graphql/view/optionOptionalArgsEnabled/')
}

/**
 * Returns whether the query generator is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionQueryGenEnabled = function () {
  return this.api.request('/graphql/view/optionQueryGenEnabled/')
}

/**
 * Returns the current level for which a single query is generated.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionQuerySplitType = function () {
  return this.api.request('/graphql/view/optionQuerySplitType/')
}

/**
 * Returns the current request method.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionRequestMethod = function () {
  return this.api.request('/graphql/view/optionRequestMethod/')
}

/**
 * Imports a GraphQL Schema from a File.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} endurl - The Endpoint URL.
 * @param {string} file - The File That Contains the GraphQL Schema.
 **/
Graphql.prototype.importFile = function (args) {
  return this.api.request('/graphql/action/importFile/', { endurl: args.endurl, file: args.file })
}

/**
 * Imports a GraphQL Schema from a URL.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} endurl - The Endpoint URL.
 * @param {string} url - The URL Locating the GraphQL Schema.
 **/
Graphql.prototype.importUrl = function (args) {
  const params = { endurl: args.endurl }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  return this.api.request('/graphql/action/importUrl/', params)
}

/**
 * Sets how arguments are specified.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string - Can be "INLINE", "VARIABLES", or "BOTH".
 **/
Graphql.prototype.setOptionArgsType = function (args) {
  return this.api.request('/graphql/action/setOptionArgsType/', { String: args.string })
}

/**
 * Sets the level for which a single query is generated.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string - Can be "LEAF", "ROOT_FIELD", or "OPERATION".
 **/
Graphql.prototype.setOptionQuerySplitType = function (args) {
  return this.api.request('/graphql/action/setOptionQuerySplitType/', { String: args.string })
}

/**
 * Sets the request method.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} string - Can be "POST_JSON", "POST_GRAPHQL", or "GET".
 **/
Graphql.prototype.setOptionRequestMethod = function (args) {
  return this.api.request('/graphql/action/setOptionRequestMethod/', { String: args.string })
}

/**
 * Sets whether or not Maximum Query Depth is enforced leniently.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool - Enforce Leniently (true or false).
 **/
Graphql.prototype.setOptionLenientMaxQueryDepthEnabled = function (args) {
  return this.api.request('/graphql/action/setOptionLenientMaxQueryDepthEnabled/', { Boolean: args.bool })
}

/**
 * Sets the maximum additional query generation depth (used if enforced leniently).
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The Maximum Additional Depth.
 **/
Graphql.prototype.setOptionMaxAdditionalQueryDepth = function (args) {
  return this.api.request('/graphql/action/setOptionMaxAdditionalQueryDepth/', { Integer: args.integer })
}

/**
 * Sets the maximum arguments generation depth.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The Maximum Depth.
 **/
Graphql.prototype.setOptionMaxArgsDepth = function (args) {
  return this.api.request('/graphql/action/setOptionMaxArgsDepth/', { Integer: args.integer })
}

/**
 * Sets the maximum query generation depth.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} integer - The Maximum Depth.
 **/
Graphql.prototype.setOptionMaxQueryDepth = function (args) {
  return this.api.request('/graphql/action/setOptionMaxQueryDepth/', { Integer: args.integer })
}

/**
 * Sets whether or not Optional Arguments should be specified.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool - Specify Optional Arguments (true or false).
 **/
Graphql.prototype.setOptionOptionalArgsEnabled = function (args) {
  return this.api.request('/graphql/action/setOptionOptionalArgsEnabled/', { Boolean: args.bool })
}

/**
 * Sets whether the query generator is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} bool - Enable query generation (true or false).
 **/
Graphql.prototype.setOptionQueryGenEnabled = function (args) {
  return this.api.request('/graphql/action/setOptionQueryGenEnabled/', { Boolean: args.bool })
}

module.exports = Graphql
