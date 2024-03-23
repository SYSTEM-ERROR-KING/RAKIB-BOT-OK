const fs = require("fs");
module.exports.config = {
	    name: "rakib21",
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
	if (event.body.indexOf("ভালোবাসা দিবা")==0 || event.body.indexOf("kiss me")==0 || event.body.indexOf("বুকে আসো")==0 || event.body.indexOf("buke ai")==0) {
		var msg = {
				body: "~ আর পারমু নাহ যাও,  সর এখান থেকে..!!",
				attachment: fs.createReadStream(__dirname + `/cache/arparumna.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
