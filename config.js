const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_20_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBtN1UwT2hXNkFsME5MNzRKUjhINWNrczZwN3R4MFp6NnhEcU01c2U4Mkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInd5aThaMDdPU0RDOUxvbWNWZ2lPdkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmIzNDZiOWYtZGFmOS00N2EwLWFmOWMtMmNjMDZlNWI3ZmMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgOSxcbiAgICAgIDc1LFxuICAgICAgMTM5LFxuICAgICAgMTg2LFxuICAgICAgMTcwLFxuICAgICAgMTgyLFxuICAgICAgMjE3LFxuICAgICAgMjQwLFxuICAgICAgMTI2LFxuICAgICAgMTI3LFxuICAgICAgOTMsXG4gICAgICAyNDUsXG4gICAgICAzMyxcbiAgICAgIDE3MCxcbiAgICAgIDEyNCxcbiAgICAgIDYyLFxuICAgICAgMjksXG4gICAgICAxMjAsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAxNDgsXG4gICAgICA5MyxcbiAgICAgIDE0NyxcbiAgICAgIDQ3LFxuICAgICAgMTkwLFxuICAgICAgNjIsXG4gICAgICAyNDEsXG4gICAgICAyOSxcbiAgICAgIDE2NSxcbiAgICAgIDExOCxcbiAgICAgIDEyMyxcbiAgICAgIDE1NixcbiAgICAgIDE4LFxuICAgICAgMTYsXG4gICAgICAyMjUsXG4gICAgICAxODYsXG4gICAgICAyMjAsXG4gICAgICA1LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw1MkQ2VkZXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc4MDY1NzI6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzY0Njk5Mjc2NTA4Mzo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT093OXdDRU5iYnRib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZsSkxGWE9aVzdPZXhUeUVsd0wxdG15RmkrYy9oMUNEN085aUhUcWNTU289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV0NyRTVnWjBmaGxlenRqS28wNHE0OXhDaU9Ga2R4OU1rQndmTzcxZ291VVBkNjE0YjlpNjlkSXpOZDVFQyt2clBtS3RzM3BxVzdsRXkrT2N3VmorRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZEdERXN5U1g0aFBJUW9hWWR3d1NncCthVXhNdEY1Vm5ITzQwOUNLWlJxRnIzbytDK084WXBnaTNCdENKeEFKN1RGWFJwZWt0NzdDQnhseUpmQzBKREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3ODA2NTcyOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMTI3NjQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnRGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGdEYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1TjRESzVjSzdNbkovQXlFN1J0QlhVbkYwNjFnWlEwdmYzK3dPUHg4K3FJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjczMDkwODQ4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "COLLEGUE-JAM💙🇿🇼😁",
  ownername:process.env.OWNER_NAME|| "ELONSKCOLLEGUEJAM-BUGBOTCJ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
