"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = require("child_process");
var UglifyJS = require("uglify-js");
var path = require("path");
var fs = require("fs");
function shell(cmd, args) {
    return new Promise(function (resolve, reject) {
        cmd = cmd + " " + args.join(" ");
        child_process.exec(cmd, function (err, stdout, stderr) {
            if (err) {
                console.error(stderr);
                reject(err);
            }
            else {
                console.log(stdout);
                resolve(stdout);
            }
        });
    });
}
function run(command, root) {
    return __awaiter(this, void 0, void 0, function () {
        var filePath, bundlesPath, files, protoFiles, iLen, i, file, protoFile, content, pbjs_temp_name, pbjs_args, pbjs_content, pbjs_final, pbjs_file_name, pbjs_min, pbjs_min_name, pbts_temp_content, pbts_content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filePath = root || '../protofile/';
                    console.log("\u5F00\u59CB\u67E5\u627Eprotofile\u76EE\u5F55:" + path.resolve(filePath));
                    bundlesPath = './protobuf/bundles/';
                    if (!fs.existsSync(bundlesPath)) {
                        fs.mkdirSync(bundlesPath);
                    }
                    files = fs.readdirSync(filePath);
                    protoFiles = [];
                    iLen = files.length;
                    for (i = 0; i < iLen; i++) {
                        file = files[i];
                        if (file.match(/.+\.proto$/) != null) {
                            console.log("\u8BFB\u53D6\u6587\u4EF6\uFF1A" + file);
                            protoFile = filePath + file;
                            protoFiles.push(protoFile);
                            content = fs.readFileSync(protoFile, { encoding: 'utf-8' });
                            if (content.match(/package ([A-Z]|[a-z]).+?;/) == null) {
                                console.error(protoFile + " \u4E2D\u5FC5\u987B\u5305\u542B package \u5B57\u6BB5");
                                return [2];
                            }
                        }
                    }
                    pbjs_temp_name = bundlesPath + 'temp.js';
                    pbjs_args = ['-t', 'static', '-p', bundlesPath, protoFiles.join(" "), '-o', pbjs_temp_name];
                    return [4, shell('pbjs', pbjs_args)];
                case 1:
                    _a.sent();
                    pbjs_content = fs.readFileSync(pbjs_temp_name, { encoding: 'utf-8' });
                    pbjs_final = 'var $protobuf = window.protobuf;\n$protobuf.roots.default=window;\n' + pbjs_content;
                    pbjs_file_name = bundlesPath + 'protobuf-bundles.js';
                    fs.writeFileSync(pbjs_file_name, pbjs_final, { encoding: 'utf-8' });
                    pbjs_min = UglifyJS.minify(pbjs_final);
                    pbjs_min_name = pbjs_file_name.replace('.js', '.min.js');
                    fs.writeFileSync(pbjs_min_name, pbjs_min.code, { encoding: 'utf-8' });
                    return [4, shell('pbts', ['--main', pbjs_file_name, '-o', pbjs_temp_name])];
                case 2:
                    _a.sent();
                    pbts_temp_content = fs.readFileSync(pbjs_temp_name, 'utf-8');
                    pbts_content = 'type Long = protobuf.Long;\n' + pbts_temp_content.replace(/\$protobuf/gi, "protobuf").replace(/export namespace/gi, 'declare namespace');
                    fs.writeFileSync(pbjs_file_name.replace(".js", ".d.ts"), pbts_content, 'utf-8');
                    fs.unlinkSync(pbjs_temp_name);
                    console.log("\u6587\u4EF6\u5BFC\u51FA\u5B8C\u6210");
                    return [2];
            }
        });
    });
}
exports.run = run;
