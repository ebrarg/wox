const Discord = require('discord.js');


exports.run = function(client, message) {

};

exports.conf = {
  enabled: true, //komutut actik
  guildOnly: false, //sadece servere özel yapmadik
  aliases: ['ping','p'], //farkli cağrilar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdik (bot.js dosyasinda perm leveller yaziyor)
};

exports.help = {
  name: 'ping', //adini belirledik (kullanmak icin gereken komut)
  description: 'Botun pingini gösterir', //aciklamasi
  usage: 'ping' //komutun kullanim sekli (mesela hava <bölge>)
};

//komut taslağimiz basit anlatimini zaten dosyalarda bulursunuz
//bu ise bizim komut taslağimiz
//bunun uzerinden gideceğiz