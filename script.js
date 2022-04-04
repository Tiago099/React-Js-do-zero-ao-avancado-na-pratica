//some
//every

//some => verifica se tem algum ou alguma 
/*let nomes = ['Matheus', 'Lucas', 'Douglas',];

console.log(nomes.some(nome => nome === 'Matheus'));
*/

//every => verifica condicoes posta

let nomes = [
    {nome: 'Matheus', idade:18},
    {nome: 'Lucas', idade: 25},
    {nome:'Tiago', idade:20}
];

console.log(nomes.every(nome => nome.idade >=14));

if(nomes.every(nome => nome.idade >=18)){
    console.log('TODOS SÃO MAIORES DE 18');
}else{
    console.log('OPS ALGUME É DE MENOR');
}