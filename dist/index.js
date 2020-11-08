"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Request = __importStar(require("request"));
var GoogleSheet = /** @class */ (function () {
    function GoogleSheet(script_url) {
        this.script_url = script_url;
    }
    GoogleSheet.prototype.get = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var script_url = _this.script_url;
            var action = params.action;
            var url = script_url + "?action=" + action;
            Request.get(url, {}, function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve('' + data.body);
                }
            });
        });
    };
    return GoogleSheet;
}());
exports.GoogleSheet = GoogleSheet;
//# sourceMappingURL=index.js.map