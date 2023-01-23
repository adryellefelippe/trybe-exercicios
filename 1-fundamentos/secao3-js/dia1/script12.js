const salario = 3000;
let inssMaxEmReal;
let ir;
let salarioBase;
let salarioLiquido;

if(salario<=1556.94){
    salarioBase = salario - (salario*0.08);
} else if(salario>1556.94 && salario<=2594.92){
    salarioBase = salario - (salario*0.09);
} else if(salario>2594.92 && salario<=5189.82){
    salarioBase = salario - (salario*0.11);
} else {
    inssMaxEmReal = 570.88;
    salarioBase = salario - inssMaxEmReal;
}

if(salarioBase<=1903.98){
    console.log('Isento de imposto de renda.');
    console.log('Salario liquido: ', salarioBase);
} else if(salarioBase>=1903.99 && salarioBase<=2828.65){
    ir = (0.075*salarioBase) - 142.8;
    salarioLiquido = salarioBase-ir;
    console.log('Salario liquido: ',salarioLiquido);
} else if(salarioBase>=2828.66 && salarioBase<=3751.05){
    ir = (0.15*salarioBase) - 354.8;
    salarioLiquido = salarioBase-ir;
    console.log('Salario liquido: ',salarioLiquido);
} else if(salarioBase>=3751.06 && salarioBase<=4664.68){
    ir = (0.225*salarioBase) - 636.13;
    salarioLiquido = salarioBase-ir;
    console.log('Salario liquido: ',salarioLiquido);
} else if(salarioBase>4664.68){
    ir = (0.275*salarioBase) - 869.36;
    salarioLiquido = salarioBase-ir;
    console.log('Salario liquido: ',salarioLiquido);
} 



