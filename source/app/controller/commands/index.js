import kick from './behaviour/kick'
import latencyTest from './behaviour/latencyTest'

const commands = message => {
    if (!message.content.startsWith('!')) return
    
    const args = message.content.toLowerCase().split(' ')
    
    switch (args[0]) {
        case '!bkick':
            kick(message)
            break
        case '!blatency':
            latencyTest(message)
            break

        default:
            message.reply(`Sorry, i don't found any command called: ${args[0]}`)
            break
    }
}

export default commands