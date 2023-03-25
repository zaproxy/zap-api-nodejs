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
function Replacer (clientApi) {
  this.api = clientApi
}

/**
 * Returns full details of all of the rules
 * This component is optional and therefore the API will only work if it is installed
 **/
Replacer.prototype.rules = function () {
  return this.api.request('/replacer/view/rules/')
}

/**
 * Adds a replacer rule. For the parameters: desc is a user friendly description, enabled is true or false, matchType is one of [REQ_HEADER, REQ_HEADER_STR, REQ_BODY_STR, RESP_HEADER, RESP_HEADER_STR, RESP_BODY_STR], matchRegex should be true if the matchString should be treated as a regex otherwise false, matchString is the string that will be matched against, replacement is the replacement string, initiators may be blank (for all initiators) or a comma separated list of integers as defined in <a href="https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/parosproxy/paros/network/HttpSender.java">HttpSender</a>
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} description
 * @param {string} enabled
 * @param {string} matchtype
 * @param {string} matchregex
 * @param {string} matchstring
 * @param {string} replacement
 * @param {string} initiators
 * @param {string} url - A regular expression to match the URL of the message, if empty the rule applies to all messages.
 **/
Replacer.prototype.addRule = function (args) {
  const params = { description: args.description, enabled: args.enabled, matchType: args.matchtype, matchRegex: args.matchregex, matchString: args.matchstring }
  if (args.replacement && args.replacement !== null) {
    params.replacement = args.replacement
  }
  if (args.initiators && args.initiators !== null) {
    params.initiators = args.initiators
  }
  if (args.url && args.url !== null) {
    params.url = args.url
  }
  return this.api.request('/replacer/action/addRule/', params)
}

/**
 * Removes the rule with the given description
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} description
 **/
Replacer.prototype.removeRule = function (args) {
  return this.api.request('/replacer/action/removeRule/', { description: args.description })
}

/**
 * Enables or disables the rule with the given description based on the bool parameter
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} description
 * @param {string} bool
 **/
Replacer.prototype.setEnabled = function (args) {
  return this.api.request('/replacer/action/setEnabled/', { description: args.description, bool: args.bool })
}

module.exports = Replacer
