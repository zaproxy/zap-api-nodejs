# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).

## [Unreleased] - Requiring major [semver](https://semver.org/) change

### Added

* Support for promises via [request-promise-native](https://github.com/request/request-promise-native), while retaining backwards compatibility for those wishing to use callbacks
* Ability to add the `apiKey` once... when instantiating the `ZapClient`. See example in [README](https://github.com/zaproxy/zap-api-nodejs/README.md#instantiate-the-client-api)
* Brand new [README](https://github.com/zaproxy/zap-api-nodejs/README.md)

### Changed

* Minimum NodeJS version is now 8.6.0 (breaking change)
* Source no longer in [zaproxy/nodejs/api/zapv2/](https://github.com/zaproxy/zaproxy/tree/develop/nodejs/api/zapv2). Now in its own repository [zaproxy/zap-api-nodejs](https://github.com/zaproxy/zap-api-nodejs)
* License changed from MIT to [Apache 2.0 ](https://github.com/zaproxy/zap-api-nodejs/blob/master/LICENSE)
* Replaced many `var`s with `const`s

### Removed

* The explicit `apikey` on many API methods (breaking change)
* [lodash](https://www.npmjs.com/package/lodash)

### Security

* Fixed all 12 known security defects

## [0.3.0] - 2017-12-04

