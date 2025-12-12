/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2025 the ZAP development team
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
function ClientSpider (clientApi) {
  this.api = clientApi
}

/**
 * Gets the status of a client spider scan.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid - The ID of the client spider scan.
 **/
ClientSpider.prototype.status = function (args) {
  return this.api.request('/clientSpider/view/status/', { scanId: args.scanid })
}

/**
 * Starts a client spider scan.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} browser - The ID of the browser. See Selenium documentation for valid IDs.
 * @param {string} url - The URL from where to start the spider.
 * @param {string} contextname - The name of the context.
 * @param {string} username - The name of the user.
 * @param {string} subtreeonly - true to spider only under the subtree, false otherwise.
 * @param {string} maxcrawldepth - Maximum Crawl Depth (0 is unlimited).
 * @param {string} pageloadtime - Page Load Time (seconds).
 * @param {string} numberofbrowsers - Number of Browser Windows to Open (concurrency).
 * @param {string} scopecheck - Scope Check (FLEXIBLE or STRICT).
 **/
ClientSpider.prototype.scan = function (args) {
  const params = { }
  if (args.browser && args.browser !== null) {
    params.browser = args.browser
  }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  if (args.contextname && args.contextname !== null) {
    params.contextName = args.contextname
  }
  if (args.username && args.username !== null) {
    params.userName = args.username
  }
  if (args.subtreeonly && args.subtreeonly !== null) {
    params.subtreeOnly = args.subtreeonly
  }
  if (args.maxcrawldepth && args.maxcrawldepth !== null) {
    params.maxCrawlDepth = args.maxcrawldepth
  }
  if (args.pageloadtime && args.pageloadtime !== null) {
    params.pageLoadTime = args.pageloadtime
  }
  if (args.numberofbrowsers && args.numberofbrowsers !== null) {
    params.numberOfBrowsers = args.numberofbrowsers
  }
  if (args.scopecheck && args.scopecheck !== null) {
    params.scopeCheck = args.scopecheck
  }
  return this.api.request('/clientSpider/action/scan/', params)
}

/**
 * Stops a client spider scan.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} scanid - The ID of the client spider scan.
 **/
ClientSpider.prototype.stop = function (args) {
  return this.api.request('/clientSpider/action/stop/', { scanId: args.scanid })
}

module.exports = ClientSpider
