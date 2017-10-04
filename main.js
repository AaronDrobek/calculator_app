let one      = document.getElementById('one');
let display  = document.getElementById('display');
let keys     = document.getElementsByClassName('keys');
let equal    = document.getElementById('equal');
let clear    = document.getElementById('clear');
let add      = document.getElementById('add');
let multiply = document.getElementById('multiply');
let subtract = document.getElementById('subtract');
let divide   = document.getElementById('divide');
let calcType = []


for (var i = 0; i < keys.length; i++) {

  keys[i].addEventListener('click', function(event) {
    // if(this.innerHTML=='='){
      display.value += event.target.name;
        // result = eval(display.textContent;
      })

    clear.addEventListener('click', function() {
    display.value = "";
  })

  equal.addEventListener('click', function() {
  display.value = eval(display.value);
})


    //
    // let calc = function(keys,  keys, calcType){
    //
    //   if (calcType === "add"){
    //     return num1 + num2;
    //   }else if(calcType === "mutliply"){
    //     return num1 * num2;
    //   }else if(calcType === "divide"){
    //     return num1 / num2;
    //   }else if(calcType === "subtract"){
    //     return num1 - num2;
    //   }
    // }



}
console.log(eval);
