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

class Script {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Lists the script engines available.
   * @returns {Promise<any>} A promise resolving with the list of script engines.
   */
  listEngines = () => this.api.request('/script/view/listEngines');

  /**
   * Lists the script types available.
   * @returns {Promise<any>} A promise resolving with the list of script types.
   */
  listTypes = () => this.api.request('/script/view/listTypes');

  /**
   * Lists the scripts available with details such as engine, name, description, type, and error state.
   * @returns {Promise<any>} A promise resolving with the list of scripts.
   */
  listScripts = () => this.api.request('/script/view/listScripts');

  /**
   * Gets the value of the global variable with the given key.
   * @param {{ varKey: string }} args - Object containing the key.
   * @returns {Promise<any>} A promise resolving with the global variable value.
   */
  globalVar = ({ varKey }) => this.api.request('/script/view/globalVar', { varKey });

  /**
   * Gets the value (string representation) of a global custom variable.
   * @param {{ varKey: string }} args - Object containing the key.
   * @returns {Promise<any>} A promise resolving with the global custom variable value.
   */
  globalCustomVar = ({ varKey }) => this.api.request('/script/view/globalCustomVar', { varKey });

  /**
   * Gets all global variables (key/value pairs).
   * @returns {Promise<any>} A promise resolving with all global variables.
   */
  globalVars = () => this.api.request('/script/view/globalVars');

  /**
   * Gets all global custom variables (key/value pairs).
   * @returns {Promise<any>} A promise resolving with all global custom variables.
   */
  globalCustomVars = () => this.api.request('/script/view/globalCustomVars');

  /**
   * Gets the value of a variable for a specific script.
   * @param {{ scriptName: string, varKey: string }} args - Object containing the script name and variable key.
   * @returns {Promise<any>} A promise resolving with the script variable value.
   */
  scriptVar = ({ scriptName, varKey }) =>
    this.api.request('/script/view/scriptVar', { scriptName, varKey });

  /**
   * Gets the value (string representation) of a custom variable for a specific script.
   * @param {{ scriptName: string, varKey: string }} args - Object containing the script name and variable key.
   * @returns {Promise<any>} A promise resolving with the script custom variable value.
   */
  scriptCustomVar = ({ scriptName, varKey }) =>
    this.api.request('/script/view/scriptCustomVar', { scriptName, varKey });

  /**
   * Gets all variables of a given script.
   * @param {{ scriptName: string }} args - Object containing the script name.
   * @returns {Promise<any>} A promise resolving with the script variables.
   */
  scriptVars = ({ scriptName }) =>
    this.api.request('/script/view/scriptVars', { scriptName });

  /**
   * Gets all custom variables of a given script.
   * @param {{ scriptName: string }} args - Object containing the script name.
   * @returns {Promise<any>} A promise resolving with the script custom variables.
   */
  scriptCustomVars = ({ scriptName }) =>
    this.api.request('/script/view/scriptCustomVars', { scriptName });

  /**
   * Enables the script with the given name.
   * @param {{ scriptName: string }} args - Object containing the script name.
   * @returns {Promise<any>} A promise resolving when the script is enabled.
   */
  enableScript = ({ scriptName }) =>
    this.api.request('/script/action/enable', { scriptName });

  /**
   * Disables the script with the given name.
   * @param {{ scriptName: string }} args - Object containing the script name.
   * @returns {Promise<any>} A promise resolving when the script is disabled.
   */
  disableScript = ({ scriptName }) =>
    this.api.request('/script/action/disable', { scriptName });

  /**
   * Loads a script into ZAP from a local file.
   * @param {{
   *   scriptName: string,
   *   scriptType: string,
   *   scriptEngine: string,
   *   fileName: string,
   *   scriptDescription?: string,
   *   charset?: string
   * }} args - Object containing script properties.
   * @returns {Promise<any>} A promise resolving with the load result.
   */
  load = ({ scriptName, scriptType, scriptEngine, fileName, scriptDescription, charset }) =>
    this.api.request('/script/action/load', { scriptName, scriptType, scriptEngine, fileName, scriptDescription, charset });

  /**
   * Removes the script with the given name.
   * @param {{ scriptName: string }} args - Object containing the script name.
   * @returns {Promise<any>} A promise resolving when the script is removed.
   */
  remove = ({ scriptName }) =>
    this.api.request('/script/action/remove', { scriptName });

  /**
   * Runs the stand-alone script with the given name.
   * @param {{ scriptName: string }} args - Object containing the script name.
   * @returns {Promise<any>} A promise resolving with the run result.
   */
  runStandAloneScript = ({ scriptName }) =>
    this.api.request('/script/action/runStandAloneScript', { scriptName });

  /**
   * Clears the global variable with the given key.
   * @param {{ varKey: string }} args - Object containing the variable key.
   * @returns {Promise<any>} A promise resolving when the global variable is cleared.
   */
  clearGlobalVar = ({ varKey }) =>
    this.api.request('/script/action/clearGlobalVar', { varKey });

  /**
   * Clears a global custom variable.
   * @param {{ varKey: string }} args - Object containing the variable key.
   * @returns {Promise<any>} A promise resolving when the global custom variable is cleared.
   */
  clearGlobalCustomVar = ({ varKey }) =>
    this.api.request('/script/action/clearGlobalCustomVar', { varKey });

  /**
   * Clears all global variables.
   * @returns {Promise<any>} A promise resolving when all global variables are cleared.
   */
  clearGlobalVars = () =>
    this.api.request('/script/action/clearGlobalVars');

  /**
   * Clears the variable with the given key for the given script.
   * @param {{ scriptName: string, varKey: string }} args - Object containing the script name and variable key.
   * @returns {Promise<any>} A promise resolving when the script variable is cleared.
   */
  clearScriptVar = ({ scriptName, varKey }) =>
    this.api.request('/script/action/clearScriptVar', { scriptName, varKey });

  /**
   * Clears a script custom variable.
   * @param {{ scriptName: string, varKey: string }} args - Object containing the script name and variable key.
   * @returns {Promise<any>} A promise resolving when the script custom variable is cleared.
   */
  clearScriptCustomVar = ({ scriptName, varKey }) =>
    this.api.request('/script/action/clearScriptCustomVar', { scriptName, varKey });

  /**
   * Clears all variables for the given script.
   * @param {{ scriptName: string }} args - Object containing the script name.
   * @returns {Promise<any>} A promise resolving when the script variables are cleared.
   */
  clearScriptVars = ({ scriptName }) =>
    this.api.request('/script/action/clearScriptVars', { scriptName });

  /**
   * Sets the value of a variable for the given script.
   * @param {{ scriptName: string, varKey: string, varValue: string }} args - Object containing the script name, variable key, and value.
   * @returns {Promise<any>} A promise resolving when the variable is set.
   */
  setScriptVar = ({ scriptName, varKey, varValue }) =>
    this.api.request('/script/action/setScriptVar', { scriptName, varKey, varValue });

  /**
   * Sets the value of a global variable.
   * @param {{ varKey: string, varValue: string }} args - Object containing the variable key and value.
   * @returns {Promise<any>} A promise resolving when the global variable is set.
   */
  setGlobalVar = ({ varKey, varValue }) =>
    this.api.request('/script/action/setGlobalVar', { varKey, varValue });
}

module.exports = Script;
