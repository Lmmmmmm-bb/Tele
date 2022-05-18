import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(
  '',
  {
    polling: true,
  }
);

bot.on('message', msg => {
  console.log(msg);
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, msg.text);
})

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
      "keyboard": [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]]
    }
  });
});
