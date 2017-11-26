"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Autosuggest = require("react-autosuggest");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
var Input_1 = require("../input/Input");
var InputWrapper = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { className: className }, children));
};
var StyledWrapper = styled_components_1.default(InputWrapper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .react-autosuggest__container {\n    position: relative;\n  }\n  .react-autosuggest__input--open input {\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n  }\n  .react-autosuggest__suggestion {\n    ", "\n    cursor: pointer;\n    &:hover {\n      background-color: ", ";\n    }\n  }\n  .react-autosuggest__suggestion--highlighted {\n    background-color: ", ";\n  }\n  .react-autosuggest__suggestions-container--open {\n    position: absolute;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    border-top-right-radius: 0px;\n    border-top-left-radius: 0px;\n    border-top: 0;\n    border-color: ", ";\n    background-color: white;\n    width: 100%;\n  }\n"], ["\n  .react-autosuggest__container {\n    position: relative;\n  }\n  .react-autosuggest__input--open input {\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n  }\n  .react-autosuggest__suggestion {\n    ", "\n    cursor: pointer;\n    &:hover {\n      background-color: ", ";\n    }\n  }\n  .react-autosuggest__suggestion--highlighted {\n    background-color: ", ";\n  }\n  .react-autosuggest__suggestions-container--open {\n    position: absolute;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    border-top-right-radius: 0px;\n    border-top-left-radius: 0px;\n    border-top: 0;\n    border-color: ", ";\n    background-color: white;\n    width: 100%;\n  }\n"])), function (props) { return styles_1.getFormElementDimensions(props.size); }, styles_1.colors.grey.extraLight, styles_1.colors.grey.light, styles_1.colors.grey.light);
var renderInputComponent = function (_a) {
    var size = _a.size, icon = _a.icon, handleClear = _a.handleClear;
    return function (inputProps) {
        return (React.createElement(Input_1.default, __assign({ size: size, iconLeft: icon, clearable: true, onClearClick: handleClear }, inputProps)));
    };
};
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Search.prototype.render = function () {
        var _a = this.props, value = _a.value, suggestions = _a.suggestions, onChange = _a.onChange, placeholder = _a.placeholder, getSuggestionValue = _a.getSuggestionValue, onSuggestionsClearRequested = _a.onSuggestionsClearRequested, onSuggestionsFetchRequested = _a.onSuggestionsFetchRequested, onSuggestionSelected = _a.onSuggestionSelected, renderSuggestion = _a.renderSuggestion, type = _a.type, size = _a.size;
        var inputProps = {
            placeholder: placeholder,
            value: value,
            onChange: onChange,
            type: type,
        };
        return (React.createElement(StyledWrapper, { size: size },
            React.createElement(Autosuggest, { suggestions: suggestions, onSuggestionsFetchRequested: onSuggestionsFetchRequested, onSuggestionsClearRequested: onSuggestionsClearRequested, onSuggestionSelected: onSuggestionSelected, getSuggestionValue: getSuggestionValue, renderSuggestion: renderSuggestion, inputProps: inputProps, renderInputComponent: renderInputComponent(this.props), focusInputOnSuggestionClick: false })));
    };
    Search.defaultProps = {
        placeholder: 'Search...',
        type: 'search',
        size: 'default',
        icon: 'search',
    };
    return Search;
}(React.Component));
exports.default = Search;
var templateObject_1;
