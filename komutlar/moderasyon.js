const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let embed = new Discord.MessageEmbed()
.setTitle("Space Özel Altyapı!")
.setAuthor("space v12")
.setColor("PURPLE")
.setDescription(`
●▬▬▬▬▬▬๑**Moderasyon Menüsü**๑▬▬▬▬▬●

:tickets: | \`**-ban @kişi**\` | Kişiyi Banlarsınız.
:tickets: | \`**-kick @kişi**\` | Kişi Atarsanız.
:tickets: | \`**-nuke**\` Kanalı | Patlatırsınız.
:tickets: | \`**-ever-engel**\` | Eveyone Engellemesini Açarsınız.
:tickets: | \`**-reklam-engel**\` | Reklam Engeli Açarsınız.
:tickets: | \`**-küfür-engel**\` | Küfür Engeli Açarsınız.
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
    name: "moderasyon",
    description: 'yardım kodu.',
    usage: 'yardım'
  };  //Space Sizleri Seviyorum <3
  