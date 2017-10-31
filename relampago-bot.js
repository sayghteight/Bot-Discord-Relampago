const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", function () {
	console.log("Logged in " + client.guilds.array().length + " servers");
	client.user.setGame(config.prefix + "help | " + client.guilds.array().length + " servers"); 
});

setInterval(function() {
	client.user.setGame(config.prefix + "help | " + client.guilds.array().length + " servers");
}, 100000)


/*
 *  Script
 *
*/

client.on("ready", () => {
   console.log(" ______        _                                     ");
   console.log("(_____ \      | |                                    ");
   console.log(" _____) ) ____| | ____ ____  ____   ____  ____  ___  ");
   console.log("(_____ ( / _  ) |/ _  |    \|  _ \ / _  |/ _  |/ _ \ ");
   console.log("      | ( (/ /| ( ( | | | | | | | ( ( | ( ( | | |_| |");
   console.log("      |_|\____)_|\_||_|_|_|_| ||_/ \_||_|\_|| |\___/ ");
   console.log("                            |_|         (_____|      ");
   console.log("");
   console.log("                Version 0.3                          ");
   console.log("           Website : Relampago-ultimate.tk          ");
});


// Variables

var prefix = config.prefix;
var CURRENT_REV = config.rev;
var botMention = false;

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  
  else
  if (message.content.startsWith(prefix +"hola")) {
    message.channel.send("Hola ¿Qué tal?");
  }

/*
* Relampago revisión
*/


  console.log(`Bot mention: ${botMention}`);
	if (config.rev !== CURRENT_REV) {
    console.log('WARNING: Your config.json is out of date relative to the code using it! Please update it from the git repository, otherwise things will break!');
    
}


client.on("guildMemberAdd", (member) => {
   console.log(`Damos la bienvenida a nuestro mayor reciente usuario:  ${member.user.username} esperemos que te guste tu instancia en ${member.guild.name}.`);
   var canal = client.channels.get('367292292840816652'); 
   canal.send(`${member.user}, Bienvenido a la guild y disfruta de nosotros.`);
   
});

const content = message.content.split(' ').slice(1);
const args = content.join(' ');



if(message.content.startsWith(prefix + 'help')){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.author.send('**COMANDOS DE Relampago**\n```\n'+
                        '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+prefix+'avatar <@user> :: (No implementado) Muestra el avatar de un usuario.\n'+
                        '-> '+prefix+'decir          :: (No implementado) Hace que el bot diga un mensaje.\n'+
                        '-> '+prefix+'user <@user>   :: (No implementado) Muestra información sobre un usuario mencionado.\n'+
                        '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                        '-> '+prefix+'stats         :: Muestra información del bot.\n'+
                        '-> '+prefix+'responde  :: El bot respondera a tus preguntas.\n'+
                        '-> '+prefix+'ban <@user>    :: (Only Administradores) Relampago revienta al usuario que esté infligiendo las normas.\n'+
                        '-> '+prefix+'kick <@user>   :: (Only Administradores) Relampago expulsa de una COZ al usuario que esté infligiendo las normas.\n'+
                        '-> '+prefix+'changelog           :: Te envia el registro de los cambios realizados.\n'+
                        '-> '+prefix+'join           :: Se únira al canal de voz.\n'+
                        '-> '+prefix+'leave           :: Se marchara del canal de voz.\n'+
                        '-> '+prefix+'ytplay <url youtube>           :: Reproducira el sonido de esa URL.\n'+
                        '-> '+prefix+'radio <dubstep/rap>           :: (Work in progress) Ejecutara una radio de ese genero.\n'+
                        '-> '+prefix+'hola           :: (No implementado) Retorna un saludo como mensaje.\n```\n\n'+
                        '**Relampago - Únete :**\nhttps://discord.gg/TKaYPN');
    
  }
  
  
  if(message.content.startsWith(prefix + 'changelog')){
    
    
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.author.send({embed: {
    color: 3447003,
    author: {
        name: client.user.username,
    },
    title: "Registro de versión | Relampago bot",
    url: "https://github.com/sayghteight/Bot-Discord-Relampago/issues",
    description: "Esto es un breve registro de cambios realizados en el BOT.",
    fields: [
    
    {
        name: "Comando stats",
        value: "[Versión 0.1 rev 5]Se ha agregado este comando que comprueba los servidores donde relampago esta activado y el uso de memoria del bot."
    },
    
    
    {
        name: "Optimización",
        value: "[Versión 0.1 rev 5]El bot ha recibido un parche de optimización en las librerías de este mismo, se ha eliminado código inservible de estas mismas."
    },
    {
        name: "Comando ping",
        value: "[Versión 0.1 rev 5]Se ha re-escrito el comando Ping, ahora este no tirara al bot cuando se ejecute"
    },
        
    {
        name: "Crashes",
        value: "[Versión 0.2 rev 6] Se han solucionado alrededor de 12 crashes, casí todos originarios del bot de música."
    },
    {
        name: "Changelog agregado",
        value: "[Versión 0.2 rev 6]Se ha agregado los comandos ?relchangelog, ahora mostrara el registro de versión correspondiente del servidor."
    },
    {
        name: "Cambio de prefijo",
        value: "[Versión 0.2 rev 6]Ahora relampago usara el prefijo -r para ejecutar sus comandos, podéis consultar las novedades en -rhelp"
    },
    {
        name: "Comando ytplay",
        value: "[Versión 0.2 rev 6] Se ha re-escrito el comando ytplay, ahora este no debería dar errores al ejecutarlo por una segunda vez."
    },
    {
        name: "Comando radio",
        value: "[Versión 0.3 rev 7] : Se ha empezado a trabajar en el comando -rradio para poder poner emisoras de música de Radionomy."
    },
    {
        name: "Descripción del bot",
        value: "[Versión 0.3 rev 7] : Ahora el bot mostrara su descripción correctamente, mostrando la cantidad de servidores que operan con el."
    },
    {
        name: "Minor changes | Kick command",
        value: "[Versión 0.3 rev 7] : Se ha agregado la comprobación de permisos para poder kickear."
    },
    {
        name: "Descripción del bot",
        value: "[Versión 0.3 rev 7] : Se ha agregado la comprobación de permisos para poder banear."
    }
    ],
    timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: "Relampago BOT - https://github.com/sayghteight/Bot-Discord-Relampago/issues"
        }   
    }
});
      
      
  }
  
  

if(message.content.startsWith(prefix + 'stats')){
    const moment = require("moment");

// const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
    
    
const embed = new Discord.RichEmbed()
.setColor(0x66ff66)

.setAuthor(`Información de Relampago`, client.user.avatarURL)
.addField(`Dueño`, `Thranrion#3322`, true)
.addField(`Version`, `0.3`, true)
.addField(`Revisión`, `6`, true)
.addField(`Libreria`, `Discord ^11.2.1 (Js)`, true)

.addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
// .addField(`Uptime`, `${actividad}`, true)
.addField(`Servidores`, `${client.guilds.size.toLocaleString()}`, true)

.addField(`Usuarios`, `${client.users.size.toLocaleString()}`, true)
.addField(`Canales`, `${client.channels.size.toLocaleString()}`, true)
.addField(`Conexiones a voz`, `${client.voiceConnections.size}`, true)

message.channel.send({embed});
}  

if(message.content.startsWith(prefix + 'responde')){

    var rpts = ["Sí","Dominaré el mundo","Esclavizar a los humanos","Mantener la posición",
    "En el frente","¡Libertad! ¿Qué es eso?","<Relincho>","¿Rajoy? Quien es ese tio comparado conmigo",
    "Recortes de presupuesto en la guild","Repite la pregunta","Ni puuuuta idea, a lo mejor morí 60 veces",
    "El mundo necesita más a los caballos que nosotros a nuestros amos"];
    if (!args) return message.reply(`Escriba una pregunta.`);
    message.channel.send(message.member.user+' a su pregunta `'+args+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

}

if(message.content.startsWith(prefix + 'kick' )){

    let user = message.mentions.users.first();
    let razon = args.split(' ').slice(1).join(' ');
    
    var perms = message.member.hasPermission("KICK_MEMBERS");
    if(!perms) return message.channel.send(":x: |  No tienes permisos suficientes para ejecutar este comando.");
    
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escriba una razón, `-rkick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('¡Ostía, que me he confundido!.');
    message.guild.member(user).kick(razon);
    message.channel.send(`¡ **${user.username}**, vaya ostía se acaba de pegar con la puerta!, razón: ${razon}.`);
}


if(message.content.startsWith(prefix + 'ban' )){
    
        let user = message.mentions.users.first();
        let razon = args.split(' ').slice(1).join(' ');
        
        var perms = message.member.hasPermission("BAN_MEMBERS");
        if(!perms) return message.channel.send(":x: |  No tienes permisos suficientes para ejecutar este comando.");
        
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        if(!razon) return message.channel.send('Escriba un razón, `-rban @username [razón]`');
        if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
        
    
        message.guild.member(user).ban(razon);
        message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);
    
  }



if(message.content.startsWith(prefix + 'ping')) {
let ping = Math.floor(message.client.ping); 

if (ping > 300) {
    var embed = new Discord.RichEmbed().setDescription(":satellite: Ping : **" + ping + "ms.**")
    .setColor(0xff0000)
    message.channel.sendEmbed(embed);
    

} else if (ping > 150) {
    var embed = new Discord.RichEmbed().setDescription(":satellite: Ping : **" + ping + "ms.**")
    .setColor(0xffcc00)
    message.channel.sendEmbed(embed);


} else {
    var embed = new Discord.RichEmbed().setDescription(":satellite: Ping : **" + ping + "ms.**")
    .setColor(0x66ff66)
    message.channel.sendEmbed(embed);

}
}


if(message.content.startsWith(prefix + 'server')){

    var server = message.guild;
  
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x66b3ff)
    

}




/*
* Music bot
*/



if (message.content. startsWith(prefix + 'join')) { 
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {
               m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
     }).catch(error => message.channel.send(error));
    }
}


if (message.content.startsWith(prefix + 'leave')) { 
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz) {
        message.channel.send('No estoy en un canal de voz.');
    } else {
        message.channel.send('Dejando el canal de voz.').then(() => {
        Canalvoz.leave();
        }).catch(error => message.channel.send(error));
    }   
}


 if (message.content.startsWith(prefix + 'ytplay')) {
    const ytdl = require('ytdl-core');

    let voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
    if(!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
    voiceChannel.join()
      .then(connection => {
        const url = ytdl(args, { filter : 'audioonly' });
        const dispatcher = connection.playStream(url);
        message.channel.send('Reproduciendo ahora:'+ args);
        message.delete();
      })  
    
      .catch(console.error);
  }
  
  
  



if (message.content.startsWith(prefix + 'del')) {
let messageCount = parseInt(args);

var perms = message.member.hasPermission("MANAGE_MESSAGES");
if(!perms) return message.channel.send(":x: |  No tienes permisos suficientes para ejecutar este comando.");

if(!args)  message.channel.send('Escribe la cantidad de mensajes que quieras eliminar (el limite es de 100 mensajes).');
messageCount = (args.split(' '))[0];
      
if(messageCount >= 2 && messageCount <= 100){
    message.channel.fetchMessages({limit: messageCount})
    .then(messages => message.channel.bulkDelete(messages));
    message.channel.send('Los mensajes han sido eliminados correctamente.');

}else{
    message.channel.send('El limite de eliminación de mensajes es de 100 mensajes.');

}

}



});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
client.login(config.token);     
        