const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  let ownerID = '339465664890667019'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[0])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[0])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> Foram adicionados ${args[0]} CoEduca Coins\n\nNovo saldo: ${bal}`);
    message.channel.send(moneyEmbed)

};


module.exports.help = {
  name:"addmoney",
  aliases: ["add"]
}