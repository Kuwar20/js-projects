let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');


function generateQr() {
    if(qrText.value.length > 0){
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img')
    }else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
    
}
 // this function will be called when the user press enter key in the input field
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        generateQr();
    }
}

function downloadQr() {
    if (qrText.value.length > 0) {
        // Create a temporary anchor element
        var link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'qrcode.png'; // Set the desired file name and extension

        // Simulate a click on the anchor to trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}