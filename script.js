

const lista =[1,2,3,4,5,6];

const novaLista = lista.map(function(item, index){
    return + index;
});
console.log(novaLista);

// reduce => soma dos numero da lista de array

const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});

console.log(soma);

// find => procura item na lista de array 

const find = lista.find(function(item){
    return item === 6;
});
console.log(find);
