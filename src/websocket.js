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

class Websocket {
  constructor(clientApi) {
    this.api = clientApi;
  }

  /**
   * Returns all the registered web socket channels.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the registered channels.
   */
  channels = () =>
    this.api.request('/websocket/view/channels');

  /**
   * Returns full details of the message specified by the channelId and messageId.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ channelId: string, messageId: string }} args - Object containing:
   *   - channelId: The channel identifier.
   *   - messageId: The message identifier.
   * @returns {Promise<any>} A promise resolving with the message details.
   */
  message = ({ channelId, messageId }) =>
    this.api.request('/websocket/view/message', { channelId, messageId });

  /**
   * Returns a list of all the messages that meet the given criteria.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ channelId?: string, start?: string, count?: string, payloadPreviewLength?: string }} [args={}] - Object containing:
   *   - channelId: (Optional) The channel identifier.
   *   - start: (Optional) The offset to start returning messages from.
   *   - count: (Optional) The number of messages to return.
   *   - payloadPreviewLength: (Optional) The maximum number of bytes to return for payload contents.
   * @returns {Promise<any>} A promise resolving with the messages.
   */
  messages = ({ channelId, start, count, payloadPreviewLength } = {}) =>
    this.api.request('/websocket/view/messages', { channelId, start, count, payloadPreviewLength });

  /**
   * Returns a text representation of an intercepted websockets message.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @returns {Promise<any>} A promise resolving with the intercepted message.
   */
  breakTextMessage = () =>
    this.api.request('/websocket/view/breakTextMessage');

  /**
   * Sends the specified message on the channel specified by channelId.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ channelId: string, outgoing: string, message: string }} args - Object containing:
   *   - channelId: The channel identifier.
   *   - outgoing: 'True' to send to server, 'False' to send to client.
   *   - message: The message to send.
   * @returns {Promise<any>} A promise resolving when the message is sent.
   */
  sendTextMessage = ({ channelId, outgoing, message }) =>
    this.api.request('/websocket/action/sendTextMessage', { channelId, outgoing, message });

  /**
   * Sets the text message for an intercepted websockets message.
   * This component is optional and therefore the API will only work if it is installed.
   *
   * @param {{ message: string, outgoing: string }} args - Object containing:
   *   - message: The message text.
   *   - outgoing: Whether the message is outgoing.
   * @returns {Promise<any>} A promise resolving when the message is set.
   */
  setBreakTextMessage = ({ message, outgoing }) =>
    this.api.request('/websocket/action/setBreakTextMessage', { message, outgoing });
}

module.exports = Websocket;
