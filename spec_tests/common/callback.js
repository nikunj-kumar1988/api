first(2, function (firstResult, err) {
    if (!err) {
        console.log(firstResult);
        second(2, function (secondResult, err) {
            if (!err) {
                console.log(secondResult);
                third(2, function (thirdResult, err) {
                    if (!err) {
                        console.log(thirdResult);
                    }
                })
            }
        })
    }
});

function first(value, callback) {
    callback(value + 2, false);
}

function second(value, callback) {
    callback(value + 2, false);
}

function third(value, callback) {
    callback(value + 2, false);
}