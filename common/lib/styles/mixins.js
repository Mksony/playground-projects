"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formElementFontSizes = {
    small: '.75rem',
    medium: '1.25rem',
    large: '1.5rem',
    default: '1rem',
};
function getFormElementDimensions(size) {
    return "\n    font-size: " + formElementFontSizes[size] + "\n    line-height: 1.5;\n    height: 2.25em;\n    padding-bottom: calc(0.375em - 1px);\n    padding-left: calc(0.625em - 1px);\n    padding-right: calc(0.625em - 1px);\n    padding-top: calc(0.375em - 1px);\n  ";
}
exports.getFormElementDimensions = getFormElementDimensions;
function getIconPadding(_a) {
    var iconLeft = _a.iconLeft, iconRight = _a.iconRight, loadingIcon = _a.loadingIcon, clearIcon = _a.clearIcon;
    var iconPadding = '';
    var PADDING = '2.25em';
    if (iconLeft || loadingIcon) {
        iconPadding += "padding-left: " + PADDING + ";";
    }
    if (iconRight || clearIcon) {
        iconPadding += "padding-right: " + PADDING + ";";
    }
    return iconPadding;
}
exports.getIconPadding = getIconPadding;
//# sourceMappingURL=mixins.js.map