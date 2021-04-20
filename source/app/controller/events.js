import messageController from './message'

const events = client => {
    client.on('ready', () => console.log('Bot working! ;)'))
    client.on('message', messageController)
}

export default events