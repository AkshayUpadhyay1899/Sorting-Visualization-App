/*function arrgen() {
	var len = document.getElementById("arr_range").value;
	var data = [];
    if(len >= 10 && len <= 1000)
    {
        for (var i = 0; i < len; i++) {
            var newNumber = Math.random();
            data.push(newNumber);
        }
    }
}

*/

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector("#s3b1").disabled = true;
    document.querySelector("#s3b2").disabled = true;
    document.querySelector("#s3b3").disabled = true;
    document.querySelector("#s3b4").disabled = true;
    document.querySelector("#s3b5").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector("#s3b1").disabled = false;
    document.querySelector("#s3b2").disabled = false;
    document.querySelector("#s3b3").disabled = false;
    document.querySelector("#s3b4").disabled = false;
    document.querySelector("#s3b5").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_range").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_range").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector("#s3b6").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector("#s3b6").disabled = false;
}

let len = document.querySelector('#arr_range');

// Event listener to update the bars on the UI
len.addEventListener('input', function(){
    console.log(len.value, typeof(len.value));
    createNewArray(parseInt(len.value));
});

// Default input for waitforme function (260ms)
let delay = 100;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_range');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 500 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers
let arr = [];

// Call to display bars right when you visit the site

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function createNewArray() {
    // calling helper function to delete old bars from dom
    deleteChild();
    var len = document.getElementById("arr_range").value;
    // creating an array of random numbers 
    arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(arr);

    // select the div #bars element
    const bars = document.querySelector("#iframe");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < len; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${arr[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#iframe");
    bar.innerHTML = '';
}

function arrRegen() {
// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector("#s3b6");
newArray.addEventListener("click", function(){
    console.log("From newArray " + len.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray();
});
}

function arrsort() {
        const bars = document.querySelector("#iframe");
        document.getElementById("#iframe") = arr.sort();
}