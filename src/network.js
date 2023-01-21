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
 **/
Network.prototype.importRootCaCert = function (filepath, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/importRootCaCert/', {'filePath': filepath}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/importRootCaCert/', {'filePath': filepath});
};

/**
 * Sets the Root CA certificate validity. Used when generating a new Root CA certificate.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setRootCaCertValidity = function (validity, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setRootCaCertValidity/', {'validity': validity}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setRootCaCertValidity/', {'validity': validity});
};

/**
 * Sets the server certificate validity. Used when generating server certificates.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setServerCertValidity = function (validity, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setServerCertValidity/', {'validity': validity}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setServerCertValidity/', {'validity': validity});
};

/**
 * Adds an alias for the local servers/proxies.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.addAlias = function (name, enabled, callback) {
  const params = {'name': name};
  if (enabled && enabled !== null) {
    params['enabled'] = enabled;
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
 **/
Network.prototype.addLocalServer = function (address, port, api, proxy, behindnat, decoderesponse, removeacceptencoding, callback) {
  const params = {'address': address, 'port': port};
  if (api && api !== null) {
    params['api'] = api;
  }
  if (proxy && proxy !== null) {
    params['proxy'] = proxy;
  }
  if (behindnat && behindnat !== null) {
    params['behindNat'] = behindnat;
  }
  if (decoderesponse && decoderesponse !== null) {
    params['decodeResponse'] = decoderesponse;
  }
  if (removeacceptencoding && removeacceptencoding !== null) {
    params['removeAcceptEncoding'] = removeacceptencoding;
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
 **/
Network.prototype.addPassThrough = function (authority, enabled, callback) {
  const params = {'authority': authority};
  if (enabled && enabled !== null) {
    params['enabled'] = enabled;
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
 **/
Network.prototype.removeAlias = function (name, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/removeAlias/', {'name': name}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/removeAlias/', {'name': name});
};

/**
 * Removes a local server/proxy.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.removeLocalServer = function (address, port, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/removeLocalServer/', {'address': address, 'port': port}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/removeLocalServer/', {'address': address, 'port': port});
};

/**
 * Removes a pass-through.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.removePassThrough = function (authority, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/removePassThrough/', {'authority': authority}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/removePassThrough/', {'authority': authority});
};

/**
 * Sets whether or not an alias is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setAliasEnabled = function (name, enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setAliasEnabled/', {'name': name, 'enabled': enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setAliasEnabled/', {'name': name, 'enabled': enabled});
};

/**
 * Sets whether or not a pass-through is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setPassThroughEnabled = function (authority, enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setPassThroughEnabled/', {'authority': authority, 'enabled': enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setPassThroughEnabled/', {'authority': authority, 'enabled': enabled});
};

/**
 * Sets the timeout, for reads and connects.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setConnectionTimeout = function (timeout, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setConnectionTimeout/', {'timeout': timeout}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setConnectionTimeout/', {'timeout': timeout});
};

/**
 * Sets the default user-agent.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setDefaultUserAgent = function (useragent, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setDefaultUserAgent/', {'userAgent': useragent}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setDefaultUserAgent/', {'userAgent': useragent});
};

/**
 * Sets the TTL of successful DNS queries.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setDnsTtlSuccessfulQueries = function (ttl, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setDnsTtlSuccessfulQueries/', {'ttl': ttl}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setDnsTtlSuccessfulQueries/', {'ttl': ttl});
};

/**
 * Adds a host to be excluded from the HTTP proxy.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.addHttpProxyExclusion = function (host, enabled, callback) {
  const params = {'host': host};
  if (enabled && enabled !== null) {
    params['enabled'] = enabled;
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
 **/
Network.prototype.removeHttpProxyExclusion = function (host, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/removeHttpProxyExclusion/', {'host': host}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/removeHttpProxyExclusion/', {'host': host});
};

/**
 * Sets the HTTP proxy configuration.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setHttpProxy = function (host, port, realm, username, password, callback) {
  const params = {'host': host, 'port': port};
  if (realm && realm !== null) {
    params['realm'] = realm;
  }
  if (username && username !== null) {
    params['username'] = username;
  }
  if (password && password !== null) {
    params['password'] = password;
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
 **/
Network.prototype.setHttpProxyAuthEnabled = function (enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setHttpProxyAuthEnabled/', {'enabled': enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setHttpProxyAuthEnabled/', {'enabled': enabled});
};

/**
 * Sets whether or not the HTTP proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setHttpProxyEnabled = function (enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setHttpProxyEnabled/', {'enabled': enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setHttpProxyEnabled/', {'enabled': enabled});
};

/**
 * Sets whether or not an HTTP proxy exclusion is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setHttpProxyExclusionEnabled = function (host, enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setHttpProxyExclusionEnabled/', {'host': host, 'enabled': enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setHttpProxyExclusionEnabled/', {'host': host, 'enabled': enabled});
};

/**
 * Sets the SOCKS proxy configuration.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setSocksProxy = function (host, port, version, usedns, username, password, callback) {
  const params = {'host': host, 'port': port};
  if (version && version !== null) {
    params['version'] = version;
  }
  if (usedns && usedns !== null) {
    params['useDns'] = usedns;
  }
  if (username && username !== null) {
    params['username'] = username;
  }
  if (password && password !== null) {
    params['password'] = password;
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
 **/
Network.prototype.setSocksProxyEnabled = function (enabled, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setSocksProxyEnabled/', {'enabled': enabled}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setSocksProxyEnabled/', {'enabled': enabled});
};

/**
 * Sets whether or not to use the global HTTP state.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.setUseGlobalHttpState = function (use, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setUseGlobalHttpState/', {'use': use}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setUseGlobalHttpState/', {'use': use});
};

/**
 * Adds a client certificate contained in a PKCS#12 file, the certificate is automatically set as active and used.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.addPkcs12ClientCertificate = function (filepath, password, index, callback) {
  const params = {'filePath': filepath, 'password': password};
  if (index && index !== null) {
    params['index'] = index;
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
 **/
Network.prototype.setUseClientCertificate = function (use, callback) {
  if (typeof callback === 'function') {
    this.api.request('/network/action/setUseClientCertificate/', {'use': use}, callback);
    return;
  }
  return this.api.requestPromise('/network/action/setUseClientCertificate/', {'use': use});
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
 **/
Network.prototype.setProxy = function (proxy, callback) {
  if (typeof callback === 'function') {
    this.api.requestOther('/network/other/setProxy/', {'proxy': proxy}, callback);
    return;
  }
  return this.api.requestPromiseOther('/network/other/setProxy/', {'proxy': proxy});
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
