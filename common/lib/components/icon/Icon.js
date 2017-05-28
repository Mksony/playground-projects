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
    return (React.createElement("i", { className: className, onClick: onClick },
        React.createElement(ReactIcon, null)));
};
exports.IonicIcon = function (_a) {
    var name = _a.name, className = _a.className, onClick = _a.onClick;
    return (React.createElement(BaseIcon, { iconSet: "Ionicons", name: name, className: className, onClick: onClick }));
};
var rotate360 = (_a = ["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"], _a.raw = ["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"], styled_components_1.keyframes(_a));
var BaseLoadingIcon = function (_a) {
    var className = _a.className;
    return (React.createElement(exports.IonicIcon, { name: "load-d", className: className }));
};
var BaseCloseIcon = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (React.createElement(exports.IonicIcon, { name: "close-circled", className: className, onClick: onClick }));
};
exports.CloseIcon = (_b = ["\n  cursor: pointer;\n"], _b.raw = ["\n  cursor: pointer;\n"], styled_components_1.default(BaseCloseIcon)(_b));
exports.LoadingIcon = (_c = ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  animation: ", " 1.25s linear infinite;\n"], _c.raw = ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  animation: ", " 1.25s linear infinite;\n"], styled_components_1.default(BaseLoadingIcon)(_c, rotate360));
var _a, _b, _c;
//# sourceMappingURL=Icon.js.map