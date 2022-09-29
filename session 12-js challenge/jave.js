const images = ["./resources/img.png", "./resources/IceCream.png", "./resources/img2.png", "./resources/img3.png"];
const rightButton = document.getElementById("right");
const slider = document.getElementById("slider");
const leftButton = document.getElementById("left");
const counter = document.getElementById("p");

position = 0
console.log(position);

rightButton.onclick = function() {
    if(position == images.length - 1) {
        position = 0;
    }else{
        position ++;
    }
    console.log(position)
    slider.style.backgroundImage = `url(${images[position]})`;
    counter.innerHTML = position;
}

leftButton.onclick = function() {
    if(position <= 0) {
        position = 3;
    }else{
        position --;
    }
    console.log(position)
    slider.style.backgroundImage = `url(${images[position]})`;
    counter.innerHTML = position;

}