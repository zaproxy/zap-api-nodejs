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
Network.prototype.getRootCaCertValidity = async function () {
    return await this.api.request('/network/view/getRootCaCertValidity/')
}

/**
 * Gets the server certificate validity, in days. Used when generating server certificates.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getServerCertValidity = async function () {
    return await this.api.request('/network/view/getServerCertValidity/')
}

/**
 * Gets the aliases used to identify the local servers/proxies.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getAliases = async function () {
    return await this.api.request('/network/view/getAliases/')
}

/**
 * Gets the local servers/proxies.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getLocalServers = async function () {
    return await this.api.request('/network/view/getLocalServers/')
}

/**
 * Gets the authorities that will pass-through the local proxies.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getPassThroughs = async function () {
    return await this.api.request('/network/view/getPassThroughs/')
}

/**
 * Gets the connection timeout, in seconds.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getConnectionTimeout = async function () {
    return await this.api.request('/network/view/getConnectionTimeout/')
}

/**
 * Gets the default user-agent.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getDefaultUserAgent = async function () {
    return await this.api.request('/network/view/getDefaultUserAgent/')
}

/**
 * Gets the TTL (in seconds) of successful DNS queries.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getDnsTtlSuccessfulQueries = async function () {
    return await this.api.request('/network/view/getDnsTtlSuccessfulQueries/')
}

/**
 * Gets the HTTP proxy.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getHttpProxy = async function () {
    return await this.api.request('/network/view/getHttpProxy/')
}

/**
 * Gets the HTTP proxy exclusions.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getHttpProxyExclusions = async function () {
    return await this.api.request('/network/view/getHttpProxyExclusions/')
}

/**
 * Gets the SOCKS proxy.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.getSocksProxy = async function () {
    return await this.api.request('/network/view/getSocksProxy/')
}

/**
 * Tells whether or not the HTTP proxy authentication is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.isHttpProxyAuthEnabled = async function () {
    return await this.api.request('/network/view/isHttpProxyAuthEnabled/')
}

/**
 * Tells whether or not the HTTP proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.isHttpProxyEnabled = async function () {
    return await this.api.request('/network/view/isHttpProxyEnabled/')
}

/**
 * Tells whether or not the SOCKS proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.isSocksProxyEnabled = async function () {
    return await this.api.request('/network/view/isSocksProxyEnabled/')
}

/**
 * Tells whether or not to use global HTTP state.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.isUseGlobalHttpState = async function () {
    return await this.api.request('/network/view/isUseGlobalHttpState/')
}

/**
 * Generates a new Root CA certificate, used to issue server certificates.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.generateRootCaCert = async function () {
    return await this.api.request('/network/action/generateRootCaCert/')
}

/**
 * Imports a Root CA certificate to be used to issue server certificates.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} filepath - The file system path to the PEM file, containing the certificate and private key.
 **/
Network.prototype.importRootCaCert = async function (args) {
    return await this.api.request('/network/action/importRootCaCert/', {'filePath': args.filepath })
}

/**
 * Sets the Root CA certificate validity. Used when generating a new Root CA certificate.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} validity - The number of days that the generated Root CA certificate will be valid for.
 **/
Network.prototype.setRootCaCertValidity = async function (args) {
    return await this.api.request('/network/action/setRootCaCertValidity/', {'validity': args.validity })
}

/**
 * Sets the server certificate validity. Used when generating server certificates.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} validity - The number of days that the generated server certificates will be valid for.
 **/
Network.prototype.setServerCertValidity = async function (args) {
    return await this.api.request('/network/action/setServerCertValidity/', {'validity': args.validity })
}

/**
 * Adds an alias for the local servers/proxies.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} name - The name of the alias.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.addAlias = async function (args) {
  const params = {'name': args.name };
  if (args.enabled && args.enabled !== null) {
    params['enabled'] = args.enabled;
  }
    return await this.api.request('/network/action/addAlias/', params)
}

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
Network.prototype.addLocalServer = async function (args) {
  const params = {'address': args.address, 'port': args.port };
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
    return await this.api.request('/network/action/addLocalServer/', params)
}

/**
 * Adds an authority to pass-through the local proxies.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} authority - The value of the authority, can be a regular expression.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.addPassThrough = async function (args) {
  const params = {'authority': args.authority };
  if (args.enabled && args.enabled !== null) {
    params['enabled'] = args.enabled;
  }
    return await this.api.request('/network/action/addPassThrough/', params)
}

/**
 * Removes an alias.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} name - The name of the alias.
 **/
Network.prototype.removeAlias = async function (args) {
    return await this.api.request('/network/action/removeAlias/', {'name': args.name })
}

/**
 * Removes a local server/proxy.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} address - The address of the local server/proxy.
 * @param {string} port - The port of the local server/proxy.
 **/
Network.prototype.removeLocalServer = async function (args) {
    return await this.api.request('/network/action/removeLocalServer/', {'address': args.address, 'port': args.port })
}

/**
 * Removes a pass-through.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} authority - The value of the authority.
 **/
Network.prototype.removePassThrough = async function (args) {
    return await this.api.request('/network/action/removePassThrough/', {'authority': args.authority })
}

/**
 * Sets whether or not an alias is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} name - The name of the alias.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setAliasEnabled = async function (args) {
    return await this.api.request('/network/action/setAliasEnabled/', {'name': args.name, 'enabled': args.enabled })
}

/**
 * Sets whether or not a pass-through is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} authority - The value of the authority.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setPassThroughEnabled = async function (args) {
    return await this.api.request('/network/action/setPassThroughEnabled/', {'authority': args.authority, 'enabled': args.enabled })
}

/**
 * Sets the timeout, for reads and connects.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} timeout - The timeout, in seconds.
 **/
Network.prototype.setConnectionTimeout = async function (args) {
    return await this.api.request('/network/action/setConnectionTimeout/', {'timeout': args.timeout })
}

/**
 * Sets the default user-agent.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} useragent - The default user-agent.
 **/
Network.prototype.setDefaultUserAgent = async function (args) {
    return await this.api.request('/network/action/setDefaultUserAgent/', {'userAgent': args.useragent })
}

/**
 * Sets the TTL of successful DNS queries.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} ttl - The TTL, in seconds. Negative number, cache forever. Zero, disables caching. Positive number, the number of seconds the successful DNS queries will be cached.
 **/
Network.prototype.setDnsTtlSuccessfulQueries = async function (args) {
    return await this.api.request('/network/action/setDnsTtlSuccessfulQueries/', {'ttl': args.ttl })
}

/**
 * Adds a host to be excluded from the HTTP proxy.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The value of the host, a regular expression.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.addHttpProxyExclusion = async function (args) {
  const params = {'host': args.host };
  if (args.enabled && args.enabled !== null) {
    params['enabled'] = args.enabled;
  }
    return await this.api.request('/network/action/addHttpProxyExclusion/', params)
}

/**
 * Removes an HTTP proxy exclusion.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The value of the host.
 **/
Network.prototype.removeHttpProxyExclusion = async function (args) {
    return await this.api.request('/network/action/removeHttpProxyExclusion/', {'host': args.host })
}

/**
 * Sets the HTTP proxy configuration.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The host, name or address.
 * @param {string} port - The port.
 * @param {string} realm - The authentication realm.
 * @param {string} username - The user name.
 * @param {string} password - The password.
 **/
Network.prototype.setHttpProxy = async function (args) {
  const params = {'host': args.host, 'port': args.port };
  if (args.realm && args.realm !== null) {
    params['realm'] = args.realm;
  }
  if (args.username && args.username !== null) {
    params['username'] = args.username;
  }
  if (args.password && args.password !== null) {
    params['password'] = args.password;
  }
    return await this.api.request('/network/action/setHttpProxy/', params)
}

/**
 * Sets whether or not the HTTP proxy authentication is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setHttpProxyAuthEnabled = async function (args) {
    return await this.api.request('/network/action/setHttpProxyAuthEnabled/', {'enabled': args.enabled })
}

/**
 * Sets whether or not the HTTP proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setHttpProxyEnabled = async function (args) {
    return await this.api.request('/network/action/setHttpProxyEnabled/', {'enabled': args.enabled })
}

/**
 * Sets whether or not an HTTP proxy exclusion is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} host - The value of the host.
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setHttpProxyExclusionEnabled = async function (args) {
    return await this.api.request('/network/action/setHttpProxyExclusionEnabled/', {'host': args.host, 'enabled': args.enabled })
}

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
Network.prototype.setSocksProxy = async function (args) {
  const params = {'host': args.host, 'port': args.port };
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
    return await this.api.request('/network/action/setSocksProxy/', params)
}

/**
 * Sets whether or not the SOCKS proxy is enabled.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} enabled - The enabled state, true or false.
 **/
Network.prototype.setSocksProxyEnabled = async function (args) {
    return await this.api.request('/network/action/setSocksProxyEnabled/', {'enabled': args.enabled })
}

/**
 * Sets whether or not to use the global HTTP state.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} use - The use state, true or false.
 **/
Network.prototype.setUseGlobalHttpState = async function (args) {
    return await this.api.request('/network/action/setUseGlobalHttpState/', {'use': args.use })
}

/**
 * Adds a client certificate contained in a PKCS#12 file, the certificate is automatically set as active and used.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} filepath - The file path.
 * @param {string} password - The password for the file.
 * @param {string} index - The index of the certificate in the file, defaults to 0.
 **/
Network.prototype.addPkcs12ClientCertificate = async function (args) {
  const params = {'filePath': args.filepath, 'password': args.password };
  if (args.index && args.index !== null) {
    params['index'] = args.index;
  }
    return await this.api.request('/network/action/addPkcs12ClientCertificate/', params)
}

/**
 * Sets whether or not to use the active client certificate.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} use - The use state, true or false.
 **/
Network.prototype.setUseClientCertificate = async function (args) {
    return await this.api.request('/network/action/setUseClientCertificate/', {'use': args.use })
}

/**
 * Provides a PAC file, proxying through the main proxy.
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.proxypac = async function () {
    return await this.api.request('/network/other/proxy.pac/', 'other')
}

/**
 * Sets the HTTP proxy configuration.
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} proxy - The JSON object containing the HTTP proxy configuration.
 **/
Network.prototype.setProxy = async function (args) {
    return await this.api.request('/network/other/setProxy/', {'proxy': args.proxy }, 'other')
}

/**
 * Gets the Root CA certificate used to issue server certificates. Suitable to import into client applications (e.g. browsers).
 * This component is optional and therefore the API will only work if it is installed
 **/
Network.prototype.rootCaCert = async function () {
    return await this.api.request('/network/other/rootCaCert/', 'other')
}

module.exports = Network;
