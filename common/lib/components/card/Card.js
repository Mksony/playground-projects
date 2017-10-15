"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var BaseCardContent = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { className: className }, children));
};
var BaseCardHeader = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.component, component = _b === void 0 ? 'p' : _b;
    return (React.createElement(component, { className: className + " h2" }, children));
};
var Card = (_a = ["\n  border-radius: 3px;\n  background-color: ", ";\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  position: relative;\n"], _a.raw = ["\n  border-radius: 3px;\n  background-color: ", ";\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  position: relative;\n"], styled_components_1.default.div.attrs({
    bgColor: function (_a) {
        var _b = _a.bgColor, bgColor = _b === void 0 ? 'white' : _b;
        return bgColor;
    },
})(_a, function (_a) {
    var bgColor = _a.bgColor;
    return bgColor;
}));
exports.CardHeader = (_b = ["\n  padding: 1.5rem;\n"], _b.raw = ["\n  padding: 1.5rem;\n"], styled_components_1.default(BaseCardHeader)(_b));
exports.CardContent = (_c = ["\n  padding: 1.5rem;\n"], _c.raw = ["\n  padding: 1.5rem;\n"], styled_components_1.default(BaseCardContent)(_c));
exports.default = Card;
var _a, _b, _c;
