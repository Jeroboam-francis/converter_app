const outputValue=document.getElementById("outputValue");


document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault
    document.getElementById("convertbtn").addEventListener("click",()=>converter());
});
function converter(){
    let  inputValue =document.getElementById("inputValue").value;
    
    let inputUnit= document.getElementById("inputUnit").value;

    let displayValue=[];
    let unit=""
switch(inputUnit){
    case "millimeters":
        unit="mm"
        displayValue=`
        <p>${inputValue} ${unit} is equals to ${inputValue *1} mm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.1} Cm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.01} dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.001} M</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.0001} Dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.00001} Hm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.000001} Km</p>
        
        `
         
        break;
    case "centimeters":
         unit="cm"
        displayValue=`
         <p>${inputValue} ${unit} is equals to ${inputValue *10} mm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1} cm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.1} dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.01} M</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.001} Dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.0001} Hm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.00001} Km</p>
        `

        
        break;
    case "decimeters":
        unit ="dm";
        displayValue=`
         <p>${inputValue} ${unit} is equals to ${inputValue *100} mm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *10} cm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1} dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.1} M</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.01} Dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.001} Hm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.0001} Km</p>
        `

        break;
    case "meters":
        unit ="M"
        displayValue=`
        <p>${inputValue} ${unit} is equals to ${inputValue *1000} mm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *100} cm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *10} dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1} M</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.1} Dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.01} Hm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.001} Km</p>
        `
        break;

    case "decameters":
        unit ="Dm";
        displayValue=`
        
        <p>${inputValue} ${unit} is equals to ${inputValue *10000} mm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1000} cm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *100} dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *10} M</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1} Dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.1} Hm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.01} Km</p>
        `

        break;
    case "hectometers":
        unit="Hm";
        displayValue=`
         <p>${inputValue} ${unit} is equals to ${inputValue *100000} mm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *10000} cm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1000} dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *100} M</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *10} Dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1} Hm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *0.1} Km</p>
        `

        break;
    case "kilometer":
       unit ="Km";
    displayValue=`
    <p>${inputValue} ${unit} is equals to ${inputValue *1000000} mm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *100000} cm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *10000} dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1000} M</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *100} Dm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *10} Hm</p>
         <p>${inputValue} ${unit} is equals to ${inputValue *1} Km</p>
        `

        break;       
}    

outputValue.innerHTML=displayValue;


}

