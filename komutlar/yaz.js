const Discord = require('discord.js');


exports.run = function(client, message, args) {
	const mesaj = args.slice(0).join(' ')
	if (mesaj < 1) {
		message.reply("Yazmam için birşey belirt.")
	} else {
		message.delete();
		message.channel.send(mesaj) 
	}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [''], 
  permLevel: 0 
};

exports.help = {
  name: 'yaz', 
  description: 'Belirtilen miktarda mesaj siler.', 
  usage: 'yaz (miktar)' 
};
