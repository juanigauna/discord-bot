const kick = message => {
    if (!message.guild) return

    const user = message.mentions.users.first()
    if (user) {
        const member = message.guild.member(user)
        if (member) {
            member.kick('Optional reason that will display in the audit logs')
                .then(() => {
                    message.reply(`Successfully kicked ${user.tag}`)
                })
                .catch((err) => {
                    message.reply('I was unable to kick the member')
                    console.log(err)
                })
        } else {
            message.reply("That user isn't in this guild!")
        }
    } else {
        message.reply("```!bkick <member> \nYou didn't mention the user to kick!```")
    }
}
export default kick