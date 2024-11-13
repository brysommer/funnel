import bot from "./app.js";

const support = () => {

// Мапа для збереження стану чатів підтримки
const userSupportChats = new Map();

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Якщо повідомлення від адміністратора
    if (chatId == 269694206 && msg.reply_to_message) {
        const userChatId = userSupportChats.get(msg.reply_to_message.message_id);
        if (userChatId) {
            bot.sendMessage(userChatId, msg.text);
        } else {
            const message = msg.text.split(' ');

            bot.sendMessage(message[0], message[1]);
        }
        return;
    }

    // Збереження повідомлення для адміністратора
    bot.forwardMessage(269694206, chatId, msg.message_id).then((forwardedMessage) => {
        userSupportChats.set(forwardedMessage.message_id, chatId);
    });

    
});

}

export default support;