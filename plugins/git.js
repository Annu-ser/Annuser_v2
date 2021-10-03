const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "xxx1jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.git(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is manaf-1*
*Creator number : wa.me/917560891210?text=Hi%20manaf%20-1.%20*
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
*Githublink (Setup)  :    https://github.com/manaf-1/manusir*
*Audio commads :   https://github.com/manaf-1/manusir/tree/master/uploads*
*Sticker commads : https://github.com/manaf-1/manusir/tree/master/uploads*
`}) 

}));
