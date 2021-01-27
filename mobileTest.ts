

import {Mobile} from "./mobile"

let mobile1 = new Mobile("Nokia","3210","Nokia",0,"Grey",false,0,50);
let mobile2 = new Mobile("Iphone","3G","Apple",8,"Black",false,1,150);
let mobile3 = new Mobile("Samsung","Galaxy 10","Samsung",128,"White",true,5,350);

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

let allMobile=[mobile1,mobile2,mobile3]



allMobile[0].printCaracteristicas();
allMobile[1].printCaracteristicas();
allMobile[2].printCaracteristicas();

console.log("--------------------");

function printCaracteristicasAll(allMobile){

    let i;

    for(i=0;i<allMobile.length;i++){

        allMobile[i].printCaracteristicas();
    }
};

printCaracteristicasAll(allMobile);





