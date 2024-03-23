const fs = require("fs");
module.exports.config = {
	    name: "rakib12",
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
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Ummah")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("💋")==0) {
		var msg = {
				body: "~ লুচ্চা পোলা পান এখানে এসে চুমা চাপ্টি নাহ করে, পাঠ খেতে যাইয়া কর..😼🥀",
				attachment: fs.createReadStream(__dirname + `/cache/cummah.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
