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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
var Button = function (_a) {
    var label = _a.label, className = _a.className, component = _a.component, ghost = _a.ghost, otherProps = __rest(_a, ["label", "className", "component", "ghost"]);
    return React.createElement(component, __assign({ className: className }, otherProps), label);
};
var resolveColor = function (props) {
    var color = props.color;
    var ghost = props.ghost;
    return "\n    background-color: " + (ghost ? 'transparent' : styles_1.colors[color]) + ";\n    border-color: " + styles_1.colors[color] + ";\n    color: " + (ghost ? styles_1.colors[color] : 'white') + ";\n    &:hover {\n      background-color: " + (ghost ? styles_1.colors[color] : 'transparent') + ";\n      color: " + (ghost ? 'white' : styles_1.colors[color]) + ";\n    }\n  ";
};
var StyledButton = styled_components_1.default(Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  align-items: center;\n  ", "\n  ", "\n  transition: all 200ms ease-in-out;\n  user-select: none;\n"], ["\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  align-items: center;\n  ", "\n  ", "\n  transition: all 200ms ease-in-out;\n  user-select: none;\n"])), function (props) { return styles_1.getFormElementDimensions(props.size); }, resolveColor);
StyledButton.defaultProps = {
    component: 'button',
    size: 'default',
    color: 'primary',
};
exports.default = StyledButton;
var templateObject_1;
