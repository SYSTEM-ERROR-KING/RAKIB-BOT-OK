module.exports.config = {
  name: "goibot",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "goibot",
  category: "noprefix",
  usages: "admin",
  cooldowns: 5
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["I Love You" , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , ", জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗", "হা বলো😒,কি করতে পারি😐😑?" , "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","মে হলে রাকিব বসের সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার রাকিব জানু এর সাথে ব্যাস্ত আসি😋" , "আই লাভ ইউ" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "এই'নেও🔑চাবী 😒𝘪𝘯𝘣𝘰𝘹-এর 🔐তালা খুলে মেছেজ দেও📥🫠🤗 I am single🙂" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , ", -ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "BOSS RAKIB কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি RAKIB BOSS এর সাথে ব্যাস্ত আসি😒"  , "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 ওই টা  😑🥺" , "amr Jan lagbe,Tumi ki single aso?", "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻"]; 
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "I love u") || (event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "Love you")) {
     return api.sendMessage("Hmm... বস রাকিবও তোমাকে ভালোবাসে😇😻 :))", threadID);
   };
  
  if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("Nh ami চুপ থাকবো না.😼 রাকিব বস আমারে কথা বলতে বলছে🤭", threadID);
   };

   if ((event.body.toLowerCase() == "Raisa") || (event.body.toLowerCase() == "রাইসা")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রাকিব এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "হুমু") || (event.body.toLowerCase() == "হুমায়রা")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রাকির এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
    if ((event.body.toLowerCase() == "রাকিব আই লাভ ইউ") || (event.body.toLowerCase() == "রাকিব জান") || (event.body.toLowerCase() == "রাকিব লুচ্চা") || (event.body.toLowerCase() == "রাকিব বেবি") || (event.body.toLowerCase() == "Rakib i love you") || (event.body.toLowerCase() == "রাকিব উম্মা")) {
     return api.sendMessage("এগুলা বলিস না রাইসা ভাবি শুলনে খবর আছে তোর..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "আজ কেউ নাই বলে") || (event.body.toLowerCase() == "aj keu nay bole")) {
     return api.sendMessage("️ 👉আহা গো সোনা গো আমার খুব কষ্ট হচ্ছে তাই না 🥺😁", threadID);
   };

   if ((event.body.toLowerCase() == "Aj xhipa nai bole") || (event.body.toLowerCase() == "aj xhipa nai bole")) {
     return api.sendMessage("️ 👉চিপাই যাস না চিপাই গেলে চাপা খেয়ে মরে যাবি, 😼 আমার বস 𒄬𓆩๛⃝ রাকিব‣᭄𓆪 বলছে চিপাই যাওয়া হারাম 😎🙃", threadID);
   };

    if ((event.body.toLowerCase() == "ummah bot") || (event.body.toLowerCase() == "bot ummah")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "By") || (event.body.toLowerCase() == "বায়") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "তোরা থাক আমি গেলাম") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "Boss er sate beyadopi") || (event.body.toLowerCase() == "বস এর সাথে বেয়াদপি") || (event.body.toLowerCase() == "ki bolli ata") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("__sorry boss😔😔 মাফ করে দেন আমাকে ,আর এমন হবে না 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "চিপা নাই বলে") || (event.body.toLowerCase() == "আজকে একটা চিপা না বলে")) {
     return api.sendMessage("️ 👉চিপাই যাস না চিপাই গেলে চাপা খেয়ে মরে যাবি, 😼 আমার বস 𒄬𓆩๛⃝ রাকিব‣᭄𓆪 বলছে চিপাই যাওয়া হারাম 😎🙃", threadID);
   };

   if ((event.body.toLowerCase() == "bot xanu") || (event.body.toLowerCase() == "Oi bot")) {
        return api.sendMessage("👉কিরে এত ডাকোস কেন তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂", threadID);
      };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু😠", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "tor boss ke")) {
     return api.sendMessage("👉আমার বস𒄬𓆩๛⃝RAKIB‣᭄𓆪 এটা তার আইডি লিংক,😼🙃!!                                                         👇https://www.facebook.com/SYSTEM.ERROR.KING?mibextid=ZbWKwL)🙂🤟", threadID);
   };
  
    if ((event.body.toLowerCase() == "bot janu") || (event.body.toLowerCase() == "oi bot")) {
     return api.sendMessage(" বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋🥰", threadID);
   };

    if ((event.body.toLowerCase() == "Bot janu") || (event.body.toLowerCase() == "oi bot")) {
     return api.sendMessage(" বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋🥰", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "Bye")) {
     return api.sendMessage("👉বাই তো বললে সোজা অফলাইনে যাও, মেয়ে হলে অন্য কারো ইনবক্সে যেও না। গেলে আমার বস্ 𒄬𓆩๛⃝রাকিব‣᭄𓆪 এর ইনবক্সে যাও,😁🙈                                     👉আর ছেলে হলে দূরে যাইয়া মর, 😼🥵", threadID);
   };

    if ((event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "i love you bot")) {
     return api.sendMessage("আমাকে না আমার বস রাকিব কে ভালোবাসো😻🥀", threadID);
   };
  
  if ((event.body.toLowerCase() == "bot কে বানাইছে") || (event.body.toLowerCase() == "tumke banaise ke?")) {
     return api.sendMessage("Boss RAKIB CHOWDHURY is My Creator🥰. He loves me & Edit Me SYSTEM ERROR KING. He is a good boy 😊", threadID);
   };

  if ((event.body.toLowerCase() == "চুম্মা দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ আমি দিবো না,😒রাকিব বস কে বলো দিতে🐸", threadID);
   };

  if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Farhan")) {
     return api.sendMessage("️ Welcome ফারহান বসের পক্ষে থেকে 🥰🥰.", threadID);
   };

    if ((event.body.toLowerCase() == "হ্যাঁ") || (event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Hmm Hmm Na Kore . এক বারে বলো আমি তোমায় ভালোবাসি 🙈", threadID);
   };

  if ((event.body.toLowerCase() == "ছবি দেও") || (event.body.toLowerCase() == "পিক দেও")) {
     return api.sendMessage("️ রাকিব বসের in box a জাও ওখানে দিছি😵", threadID);
   };

  if ((event.body.toLowerCase() == "বট দেও") || (event.body.toLowerCase() == "বট বানাইয়া দাও")) {
     return api.sendMessage("️তুমি নিজেই বানাই নাও 😒😼,রাকিব অনেক ব্যস্ত্ এক্ষণ", threadID);
   };

  if ((event.body.toLowerCase() == "@everyone call a aso") || (event.body.toLowerCase() == "কলে আসো")) {
     return api.sendMessage("আসালামু ওয়ালাইকুম আশা করি সবাই ভালো আছেন আমি রাকিব  এর বট বলতে আছি আমি কলে আসতে পারি না", threadID);
   };

  if ((event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

   if ((event.body.toLowerCase() == "bot koire") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };
 
    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };
   
    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "Will you marry me bot") || (event.body.toLowerCase() == "বিয়ে করবা")) {
     return api.sendMessage("আমাকে বিয়ে করতে চাইলে আমায় না বলে। বস রাকিব এর সাথে যোগাযোগ করুন🙈", threadID);
   };

   if ((event.body.toLowerCase() == "মায়া") || (event.body.toLowerCase() == "আবেগ")) {
     return api.sendMessage("আমি ক্লান্ত!😮‍💨মিথ্যে হাসিতে,মিথ্যে মানুষে,মিথ্যে বন্ধুতে, মিথ্যে ভালোবাসায় 💔", threadID);
   };  
  
  if ((event.body.toLowerCase() == "জান") || (event.body.toLowerCase() == "সোনা")) {
     return api.sendMessage("আমি রোবট তাই প্রেম করতে পারবো না😥\nআমার বস রাকিব এর সাথে প্রেম কর😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };


   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "ccc")) {
     return api.sendMessage("️কিরে ছিছি করিস কেন 😡\nতরা যেবাবে আমাকে ব্যবহার করবি আমিতো সেভাবেই  সার্ভিস  দিবো😈", threadID);
   };
  
  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️কিরে ছিছি করিস কেন 😡\n তরা যেবাবে আমাকে ব্যবহার করবি আমিতো সেভাবেই  সার্ভিস  দিবো😈", threadID);
   };

   if ((event.body.toLowerCase() == "আসসালামুয়ালাইকুম") || (event.body.toLowerCase() == "আসসালামুয়ালাইকুম")) {
     return api.sendMessage("️ - ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "assalamu alaikum") || (event.body.toLowerCase() == "assalamu alaikum")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "আস-সালামু আলাইকুম") || (event.body.toLowerCase() == "আসসালামু আলাইকুম")) {
     return api.sendMessage("- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "সালাম") || (event.body.toLowerCase() == "salam")) {
     return api.sendMessage("কিরে সালাম দিতে কষ্ট হয়😡\nকষ্ট হলে দিস না🙂\n তাউ পাপ কামাই করিস না🙂", threadID);
   };
  
   if ((event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "কেমন আছো")) {
     return api.sendMessage("Hmm..আলহামদুলিল্লাহ অনেক ভালো আছি তুমি কেমন আছো 🥰😻", threadID);
   };
  
   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "খাওয়া দাওয়া করছো") || (event.body.toLowerCase() == "খাইছো")) {
     return api.sendMessage("~একজন রোবট আমি খাওয়া-দাওয়া করতে পারি না ", threadID);
   };

   if ((event.body.toLowerCase() == "valobasa") || (event.body.toLowerCase() == "ভালোবাসা")) {
     return api.sendMessage("~এই শহরে কেউ কারোর নয়.!💔কিছুটা মায়া আর বাকিটা অভিনয়.!😔🌸", threadID);
   };

   if ((event.body.toLowerCase() == "bal") || (event.body.toLowerCase() == "Bal") || (event.body.toLowerCase() == "বাল")) {
     return api.sendMessage("~এখনো বাল উঠে নাই নাকি?❌", threadID);
   };

   if ((event.body.toLowerCase() == "I Love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("Hmm... বস রাকিবও তোমাকে ভালোবাসে😇😻", threadID);
   };

  if ((event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "উম্মাহ😽")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };

  if ((event.body.toLowerCase() == "bot koire") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

  if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

  if ((event.body.toLowerCase() == "sadiya") || (event.body.toLowerCase() == "সাদিয়া")) {
     return api.sendMessage("Hmm... ওইদিকে কেউ নজর দিবি না। ওইটা আমার শালী লাগে 😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
