"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var mobile_1 = require("./mobile");
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        this.totalPrice = 0;
        var i;
        for (i = 0; i < this.mobiles.length; i++) {
            this.totalPrice += this.mobiles[i].getPrice();
        }
        return this.totalPrice;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("\u00BB" + "This is all my mobiles:");
        var i;
        for (i = 0; i < this.mobiles.length; i++) {
            this.mobiles[i].printCaracteristicas();
        }
        console.log("\u00BB" + "Price overall: " + this.totalPrice);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
;
var mobile5 = new mobile_1.Mobile("Nokia", "3210", "Nokia", 0, "Grey", false, 0, 50);
var mobile6 = new mobile_1.Mobile("Iphone", "3G", "Apple", 8, "Black", false, 1, 150);
var mobile7 = new mobile_1.Mobile("Samsung", "Galaxy 10", "Samsung", 128, "White", true, 5, 350);
var mobile8 = new mobile_1.Mobile("Blackview", "A20", "Blackview", 16, "Black", false, 3, 100);
var nombreTienda = "Soft Shop";
var ubicacion = "Barcelona";
var mobilesForAll = [mobile5, mobile6, mobile7, mobile8];
var mobilesShop = new MobileLibrary(nombreTienda, ubicacion, mobilesForAll);
console.log(mobilesShop.getName());
console.log(mobilesShop.getLocation());
console.log(mobilesShop.getMobiles());
console.log(mobilesShop.getTotalPrice());
mobilesShop.printLibrary();
console.log("---------------------------");
var mobilesShopReverse = [mobile8, mobile7, mobile6, mobile5];
mobilesShop.setName("Run Shop");
mobilesShop.setLocation("Madrid");
mobilesShop.setMobiles(mobilesShopReverse);
mobilesShop.setTotalPrice(900);
console.log(mobilesShop.getName());
console.log(mobilesShop.getLocation());
mobilesShop.printLibrary();
