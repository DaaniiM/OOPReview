

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
        this.totalPrice = this.totalPrice;

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

    public totalPriceCalculation(){

        this.totalPrice = 0;

        let i;

        for(i=0;i<this.mobiles.length;i++){

            this.totalPrice +=  this.mobiles[i].getPrice();

        }

        console.log(this.totalPrice);
    }


};