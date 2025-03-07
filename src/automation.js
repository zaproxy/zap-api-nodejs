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
/**
 * Class for managing Automation API requests for ZAP Proxy.
 * This component is optional and will only work if it is installed.
 *
 * @param {object} clientApi - The client API instance.
 */
class Automation {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Retrieves the progress of the specified automation plan.
   *
   * @param {{ planId: string }} args - Object containing the plan ID.
   * @returns {Promise} - A promise that resolves with the plan progress details.
   */
  planProgress = ({ planId }) =>
    this.api.request('/automation/view/planProgress', { planId });

  /**
   * Runs the specified automation plan.
   *
   * @param {{ filePath: string }} args - Object containing the file path of the automation plan.
   * @returns {Promise} - A promise that resolves when the plan is started.
   */
  runPlan = ({ filePath }) =>
    this.api.request('/automation/action/runPlan', { filePath });

  /**
   * Ends the current delay job.
   *
   * @returns {Promise} - A promise that resolves when the delay job is ended.
   */
  endDelayJob = () =>
    this.api.request('/automation/action/endDelayJob');
}

module.exports = Automation;
