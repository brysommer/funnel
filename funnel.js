import { bot } from "./app.js";
import { keyboards, phrases } from "./lenguage.js";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const funnelMain = async() => {

    bot.on('message', async (msg) => {

      const text = msg.text;

      const chatId = msg.chat.id;

      if (text === '/start') {
        bot.sendMessage(269694206, `${chatId} натиснув старт`);


        bot.sendMessage(chatId, phrases.intro);

        await delay(3500);

        bot.sendPhoto(chatId, 'AgACAgIAAxkBAAMMZzSdxadNhT4u65wvb5x2CbqNHlcAAoPlMRu2bahJE1SF-I2uR38BAAMCAAN5AAM2BA');

        await delay(3500);

        bot.sendMessage(chatId, `Список кейсів`, { reply_markup: keyboards.cases });
      }
    });

    bot.on('callback_query', async (msg) => {

      const chatId = msg.message.chat.id;

      const quaery = msg.data;

      switch (quaery) {
        case 'lead_conversion':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.cars);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'online_shop':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.zemlekup);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'brand_app':
            bot.sendMessage(chatId, phrases.vodoliy);
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'lead_quiz':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.diet);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
            
        break;
    
        case 'infoproduct_sales':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.cosm);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'sales_funnel':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.funnel);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'service_sales':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.voyage);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'lead_database':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.sms);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'data_automation':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.parsing);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'info_apps':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.school);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
    
        case 'custom_dev':
            bot.sendMessage(269694206, `${chatId} натиснув ${quaery}`);
            bot.sendMessage(chatId, phrases.individual);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;

        case 'consultation':
            bot.sendMessage(269694206, `${chatId} залишив запит на консультацію`);

            await delay(5000);
            bot.sendMessage(chatId, phrases.consultation, { reply_markup: keyboards.consultation });
            bot.sendMessage(chatId, phrases.wait);
        break;
      };
      
    });

    bot.on('photo', async (msg) => {

      const chatId = msg.chat.id;

      const photo = msg.photo[msg.photo.length - 1];

      const fileId = photo.file_id;

      bot.sendMessage(chatId, fileId)
    })
    
};

