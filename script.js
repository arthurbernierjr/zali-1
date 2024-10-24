let counter = 0;

function increment() {
    counter++;
    document.getElementById("counter").innerText = counter;
}

function decrement() {
    if (counter <= 0) {
        document.getElementById("counter").innerText = 0
    } else {
        counter--;
        document.getElementById("counter").innerText = counter;
    }

}

function reset() {
    counter = 0
    document.getElementById("counter").innerText = counter;
}