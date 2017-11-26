"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
var ChildContainer = function (props) { return (React.createElement("div", { className: props.className }, props.children)); };
var StyledChildContainer = styled_components_1.default(ChildContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: ", ";\n  width: 100%;\n  text-align: ", ";\n"], ["\n  max-width: ", ";\n  width: 100%;\n  text-align: ", ";\n"])), function (props) { return props.fluid ? '100%' : (props.maxWidth + "px" || '1200px'); }, function (props) { return props.textCenter ? 'center' : 'left'; });
var BaseContainer = function (_a) {
    var className = _a.className, fluid = _a.fluid, textCenter = _a.textCenter, maxWidth = _a.maxWidth, children = _a.children;
    return (React.createElement("div", { className: className },
        React.createElement(StyledChildContainer, { fluid: fluid, textCenter: textCenter, maxWidth: maxWidth }, children)));
};
var getCenterStyles = function (props) {
    var verticalCenter = 'align-items: center;';
    var horizontalCenter = 'justify-content: center;';
    if (props.center) {
        return "\n      display: flex;\n      " + horizontalCenter + "\n      " + verticalCenter + "\n    ";
    }
    else if (props.vCenter) {
        return "\n      display: flex;\n      " + verticalCenter + "\n    ";
    }
    else if (props.hCenter) {
        return "\n      display: flex;\n      " + horizontalCenter + "\n    ";
    }
    return '';
};
var resolveBackground = function (_a) {
    var bgColor = _a.bgColor, backgroundUrl = _a.backgroundUrl;
    var backgroundColor = 'linear-gradient(transparent, transparent)';
    var url = '';
    if (bgColor) {
        backgroundColor = "linear-gradient(" + bgColor + ", " + bgColor + ")";
    }
    if (backgroundUrl) {
        url = ", url(" + backgroundUrl + ") no-repeat center / cover";
    }
    return "background: " + backgroundColor + url + ";";
};
var StyledContainer = styled_components_1.default(BaseContainer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  color: ", ";\n  min-height: ", ";\n  ", "\n  ", "\n  padding: 20px 10px;\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  color: ", ";\n  min-height: ", ";\n  ", "\n  ", "\n  padding: 20px 10px;\n  ",
    "\n  ",
    "\n  ",
    "\n  ", "\n"])), function (props) { return props.textColor ? props.textColor : 'inherit'; }, function (props) { return props.fullHeight ? '100vh' : 'initial'; }, getCenterStyles, resolveBackground, styles_1.media.sm(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding: 30px 20px;\n  "], ["\n    padding: 30px 20px;\n  "]))), styles_1.media.md(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 50px 30px;\n  "], ["\n    padding: 50px 30px;\n  "]))), styles_1.media.lg(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    padding: 70px 40px;\n  "], ["\n    padding: 70px 40px;\n  "]))), function (_a) {
    var compact = _a.compact;
    return compact ? styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["padding: 0px !important"], ["padding: 0px !important"]))) : '';
});
exports.default = StyledContainer;
var templateObject_1, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_2;
