const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**EBRAR**")
        .setThumbnail("https://cdn.discordapp.com/avatars/274587195770273802/b42284b84fff9f4ff55a81eafa23cf8e.png?size=2048")
        .setColor(0x00AE86)
        .addField("Lakabi", "woXy", true)
        .addField("Yetenekleri", `
        *Tam CS:GO cu.
   *Tam bir oyuncu :D
   `, true)
   .addField("selam kanka", "haha naber")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'ebrar', 
  description: 'Ebrar Garip Hakkinda bilgi verir.',
  usage: 'ebrar'
};