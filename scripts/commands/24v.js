const fs = require("fs");
module.exports.config = {
	    name: "rakib24",
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
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("🤧")==0 || event.body.indexOf("😛")==0 || event.body.indexOf("🥵")==0) {
		var msg = {
				body: "~ জান গরম লাগছে নাকি গো .!!",
				attachment: fs.createReadStream(__dirname + `/cache/jangoron.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
