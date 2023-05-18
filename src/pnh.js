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
function Pnh (clientApi) {
  this.api = clientApi
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.monitor = function (args) {
  return this.api.request('/pnh/action/monitor/', { id: args.id, message: args.message })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.oracle = function (args) {
  return this.api.request('/pnh/action/oracle/', { id: args.id })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.startMonitoring = function (args) {
  return this.api.request('/pnh/action/startMonitoring/', { url: args.url })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.stopMonitoring = function (args) {
  return this.api.request('/pnh/action/stopMonitoring/', { id: args.id })
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.pnh = function () {
  return this.api.request('/pnh/other/pnh/', 'other')
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.manifest = function () {
  return this.api.request('/pnh/other/manifest/', 'other')
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.service = function () {
  return this.api.request('/pnh/other/service/', 'other')
}

/**
 * This component is optional and therefore the API will only work if it is installed
 **/
Pnh.prototype.fx_pnhxpi = function () {
  return this.api.request('/pnh/other/fx_pnh.xpi/', 'other')
}

module.exports = Pnh
