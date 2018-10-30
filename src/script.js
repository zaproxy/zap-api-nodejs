/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2018 the ZAP development team
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
function Script(clientApi) {
  this.api = clientApi;
}

/**
 * Lists the script engines available
 **/
Script.prototype.listEngines = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/listEngines/', callback);
    return;
  }
  return this.api.requestPromise('/script/view/listEngines/');
};

/**
 * Lists the scripts available, with its engine, name, description, type and error state.
 **/
Script.prototype.listScripts = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/listScripts/', callback);
    return;
  }
  return this.api.requestPromise('/script/view/listScripts/');
};

/**
 * Enables the script with the given name
 **/
Script.prototype.enable = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/enable/', {'scriptName' : scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/enable/', {'scriptName' : scriptname});
};

/**
 * Disables the script with the given name
 **/
Script.prototype.disable = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/disable/', {'scriptName' : scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/disable/', {'scriptName' : scriptname});
};

/**
 * Loads a script into ZAP from the given local file, with the given name, type and engine, optionally with a description, and a charset name to read the script (the charset name is required if the script is not in UTF-8, for example, in ISO-8859-1).
 **/
Script.prototype.load = function (scriptname, scripttype, scriptengine, filename, scriptdescription, charset, callback) {
  const params = {'scriptName' : scriptname, 'scriptType' : scripttype, 'scriptEngine' : scriptengine, 'fileName' : filename};
  if (scriptdescription && scriptdescription !== null) {
    params['scriptDescription'] = scriptdescription;
  }
  if (charset && charset !== null) {
    params['charset'] = charset;
  }
  if (typeof callback === 'function') {
    this.api.request('/script/action/load/', params, callback);
    return;
  }
  return this.api.requestPromise('/script/action/load/', params);
};

/**
 * Removes the script with the given name
 **/
Script.prototype.remove = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/remove/', {'scriptName' : scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/remove/', {'scriptName' : scriptname});
};

/**
 * Runs the stand alone script with the give name
 **/
Script.prototype.runStandAloneScript = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/runStandAloneScript/', {'scriptName' : scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/runStandAloneScript/', {'scriptName' : scriptname});
};

module.exports = Script;
