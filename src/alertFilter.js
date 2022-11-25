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
function AlertFilter(clientApi) {
  this.api = clientApi;
}

/**
 * Lists the alert filters of the context with the given ID.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.alertFilterList = function (contextid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/view/alertFilterList/', {'contextId': contextid}, callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/view/alertFilterList/', {'contextId': contextid});
};

/**
 * Lists the global alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.globalAlertFilterList = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/view/globalAlertFilterList/', callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/view/globalAlertFilterList/');
};

/**
 * Adds a new alert filter for the context with the given ID. 
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.addAlertFilter = function (contextid, ruleid, newlevel, url, urlisregex, parameter, enabled, parameterisregex, attack, attackisregex, evidence, evidenceisregex, callback) {
  const params = {'contextId': contextid, 'ruleId': ruleid, 'newLevel': newlevel};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (urlisregex && urlisregex !== null) {
    params['urlIsRegex'] = urlisregex;
  }
  if (parameter && parameter !== null) {
    params['parameter'] = parameter;
  }
  if (enabled && enabled !== null) {
    params['enabled'] = enabled;
  }
  if (parameterisregex && parameterisregex !== null) {
    params['parameterIsRegex'] = parameterisregex;
  }
  if (attack && attack !== null) {
    params['attack'] = attack;
  }
  if (attackisregex && attackisregex !== null) {
    params['attackIsRegex'] = attackisregex;
  }
  if (evidence && evidence !== null) {
    params['evidence'] = evidence;
  }
  if (evidenceisregex && evidenceisregex !== null) {
    params['evidenceIsRegex'] = evidenceisregex;
  }
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/addAlertFilter/', params, callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/addAlertFilter/', params);
};

/**
 * Removes an alert filter from the context with the given ID.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.removeAlertFilter = function (contextid, ruleid, newlevel, url, urlisregex, parameter, enabled, parameterisregex, attack, attackisregex, evidence, evidenceisregex, callback) {
  const params = {'contextId': contextid, 'ruleId': ruleid, 'newLevel': newlevel};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (urlisregex && urlisregex !== null) {
    params['urlIsRegex'] = urlisregex;
  }
  if (parameter && parameter !== null) {
    params['parameter'] = parameter;
  }
  if (enabled && enabled !== null) {
    params['enabled'] = enabled;
  }
  if (parameterisregex && parameterisregex !== null) {
    params['parameterIsRegex'] = parameterisregex;
  }
  if (attack && attack !== null) {
    params['attack'] = attack;
  }
  if (attackisregex && attackisregex !== null) {
    params['attackIsRegex'] = attackisregex;
  }
  if (evidence && evidence !== null) {
    params['evidence'] = evidence;
  }
  if (evidenceisregex && evidenceisregex !== null) {
    params['evidenceIsRegex'] = evidenceisregex;
  }
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/removeAlertFilter/', params, callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/removeAlertFilter/', params);
};

/**
 * Adds a new global alert filter. 
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.addGlobalAlertFilter = function (ruleid, newlevel, url, urlisregex, parameter, enabled, parameterisregex, attack, attackisregex, evidence, evidenceisregex, callback) {
  const params = {'ruleId': ruleid, 'newLevel': newlevel};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (urlisregex && urlisregex !== null) {
    params['urlIsRegex'] = urlisregex;
  }
  if (parameter && parameter !== null) {
    params['parameter'] = parameter;
  }
  if (enabled && enabled !== null) {
    params['enabled'] = enabled;
  }
  if (parameterisregex && parameterisregex !== null) {
    params['parameterIsRegex'] = parameterisregex;
  }
  if (attack && attack !== null) {
    params['attack'] = attack;
  }
  if (attackisregex && attackisregex !== null) {
    params['attackIsRegex'] = attackisregex;
  }
  if (evidence && evidence !== null) {
    params['evidence'] = evidence;
  }
  if (evidenceisregex && evidenceisregex !== null) {
    params['evidenceIsRegex'] = evidenceisregex;
  }
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/addGlobalAlertFilter/', params, callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/addGlobalAlertFilter/', params);
};

/**
 * Removes a global alert filter.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.removeGlobalAlertFilter = function (ruleid, newlevel, url, urlisregex, parameter, enabled, parameterisregex, attack, attackisregex, evidence, evidenceisregex, callback) {
  const params = {'ruleId': ruleid, 'newLevel': newlevel};
  if (url && url !== null) {
    params['url'] = url;
  }
  if (urlisregex && urlisregex !== null) {
    params['urlIsRegex'] = urlisregex;
  }
  if (parameter && parameter !== null) {
    params['parameter'] = parameter;
  }
  if (enabled && enabled !== null) {
    params['enabled'] = enabled;
  }
  if (parameterisregex && parameterisregex !== null) {
    params['parameterIsRegex'] = parameterisregex;
  }
  if (attack && attack !== null) {
    params['attack'] = attack;
  }
  if (attackisregex && attackisregex !== null) {
    params['attackIsRegex'] = attackisregex;
  }
  if (evidence && evidence !== null) {
    params['evidence'] = evidence;
  }
  if (evidenceisregex && evidenceisregex !== null) {
    params['evidenceIsRegex'] = evidenceisregex;
  }
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/removeGlobalAlertFilter/', params, callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/removeGlobalAlertFilter/', params);
};

/**
 * Applies all currently enabled Global and Context alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.applyAll = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/applyAll/', callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/applyAll/');
};

/**
 * Applies all currently enabled Context alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.applyContext = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/applyContext/', callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/applyContext/');
};

/**
 * Applies all currently enabled Global alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.applyGlobal = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/applyGlobal/', callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/applyGlobal/');
};

/**
 * Tests all currently enabled Global and Context alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.testAll = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/testAll/', callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/testAll/');
};

/**
 * Tests all currently enabled Context alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.testContext = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/testContext/', callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/testContext/');
};

/**
 * Tests all currently enabled Global alert filters.
 * This component is optional and therefore the API will only work if it is installed
 **/
AlertFilter.prototype.testGlobal = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/alertFilter/action/testGlobal/', callback);
    return;
  }
  return this.api.requestPromise('/alertFilter/action/testGlobal/');
};

module.exports = AlertFilter;
