/* Zed Attack Proxy (ZAP) and its related class files.
 *
 * ZAP is an HTTP/HTTPS proxy for assessing web application security.
 *
 * Copyright 2018 the ZAP development team
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
function Websocket(clientApi) {
  this.api = clientApi;
}

/**
 * Returns all of the registered web socket channels
 * This component is optional and therefore the API will only work if it is installed
 **/
Websocket.prototype.channels = function (callback) {
  if (typeof callback === 'function') {
    this.api.request('/websocket/view/channels/', callback);
    return;
  }
  return this.api.requestPromise('/websocket/view/channels/');
};

/**
 * Returns full details of the message specified by the channelId and messageId
 * This component is optional and therefore the API will only work if it is installed
 **/
Websocket.prototype.message = function (channelid, messageid, callback) {
  if (typeof callback === 'function') {
    this.api.request('/websocket/view/message/', {'channelId' : channelid, 'messageId' : messageid}, callback);
    return;
  }
  return this.api.requestPromise('/websocket/view/message/', {'channelId' : channelid, 'messageId' : messageid});
};

/**
 * Returns a list of all of the messages that meet the given criteria (all optional), where channelId is a channel identifier, start is the offset to start returning messages from (starting from 0), count is the number of messages to return (default no limit) and payloadPreviewLength is the maximum number bytes to return for the payload contents
 * This component is optional and therefore the API will only work if it is installed
 **/
Websocket.prototype.messages = function (channelid, start, count, payloadpreviewlength, callback) {
  const params = {};
  if (channelid && channelid !== null) {
    params['channelId'] = channelid;
  }
  if (start && start !== null) {
    params['start'] = start;
  }
  if (count && count !== null) {
    params['count'] = count;
  }
  if (payloadpreviewlength && payloadpreviewlength !== null) {
    params['payloadPreviewLength'] = payloadpreviewlength;
  }
  if (typeof callback === 'function') {
    this.api.request('/websocket/view/messages/', params, callback);
    return;
  }
  return this.api.requestPromise('/websocket/view/messages/', params);
};

/**
 * Sends the specified message on the channel specified by channelId, if outgoing is 'True' then the message will be sent to the server and if it is 'False' then it will be sent to the client
 * This component is optional and therefore the API will only work if it is installed
 **/
Websocket.prototype.sendTextMessage = function (channelid, outgoing, message, callback) {
  if (typeof callback === 'function') {
    this.api.request('/websocket/action/sendTextMessage/', {'channelId' : channelid, 'outgoing' : outgoing, 'message' : message}, callback);
    return;
  }
  return this.api.requestPromise('/websocket/action/sendTextMessage/', {'channelId' : channelid, 'outgoing' : outgoing, 'message' : message});
};

module.exports = Websocket;
