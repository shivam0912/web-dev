let counter = 0;

function count() {
   counter++;
   console.log(counter);
}

const intervalId = setInterval(count, 1000);

// Use setTimeout to clear the interval after 10 seconds
setTimeout(() => clearInterval(intervalId), 10000);
