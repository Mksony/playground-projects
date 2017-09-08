"use strict";
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
var StyledBaseIcon = (_a = ["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n"], _a.raw = ["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n"], styled_components_1.default(BaseIcon)(_a));
exports.IonicIcon = function (_a) {
    var name = _a.name, className = _a.className, onClick = _a.onClick;
    return (React.createElement(StyledBaseIcon, { iconSet: "Ionicons", name: name, className: className, onClick: onClick }));
};
var rotate360 = (_b = ["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"], _b.raw = ["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"], styled_components_1.keyframes(_b));
var BaseLoadingIcon = function (_a) {
    var className = _a.className;
    return (React.createElement(exports.IonicIcon, { name: "load-d", className: className }));
};
var BaseCloseIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (React.createElement(exports.IonicIcon, { name: "close-circled", className: className, onClick: onClick }));
};
exports.CloseIcon = (_c = ["\n  cursor: pointer;\n"], _c.raw = ["\n  cursor: pointer;\n"], styled_components_1.default(BaseCloseIcon)(_c));
exports.LoadingIcon = (_d = ["\n  animation: ", " 1.25s linear infinite;\n"], _d.raw = ["\n  animation: ", " 1.25s linear infinite;\n"], styled_components_1.default(BaseLoadingIcon)(_d, rotate360));
var _a, _b, _c, _d;
