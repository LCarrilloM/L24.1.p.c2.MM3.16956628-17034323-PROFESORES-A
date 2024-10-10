import Cl_profesor from "./Cl_profesor.js";
export default class Cl_contratado extends Cl_profesor{
    constructor (nombre,bono,cntHoras){
        super(nombre,bono);
        this.cntHoras=cntHoras;
    }

    setCntHoras(cH){
        this._cntHoras=+cH;
    }

    getCntHoras(){
        return this._cntHoras;
    }

    IngresoTotal(){
        return (this.cntHoras*10)+ this.bono;
    }
}