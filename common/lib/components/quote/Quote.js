"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Tag_1 = require("../tag/Tag");
var TagWrapper = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > * {\n    margin-right: 0.5em;\n  }\n  & > *:last-child {\n    margin: 0;\n  }\n"], ["\n  & > * {\n    margin-right: 0.5em;\n  }\n  & > *:last-child {\n    margin: 0;\n  }\n"])));
var Quote = function (_a) {
    var text = _a.text, author = _a.author, tags = _a.tags, _b = _a.tagColor, tagColor = _b === void 0 ? 'primary' : _b, className = _a.className;
    return (React.createElement("blockquote", { className: className },
        React.createElement("p", { className: "h1" }, text),
        React.createElement("p", { className: "h3" }, author),
        tags && (React.createElement(TagWrapper, null, tags.map(function (tag) { return React.createElement(Tag_1.default, { key: tag, text: tag, color: tagColor }); })))));
};
var StyledQuote = styled_components_1.default(Quote)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: rgba(235, 235, 235, 0.3);\n  border-left: 5px solid;\n  padding: 1.25em 1.5em;\n"], ["\n  background-color: rgba(235, 235, 235, 0.3);\n  border-left: 5px solid;\n  padding: 1.25em 1.5em;\n"])));
exports.default = StyledQuote;
var templateObject_1, templateObject_2;
