"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Tag_1 = require("../tag/Tag");
var TagWrapper = (_a = ["\n  & > * {\n    margin-right: .5em;\n  }\n   & > *:last-child{\n        margin: 0;\n  }\n"], _a.raw = ["\n  & > * {\n    margin-right: .5em;\n  }\n   & > *:last-child{\n        margin: 0;\n  }\n"], styled_components_1.default.p(_a));
var Quote = function (_a) {
    var text = _a.text, author = _a.author, tags = _a.tags, _b = _a.tagColor, tagColor = _b === void 0 ? 'primary' : _b, className = _a.className;
    return (React.createElement("blockquote", { className: className },
        React.createElement("p", { className: "h1" }, text),
        React.createElement("p", { className: "h3" }, author),
        tags &&
            React.createElement(TagWrapper, null, tags.map(function (tag) { return React.createElement(Tag_1.default, { text: tag, color: tagColor }); }))));
};
var StyledQuote = (_b = ["\n    background-color: rgba(235, 235, 235, .3);\n    border-left: 5px solid;\n    padding: 1.25em 1.5em;\n"], _b.raw = ["\n    background-color: rgba(235, 235, 235, .3);\n    border-left: 5px solid;\n    padding: 1.25em 1.5em;\n"], styled_components_1.default(Quote)(_b));
exports.default = StyledQuote;
var _a, _b;
//# sourceMappingURL=Quote.js.map