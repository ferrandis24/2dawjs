let base = 10;
let minu = 0;


let min =Number(prompt("dime los minutos que ha hablado"));
if (min>240) {
  minu=min-240;
  base=base+6
  minu=minu*0.2
  console.log(`el precio es ${minu+base}`);
}
else if(min>180 && min<=240){
  minu = min-180
  minu=minu*0.1
  console.log(`el precio es ${minu+base}`);
}
else{
  console.log(`el precio es ${minu+base}`);
}














