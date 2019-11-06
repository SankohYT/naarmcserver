const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#bc | osama tech`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك والله!');
  }
});
client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله تعالى وبركاته');
  }
});
client.on('message', msg => {
  if (msg.content === 'ip') {
    msg.reply('Play.NaarMc.fmcs.cf');
  }
});



client.login(" NjQxNjk1MTU2OTAyNTU5NzY0.XcMImA.uxo6N6--3PVAIVqy3CjLiZNKurU
 ");
