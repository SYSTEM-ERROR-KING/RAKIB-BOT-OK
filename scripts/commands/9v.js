const fs = require("fs");
module.exports.config = {
	    name: "rakib9",
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
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("/out")==0 || event.body.indexOf("Ouy")==0) {
		var msg = {
				body: " ~ বাই বাই জানে মান কলিজা ত্যাহ🥰🥀",
				attachment: fs.createReadStream(__dirname + `/cache/byebye.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
