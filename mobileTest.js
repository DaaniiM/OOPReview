"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobile1 = new mobile_1.Mobile("Nokia", "3210", "Nokia", 0, "Grey", false, 0, 50);
var mobile2 = new mobile_1.Mobile("Iphone", "3G", "Apple", 8, "Black", false, 1, 150);
var mobile3 = new mobile_1.Mobile("Samsung", "Galaxy 10", "Samsung", 128, "White", true, 5, 350);
mobile1.printCaracteristicas();
mobile2.printCaracteristicas();
mobile3.printCaracteristicas();
console.log("--------------------");
mobile1.setIs5g(true);
mobile1.setCameraNumber(4);
mobile1.printCaracteristicas();
mobile2.printCaracteristicas();
mobile3.printCaracteristicas();
console.log("--------------------");
var allMobile = [mobile1, mobile2, mobile3];
allMobile[0].printCaracteristicas();
allMobile[1].printCaracteristicas();
allMobile[2].printCaracteristicas();
console.log("--------------------");
function printCaracteristicasAll(allMobile) {
    var i;
    for (i = 0; i < allMobile.length; i++) {
        allMobile[i].printCaracteristicas();
    }
}
;
printCaracteristicasAll(allMobile);
