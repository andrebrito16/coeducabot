const Discord =  require('discord.js')
const backticks = '```'
const helpmessage = (`${backticks}css
= Lista de comandos =

[Em caso de dúvidas fale com o nosso  time]
​
== Public ==
.ping :: mensagem  divertida que faz o bot responder com PONG ${backticks}`) 
module.exports.run = async(client,  message, args, member) => {
    message.reply(`tudo bem? Te enviei uma mensagem de ajuda no privado!`)
    message.author.send(helpmessage)
}
