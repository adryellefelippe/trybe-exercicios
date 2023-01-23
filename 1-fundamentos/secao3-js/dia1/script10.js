const num1 = 13;
const num2 = 33;
const num3 = 13;

if((num1%2)===0 || (num2%2)===0 || (num3%2)===0){
    console.log('Um dos numeros é par:', true);
} else{
    console.log('Um dos numeros é par:', false);
};

if((num1%2)!=0 || (num2%2)!=0 || (num3%2)!=0){
    console.log('Um dos numeros é impar:', true);
} else{
    console.log('Um dos numeros é impar:', false);
};