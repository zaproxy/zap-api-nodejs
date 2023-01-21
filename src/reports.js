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
function Reports(clientApi) {
  this.api = clientApi;
}

/**
 * View available templates.
 * This component is optional and therefore the API will only work if it is installed
 **/
Reports.prototype.templates = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/reports/view/templates/', callback);
    return;
  }
  return this.api.requestPromise('/reports/view/templates/');
};

/**
 * View details of the specified template.
 * This component is optional and therefore the API will only work if it is installed
 **/
Reports.prototype.templateDetails = function (template, callback) {
  if (typeof callback === 'function') {
    this.api.request('/reports/view/templateDetails/', {'template': template}, callback);
    return;
  }
  return this.api.requestPromise('/reports/view/templateDetails/', {'template': template});
};

/**
 * Generate a report with the supplied parameters.
 * This component is optional and therefore the API will only work if it is installed
 **/
Reports.prototype.generate = function (title, template, theme, description, contexts, sites, sections, includedconfidences, includedrisks, reportfilename, reportfilenamepattern, reportdir, display, callback) {
  const params = {'title': title, 'template': template};
  if (theme && theme !== null) {
    params['theme'] = theme;
  }
  if (description && description !== null) {
    params['description'] = description;
  }
  if (contexts && contexts !== null) {
    params['contexts'] = contexts;
  }
  if (sites && sites !== null) {
    params['sites'] = sites;
  }
  if (sections && sections !== null) {
    params['sections'] = sections;
  }
  if (includedconfidences && includedconfidences !== null) {
    params['includedConfidences'] = includedconfidences;
  }
  if (includedrisks && includedrisks !== null) {
    params['includedRisks'] = includedrisks;
  }
  if (reportfilename && reportfilename !== null) {
    params['reportFileName'] = reportfilename;
  }
  if (reportfilenamepattern && reportfilenamepattern !== null) {
    params['reportFileNamePattern'] = reportfilenamepattern;
  }
  if (reportdir && reportdir !== null) {
    params['reportDir'] = reportdir;
  }
  if (display && display !== null) {
    params['display'] = display;
  }
  if (typeof callback === 'function') {
    this.api.request('/reports/action/generate/', params, callback);
    return;
  }
  return this.api.requestPromise('/reports/action/generate/', params);
};

module.exports = Reports;
