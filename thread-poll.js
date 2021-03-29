const crypto = require("crypto")
const start = Date.now()

function logHashTime() {
  crypto.pbkdf2('lenon', 'b', 100000, 512, "sha512", () => {
    console.log(`Hash time: ${Date.now() - start}`)
  })
}

logHashTime()
logHashTime()
logHashTime()
logHashTime()
logHashTime()
