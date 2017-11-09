"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
var resolveColor = function (_a) {
    var color = _a.color;
    return ("\n  background-color: " + styles_1.colors[color] + ";\n");
};
var Tag = function (_a) {
    var text = _a.text, className = _a.className;
    return (React.createElement("span", { className: className }, text));
};
var StyledTag = (_a = ["\n    ", "\n    color: white;\n    border-radius: 30px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.75rem;\n    height: 2em;\n    line-height: 1.5;\n    padding-left: 0.875em;\n    padding-right: 0.875em;\n    white-space: nowrap;\n"], _a.raw = ["\n    ", "\n    color: white;\n    border-radius: 30px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.75rem;\n    height: 2em;\n    line-height: 1.5;\n    padding-left: 0.875em;\n    padding-right: 0.875em;\n    white-space: nowrap;\n"], styled_components_1.default(Tag)(_a, resolveColor));
exports.default = StyledTag;
var _a;
