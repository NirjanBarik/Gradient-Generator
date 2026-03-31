let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");


let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexvalues = () =>{

        let myHex = "0123456789abcdef";
        let colors = "#"
        for(let i =0;i<6;i++){
            colors = colors + myHex[Math.floor(Math.random()*16)];
            }
        return colors;
        
} ;
const handleButton1 = () => {
    rgb1 = hexvalues();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2})`;
    btn1.innerText = rgb1;
 
    
};

const handleButton2 = () => {
    rgb2 = hexvalues();
    console.log(rgb2);
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2})`;
    btn2.innerText = rgb2;
   
};

btn1.addEventListener("click" , handleButton1);
btn2.addEventListener("click" , handleButton2);

//copy the code
copyDiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
    alert("Your text has been copied to Clipboard");

});