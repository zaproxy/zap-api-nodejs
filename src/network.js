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
function Network(clientApi) {
  this.api = clientApi;
}

/**
 * Gets the Root CA certificate validity, in days. Used when generating a new Root CA certificate.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getRootCaCertValidity = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getRootCaCertValidity/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getRootCaCertValidity/');
};

/**
 * Gets the server certificate validity, in days. Used when generating server certificates.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getServerCertValidity = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getServerCertValidity/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getServerCertValidity/');
};

/**
 * Gets the aliases used to identify the local servers/proxies.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getAliases = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getAliases/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getAliases/');
};

/**
 * Gets the local servers/proxies.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getLocalServers = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getLocalServers/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getLocalServers/');
};

/**
 * Gets the authorities that will pass-through the local proxies.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getPassThroughs = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getPassThroughs/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getPassThroughs/');
};

/**
 * Gets the connection timeout, in seconds.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getConnectionTimeout = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getConnectionTimeout/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getConnectionTimeout/');
};

/**
 * Gets the default user-agent.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getDefaultUserAgent = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getDefaultUserAgent/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getDefaultUserAgent/');
};

/**
 * Gets the TTL (in seconds) of successful DNS queries.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getDnsTtlSuccessfulQueries = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getDnsTtlSuccessfulQueries/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getDnsTtlSuccessfulQueries/');
};

/**
 * Gets the HTTP proxy.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getHttpProxy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getHttpProxy/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getHttpProxy/');
};

/**
 * Gets the HTTP proxy exclusions.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getHttpProxyExclusions = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getHttpProxyExclusions/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getHttpProxyExclusions/');
};

/**
 * Gets the SOCKS proxy.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getSocksProxy = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/getSocksProxy/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/getSocksProxy/');
};

/**
 * Tells whether or not the HTTP proxy authentication is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.isHttpProxyAuthEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/isHttpProxyAuthEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/isHttpProxyAuthEnabled/');
};

/**
 * Tells whether or not the HTTP proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.isHttpProxyEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/isHttpProxyEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/isHttpProxyEnabled/');
};

/**
 * Tells whether or not the SOCKS proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.isSocksProxyEnabled = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/isSocksProxyEnabled/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/isSocksProxyEnabled/');
};

/**
 * Tells whether or not to use global HTTP state.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.isUseGlobalHttpState = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/view/isUseGlobalHttpState/', callback);
    return;
  }
  return this.api.requestPromise('/network/view/isUseGlobalHttpState/');
};

/**
 * Generates a new Root CA certificate, used to issue server certificates.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.generateRootCaCert = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/generateRootCaCert/', callback);
    return;
  }
  return this.api.requestPromise('/network/action/generateRootCaCert/');
};

/**
 * Imports a Root CA certificate to be used to issue server certificates.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} filepath - The file system path to the PEM file, containing the certificate and private key.
 **/
Network.prototype.importRootCaCert = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/importRootCaCert/', {'filePath': args.filepath}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/importRootCaCert/', {'filePath': args.filepath});
};

/**
 * Sets the Root CA certificate validity. Used when generating a new Root CA certificate.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} validity - The number of days that the generated Root CA certificate will be valid for.
 **/
Network.prototype.setRootCaCertValidity = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setRootCaCertValidity/', {'validity': args.validity}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setRootCaCertValidity/', {'validity': args.validity});
};

/**
 * Sets the server certificate validity. Used when generating server certificates.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} validity - The number of days that the generated server certificates will be valid for.
 **/
Network.prototype.setServerCertValidity = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setServerCertValidity/', {'validity': args.validity}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setServerCertValidity/', {'validity': args.validity});
};

/**
 * Adds an alias for the local servers/proxies.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} name - The name of the alias.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.addAlias = function (args, callback) {
  const params = {'name': args.name};
  if (args.enabled && args.enabled !== null) {
    params['enabled'] = args.enabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/network/action/addAlias/', params, callback);
    return;
  }
  return this.api.requestPromise('/network/action/addAlias/', params);
};

/**
 * Adds a local server/proxy.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} address - The address of the local server/proxy.
 * @param {string} port - The port of the local server/proxy.
 * @param {string} api - If the ZAP API is available, true or false.
 * @param {string} proxy - If the local server should proxy, true or false.
 * @param {string} behindnat - If the local server is behind NAT, true or false.
 * @param {string} decoderesponse - If the response should be decoded, true or false.
 * @param {string} removeacceptencoding - If the request header Accept-Encoding should be removed, true or false.
 **/
Network.prototype.addLocalServer = function (args, callback) {
  const params = {'address': args.address, 'port': args.port};
  if (args.api && args.api !== null) {
    params['api'] = args.api;
  }
  if (args.proxy && args.proxy !== null) {
    params['proxy'] = args.proxy;
  }
  if (args.behindnat && args.behindnat !== null) {
    params['behindNat'] = args.behindnat;
  }
  if (args.decoderesponse && args.decoderesponse !== null) {
    params['decodeResponse'] = args.decoderesponse;
  }
  if (args.removeacceptencoding && args.removeacceptencoding !== null) {
    params['removeAcceptEncoding'] = args.removeacceptencoding;
  }
  if (typeof callback === 'function') {
    this.api.request('/network/action/addLocalServer/', params, callback);
    return;
  }
  return this.api.requestPromise('/network/action/addLocalServer/', params);
};

/**
 * Adds an authority to pass-through the local proxies.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} authority - The value of the authority, can be a regular expression.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.addPassThrough = function (args, callback) {
  const params = {'authority': args.authority};
  if (args.enabled && args.enabled !== null) {
    params['enabled'] = args.enabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/network/action/addPassThrough/', params, callback);
    return;
  }
  return this.api.requestPromise('/network/action/addPassThrough/', params);
};

/**
 * Removes an alias.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} name - The name of the alias.
 **/
Network.prototype.removeAlias = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/removeAlias/', {'name': args.name}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/removeAlias/', {'name': args.name});
};

/**
 * Removes a local server/proxy.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} address - The address of the local server/proxy.
 * @param {string} port - The port of the local server/proxy.
 **/
Network.prototype.removeLocalServer = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/removeLocalServer/', {'address': args.address, 'port': args.port}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/removeLocalServer/', {'address': args.address, 'port': args.port});
};

/**
 * Removes a pass-through.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} authority - The value of the authority.
 **/
Network.prototype.removePassThrough = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/removePassThrough/', {'authority': args.authority}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/removePassThrough/', {'authority': args.authority});
};

/**
 * Sets whether or not an alias is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} name - The name of the alias.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setAliasEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setAliasEnabled/', {'name': args.name, 'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setAliasEnabled/', {'name': args.name, 'enabled': args.enabled});
};

/**
 * Sets whether or not a pass-through is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} authority - The value of the authority.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setPassThroughEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setPassThroughEnabled/', {'authority': args.authority, 'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setPassThroughEnabled/', {'authority': args.authority, 'enabled': args.enabled});
};

/**
 * Sets the timeout, for reads and connects.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} timeout - The timeout, in seconds.
 **/
Network.prototype.setConnectionTimeout = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setConnectionTimeout/', {'timeout': args.timeout}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setConnectionTimeout/', {'timeout': args.timeout});
};

/**
 * Sets the default user-agent.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} useragent - The default user-agent.
 **/
Network.prototype.setDefaultUserAgent = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setDefaultUserAgent/', {'userAgent': args.useragent}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setDefaultUserAgent/', {'userAgent': args.useragent});
};

/**
 * Sets the TTL of successful DNS queries.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} ttl - The TTL, in seconds. Negative number, cache forever. Zero, disables caching. Positive number, the number of seconds the successful DNS queries will be cached.
 **/
Network.prototype.setDnsTtlSuccessfulQueries = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setDnsTtlSuccessfulQueries/', {'ttl': args.ttl}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setDnsTtlSuccessfulQueries/', {'ttl': args.ttl});
};

/**
 * Adds a host to be excluded from the HTTP proxy.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The value of the host, a regular expression.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.addHttpProxyExclusion = function (args, callback) {
  const params = {'host': args.host};
  if (args.enabled && args.enabled !== null) {
    params['enabled'] = args.enabled;
  }
  if (typeof callback === 'function') {
    this.api.request('/network/action/addHttpProxyExclusion/', params, callback);
    return;
  }
  return this.api.requestPromise('/network/action/addHttpProxyExclusion/', params);
};

/**
 * Removes an HTTP proxy exclusion.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The value of the host.
 **/
Network.prototype.removeHttpProxyExclusion = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/removeHttpProxyExclusion/', {'host': args.host}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/removeHttpProxyExclusion/', {'host': args.host});
};

/**
 * Sets the HTTP proxy configuration.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The host, name or address.
 * @param {string} port - The port.
 * @param {string} realm - The authentication realm.
 * @param {string} username - The user name.
 * @param {string} password - The password.
 **/
Network.prototype.setHttpProxy = function (args, callback) {
  const params = {'host': args.host, 'port': args.port};
  if (args.realm && args.realm !== null) {
    params['realm'] = args.realm;
  }
  if (args.username && args.username !== null) {
    params['username'] = args.username;
  }
  if (args.password && args.password !== null) {
    params['password'] = args.password;
  }
  if (typeof callback === 'function') {
    this.api.request('/network/action/setHttpProxy/', params, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setHttpProxy/', params);
};

/**
 * Sets whether or not the HTTP proxy authentication is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setHttpProxyAuthEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setHttpProxyAuthEnabled/', {'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setHttpProxyAuthEnabled/', {'enabled': args.enabled});
};

/**
 * Sets whether or not the HTTP proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setHttpProxyEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setHttpProxyEnabled/', {'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setHttpProxyEnabled/', {'enabled': args.enabled});
};

/**
 * Sets whether or not an HTTP proxy exclusion is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The value of the host.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setHttpProxyExclusionEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setHttpProxyExclusionEnabled/', {'host': args.host, 'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setHttpProxyExclusionEnabled/', {'host': args.host, 'enabled': args.enabled});
};

/**
 * Sets the SOCKS proxy configuration.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The host, name or address.
 * @param {string} port - The port.
 * @param {string} version - The SOCKS version.
 * @param {string} usedns - If the names should be resolved by the SOCKS proxy, true or false.
 * @param {string} username - The user name.
 * @param {string} password - The password.
 **/
Network.prototype.setSocksProxy = function (args, callback) {
  const params = {'host': args.host, 'port': args.port};
  if (args.version && args.version !== null) {
    params['version'] = args.version;
  }
  if (args.usedns && args.usedns !== null) {
    params['useDns'] = args.usedns;
  }
  if (args.username && args.username !== null) {
    params['username'] = args.username;
  }
  if (args.password && args.password !== null) {
    params['password'] = args.password;
  }
  if (typeof callback === 'function') {
    this.api.request('/network/action/setSocksProxy/', params, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setSocksProxy/', params);
};

/**
 * Sets whether or not the SOCKS proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setSocksProxyEnabled = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setSocksProxyEnabled/', {'enabled': args.enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setSocksProxyEnabled/', {'enabled': args.enabled});
};

/**
 * Sets whether or not to use the global HTTP state.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} use - The use state, true or false.
 **/
Network.prototype.setUseGlobalHttpState = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setUseGlobalHttpState/', {'use': args.use}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setUseGlobalHttpState/', {'use': args.use});
};

/**
 * Adds a client certificate contained in a PKCS#12 file, the certificate is automatically set as active and used.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} filepath - The file path.
 * @param {string} password - The password for the file.
 * @param {string} index - The index of the certificate in the file, defaults to 0.
 **/
Network.prototype.addPkcs12ClientCertificate = function (args, callback) {
  const params = {'filePath': args.filepath, 'password': args.password};
  if (args.index && args.index !== null) {
    params['index'] = args.index;
  }
  if (typeof callback === 'function') {
    this.api.request('/network/action/addPkcs12ClientCertificate/', params, callback);
    return;
  }
  return this.api.requestPromise('/network/action/addPkcs12ClientCertificate/', params);
};

/**
 * Sets whether or not to use the active client certificate.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} use - The use state, true or false.
 **/
Network.prototype.setUseClientCertificate = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setUseClientCertificate/', {'use': args.use}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setUseClientCertificate/', {'use': args.use});
};

/**
 * Provides a PAC file, proxying through the main proxy.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.proxypac = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/network/other/proxy.pac/', callback);
    return;
  }
  return this.api.requestPromiseOther('/network/other/proxy.pac/');
};

/**
 * Sets the HTTP proxy configuration.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} proxy - The JSON object containing the HTTP proxy configuration.
 **/
Network.prototype.setProxy = function (args, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/network/other/setProxy/', {'proxy': args.proxy}, callback);
    return;
  }
  return this.api.requestPromiseOther('/network/other/setProxy/', {'proxy': args.proxy});
};

/**
 * Gets the Root CA certificate used to issue server certificates. Suitable to import into client applications (e.g. browsers).
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.rootCaCert = function (callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/network/other/rootCaCert/', callback);
    return;
  }
  return this.api.requestPromiseOther('/network/other/rootCaCert/');
};

module.exports = Network;
