/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2018 the ZAP development team
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
function Context(clientApi) {
  this.api = clientApi;
}

/**
 * List context names of current session
 **/
Context.prototype.contextList = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/view/contextList/', callback);
    return;
  }
  return this.api.requestPromise('/context/view/contextList/');
};

/**
 * List excluded regexs for context
 **/
Context.prototype.excludeRegexs = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/view/excludeRegexs/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/view/excludeRegexs/', {'contextName' : contextname});
};

/**
 * List included regexs for context
 **/
Context.prototype.includeRegexs = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/view/includeRegexs/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/view/includeRegexs/', {'contextName' : contextname});
};

/**
 * List the information about the named context
 **/
Context.prototype.context = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/view/context/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/view/context/', {'contextName' : contextname});
};

/**
 * Lists the names of all built in technologies
 **/
Context.prototype.technologyList = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/view/technologyList/', callback);
    return;
  }
  return this.api.requestPromise('/context/view/technologyList/');
};

/**
 * Lists the names of all technologies included in a context
 **/
Context.prototype.includedTechnologyList = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/view/includedTechnologyList/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/view/includedTechnologyList/', {'contextName' : contextname});
};

/**
 * Lists the names of all technologies excluded from a context
 **/
Context.prototype.excludedTechnologyList = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/view/excludedTechnologyList/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/view/excludedTechnologyList/', {'contextName' : contextname});
};

/**
 * Add exclude regex to context
 **/
Context.prototype.excludeFromContext = function (contextname, regex, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/excludeFromContext/', {'contextName' : contextname, 'regex' : regex}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/excludeFromContext/', {'contextName' : contextname, 'regex' : regex});
};

/**
 * Add include regex to context
 **/
Context.prototype.includeInContext = function (contextname, regex, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/includeInContext/', {'contextName' : contextname, 'regex' : regex}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/includeInContext/', {'contextName' : contextname, 'regex' : regex});
};

/**
 * Creates a new context with the given name in the current session
 **/
Context.prototype.newContext = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/newContext/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/newContext/', {'contextName' : contextname});
};

/**
 * Removes a context in the current session
 **/
Context.prototype.removeContext = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/removeContext/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/removeContext/', {'contextName' : contextname});
};

/**
 * Exports the context with the given name to a file. If a relative file path is specified it will be resolved against the "contexts" directory in ZAP "home" dir.
 **/
Context.prototype.exportContext = function (contextname, contextfile, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/exportContext/', {'contextName' : contextname, 'contextFile' : contextfile}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/exportContext/', {'contextName' : contextname, 'contextFile' : contextfile});
};

/**
 * Imports a context from a file. If a relative file path is specified it will be resolved against the "contexts" directory in ZAP "home" dir.
 **/
Context.prototype.importContext = function (contextfile, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/importContext/', {'contextFile' : contextfile}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/importContext/', {'contextFile' : contextfile});
};

/**
 * Includes technologies with the given names, separated by a comma, to a context
 **/
Context.prototype.includeContextTechnologies = function (contextname, technologynames, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/includeContextTechnologies/', {'contextName' : contextname, 'technologyNames' : technologynames}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/includeContextTechnologies/', {'contextName' : contextname, 'technologyNames' : technologynames});
};

/**
 * Includes all built in technologies in to a context
 **/
Context.prototype.includeAllContextTechnologies = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/includeAllContextTechnologies/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/includeAllContextTechnologies/', {'contextName' : contextname});
};

/**
 * Excludes technologies with the given names, separated by a comma, from a context
 **/
Context.prototype.excludeContextTechnologies = function (contextname, technologynames, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/excludeContextTechnologies/', {'contextName' : contextname, 'technologyNames' : technologynames}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/excludeContextTechnologies/', {'contextName' : contextname, 'technologyNames' : technologynames});
};

/**
 * Excludes all built in technologies from a context
 **/
Context.prototype.excludeAllContextTechnologies = function (contextname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/excludeAllContextTechnologies/', {'contextName' : contextname}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/excludeAllContextTechnologies/', {'contextName' : contextname});
};

/**
 * Sets a context to in scope (contexts are in scope by default)
 **/
Context.prototype.setContextInScope = function (contextname, booleaninscope, callback) {
  if (typeof callback === 'function') {
    this.api.request('/context/action/setContextInScope/', {'contextName' : contextname, 'booleanInScope' : booleaninscope}, callback);
    return;
  }
  return this.api.requestPromise('/context/action/setContextInScope/', {'contextName' : contextname, 'booleanInScope' : booleaninscope});
};

module.exports = Context;
