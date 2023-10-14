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
function Alert (clientApi) {
  this.api = clientApi
}

/**
 * Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method
 * @param {string} id
 **/
Alert.prototype.alert = function (args) {
  return this.api.request('/alert/view/alert/', { id: args.id })
}

/**
 * Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts
 * @param {string} baseurl - The highest URL in the Sites tree under which alerts should be included.
 * @param {string} start
 * @param {string} count
 * @param {string} riskid
 * @param {string} contextname - Optionally, the Context name which the Alerts' URLs are associated with.
 **/
Alert.prototype.alerts = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  if (args.start && args.start !== null) {
    params.start = args.start
  }
  if (args.count && args.count !== null) {
    params.count = args.count
  }
  if (args.riskid && args.riskid !== null) {
    params.riskId = args.riskid
  }
  if (args.contextname && args.contextname !== null) {
    params.contextName = args.contextname
  }
  return this.api.request('/alert/view/alerts/', params)
}

/**
 * Gets number of alerts grouped by each risk level, optionally filtering by URL
 * @param {string} baseurl - The highest URL in the Sites tree under which alerts should be included.
 **/
Alert.prototype.alertsSummary = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  return this.api.request('/alert/view/alertsSummary/', params)
}

/**
 * Gets the number of alerts, optionally filtering by URL or riskId
 * @param {string} baseurl - The highest URL in the Sites tree under which alerts should be included.
 * @param {string} riskid
 **/
Alert.prototype.numberOfAlerts = function (args) {
  const params = { }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  if (args.riskid && args.riskid !== null) {
    params.riskId = args.riskid
  }
  return this.api.request('/alert/view/numberOfAlerts/', params)
}

/**
 * Gets a summary of the alerts, optionally filtered by a 'url'. If 'recurse' is true then all alerts that apply to urls that start with the specified 'url' will be returned, otherwise only those on exactly the same 'url' (ignoring url parameters)
 * @param {string} url
 * @param {string} recurse
 **/
Alert.prototype.alertsByRisk = function (args) {
  const params = { }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.recurse && args.recurse !== null) {
    params.recurse = args.recurse
  }
  return this.api.request('/alert/view/alertsByRisk/', params)
}

/**
 * Gets a count of the alerts, optionally filtered as per alertsPerRisk
 * @param {string} url
 * @param {string} recurse
 **/
Alert.prototype.alertCountsByRisk = function (args) {
  const params = { }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.recurse && args.recurse !== null) {
    params.recurse = args.recurse
  }
  return this.api.request('/alert/view/alertCountsByRisk/', params)
}

/**
 * Deletes all alerts of the current session.
 **/
Alert.prototype.deleteAllAlerts = function () {
  return this.api.request('/alert/action/deleteAllAlerts/')
}

/**
 * Deletes all the alerts optionally filtered by URL which fall within the Context with the provided name, risk, or base URL.
 * @param {string} contextname - The name of the Context for which the alerts should be deleted.
 * @param {string} baseurl - The highest URL in the Sites tree under which alerts should be deleted.
 * @param {string} riskid - The numeric risk representation ('0 - Informational' through '3 - High').
 **/
Alert.prototype.deleteAlerts = function (args) {
  const params = { }
  if (args.contextname && args.contextname !== null) {
    params.contextName = args.contextname
  }
  if (args.baseurl && args.baseurl !== null) {
    params.baseurl = args.baseurl
  }
  if (args.riskid && args.riskid !== null) {
    params.riskId = args.riskid
  }
  return this.api.request('/alert/action/deleteAlerts/', params)
}

/**
 * Deletes the alert with the given ID.
 * @param {string} id
 **/
Alert.prototype.deleteAlert = function (args) {
  return this.api.request('/alert/action/deleteAlert/', { id: args.id })
}

/**
 * Update the confidence of the alerts.
 * @param {string} ids - The IDs of the alerts to update (comma separated values).
 * @param {string} confidenceid - The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]).
 **/
Alert.prototype.updateAlertsConfidence = function (args) {
  return this.api.request('/alert/action/updateAlertsConfidence/', { ids: args.ids, confidenceId: args.confidenceid })
}

/**
 * Update the risk of the alerts.
 * @param {string} ids - The IDs of the alerts to update (comma separated values).
 * @param {string} riskid - The numeric risk representation ('0 - Informational' through '3 - High').
 **/
Alert.prototype.updateAlertsRisk = function (args) {
  return this.api.request('/alert/action/updateAlertsRisk/', { ids: args.ids, riskId: args.riskid })
}

/**
 * Update the alert with the given ID, with the provided details.
 * @param {string} id - The ID of the alert to update.
 * @param {string} name - The name of the alert.
 * @param {string} riskid - The numeric risk representation ('0 - Informational' through '3 - High').
 * @param {string} confidenceid - The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]).
 * @param {string} description - The description to be set to the alert.
 * @param {string} param - The name of the parameter applicable to the alert.
 * @param {string} attack - The attack (ex: injected string) used by the scan rule.
 * @param {string} otherinfo - Other information about the alert or test.
 * @param {string} solution - The solution for the alert.
 * @param {string} references - The reference details for the alert.
 * @param {string} evidence - The evidence associated with the alert.
 * @param {string} cweid - The CWE identifier associated with the alert.
 * @param {string} wascid - The WASC identifier associated with the alert.
 **/
Alert.prototype.updateAlert = function (args) {
  const params = { id: args.id, name: args.name, riskId: args.riskid, confidenceId: args.confidenceid, description: args.description }
  if (args.param && args.param !== null) {
    params.param = args.param
  }
  if (args.attack && args.attack !== null) {
    params.attack = args.attack
  }
  if (args.otherinfo && args.otherinfo !== null) {
    params.otherInfo = args.otherinfo
  }
  if (args.solution && args.solution !== null) {
    params.solution = args.solution
  }
  if (args.references && args.references !== null) {
    params.references = args.references
  }
  if (args.evidence && args.evidence !== null) {
    params.evidence = args.evidence
  }
  if (args.cweid && args.cweid !== null) {
    params.cweId = args.cweid
  }
  if (args.wascid && args.wascid !== null) {
    params.wascId = args.wascid
  }
  return this.api.request('/alert/action/updateAlert/', params)
}

/**
 * Add an alert associated with the given message ID, with the provided details. (The ID of the created alert is returned.)
 * @param {string} messageid - The ID of the message to which the alert should be associated.
 * @param {string} name - The name of the alert.
 * @param {string} riskid - The numeric risk representation ('0 - Informational' through '3 - High').
 * @param {string} confidenceid - The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]).
 * @param {string} description - The description to be set to the alert.
 * @param {string} param - The name of the parameter applicable to the alert.
 * @param {string} attack - The attack (ex: injected string) used by the scan rule.
 * @param {string} otherinfo - Other information about the alert or test.
 * @param {string} solution - The solution for the alert.
 * @param {string} references - The reference details for the alert.
 * @param {string} evidence - The evidence associated with the alert.
 * @param {string} cweid - The CWE identifier associated with the alert.
 * @param {string} wascid - The WASC identifier associated with the alert.
 **/
Alert.prototype.addAlert = function (args) {
  const params = { messageId: args.messageid, name: args.name, riskId: args.riskid, confidenceId: args.confidenceid, description: args.description }
  if (args.param && args.param !== null) {
    params.param = args.param
  }
  if (args.attack && args.attack !== null) {
    params.attack = args.attack
  }
  if (args.otherinfo && args.otherinfo !== null) {
    params.otherInfo = args.otherinfo
  }
  if (args.solution && args.solution !== null) {
    params.solution = args.solution
  }
  if (args.references && args.references !== null) {
    params.references = args.references
  }
  if (args.evidence && args.evidence !== null) {
    params.evidence = args.evidence
  }
  if (args.cweid && args.cweid !== null) {
    params.cweId = args.cweid
  }
  if (args.wascid && args.wascid !== null) {
    params.wascId = args.wascid
  }
  return this.api.request('/alert/action/addAlert/', params)
}

module.exports = Alert
