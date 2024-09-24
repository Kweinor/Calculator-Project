const display=document.getElementById("display")
const operation=document.querySelector("operator")
function displayNumber(input){
    display.value+=input
}
function clearNumber(){
    display.value=""
}
function deleteNumber(input){
    display.value=display.value.slice(0,-1)
}
function calculations(){
 display.value=eval(display.value)
}
