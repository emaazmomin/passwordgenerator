let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&";
// console.log(str.length);
// console.log(str.charAt(58));
let display = document.getElementById('showpass');
let len = document.getElementById('inp');
let btn = document.getElementById('btn');
let strength = document.getElementById('showstren');
let reason = document.getElementById('showres');
// console.log(str.length);
btn.addEventListener('click', show);
function show() {
    let rex = /[A-Z]/i;
    let r = rex.exec(len.value);
    // console.log()
    let password = "";
    if(len.value < 8){
        alert("The length should be 8 or more");
        len.value = "";
    }
    else if(r != null){
        alert("The Length should be in numbers");
        len.value = "";
    }
    else{

    
    for(i=0; i < len.value;i++){
        char = Math.ceil(Math.random()*str.length-1);
            
            password += str.charAt(char);
            // console.log(password);
    }

    // console.log(len.value);
    // console.log(password);
    // console.log(password.length);
    display.innerHTML = password;

    let regex1 = /[A-Z]/
    let regex2 = /[a-z]/
    let regex3 = /[0-9]/
    let regex4 = /[!@#$%^&]/;

    let result1 = regex1.exec(password);
    let result2 = regex2.exec(password);
    let result3 = regex3.exec(password);
    let result4 = regex4.exec(password);
    
    if(result1 == null|| result2==null || result3 == null || result4== null){
        strength.innerHTML ="Very Good" 
        // console.log("Very Good");
    }
    else if((result1 == null|| result2==null || result3 == null || result4== null)&&(result1 == null|| result2==null || result3 == null || result4== null)){
        strength.innerHTML ="Good"; 
        // console.log("Good");
    }
    else if((result1 == null|| result2==null || result3 == null || result4== null) &&(result1 == null|| result2==null || result3 == null || result4== null)&&(result1 == null|| result2==null || result3 == null || result4== null)){
        strength.innerHTML ="Poor"; 
        // console.log("Poor")
    }
    else{
        strength.innerHTML ="Excellent"; 
        // console.log("Excellent");
    }
    len.value = "";
    }    
}
// let copbtn = document.getElementById('btn2');
//Function to copy the text to clipboard
function func1(){
    navigator.clipboard.writeText(display.innerHTML);
    alert("The Password is copied to clipboard");
}

function copyMyText() {
    // Get the text field
    let copyText = document.getElementById("showpass");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

//Function to clear the page
function clearform(){
    display.innerHTML = "";
    len.innerHTML = "";
    len.value = "";
    strength.innerHTML="";
    // console.log("The button was clicked");
}