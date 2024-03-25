
let cal = document.querySelector("#calc");



const invalidMsg = () => {
    let dis = document.querySelector(".result");
    dis.innerHTML = "Inavlid Input";
    dis.style.padding = "5px";
    dis.style.fontSize = "20px";
    dis.style.backgroundColor = "white";
    dis.style.color = "green";
}

// const resetBtn=()=>{

// }
const calculateValue = (height, weight) => {
    height = height / 100;
    return Math.floor(weight / (Math.pow(height, 2)));

}
const showResult = (bmi) => {
    let dis = document.querySelector(".result");
    dis.innerHTML = `Bmi Score = ${bmi}`;
    dis.style.padding = "5px";
    dis.style.fontSize = "20px";
    dis.style.backgroundColor = "white";
    dis.style.color = "green";
}

cal.addEventListener("click", (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    console.log(height,weight);
    if ((height === '' || height < 0 || isNaN(height)) && (weight=== '' || weight < 0 || isNaN(weight))) {
        invalidMsg();
    }
    else {
        let Bmi = calculateValue(parseInt(height), parseInt(weight));
        showResult(Bmi);
    }
    //    resetBtn();
});

