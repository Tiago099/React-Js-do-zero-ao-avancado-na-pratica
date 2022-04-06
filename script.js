
//endsWith
//startsWith
//some
//every

//includes => delvover true ou false
//some => verifica se tem algum ou alguma 
/*let nomes = ['Matheus', 'Lucas', 'Douglas',];
/* let nomes = ['Tiago', 'Mateus', 'Douglas' ];
console.log(nomes.includes('Douglas'));
if(nomes.includes('Joao')){
    console.log('MATEUS ESTA NA LISTA');
}else{
    console.log('JOAO NÃO ESTA NA LISTA');   
}
console.log(nomes.some(nome => nome === 'Matheus'));
*/
// endsWith =>  verifica se a palavra termina o que voce esta passando tanto a letra ou uma palavra

/*let nome = 'Tiago';
console.log(nome.endsWith('o'));
*/
//startsWith verifica se a palavra comeca com a que voce esta passando no console
//every => verifica condicoes posta

let nomes = [
    {nome: 'Matheus', idade:18},
    {nome: 'Lucas', idade: 25},
    {nome:'Tiago', idade:20}
];

let nome = 'Tiago';
console.log(nomes.every(nome => nome.idade >=14));

console.log(nome.startsWith('T')); 
if(nomes.every(nome => nome.idade >=18)){
    console.log('TODOS SÃO MAIORES DE 18');
}else{
    console.log('OPS ALGUME É DE MENOR');
}