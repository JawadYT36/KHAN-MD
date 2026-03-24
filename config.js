const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUW5OiOhD+L3nVWkQQlaqpOoAoqIwIgpdT+xAhQBQCJsHblv99C2dnZh/Obs3JUy6d7q+//rp/AFJihmboBtQfoKL4DDlqtvxWIaACvU4SREEbxJBDoAJ7NupRBVd2XOivXb6Hade7H9Yrxq37Mj2K9lxb3Wz/pGycF/Bog6re5zj6i0PiTWc4YEKnMlbCRTv2OsIdKWWhz5NSKH35OjSWNIo35rjzAh6NR4gpJqlZZahAFOYzdHMhpl+Dny5idHGpFflja2fHrbV7O+CoMq/WSU/H8OwepTqoTtkm+CJ8t1Nn9mG8ZJtFi26dbWpgKm92nIzNmV3ZPVPerouFqWid8g0+wylBsR0jwjG/fZn3yO3vN2hU+3dlWyZ1K7Voq7cNSYj8oNcrTumpHmcTtsfk+DXgcJPmfWcZwzvTaBivdmdPG7bkw/TWCiUlkKywyDSPeqNL+jtwl75r5fh/eDcMS19ME8GZJ/559FrczCLZn07mXTRK75JNBDt0erF7R5Mv8n4aFNPBPNtq1+i4KVZzxnlPOuVFkITJUlrK8/vZ2gd+boTsEz7kNf2ruJlu1pFoKAoSTvi2qyokjdjRj+5lGspdQlZuJmGNL1/jqqNIm9zVw0WwWisF4qyj5NLwiC3fiFsS3O7IVsGY2YfLyzOjI7rZMVDFRxtQlGLGKeS4JM87adAGMD77KKKIP+kFSyG8inWxECbTQrlS10+tam0HF1oJeSAHghW5x+01985j5wW0QUXLCDGGYgszXtKbgxiDKWJA/fd7GxB05W+Fa8INRKkNEkwZD0hd5SWM38v68QqjqKwJ928kMpoNokDtfF4jzjFJWcNkTSCNMnxGRgY5A2oCc4Y+ckQUxUDltEYffWuUcUO9aLkzwxuaoA2KZ0lwDFTQVTp9ZdjtyYrYUyXpH/bt0riFVfWNIA7aIH+aicPeQOoPZHEoKh2531g2D48PhI3DGHGIc9aIb7bOyIK55txY4EieTDQn1YxUA58ZvYvjjfz6migTW7eSruO6hm6ZZoYmm8G9DpZePZ3E+6rjSQsYncTjy384ASpgC3Pjcpk4RA+nMxEFodldyXxx9HC4c1rKpDsSpzsPWiud0UUgDAdb6xTA9VSyJ4P0UJMpLtFuVuhx7gsDw6uGy2uqvTTRYnTGEfo9mO3a4T2+XOOOI3XN1B1MQknUyeB6HL/SCZ67y4BOzp3E37/2Fs5O9kWH4Xyx7gdCQbZGbzz1pnS5F+buOu3vr/iw0zd4+SbbZ9vkv8YVfgqqqVVzTDB6dj+BBfpzUd4BN9rqPNq//f01R/7Qi/qebVoZ1jxpeBjdL6l31e1NlgtOPzfNPfbIWonN+F6QGd+Bx+N7G1Q55ElJC6ACXGUlQaANaFk3UrVJUv5tOmmpPVqm4ybhHDKufcp/hQvEOCwqoIr9vixJw8FQfrNyaVlZkGVABVKRiwe/0fJNqyqfQ/7eTkBrll2I4PETl/72jGsHAAA=",
// add your Session Id
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env."",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7zfdcq.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "260769254615",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Jᴀᴡᴀᴅ TᴇᴄʜX",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *KHAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 
DEV: process.env.DEV || "260769254615",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
