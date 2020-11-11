
module.exports.run = async(client, message, args) => {
    message.channel.send('Pong').then(msg => {
        msg.delete({timeout: 5000})
      })

    message.delete({ timeout: 1000 })
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 1 seconds`))
    .catch(console.error);
}