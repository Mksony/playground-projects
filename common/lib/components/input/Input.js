"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../styles");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super.call(this) || this;
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }
    Input.prototype.handleBlur = function (e) {
        var onBlur = this.props.onBlur;
        if (onBlur) {
            onBlur(e);
        }
    };
    Input.prototype.handleChange = function (e) {
        var onChange = this.props.onChange;
        if (onChange) {
            onChange(e);
        }
    };
    Input.prototype.render = function () {
        var _a = this.props, autoComplete = _a.autoComplete, autoFocus = _a.autoFocus, placeholder = _a.placeholder, className = _a.className, type = _a.type;
        return (React.createElement("input", { autoComplete: autoComplete, autoFocus: autoFocus, onBlur: this.handleBlur, placeholder: placeholder, className: className, type: type }));
    };
    return Input;
}(React.Component));
Input.defaultProps = {
    type: 'text',
};
var StyledInput = (_a = ["\n  background-color: white;\n  border: 1px solid transparent;\n  border-color: #dbdbdb;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: inline-flex;\n  font-size: 1rem;\n  justify-content: flex-start;\n  ", "\n  max-width: 100%;\n  width: 100%;\n"], _a.raw = ["\n  background-color: white;\n  border: 1px solid transparent;\n  border-color: #dbdbdb;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: inline-flex;\n  font-size: 1rem;\n  justify-content: flex-start;\n  ", "\n  max-width: 100%;\n  width: 100%;\n"], styled_components_1.default(Input)(_a, function (props) { return styles_1.getFormElementDimensions(props.size); }));
exports.default = StyledInput;
var _a;
//# sourceMappingURL=Input.js.map