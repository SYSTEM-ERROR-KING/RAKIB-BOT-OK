const fs = require("fs");
module.exports.config = {
	    name: "rakib15",
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
	if (event.body.indexOf("Good morning")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("gd m9")==0 || event.body.indexOf("Gd M9")==0) {
		var msg = {
				body: "~ শুভ সকাল জ্যানু ত্যাহ এবার তো উটো..!!",
				attachment: fs.createReadStream(__dirname + `/cache/goodmorning.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
