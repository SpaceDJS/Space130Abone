const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let embed = new Discord.MessageEmbed()
.setTitle("Space Özel Altyapı!")
.setAuthor("space v12")
.setColor("PURPLE")
.setDescription(`
●▬▬▬▬▬▬๑**Moderasyon**๑▬▬▬▬▬●
:tickets: \`**-moderasyon**\` Moderasyon Komutlarını Görebilirsiniz


●▬▬▬▬▬▬๑**Logo**๑▬▬▬▬▬●
:tickets: \`**-logo**\` Logo Komutları Görebilirsiniz
`)

message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: [], 
    permLevel: 0
  };
  
  exports.help = {
    name: "yardım",
    description: 'yardım kodu.',
    usage: 'yardım'
  };  //Space Sizleri Seviyorum <3
  