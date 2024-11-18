const phrases = {
    intro: `
    👋 Вітаю! Раді представити, як бот від itGin допоможе вам збільшити прибуток! 🚀 Ми пропонуємо як готові рішення на базі наших успішних розробок, так і індивідуальну розробку, щоб відповідати вашим унікальним потребам.

🔹 Telegram-бот — це сучасний, зручний і доступний спосіб взаємодії з клієнтами, що вирішує безліч практичних задач. Від автоматизації процесів до персоналізованих налаштувань — обирайте зі списку, і я розповім докладніше!
    `,
    cars: `
    💼 Ліди в клієнти. Бот @Prime_Expert_bot розроблений для конвертації лідів у клієнтів у сфері авто. Він починає з короткого квізу, щоб зрозуміти бажані параметри автомобіля, а потім запитує контактний номер телефону. Бот показує відповідні варіанти авто, і якщо клієнт зацікавлений у якомусь із них, дані про обраний варіант та контакт клієнта надходять менеджеру. Також збираються дані про тих, хто не зробив вибір, що дозволяє надіслати їм автоматичні повідомлення або розпочати подальшу комунікацію.
    `,
    zemlekup: `
    🛒 Інтернет-магазин. @Buypie_tech_bot. Цей бот для продажу сільськогосподарських ділянок у Telegram дозволяє продавцям легко виставляти лоти в каналі, а покупцям — швидко купувати через бот. Він повідомляє підписників про нові пропозиції, нагадує про незавершені покупки та веде кабінет із купленими лотами. Завдяки автоматизації процесів, бот забезпечує зручність для клієнтів і підвищує ефективність для продавців.
    `,
    vodoliy: `
    🏷 Бренд у боті. Ми розробили телеграм бота @vodoliy_bot для популярної мережі розливу води у Львові "Водолій". Бот вирішує всі задачі на які здатен брендовий додаток, при чому зручніший для клієнта і дешевший для замовника. Дисконтна програма, покупки в додатку, техпідтримка, керування водоматами а також навігація по торговим точком - усе це завжди під рукою в клієнта.
    `,
    diet: `
    📝 Квіз для лідів. Квіз для лідів @body_type_bot — це бот, який допомагає перетворити таргетовану рекламу в клієнтів. Після проходження детального тесту користувач отримує персоналізовані результати та рекомендації для вирішення своїх проблем. Це дозволяє залучити потенційних клієнтів, даючи їм цінну інформацію, яка мотивує до подальших дій, перетворюючи інтерес в реальні покупки чи запити.
    `,
    cosm: `
    📚 **Продаж інфопродуктів. @onlineskhool_bot** - це супермаркет курсів, де користувачі можуть вибирати та придбати навчальні матеріали з великої бібліотеки. Після здійснення оплати бот автоматично надає доступ до придбаного контенту. Це повністю автоматизована онлайн-школа, що дозволяє користувачам отримувати навчання без затримок, а власникам курсів – легко управляти продажами та доступом до матеріалів.
    `,
    funnel: `
    📈 Воронка продажів – це стратегічний процес, який допомагає перетворювати потенційних клієнтів у постійних. Від залучення уваги до прийняття рішення про покупку, кожен етап воронки працює на забезпечення оптимального взаємодії з клієнтом. У нашому випадку саме така воронка продажів працює з Вами @itGINbot.
    `,
    voyage: `🤖 Продаж послуг. @POIZDKA24bot - це система для виклику таксі та продажу квитків на автобусні рейси, яка працює в автоматичному режимі. Бот надає зручні інструменти для управління контентом і процесами, дозволяючи ефективно організувати весь процес від оформлення замовлення до оплати. Це рішення дозволяє зекономити час як клієнтам, так і операторам, автоматизуючи ключові етапи сервісу та покращуючи досвід користувачів.`,
    sms: `
    📊 **База номерів в ліди**. Налаштуємо автоматичну розсилку за базою телефонних номерів, що направить користувачів до вашого бота. Бот забезпечить повний цикл взаємодії з клієнтами: від надання потрібної інформації до підготовки до живого спілкування з менеджером. Це рішення допоможе збільшити конверсії та автоматизувати комунікацію, зменшуючи навантаження на ваш персонал @GinGarageBot.
    `,
    parsing: `
    ⚙️ Автоматизація роботи з даними. Ми створюємо прості боти для автоматизації рутинних процесів, таких як перетворення прайс-листів з формату XLS в зручний для імпорту в інтернет-магазин формат XML. Також надаємо послуги парсингу: слідкуйте за цінами конкурентів та автоматизуйте цей процес за допомогою нашого бота. Це дозволяє економити час і уникати помилок при оновленні інформації.
    `,
    school: `
    ℹ️ **Інформ. додатки**. @Navaria_Lyceum_schedule_bot - зручний бот для отримання актуальної інформації про розклад занять. Бот дозволяє швидко доступити необхідну інформацію прямо в смартфоні, що є значною перевагою порівняно з традиційними вебсторінками. Завдяки йому, студенти можуть зберігати всі необхідні дані про уроки в одному місці.
    `,
    individual: `
    Ось етапи розробки для створення бота:

Узгодження ТЗ і бюджету: На цьому етапі визначаються функціональні вимоги до бота, а також оцінка вартості проєкту та терміни виконання.

Розробка та правки: Програмування бота, впровадження основних функцій, а також проведення тестування та внесення коригувань.

Запуск і підтримка: Після запуску бота здійснюється моніторинг роботи, виправлення помилок та надання підтримки для безперебійної роботи.
    `,
    consultation: 'Щоб розпочати безкоштовну індивідуальну консультацію, натисніть кнопку «🗣️ Отримати консультацію» та отримайте готові рішення для вашого бізнесу вже зараз! 🚀',

    wait: `Євген зв'яжеться з вами найближчим часом, очікуйте повідомлення в боті. 📩😊`
};

const keyboards = {
    cases: {
        inline_keyboard: [
            [{ text: "💼 Ліди в клієнти", callback_data: "lead_conversion" }],
            [{ text: "🛒 Інтернет-магазин", callback_data: "online_shop" }],
            [{ text: "🏷 Бренд у боті", callback_data: "brand_app" }],
            [{ text: "📝 Квіз для лідів", callback_data: "lead_quiz" }],
            [{ text: "📚 Продаж інфопродуктів", callback_data: "infoproduct_sales" }],
            [{ text: "📈 Воронка продажів", callback_data: "sales_funnel" }],
            [{ text: "🤖 Продаж послуг", callback_data: "service_sales" }],
            [{ text: "📊 База номерів в ліди", callback_data: "lead_database" }],
            [{ text: "⚙️ Автоматизація роботи з данними", callback_data: "data_automation" }],
            [{ text: "ℹ️ Інформ. додатки", callback_data: "info_apps" }],
            [{ text: "🔧 Індивідуальна розробка", callback_data: "custom_dev" }]
        ]
    },

    consultation: {
        
          inline_keyboard: [
            [
              {
                text: "🗣️ Отримати консультацію",
                callback_data: "consultation"
              }
            ]
          ]
        
      }
}

export {phrases, keyboards};