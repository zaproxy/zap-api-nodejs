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
function Alert(clientApi) {
  this.api = clientApi;
}

/**
 * Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method
 **/
Alert.prototype.alert = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/alert/view/alert/', {'id': id}, callback);
    return;
  }
  return this.api.requestPromise('/alert/view/alert/', {'id': id});
};

/**
 * Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts
 **/
Alert.prototype.alerts = function (baseurl, start, count, riskid, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (start && start !== null) {
    params['start'] = start;
  }
  if (count && count !== null) {
    params['count'] = count;
  }
  if (riskid && riskid !== null) {
    params['riskId'] = riskid;
  }
  if (typeof callback === 'function') {
    this.api.request('/alert/view/alerts/', params, callback);
    return;
  }
  return this.api.requestPromise('/alert/view/alerts/', params);
};

/**
 * Gets number of alerts grouped by each risk level, optionally filtering by URL
 **/
Alert.prototype.alertsSummary = function (baseurl, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (typeof callback === 'function') {
    this.api.request('/alert/view/alertsSummary/', params, callback);
    return;
  }
  return this.api.requestPromise('/alert/view/alertsSummary/', params);
};

/**
 * Gets the number of alerts, optionally filtering by URL or riskId
 **/
Alert.prototype.numberOfAlerts = function (baseurl, riskid, callback) {
  const params = {};
  if (baseurl && baseurl !== null) {
    params['baseurl'] = baseurl;
  }
  if (riskid && riskid !== null) {
    params['riskId'] = riskid;
  }
  if (typeof callback === 'function') {
    this.api.request('/alert/view/numberOfAlerts/', params, callback);
    return;
  }
  return this.api.requestPromise('/alert/view/numberOfAlerts/', params);
};

/**
 * Gets a summary of the alerts, optionally filtered by a 'url'. If 'recurse' is true then all alerts that apply to urls that start with the specified 'url' will be returned, otherwise only those on exactly the same 'url' (ignoring url parameters)
 **/
Alert.prototype.alertsByRisk = function (url, recurse, callback) {
  const params = {};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (recurse && recurse !== null) {
    params['recurse'] = recurse;
  }
  if (typeof callback === 'function') {
    this.api.request('/alert/view/alertsByRisk/', params, callback);
    return;
  }
  return this.api.requestPromise('/alert/view/alertsByRisk/', params);
};

/**
 * Gets a count of the alerts, optionally filtered as per alertsPerRisk
 **/
Alert.prototype.alertCountsByRisk = function (url, recurse, callback) {
  const params = {};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (recurse && recurse !== null) {
    params['recurse'] = recurse;
  }
  if (typeof callback === 'function') {
    this.api.request('/alert/view/alertCountsByRisk/', params, callback);
    return;
  }
  return this.api.requestPromise('/alert/view/alertCountsByRisk/', params);
};

/**
 * Deletes all alerts of the current session.
 **/
Alert.prototype.deleteAllAlerts = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/alert/action/deleteAllAlerts/', callback);
    return;
  }
  return this.api.requestPromise('/alert/action/deleteAllAlerts/');
};

/**
 * Deletes the alert with the given ID. 
 **/
Alert.prototype.deleteAlert = function (id, callback) {
  if (typeof callback === 'function') {
    this.api.request('/alert/action/deleteAlert/', {'id': id}, callback);
    return;
  }
  return this.api.requestPromise('/alert/action/deleteAlert/', {'id': id});
};

/**
 * Update the confidence of the alerts.
 **/
Alert.prototype.updateAlertsConfidence = function (ids, confidenceid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/alert/action/updateAlertsConfidence/', {'ids': ids, 'confidenceId': confidenceid}, callback);
    return;
  }
  return this.api.requestPromise('/alert/action/updateAlertsConfidence/', {'ids': ids, 'confidenceId': confidenceid});
};

/**
 * Update the risk of the alerts.
 **/
Alert.prototype.updateAlertsRisk = function (ids, riskid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/alert/action/updateAlertsRisk/', {'ids': ids, 'riskId': riskid}, callback);
    return;
  }
  return this.api.requestPromise('/alert/action/updateAlertsRisk/', {'ids': ids, 'riskId': riskid});
};

/**
 * Update the alert with the given ID, with the provided details.
 **/
Alert.prototype.updateAlert = function (id, name, riskid, confidenceid, description, param, attack, otherinfo, solution, references, evidence, cweid, wascid, callback) {
  const params = {'id': id, 'name': name, 'riskId': riskid, 'confidenceId': confidenceid, 'description': description};
  if (param && param !== null) {
    params['param'] = param;
  }
  if (attack && attack !== null) {
    params['attack'] = attack;
  }
  if (otherinfo && otherinfo !== null) {
    params['otherInfo'] = otherinfo;
  }
  if (solution && solution !== null) {
    params['solution'] = solution;
  }
  if (references && references !== null) {
    params['references'] = references;
  }
  if (evidence && evidence !== null) {
    params['evidence'] = evidence;
  }
  if (cweid && cweid !== null) {
    params['cweId'] = cweid;
  }
  if (wascid && wascid !== null) {
    params['wascId'] = wascid;
  }
  if (typeof callback === 'function') {
    this.api.request('/alert/action/updateAlert/', params, callback);
    return;
  }
  return this.api.requestPromise('/alert/action/updateAlert/', params);
};

/**
 * Add an alert associated with the given message ID, with the provided details. (The ID of the created alert is returned.)
 **/
Alert.prototype.addAlert = function (messageid, name, riskid, confidenceid, description, param, attack, otherinfo, solution, references, evidence, cweid, wascid, callback) {
  const params = {'messageId': messageid, 'name': name, 'riskId': riskid, 'confidenceId': confidenceid, 'description': description};
  if (param && param !== null) {
    params['param'] = param;
  }
  if (attack && attack !== null) {
    params['attack'] = attack;
  }
  if (otherinfo && otherinfo !== null) {
    params['otherInfo'] = otherinfo;
  }
  if (solution && solution !== null) {
    params['solution'] = solution;
  }
  if (references && references !== null) {
    params['references'] = references;
  }
  if (evidence && evidence !== null) {
    params['evidence'] = evidence;
  }
  if (cweid && cweid !== null) {
    params['cweId'] = cweid;
  }
  if (wascid && wascid !== null) {
    params['wascId'] = wascid;
  }
  if (typeof callback === 'function') {
    this.api.request('/alert/action/addAlert/', params, callback);
    return;
  }
  return this.api.requestPromise('/alert/action/addAlert/', params);
};

module.exports = Alert;
