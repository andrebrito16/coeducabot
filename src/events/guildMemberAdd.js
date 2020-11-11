const Discord = require('discord.js')
module.exports = (client, member) => {

    

    let guild = client.guilds.cache.get("761188926332731392");
    let channel = client.channels.cache.get("770367341342752810");
  
    if (guild != member.guild) {
      return console.log('Hmm, servidor errado né meu chapa?')
    }else{
      
      let embed = new Discord.MessageEmbed()
      .setColor('#026032')
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle('**SEJA BEM-VINDA(O)**')
      .setDescription(`${member.user} seja muito bem-vinda(o) ao Discord CoEducaBr! **Estamos muito felizes em ter você aqui.** 
      
      **CONCLUA A VERIFICAÇÃO E LEIA AS REGRAS NO CANAL ** ${client.channels.cache.get("761194248171028530").toString()}. 
      
      Atualmente estamos com ${member.guild.memberCount} membros em nosso servidor!`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setFooter('Plataforma CoEduca Brasil ®')
      .setTimestamp()
      channel.send(`${member.user}`, embed)
    }

};