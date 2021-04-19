console.log('Archive Information\n')

console.log(`Name: `, __filename)
console.log(`Directory: `, __dirname)
console.log(`Directory invoked: `, process.cwd())
console.log(`Execution parameters: `, process.argv)

switch (process.argv[2]) {
    case '-a':
        console.log('Executing all files')
        break;
    case '-i':
        console.log('Executing installation')
        break;
    case '-q':
        console.log('Exiting...')
        process.exit();
        break;
    default:
        console.log('Invalid parameter')
}

console.log(`Operational system: `, process.env.DESKTOP_SESSION)
console.log(`System user: `, process.env.USERNAME)
console.log(`System language: `, process.env.LANG)
console.log(`Server environment: `, process.platform)
