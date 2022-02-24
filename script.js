let display = document.querySelector('#display');

function showDisplay(value){
    if(value == '.'){
        display.value = '0'
    }
    display.value += value;
}

function clearAll(){
    display.value = "";
}

function resultado(){
    let result = eval(display.value);
    display.value = result;
    if(display.value == "undefined"){
        display.value = '';
    }
}