// Async function
function sum(x) {
    return new Promise((resolve, reject) => {
        // if (x >= 5000) reject(x)

        setTimeout(() => {
            if (x >= 5000) reject(x)

            resolve(x + 5000)
        }, 3000)
    })
}

sum(230).then(result => console.log(result))
sum(5000).catch(() => console.log('Not allowed, number is higher than 5000!'))
