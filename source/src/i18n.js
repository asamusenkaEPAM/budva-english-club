export const supportedLocales = ['en', 'ru', 'me', 'tr', 'de'];

const translations = {
  en: {
    code: 'EN', languageName: 'English', htmlLang: 'en',
    skip: 'Skip to content',
    nav: [['Home', '#home'], ['About', '#about'], ['Events', '#events'], ['Topics', '#topics'], ['Contact', '#contact']],
    joinUs: 'Join Us', joinClub: 'Join the Club',
    menuOpen: 'Open navigation menu', menuClose: 'Close navigation menu', mainNav: 'Main navigation', mobileNav: 'Mobile navigation', language: 'Language',
    hero: { line1: 'Speak English. Meet People.', line2: 'Feel at Home in Budva.', next: 'Next meetup', checking: 'Checking the latest update…', soon: 'New meetup details coming soon', automatic: 'The next time and location will appear here automatically.', check: 'Check Telegram', openLocation: 'Open location' },
    features: ['Friendly Community', 'Free to Join', 'In-Person Meetups', 'All Levels Welcome'], highlights: 'Club highlights',
    about: { label: 'About the club', title: 'A social evening where English happens naturally.', text: 'A place in Budva, Montenegro, where locals, newcomers, and visitors share stories, ask good questions, and become more confident one conversation at a time.', promises: ['No tests or formal lessons', 'Space to listen before you speak', 'A different mix of people every week'] },
    topics: { label: 'Conversation topics', usage: 'Open a card at the meetup — the topic and three questions stay right on your phone.', title: 'Pick a card. Start somewhere unexpected.', text: 'One hundred conversation starters for the table. Each card gives you a theme and three easy ways into the discussion.', deck: 'Conversation topic deck', chooseCategory: 'Choose a category', allCategories: 'All topics', fullscreen: 'Open topic in full screen', closeFullscreen: 'Close full-screen topic', previous: 'Previous', next: 'Next', surprise: 'Surprise me', hint: 'Use ← → keys or swipe', dialog: 'Full-screen conversation topic' },
    how: { label: 'How it works', title: 'Three small steps to a much bigger conversation.', steps: [['Open Telegram', 'Find the latest announcement with the exact venue and any updates.'], ['Come as you are', 'No registration form, placement test, or perfect introduction required.'], ['Start with hello', 'Listen, join a topic, and let the next sentence come naturally.']] },
    footer: { text: 'A friendly place to practice English, meet people, and feel at home in Budva, Montenegro.', tagline: 'Real people · Real conversations' },
  },
  ru: {
    code: 'RU', languageName: 'Русский', htmlLang: 'ru',
    skip: 'Перейти к содержанию',
    nav: [['Главная', '#home'], ['О клубе', '#about'], ['Встречи', '#events'], ['Темы', '#topics'], ['Контакты', '#contact']],
    joinUs: 'Присоединиться', joinClub: 'Вступить в клуб',
    menuOpen: 'Открыть меню', menuClose: 'Закрыть меню', mainNav: 'Основная навигация', mobileNav: 'Мобильная навигация', language: 'Язык',
    hero: { line1: 'Практикуйте английский. Знакомьтесь.', line2: 'Находите своих в Будве.', next: 'Следующая встреча', checking: 'Проверяем последнее объявление…', soon: 'Скоро анонсируем следующую встречу', automatic: 'Как только определимся со временем и местом, информация появится здесь.', check: 'Открыть Telegram', openLocation: 'Показать на карте' },
    features: ['Дружеская атмосфера', 'Участие бесплатно', 'Встречаемся офлайн', 'Любой уровень английского'], highlights: 'Преимущества клуба',
    about: { label: 'О клубе', title: 'Живое общение на английском — без уроков и оценок.', text: 'Мы встречаемся в Будве, чтобы местные жители, те, кто недавно переехал, и путешественники могли знакомиться, делиться историями и увереннее говорить по-английски.', promises: ['Без тестов и формальных уроков', 'Можно сначала послушать', 'Новые люди каждую неделю'] },
    topics: { label: 'Темы для разговоров', usage: 'Откройте карточку на встрече — тема и три вопроса будут прямо в телефоне.', title: 'Выберите карточку. Начните с неожиданного.', text: 'Сто тем для разговора за одним столом. В каждой карточке — основная тема и три вопроса, с которых легко начать.', deck: 'Карточки с темами для разговоров', chooseCategory: 'Выбрать категорию', allCategories: 'Все темы', fullscreen: 'Открыть тему на весь экран', closeFullscreen: 'Закрыть полноэкранный режим', previous: 'Назад', next: 'Дальше', surprise: 'Случайная тема', hint: 'Листайте стрелками или свайпом', dialog: 'Тема для разговора на весь экран' },
    how: { label: 'Как это работает', title: 'Три простых шага к хорошему разговору.', steps: [['Откройте Telegram', 'Там всегда есть свежий анонс с точным временем и адресом.'], ['Приходите без подготовки', 'Не нужно регистрироваться, проходить тест или заранее придумывать, что сказать.'], ['Начните с приветствия', 'Послушайте, включитесь в разговор — дальше всё пойдёт само.']] },
    footer: { text: 'Разговорный клуб в Будве, где практикуют английский, знакомятся и находят свой круг.', tagline: 'Знакомимся · Общаемся · Практикуем английский' },
  },
  me: {
    code: 'ME', languageName: 'Crnogorski', htmlLang: 'sr-ME',
    skip: 'Pređite na sadržaj',
    nav: [['Početna', '#home'], ['O klubu', '#about'], ['Događaji', '#events'], ['Teme', '#topics'], ['Kontakt', '#contact']],
    joinUs: 'Pridružite nam se', joinClub: 'Pridružite se klubu',
    menuOpen: 'Otvorite meni', menuClose: 'Zatvorite meni', mainNav: 'Glavna navigacija', mobileNav: 'Mobilna navigacija', language: 'Jezik',
    hero: { line1: 'Vježbajte engleski. Upoznajte nove ljude.', line2: 'Pronađite svoju ekipu u Budvi.', next: 'Sljedeće druženje', checking: 'Provjeravamo najnoviju objavu…', soon: 'Uskoro objavljujemo sljedeće druženje', automatic: 'Čim dogovorimo vrijeme i mjesto, detalji će biti ovdje.', check: 'Otvorite Telegram', openLocation: 'Pogledajte na mapi' },
    features: ['Opuštena atmosfera', 'Učešće je besplatno', 'Družimo se uživo', 'Za sve nivoe engleskog'], highlights: 'Prednosti kluba',
    about: { label: 'O klubu', title: 'Razgovor na engleskom — bez časova i ocjenjivanja.', text: 'Okupljamo se u Budvi kako bi se lokalci, oni koji su se nedavno doselili i posjetioci upoznali, razmijenili priče i sigurnije govorili engleski.', promises: ['Bez testova i formalnih časova', 'Možete prvo samo slušati', 'Nova poznanstva svake sedmice'] },
    topics: { label: 'Teme za razgovor', usage: 'Otvorite karticu na druženju — tema i tri pitanja biće vam na telefonu.', title: 'Izaberite karticu i započnite neobičan razgovor.', text: 'Sto tema za razgovor za zajedničkim stolom. Svaka kartica donosi temu i tri jednostavna pitanja za početak.', deck: 'Kartice sa temama za razgovor', chooseCategory: 'Izaberite kategoriju', allCategories: 'Sve teme', fullscreen: 'Otvorite temu preko cijelog ekrana', closeFullscreen: 'Zatvorite prikaz preko cijelog ekrana', previous: 'Prethodna', next: 'Sljedeća', surprise: 'Iznenadi me', hint: 'Listajte strelicama ili prevucite prstom', dialog: 'Tema za razgovor preko cijelog ekrana' },
    how: { label: 'Kako funkcioniše', title: 'Tri jednostavna koraka do dobrog razgovora.', steps: [['Otvorite Telegram', 'Tamo je uvijek najnovija objava sa tačnim vremenom i adresom.'], ['Dođite bez pripreme', 'Ne morate se prijavljivati, raditi test niti unaprijed smišljati šta ćete reći.'], ['Počnite pozdravom', 'Saslušajte druge, uključite se u razgovor — dalje će ići samo od sebe.']] },
    footer: { text: 'Klub u Budvi u kojem vježbamo engleski, upoznajemo ljude i pronalazimo svoju ekipu.', tagline: 'Upoznajemo se · Razgovaramo · Vježbamo engleski' },
  },
  tr: {
    code: 'TR', languageName: 'Türkçe', htmlLang: 'tr',
    skip: 'İçeriğe geç',
    nav: [['Ana sayfa', '#home'], ['Hakkımızda', '#about'], ['Buluşmalar', '#events'], ['Konular', '#topics'], ['İletişim', '#contact']],
    joinUs: 'Aramıza katıl', joinClub: 'Kulübe katıl',
    menuOpen: 'Menüyü aç', menuClose: 'Menüyü kapat', mainNav: 'Ana menü', mobileNav: 'Mobil menü', language: 'Dil',
    hero: { line1: 'İngilizce konuşun. Yeni insanlarla tanışın.', line2: "Budva'da kendi çevrenizi kurun.", next: 'Sıradaki buluşma', checking: 'Son duyuruyu kontrol ediyoruz…', soon: 'Yeni buluşmayı yakında duyuracağız', automatic: 'Saat ve mekân belli olduğunda ayrıntıları burada bulabilirsiniz.', check: "Telegram'ı aç", openLocation: 'Haritada göster' },
    features: ['Samimi bir ortam', 'Katılım ücretsiz', 'Yüz yüze buluşmalar', 'Her seviyeye uygun'], highlights: 'Kulübün öne çıkanları',
    about: { label: 'Kulüp hakkında', title: 'Ders yok, not yok — sadece İngilizce sohbet.', text: "Budva'da yaşayanların, şehre yeni gelenlerin ve gezginlerin tanıştığı; hikâyelerini paylaştığı ve konuşarak İngilizce özgüvenini geliştirdiği bir topluluğuz.", promises: ['Sınav ve resmi ders yok', 'İsterseniz önce sadece dinleyebilirsiniz', 'Her hafta yeni insanlarla tanışma fırsatı'] },
    topics: { label: 'Sohbet konuları', usage: 'Buluşmada bir kart açın — konu ve üç soru telefonunuzda hazır olsun.', title: 'Bir kart seçin. Sohbeti beklenmedik bir yerden başlatın.', text: 'Aynı masa etrafında yüz farklı sohbet konusu. Her kartta bir ana konu ve sohbeti başlatacak üç soru var.', deck: 'Sohbet konusu kartları', chooseCategory: 'Kategori seçin', allCategories: 'Tüm konular', fullscreen: 'Konuyu tam ekranda aç', closeFullscreen: 'Tam ekran görünümünü kapat', previous: 'Önceki', next: 'Sonraki', surprise: 'Rastgele konu', hint: 'Ok tuşlarını kullanın veya kaydırın', dialog: 'Tam ekran sohbet konusu' },
    how: { label: 'Nasıl işliyor?', title: 'İyi bir sohbet için üç basit adım.', steps: [["Telegram'ı açın", 'Güncel duyuruda saat, adres ve olası değişiklikleri bulabilirsiniz.'], ['Hazırlık yapmadan gelin', 'Kayıt olmanız, sınava girmeniz veya ne söyleyeceğinizi önceden düşünmeniz gerekmez.'], ['Bir merhabayla başlayın', 'Önce dinleyin, sohbete katılın — gerisi kendiliğinden gelir.']] },
    footer: { text: "Budva'da İngilizce pratik yaptığımız, yeni insanlarla tanıştığımız ve kendi çevremizi kurduğumuz bir sohbet kulübü.", tagline: 'Tanışıyoruz · Konuşuyoruz · İngilizce pratik yapıyoruz' },
  },
  de: {
    code: 'DE', languageName: 'Deutsch', htmlLang: 'de',
    skip: 'Zum Inhalt springen',
    nav: [['Startseite', '#home'], ['Über den Club', '#about'], ['Treffen', '#events'], ['Themen', '#topics'], ['Kontakt', '#contact']],
    joinUs: 'Mitmachen', joinClub: 'Zum Club',
    menuOpen: 'Menü öffnen', menuClose: 'Menü schließen', mainNav: 'Hauptnavigation', mobileNav: 'Mobile Navigation', language: 'Sprache',
    hero: { line1: 'Englisch sprechen. Leute kennenlernen.', line2: 'In Budva Anschluss finden.', next: 'Nächstes Treffen', checking: 'Aktuelle Ankündigung wird geladen…', soon: 'Details zum nächsten Treffen folgen bald', automatic: 'Sobald Zeit und Ort feststehen, findest du die Details hier.', check: 'Telegram öffnen', openLocation: 'Auf der Karte öffnen' },
    features: ['Offene Gemeinschaft', 'Kostenlose Teilnahme', 'Treffen vor Ort', 'Für alle Sprachniveaus'], highlights: 'Das erwartet dich',
    about: { label: 'Über den Club', title: 'Englisch sprechen — ohne Unterricht und ohne Bewertung.', text: 'Wir treffen uns in Budva: Menschen aus der Region, Neuankömmlinge und Reisende lernen sich kennen, erzählen Geschichten und werden mit jedem Gespräch sicherer auf Englisch.', promises: ['Keine Tests und kein Unterricht', 'Erst zuhören ist völlig in Ordnung', 'Jede Woche neue Begegnungen'] },
    topics: { label: 'Gesprächsthemen', usage: 'Öffne beim Treffen einfach eine Karte — das Thema und drei Fragen hast du direkt auf dem Handy.', title: 'Wähle eine Karte und lass dich überraschen.', text: 'Hundert Gesprächsimpulse für einen gemeinsamen Tisch. Jede Karte enthält ein Thema und drei Fragen für einen leichten Einstieg.', deck: 'Karten mit Gesprächsthemen', chooseCategory: 'Kategorie auswählen', allCategories: 'Alle Themen', fullscreen: 'Thema im Vollbild öffnen', closeFullscreen: 'Vollbild schließen', previous: 'Zurück', next: 'Weiter', surprise: 'Zufälliges Thema', hint: 'Mit den Pfeiltasten oder per Wischgeste blättern', dialog: 'Gesprächsthema im Vollbild' },
    how: { label: 'So funktioniert es', title: 'Drei einfache Schritte zu einem guten Gespräch.', steps: [['Telegram öffnen', 'Dort findest du die aktuelle Ankündigung mit Uhrzeit, Adresse und möglichen Änderungen.'], ['Einfach vorbeikommen', 'Keine Anmeldung, kein Test, keine Vorbereitung — komm einfach vorbei.'], ['Mit einem Hallo anfangen', 'Hör erst einmal zu, steig ins Gespräch ein — der Rest ergibt sich von selbst.']] },
    footer: { text: 'Ein Gesprächsclub in Budva, in dem wir Englisch üben, neue Leute kennenlernen und Anschluss finden.', tagline: 'Kennenlernen · Austauschen · Englisch sprechen' },
  },
};

export function currentLocale() {
  if (typeof window === 'undefined') return 'en';
  const match = window.location.pathname.match(/\/(en|ru|me|tr|de)\/?$/);
  return match?.[1] || 'en';
}

export function siteRootPath() {
  if (typeof window === 'undefined') return './';
  const directory = window.location.pathname.endsWith('/')
    ? window.location.pathname
    : window.location.pathname.replace(/[^/]*$/, '');
  return directory.replace(/(?:en|ru|me|tr|de)\/$/, '');
}

export function localeHref(locale) {
  return `${siteRootPath()}${locale}/`;
}

export function assetHref(path) {
  return `${siteRootPath()}${path.replace(/^\//, '')}`;
}

export function getCopy(locale = currentLocale()) {
  return translations[locale] || translations.en;
}
