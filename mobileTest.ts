

import {Mobile} from "./mobile"

let mobile1 = new Mobile("Nokia","3210","Nokia",0,"Grey",false,0,50);
let mobile2 = new Mobile("Iphone","3G","Apple",8,"Black",false,1,150);
let mobile3 = new Mobile("Samsung","Galaxy 10","Samsung",128,"White",true,5,350);

console.log(mobile1,mobile2,mobile3);

console.log("--------------------");

mobile1.is5G = true;
mobile1.cameraNumber = 4;

console.log(mobile1,mobile2,mobile3);


