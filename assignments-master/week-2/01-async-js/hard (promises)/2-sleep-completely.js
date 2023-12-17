/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    // return new Promise(function(resolve){
    //     const startTime = Date.now();
    //     const endTime = startTime+milliseconds;
    //     function checkTime(){
    //         const currentTime = Date.now();
    //         if(currentTime<endTime)
    //             checkTime();
    //         else resolve();
    //     }

    //     checkTime();
    // });

    return new Promise((resolve)=>{
        setTimeout(resolve,milliseconds);
    });
}

module.exports = sleep;
