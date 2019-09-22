var promise = new Promise(function (resolve, reject) {
    resolve(2);
})
promise.then(first).then(second).then(third).then(function (response) {
    console.log(response);
})

function first(value) {
    return value + 2;
}

function second(value, callback) {
    return value + 2;
}

function third(value, callback) {
    return value + 2;
}