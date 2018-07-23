// This is in 99% of the cases, created by some other library/method call
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // We can resolve only once and we can resolve only single value/object
        // The second call to "resolve" wouldn't work
        // resolve({
        //     name: "Maja",
        //     age: 26
        // });
        reject("Something went wrong");
    }, 5000);
});

console.log("Before");

// "then" part is executed if promise is resolved
// "catch" part is called if the promise is rejected. It catches the error and does something
promise.then((data) => {
    console.log("1", data);
    // this data is forwarded to next "then" if it exists
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is my other promise");
        }, 5000);
    });
}).then(() => {
    // We can chain "then" calls, if promise is resolved, all of them run
    console.log("does this run?");
}).catch((error) => {
    console.log(error);
});

console.log("after");
