"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Input_1 = require("../input/Input");
var Button_1 = require("../button/Button");
var InputGroup = function (_a) {
    var buttonProps = _a.buttonProps, inputProps = _a.inputProps, size = _a.size, buttonLabel = _a.buttonLabel, placeholder = _a.placeholder, className = _a.className;
    return (React.createElement("div", { className: className },
        React.createElement(Input_1.default, __assign({}, inputProps, { size: size, placeholder: placeholder })),
        React.createElement(Button_1.default, __assign({ color: "primary" }, buttonProps, { size: size, label: buttonLabel, type: "submit" }))));
};
var StyledInputGroup = styled_components_1.default(InputGroup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  & > div {\n    flex: 1;\n  }\n  & > button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  & input {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n"], ["\n  display: flex;\n  & > div {\n    flex: 1;\n  }\n  & > button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  & input {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n"])));
exports.default = StyledInputGroup;
var templateObject_1;
