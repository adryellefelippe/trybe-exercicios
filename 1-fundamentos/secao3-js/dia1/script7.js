const angulo1 = -120;
const angulo2 = 20;
const angulo3 = 40;

if((angulo1+angulo2+angulo3) === 180){
    console.log(true);
} else if((angulo1+angulo2+angulo3) != 180 || angulo1 <0 || angulo2 <0 || angulo3 <0 ){
    console.log(false);
}