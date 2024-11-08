import TelegramBot from 'node-telegram-bot-api';
import { dataBot } from './values.js';
import { funnelMain } from './funnel.js';

const bot = new TelegramBot(dataBot.telegramBotToken, { polling: true });

funnelMain();

export { bot };
