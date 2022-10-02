function turnOn(){
    document.getElementById("bulb-image").src="pic_bulbon.gif"
}
function turnOff(){
    document.getElementById("bulb-image").src="pic_bulboff.gif"
}
var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;
}

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
});
var photo;

// Describe this function...
function first() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_img2 = document.getElementById('img');
  element_img2.setAttribute("src", photo[0]);
  photo.push(photo.shift());
}


photo = ['https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', 'https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'];
first();


document.getElementById('next').addEventListener('click', (event) => {
  first();

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  element_img.setAttribute("src", photo.slice(-1)[0]);
  photo.unshift(photo.pop());

});
var value, item, links, http;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


value = getNumberOrString(document.getElementById('button').value);
let element_button = document.getElementById('button');
element_button.setAttribute("src", 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX///8AAADl5eX09PTV1dUICAiurq5TU1Orq6tJSUnc3Nzt7e1ERET6+vpRUVG9vb0gCS9GAAAA8ElEQVR4nO3dOQ4CQRAEQZblPv//W2yUFsLoNSKekGb1SLPbAQAAAAAAAAAAAADfbodh9+kC9ViGXaYL1Hm6yWm6QGlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJnWdbrLBjXqd9pwuAAAAAMCvzstx1Ba3x9f09rjBJjbq0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClvQet9mnW5TRcAAAAAgP/d98PW6QJljy27fWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJuWPs3LLAAAAAAAAAAAAAGAbPhzZL1DD5UvKAAAAAElFTkSuQmCC');
links = ['Google', 'CYF', 'Git hub'];
http = ['https://www.google.com/', 'https://codeyourfuture.io/', 'https://github.com/'];


document.getElementById('button').addEventListener('click', (event) => {
  if (value == 'off') {
    links.forEach((item) => {
      let element_list = document.getElementById('list');
      let new_li = document.createElement('li');
      let new_a = document.createElement('a');
      new_a.innerText = item;
      new_a.setAttribute("href", http.shift());

      new_li.appendChild(new_a);

      element_list.appendChild(new_li);
    });
    value = 'on';
    let element_button2 = document.getElementById('button');
    element_button2.setAttribute("src", 'https://cdn4.vectorstock.com/i/1000x1000/00/83/close-icon-vector-23190083.jpg');
  } else {
    let element_list2 = document.getElementById('list');
    element_list2.innerText = '';
    value = 'off';
    let element_button3 = document.getElementById('button');
    element_button3.setAttribute("src", 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX///8AAADl5eX09PTV1dUICAiurq5TU1Orq6tJSUnc3Nzt7e1ERET6+vpRUVG9vb0gCS9GAAAA8ElEQVR4nO3dOQ4CQRAEQZblPv//W2yUFsLoNSKekGb1SLPbAQAAAAAAAAAAAADfbodh9+kC9ViGXaYL1Hm6yWm6QGlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJnWdbrLBjXqd9pwuAAAAAMCvzstx1Ba3x9f09rjBJjbq0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClvQet9mnW5TRcAAAAAgP/d98PW6QJljy27fWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJuWPs3LLAAAAAAAAAAAAAGAbPhzZL1DD5UvKAAAAAElFTkSuQmCC');
  }

});
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }