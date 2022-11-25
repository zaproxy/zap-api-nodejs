/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2022 the ZAP development team
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
 * Lists the script types available.
 **/
Script.prototype.listTypes = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/listTypes/', callback);
    return;
  }
  return this.api.requestPromise('/script/view/listTypes/');
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
 * Gets the value of the global variable with the given key. Returns an API error (DOES_NOT_EXIST) if no value was previously set.
 **/
Script.prototype.globalVar = function (varkey, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/globalVar/', {'varKey': varkey}, callback);
    return;
  }
  return this.api.requestPromise('/script/view/globalVar/', {'varKey': varkey});
};

/**
 * Gets the value (string representation) of a global custom variable. Returns an API error (DOES_NOT_EXIST) if no value was previously set.
 **/
Script.prototype.globalCustomVar = function (varkey, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/globalCustomVar/', {'varKey': varkey}, callback);
    return;
  }
  return this.api.requestPromise('/script/view/globalCustomVar/', {'varKey': varkey});
};

/**
 * Gets all the global variables (key/value pairs).
 **/
Script.prototype.globalVars = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/globalVars/', callback);
    return;
  }
  return this.api.requestPromise('/script/view/globalVars/');
};

/**
 * Gets all the global custom variables (key/value pairs, the value is the string representation).
 **/
Script.prototype.globalCustomVars = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/globalCustomVars/', callback);
    return;
  }
  return this.api.requestPromise('/script/view/globalCustomVars/');
};

/**
 * Gets the value of the variable with the given key for the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists or if no value was previously set.
 **/
Script.prototype.scriptVar = function (scriptname, varkey, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/scriptVar/', {'scriptName': scriptname, 'varKey': varkey}, callback);
    return;
  }
  return this.api.requestPromise('/script/view/scriptVar/', {'scriptName': scriptname, 'varKey': varkey});
};

/**
 * Gets the value (string representation) of a custom variable. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists or if no value was previously set.
 **/
Script.prototype.scriptCustomVar = function (scriptname, varkey, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/scriptCustomVar/', {'scriptName': scriptname, 'varKey': varkey}, callback);
    return;
  }
  return this.api.requestPromise('/script/view/scriptCustomVar/', {'scriptName': scriptname, 'varKey': varkey});
};

/**
 * Gets all the variables (key/value pairs) of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 **/
Script.prototype.scriptVars = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/scriptVars/', {'scriptName': scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/view/scriptVars/', {'scriptName': scriptname});
};

/**
 * Gets all the custom variables (key/value pairs, the value is the string representation) of a script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 **/
Script.prototype.scriptCustomVars = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/view/scriptCustomVars/', {'scriptName': scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/view/scriptCustomVars/', {'scriptName': scriptname});
};

/**
 * Enables the script with the given name
 **/
Script.prototype.enable = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/enable/', {'scriptName': scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/enable/', {'scriptName': scriptname});
};

/**
 * Disables the script with the given name
 **/
Script.prototype.disable = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/disable/', {'scriptName': scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/disable/', {'scriptName': scriptname});
};

/**
 * Loads a script into ZAP from the given local file, with the given name, type and engine, optionally with a description, and a charset name to read the script (the charset name is required if the script is not in UTF-8, for example, in ISO-8859-1).
 **/
Script.prototype.load = function (scriptname, scripttype, scriptengine, filename, scriptdescription, charset, callback) {
  const params = {'scriptName': scriptname, 'scriptType': scripttype, 'scriptEngine': scriptengine, 'fileName': filename};
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
    this.api.request('/script/action/remove/', {'scriptName': scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/remove/', {'scriptName': scriptname});
};

/**
 * Runs the stand alone script with the given name
 **/
Script.prototype.runStandAloneScript = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/runStandAloneScript/', {'scriptName': scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/runStandAloneScript/', {'scriptName': scriptname});
};

/**
 * Clears the global variable with the given key.
 **/
Script.prototype.clearGlobalVar = function (varkey, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/clearGlobalVar/', {'varKey': varkey}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/clearGlobalVar/', {'varKey': varkey});
};

/**
 * Clears a global custom variable.
 **/
Script.prototype.clearGlobalCustomVar = function (varkey, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/clearGlobalCustomVar/', {'varKey': varkey}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/clearGlobalCustomVar/', {'varKey': varkey});
};

/**
 * Clears the global variables.
 **/
Script.prototype.clearGlobalVars = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/clearGlobalVars/', callback);
    return;
  }
  return this.api.requestPromise('/script/action/clearGlobalVars/');
};

/**
 * Clears the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 **/
Script.prototype.clearScriptVar = function (scriptname, varkey, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/clearScriptVar/', {'scriptName': scriptname, 'varKey': varkey}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/clearScriptVar/', {'scriptName': scriptname, 'varKey': varkey});
};

/**
 * Clears a script custom variable.
 **/
Script.prototype.clearScriptCustomVar = function (scriptname, varkey, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/clearScriptCustomVar/', {'scriptName': scriptname, 'varKey': varkey}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/clearScriptCustomVar/', {'scriptName': scriptname, 'varKey': varkey});
};

/**
 * Clears the variables of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 **/
Script.prototype.clearScriptVars = function (scriptname, callback) {
  if (typeof callback === 'function') {
    this.api.request('/script/action/clearScriptVars/', {'scriptName': scriptname}, callback);
    return;
  }
  return this.api.requestPromise('/script/action/clearScriptVars/', {'scriptName': scriptname});
};

/**
 * Sets the value of the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.
 **/
Script.prototype.setScriptVar = function (scriptname, varkey, varvalue, callback) {
  const params = {'scriptName': scriptname, 'varKey': varkey};
  if (varvalue && varvalue !== null) {
    params['varValue'] = varvalue;
  }
  if (typeof callback === 'function') {
    this.api.request('/script/action/setScriptVar/', params, callback);
    return;
  }
  return this.api.requestPromise('/script/action/setScriptVar/', params);
};

/**
 * Sets the value of the global variable with the given key.
 **/
Script.prototype.setGlobalVar = function (varkey, varvalue, callback) {
  const params = {'varKey': varkey};
  if (varvalue && varvalue !== null) {
    params['varValue'] = varvalue;
  }
  if (typeof callback === 'function') {
    this.api.request('/script/action/setGlobalVar/', params, callback);
    return;
  }
  return this.api.requestPromise('/script/action/setGlobalVar/', params);
};

module.exports = Script;
