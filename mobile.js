"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getIs5g = function () {
        return this.is5G;
    };
    Mobile.prototype.setIs5g = function (is5g) {
        this.is5G = is5g;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.printCaracteristicas = function () {
        console.log("\u00BB" + "The characteristics of the mobile " + this.name + " are:" + "\n" + "\t" + "\u00BB" + "Name: " + this.name + "\n" + "\t" + "\u00BB" + "Model: " + this.model
            + "\n" + "\t" + "\u00BB" + "Trademark: " + this.trademark + "\n" + "\t" + "\u00BB" + "SD Size(GB): " + this.sdSize + "\n" + "\t" + "\u00BB" + "Color: " + this.color
            + "\n" + "\t" + "\u00BB" + "Is 5g?: " + this.is5G + "\n" + "\t" + "\u00BB" + "Number of cameras: " + this.cameraNumber);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
;
