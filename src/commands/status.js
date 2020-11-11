const Discord = require('discord.js')
const index = require('../../index.js')

module.exports.run = (client, message,guild) =>{
    const statusEmbed = new Discord.MessageEmbed()
    .setTitle('Informaçoes sobre o servidor')
    .setColor('#026032')
    .setAuthor(client.user.username)
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setDescription('Algumas informaçoes...')
    .addField(`O Ping da API do Discord é `, `${Math.round(client.ws.ping)}ms`)
    

message.channel.send('Pinging...').then(msg =>{
    msg.edit(statusEmbed)
})
console.log(index.uptime)
}

module.exports.help = {
    name: 'Status',
    description: 'receber um status do servidor!',
    aliases: ["s"]
}