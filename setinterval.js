let count = 0;

const interval = setInterval(function(){
    count++;
    console.log(`Message: ${count}`);
    if (count == 3){
    clearInterval(interval)
    }
})