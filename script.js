

function cadastrar(usuarios, ...novosUsuarios){

    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalUsuarios);
}
let usuarios = ["Tiago", "Joao"];

let novosUsuarios = cadastrar(usuarios, "Pedro", "Maria");