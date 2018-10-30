# OWASP ZAP Node API

[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

The NodeJS implementation to access the [OWASP ZAP API](https://github.com/zaproxy/zaproxy/wiki/ApiDetails). For more information
about OWASP ZAP consult the (main) [OWASP ZAP project](https://github.com/zaproxy/zaproxy/).

## Install

```
npm install zaproxy
```

## Usage

By default Zap requires an API key to be sent with every request. This is done automatically providing you supply the same API key when you instantiate the `ZapClient` that you use to run Zap with. All following API requests will use this same API key.  
You can dissable the API key when running Zap if you are on a trusted network and understand the risks. If you choose to do so, you may omit the `apiKey` property of the `zapOptions` object supplied to `ZapClient`.

### Instantiate the client API:

```js
const ZapClient = require('zaproxy');

const zapOptions = {
  apiKey: <the key you supplied to Zap when you started it>, // I.E. 'v90dnblpqs1pcac991tn2oudl'
  proxy: <protocol>://<host>:<port> // I.E. 'http://192.168.0.10:8080'
};

const zaproxy = new ZapClient(zapOptions);
```

### Use the client API:

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
    err => `Error occured while attempting to scan as user. Error was: ${err.message}`
  );
```

## API

For a full API list, see [https://github.com/zaproxy/zaproxy/wiki/ApiGen_Index](https://github.com/zaproxy/zaproxy/wiki/ApiGen_Index).

The Node.js API methods have the same signature as the API documentation, Featuring both callback and promise based interfaces, making everyone happy.

The API key is no longer explicitly required on any requests. Unless you have disabled the API key when running Zap, simply provide it on Node API instantiation as mentioned in the [Usage](#usage) section and it will be provided with each request.

*Callback mode*: If you provide a callback as the last parameter, the callback will be called with error and response arguments, with the response being the an object that corresponds to the JSON output of the API call.  
*Promise mode*: If you wish to use the modern approach, simply don't provide a callback, and a native promise will be returned for you to deal with as you wish.

## Getting Help

For help using OWASP ZAP API refer to:
  * [Examples](https://github.com/zaproxy/zap-api-python/tree/master/src/examples) - collection of examples using the library;
  * [Wiki](https://github.com/zaproxy/zaproxy/wiki/ApiDetails)
  * [OWASP ZAP User Group](https://groups.google.com/group/zaproxy-users) - for asking questions;
  * IRC: irc.mozilla.org #websectools (eg [using Mibbit](http://chat.mibbit.com/?server=irc.mozilla.org%3A%2B6697&channel=%23websectools)) - chat with core ZAP developers (European office hours usually best)

For specific help with this Node Api, contact [@binarymist](https://github.com/binarymist) (the maintainer).
  
## Issues

To report issues related to OWASP ZAP API, bugs and enhancements requests, use the [issue tracker of the main OWASP ZAP project](https://github.com/zaproxy/zaproxy/issues).
