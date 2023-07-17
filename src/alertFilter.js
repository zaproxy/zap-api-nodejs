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
function AlertFilter (clientApi) {
  this.api = clientApi
}

/**
 * Lists the alert filters of the context with the given ID.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} contextid
 **/
AlertFilter.prototype.alertFilterList = function (args) {
  return this.api.request('/alertFilter/view/alertFilterList/', { contextId: args.contextid })
}

/**
 * Lists the global alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.globalAlertFilterList = function () {
  return this.api.request('/alertFilter/view/globalAlertFilterList/')
}

/**
 * Adds a new alert filter for the context with the given ID.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} contextid
 * @param {string} ruleid
 * @param {string} newlevel
 * @param {string} url
 * @param {string} urlisregex
 * @param {string} parameter
 * @param {string} enabled
 * @param {string} parameterisregex
 * @param {string} attack
 * @param {string} attackisregex
 * @param {string} evidence
 * @param {string} evidenceisregex
 * @param {string} methods
 **/
AlertFilter.prototype.addAlertFilter = function (args) {
  const params = { contextId: args.contextid, ruleId: args.ruleid, newLevel: args.newlevel }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.urlisregex && args.urlisregex !== null) {
    params.urlIsRegex = args.urlisregex
  }
  if (args.parameter && args.parameter !== null) {
    params.parameter = args.parameter
  }
  if (args.enabled && args.enabled !== null) {
    params.enabled = args.enabled
  }
  if (args.parameterisregex && args.parameterisregex !== null) {
    params.parameterIsRegex = args.parameterisregex
  }
  if (args.attack && args.attack !== null) {
    params.attack = args.attack
  }
  if (args.attackisregex && args.attackisregex !== null) {
    params.attackIsRegex = args.attackisregex
  }
  if (args.evidence && args.evidence !== null) {
    params.evidence = args.evidence
  }
  if (args.evidenceisregex && args.evidenceisregex !== null) {
    params.evidenceIsRegex = args.evidenceisregex
  }
  if (args.methods && args.methods !== null) {
    params.methods = args.methods
  }
  return this.api.request('/alertFilter/action/addAlertFilter/', params)
}

/**
 * Removes an alert filter from the context with the given ID.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} contextid
 * @param {string} ruleid
 * @param {string} newlevel
 * @param {string} url
 * @param {string} urlisregex
 * @param {string} parameter
 * @param {string} enabled
 * @param {string} parameterisregex
 * @param {string} attack
 * @param {string} attackisregex
 * @param {string} evidence
 * @param {string} evidenceisregex
 * @param {string} methods
 **/
AlertFilter.prototype.removeAlertFilter = function (args) {
  const params = { contextId: args.contextid, ruleId: args.ruleid, newLevel: args.newlevel }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.urlisregex && args.urlisregex !== null) {
    params.urlIsRegex = args.urlisregex
  }
  if (args.parameter && args.parameter !== null) {
    params.parameter = args.parameter
  }
  if (args.enabled && args.enabled !== null) {
    params.enabled = args.enabled
  }
  if (args.parameterisregex && args.parameterisregex !== null) {
    params.parameterIsRegex = args.parameterisregex
  }
  if (args.attack && args.attack !== null) {
    params.attack = args.attack
  }
  if (args.attackisregex && args.attackisregex !== null) {
    params.attackIsRegex = args.attackisregex
  }
  if (args.evidence && args.evidence !== null) {
    params.evidence = args.evidence
  }
  if (args.evidenceisregex && args.evidenceisregex !== null) {
    params.evidenceIsRegex = args.evidenceisregex
  }
  if (args.methods && args.methods !== null) {
    params.methods = args.methods
  }
  return this.api.request('/alertFilter/action/removeAlertFilter/', params)
}

/**
 * Adds a new global alert filter.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} ruleid
 * @param {string} newlevel
 * @param {string} url
 * @param {string} urlisregex
 * @param {string} parameter
 * @param {string} enabled
 * @param {string} parameterisregex
 * @param {string} attack
 * @param {string} attackisregex
 * @param {string} evidence
 * @param {string} evidenceisregex
 * @param {string} methods
 **/
AlertFilter.prototype.addGlobalAlertFilter = function (args) {
  const params = { ruleId: args.ruleid, newLevel: args.newlevel }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.urlisregex && args.urlisregex !== null) {
    params.urlIsRegex = args.urlisregex
  }
  if (args.parameter && args.parameter !== null) {
    params.parameter = args.parameter
  }
  if (args.enabled && args.enabled !== null) {
    params.enabled = args.enabled
  }
  if (args.parameterisregex && args.parameterisregex !== null) {
    params.parameterIsRegex = args.parameterisregex
  }
  if (args.attack && args.attack !== null) {
    params.attack = args.attack
  }
  if (args.attackisregex && args.attackisregex !== null) {
    params.attackIsRegex = args.attackisregex
  }
  if (args.evidence && args.evidence !== null) {
    params.evidence = args.evidence
  }
  if (args.evidenceisregex && args.evidenceisregex !== null) {
    params.evidenceIsRegex = args.evidenceisregex
  }
  if (args.methods && args.methods !== null) {
    params.methods = args.methods
  }
  return this.api.request('/alertFilter/action/addGlobalAlertFilter/', params)
}

/**
 * Removes a global alert filter.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} ruleid
 * @param {string} newlevel
 * @param {string} url
 * @param {string} urlisregex
 * @param {string} parameter
 * @param {string} enabled
 * @param {string} parameterisregex
 * @param {string} attack
 * @param {string} attackisregex
 * @param {string} evidence
 * @param {string} evidenceisregex
 * @param {string} methods
 **/
AlertFilter.prototype.removeGlobalAlertFilter = function (args) {
  const params = { ruleId: args.ruleid, newLevel: args.newlevel }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.urlisregex && args.urlisregex !== null) {
    params.urlIsRegex = args.urlisregex
  }
  if (args.parameter && args.parameter !== null) {
    params.parameter = args.parameter
  }
  if (args.enabled && args.enabled !== null) {
    params.enabled = args.enabled
  }
  if (args.parameterisregex && args.parameterisregex !== null) {
    params.parameterIsRegex = args.parameterisregex
  }
  if (args.attack && args.attack !== null) {
    params.attack = args.attack
  }
  if (args.attackisregex && args.attackisregex !== null) {
    params.attackIsRegex = args.attackisregex
  }
  if (args.evidence && args.evidence !== null) {
    params.evidence = args.evidence
  }
  if (args.evidenceisregex && args.evidenceisregex !== null) {
    params.evidenceIsRegex = args.evidenceisregex
  }
  if (args.methods && args.methods !== null) {
    params.methods = args.methods
  }
  return this.api.request('/alertFilter/action/removeGlobalAlertFilter/', params)
}

/**
 * Applies all currently enabled Global and Context alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.applyAll = function () {
  return this.api.request('/alertFilter/action/applyAll/')
}

/**
 * Applies all currently enabled Context alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.applyContext = function () {
  return this.api.request('/alertFilter/action/applyContext/')
}

/**
 * Applies all currently enabled Global alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.applyGlobal = function () {
  return this.api.request('/alertFilter/action/applyGlobal/')
}

/**
 * Tests all currently enabled Global and Context alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.testAll = function () {
  return this.api.request('/alertFilter/action/testAll/')
}

/**
 * Tests all currently enabled Context alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.testContext = function () {
  return this.api.request('/alertFilter/action/testContext/')
}

/**
 * Tests all currently enabled Global alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.testGlobal = function () {
  return this.api.request('/alertFilter/action/testGlobal/')
}

module.exports = AlertFilter
