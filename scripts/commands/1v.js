const fs = require("fs");
module.exports.config = {
	    name: "rakib1",
    version: "1.1.0",
    permission: 0,
    credits: "farhan",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "😜",
    cooldowns: 5,
  };

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("রাকিব চৌধুরী")==0 || event.body.indexOf("@Rakib Chowdhury")==0 || event.body.indexOf("Rakib")==0 ||
event.body.indexOf("রাকিব")==0) {
		var msg = {
				body: "~ আমার মালিক https://www.facebook.com/SYSTEM.ERROR.KING?mibextid=ZbWKwL এখন বিজি আছে যা বলার সন্ধা ৬ টার পরে বলবেন ধন্যবাদ..!!",
				attachment: fs.createReadStream(__dirname + `/cache/amiekonbg.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
