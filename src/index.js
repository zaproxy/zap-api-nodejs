/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright the ZAP development team
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

const request = require('request');
const requestPromise = require('request-promise-native');

const Acsrf = require('./acsrf');
const AjaxSpider = require('./ajaxSpider');
const Ascan = require('./ascan');
const Authentication = require('./authentication');
const Authorization = require('./authorization');
const Autoupdate = require('./autoupdate');
const Brk = require('./brk');
const Context = require('./context');
const Core = require('./core');
const ForcedUser = require('./forcedUser');
const HttpSessions = require('./httpSessions');
const ImportLogFiles = require('./importLogFiles');
const Importurls = require('./importurls');
const Openapi = require('./openapi');
const Params = require('./params');
const Pnh = require('./pnh');
const Pscan = require('./pscan');
const Replacer = require('./replacer');
const Reveal = require('./reveal');
const Script = require('./script');
const Search = require('./search');
const Selenium = require('./selenium');
const SessionManagement = require('./sessionManagement');
const Soap = require('./soap');
const Spider = require('./spider');
const Stats = require('./stats');
const Users = require('./users');
const Websocket = require('./websocket');

// base JSON api url
const BASE = 'http://zap/JSON';
// base OTHER api url
const BASE_OTHER = 'http://zap/OTHER';

function ClientApi(options) {
  const requestOptions = {
    proxy: { ...{ proxy: 'http://127.0.0.1:8080' }, ...options }.proxy,
    method: 'GET',
    json: true,
    headers: options.apiKey ? { 'X-ZAP-API-Key': options.apiKey } : {}
  };
  
  this.req = request.defaults(requestOptions);
  this.reqPromise = requestPromise.defaults(requestOptions);
  this.acsrf = new Acsrf(this);
  this.ajaxSpider = new AjaxSpider(this);
  this.ascan = new Ascan(this);
  this.authentication = new Authentication(this);
  this.authorization = new Authorization(this);
  this.autoupdate = new Autoupdate(this);
  this.brk = new Brk(this);
  this.context = new Context(this);
  this.core = new Core(this);
  this.forcedUser = new ForcedUser(this);
  this.httpSessions = new HttpSessions(this);
  this.importLogFiles = new ImportLogFiles(this);
  this.importurls = new Importurls(this);
  this.openapi = new Openapi(this);
  this.params = new Params(this);
  this.pnh = new Pnh(this);
  this.pscan = new Pscan(this);
  this.replacer = new Replacer(this);
  this.reveal = new Reveal(this);
  this.script = new Script(this);
  this.search = new Search(this);
  this.selenium = new Selenium(this);
  this.sessionManagement = new SessionManagement(this);
  this.soap = new Soap(this);
  this.spider = new Spider(this);
  this.stats = new Stats(this);
  this.users = new Users(this);
  this.websocket = new Websocket(this);
}

// Legacy for callbacks.

/**
 * Get a handler for REST API responses.
 * We include a workaround here for the fact that the API does not
 * return the correct status codes in the event of an error
 * (i.e. it always returns 200).
 **/
const responseHandler = function (callback) {
  return function handleResponse(err, res, body) {
    if (err) {
      callback(err);
      return;
    }

    // if the response has a code and a message, it's an error.
    if (body && body.code && body.message) {
      callback(body);
    } else {
      callback(null, body);
    }
  };
};

ClientApi.prototype.request = function (url, parms, callback) {
  if (!callback && typeof(parms === 'function')) {
    callback = parms;
    parms = null;
  }

  var options = {
    url: BASE + url
  };
  if (parms) {
    options.qs = parms;
  }
  this.req(options, responseHandler(callback));
};

ClientApi.prototype.requestOther = function (url, parms, callback) {
  if (!callback && typeof(parms === 'function')) {
    callback = parms;
    parms = null;
  }

  var options = {
    url: BASE_OTHER + url
  };
  if (parms) {
    options.qs = parms;
  }
  this.req(options, responseHandler(callback));
};

// End Legacy for callbacks.

const makeRequest = function (parms, options) {
  return this.reqPromise(parms ? { ...options, qs: parms } : options);
};


ClientApi.prototype.requestPromise = function (url, parms) {
  return makeRequest.call(this, parms, { url: BASE + url });
};


ClientApi.prototype.requestPromiseOther = function (url, parms) {
  return makeRequest.call(this, parms, { url: BASE_OTHER + url });
};

module.exports = ClientApi;
