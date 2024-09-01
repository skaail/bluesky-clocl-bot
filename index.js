const { BskyAgent } = require("@atproto/api");
var cron = require('node-cron');

async function sendPost(text) {
    const agent = new BskyAgent({ service: "https://bsky.social" });
    await agent.login({
      identifier: "blgianini.bsky.social",
      password: "Familia8!#$",
    });
    await agent.post({ text });
    console.log(`Post feito: ${text}`)
}



cron.schedule('* * * * *', () => {
    let date_ob = new Date();

    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();

    sendPost(hours + ":" + minutes)
});