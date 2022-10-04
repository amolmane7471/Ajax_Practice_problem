 
function showTime()
{
    const date=  new Date();
    return date.getHours()+"Hrs:"+date.getMinutes()+"Mins:"+date.getSeconds()+"Seconds";
}

function showSessionExpire()
{
    console.log("Activity-B: Your session expired at "+showTime());
}

console.log("Activit-A: Trigering Activity-B at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activit-A: Trigering Activity-B at "+showTime()+" Will execute after 5 seconds");