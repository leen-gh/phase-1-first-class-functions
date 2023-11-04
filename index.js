callback(() => {
    return "Hello" + str
  })
functionTwo(function () {console.log("Hi there!")})

function receivesAFunction(callback) {
    callback()
  }
function returnsANamedFunction() {
    return functionTwo
}
function returnsAnAnonymousFunction(){
    return function () {
        console.log(`Ya Welcome!`)
    };
}
function returnsANamedFunction(){
    const name = function (){return true}
    return name
}
  
  