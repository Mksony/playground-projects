"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @media (min-width: ", "px) {\n      ", ";\n    }\n  "], ["\n    @media (min-width: ", "px) {\n      ", ";\n    }\n  "])), sizes[label], css.apply(void 0, args));
    };
    return accumulator;
}, {}); // tslint:disable-line
exports.default = media;
var templateObject_1;
