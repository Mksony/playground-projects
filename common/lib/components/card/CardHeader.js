"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
var BaseCardContent = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { className: className }, children));
};
exports.CardContent = styled_components_1.default(BaseCardContent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1.5rem;\n"], ["\n  padding: 1.5rem;\n"])));
var BaseCardTitle = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n"], ["\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n"])));
exports.BaseCardHeader = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 1.5rem;\n  border-bottom: 1px solid ", ";\n"], ["\n  padding: 1.5rem;\n  border-bottom: 1px solid ", ";\n"])), styles_1.colors.grey.light);
exports.CardHeader = function (_a) {
    var component = _a.component, bordered = _a.bordered, title = _a.title;
    var Title = BaseCardTitle.withComponent(component);
    return (React.createElement(exports.BaseCardHeader, null,
        React.createElement(Title, null, title)));
};
exports.CardHeader.defaultProps = {
    component: 'p',
};
exports.default = exports.CardHeader;
var templateObject_1, templateObject_2, templateObject_3;
