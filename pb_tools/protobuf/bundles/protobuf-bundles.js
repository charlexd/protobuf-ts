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
     */
    game.MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "UNKNOWN_MSG"] = 1;
        return values;
    })();

    /**
     * E_ErrorCode enum.
     * @name game.E_ErrorCode
     * @enum {string}
     * @property {number} NO_ERROR=0 NO_ERROR value
     * @property {number} LOGIN_ON_OTHER_DEVICE=1 LOGIN_ON_OTHER_DEVICE value
     */
    game.E_ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NO_ERROR"] = 0;
        values[valuesById[1] = "LOGIN_ON_OTHER_DEVICE"] = 1;
        return values;
    })();

    return game;
})();