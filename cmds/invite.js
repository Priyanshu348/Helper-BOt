const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Invite**](https://discord.gg/C2FQtgZ)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "https://discordapp.com/api/oauth2/authorize?client_id=645481862684475452&permissions=8&scope=bot")

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }
