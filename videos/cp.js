const { spawn } = require('child_process')

const ls = spawn('ls', ['-lh'])

// stdio
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
})

ls.stderr.on('data', () => {
    console.log(`stderr: ${data}`)
})

// Many process but runs only when last ls is exit
ls.on('close', () => {
    console.log('closing all ls process')
})

// Runs first then close event
ls.on('exit', () => {
    console.log('exiting one ls process')
})
