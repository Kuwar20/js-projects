// Add Font Awesome library
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
document.head.appendChild(fontAwesomeLink);
// this is equivalent to the following line:     
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

let toastBox = document.getElementById("toastBox")

let successMsg = '<i class="fas fa-check-circle"></i> Successfully Submitted';
let errorMsg = '<i class="fas fa-times-circle"></i> Please fix the error';
let invalidMsg = '<i class="fas fa-exclamation-circle"></i> Invalid input, check again';

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    
    if(msg.includes("error")){
        toast.classList.add("error");
    }
    if(msg.includes("Invalid")){
        toast.classList.add("invalid");
    }
    setTimeout(()=>{
        toast.remove();
    },5000) //5 seconds
}
