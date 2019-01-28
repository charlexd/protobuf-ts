type Long = protobuf.Long;

/** Namespace game. */
declare namespace game {

    /** MsgType enum. */
    enum MsgType {
        UNKNOWN_MSG = 1,
        HEART_REQ = 3,
        HEART_RESP = 4,
        GAME_LOGIN_REQ = 10001,
        GAME_LOGIN_RESP = 10002
    }

    /** Properties of a HeartReq. */
    interface IHeartReq {
    }

    /** Represents a HeartReq. */
    class HeartReq implements IHeartReq {

        /**
         * Constructs a new HeartReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IHeartReq);

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartReq instance
         */
        public static create(properties?: game.IHeartReq): game.HeartReq;

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link game.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IHeartReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link game.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IHeartReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.HeartReq;

        /**
         * Decodes a HeartReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.HeartReq;

        /**
         * Verifies a HeartReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartReq
         */
        public static fromObject(object: { [k: string]: any }): game.HeartReq;

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @param message HeartReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.HeartReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartResp. */
    interface IHeartResp {

        /** HeartResp code */
        code: number;

        /** HeartResp info */
        info: string;

        /** HeartResp timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a HeartResp. */
    class HeartResp implements IHeartResp {

        /**
         * Constructs a new HeartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IHeartResp);

        /** HeartResp code. */
        public code: number;

        /** HeartResp info. */
        public info: string;

        /** HeartResp timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new HeartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartResp instance
         */
        public static create(properties?: game.IHeartResp): game.HeartResp;

        /**
         * Encodes the specified HeartResp message. Does not implicitly {@link game.HeartResp.verify|verify} messages.
         * @param message HeartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IHeartResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartResp message, length delimited. Does not implicitly {@link game.HeartResp.verify|verify} messages.
         * @param message HeartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IHeartResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.HeartResp;

        /**
         * Decodes a HeartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.HeartResp;

        /**
         * Verifies a HeartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartResp
         */
        public static fromObject(object: { [k: string]: any }): game.HeartResp;

        /**
         * Creates a plain object from a HeartResp message. Also converts values to other types if specified.
         * @param message HeartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.HeartResp, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLoginReq. */
    interface IGameLoginReq {

        /** GameLoginReq token */
        token: string;

        /** GameLoginReq openId */
        openId: string;
    }

    /** Represents a GameLoginReq. */
    class GameLoginReq implements IGameLoginReq {

        /**
         * Constructs a new GameLoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameLoginReq);

        /** GameLoginReq token. */
        public token: string;

        /** GameLoginReq openId. */
        public openId: string;

        /**
         * Creates a new GameLoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLoginReq instance
         */
        public static create(properties?: game.IGameLoginReq): game.GameLoginReq;

        /**
         * Encodes the specified GameLoginReq message. Does not implicitly {@link game.GameLoginReq.verify|verify} messages.
         * @param message GameLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameLoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameLoginReq message, length delimited. Does not implicitly {@link game.GameLoginReq.verify|verify} messages.
         * @param message GameLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameLoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameLoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GameLoginReq;

        /**
         * Decodes a GameLoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GameLoginReq;

        /**
         * Verifies a GameLoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLoginReq
         */
        public static fromObject(object: { [k: string]: any }): game.GameLoginReq;

        /**
         * Creates a plain object from a GameLoginReq message. Also converts values to other types if specified.
         * @param message GameLoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameLoginReq, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLoginResp. */
    interface IGameLoginResp {

        /** GameLoginResp code */
        code: number;

        /** GameLoginResp info */
        info: string;

        /** GameLoginResp player */
        player?: (game.IG_Player|null);
    }

    /** Represents a GameLoginResp. */
    class GameLoginResp implements IGameLoginResp {

        /**
         * Constructs a new GameLoginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameLoginResp);

        /** GameLoginResp code. */
        public code: number;

        /** GameLoginResp info. */
        public info: string;

        /** GameLoginResp player. */
        public player?: (game.IG_Player|null);

        /**
         * Creates a new GameLoginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLoginResp instance
         */
        public static create(properties?: game.IGameLoginResp): game.GameLoginResp;

        /**
         * Encodes the specified GameLoginResp message. Does not implicitly {@link game.GameLoginResp.verify|verify} messages.
         * @param message GameLoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameLoginResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameLoginResp message, length delimited. Does not implicitly {@link game.GameLoginResp.verify|verify} messages.
         * @param message GameLoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameLoginResp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameLoginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GameLoginResp;

        /**
         * Decodes a GameLoginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GameLoginResp;

        /**
         * Verifies a GameLoginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLoginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLoginResp
         */
        public static fromObject(object: { [k: string]: any }): game.GameLoginResp;

        /**
         * Creates a plain object from a GameLoginResp message. Also converts values to other types if specified.
         * @param message GameLoginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameLoginResp, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLoginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a G_Player. */
    interface IG_Player {

        /** G_Player id */
        id: (number|Long);

        /** G_Player account */
        account: string;

        /** G_Player nickname */
        nickname: string;

        /** G_Player level */
        level: number;

        /** G_Player exp */
        exp: number;

        /** G_Player vipLv */
        vipLv: number;

        /** G_Player gold */
        gold: number;

        /** G_Player volume */
        volume: number;

        /** G_Player diamonds */
        diamonds: number;

        /** G_Player time */
        time: (number|Long);

        /** G_Player checkCode */
        checkCode: number;
    }

    /** Represents a G_Player. */
    class G_Player implements IG_Player {

        /**
         * Constructs a new G_Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IG_Player);

        /** G_Player id. */
        public id: (number|Long);

        /** G_Player account. */
        public account: string;

        /** G_Player nickname. */
        public nickname: string;

        /** G_Player level. */
        public level: number;

        /** G_Player exp. */
        public exp: number;

        /** G_Player vipLv. */
        public vipLv: number;

        /** G_Player gold. */
        public gold: number;

        /** G_Player volume. */
        public volume: number;

        /** G_Player diamonds. */
        public diamonds: number;

        /** G_Player time. */
        public time: (number|Long);

        /** G_Player checkCode. */
        public checkCode: number;

        /**
         * Creates a new G_Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G_Player instance
         */
        public static create(properties?: game.IG_Player): game.G_Player;

        /**
         * Encodes the specified G_Player message. Does not implicitly {@link game.G_Player.verify|verify} messages.
         * @param message G_Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IG_Player, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified G_Player message, length delimited. Does not implicitly {@link game.G_Player.verify|verify} messages.
         * @param message G_Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IG_Player, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a G_Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G_Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.G_Player;

        /**
         * Decodes a G_Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G_Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.G_Player;

        /**
         * Verifies a G_Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a G_Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns G_Player
         */
        public static fromObject(object: { [k: string]: any }): game.G_Player;

        /**
         * Creates a plain object from a G_Player message. Also converts values to other types if specified.
         * @param message G_Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.G_Player, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this G_Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
