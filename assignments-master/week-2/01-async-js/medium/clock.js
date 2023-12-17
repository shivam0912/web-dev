function update(){
    
const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
console.log(`${hour}:${min}:${sec}`);
}

const updateEverySec  = setInterval(update,1000)

setTimeout(() => clearInterval(updateEverySec), 10000);
