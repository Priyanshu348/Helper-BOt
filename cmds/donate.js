const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
let donateEmb = new Discord.RichEmbed()
.setColor("#00ff00")
.setTitle("Donate")
.setDescription("Donate for the bot trough this links!")
.addField("No Donation reqd", "Just Subscribe my channel")
.addField("Donate", "DONATE TO THE OWNER directly")
.addField("Youtube Link", "https://www.youtube.com/channel/UCyo-KXNoXGaXvXoVhKX23Jg")
.setFooter("Donation links for the bot!")
.setThumbnail(bicon)

message.channel.send(donateEmb)

message.delete();

}

module.exports.help = {
  name: "donate"
}
