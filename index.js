const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready',async()=>{
  console.log(`Bot has started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members and ${client.channels.cache.size} channels`)
})

client.on('message',async(message)=>{
    try {
        if(message.guild.id === '801859454730502165'){
            if(message.channel.id === '900867004351803442'){
                message.member.setNickname(message.content).then(message.react('823598171401486356'));
            }
        } else if(message.guild.id === '687260317918560272'){
            const { member } = message;
            if(message.channel.id === '944327912352518224'){
                member.setNickname(message.content).then(message.react('✅'));
                var role = member.guild.roles.cache.get('689566517368848386');
                member.roles.add(role)
            }
        }
        
    } catch (error) {
        console.log(error)
    }
})
client.login(process.env.BOT_TOKEN)
