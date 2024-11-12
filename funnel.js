import { bot } from "./app.js";
import { keyboards, phrases } from "./lenguage.js";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const funnelMain = async() => {

    bot.on('message', async (msg) => {

      const text = msg.text;

      const chatId = msg.chat.id;

      if (text === '/start') {
        bot.sendMessage(chatId, phrases.intro);

        await delay(7000);

        bot.sendMessage(chatId, `Список кейсів`, { reply_markup: keyboards.cases });
      }
    });

    bot.on('callback_query', async (msg) => {

      const chatId = msg.message.chat.id;

      const quaery = msg.data;

      switch (quaery) {
        case 'lead_conversion':
          bot.sendMessage(chatId, phrases.cars)
          break;
      }
    })
    
};

