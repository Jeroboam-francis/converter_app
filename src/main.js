const outputValue=document.getElementById("outputValue");


document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault
    document.getElementById("convertbtn").addEventListener("click",()=>converter());
});
function converter(){
    let  inputValue =document.getElementById("inputValue").value;
    
    let inputUnit= document.getElementById("inputUnit").value;

    let displayValue=[];
switch(inputUnit){
    case "millimeters":
        let unit="mm"
        displayValue=outputValue.innerHTML=`
        <p>${inputValue} ${unit} is equals to ${inputValue*1} millimeters</p>
        <p>${inputValue} ${unit} is equals to ${inputValue*0.01} centimeters</p>

        
        `
         
        break;
    case "centimeters":
        displayValue=inputValue*0.01;
        break;
    case "decimeters":
        displayValue=inputValue*0.001;
        break;
    case "meters":
        displayValue=inputValue*0.0001;
        break;
    case "decameters":
        displayValue=inputValue*0.00001;
        break;
    case "hectometers":
        displayValue=inputValue*0.000001;
        break;
    case "kilometer":
        displayValue=inputValue*0.0000001;
        break;       
}    

outputValue.innerHTML=displayValue;


}

