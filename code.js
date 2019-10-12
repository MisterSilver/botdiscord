var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on('ready', () => {
	console.log('Votre bot est allumé !');
	bot.user.setGame('Héberger par French-Heberg')
    });
    

 bot.login("tontoken")
