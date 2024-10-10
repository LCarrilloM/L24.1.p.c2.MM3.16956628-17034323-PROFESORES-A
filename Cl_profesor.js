export default class Cl_profesor {
    constructor (nombre,bono){
        this.nombre=nombre;
        this.bono=bono;
    }

    setNombre(n){
        this._nombre=n;
    }

    getNombre(){
        return this._nombre;
    }

    setBono(b){
        this._bono=+b;
    }

    getBono(){
        return this._n_bono;
    }
}