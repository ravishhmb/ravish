let images = [];
let i = 0;
let time = 1000;
images[0] = 'images/logo.png';
images[1] = 'images/logo2.png';
images[2] = 'images/logo4.png';
function changeImage() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImage()", time);
}

    

window.onload = changeImage;




const texts = ['Namaste,','Hello,','Welcome,'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.namaste').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 300);

}());
