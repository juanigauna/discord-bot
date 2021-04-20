import Discord from 'discord.js'
import config from '../config'
import eventsController from './controller/events'

class Bot {
    constructor() {
        this.client = new Discord.Client()
        eventsController(this.client)
    }
    start() {
        this.client.login(config.BOT_TOKEN)
    }
}

export default Bot