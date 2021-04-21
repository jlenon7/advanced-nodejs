import { EventEmitter } from 'events'

class MyEvent extends EventEmitter {}
const myEvent = new MyEvent()

// Create the Event
// Subscriber
myEvent.on('security', (x, y) => {
    console.log(`Executing the event 'security': ${x} ${y}`)
})

// Emit the Event
// Publisher
myEvent.emit('security', 'João Lenon: ', 'Salary Changed')

// Subscriber
myEvent.on('shutdown', (data) => {
    console.log(`Subscriber:`, data)
})

// Publisher
myEvent.emit('shutdown', 'Shutting down the data execution')
