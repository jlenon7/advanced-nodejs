function execute() {
    executeTo()
}

function executeTo() {
    throw new Error('On my machine it works')
}

// Main
(() => {
    try {
        execute()
    } catch (error) {
        console.log(error.toString())
    }
})()

console.log('Before error')
