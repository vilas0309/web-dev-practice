//set Timeout Function: function that executes a function after a specified number of milliseconds

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => {
        window.alert("Hello");
    }, 3000);
}

function stopTimer() {
    clearTimeout(timeoutId);
}