

import {Mobile} from "./mobile"

export class MobileLibrary{

    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor(name:string,location:string,mobiles:Mobile[]){

        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();

    }

    public getName():string{

        return this.name;
    }

    public setName(name:string){

        this.name = name;
    }

    public getLocation():string{

        return this.location;
    }

    public setLocation(location:string){

        this.location = location;
    }

    public getMobiles():Mobile[]{

        return this.mobiles;
    }

    public setMobiles(mobiles:Mobile[]){

        this.mobiles = mobiles;
    }

    public getTotalPrice():number{

        return this.totalPrice;
    }

    public setTotalPrice(totalPrice:number){

        this.totalPrice = totalPrice;
    }

    private totalPriceCalculation(){

        this.totalPrice = 0;

        let i;

        for(i=0;i<this.mobiles.length;i++){

            this.totalPrice +=  this.mobiles[i].getPrice();

        }

        return this.totalPrice;
    }

    public printLibrary(){

        console.log("\u00BB" + "This is all my mobiles:");

        let i;

        for(i=0;i<this.mobiles.length;i++){

            this.mobiles[i].printCaracteristicas();

        }

        console.log("\u00BB" + "Price overall: " + this.totalPrice);

    }


};


let mobile5 = new Mobile("Nokia","3210","Nokia",0,"Grey",false,0,50);
let mobile6 = new Mobile("Iphone","3G","Apple",8,"Black",false,1,150);
let mobile7 = new Mobile("Samsung","Galaxy 10","Samsung",128,"White",true,5,350);
let mobile8 = new Mobile("Blackview","A20","Blackview",16,"Black",false,3,100);

let nombreTienda = "Soft Shop";

let ubicacion = "Barcelona";

let mobilesForAll = [mobile5,mobile6,mobile7,mobile8];

let mobilesShop = new MobileLibrary(nombreTienda,ubicacion,mobilesForAll);

console.log(mobilesShop.getName());
console.log(mobilesShop.getLocation());
console.log(mobilesShop.getMobiles());
console.log(mobilesShop.getTotalPrice());
mobilesShop.printLibrary();

console.log("---------------------------");

let mobilesShopReverse = [mobile8,mobile7,mobile6,mobile5];

mobilesShop.setName("Run Shop");
mobilesShop.setLocation("Madrid");
mobilesShop.setMobiles(mobilesShopReverse);
mobilesShop.setTotalPrice(900);

console.log(mobilesShop.getName());
console.log(mobilesShop.getLocation());
mobilesShop.printLibrary();





