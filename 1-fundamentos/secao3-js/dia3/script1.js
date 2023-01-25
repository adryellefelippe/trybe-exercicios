let word = 'amor';
let invertido = '';

for(let i=0; i<word.length; i+=1){
    invertido += word[word.length - 1 - i];
}

console.log(invertido);

