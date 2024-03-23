const fs = require("fs");
module.exports.config = {
	    name: "rakib17",
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
	if (event.body.indexOf("link de")==0 || event.body.indexOf("18+")==0 || event.body.indexOf("Video de")==0 || event.body.indexOf("hot")==0) {
		var msg = {
				body: "~ এই তুই ভালো হবি কবে 😾🔨..!",
				attachment: fs.createReadStream(__dirname + `/cache/hobikobe.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
