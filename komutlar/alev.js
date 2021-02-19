const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazın!**`)
  const osbirqwe = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')

  
  const SpaceBoi = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RED")
  .setImage(osbirqwe)
  .setFooter('Alevli Logo Oluşturuldu')
  message.channel.send(SpaceBoi)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'alev',
    description: 'Bruhh.',
    usage: 'alev'
}