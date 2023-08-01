<div align="center">
  <br/>
  <a href="https://github.com/zaproxy/zap-api-nodejs" title="zaproxy">
    <img width=186px src="assets/images/ZapNodeApi.png" alt="zap-api-nodejs logo">
  </a>
  <br/>
<br/>
<h2>ZAP Node API</h2>
<br/><br/>

<a href="https://www.apache.org/licenses/LICENSE-2.0.html" title="License">
  <img src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg" alt="License"/>
</a>
<a href="https://snyk.io/test/github/zaproxy/zap-api-nodejs?targetFile=package.json">
  <img src="https://snyk.io/test/github/zaproxy/zap-api-nodejs/badge.svg?targetFile=package.json" alt="Known Vulnerabilities"/>
</a>

<br/><br/>
</div>

The NodeJS implementation to access the [ZAP API](https://www.zaproxy.org/docs/api/). For more information
about ZAP consult the (main) [ZAP project](https://github.com/zaproxy/zaproxy/).

## Install

```
npm install zaproxy
```

## Usage

By default ZAP [requires an API key](https://www.zaproxy.org/faq/why-is-an-api-key-required-by-default/) to be sent with every request. This is done automatically providing you supply the same API key when you instantiate the `ZapClient` that you use to run ZAP with. All following API requests will use this same API key.  
You can disable the API key when running ZAP if you are on a trusted network and understand the risks. If you choose to do so, you may omit the `apiKey` property of the `zapOptions` object supplied to `ZapClient`.

### Instantiate the Node API:

```js
const ZapClient = require('zaproxy');

const zapOptions = {
  apiKey: 'eahhr6h6kal92j21gkcnhkp80t',
  proxy: {
    host: '127.0.0.1',
    port: 8080,
  },
};

const zaproxy = new ZapClient(zapOptions);

```

### Use the Node API:

```js
let params = {
  contextid: contextid,
  userid: userid,
  url: sutbaseurl,
  maxchildren: maxchildren,
  recurse: recurse,
  subtreeonly: subtreeonly,
};
let response = await zaproxy.spider.scanAsUser(params);
console.log(response);
```

### Encountering Errors

When encountering an error, like attempting to retrieve a non-existent context, a rejected promise will be returned. The rejection will contain an `ApiClientError` object, which encapsulates the specific details of the original error. This `ApiClientError` object offers valuable information regarding the failed request, and the original error can be accessed through the `cause` property. The response details, if any, are available through the `response` property, containing the `status` and `data` (body).

## API

For a full API list, see [https://www.zaproxy.org/docs/api/](https://www.zaproxy.org/docs/api/).


## Getting Help

For help using the ZAP API refer to:

  * [API Documentation](https://www.zaproxy.org/docs/api/);
  * [ZAP User Group](https://groups.google.com/group/zaproxy-users) - for asking questions;

## Issues

To report issues related to the ZAP Node API, bugs and enhancements requests, use the [issue tracker of this project](https://github.com/zaproxy/zap-api-nodejs/issues).
