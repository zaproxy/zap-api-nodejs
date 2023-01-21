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

/**
 * This file was automatically generated.
 */
function Stats(clientApi) {
  this.api = clientApi;
}

/**
 * Statistics
 * @param {string} keyprefix
 **/
Stats.prototype.stats = function (args, callback) {
  const params = {};
  if (args.keyprefix && args.keyprefix !== null) {
    params['keyPrefix'] = args.keyprefix;
  }
  if (typeof callback === 'function') {
    this.api.request('/stats/view/stats/', params, callback);
    return;
  }
  return this.api.requestPromise('/stats/view/stats/', params);
};

/**
 * Gets all of the site based statistics, optionally filtered by a key prefix
 * @param {string} keyprefix
 **/
Stats.prototype.allSitesStats = function (args, callback) {
  const params = {};
  if (args.keyprefix && args.keyprefix !== null) {
    params['keyPrefix'] = args.keyprefix;
  }
  if (typeof callback === 'function') {
    this.api.request('/stats/view/allSitesStats/', params, callback);
    return;
  }
  return this.api.requestPromise('/stats/view/allSitesStats/', params);
};

/**
 * Gets all of the global statistics, optionally filtered by a key prefix
 * @param {string} site
 * @param {string} keyprefix
 **/
Stats.prototype.siteStats = function (args, callback) {
  const params = {'site': args.site};
  if (args.keyprefix && args.keyprefix !== null) {
    params['keyPrefix'] = args.keyprefix;
  }
  if (typeof callback === 'function') {
    this.api.request('/stats/view/siteStats/', params, callback);
    return;
  }
  return this.api.requestPromise('/stats/view/siteStats/', params);
};

/**
 * Gets the Statsd service hostname
 **/
Stats.prototype.optionStatsdHost = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/view/optionStatsdHost/', callback);
    return;
  }
  return this.api.requestPromise('/stats/view/optionStatsdHost/');
};

/**
 * Gets the Statsd service port
 **/
Stats.prototype.optionStatsdPort = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/view/optionStatsdPort/', callback);
    return;
  }
  return this.api.requestPromise('/stats/view/optionStatsdPort/');
};

/**
 * Gets the prefix to be applied to all stats sent to the configured Statsd service
 **/
Stats.prototype.optionStatsdPrefix = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/view/optionStatsdPrefix/', callback);
    return;
  }
  return this.api.requestPromise('/stats/view/optionStatsdPrefix/');
};

/**
 * Returns 'true' if in memory statistics are enabled, otherwise returns 'false'
 **/
Stats.prototype.optionInMemoryEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/view/optionInMemoryEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/stats/view/optionInMemoryEnabled/');
};

/**
 * Returns 'true' if a Statsd server has been correctly configured, otherwise returns 'false'
 **/
Stats.prototype.optionStatsdEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/view/optionStatsdEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/stats/view/optionStatsdEnabled/');
};

/**
 * Clears all of the statistics
 * @param {string} keyprefix
 **/
Stats.prototype.clearStats = function (args, callback) {
  const params = {};
  if (args.keyprefix && args.keyprefix !== null) {
    params['keyPrefix'] = args.keyprefix;
  }
  if (typeof callback === 'function') {
    this.api.request('/stats/action/clearStats/', params, callback);
    return;
  }
  return this.api.requestPromise('/stats/action/clearStats/', params);
};

/**
 * Sets the Statsd service hostname, supply an empty string to stop using a Statsd service
 * @param {string} string
 **/
Stats.prototype.setOptionStatsdHost = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/action/setOptionStatsdHost/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/stats/action/setOptionStatsdHost/', {'String': args.string});
};

/**
 * Sets the prefix to be applied to all stats sent to the configured Statsd service
 * @param {string} string
 **/
Stats.prototype.setOptionStatsdPrefix = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/action/setOptionStatsdPrefix/', {'String': args.string}, callback);
    return;
  }
  return this.api.requestPromise('/stats/action/setOptionStatsdPrefix/', {'String': args.string});
};

/**
 * Sets whether in memory statistics are enabled
 * @param {string} bool
 **/
Stats.prototype.setOptionInMemoryEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/action/setOptionInMemoryEnabled/', {'Boolean': args.bool}, callback);
    return;
  }
  return this.api.requestPromise('/stats/action/setOptionInMemoryEnabled/', {'Boolean': args.bool});
};

/**
 * Sets the Statsd service port
 * @param {string} integer
 **/
Stats.prototype.setOptionStatsdPort = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/stats/action/setOptionStatsdPort/', {'Integer': args.integer}, callback);
    return;
  }
  return this.api.requestPromise('/stats/action/setOptionStatsdPort/', {'Integer': args.integer});
};

module.exports = Stats;
