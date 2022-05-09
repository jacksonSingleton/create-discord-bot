const prompt = require("./prompt");
const env = require("./initialize/generateEnv");


const botData = {
  token: "",
  intents: [],
};
prompt()
  .then((data) => {
    botData.token = data.token;
    botData.intents = data.intents;
    console.log(botData);
  }).then(() => {
    env(botData.token);
  })
  .catch(console.error);
