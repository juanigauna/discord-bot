const latencyTest = message => {    
    const timeTaken = Date.now() - message.createdTimestamp
    message.reply(`Your latency is of ${timeTaken}ms.`)
}

export default latencyTest