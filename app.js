import TelegramBot from 'node-telegram-bot-api';
import { dataBot } from './values.js';
import { funnelMain } from './funnel.js';
import support from './support.js';

const bot = new TelegramBot(dataBot.telegramBotToken, { polling: true });

funnelMain();
support();

export { bot };
