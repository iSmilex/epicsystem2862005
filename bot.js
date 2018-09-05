const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
var Help = ` ${prefix}help `;

client.on('ready', () => {
    console.log(`Logged In As ${client.user.tag} `)
    console.log(`Servers ${client.guilds.size} `)
    console.log(`Users ${client.users.size} `)
});

client.on('ready', () => {
    client.user.setGame(`Epic System.`, 'https://www.twitch.tv/idk')
});

const developers = ["326131905743421440"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('message', async message => {
    if(message.content.includes('discord.gg')){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
    .setColor("c91616")
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');


}
});


// bc

  client.on('message', message => {
    if(!message.channel.guild) return;
if(message.content.startsWith('-bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_GUILD')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "S Bot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on('message', function(client) {
    if (client.author.bot) return;
    if (client.author.equals(client.user)) return;
    if (!client.content.startsWith(prefix)) return;
    
    var args = client.content.substring(prefix.length).split(' ');
    switch (args[0].toLocaleLowerCase()) {
    case "clear" :
    client.delete()
    if(!client.channel.guild) return
    if(client.member.hasPermissions(0x2000)){ if (!args[1]) {
    client.channel.fetchMessages()
    .then(messages => {
    client.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    client.channel.sendMessage(' '+ " " + messagesDeleted + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
    })
    } else {
    let messagecount = parseInt(args[1]);
    client.channel.fetchMessages({limit: messagecount}).then(messages => client.channel.bulkDelete(messages));
    client.channel.sendMessage(' '+ " " + args[1] + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
    client.delete(60000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
    .setColor("RANDOM")
    client.channel.sendEmbed(manage)
    return;
    }
    }
    });
      
    let rebel;
    client.on("ready", async  => {
        let guild = client.guilds.get("480895922281381898");
      let users = guild.members.map(member => member.user.id);
      let i;
      rebel=0;
    for (i=0 ; i < users.length ; i++) {
     let   check = guild.members.get(users[i]);
    if(!check.voiceChannelID){
            continue;
    }else{
      rebel++;
    }
    }
    guild.channels.find('id', '480928190408294425').setName(" Epic「"+rebel+"」");
      client.setInterval(() =>{
        let d = Date.now()
      }, 5000);
    });
    client.on('voiceStateUpdate', (oldMember, newMember) => {
        let guild = client.guilds.get("480895922281381898");
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel
     if(oldUserChannel === undefined && newUserChannel !== undefined) {
       rebel++;
    guild.channels.find('id', '480928190408294425').setName(" Epic「"+rebel+"」");
    } else if(newUserChannel === undefined){
      rebel--;
    guild.channels.find('id', '480928190408294425').setName(" Epic「"+rebel+"」");
    }
    });
    client.on('message', Codes => {
      
      if(Codes.content === "-vo") {
          Codes.channel.send(" Epic「"+rebel+"」");
    }
    });


client.login(process.env.BOT_TOKEN);
