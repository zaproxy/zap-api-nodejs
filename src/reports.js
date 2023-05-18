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
function Reports (clientApi) {
  this.api = clientApi
}

/**
 * View available templates.
 * This component is optional and therefore the API will only work if it is installed
 **/
Reports.prototype.templates = function () {
  return this.api.request('/reports/view/templates/')
}

/**
 * View details of the specified template.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} template - Template Label
 **/
Reports.prototype.templateDetails = function (args) {
  return this.api.request('/reports/view/templateDetails/', { template: args.template })
}

/**
 * Generate a report with the supplied parameters.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} title - Report Title
 * @param {string} template - Report Template
 * @param {string} theme - Report Theme
 * @param {string} description - Report Description
 * @param {string} contexts - The name of the contexts to be included in the report, separated by '|'.
 * @param {string} sites - The site URLs that should be included in the report, separated by '|'.
 * @param {string} sections - The report sections that should be included, separated by '|'.
 * @param {string} includedconfidences - Confidences that should be included in the report, separated by '|'. Accepted values are "False Positive", "Low", "Medium", "High", and "Confirmed".
 * @param {string} includedrisks - Risks that should be included in the report, separated by '|'. Accepted values are "Informational", "Low", "Medium", and "High".
 * @param {string} reportfilename - The file name of the generated report. This value overrides the reportFileNamePattern parameter.
 * @param {string} reportfilenamepattern - Report File Name Pattern.
 * @param {string} reportdir - Path to directory in which the generated report should be placed.
 * @param {string} display - Display the generated report. Either "true" or "false".
 **/
Reports.prototype.generate = function (args) {
  const params = { title: args.title, template: args.template }
  if (args.theme && args.theme !== null) {
    params.theme = args.theme
  }
  if (args.description && args.description !== null) {
    params.description = args.description
  }
  if (args.contexts && args.contexts !== null) {
    params.contexts = args.contexts
  }
  if (args.sites && args.sites !== null) {
    params.sites = args.sites
  }
  if (args.sections && args.sections !== null) {
    params.sections = args.sections
  }
  if (args.includedconfidences && args.includedconfidences !== null) {
    params.includedConfidences = args.includedconfidences
  }
  if (args.includedrisks && args.includedrisks !== null) {
    params.includedRisks = args.includedrisks
  }
  if (args.reportfilename && args.reportfilename !== null) {
    params.reportFileName = args.reportfilename
  }
  if (args.reportfilenamepattern && args.reportfilenamepattern !== null) {
    params.reportFileNamePattern = args.reportfilenamepattern
  }
  if (args.reportdir && args.reportdir !== null) {
    params.reportDir = args.reportdir
  }
  if (args.display && args.display !== null) {
    params.display = args.display
  }
  return this.api.request('/reports/action/generate/', params)
}

module.exports = Reports
