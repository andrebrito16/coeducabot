const fs = require('fs')
require("dotenv").config();
const {prefix, words_array, bot_age, bot_info, helpmessage } = require('./config.json');
const { bot_token } = require('./token.json')
const Discord = require('discord.js');
const client = new Discord.Client();




//carregamento dos módulos
fs.readdir('./src/events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./src/events/${file}`);
    let evtName = file.split('.')[0];
    console.log(`Carreguei o evento '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
  });
});

//carregamento dos comandos!

client.on('message', async message =>{
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.toLowerCase().startsWith(prefix)) return;
  if (message.content.startsWith(`@!${client.user.id}`) || message.content.startsWith(`<@${client.user.id}`)) return;


  let args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  try{
    const commandFile = require(`./src/commands/${command}.js`);
    delete require.cache[require.resolve(`./src/commands/${command}.js`)];
    return commandFile.run(client, message, args); 
  }
  catch(err){
    console.error("Erro:" + err)
  }
  
})

client.on('ready', () => { 

  // memberCount(client)
  let activities = [
    "Estou na versão 1.0",
    `${client.channels.cache.size} canais!`,
    `${client.users.cache.size} usuários`
  ],
  i=0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`,
  {
    type: 'LISTENING'
  }), 1000*30);
  client.user
    .setStatus("online")
    .catch(console.error)
  
  console.log(`Estou online! ${client.user.username}`)

  let uptime = client.uptime
  module.exports.uptime = uptime;
});

// module.exports.totalseconds = (client.uptime);


let stats = {
  serverId: '<761188926332731392>',
  memberTotal: '<771067943445332018>',
}

client.on('ready', () => {
  let guild = client.guilds.cache.get('761188926332731392')
  let memberCount = guild.memberCount;
  console.log(memberCount)

})

// ESTATÍSTICAS
// client.on('guildMemberAdd', member => {
  
//   client.channels.cache.get(stats.memberTotal).setName(`Membros: ${member.guild.members.cache
//     .filter(m => !m.user.bot).size}`).catch(error => console.log(error))

// })

// client.on('guildMemberRemove', member => {
//   if(member.guild.id != stats.serverId) return;
//   client.channels.cache.get(stats.memberTotal).setName(`Membros: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
// })


client.on('message', message => {
	if (message.content === '>join') {
    client.emit('guildMemberAdd', message.member);
    
	}
});


client.login(bot_token);