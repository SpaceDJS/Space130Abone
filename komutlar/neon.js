const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazın!**`)
  const yaqaqwqw = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=neon-logo&text=${yazi}`
  .replace(' ', '+')

  
  const qetyerwe = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(yaqaqwqw)
  .setFooter('neonlu Logo Oluşturuldu')
  message.channel.send(qetyerwe)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'neon',
    description: 'Yazdığınız yazıyı neon logoya değiştirir.',
    usage: 'neon'
}