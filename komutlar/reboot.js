const Discord = require('discord.js');


exports.run = function(client, message) {

	message.channel.send("Bot yeniden baslatiliyor").then(msg => {
		console.log("[BOT] Yeniden baslatiliyor.");
		process.exit(0);
	});

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [''], 
  permLevel: 4 
};

exports.help = {
  name: 'reboot', 
  description: 'Yeniden baslatir.', 
  usage: 'reboot' 
};
