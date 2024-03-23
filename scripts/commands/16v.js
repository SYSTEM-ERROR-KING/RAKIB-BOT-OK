const fs = require("fs");
module.exports.config = {
	    name: "rakib16",
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
	if (event.body.indexOf("Good night")==0 || event.body.indexOf("শুভো রাত্রি")==0 || event.body.indexOf("good night")==0 || event.body.indexOf("gd n8")==0) {
		var msg = {
				body: "~ ঘুমাবা নাকি জান, আচ্ছা ঘুমিয়ে পরো, সকাল এ কথা হবে, শুভ রাত্রি..!!",
				attachment: fs.createReadStream(__dirname + `/cache/goodnight.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
