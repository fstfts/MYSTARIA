const prefix = "*"
const token =  process.env.token;
const Discord = require("discord.js");
const fs =  require("fs")
const bot = new Discord.Client();

bot.on( 'ready', function () {
  console.log("Scorp bot est bien en ligne");
  bot.user.setActivity("Rien ...")
});




bot.on('message', message => {


if(message.content.startsWith(prefix + "boss")) {
  
  
  message.reply("Hello")

}



});






bot.login(token)
