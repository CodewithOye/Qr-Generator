


let downloadBtn = document.getElementById("downloadBtn");
let imgBox = document.querySelector(".imgBox");
let qrBox = document.querySelector(".qrBox");
let qrText  = document.querySelector(".qrText");
let generateBtn = document.getElementById('generateBtn');

// Function to create and display the QR image

generateBtn.addEventListener("click", () =>  generateQR());
downloadBtn.disabled = true;

function generateQR(){
    if(qrText.value.length > 0){
        qrBox.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");
        downloadBtn.disabled = false;
        downloadBtn.href = qrBox.src;
    }else{
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 2000);
        downloadBtn.disabled = true;
    }
};

// function to download the qr code 
downloadBtn.addEventListener("click", (e) => {
    if (qrBox.src) {
        const link = document.createElement("a");
        link.href = qrBox.src;
        link.target="_blank"
        link.download = "qr-code.jpg";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }
    });





























// const qrText = document.getElementById('text-qr')
// const sizeSelect = document.getElementById('size-select')
// const downloadBtn = document.getElementById('downloadBtnBtn')
// const generateBtn = document.getElementById('generateBtnBtn')
// const qrContainer = document.getElementsByClassName('body-qr')

// let size = sizeSelect.value;

// generateBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     isEmptyInput();
// })

// sizeSelect.addEventListener("change" , (e) => {
//     size = e.target.value;
//     isEmptyInput();
// })


// downloadBtn.addEventListener('click', () => {
//     let img = document.querySelector('.body-qr img');
//     if(img !== null){
//         let imgAtrr = img.getAttribute('src')
//         downloadBtn.setAttribute('href', imgAtrr);
//     }else{
//         downloadBtn.setAttribute('href', `${document.querySelector("canvas").toDataURL()}`);
//     }
// })

// function isEmptyInput(){
//     qrText.value.length > 0 ? generateQRCode() : alert("Enter the url or Text to generate your QR code")
// }

// function generateQRCode(){
//     qrContainer.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    
// }