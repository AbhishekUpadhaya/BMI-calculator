let height=document.querySelector("#height");
let weight=document.querySelector("#weight");
let cal=document.querySelector("#calc");

const calculateValue=(height,weight)=>{
     
    height=height/100;
    return Math.floor(weight/(Math.pow(height,2)));

}
const showResult=(bmi)=>{
    let dis= document.querySelector(".result");
    dis.innerHTML=`Bmi Score = ${bmi}`;
    dis.style.padding="5px";
    dis.style.fontSize="20px";
    dis.style.backgroundColor="white";
    dis.style.color="green";
    
}

cal.addEventListener("click",()=>{
   let Bmi = calculateValue(height.value ,weight.value);
    showResult(Bmi);
    
})
