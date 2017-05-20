"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
var ChildContainer = function (props) { return (React.createElement("div", { className: props.className }, props.children)); };
/* eslint-disable no-confusing-arrow*/
var StyledChildContainer = (_a = ["\n  max-width: ", ";\n  width: 100%;\n  text-align: ", ";\n"], _a.raw = ["\n  max-width: ", ";\n  width: 100%;\n  text-align: ", ";\n"], styled_components_1.default(ChildContainer)(_a, function (props) { return props.fluid ? '100%' : (props.maxWidth + "px" || '1200px'); }, function (props) { return props.textCenter ? 'center' : 'left'; }));
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
    var backgroundColor = bgColor ? "linear-gradient(" + bgColor + ", " + bgColor + ")" : 'transparent';
    var url = backgroundUrl ? ", url(" + backgroundUrl + ") no-repeat center / cover" : '';
    return "background: " + backgroundColor + url;
};
var StyledContainer = (_b = ["\n  position: relative;\n  color: ", ";\n  min-height: ", ";\n  ", "\n  ", "\n  padding: 20px 10px;\n  ", "\n  ", "\n  ", "\n"], _b.raw = ["\n  position: relative;\n  color: ", ";\n  min-height: ", ";\n  ", "\n  ", "\n  padding: 20px 10px;\n  ",
    "\n  ",
    "\n  ",
    "\n"], styled_components_1.default(BaseContainer)(_b, function (props) { return props.textColor ? props.textColor : 'inherit'; }, function (props) { return props.fullHeight ? '100vh' : 'initial'; }, getCenterStyles, resolveBackground, (_c = ["\n    padding: 30px 20px;\n  "], _c.raw = ["\n    padding: 30px 20px;\n  "], styles_1.media.sm(_c)), (_d = ["\n    padding: 50px 30px;\n  "], _d.raw = ["\n    padding: 50px 30px;\n  "], styles_1.media.md(_d)), (_e = ["\n    padding: 70px 40px;\n  "], _e.raw = ["\n    padding: 70px 40px;\n  "], styles_1.media.lg(_e))));
exports.default = StyledContainer;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=Container.js.map