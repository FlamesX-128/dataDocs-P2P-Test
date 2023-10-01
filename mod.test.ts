const socket = new WebSocket('ws://localhost:8080')

socket.addEventListener('open', () => {
    console.log('Connected!')
    socket.send('Hello!')
})

socket.addEventListener('message', (message) => {
    console.log(message.data)
})

socket.addEventListener('close', () => {
    console.log('Disconnected!')
})
