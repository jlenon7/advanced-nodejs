console.log('Executing module01.js')

const hidden = () => {
    console.log('Executing hidden function')
}

execute2 = () => {
    console.log('Executing execute function')
}

welcome = 'Welcome to module1.js'

// REPL - Execute NodeJS code inside terminal

module.exports = {
    execute2,
    welcome
}
