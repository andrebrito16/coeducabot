const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const secretMessage = args.join(" ")
    message.delete().catch(O_o => {})
    message.channel.send(secretMessage);
}