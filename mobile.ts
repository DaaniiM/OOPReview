
export class Mobile{

    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5G:boolean,cameraNumber:number,price:number){

        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    public getName():string{

        return this.name;
    }

    public setName(name:string){

        this.name = name;
    }

    public getModel():string{

        return this.model;
    }

    public setModel(model:string){

        this.model = model;
    }

    public getTrademark():string{

        return this.trademark;
    }

    public setTrademark(trademark:string){

        this.trademark = trademark;
    }

    public getSdSize():number{

        return this.sdSize;
    }

    public setSdSize(sdSize:number){

        this.sdSize = sdSize;
    }

    public getColor():string{

        return this.color;
    }

    public setColor(color:string){

        this.color = color;
    }

    public getIs5g():boolean{

        return this.is5G;
    }

    public setIs5g(is5g:boolean){

        this.is5G = is5g;
    }

    public getCameraNumber():number{

        return this.cameraNumber;
    }

    public setCameraNumber(cameraNumber:number){

        this.cameraNumber = cameraNumber;
    }

    public getPrice():number{

        return this.price;
    }

    public setPrice(price:number){

        this.price = price;
    }

    public printCaracteristicas(){

        console.log("\u00BB" + "The characteristics of the mobile " + this.name + " are:" + "\n" + "\t" + "\u00BB" + "Name: " + this.name + "\n" + "\t" + "\u00BB" + "Model: " + this.model 
        + "\n" + "\t" + "\u00BB" + "Trademark: " + this.trademark + "\n" + "\t" + "\u00BB" + "SD Size(GB): " + this.sdSize + "\n" + "\t" + "\u00BB" + "Color: " + this.color 
        + "\n" + "\t" + "\u00BB" + "Is 5g?: " + this.is5G + "\n" + "\t" + "\u00BB" + "Number of cameras: " + this.cameraNumber);
    }
};