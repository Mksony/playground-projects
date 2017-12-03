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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
var Icon_1 = require("../icon/Icon");
var RightIcon = styled_components_1.default(Icon_1.IonicIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n"])));
var RightCloseIcon = styled_components_1.default(Icon_1.CloseIcon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n"])));
var LeftIcon = styled_components_1.default(Icon_1.IonicIcon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n"])));
var LeftLoadingIcon = styled_components_1.default(Icon_1.LoadingIcon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n"])));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        var value = props.value, autoFocus = props.autoFocus;
        _this.state = {
            value: value || '',
            isFocused: Boolean(autoFocus),
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleClearClick = _this.handleClearClick.bind(_this);
        return _this;
    }
    Input.prototype.componentWillReceiveProps = function (nextProps) {
        var currentValue = this.props.value;
        var nextValue = nextProps.value;
        if (currentValue !== nextValue) {
            this.setState({
                value: nextValue,
            });
        }
    };
    Input.prototype.handleChange = function (e) {
        this.setState({
            value: e.currentTarget.value,
        });
        var onChange = this.props.onChange;
        if (onChange) {
            onChange(e);
        }
    };
    Input.prototype.handleBlur = function (e) {
        var onBlur = this.props.onBlur;
        this.setState({
            isFocused: false,
        });
        if (onBlur) {
            onBlur(e);
        }
    };
    Input.prototype.handleFocus = function (e) {
        var onFocus = this.props.onFocus;
        this.setState({
            isFocused: true,
        });
        if (onFocus) {
            onFocus(e);
        }
    };
    Input.prototype.handleClearClick = function (e) {
        var onClearClick = this.props.onClearClick;
        this.setState({
            value: '',
        });
        this.input.focus();
        if (onClearClick) {
            onClearClick(e);
        }
    };
    Input.prototype.getLeftIcon = function () {
        var _a = this.props, isLoading = _a.isLoading, iconLeft = _a.iconLeft;
        if (isLoading) {
            return React.createElement(LeftLoadingIcon, null);
        }
        else if (iconLeft) {
            return React.createElement(LeftIcon, { name: iconLeft });
        }
        return null;
    };
    Input.prototype.getRightIcon = function () {
        var _a = this.props, clearable = _a.clearable, iconRight = _a.iconRight;
        var _b = this.state, isFocused = _b.isFocused, value = _b.value;
        var hasValue = value.length > 0;
        if (clearable && isFocused && hasValue) {
            return React.createElement(RightCloseIcon, { onClick: this.handleClearClick });
        }
        else if (iconRight) {
            return React.createElement(RightIcon, { name: iconRight });
        }
        return null;
    };
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, autoComplete = _a.autoComplete, autoFocus = _a.autoFocus, placeholder = _a.placeholder, className = _a.className, type = _a.type, onChange = _a.onChange, isValid = _a.isValid, size = _a.size, iconLeft = _a.iconLeft, iconRight = _a.iconRight, isLoading = _a.isLoading, clearable = _a.clearable, onClearClick = _a.onClearClick, otherProps = __rest(_a, ["autoComplete", "autoFocus", "placeholder", "className", "type", "onChange", "isValid", "size", "iconLeft", "iconRight", "isLoading", "clearable", "onClearClick"]);
        var value = this.state.value;
        return (React.createElement("div", { className: className },
            this.getLeftIcon(),
            React.createElement("input", __assign({ autoComplete: autoComplete, autoFocus: autoFocus, onBlur: this.handleBlur, placeholder: placeholder, type: type, onChange: this.handleChange }, otherProps, { ref: function (input) { return (_this.input = input); }, onFocus: this.handleFocus, value: value })),
            this.getRightIcon()));
    };
    Input.defaultProps = {
        type: 'text',
    };
    return Input;
}(React.Component));
var formDimensionsMixin = function (props) {
    return styles_1.getFormElementDimensions(props.size);
};
var iconMixin = function (props) {
    return styles_1.getIconPadding({
        iconLeft: props.iconLeft,
        iconRight: props.iconRight,
        loadingIcon: props.isLoading,
        clearIcon: props.clearable,
    });
};
// prettier-ignore
var StyledInput = styled_components_1.default(Input)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  input {\n    background-color: white;\n    border: 1px solid transparent;\n    border-color: #dbdbdb;\n    border-radius: 3px;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n    display: inline-flex;\n    font-size: 1rem;\n    justify-content: flex-start;\n    ", ";\n    ", ";\n    max-width: 100%;\n    width: 100%;\n    &:focus {\n      outline: none;\n    }\n  }\n  i {\n    font-size: 1rem;\n    color: ", ";\n    ", ";\n  }\n"], ["\n  position: relative;\n  input {\n    background-color: white;\n    border: 1px solid transparent;\n    border-color: #dbdbdb;\n    border-radius: 3px;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n    display: inline-flex;\n    font-size: 1rem;\n    justify-content: flex-start;\n    ", ";\n    ", ";\n    max-width: 100%;\n    width: 100%;\n    &:focus {\n      outline: none;\n    }\n  }\n  i {\n    font-size: 1rem;\n    color: ", ";\n    ", ";\n  }\n"])), formDimensionsMixin, iconMixin, styles_1.colors.grey.default, formDimensionsMixin);
exports.default = StyledInput;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
