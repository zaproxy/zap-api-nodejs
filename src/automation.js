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
function Automation (clientApi) {
  this.api = clientApi
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Automation.prototype.planProgress = function (args) {
  return this.api.request('/automation/view/planProgress/', { planId: args.planid })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Automation.prototype.runPlan = function (args) {
  return this.api.request('/automation/action/runPlan/', { filePath: args.filepath })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Automation.prototype.endDelayJob = function () {
  return this.api.request('/automation/action/endDelayJob/')
}

module.exports = Automation
