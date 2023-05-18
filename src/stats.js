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
function Stats (clientApi) {
  this.api = clientApi
}

/**
 * Statistics
 * @param {string} keyprefix
 **/
Stats.prototype.stats = function (args) {
  const params = { }
  if (args.keyprefix && args.keyprefix !== null) {
    params.keyPrefix = args.keyprefix
  }
  return this.api.request('/stats/view/stats/', params)
}

/**
 * Gets all of the site based statistics, optionally filtered by a key prefix
 * @param {string} keyprefix
 **/
Stats.prototype.allSitesStats = function (args) {
  const params = { }
  if (args.keyprefix && args.keyprefix !== null) {
    params.keyPrefix = args.keyprefix
  }
  return this.api.request('/stats/view/allSitesStats/', params)
}

/**
 * Gets all of the global statistics, optionally filtered by a key prefix
 * @param {string} site
 * @param {string} keyprefix
 **/
Stats.prototype.siteStats = function (args) {
  const params = { site: args.site }
  if (args.keyprefix && args.keyprefix !== null) {
    params.keyPrefix = args.keyprefix
  }
  return this.api.request('/stats/view/siteStats/', params)
}

/**
 * Gets the Statsd service hostname
 **/
Stats.prototype.optionStatsdHost = function () {
  return this.api.request('/stats/view/optionStatsdHost/')
}

/**
 * Gets the Statsd service port
 **/
Stats.prototype.optionStatsdPort = function () {
  return this.api.request('/stats/view/optionStatsdPort/')
}

/**
 * Gets the prefix to be applied to all stats sent to the configured Statsd service
 **/
Stats.prototype.optionStatsdPrefix = function () {
  return this.api.request('/stats/view/optionStatsdPrefix/')
}

/**
 * Returns 'true' if in memory statistics are enabled, otherwise returns 'false'
 **/
Stats.prototype.optionInMemoryEnabled = function () {
  return this.api.request('/stats/view/optionInMemoryEnabled/')
}

/**
 * Returns 'true' if a Statsd server has been correctly configured, otherwise returns 'false'
 **/
Stats.prototype.optionStatsdEnabled = function () {
  return this.api.request('/stats/view/optionStatsdEnabled/')
}

/**
 * Clears all of the statistics
 * @param {string} keyprefix
 **/
Stats.prototype.clearStats = function (args) {
  const params = { }
  if (args.keyprefix && args.keyprefix !== null) {
    params.keyPrefix = args.keyprefix
  }
  return this.api.request('/stats/action/clearStats/', params)
}

/**
 * Sets the Statsd service hostname, supply an empty string to stop using a Statsd service
 * @param {string} string
 **/
Stats.prototype.setOptionStatsdHost = function (args) {
  return this.api.request('/stats/action/setOptionStatsdHost/', { String: args.string })
}

/**
 * Sets the prefix to be applied to all stats sent to the configured Statsd service
 * @param {string} string
 **/
Stats.prototype.setOptionStatsdPrefix = function (args) {
  return this.api.request('/stats/action/setOptionStatsdPrefix/', { String: args.string })
}

/**
 * Sets whether in memory statistics are enabled
 * @param {string} bool
 **/
Stats.prototype.setOptionInMemoryEnabled = function (args) {
  return this.api.request('/stats/action/setOptionInMemoryEnabled/', { Boolean: args.bool })
}

/**
 * Sets the Statsd service port
 * @param {string} integer
 **/
Stats.prototype.setOptionStatsdPort = function (args) {
  return this.api.request('/stats/action/setOptionStatsdPort/', { Integer: args.integer })
}

module.exports = Stats
