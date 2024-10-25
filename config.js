//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUgweDFaQ0tqQndPbUJEcm5PYkc2Und0K1A3Zk1tclVZWm5vVmRDbUdYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1MycDBqblZqUjJSUm1UZE42RFVVZDdBc3FCNGptbWoyZ0hJUDVGYzMyZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT2FLSW05ajgxN3ozdUdwOEU3djVoRjlMdFNsbmtCVDZzR0tNWTJBTlhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0KzFzUmdKQitZVmkvdFBBb0xITFlFQTVRU1RpcEsrWXJ2Z1dpeWtrQ3lrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIOHllTEdkQXdBRDhmeENvT3ZLSFVvRG1tQ2Z2NXROWC9KekcvNlNkSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVmQ3B6MEhJMTFHNUUyNWNudnl2QWR4bXdOOENCWWxQSHVBWjQ5aHBBbVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0J3WGZIdjZnZ05kVFZ1WWpZamxTS0Z4T1BsTFp6WkNTKzlVK3F0YzRYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjRGaFFRdkJrMU4wRUdwMjJYNkkvMFU3U0tBWUlRVDdJMjgvZk1HNzIzdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNDM1lDbkhhNkxDY1JLYml2TkJCWnNmTXg3NHFQOWR1ZXRISjVtUGtUazI2WjFYaWRFa05RR0RRWkIxSndNSG9ySlpRQU5sN0tYZ3lpTERvbkV3WGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IlN0UHJUY2pzNXRsUTgvSmpaSlZyQ2FtK1hpV2tzYWY2Nm9DTzU1WnZmVzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il9DdzQ2WWdMUk1Db3BoMmR5RzhPa1EiLCJwaG9uZUlkIjoiYTAxOWE1MGItYTI4MC00MWNiLWE0ZjctNDUxNzA3ODQ2ODRmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJKeWdFNFZmNnl2NjRTemRLRFpxd0RXL01Odz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4N1dGcjZXK1duRFNUYVBvMXo0YU5Xck5RV009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzlWSktEREciLCJtZSI6eyJpZCI6IjIyMTc2MTU1MTU5MTo3MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCM8J2QmvCdkKbwnZCa8J2QnfCdkKjwnZCuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQS0grNm9IRVArODhMZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHWFptZUF6a28zVHp0R2YzTE9Yb2tVZTZoNTREclY5TnovY3RXcE5kdEZnPSIsImFjY291bnRTaWduYXR1cmUiOiJvMllNL2VNa0FrOTgyaEZSS1A4anUydGoyQlgrWGJ6cmx4QXQ4bHlRRkh3TUNFYWNuSkxYdSs1Y25NNElKcm9EeWw4ZmZLMEZkbHgzMmFvRmQrM21EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZXovS0NKalYrVmdEa1djbHJoVGhQanBuZUYvaUZvU3dENzdpRzNSUHNkdXMwUkVEcUREMHc2c2YrbmhFeXBzV2dIUmc1QWQ3b0x3cEVqQWZvYlZ4aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3NjE1NTE1OTE6NzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmwyWm5nTTVLTjA4N1JuOXl6bDZKRkh1b2VlQTYxZlRjLzNMVnFUWGJSWSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5ODk2MDc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQxcSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
