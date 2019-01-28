var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    /**
     * MsgType enum.
     * @name game.MsgType
     * @enum {string}
     * @property {number} UNKNOWN_MSG=1 UNKNOWN_MSG value
     * @property {number} HEART_REQ=3 HEART_REQ value
     * @property {number} HEART_RESP=4 HEART_RESP value
     * @property {number} GAME_LOGIN_REQ=10001 GAME_LOGIN_REQ value
     * @property {number} GAME_LOGIN_RESP=10002 GAME_LOGIN_RESP value
     */
    game.MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "UNKNOWN_MSG"] = 1;
        values[valuesById[3] = "HEART_REQ"] = 3;
        values[valuesById[4] = "HEART_RESP"] = 4;
        values[valuesById[10001] = "GAME_LOGIN_REQ"] = 10001;
        values[valuesById[10002] = "GAME_LOGIN_RESP"] = 10002;
        return values;
    })();

    game.HeartReq = (function() {

        /**
         * Properties of a HeartReq.
         * @memberof game
         * @interface IHeartReq
         */

        /**
         * Constructs a new HeartReq.
         * @memberof game
         * @classdesc Represents a HeartReq.
         * @implements IHeartReq
         * @constructor
         * @param {game.IHeartReq=} [properties] Properties to set
         */
        function HeartReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @function create
         * @memberof game.HeartReq
         * @static
         * @param {game.IHeartReq=} [properties] Properties to set
         * @returns {game.HeartReq} HeartReq instance
         */
        HeartReq.create = function create(properties) {
            return new HeartReq(properties);
        };

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link game.HeartReq.verify|verify} messages.
         * @function encode
         * @memberof game.HeartReq
         * @static
         * @param {game.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link game.HeartReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.HeartReq
         * @static
         * @param {game.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.HeartReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartReq message.
         * @function verify
         * @memberof game.HeartReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeartReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.HeartReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.HeartReq} HeartReq
         */
        HeartReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.HeartReq)
                return object;
            return new $root.game.HeartReq();
        };

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.HeartReq
         * @static
         * @param {game.HeartReq} message HeartReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartReq to JSON.
         * @function toJSON
         * @memberof game.HeartReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartReq;
    })();

    game.HeartResp = (function() {

        /**
         * Properties of a HeartResp.
         * @memberof game
         * @interface IHeartResp
         * @property {number} code HeartResp code
         * @property {string} info HeartResp info
         * @property {number|Long|null} [timestamp] HeartResp timestamp
         */

        /**
         * Constructs a new HeartResp.
         * @memberof game
         * @classdesc Represents a HeartResp.
         * @implements IHeartResp
         * @constructor
         * @param {game.IHeartResp=} [properties] Properties to set
         */
        function HeartResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartResp code.
         * @member {number} code
         * @memberof game.HeartResp
         * @instance
         */
        HeartResp.prototype.code = 0;

        /**
         * HeartResp info.
         * @member {string} info
         * @memberof game.HeartResp
         * @instance
         */
        HeartResp.prototype.info = "";

        /**
         * HeartResp timestamp.
         * @member {number|Long} timestamp
         * @memberof game.HeartResp
         * @instance
         */
        HeartResp.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartResp instance using the specified properties.
         * @function create
         * @memberof game.HeartResp
         * @static
         * @param {game.IHeartResp=} [properties] Properties to set
         * @returns {game.HeartResp} HeartResp instance
         */
        HeartResp.create = function create(properties) {
            return new HeartResp(properties);
        };

        /**
         * Encodes the specified HeartResp message. Does not implicitly {@link game.HeartResp.verify|verify} messages.
         * @function encode
         * @memberof game.HeartResp
         * @static
         * @param {game.IHeartResp} message HeartResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.info);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified HeartResp message, length delimited. Does not implicitly {@link game.HeartResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.HeartResp
         * @static
         * @param {game.IHeartResp} message HeartResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.HeartResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.HeartResp} HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.HeartResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.info = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            if (!message.hasOwnProperty("info"))
                throw $util.ProtocolError("missing required 'info'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeartResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.HeartResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.HeartResp} HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartResp message.
         * @function verify
         * @memberof game.HeartResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (!$util.isString(message.info))
                return "info: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.HeartResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.HeartResp} HeartResp
         */
        HeartResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.HeartResp)
                return object;
            var message = new $root.game.HeartResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.info != null)
                message.info = String(object.info);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.HeartResp
         * @static
         * @param {game.HeartResp} message HeartResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.info = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this HeartResp to JSON.
         * @function toJSON
         * @memberof game.HeartResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartResp;
    })();

    game.GameLoginReq = (function() {

        /**
         * Properties of a GameLoginReq.
         * @memberof game
         * @interface IGameLoginReq
         * @property {string} token GameLoginReq token
         * @property {string} openId GameLoginReq openId
         */

        /**
         * Constructs a new GameLoginReq.
         * @memberof game
         * @classdesc Represents a GameLoginReq.
         * @implements IGameLoginReq
         * @constructor
         * @param {game.IGameLoginReq=} [properties] Properties to set
         */
        function GameLoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLoginReq token.
         * @member {string} token
         * @memberof game.GameLoginReq
         * @instance
         */
        GameLoginReq.prototype.token = "";

        /**
         * GameLoginReq openId.
         * @member {string} openId
         * @memberof game.GameLoginReq
         * @instance
         */
        GameLoginReq.prototype.openId = "";

        /**
         * Creates a new GameLoginReq instance using the specified properties.
         * @function create
         * @memberof game.GameLoginReq
         * @static
         * @param {game.IGameLoginReq=} [properties] Properties to set
         * @returns {game.GameLoginReq} GameLoginReq instance
         */
        GameLoginReq.create = function create(properties) {
            return new GameLoginReq(properties);
        };

        /**
         * Encodes the specified GameLoginReq message. Does not implicitly {@link game.GameLoginReq.verify|verify} messages.
         * @function encode
         * @memberof game.GameLoginReq
         * @static
         * @param {game.IGameLoginReq} message GameLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.openId);
            return writer;
        };

        /**
         * Encodes the specified GameLoginReq message, length delimited. Does not implicitly {@link game.GameLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameLoginReq
         * @static
         * @param {game.IGameLoginReq} message GameLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameLoginReq} GameLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameLoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.openId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("token"))
                throw $util.ProtocolError("missing required 'token'", { instance: message });
            if (!message.hasOwnProperty("openId"))
                throw $util.ProtocolError("missing required 'openId'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameLoginReq} GameLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLoginReq message.
         * @function verify
         * @memberof game.GameLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.token))
                return "token: string expected";
            if (!$util.isString(message.openId))
                return "openId: string expected";
            return null;
        };

        /**
         * Creates a GameLoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameLoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameLoginReq} GameLoginReq
         */
        GameLoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameLoginReq)
                return object;
            var message = new $root.game.GameLoginReq();
            if (object.token != null)
                message.token = String(object.token);
            if (object.openId != null)
                message.openId = String(object.openId);
            return message;
        };

        /**
         * Creates a plain object from a GameLoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameLoginReq
         * @static
         * @param {game.GameLoginReq} message GameLoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.openId = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.openId != null && message.hasOwnProperty("openId"))
                object.openId = message.openId;
            return object;
        };

        /**
         * Converts this GameLoginReq to JSON.
         * @function toJSON
         * @memberof game.GameLoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLoginReq;
    })();

    game.GameLoginResp = (function() {

        /**
         * Properties of a GameLoginResp.
         * @memberof game
         * @interface IGameLoginResp
         * @property {number} code GameLoginResp code
         * @property {string} info GameLoginResp info
         * @property {game.IG_Player|null} [player] GameLoginResp player
         */

        /**
         * Constructs a new GameLoginResp.
         * @memberof game
         * @classdesc Represents a GameLoginResp.
         * @implements IGameLoginResp
         * @constructor
         * @param {game.IGameLoginResp=} [properties] Properties to set
         */
        function GameLoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLoginResp code.
         * @member {number} code
         * @memberof game.GameLoginResp
         * @instance
         */
        GameLoginResp.prototype.code = 0;

        /**
         * GameLoginResp info.
         * @member {string} info
         * @memberof game.GameLoginResp
         * @instance
         */
        GameLoginResp.prototype.info = "";

        /**
         * GameLoginResp player.
         * @member {game.IG_Player|null|undefined} player
         * @memberof game.GameLoginResp
         * @instance
         */
        GameLoginResp.prototype.player = null;

        /**
         * Creates a new GameLoginResp instance using the specified properties.
         * @function create
         * @memberof game.GameLoginResp
         * @static
         * @param {game.IGameLoginResp=} [properties] Properties to set
         * @returns {game.GameLoginResp} GameLoginResp instance
         */
        GameLoginResp.create = function create(properties) {
            return new GameLoginResp(properties);
        };

        /**
         * Encodes the specified GameLoginResp message. Does not implicitly {@link game.GameLoginResp.verify|verify} messages.
         * @function encode
         * @memberof game.GameLoginResp
         * @static
         * @param {game.IGameLoginResp} message GameLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.info);
            if (message.player != null && message.hasOwnProperty("player"))
                $root.game.G_Player.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameLoginResp message, length delimited. Does not implicitly {@link game.GameLoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameLoginResp
         * @static
         * @param {game.IGameLoginResp} message GameLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameLoginResp} GameLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameLoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.info = reader.string();
                    break;
                case 3:
                    message.player = $root.game.G_Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            if (!message.hasOwnProperty("info"))
                throw $util.ProtocolError("missing required 'info'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameLoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameLoginResp} GameLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLoginResp message.
         * @function verify
         * @memberof game.GameLoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (!$util.isString(message.info))
                return "info: string expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.game.G_Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        /**
         * Creates a GameLoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameLoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameLoginResp} GameLoginResp
         */
        GameLoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameLoginResp)
                return object;
            var message = new $root.game.GameLoginResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.info != null)
                message.info = String(object.info);
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".game.GameLoginResp.player: object expected");
                message.player = $root.game.G_Player.fromObject(object.player);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameLoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameLoginResp
         * @static
         * @param {game.GameLoginResp} message GameLoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.info = "";
                object.player = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.game.G_Player.toObject(message.player, options);
            return object;
        };

        /**
         * Converts this GameLoginResp to JSON.
         * @function toJSON
         * @memberof game.GameLoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLoginResp;
    })();

    game.G_Player = (function() {

        /**
         * Properties of a G_Player.
         * @memberof game
         * @interface IG_Player
         * @property {number|Long} id G_Player id
         * @property {string} account G_Player account
         * @property {string} nickname G_Player nickname
         * @property {number} level G_Player level
         * @property {number} exp G_Player exp
         * @property {number} vipLv G_Player vipLv
         * @property {number} gold G_Player gold
         * @property {number} volume G_Player volume
         * @property {number} diamonds G_Player diamonds
         * @property {number|Long} time G_Player time
         * @property {number} checkCode G_Player checkCode
         */

        /**
         * Constructs a new G_Player.
         * @memberof game
         * @classdesc Represents a G_Player.
         * @implements IG_Player
         * @constructor
         * @param {game.IG_Player=} [properties] Properties to set
         */
        function G_Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G_Player id.
         * @member {number|Long} id
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * G_Player account.
         * @member {string} account
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.account = "";

        /**
         * G_Player nickname.
         * @member {string} nickname
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.nickname = "";

        /**
         * G_Player level.
         * @member {number} level
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.level = 0;

        /**
         * G_Player exp.
         * @member {number} exp
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.exp = 0;

        /**
         * G_Player vipLv.
         * @member {number} vipLv
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.vipLv = 0;

        /**
         * G_Player gold.
         * @member {number} gold
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.gold = 0;

        /**
         * G_Player volume.
         * @member {number} volume
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.volume = 0;

        /**
         * G_Player diamonds.
         * @member {number} diamonds
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.diamonds = 0;

        /**
         * G_Player time.
         * @member {number|Long} time
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * G_Player checkCode.
         * @member {number} checkCode
         * @memberof game.G_Player
         * @instance
         */
        G_Player.prototype.checkCode = 0;

        /**
         * Creates a new G_Player instance using the specified properties.
         * @function create
         * @memberof game.G_Player
         * @static
         * @param {game.IG_Player=} [properties] Properties to set
         * @returns {game.G_Player} G_Player instance
         */
        G_Player.create = function create(properties) {
            return new G_Player(properties);
        };

        /**
         * Encodes the specified G_Player message. Does not implicitly {@link game.G_Player.verify|verify} messages.
         * @function encode
         * @memberof game.G_Player
         * @static
         * @param {game.IG_Player} message G_Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G_Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.exp);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.vipLv);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gold);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.volume);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.diamonds);
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.time);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.checkCode);
            return writer;
        };

        /**
         * Encodes the specified G_Player message, length delimited. Does not implicitly {@link game.G_Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.G_Player
         * @static
         * @param {game.IG_Player} message G_Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G_Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G_Player message from the specified reader or buffer.
         * @function decode
         * @memberof game.G_Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.G_Player} G_Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G_Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.G_Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.exp = reader.int32();
                    break;
                case 6:
                    message.vipLv = reader.int32();
                    break;
                case 7:
                    message.gold = reader.int32();
                    break;
                case 8:
                    message.volume = reader.int32();
                    break;
                case 9:
                    message.diamonds = reader.int32();
                    break;
                case 10:
                    message.time = reader.int64();
                    break;
                case 11:
                    message.checkCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("account"))
                throw $util.ProtocolError("missing required 'account'", { instance: message });
            if (!message.hasOwnProperty("nickname"))
                throw $util.ProtocolError("missing required 'nickname'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("exp"))
                throw $util.ProtocolError("missing required 'exp'", { instance: message });
            if (!message.hasOwnProperty("vipLv"))
                throw $util.ProtocolError("missing required 'vipLv'", { instance: message });
            if (!message.hasOwnProperty("gold"))
                throw $util.ProtocolError("missing required 'gold'", { instance: message });
            if (!message.hasOwnProperty("volume"))
                throw $util.ProtocolError("missing required 'volume'", { instance: message });
            if (!message.hasOwnProperty("diamonds"))
                throw $util.ProtocolError("missing required 'diamonds'", { instance: message });
            if (!message.hasOwnProperty("time"))
                throw $util.ProtocolError("missing required 'time'", { instance: message });
            if (!message.hasOwnProperty("checkCode"))
                throw $util.ProtocolError("missing required 'checkCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a G_Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.G_Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.G_Player} G_Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G_Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G_Player message.
         * @function verify
         * @memberof game.G_Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G_Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
            if (!$util.isString(message.account))
                return "account: string expected";
            if (!$util.isString(message.nickname))
                return "nickname: string expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
            if (!$util.isInteger(message.vipLv))
                return "vipLv: integer expected";
            if (!$util.isInteger(message.gold))
                return "gold: integer expected";
            if (!$util.isInteger(message.volume))
                return "volume: integer expected";
            if (!$util.isInteger(message.diamonds))
                return "diamonds: integer expected";
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
            if (!$util.isInteger(message.checkCode))
                return "checkCode: integer expected";
            return null;
        };

        /**
         * Creates a G_Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.G_Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.G_Player} G_Player
         */
        G_Player.fromObject = function fromObject(object) {
            if (object instanceof $root.game.G_Player)
                return object;
            var message = new $root.game.G_Player();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.account != null)
                message.account = String(object.account);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.exp != null)
                message.exp = object.exp | 0;
            if (object.vipLv != null)
                message.vipLv = object.vipLv | 0;
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.volume != null)
                message.volume = object.volume | 0;
            if (object.diamonds != null)
                message.diamonds = object.diamonds | 0;
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.checkCode != null)
                message.checkCode = object.checkCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a G_Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.G_Player
         * @static
         * @param {game.G_Player} message G_Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G_Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.account = "";
                object.nickname = "";
                object.level = 0;
                object.exp = 0;
                object.vipLv = 0;
                object.gold = 0;
                object.volume = 0;
                object.diamonds = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.checkCode = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.vipLv != null && message.hasOwnProperty("vipLv"))
                object.vipLv = message.vipLv;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.volume != null && message.hasOwnProperty("volume"))
                object.volume = message.volume;
            if (message.diamonds != null && message.hasOwnProperty("diamonds"))
                object.diamonds = message.diamonds;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.checkCode != null && message.hasOwnProperty("checkCode"))
                object.checkCode = message.checkCode;
            return object;
        };

        /**
         * Converts this G_Player to JSON.
         * @function toJSON
         * @memberof game.G_Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G_Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G_Player;
    })();

    return game;
})();