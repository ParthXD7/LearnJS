function first()
{
    console.log("first fun")
}

function second(callback)
{
    console.log("second fun")
    callback()
}
//setTimeout(first,3000)
//first()
second(first)