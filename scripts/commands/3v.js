const fs = require("fs");
module.exports.config = {
	    name: "rakib3",
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
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("✌️")==0 || event.body.indexOf("🖕")==0) {
		var msg = {
				body: "~ আঙ্গুল দেখাও, আঙ্গুল তোমার হেডা দিয়ে ভরে দিম..!!🥀",
				attachment: fs.createReadStream(__dirname + `/cache/anguldekaw.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
