const { EventEmitter } = require('events')
const emitter = new EventEmitter()

const validateObject = (a) => {
    if (typeof a !== 'object') {
        emitter.emit('error', new Error('Invalid type'))

        return
    }

    console.log('Valid type')
}

emitter.addListener('error', (err) => {
    console.log('Event:', err.toString())
})

let data = { name: 'name', year: 2020 }

validateObject(data)

validateObject(true)
