let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('Ordem crescente: ', numbers.sort((a, b) => a-b));
console.log('Ordem decrescente: ', numbers.sort((a, b) => b-a));

const numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];
let numAcrescentar;

for(let i=0; i<numbers2.length; i+=1){
    if(i==(numbers2.length-1)){
        numAcrescentar = (numbers2[i])*2;
        novoArray.push(numAcrescentar);
    } else{
        numAcrescentar = (numbers2[i])*(numbers2[i+1]);
        novoArray.push(numAcrescentar);
    }
}
console.log(novoArray);
