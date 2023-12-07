

let colors = ['#ffd3d3', '#ffe1d3', '#ffefd3', '#fffad3', '#f8ffd3', '#e2ffd3', '#dcffd3', '#d3ffd6', '#d4ffd3', '#d3ffd8', '#d3ffe7', '#d3fff1', '#d3fff7', '#d3ffff', '#d3f1ff', '#d3e7ff', '#d3d8ff', '#d8d3ff', '#e2d3ff', '#f0d3ff', '#f8d3ff', '#ffd3f8', '#ffd3eb', '#ffd3e1', '#ffd3d3', '#ffd3d3'];

let container = document.getElementById("container").firstElementChild;
let i = 0;

setInterval(() => {
    let time = new Date();
    container.firstElementChild.innerText = time.getHours();
    container.firstElementChild.nextElementSibling.nextElementSibling.innerText = time.getMinutes();
    container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText = time.getSeconds();
    container.style.backgroundColor = colors[i];
    i++
    if (i == colors.length) {
        i = 0;
    }
}, 1000)

