// Select the buttons from html
const allBtns = document.querySelectorAll('.nav-btn')

// Select all the screens from html
const allScreens = document.querySelectorAll('.display div')
const display = document.querySelector('.display')

let transformValue = 0;

function slide (index) {
    transformValue = index * 100

    display.style.setProperty('transform', `translateX(-${transformValue}%)`)
    console.log(transformValue);
}


// Loop through all buttons using forEach method
allBtns.forEach(function (btn, index) {
    btn.onclick = function () {
        // Remove .active class from other buttons
        allBtns.forEach(btn => btn.classList.remove('active'));
        // Add the .active class to the button
        btn.classList.add('active')

        slide(index)
    }
})