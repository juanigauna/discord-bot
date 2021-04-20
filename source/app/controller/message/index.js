import commands from '../commands'

const messageController = message => {
    if (message.author.bot) return
    commands(message)
}

export default messageController