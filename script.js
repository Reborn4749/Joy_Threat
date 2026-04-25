let count = 0;
const button = document.getElementById("feedBtn");
const display = document.getElementById("treatCount");
button.addEventListener("click", function() {
    count = count + 1;
    display.textContent = count;
});
