const prompts = require('prompts');
const questions = [
  {
    type: "text",
    name: "token",
    message: "Please Enter Your Discord Token: ",
    validate: value => {
        if (value.match(/([a-zA-Z0-9_\-]+)\.([a-zA-Z0-9_\-+]+)\.([a-zA-Z0-9_\-]+)/g)) {
            return true;
        }
        return "Please enter a valid token";
    }
  },
  {
    type: "multiselect",
    name: "intents",
    message: "Please Select Your Intents: ",
    choices: [
      { title: "Guilds", value: "GUILDS" },
      { title: "Guild Members", value: "GUILD_MEMBERS" },
      { title: "Guild Bans", value: "GUILD_BANS" },
      {
        title: "Guild Emojis and Stickers",
        value: "GUILD_EMOJIS_AND_STICKERS",
      },
      { title: "Guild Integrations", value: "GUILD_INTEGRATIONS" },
      { title: "Guild Webhooks", value: "GUILD_WEBHOOKS" },
      { title: "Guild Invites", value: "GUILD_INVITES" },
      { title: "Guild Voice States", value: "GUILD_VOICE_STATES" },
      { title: "Guild Presences", value: "GUILD_PRESENCES" },
      { title: "Guild Messages", value: "GUILD_MESSAGES" },
      { title: "Guild Message Reactions", value: "GUILD_MESSAGE_REACTIONS" },
      { title: "Guild Message Typing", value: "GUILD_MESSAGE_TYPING" },
      { title: "Direct Messages", value: "DIRECT_MESSAGES" },
      { title: "Direct Message Reactions", value: "DIRECT_MESSAGE_REACTIONS" },
      { title: "Direct Message Typing", value: "DIRECT_MESSAGE_TYPING" },
      { title: "Guild Scheduled Events", value: "GUILD_SCHEDULED_EVENTS" },
    ],
    hint: "Use ↑ and ↓ arrows to navigate. Space to Select. Press Enter to confirm.",
    instructions: false
  },
]

const run = async () => {
  return await prompts(questions);
}

module.exports = run;

