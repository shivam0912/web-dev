let counter =0;
function count(){
    counter++;
    console.log(counter);
    //it will stop after 10 second
    if(counter<10)
    setTimeout(count,1000);

}
count();
setTimeout(count,10000);