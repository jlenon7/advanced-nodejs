// Sync function
function sum(x, callback) {
    return setTimeout(() => {
        return callback(null, x + 5000)
    },3000);
}

// Callback function
function sumCallback(err, result) {
 if (err) throw err

 console.log(result)
}

sum(270, sumCallback)
