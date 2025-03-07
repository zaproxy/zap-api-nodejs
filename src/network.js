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

class Network {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Gets the Root CA certificate validity, in days.
   * Used when generating a new Root CA certificate.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the Root CA certificate validity.
   */
  getRootCaCertValidity = () =>
    this.api.request('/network/view/getRootCaCertValidity');

  /**
   * Gets the server certificate validity, in days.
   * Used when generating server certificates.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the server certificate validity.
   */
  getServerCertValidity = () =>
    this.api.request('/network/view/getServerCertValidity');

  /**
   * Gets the aliases used to identify the local servers/proxies.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the aliases.
   */
  getAliases = () =>
    this.api.request('/network/view/getAliases');

  /**
   * Gets the local servers/proxies.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the local servers.
   */
  getLocalServers = () =>
    this.api.request('/network/view/getLocalServers');

  /**
   * Gets the authorities that will pass-through the local proxies.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the pass-through authorities.
   */
  getPassThroughs = () =>
    this.api.request('/network/view/getPassThroughs');

  /**
   * Gets the connection timeout, in seconds.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the connection timeout.
   */
  getConnectionTimeout = () =>
    this.api.request('/network/view/getConnectionTimeout');

  /**
   * Gets the default user-agent.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the default user-agent.
   */
  getDefaultUserAgent = () =>
    this.api.request('/network/view/getDefaultUserAgent');

  /**
   * Gets the TTL (in seconds) of successful DNS queries.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the TTL of successful DNS queries.
   */
  getDnsTtlSuccessfulQueries = () =>
    this.api.request('/network/view/getDnsTtlSuccessfulQueries');

  /**
   * Gets the HTTP proxy.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the HTTP proxy.
   */
  getHttpProxy = () =>
    this.api.request('/network/view/getHttpProxy');

  /**
   * Gets the HTTP proxy exclusions.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the HTTP proxy exclusions.
   */
  getHttpProxyExclusions = () =>
    this.api.request('/network/view/getHttpProxyExclusions');

  /**
   * Gets the SOCKS proxy.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the SOCKS proxy.
   */
  getSocksProxy = () =>
    this.api.request('/network/view/getSocksProxy');

  /**
   * Tells whether the HTTP proxy authentication is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the authentication status.
   */
  isHttpProxyAuthEnabled = () =>
    this.api.request('/network/view/isHttpProxyAuthEnabled');

  /**
   * Tells whether the HTTP proxy is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the enabled status.
   */
  isHttpProxyEnabled = () =>
    this.api.request('/network/view/isHttpProxyEnabled');

  /**
   * Tells whether the SOCKS proxy is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the enabled status.
   */
  isSocksProxyEnabled = () =>
    this.api.request('/network/view/isSocksProxyEnabled');

  /**
   * Tells whether to use global HTTP state.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the global HTTP state usage.
   */
  isUseGlobalHttpState = () =>
    this.api.request('/network/view/isUseGlobalHttpState');

  /**
   * Generates a new Root CA certificate, used to issue server certificates.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving when the certificate is generated.
   */
  generateRootCaCert = () =>
    this.api.request('/network/action/generateRootCaCert');

  /**
   * Imports a Root CA certificate to be used to issue server certificates.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ filepath: string }} args - Object containing the file path to the PEM file.
   * @returns {Promise<any>} A promise resolving when the certificate is imported.
   */
  importRootCaCert = ({ filepath }) =>
    this.api.request('/network/action/importRootCaCert', { filePath: filepath });

  /**
   * Sets the Root CA certificate validity.
   * Used when generating a new Root CA certificate.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ validity: string }} args - Object containing the validity (in days).
   * @returns {Promise<any>} A promise resolving when the validity is set.
   */
  setRootCaCertValidity = ({ validity }) =>
    this.api.request('/network/action/setRootCaCertValidity', { validity });

  /**
   * Sets the server certificate validity.
   * Used when generating server certificates.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ validity: string }} args - Object containing the validity (in days).
   * @returns {Promise<any>} A promise resolving when the validity is set.
   */
  setServerCertValidity = ({ validity }) =>
    this.api.request('/network/action/setServerCertValidity', { validity });

  /**
   * Adds an alias for the local servers/proxies.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ name: string, enabled?: string }} args - Object containing the alias name and optional enabled state.
   * @returns {Promise<any>} A promise resolving when the alias is added.
   */
  addAlias = ({ name, enabled }) => {
    const params = { name };
    if (enabled) params.enabled = enabled;
    return this.api.request('/network/action/addAlias', params);
  };

  /**
   * Adds a local server/proxy.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{
   *   address: string,
   *   port: string,
   *   api?: string,
   *   proxy?: string,
   *   behindNat?: string,
   *   decodeResponse?: string,
   *   removeAcceptEncoding?: string,
   * }} args - Object containing the server details.
   * @returns {Promise<any>} A promise resolving when the server is added.
   */
  addLocalServer = ({ address, port, api, proxy, behindNat, decodeResponse, removeAcceptEncoding }) => {
    return this.api.request('/network/action/addLocalServer', { address, port, api, proxy, behindNat, decodeResponse, removeAcceptEncoding });
  };

  /**
   * Adds an authority to pass-through the local proxies.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ authority: string, enabled?: string }} args - Object containing the authority and optional enabled state.
   * @returns {Promise<any>} A promise resolving when the authority is added.
   */
  addPassThrough = ({ authority, enabled }) => {
    const params = { authority };
    if (enabled) params.enabled = enabled;
    return this.api.request('/network/action/addPassThrough', params);
  };

  /**
   * Removes an alias.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ name: string }} args - Object containing the alias name.
   * @returns {Promise<any>} A promise resolving when the alias is removed.
   */
  removeAlias = ({ name }) =>
    this.api.request('/network/action/removeAlias', { name });

  /**
   * Removes a local server/proxy.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ address: string, port: string }} args - Object containing the address and port.
   * @returns {Promise<any>} A promise resolving when the server is removed.
   */
  removeLocalServer = ({ address, port }) =>
    this.api.request('/network/action/removeLocalServer', { address, port });

  /**
   * Removes a pass-through.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ authority: string }} args - Object containing the authority.
   * @returns {Promise<any>} A promise resolving when the pass-through is removed.
   */
  removePassThrough = ({ authority }) =>
    this.api.request('/network/action/removePassThrough', { authority });

  /**
   * Sets whether an alias is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ name: string, enabled: string }} args - Object containing the alias name and enabled state.
   * @returns {Promise<any>} A promise resolving when the alias state is updated.
   */
  setAliasEnabled = ({ name, enabled }) =>
    this.api.request('/network/action/setAliasEnabled', { name, enabled });

  /**
   * Sets whether a pass-through is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ authority: string, enabled: string }} args - Object containing the authority and enabled state.
   * @returns {Promise<any>} A promise resolving when the pass-through state is updated.
   */
  setPassThroughEnabled = ({ authority, enabled }) =>
    this.api.request('/network/action/setPassThroughEnabled', { authority, enabled });

  /**
   * Sets the connection timeout, for reads and connects.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ timeout: string }} args - Object containing the timeout (in seconds).
   * @returns {Promise<any>} A promise resolving when the timeout is set.
   */
  setConnectionTimeout = ({ timeout }) =>
    this.api.request('/network/action/setConnectionTimeout', { timeout });

  /**
   * Sets the default user-agent.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ useragent: string }} args - Object containing the default user-agent.
   * @returns {Promise<any>} A promise resolving when the user-agent is set.
   */
  setDefaultUserAgent = ({ useragent }) =>
    this.api.request('/network/action/setDefaultUserAgent', { userAgent: useragent });

  /**
   * Sets the TTL of successful DNS queries.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ ttl: string }} args - Object containing the TTL (in seconds).
   * @returns {Promise<any>} A promise resolving when the TTL is set.
   */
  setDnsTtlSuccessfulQueries = ({ ttl }) =>
    this.api.request('/network/action/setDnsTtlSuccessfulQueries', { ttl });

  /**
   * Adds a host to be excluded from the HTTP proxy.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ host: string, enabled?: string }} args - Object containing the host and optional enabled state.
   * @returns {Promise<any>} A promise resolving when the exclusion is added.
   */
  addHttpProxyExclusion = ({ host, enabled }) => {
    const params = { host };
    if (enabled) params.enabled = enabled;
    return this.api.request('/network/action/addHttpProxyExclusion', params);
  };

  /**
   * Removes an HTTP proxy exclusion.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ host: string }} args - Object containing the host.
   * @returns {Promise<any>} A promise resolving when the exclusion is removed.
   */
  removeHttpProxyExclusion = ({ host }) =>
    this.api.request('/network/action/removeHttpProxyExclusion', { host });

  /**
   * Sets the HTTP proxy configuration.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{
   *   host: string,
   *   port: string,
   *   realm?: string,
   *   username?: string,
   *   password?: string,
   * }} args - Object containing the proxy configuration.
   * @returns {Promise<any>} A promise resolving when the proxy is set.
   */
  setHttpProxy = ({ host, port, realm, username, password }) => {
    return this.api.request('/network/action/setHttpProxy', { host, port, realm, username, password });
  };

  /**
   * Sets whether the HTTP proxy authentication is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ enabled: string }} args - Object containing the enabled state.
   * @returns {Promise<any>} A promise resolving when the authentication state is set.
   */
  setHttpProxyAuthEnabled = ({ enabled }) =>
    this.api.request('/network/action/setHttpProxyAuthEnabled', { enabled });

  /**
   * Sets whether the HTTP proxy is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ enabled: string }} args - Object containing the enabled state.
   * @returns {Promise<any>} A promise resolving when the proxy state is set.
   */
  setHttpProxyEnabled = ({ enabled }) =>
    this.api.request('/network/action/setHttpProxyEnabled', { enabled });

  /**
   * Sets whether an HTTP proxy exclusion is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ host: string, enabled: string }} args - Object containing the host and enabled state.
   * @returns {Promise<any>} A promise resolving when the exclusion state is set.
   */
  setHttpProxyExclusionEnabled = ({ host, enabled }) =>
    this.api.request('/network/action/setHttpProxyExclusionEnabled', { host, enabled });

  /**
   * Sets the SOCKS proxy configuration.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{
   *   host: string,
   *   port: string,
   *   version?: string,
   *   useDns?: string,
   *   username?: string,
   *   password?: string,
   * }} args - Object containing the SOCKS proxy configuration.
   * @returns {Promise<any>} A promise resolving when the configuration is set.
   */
  setSocksProxy = ({ host, port, version, useDns, username, password }) => {
    return this.api.request('/network/action/setSocksProxy', { host, port, version, useDns, username, password });
  };

  /**
   * Sets whether the SOCKS proxy is enabled.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ enabled: string }} args - Object containing the enabled state.
   * @returns {Promise<any>} A promise resolving when the proxy state is set.
   */
  setSocksProxyEnabled = ({ enabled }) =>
    this.api.request('/network/action/setSocksProxyEnabled', { enabled });

  /**
   * Sets whether to use the global HTTP state.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ use: string }} args - Object containing the use state.
   * @returns {Promise<any>} A promise resolving when the global HTTP state is updated.
   */
  setUseGlobalHttpState = ({ use }) =>
    this.api.request('/network/action/setUseGlobalHttpState', { use });

  /**
   * Adds a client certificate contained in a PKCS#12 file.
   * The certificate is automatically set as active and used.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ filepath: string, password: string, index?: string }} args - Object containing the file path, password, and optional index.
   * @returns {Promise<any>} A promise resolving when the certificate is added.
   */
  addPkcs12ClientCertificate = ({ filepath, password, index }) => {
    const params = { filePath: filepath, password };
    if (index) params.index = index;
    return this.api.request('/network/action/addPkcs12ClientCertificate', params);
  };

  /**
   * Sets whether to use the active client certificate.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ use: string }} args - Object containing the use state.
   * @returns {Promise<any>} A promise resolving when the client certificate state is updated.
   */
  setUseClientCertificate = ({ use }) =>
    this.api.request('/network/action/setUseClientCertificate', { use });

  /**
   * Provides a PAC file, proxying through the main proxy.
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the PAC file content.
   */
  proxypac = () =>
    this.api.request('/network/other/proxy.pac/');

  /**
   * Sets the HTTP proxy configuration using a JSON object.
   * This component is optional and the API will only work if it is installed.
   *
   * @param {{ proxy: string }} args - Object containing the HTTP proxy configuration.
   * @returns {Promise<any>} A promise resolving when the proxy is set.
   */
  setProxy = ({ proxy }) =>
    this.api.request('/network/other/setProxy/', { proxy });

  /**
   * Gets the Root CA certificate used to issue server certificates.
   * Suitable for import into client applications (e.g. browsers).
   * This component is optional and the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the Root CA certificate.
   */
  rootCaCert = () =>
    this.api.request('/network/other/rootCaCert/');
}

module.exports = Network;
