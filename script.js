function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo:'Programador',
        status:1,
        codigo: '45646564646464'
    };
    return novosDados;
}
    console.log(cadastroPessoa({nome: 'Tiago', sobrenome: 'Silva', anoInicio: 2042}));
