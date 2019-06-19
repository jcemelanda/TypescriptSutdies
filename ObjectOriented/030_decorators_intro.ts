class Post {
    @processOne()
    @processTwo()
    someFunc() {}
}

function processOne() {
    console.log('Process One');
    return function(target, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("process one called");
    }
}

function processTwo() {
    console.log('Process Two');
    return function(target, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("process two called");
    }
}

// Process One
// Process Two
// process two called
// process one called