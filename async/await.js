// Async function
function sum(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Number(x)) reject('Is not a number or is null')

            resolve(x + 5000)
        }, 3000)
    })
}

;(async () => {
    try {
        console.log(await sum(200))

        await sum()
    } catch (error) {
        console.log(error)
    }
})()
