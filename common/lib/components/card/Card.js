"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var BaseCard = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { className: className }, children));
};
var Card = styled_components_1.default(BaseCard)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 3px;\n  background-color: ", ";\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  position: relative;\n  overflow: hidden;\n"], ["\n  border-radius: 3px;\n  background-color: ", ";\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  position: relative;\n  overflow: hidden;\n"])), function (_a) {
    var bgColor = _a.bgColor;
    return bgColor;
});
Card.defaultProps = {
    bgColor: 'white',
};
exports.CardContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 1.5rem;\n"], ["\n  padding: 1.5rem;\n"])));
exports.default = Card;
var templateObject_1, templateObject_2;
