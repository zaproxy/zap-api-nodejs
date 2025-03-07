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

'use strict';

class Reports {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Views available report templates.
   * This component is optional and will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with available templates.
   */
  templates = () =>
    this.api.request('/reports/view/templates');

  /**
   * Views details of a specific report template.
   * This component is optional and will only work if it is installed.
   *
   * @param {{ template: string }} args - Object containing:
   *   - template: The template label.
   * @returns {Promise<any>} A promise resolving with the template details.
   */
  templateDetails = ({ template }) =>
    this.api.request('/reports/view/templateDetails', { template });

  /**
   * Generates a report with the provided parameters.
   * This component is optional and will only work if it is installed.
   *
   * @param {{
   *   title: string,
   *   template: string,
   *   theme: string,
   *   description: string,
   *   contexts: string,
   *   sites: string,
   *   sections: string,
   *   includedConfidences: string,
   *   includedRisks: string,
   *   reportFileName: string,
   *   reportFileNamePattern: string,
   *   reportDir: string,
   *   display: string,
   * }} args - Object containing:
   *   - title: Report title.
   *   - template: Report template.
   *   - theme: Report theme.
   *   - description: Report description.
   *   - contexts: The contexts to include, separated by '|'.
   *   - sites: The site URLs to include, separated by '|'.
   *   - sections: The report sections to include, separated by '|'.
   *   - includedConfidences: Confidences to include, separated by '|'.
   *   - includedRisks: Risks to include, separated by '|'.
   *   - reportFileName: The file name of the generated report.
   *   - reportFileNamePattern: Report file name pattern.
   *   - reportDir: Directory path for the generated report.
   *   - display: Whether to display the report ("true" or "false").
   * @returns {Promise<any>} A promise resolving with the report generation result.
   */
  generate = ({
                title,
                template,
                theme,
                description,
                contexts,
                sites,
                sections,
                includedConfidences,
                includedRisks,
                reportFileName,
                reportFileNamePattern,
                reportDir,
                display,
              }) =>
    this.api.request('/reports/action/generate', {
      title,
      template,
      theme,
      description,
      contexts,
      sites,
      sections,
      includedConfidences,
      includedRisks,
      reportFileName,
      reportFileNamePattern,
      reportDir,
      display,
    });
}

module.exports = Reports;
