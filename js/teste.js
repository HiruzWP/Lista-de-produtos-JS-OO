class Nome{ //ESSA POARH É SÓ UM MOLDE COM OS VALORES   
    constructor(valor){
        this._nome = valor
        
    }

    //_nome; (Tiago)
    //dinamico;
    //dinamco2;
    //nulo
}

let algo = new Nome("Tiago") // ISSO SIM É UM OBJ

let algo2 = new Nome()
algo2.dinamico = 002

algo.dinamico = 123
algo.dinamico2 = "StringQualquer"
algo.nulo = null
//console.log(algo._nome)
console.log(algo.dinamico)