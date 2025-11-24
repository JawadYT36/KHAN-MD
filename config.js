const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA71V2Y7iOBT9F7+COvuGVNJkZydAWMJoHpzYCWZJwDGE0OLfR6Gqulrqnu4aaTR5chzn3nOO77n3K8gLUuIBrkHnKzhRcoUMN0tWnzDoAOuSppiCNkCQQdABrmP6W/7C0MWejD10jozR1NnfjotcGs92WnA+hXvhwN1XgvkCHm1wusQHkvwiYHoq1FmwKVVhsTwys4tsKtFqOzH8OnBUotVprnvX3tUUkxfwaCJCQkmeuactPmIKDwNcB5DQz8GPhqtbOL/4ZbKEabdMBmtu2rMLfxEO+60z3A/57Mrph1gWys/B566DdO3zrRkfnhGf7GZKDodZpStIn4wm4v1wDOHIrFaSu3+FX5Isx6iHcM4Iqz+t+8Ks7HTcV4PK75bKvG8RsX9LBoOV3Le5tRkfhRu/1XMERflzwPuyRQx/agv7ZFK4TqHrfRQf8ZgzLTW9uxzVW4ui5Yx1v/geeEDfa2X/b3Tng7uQ5eMyL7fKdrwZTSUVnb1wFq2klk5LGy66WlFfRUkqPgc/4fKRq06nWKnPapLgzXiXl7d+HNh10BotODuqbd6AlO4WH/Ahu9BfoUQirEZ7tIkK9WLpw/UixtNyoMvJdJRf8qHGhc6ip7RSWybapHs/9PNrpg9REXkKvzkXPVeJZZkEt/4stIVVheKoXhDz5cloj+seAh3h0QYUZ6RkFDJS5M2eKOptANF1jhOK2VNekM6RxyFpLJ+j5YomraK1WYXr+7DSYiR26T1atYRzfe8lQfUC2uBEiwSXJUZdUrKC1iNcljDDJej8+byphjTFx4LhPkGgAwxR0njR0AVeM/4ov1RbyEp4On3JMQNtkNLiOMKgw+gFt8HzB9N2ZdeWdU2xeNdRFUdWeUfTbcEzTNkylYbi8TVpSI64ZPB4Ah1BU2Ve4HlFfrT/Kxw6r/GSp2iWowiqbGiiISiypDm6Jlr8/4jDsjzDkBRXFR1VUUzVkh1R0g2ed2RPNX+DQ/kP9bA0VbANT5F027ZFw9YU03MMUdcl4bd6qI+/2iDHN/bq66YadUFqg5TQki3yy+lQQPTu+m9fYZIUl5zN6zyxmwWmoCN8bGPGSJ6VDbdLDmmyJVdsN0xAJ4WHEn+zAKYYvbN5a+t2gRpnDrrmOHTtLmjQN4F+UKejyj8KdHgeUwxNk1RV0lXR4NXmYLP/+AawiYcwg+RQgg6wJ6nKXTLfHXLTfbn3fdPNTDszwQeh99bxak1dpv3s4G+r2OPN8Cp4PGpNjKDF59JOGNv25r4Tr6F1NZfRy0+CNH1HW4biYsLm0amQqky9yNFwcKbDHo2maaov82EshGNPT9jejc4aVqHfc9bz+QStNyOim/E0qbTD2T8zLrptdYLWzsCuXppsCF9Jgr9PxmFNJOVE88Nivs3slR4f625geudtcRsko90y42K7Xk0sRSVktw1Vo0JK7EiW1coMfJR5KcixUG1MfjWs4DxFS+rsqtem9myqh7dhRt7aDXm+pgQ/Z0MOmwv8/dW9Am9KjH+0v4vxNm3+oWNb6WRQR/1Zkfg3ZLqaMUPddHcNOdY3ZCOcZsdENihfxZW3Ao+m2E8HyNKCHkEHwBzRgiDQBrS4NCXby9PiF8lss9dzs8xrmB9gycwPG/zMW8LrqYAWpy4st6ADgtVesZqSrs3Tac4ge3cVMJ+PyMDjbykXGemRCQAA",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
