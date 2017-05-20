"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
// FIXME: Workaround to make css() work with reduce;
// tslint:disable:no-any
var css = styled_components_1.css;
var sizes = {
    lg: 1024,
    md: 768,
    sm: 480,
    xs: 0,
};
// iterate through the sizes and create a media template
var media = Object.keys(sizes).reduce(function (accumulator, label) {
    accumulator[label] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = ["\n    @media (min-width: ", "px) {\n      ", "\n    }\n  "], _a.raw = ["\n    @media (min-width: ", "px) {\n      ", "\n    }\n  "], css(_a, sizes[label], css.apply(void 0, args)));
        var _a;
    };
    return accumulator;
}, {});
exports.default = media;
//# sourceMappingURL=media.js.map