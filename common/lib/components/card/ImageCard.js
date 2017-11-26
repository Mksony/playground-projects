"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _1 = require("./");
var ImageCard = function (_a) {
    var altText = _a.altText, imgSrc = _a.imgSrc, bgColor = _a.bgColor, children = _a.children;
    return (React.createElement(_1.Card, { bgColor: bgColor },
        React.createElement("img", { src: imgSrc, alt: altText }),
        React.createElement(_1.CardContent, null, children)));
};
ImageCard.defaultProps = {
    bgColor: 'white',
};
exports.default = ImageCard;
