<div align="center">
  <br/>
  <a href="https://github.com/zaproxy/zap-api-nodejs" title="zaproxy">
    <img width=186px src="assets/images/ZapNodeApi.png" alt="zap-api-nodejs logo">
  </a>
  <br/>
<br/>
<h2>OWASP ZAP Node API</h2>
<br/><br/>

<a href="https://www.apache.org/licenses/LICENSE-2.0.html" title="License">
  <img src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg" alt="License"/>
</a>
<a href="https://snyk.io/test/github/zaproxy/zap-api-nodejs?targetFile=package.json">
  <img src="https://snyk.io/test/github/zaproxy/zap-api-nodejs/badge.svg?targetFile=package.json" alt="Known Vulnerabilities"/>
</a>

<br/><br/>
</div>

The NodeJS implementation to access the [OWASP ZAP API](https://github.com/zaproxy/zaproxy/wiki/ApiDetails). For more information
about OWASP ZAP consult the (main) [OWASP ZAP project](https://github.com/zaproxy/zaproxy/).

## Install

```
npm install zaproxy
```

## Usage

By default ZAP [requires an API key](https://github.com/zaproxy/zaproxy/wiki/FAQapikey) to be sent with every request. This is done automatically providing you supply the same API key when you instantiate the `ZapClient` that you use to run ZAP with. All following API requests will use this same API key.  
You can disable the API key when running ZAP if you are on a trusted network and understand the risks. If you choose to do so, you may omit the `apiKey` property of the `zapOptions` object supplied to `ZapClient`.

### Instantiate the Node API:

```js
const ZapClient = require('zaproxy');

const zapOptions = {
  apiKey: <the key you supplied to ZAP when you started it>, // I.E. 'v90dnblpqs1pcac991tn2oudl'
  proxy: <protocol>://<host>:<port> // I.E. 'http://192.168.0.10:8080'
};

const zaproxy = new ZapClient(zapOptions);
```

### Use the Node API:

Callbacks:

```js
zaproxy.spider.scanAsUser(contextId, userId, sutBaseUrl, maxChildren, recurse, subtreeonly, (err, resp) => {
  if (err) // Handle the error.
  if (resp) // Handle the response.
});
```

Promises:

```js
await zaproxy.spider.scanAsUser(contextId, userId, sutBaseUrl, maxChildren)
  .then(
    resp => console.log(JSON.stringify(resp)),
    err => `Error occurred while attempting to scan as user. Error was: ${err.message}`
  );
```

## API

For a full API list, see [https://github.com/zaproxy/zaproxy/wiki/ApiGen_Index](https://github.com/zaproxy/zaproxy/wiki/ApiGen_Index).

The Node API methods have the same signature as the API documentation, featuring both callback and promise based interfaces, making everyone happy.

The API key is no longer explicitly required on any Node API method invocations. Unless you have disabled the API key when running ZAP, simply provide it on Node API instantiation as mentioned in the [Usage](#usage) section and it will be provided automatically with each request to the ZAP API.

**Callback mode**: If you provide a callback as the last parameter, the callback will be called with error and response arguments, with the response being an object that corresponds to the JSON output of the API call.  
**Promise mode**: If you wish to use the modern approach, simply don't provide a callback, and a native promise will be returned for you to deal with as you wish.

## Getting Help

For help using the OWASP ZAP API refer to:

  * [Wiki](https://github.com/zaproxy/zaproxy/wiki/ApiDetails)
  * [OWASP ZAP User Group](https://groups.google.com/group/zaproxy-users) - for asking questions;
  * IRC: irc.mozilla.org #websectools (eg [using Mibbit](http://chat.mibbit.com/?server=irc.mozilla.org%3A%2B6697&channel=%23websectools)) - chat with core ZAP developers (European office hours usually best)

For specific help with this Node API, contact [@binarymist](https://github.com/binarymist) (the maintainer).
  
## Issues

To report issues related to the OWASP ZAP Node API, bugs and enhancements requests, use the [issue tracker of the main OWASP ZAP project](https://github.com/zaproxy/zaproxy/issues).
