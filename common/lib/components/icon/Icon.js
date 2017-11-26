"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var iconSets = {
    'Material Design Icons': 'md',
    FontAwesome: 'fa',
    Typicons: 'ti',
    'Github Octicons': 'go',
    Ionicons: 'io',
};
var BaseIcon = function (_a) {
    var iconSet = _a.iconSet, name = _a.name, className = _a.className, onClick = _a.onClick;
    var iconSetFolder = iconSets[iconSet];
    var ReactIcon = require("react-icons/lib/" + iconSetFolder + "/" + name);
    return (React.createElement("i", { className: className, onClick: onClick }, React.createElement(ReactIcon)));
};
var StyledBaseIcon = styled_components_1.default(BaseIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n"], ["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n"])));
exports.IonicIcon = function (_a) {
    var name = _a.name, className = _a.className, onClick = _a.onClick;
    return (React.createElement(StyledBaseIcon, { iconSet: "Ionicons", name: name, className: className, onClick: onClick }));
};
var rotate360 = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"], ["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"])));
var BaseLoadingIcon = function (_a) {
    var className = _a.className;
    return (React.createElement(exports.IonicIcon, { name: "load-d", className: className }));
};
var BaseCloseIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (React.createElement(exports.IonicIcon, { name: "close-circled", className: className, onClick: onClick }));
};
exports.CloseIcon = styled_components_1.default(BaseCloseIcon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
exports.LoadingIcon = styled_components_1.default(BaseLoadingIcon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  animation: ", " 1.25s linear infinite;\n"], ["\n  animation: ", " 1.25s linear infinite;\n"])), rotate360);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
