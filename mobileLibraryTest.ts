
import {Mobile} from "./mobile"
import {MobileLibrary} from "./mobileLibrary"

let mobile1 = new Mobile("Nokia","3210","Nokia",0,"Grey",false,0,50);
let mobile2 = new Mobile("Iphone","3G","Apple",8,"Black",false,1,150);
let mobile3 = new Mobile("Samsung","Galaxy 10","Samsung",128,"White",true,5,350);
let mobile4 = new Mobile("Blackview","A20","Blackview",16,"Black",false,3,100);

let allMobiles = [mobile1,mobile2,mobile3,mobile4];

let tienda = new MobileLibrary("Advanced Shop","Barcelona",allMobiles);

console.log(tienda.getName());
console.log(tienda.getLocation());
console.log(tienda.getMobiles());
console.log(tienda.getTotalPrice());

console.log("--------------------");

let allMobilesInverse = [mobile4,mobile3,mobile2,mobile1];

tienda.setName("Past shop");
tienda.setLocation("Madrid");
tienda.setMobiles(allMobilesInverse);
tienda.setTotalPrice(50);

console.log(tienda.getName());
console.log(tienda.getLocation());
console.log(tienda.getMobiles());
console.log(tienda.getTotalPrice());

console.log("--------------------");

let tienda1 = new MobileLibrary("Advanced Shop","Barcelona",allMobiles);

tienda1.printLibrary();

