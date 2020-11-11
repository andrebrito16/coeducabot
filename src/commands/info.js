const Discord = require('discord.js')
module.exports.run = async(client, message, args, member) => {
    let guild = client.guilds.cache.get('761188926332731392')
    let memberCount = guild.memberCount;

    let embed = new Discord.MessageEmbed()
      .setColor('#026032')
      .setTitle('**Informações do servidor**')
      .setDescription('Informações fornecidas por CoEducaBot®')
      .addField('👥Quantidade de membros:', `Este servidor tem ${memberCount-2} membros`)
      .addField('💬Quantidade de canais:', `Este servidor tem ${guild.channels.cache.size} canais`)
      .addField('😆Emojis:', `até agora temos ${guild.emojis.cache.size} emojis!`)
      .addField('⏱Criado em:', `O servidor foi criado ${guild.createdAt}`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setTimestamp()
      
    await message.channel.send(embed)

    message.delete({ timeout: 1000 })
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 1 seconds`))
    .catch(console.error);
    console.log(guild.emojis)
}