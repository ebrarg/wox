const discord = require("discord.js");
const client = new discord.Client();
module.exports.run = async(bot, message, args) => {
const api = 'http://api.openweathermap.org/data/2.5/weather?q=' + args[0] + '&appid=9085d68629e6d57983a2c93a8fa2cd66';
 let mesaj = args.slice(0).join(' ');
 if (mesaj.length < 1) return message.reply(':no_entry: Lutfen hava durumu bilgisini getirtmek icin bir sehir ismi girin.');
 try {
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    function Get(yourUrl){
      var Httpreq = new XMLHttpRequest(); //yagag
      Httpreq.open("GET",yourUrl,false);
      Httpreq.send(null);
      return Httpreq.responseText;
    }
    var json = JSON.parse(Get(api));
    var coord = json.coord;
    var weather = json.weather[0];
    var main = json.main;
    var wind = json.wind;
    var clouds = json.clouds;
    var sys = json.sys;

    function windDirection(degree)
    {
        if (degree < 11 || degree > 348)
        {
            return "Kuzey";
        }
        else if (degree > 11 && degree < 33)
        {
            return "Kuzey-Kuzeydoğu";
        }
        else if (degree > 33 && degree < 56)
        {
            return "Kuzeydoğu";
        }
        else if (degree > 56 && degree < 78)
        {
            return "Doğu-Kuzeydoğu";
        }
        else if (degree > 78 && degree < 101)
        {
            return "Doğu";
        }
        else if (degree > 101 && degree < 123)
        {
            return "Doğu-Guneydoğu";
        }
        else if (degree > 123 && degree < 146)
        {
            return "Guneydoğu";
        }
        else if (degree > 146 && degree < 168)
        {
            return "Guney-Guneydoğu";
        }
        else if (degree > 168 && degree < 191)
        {
            return "Guney";
        }
        else if (degree > 191 && degree < 213)
        {
            return "Guney-Guneybati";
        }
        else if (degree > 213 && degree < 236)
        {
            return "Guneybati";
        }
        else if (degree > 236 && degree < 258)
        {
            return "Bati-Guneybati";
        }
        else if (degree > 258 && degree < 281)
        {
            return "Bati";
        }
        else if (degree > 281 && degree < 303)
        {
            return "Bati-Kuzeybati";
        }
        else if (degree > 303 && degree < 326)
        {
            return "Kuzeybati";
        }
        else if (degree > 326 && degree < 348)
        {
            return "Kuzey-Kuzeybati";
        }
        else
        {
            return "N/A";
        }
    }

 function UnixToDate(unix)
{
var d = new Date(unix*1000).getHours();
var d1 = new Date(unix*1000).getMinutes();
var text = d + ':' + d1
return text;
}
        var cc = main.temp;
        var hc = main.temp_max;
        var lc = main.temp_min;
        var currentcelsius = cc - 273.15;
        var currentf1 = currentcelsius * 1.8;
        var currentfahrenheit = currentf1 + 32;
        var ccelsius = Math.round(currentcelsius);
        var cfahrenheit = Math.round(currentfahrenheit);

        var highcelsius = hc - 273.15;
        var highf1 = highcelsius * 1.8;
        var highfahrenheit = highf1 + 32;
        var hcelsius = Math.round(highcelsius);
        var hfahrenheit = Math.round(highfahrenheit);

        var lowcelsius = lc - 273.15;
        var lowf1 = lowcelsius * 1.8;
        var lowfahrenheit = lowf1 + 32;
        var lcelsius = Math.round(lowcelsius);
        var lfahrenheit = Math.round(lowfahrenheit);

		const embed = new discord.RichEmbed()
    .setTitle(json.name + ','   + sys.country +   ' icin Hava Durumu')
    .setThumbnail('http://openweathermap.org/img/w/' + weather.icon + '.png')
    .setColor(0xff7f00)
    .addField('Koordinatlari', 'Enlem: **' + coord.lat + '**\nBoylam: **' + coord.lon + '**', inline=true)
    .addField('sehrin IDsi', '**' + json.id + '**', inline=true)
    .addField('Ruzgar', 'Yönu: **' + windDirection(wind.deg) + '**\nHizi: **' + wind.speed + 'm/s**', inline=true)
    .addField('Bulut Orani', '**%' + clouds.all + '**', inline=true)
    .addField('Hava Kosullari', 'Mevcut Sicaklik: **' + ccelsius + ' °C / ' + cfahrenheit + ' °F**\nEn Yuksek Sicaklik: **' + hcelsius + ' °C / ' + hfahrenheit + ' °F**\nEn Dusuk Sicaklik: **' + lcelsius + ' °C / ' + lfahrenheit + ' °F**\nNem: **%' + main.humidity + '**\nBarometrik Basinc: **' + main.pressure + '**', inline=true)    //.addField('Gunes', 'Gundoğumu: **' + UnixToDate(sys.sunrise)[1] + '**\nGunbatimi: **' + UnixToDate(sys.sunset)[1] + '**', inline=true)
    .addField('Gunes','Gundoğumu: **' + UnixToDate(sys.sunrise) + '**\nGunbatimi: **' + UnixToDate(sys.sunset) + '**',inline=true)
    return message.channel.sendEmbed(embed);
}
catch (e) {
    const error = new discord.RichEmbed()
    .setColor(0xff7f00)
    .setDescription('Bir hata ile karsilastik : \n`' + e.message + '`')
    return message.channel.sendEmbed(error);
}
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
aliases: ['havadurumu'],
  permLevel: 0
};

exports.help = {
  name: 'havadurumu',
  description: 'İstediğiniz seyi bota yazdirir.',
  usage: 'havadurumu [duyuru]'
};