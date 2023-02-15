# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).

## [Unreleased]
### Added
* Add the API of the following add-ons:
    * Access Control version 8
    * Alert Filter version 15
    * Automation Framework version 0.22.0
    * Import/Export version 0.3.0
    * GraphQL Support version 0.12.0
    * Network version 0.6.0
    * Report Generation version 0.18.0
    * Retest version 0.5.0
    * Revisit version 4
    * Wappalyzer - Technology Detection version 21.18.0

### Changed
* Update the API to support object as function parameters instead of individual parameters. [Github Issue](https://github.com/zaproxy/zaproxy/issues/7608)
* Update Core APIs for 2.12.0
* Update the APIs of following add-ons:
    * Ajax Spider version 23.10.0
    * OpenAPI version 31
    * Plug-n-Hack Configuration version 13
    * Replacer version 12
    * Reveal version 5
    * Selenium version 15.11.0
    * SOAP Support version 16
    * Spider version 0.2.0
    * WebSockets version 28

### Removed
* The APIs for the add-ons Import files containing URLs and Log File Importer were removed, superseded by Import/Export add-on.
## [1.0.1] - 2019-08-30 - lodash security fix

### Security

* Regenerated the `package-lock.json` to capture the fixed version of sub dependency lodash (4.17.11 -> 4.17.14)

## [1.0.0-rc.1] - 2018-11-16 - Requiring major [semver](https://semver.org/) change

### Added

* Support for promises via [request-promise-native](https://github.com/request/request-promise-native), while retaining backwards compatibility for those wishing to use callbacks
* Ability to add the `apiKey` once only when instantiating the `ZapClient`. See example in [README](README.md#instantiate-the-node-api)
* Brand new [README](README.md)

### Changed

* Minimum NodeJS version is now 8.6.0 (breaking change)
* Source no longer in zaproxy/nodejs/api/zapv2. Now in its own repository [zaproxy/zap-api-nodejs](https://github.com/zaproxy/zap-api-nodejs)
* License changed from MIT to [Apache 2.0](https://github.com/zaproxy/zap-api-nodejs/blob/master/LICENSE)
* Replaced many `var`s with `const`s

### Removed

* The explicit `apikey` on many API methods (breaking change)
* [lodash](https://www.npmjs.com/package/lodash)

### Security

* Fixed all 12 known security defects by updating the dependencies

## 0.3.0 - 2017-12-04


[Unreleased]: https://github.com/zaproxy/zap-api-nodejs/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/zaproxy/zap-api-nodejs/compare/v1.0.0-rc.1...v1.0.1
[1.0.0-rc.1]: https://github.com/zaproxy/zap-api-nodejs/compare/ccad7bac914e3572dba4e9d09fc2114bb5208d8d...v1.0.0-rc.1
