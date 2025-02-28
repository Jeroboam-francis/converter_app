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
        <p><strong>${inputValue} ${unit}</strong> is equals to <strong> ${inputValue *1} mm</strong></p>
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
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *10} mm</strong></p>
         <p><strong>inputValue} ${unit}</strong> is equals to<strong> ${inputValue *1} cm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.1} dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.01} M</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.001} Dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.0001} Hm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.00001} Km</strong></p>
        `

        
        break;
    case "decimeters":
        unit ="dm";
        displayValue=`
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *100} mm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *10} cm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *1} dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.1} M</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.01} Dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.001} Hm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.0001} Km</strong></p>
        `

        break;
    case "meters":
        unit ="M"
        displayValue=`
        <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *1000} mm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *100} cm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *10} dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *1} M</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.1} Dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.01} Hm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.001} Km</strong></p>
        `
        break;

    case "decameters":
        unit ="Dm";
        displayValue=`
        
        <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *10000} mm</strong></p>
         <p><strong>${inputValue} ${unit} </strong>is equals to <strong>${inputValue *1000} cm</strong></p>
         <p><strong>${inputValue} ${unit} </strong>is equals to<strong> ${inputValue *100} dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *10} M</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *1} Dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.1} Hm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to<strong> ${inputValue *0.01} Km</strong></p>
        `

        break;
    case "hectometers":
        unit="Hm";
        displayValue=`
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *100000} mm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *10000} cm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *1000} dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *100} M</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *10} Dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *1} Hm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *0.1} Km</strong></p>
        `

        break;
    case "kilometer":
       unit ="Km";
    displayValue=`
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *1000000} mm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *100000} cm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *10000} dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *1000} M</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *100} Dm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *10} Hm</strong></p>
         <p><strong>${inputValue} ${unit}</strong> is equals to <strong>${inputValue *1} Km</strong></p>
        `

        break;       
}    

outputValue.innerHTML=displayValue;


}

document.getElementById("#inputValue").style={
    
}

