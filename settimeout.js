function hello(){
    console.log("Set time out")
}

setTimeout(hello, 2000)

var timeout = setTimeout(()=>{
    console.log("Set time out arrow")

}, 4000)

clearTimeout(timeout)
// clear time out

