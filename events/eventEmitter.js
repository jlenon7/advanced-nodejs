const EventEmitter = require('events')

class Event extends EventEmitter {}

const myEvent = new Event()

// Create the Event
myEvent.on('security', (x, y) => {
    console.log(`Executing the event 'security': ${x} ${y}`)
})

// Emit the Event
myEvent.emit('security', 'João Lenon: ', 'Salary Changed')
