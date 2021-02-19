const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazın!**`)
  const qweqweqweqeweq = `https://habbofont.net/font/battlebanzai/${yazi}.gif`
  .replace(' ', '+')

  
  const gsgsgsgsgsgsgssg = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RED")
  .setImage(qweqweqweqeweq)
  .setFooter('Anime Font Logo Oluşturuldu')
  message.channel.send(gsgsgsgsgsgsgssg)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'anime',
    description: '31 sjsjsjsj',
    usage: 'anime'
}