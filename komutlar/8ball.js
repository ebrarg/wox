const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
if(!args[0]) {
  const errEmbed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setAuthor('ERROR')
  .setTitle(':exclamation: Usage: **ks!8ball (question)**');
  message.channel.send({embed: errEmbed})
  return;
}
var sayings = ["Kesinlikle",
										"Eminimki öyle.",
										"Şüphesiz.",
										"Evet, kesinlikle",
										"Bana güvenebilirsin",
										"Görünüşe göre evet",
										"Büyük ihtimalle",
										"İyi görünüyor",
										"Evet",
										"Evet gibi görünüyor",
										"Soruyu tekrar sor",
										"Sonra sor",
										"Sana söylemesem daha iyi",
										"Tahmin edemiyorum",
										"Konsantre ol ve tekrar sor",
										"Bana güvenme",
										"Benim cevabım hayır",
										"Kaynaklarım hayır diyor",
										"Görünüşe göre hayır.",
										"İmkansız."];

			var result = Math.floor((Math.random() * sayings.length) + 0);
      const ballEmb = new Discord.RichEmbed()
      .setColor(0x00FFFF)
      .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
      .addField(args, sayings[result]);
			message.channel.send({embed: ballEmb})
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: '8ball', 
  description: 'Sihirli 8ball sorularinizi cevaplar',
  usage: '8ball <soru>'
};
