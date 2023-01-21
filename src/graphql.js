/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2022 the ZAP development team
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
function Graphql(clientApi) {
  this.api = clientApi;
}

/**
 * Returns how arguments are currently specified.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionArgsType = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/view/optionArgsType/', callback);
    return;
  }
  return this.api.requestPromise('/graphql/view/optionArgsType/');
};

/**
 * Returns whether or not lenient maximum query generation depth is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionLenientMaxQueryDepthEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/view/optionLenientMaxQueryDepthEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/graphql/view/optionLenientMaxQueryDepthEnabled/');
};

/**
 * Returns the current maximum additional query generation depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionMaxAdditionalQueryDepth = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/view/optionMaxAdditionalQueryDepth/', callback);
    return;
  }
  return this.api.requestPromise('/graphql/view/optionMaxAdditionalQueryDepth/');
};

/**
 * Returns the current maximum arguments generation depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionMaxArgsDepth = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/view/optionMaxArgsDepth/', callback);
    return;
  }
  return this.api.requestPromise('/graphql/view/optionMaxArgsDepth/');
};

/**
 * Returns the current maximum query generation depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionMaxQueryDepth = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/view/optionMaxQueryDepth/', callback);
    return;
  }
  return this.api.requestPromise('/graphql/view/optionMaxQueryDepth/');
};

/**
 * Returns whether or not optional arguments are currently specified.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionOptionalArgsEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/view/optionOptionalArgsEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/graphql/view/optionOptionalArgsEnabled/');
};

/**
 * Returns the current level for which a single query is generated.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionQuerySplitType = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/view/optionQuerySplitType/', callback);
    return;
  }
  return this.api.requestPromise('/graphql/view/optionQuerySplitType/');
};

/**
 * Returns the current request method.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.optionRequestMethod = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/view/optionRequestMethod/', callback);
    return;
  }
  return this.api.requestPromise('/graphql/view/optionRequestMethod/');
};

/**
 * Imports a GraphQL Schema from a File.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.importFile = function (endurl, file, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/importFile/', {'endurl': endurl, 'file': file}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/importFile/', {'endurl': endurl, 'file': file});
};

/**
 * Imports a GraphQL Schema from a URL.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.importUrl = function (endurl, url, callback) {
  const params = {'endurl': endurl};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/importUrl/', params, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/importUrl/', params);
};

/**
 * Sets how arguments are specified.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.setOptionArgsType = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/setOptionArgsType/', {'String': string}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/setOptionArgsType/', {'String': string});
};

/**
 * Sets the level for which a single query is generated.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.setOptionQuerySplitType = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/setOptionQuerySplitType/', {'String': string}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/setOptionQuerySplitType/', {'String': string});
};

/**
 * Sets the request method.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.setOptionRequestMethod = function (string, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/setOptionRequestMethod/', {'String': string}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/setOptionRequestMethod/', {'String': string});
};

/**
 * Sets whether or not Maximum Query Depth is enforced leniently.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.setOptionLenientMaxQueryDepthEnabled = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/setOptionLenientMaxQueryDepthEnabled/', {'Boolean': bool}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/setOptionLenientMaxQueryDepthEnabled/', {'Boolean': bool});
};

/**
 * Sets the maximum additional query generation depth (used if enforced leniently).
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.setOptionMaxAdditionalQueryDepth = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/setOptionMaxAdditionalQueryDepth/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/setOptionMaxAdditionalQueryDepth/', {'Integer': integer});
};

/**
 * Sets the maximum arguments generation depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.setOptionMaxArgsDepth = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/setOptionMaxArgsDepth/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/setOptionMaxArgsDepth/', {'Integer': integer});
};

/**
 * Sets the maximum query generation depth.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.setOptionMaxQueryDepth = function (integer, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/setOptionMaxQueryDepth/', {'Integer': integer}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/setOptionMaxQueryDepth/', {'Integer': integer});
};

/**
 * Sets whether or not Optional Arguments should be specified.
 * This component is optional and therefore the API will only work if it is installed
 **/
Graphql.prototype.setOptionOptionalArgsEnabled = function (bool, callback) {
  if (typeof callback === 'function') {
    this.api.request('/graphql/action/setOptionOptionalArgsEnabled/', {'Boolean': bool}, callback);
    return;
  }
  return this.api.requestPromise('/graphql/action/setOptionOptionalArgsEnabled/', {'Boolean': bool});
};

module.exports = Graphql;
