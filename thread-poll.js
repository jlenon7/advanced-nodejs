const crypto = require("crypto")
const start = Date.now()

function logHashTime() {
  crypto.pbkdf2('lenon', 'b', 100000, 512, "sha512", () => {
    console.log(`Hash time: ${Date.now() - start}`)
  })
}

// Libuv runs in 4 threads when the code needs more performance

logHashTime() // 1
logHashTime() // 2
logHashTime() // 3
logHashTime() // 4

// Libuv will wait the 1 thread be free to run the other code

logHashTime() // 5
