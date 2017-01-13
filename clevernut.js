var botToken = "YOUR_BOT_TOKEN";
var botChannel = "YOUR_BOT_CHANNEL_ID";
var botId = "YOUR_BOT_USER_ID"

const Eris = require("eris");
var bot = new Eris(""+botToken);
var Cleverbot = require('cleverbot-node');
var cleverbot = new Cleverbot;

bot.on("messageCreate", (msg) => {
    if(msg.channel.id === ""+botChannel && msg.author.id !== ""+botId) {
    Cleverbot.prepare(function(){
      cleverbot.write(msg.content, function (response) {
           bot.createMessage(msg.channel.id, response.message);
      });
    });
    }
});
bot.connect();