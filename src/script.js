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
function Script (clientApi) {
  this.api = clientApi
}

/**
 * Lists the script engines available
 **/
Script.prototype.listEngines = function () {
  return this.api.request('/script/view/listEngines/')
}

/**
 * Lists the script types available.
 **/
Script.prototype.listTypes = function () {
  return this.api.request('/script/view/listTypes/')
}

/**
 * Lists the scripts available, with its engine, name, description, type and error state.
 **/
Script.prototype.listScripts = function () {
  return this.api.request('/script/view/listScripts/')
}

/**
 * Gets the value of the global variable with the given key. Returns an API error (DOES_NOT_EXIST) if no value was previously set.
 * @param {string} varkey
 **/
Script.prototype.globalVar = function (args) {
  return this.api.request('/script/view/globalVar/', { varKey: args.varkey })
}

/**
 * Gets the value (string representation) of a global custom variable. Returns an API error (DOES_NOT_EXIST) if no value was previously set.
 * @param {string} varkey - The key of the variable.
 **/
Script.prototype.globalCustomVar = function (args) {
  return this.api.request('/script/view/globalCustomVar/', { varKey: args.varkey })
}

/**
 * Gets all the global variables (key/value pairs).
 **/
Script.prototype.globalVars = function () {
  return this.api.request('/script/view/globalVars/')
}

/**
 * Gets all the global custom variables (key/value pairs, the value is the string representation).
 **/
Script.prototype.globalCustomVars = function () {
  return this.api.request('/script/view/globalCustomVars/')
}

/**
 * Gets the value of the variable with the given key for the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists or if no value was previously set.
 * @param {string} scriptname
 * @param {string} varkey
 **/
Script.prototype.scriptVar = function (args) {
  return this.api.request('/script/view/scriptVar/', { scriptName: args.scriptname, varKey: args.varkey })
}

/**
 * Gets the value (string representation) of a custom variable. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists or if no value was previously set.
 * @param {string} scriptname - The name of the script.
 * @param {string} varkey - The key of the variable.
 **/
Script.prototype.scriptCustomVar = function (args) {
  return this.api.request('/script/view/scriptCustomVar/', { scriptName: args.scriptname, varKey: args.varkey })
}

/**
 * Gets all the variables (key/value pairs) of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 * @param {string} scriptname
 **/
Script.prototype.scriptVars = function (args) {
  return this.api.request('/script/view/scriptVars/', { scriptName: args.scriptname })
}

/**
 * Gets all the custom variables (key/value pairs, the value is the string representation) of a script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 * @param {string} scriptname - The name of the script.
 **/
Script.prototype.scriptCustomVars = function (args) {
  return this.api.request('/script/view/scriptCustomVars/', { scriptName: args.scriptname })
}

/**
 * Enables the script with the given name
 * @param {string} scriptname
 **/
Script.prototype.enable = function (args) {
  return this.api.request('/script/action/enable/', { scriptName: args.scriptname })
}

/**
 * Disables the script with the given name
 * @param {string} scriptname
 **/
Script.prototype.disable = function (args) {
  return this.api.request('/script/action/disable/', { scriptName: args.scriptname })
}

/**
 * Loads a script into ZAP from the given local file, with the given name, type and engine, optionally with a description, and a charset name to read the script (the charset name is required if the script is not in UTF-8, for example, in ISO-8859-1).
 * @param {string} scriptname
 * @param {string} scripttype
 * @param {string} scriptengine
 * @param {string} filename
 * @param {string} scriptdescription
 * @param {string} charset
 **/
Script.prototype.load = function (args) {
  const params = { scriptName: args.scriptname, scriptType: args.scripttype, scriptEngine: args.scriptengine, fileName: args.filename }
  if (args.scriptdescription && args.scriptdescription !== null) {
    params.scriptDescription = args.scriptdescription
  }
  if (args.charset && args.charset !== null) {
    params.charset = args.charset
  }
  return this.api.request('/script/action/load/', params)
}

/**
 * Removes the script with the given name
 * @param {string} scriptname
 **/
Script.prototype.remove = function (args) {
  return this.api.request('/script/action/remove/', { scriptName: args.scriptname })
}

/**
 * Runs the stand alone script with the given name
 * @param {string} scriptname
 **/
Script.prototype.runStandAloneScript = function (args) {
  return this.api.request('/script/action/runStandAloneScript/', { scriptName: args.scriptname })
}

/**
 * Clears the global variable with the given key.
 * @param {string} varkey
 **/
Script.prototype.clearGlobalVar = function (args) {
  return this.api.request('/script/action/clearGlobalVar/', { varKey: args.varkey })
}

/**
 * Clears a global custom variable.
 * @param {string} varkey - The key of the variable.
 **/
Script.prototype.clearGlobalCustomVar = function (args) {
  return this.api.request('/script/action/clearGlobalCustomVar/', { varKey: args.varkey })
}

/**
 * Clears the global variables.
 **/
Script.prototype.clearGlobalVars = function () {
  return this.api.request('/script/action/clearGlobalVars/')
}

/**
 * Clears the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 * @param {string} scriptname
 * @param {string} varkey
 **/
Script.prototype.clearScriptVar = function (args) {
  return this.api.request('/script/action/clearScriptVar/', { scriptName: args.scriptname, varKey: args.varkey })
}

/**
 * Clears a script custom variable.
 * @param {string} scriptname - The name of the script.
 * @param {string} varkey - The key of the variable.
 **/
Script.prototype.clearScriptCustomVar = function (args) {
  return this.api.request('/script/action/clearScriptCustomVar/', { scriptName: args.scriptname, varKey: args.varkey })
}

/**
 * Clears the variables of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 * @param {string} scriptname
 **/
Script.prototype.clearScriptVars = function (args) {
  return this.api.request('/script/action/clearScriptVars/', { scriptName: args.scriptname })
}

/**
 * Sets the value of the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 * @param {string} scriptname
 * @param {string} varkey
 * @param {string} varvalue
 **/
Script.prototype.setScriptVar = function (args) {
  const params = { scriptName: args.scriptname, varKey: args.varkey }
  if (args.varvalue && args.varvalue !== null) {
    params.varValue = args.varvalue
  }
  return this.api.request('/script/action/setScriptVar/', params)
}

/**
 * Sets the value of the global variable with the given key.
 * @param {string} varkey
 * @param {string} varvalue
 **/
Script.prototype.setGlobalVar = function (args) {
  const params = { varKey: args.varkey }
  if (args.varvalue && args.varvalue !== null) {
    params.varValue = args.varvalue
  }
  return this.api.request('/script/action/setGlobalVar/', params)
}

module.exports = Script
