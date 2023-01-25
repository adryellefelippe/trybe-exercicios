let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';

for(let i=0; i<array.length; i+=1){
    if(i===0){
        menorPalavra=array[i];
        maiorPalavra=array[i];
    } else{
        if(array[i].length>maiorPalavra.length){
            maiorPalavra=array[i];
        } else if(array[i].length<menorPalavra.length){
            menorPalavra=array[i];
        }
    }
}

console.log(menorPalavra);
console.log(maiorPalavra);