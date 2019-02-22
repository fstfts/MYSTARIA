const prefix = "*"
const token = "NTAwMzU3NDM5MDg2OTE5Njkz.D01mwQ.lwN-sa3pXb_WypiUWJJh7ZfXFdk"
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






bot.login('NTAwMzU3NDM5MDg2OTE5Njkz.D01mwQ.lwN-sa3pXb_WypiUWJJh7ZfXFdk')
