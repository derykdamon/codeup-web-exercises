"use strict";

function changeBackground() {
    const lists = document.querySelectorAll('ul');
    lists.forEach((list) => {
        list.lastElementChild.style.backgroundColor = 'yellow';
    });
}

// #4. When any h3 is clicked, the lis underneath it should have a fontWeight of "bold". Hint: you should use this
//     in the event listener to access the next sibling of the h3 that is clicked. You can get to the corresponding ul
//     by traversing to the h3's sibling and then it's children.
const headers = document.querySelectorAll('h3');
headers.forEach((header) => {
    header.addEventListener('click', function () {
        let nextElement = this.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'UL') {
            nextElement = nextElement.nextElementSibling;
        }
        if (nextElement) {
            const listItems = nextElement.querySelectorAll('li');
            listItems.forEach((li) => {
                li.style.fontWeight = 'bold';
            });
        }
    });
});

// #5. When any list item is clicked, the first li of that list item's parent ul should have a font color of blue.
//     Hint: you should again rely on this in the li event handler.
const listItems = document.querySelectorAll('ul li');
listItems.forEach((item) => {
    item.addEventListener('click', function () {
        this.closest('ul').querySelector('li').style.color = 'blue';
    });
});

// Bonus functionality
function swapImages(firstFrame, secondFrame) {
    const firstBg = firstFrame.style.backgroundImage;
    firstFrame.style.backgroundImage = secondFrame.style.backgroundImage;
    secondFrame.style.backgroundImage = firstBg;
}

// Bonus functionality: When the left picture's button is clicked, the left and center pictures swap images.
function swapLeft() {
    const leftFrame = document.getElementById('leftFrame');
    const centerFrame = document.getElementById('centerFrame');
    swapImages(leftFrame, centerFrame);
}

// Bonus functionality: When the center picture's button is clicked, the center picture swaps randomly with either
//                      the left OR right pictures.
function swapCenter() {
    const centerFrame = document.getElementById('centerFrame');
    const leftFrame = document.getElementById('leftFrame');
    const rightFrame = document.getElementById('rightFrame');
    if (Math.random() < 0.5) {
        swapImages(centerFrame, leftFrame);
    } else {
        swapImages(centerFrame, rightFrame);
    }
}

// Bonus functionality: When the right picture's button is clicked, the right and center pictures swap images.
function swapRight() {
    const rightFrame = document.getElementById('rightFrame');
    const centerFrame = document.getElementById('centerFrame');
    swapImages(rightFrame, centerFrame);
}