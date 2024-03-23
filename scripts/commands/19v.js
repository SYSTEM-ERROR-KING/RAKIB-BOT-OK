const fs = require("fs");
module.exports.config = {
	    name: "rakib19",
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
	if (event.body.indexOf("কি করেন")==0 || event.body.indexOf("কি করো")==0 || event.body.indexOf("koro")==0 || event.body.indexOf("ki koro")==0) {
		var msg = {
				body: "~ এইতো তোমাদের সাথে আড্ডা দিচ্ছি, তোমরা কি করছো 🥰🥀",
				attachment: fs.createReadStream(__dirname + `/cache/kothabolsi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
