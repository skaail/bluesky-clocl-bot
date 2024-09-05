const { BskyAgent } = require("@atproto/api");
var cron = require('node-cron');
const moment = require('moment-timezone');

async function sendPost(text) {
    const agent = new BskyAgent({ service: "https://bsky.social" });
    await agent.login({
      identifier: "relogioatualizado.bsky.social",
      password: "2wm3-3zdk-wysn-mfzh",
    });
    await agent.post({ text });
    console.log(`Post feito: ${text}`)
}



cron.schedule('* * * * *', () => {

  const now = moment().tz('America/Sao_Paulo');
  const hour = now.format('HH');
  const minute = now.format('mm');
  sendPost(`Horário Atual: ${hour}:${minute}`);
});
