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

class Graphql {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Returns how arguments are currently specified.
   * @returns {Promise<any>} A promise resolving with the current argument specification.
   */
  optionArgsType = () =>
    this.api.request('/graphql/view/optionArgsType');

  /**
   * Returns whether lenient maximum query generation depth is enabled.
   * @returns {Promise<any>} A promise resolving with the lenient max query depth flag.
   */
  optionLenientMaxQueryDepthEnabled = () =>
    this.api.request('/graphql/view/optionLenientMaxQueryDepthEnabled');

  /**
   * Returns the current maximum additional query generation depth.
   * @returns {Promise<any>} A promise resolving with the maximum additional query depth.
   */
  optionMaxAdditionalQueryDepth = () =>
    this.api.request('/graphql/view/optionMaxAdditionalQueryDepth');

  /**
   * Returns the current maximum arguments generation depth.
   * @returns {Promise<any>} A promise resolving with the maximum arguments depth.
   */
  optionMaxArgsDepth = () =>
    this.api.request('/graphql/view/optionMaxArgsDepth');

  /**
   * Returns the current maximum query generation depth.
   * @returns {Promise<any>} A promise resolving with the maximum query depth.
   */
  optionMaxQueryDepth = () =>
    this.api.request('/graphql/view/optionMaxQueryDepth');

  /**
   * Returns whether optional arguments are enabled.
   * @returns {Promise<any>} A promise resolving with the optional arguments flag.
   */
  optionOptionalArgsEnabled = () =>
    this.api.request('/graphql/view/optionOptionalArgsEnabled');

  /**
   * Returns the current query split type.
   * @returns {Promise<any>} A promise resolving with the query split type.
   */
  optionQuerySplitType = () =>
    this.api.request('/graphql/view/optionQuerySplitType');

  /**
   * Returns the current request method.
   * @returns {Promise<any>} A promise resolving with the request method.
   */
  optionRequestMethod = () =>
    this.api.request('/graphql/view/optionRequestMethod');

  /**
   * Imports a GraphQL schema from a file.
   * @param {{ endurl: string, file: string }} args - Object containing the endpoint URL and file path.
   * @returns {Promise<any>} A promise resolving with the import result.
   */
  importFile = ({ endurl, file }) =>
    this.api.request('/graphql/action/importFile', { endurl, file });

  /**
   * Imports a GraphQL schema from a URL.
   * @param {{ endurl: string, url?: string }} args - Object containing the endpoint URL and (optionally) the schema URL.
   * @returns {Promise<any>} A promise resolving with the import result.
   */
  importUrl = ({ endurl, url }) => {
    const params = { endurl };
    if (url) params.url = url;
    return this.api.request('/graphql/action/importUrl', params);
  };

  /**
   * Sets how arguments are specified.
   * @param {{ string: string }} args - Object containing the argument type ("INLINE", "VARIABLES", or "BOTH").
   * @returns {Promise<any>} A promise resolving when the option is set.
   */
  setOptionArgsType = ({ string }) =>
    this.api.request('/graphql/action/setOptionArgsType', { String: string });

  /**
   * Sets the level for which a single query is generated.
   * @param {{ string: string }} args - Object containing the query split type ("LEAF", "ROOT_FIELD", or "OPERATION").
   * @returns {Promise<any>} A promise resolving when the option is set.
   */
  setOptionQuerySplitType = ({ string }) =>
    this.api.request('/graphql/action/setOptionQuerySplitType', { String: string });

  /**
   * Sets the request method.
   * @param {{ string: string }} args - Object containing the request method ("POST_JSON", "POST_GRAPHQL", or "GET").
   * @returns {Promise<any>} A promise resolving when the option is set.
   */
  setOptionRequestMethod = ({ string }) =>
    this.api.request('/graphql/action/setOptionRequestMethod', { String: string });

  /**
   * Sets whether lenient maximum query generation depth is enabled.
   * @param {{ bool: string }} args - Object containing the boolean flag ("true" or "false").
   * @returns {Promise<any>} A promise resolving when the option is set.
   */
  setOptionLenientMaxQueryDepthEnabled = ({ bool }) =>
    this.api.request('/graphql/action/setOptionLenientMaxQueryDepthEnabled', { Boolean: bool });

  /**
   * Sets the maximum additional query generation depth.
   * @param {{ integer: string }} args - Object containing the maximum additional depth.
   * @returns {Promise<any>} A promise resolving when the option is set.
   */
  setOptionMaxAdditionalQueryDepth = ({ integer }) =>
    this.api.request('/graphql/action/setOptionMaxAdditionalQueryDepth', { Integer: integer });

  /**
   * Sets the maximum arguments generation depth.
   * @param {{ integer: string }} args - Object containing the maximum arguments depth.
   * @returns {Promise<any>} A promise resolving when the option is set.
   */
  setOptionMaxArgsDepth = ({ integer }) =>
    this.api.request('/graphql/action/setOptionMaxArgsDepth', { Integer: integer });

  /**
   * Sets the maximum query generation depth.
   * @param {{ integer: string }} args - Object containing the maximum query depth.
   * @returns {Promise<any>} A promise resolving when the option is set.
   */
  setOptionMaxQueryDepth = ({ integer }) =>
    this.api.request('/graphql/action/setOptionMaxQueryDepth', { Integer: integer });

  /**
   * Sets whether optional arguments are enabled.
   * @param {{ bool: string }} args - Object containing the boolean flag ("true" or "false").
   * @returns {Promise<any>} A promise resolving when the option is set.
   */
  setOptionOptionalArgsEnabled = ({ bool }) =>
    this.api.request('/graphql/action/setOptionOptionalArgsEnabled', { Boolean: bool });
}

module.exports = Graphql;
