const Discord = require('discord.js');


exports.run = function(client, message, args) {
	
	var öneri = args.slice(0).join(' ');
	var guildID = "430031793874403345";
	var channelID = "504028579135225886";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **!öneri [mesaj]**")
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID:", message.author.id)
			.addField("Öneri", öneri)
			.setThumbnail(message.author.avatarURL)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.")
	};
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: 'Öneri gönderir.',
  usage: 'öneri <mesaj>'
};