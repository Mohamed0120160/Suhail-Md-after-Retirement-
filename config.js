const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"aNTOZaRDP+SBuPXTLg1+wpXleorJucSC2hIPgIw1j2Q="},"public":{"type":"Buffer","data":"Tm8FGBVAlP8z9dfUR+pijqjsFtaYuAi8qKXIvr3srR4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aBTn84U2woqY6qNXDuWMer+BCdeFYsFpCW+1nMxiwVw="},"public":{"type":"Buffer","data":"/3wwZEtI7Iq6lf39nUoIhKzrmVsx8o98c4VPW/KkWAE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mOlHJ7OtCXpfCjNtV+eHVlVbgZCPwZaAqXV3LWomx0k="},"public":{"type":"Buffer","data":"eUqZMiRQCafv3haQpeobaSD87+suAgYWl92wK65dWEc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cHmCiZ5WlGu7aKfJuoELqOWVtmsQ+3xl//RDkjDtwWU="},"public":{"type":"Buffer","data":"3OkUFbXK0RA8vADhlc0UD2NL39aQ4yxyzdHB4yGGmj4="}},"signature":{"type":"Buffer","data":"RDWbkE1gGyfP6aH2wGRcprQR+3xGqmdZS2EHpDAtmK/Q7ESvlSmflqXq2wsDc5ZVhxMyogSYn88GNOJP9GILAw=="},"keyId":1},"registrationId":248,"advSecretKey":"8jaVKGW6z6GKI/8oZTUxn5WGwJltOORt3EhcFyjYYpA=","processedHistoryMessages":[{"key":{"remoteJid":"967737659027@s.whatsapp.net","fromMe":true,"id":"55B294A5EF54325407CBD3A83E2456D0"},"messageTimestamp":1718013898},{"key":{"remoteJid":"967737659027@s.whatsapp.net","fromMe":true,"id":"5A6B5C8212838B9F73FAB7CB9D1EBAC8"},"messageTimestamp":1718013898},{"key":{"remoteJid":"967737659027@s.whatsapp.net","fromMe":true,"id":"EAE8B59E4CA8F6E29C5A4D1AAC07F01B"},"messageTimestamp":1718013907},{"key":{"remoteJid":"967737659027@s.whatsapp.net","fromMe":true,"id":"809B6238835C2C1C88EEE28CE8EC238F"},"messageTimestamp":1718013909}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"3QAKMOeyTW-LzczSfMTQbg","phoneId":"59fe899d-0f1d-40d3-b4f1-c6bb626805b3","identityId":{"type":"Buffer","data":"UD8scuw7QOASsEHkanTg1+SGW3I="},"registered":true,"backupToken":{"type":"Buffer","data":"Rjhd456QArNoPhm7opYmV9oroBg="},"registration":{},"pairingCode":"XK3FEG74","me":{"id":"967737659027:3@s.whatsapp.net","name":"."},"account":{"details":"CLHf4P4FEMWfm7MGGAggACgA","accountSignatureKey":"RLvnGpwpwbfxtVwRHtVBH+Zg0zm0EEQi0esIFCiAlQM=","accountSignature":"LzWz2/2uRT3neJ/cYlQQRF9CvkL19/3St2FOpythr7PViIFRwCWH6Bv9ZBcQ91L47k4y7wr13giLZWKAXiCKCw==","deviceSignature":"zlxCl+A0cIdDpE7dO/j9OhtFGztEeWMCiCRORfCCiNgYEGBei8dxJdJOOECsXSwXFu5ovJsDsD28dIhkNJWsAA=="},"signalIdentities":[{"identifier":{"name":"967737659027:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUS75xqcKcG38bVcER7VQR/mYNM5tBBEItHrCBQogJUD"}}],"platform":"android","lastAccountSyncTimestamp":1718013896,"myAppStateKeyId":"AAAAAEYc"}"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
