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

'use strict'

/**
 * This file was automatically generated.
 */
function Websocket (clientApi) {
  this.api = clientApi
}

/**
 * Returns all of the registered web socket channels
 * This component is optional and therefore the API will only work if it is installed
 **/
Websocket.prototype.channels = function () {
  return this.api.request('/websocket/view/channels/')
}

/**
 * Returns full details of the message specified by the channelId and messageId
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} channelid
 * @param {string} messageid
 **/
Websocket.prototype.message = function (args) {
  return this.api.request('/websocket/view/message/', { channelId: args.channelid, messageId: args.messageid })
}

/**
 * Returns a list of all of the messages that meet the given criteria (all optional), where channelId is a channel identifier, start is the offset to start returning messages from (starting from 0), count is the number of messages to return (default no limit) and payloadPreviewLength is the maximum number bytes to return for the payload contents
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} channelid
 * @param {string} start
 * @param {string} count
 * @param {string} payloadpreviewlength
 **/
Websocket.prototype.messages = function (args) {
  const params = { }
  if (args.channelid && args.channelid !== null) {
    params.channelId = args.channelid
  }
  if (args.start && args.start !== null) {
    params.start = args.start
  }
  if (args.count && args.count !== null) {
    params.count = args.count
  }
  if (args.payloadpreviewlength && args.payloadpreviewlength !== null) {
    params.payloadPreviewLength = args.payloadpreviewlength
  }
  return this.api.request('/websocket/view/messages/', params)
}

/**
 * Returns a text representation of an intercepted websockets message
 * This component is optional and therefore the API will only work if it is installed
 **/
Websocket.prototype.breakTextMessage = function () {
  return this.api.request('/websocket/view/breakTextMessage/')
}

/**
 * Sends the specified message on the channel specified by channelId, if outgoing is 'True' then the message will be sent to the server and if it is 'False' then it will be sent to the client
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} channelid
 * @param {string} outgoing
 * @param {string} message
 **/
Websocket.prototype.sendTextMessage = function (args) {
  return this.api.request('/websocket/action/sendTextMessage/', { channelId: args.channelid, outgoing: args.outgoing, message: args.message })
}

/**
 * Sets the text message for an intercepted websockets message
 * This component is optional and therefore the API will only work if it is installed
 * @param {string} message
 * @param {string} outgoing
 **/
Websocket.prototype.setBreakTextMessage = function (args) {
  return this.api.request('/websocket/action/setBreakTextMessage/', { message: args.message, outgoing: args.outgoing })
}

module.exports = Websocket
