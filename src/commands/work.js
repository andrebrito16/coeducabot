const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('.'))return;  

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setDescription(`:logocoeduca: Você já trabalhou recentemente, vá descansar um pouco.\n\nTente novamente em ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {


        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Você trabalhou e ganhou ${amount} CoEduca coins`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}