let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let num of numbers){
    console.log('Numeros do array: '+ num);
}

let soma = 0; 

for(let sum of numbers){
    soma += sum;
}

console.log('Soma dos numeros do array: '+ soma);

const media = soma/(numbers.length);

console.log('Média da soma dos numeros do array: '+ media);

if(media>20){
    console.log('Valor de media maior que 20.');
} else{
    console.log('Valor de media menor ou igual a 20.');
}

let numMaior = 0;

for(let i=0; i<numbers.length; i+=1){
    if(numMaior<numbers[i]){
        numMaior=numbers[i];
    }
}

console.log('O maior valor no array é: '+numMaior);

let quantidadeImpares = 0;

for(let i=0; i<numbers.length; i+=1){
    if((numbers[i]%2)!==0){
        quantidadeImpares += 1;
    }
}

if(quantidadeImpares>0){
    console.log('Ha '+quantidadeImpares+' numeros impares no array.');
} else{
    console.log('Nenhum valor ímpar encontrado');
}

let numMenor = numMaior;

for(let i=0; i<numbers.length; i+=1){
    if(numMenor>numbers[i]){
        numMenor=numbers[i];
    }
}

console.log('Menor numero do array: '+numMenor);

let novoArray = [];

for(let i = 0; i < 25;i+=1){
    novoArray.push(i+1);
}

console.log(novoArray);

for(let num of novoArray){
    console.log('Divisao de '+num+' por 2 = ', num/2);
}