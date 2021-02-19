const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazın!**`)
  const as8ydfdas7fds5afdtysafdytsa = `https://habbofont.net/font/steampunk/${yazi}.gif`
  .replace(' ', '+')

  
  const qrwweqw = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RED")
  .setImage(as8ydfdas7fds5afdtysafdytsa)
  .setFooter('Altın Logo Oluşturuldu')
  message.channel.send(qrwweqw)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'altın',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'altın'
}