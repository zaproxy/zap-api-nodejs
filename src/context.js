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
function Context (clientApi) {
  this.api = clientApi
}

/**
 * List context names of current session
 **/
Context.prototype.contextList = function () {
  return this.api.request('/context/view/contextList/')
}

/**
 * List excluded regexs for context
 * @param {string} contextname - The name of the context
 **/
Context.prototype.excludeRegexs = function (args) {
  return this.api.request('/context/view/excludeRegexs/', { contextName: args.contextname })
}

/**
 * List included regexs for context
 * @param {string} contextname - The name of the context
 **/
Context.prototype.includeRegexs = function (args) {
  return this.api.request('/context/view/includeRegexs/', { contextName: args.contextname })
}

/**
 * List the information about the named context
 * @param {string} contextname - The name of the context
 **/
Context.prototype.context = function (args) {
  return this.api.request('/context/view/context/', { contextName: args.contextname })
}

/**
 * Lists the names of all built in technologies
 **/
Context.prototype.technologyList = function () {
  return this.api.request('/context/view/technologyList/')
}

/**
 * Lists the names of all technologies included in a context
 * @param {string} contextname - The name of the context
 **/
Context.prototype.includedTechnologyList = function (args) {
  return this.api.request('/context/view/includedTechnologyList/', { contextName: args.contextname })
}

/**
 * Lists the names of all technologies excluded from a context
 * @param {string} contextname - The name of the context
 **/
Context.prototype.excludedTechnologyList = function (args) {
  return this.api.request('/context/view/excludedTechnologyList/', { contextName: args.contextname })
}

/**
 * Lists the URLs accessed through/by ZAP, that belong to the context with the given name.
 * @param {string} contextname - The name of the context
 **/
Context.prototype.urls = function (args) {
  return this.api.request('/context/view/urls/', { contextName: args.contextname })
}

/**
 * Add exclude regex to context
 * @param {string} contextname - The name of the context
 * @param {string} regex
 **/
Context.prototype.excludeFromContext = function (args) {
  return this.api.request('/context/action/excludeFromContext/', { contextName: args.contextname, regex: args.regex })
}

/**
 * Add include regex to context
 * @param {string} contextname - The name of the context
 * @param {string} regex
 **/
Context.prototype.includeInContext = function (args) {
  return this.api.request('/context/action/includeInContext/', { contextName: args.contextname, regex: args.regex })
}

/**
 * Set the regexs to include and exclude for a context, both supplied as JSON string arrays
 * @param {string} contextname - The name of the context
 * @param {string} incregexs
 * @param {string} excregexs
 **/
Context.prototype.setContextRegexs = function (args) {
  return this.api.request('/context/action/setContextRegexs/', { contextName: args.contextname, incRegexs: args.incregexs, excRegexs: args.excregexs })
}

/**
 * Set the checking strategy for a context - this defines how ZAP checks that a request is authenticated
 * @param {string} contextname - The name of the context
 * @param {string} checkingstrategy - One of EACH_RESP, EACH_REQ, EACH_REQ_RESP, POLL_URL
 * @param {string} pollurl - The URL for ZAP to poll, must be supplied if checkingStrategy = POLL_URL, otherwise ignored
 * @param {string} polldata - The POST data to supply to the pollUrl, option and only takes effect if checkingStrategy = POLL_URL
 * @param {string} pollheaders - Any additional headers that need to be added to the poll request, separated by '\n' characters, only takes effect if checkingStrategy = POLL_URL
 * @param {string} pollfrequency - An integer greater than zero, must be supplied if checkingStrategy = POLL_URL, otherwise ignored
 * @param {string} pollfrequencyunits - One of REQUESTS, SECONDS, must be supplied if checkingStrategy = POLL_URL, otherwise ignored
 **/
Context.prototype.setContextCheckingStrategy = function (args) {
  const params = { contextName: args.contextname, checkingStrategy: args.checkingstrategy }
  if (args.pollurl && args.pollurl !== null) {
    params.pollUrl = args.pollurl
  }
  if (args.polldata && args.polldata !== null) {
    params.pollData = args.polldata
  }
  if (args.pollheaders && args.pollheaders !== null) {
    params.pollHeaders = args.pollheaders
  }
  if (args.pollfrequency && args.pollfrequency !== null) {
    params.pollFrequency = args.pollfrequency
  }
  if (args.pollfrequencyunits && args.pollfrequencyunits !== null) {
    params.pollFrequencyUnits = args.pollfrequencyunits
  }
  return this.api.request('/context/action/setContextCheckingStrategy/', params)
}

/**
 * Creates a new context with the given name in the current session
 * @param {string} contextname - The name of the context
 **/
Context.prototype.newContext = function (args) {
  return this.api.request('/context/action/newContext/', { contextName: args.contextname })
}

/**
 * Removes a context in the current session
 * @param {string} contextname - The name of the context
 **/
Context.prototype.removeContext = function (args) {
  return this.api.request('/context/action/removeContext/', { contextName: args.contextname })
}

/**
 * Exports the context with the given name to a file. If a relative file path is specified it will be resolved against the "contexts" directory in ZAP "home" dir.
 * @param {string} contextname - The name of the context
 * @param {string} contextfile
 **/
Context.prototype.exportContext = function (args) {
  return this.api.request('/context/action/exportContext/', { contextName: args.contextname, contextFile: args.contextfile })
}

/**
 * Imports a context from a file. If a relative file path is specified it will be resolved against the "contexts" directory in ZAP "home" dir.
 * @param {string} contextfile
 **/
Context.prototype.importContext = function (args) {
  return this.api.request('/context/action/importContext/', { contextFile: args.contextfile })
}

/**
 * Includes technologies with the given names, separated by a comma, to a context
 * @param {string} contextname - The name of the context
 * @param {string} technologynames
 **/
Context.prototype.includeContextTechnologies = function (args) {
  return this.api.request('/context/action/includeContextTechnologies/', { contextName: args.contextname, technologyNames: args.technologynames })
}

/**
 * Includes all built in technologies in to a context
 * @param {string} contextname - The name of the context
 **/
Context.prototype.includeAllContextTechnologies = function (args) {
  return this.api.request('/context/action/includeAllContextTechnologies/', { contextName: args.contextname })
}

/**
 * Excludes technologies with the given names, separated by a comma, from a context
 * @param {string} contextname - The name of the context
 * @param {string} technologynames
 **/
Context.prototype.excludeContextTechnologies = function (args) {
  return this.api.request('/context/action/excludeContextTechnologies/', { contextName: args.contextname, technologyNames: args.technologynames })
}

/**
 * Excludes all built in technologies from a context
 * @param {string} contextname - The name of the context
 **/
Context.prototype.excludeAllContextTechnologies = function (args) {
  return this.api.request('/context/action/excludeAllContextTechnologies/', { contextName: args.contextname })
}

/**
 * Sets a context to in scope (contexts are in scope by default)
 * @param {string} contextname - The name of the context
 * @param {string} booleaninscope
 **/
Context.prototype.setContextInScope = function (args) {
  return this.api.request('/context/action/setContextInScope/', { contextName: args.contextname, booleanInScope: args.booleaninscope })
}

module.exports = Context
