const custoProduto = 20;
const custoTotal = custoProduto + (custoProduto*0.2);
const valorProduto = 25;
const vendasRealizadas = 0;
let lucro = 0;

if(custoProduto < 0 || valorProduto < 0){
    console.log('Valores invalidos');
} else if(vendasRealizadas>0){
    lucro = (valorProduto - custoProduto)*vendasRealizadas;
    console.log('O lucro é =', lucro);
} else {
    lucro = valorProduto - custoProduto;
    console.log('O lucro é =',lucro);
}