const categoryIcons = {
    important: 'icon-trophy',
    sport: 'icon-soccer',
    announcement: 'icon-megaphone',
    hr: 'icon-users',
    results: 'icon-chart',
    event: 'icon-calendar'
};

const newsData = [
    {
        id: 1,
        date: '28.01.2026',
        timestamp: new Date('2026-01-28').getTime(),
        category: 'important',
        categoryLabel: 'Важно',
        title: 'Корпоративный конкурс «Лидеры КРЭТ»',
        preview: 'Старт ежегодного конкурса для выявления и поощрения лучших сотрудников компании',
        pinned: true,
        content: `
            <p>Уважаемые коллеги!</p>
            <p>Мы рады объявить о старте ежегодного корпоративного конкурса <strong>«Лидеры КРЭТ»</strong>, направленного на выявление и поощрение лучших сотрудников компании.</p>
            <p>Конкурс проводится с целью развития профессиональных и лидерских качеств, мотивации сотрудников на достижение высоких результатов и поддержания корпоративной культуры. Участники смогут продемонстрировать свои достижения, предложить инновационные идеи и получить признание коллег.</p>
            <p><strong>Номинации конкурса включают:</strong></p>
            <ul>
                <li>Лучший инженер года</li>
                <li>Инновация года</li>
                <li>Лучший руководитель</li>
                <li>Открытие года (для молодых специалистов)</li>
            </ul>
            <p>Подача заявок открыта до <strong>15 февраля 2026 года</strong>. Итоги конкурса будут подведены на торжественной церемонии в головном офисе 1 марта. Победители получат памятные награды и возможность участия в корпоративных образовательных программах.</p>
            <p>Призываем всех активных и инициативных сотрудников принять участие и проявить себя!</p>
        `
    },
    {
        id: 2,
        date: '22.01.2026',
        timestamp: new Date('2026-01-22').getTime(),
        category: 'sport',
        categoryLabel: 'Спорт',
        title: 'Сбор заявок на корпоративный турнир по мини-футболу',
        preview: 'Укрепление командного духа и поддержка спортивного образа жизни',
        content: `
                    <p>Дорогие коллеги!</p>
                    <p>С 22 января открыт набор команд на <strong>корпоративный турнир по мини-футболу</strong>, который пройдет в феврале-марте 2026 года. Цель турнира — укрепление командного духа, поддержка спортивного образа жизни и дружеское взаимодействие между подразделениями.</p>
                    <p><strong>Условия участия:</strong></p>
                    <ul>
                        <li>Команда формируется от подразделения (минимум 6 человек)</li>
                        <li>Все участники — действующие сотрудники КРЭТ</li>
                        <li>Игры будут проходить по выходным в спортивном комплексе «Энергия»</li>
                    </ul>
                    <p>Регистрация открыта до <strong>5 февраля 2026 года</strong> через внутренний портал. Победители турнира получат кубки, медали и ценные призы, а также будут отмечены на корпоративном портале.</p>
                    <p>Не упустите шанс проявить спортивный азарт и командный дух!</p>
                `
    },
    {
        id: 3,
        date: '22.01.2026',
        timestamp: new Date('2026-01-22').getTime(),
        category: 'announcement',
        categoryLabel: 'Объявления',
        title: 'Специальное предложение для сотрудников УКБП',
        preview: 'Уникальное предложение на корпоративные услуги и внутренние бонусы',
        content: `
                    <p>Коллеги!</p>
                    <p>Для сотрудников отдела УКБП подготовлено <strong>уникальное предложение</strong> на корпоративные услуги и внутренние бонусы компании. В рамках акции действуют специальные скидки, дополнительные бонусы при заказе услуг и возможность получения приоритетного обслуживания.</p>
                    <p>Подробности предложения доступны в разделе «Внутренние акции» на портале. Не упустите возможность воспользоваться специальными условиями до <strong>31 января 2026 года</strong>.</p>
                `
    },
    {
        id: 4,
        date: '20.01.2026',
        timestamp: new Date('2026-01-20').getTime(),
        category: 'hr',
        categoryLabel: 'HR / Персонал',
        title: 'Договор с НПФ «Ростех»',
        preview: 'Новое соглашение о корпоративном пенсионном обеспечении',
        content: `
                    <p>Уважаемые коллеги!</p>
                    <p>Компания КРЭТ заключила новый договор с <strong>НПФ «Ростех»</strong> о корпоративном пенсионном обеспечении. Новое соглашение предусматривает дополнительные бонусы для сотрудников, расширенные возможности по формированию пенсионных накоплений и упрощенную процедуру перехода для новых участников.</p>
                    <p>С <strong>1 февраля 2026 года</strong> все сотрудники смогут подключиться к новой программе через личный кабинет на портале. Для получения консультации рекомендуется обратиться к HR-специалистам.</p>
                `
    },
    {
        id: 5,
        date: '12.12.2025',
        timestamp: new Date('2025-12-12').getTime(),
        category: 'announcement',
        categoryLabel: 'Объявления',
        title: 'Доступно новогоднее банкетное меню на заказ',
        preview: 'Праздничное меню для корпоративных мероприятий по специальной цене',
        content: `
                    <p>Дорогие коллеги!</p>
                    <p>В преддверии новогодних праздников открыт заказ <strong>праздничного банкетного меню</strong> для корпоративных мероприятий и личного пользования. В меню включены праздничные блюда, десерты и напитки по специальной цене для сотрудников компании.</p>
                    <p>Заказы принимаются до <strong>20 декабря 2025 года</strong>. Меню и условия заказа доступны на внутреннем портале в разделе «Корпоративное питание».</p>
                    <p>Подарите себе и коллегам праздник со вкусом!</p>
                `
    },
    {
        id: 6,
        date: '10.12.2025',
        timestamp: new Date('2025-12-10').getTime(),
        category: 'event',
        categoryLabel: 'Мероприятия',
        title: 'Приглашаем на предновогодний корпоративный турнир по боулингу',
        preview: 'Создание праздничной атмосферы и укрепление командного духа',
        content: `
                    <p>Дорогие коллеги!</p>
                    <p>Приглашаем всех желающих на <strong>предновогодний корпоративный турнир по боулингу</strong>, который пройдет 18 декабря 2025 года. Мероприятие направлено на укрепление командного духа и создание праздничной атмосферы.</p>
                    <p><strong>Участие:</strong></p>
                    <ul>
                        <li>Команды формируются из подразделений (3–5 человек)</li>
                        <li>Регистрация обязательна через внутренний портал</li>
                        <li>Призы — памятные сувениры и сертификаты</li>
                    </ul>
                    <p>Поторопитесь зарегистрироваться, чтобы стать участником весёлого и динамичного спортивного события!</p>
                `
    },
    {
        id: 7,
        date: '07.12.2025',
        timestamp: new Date('2025-12-07').getTime(),
        category: 'results',
        categoryLabel: 'Итоги',
        title: 'Инженер УКБП — в числе победителей конкурса «Инженер года»',
        preview: 'Подтверждение высокого уровня компетенции и профессионализма',
        content: `
                    <p>Поздравляем коллег!</p>
                    <p>Сотрудник отдела УКБП стал победителем престижного конкурса <strong>«Инженер года»</strong>, который ежегодно проводится среди ведущих специалистов отрасли. Этот конкурс оценивает профессиональные достижения, внедрение инновационных решений и участие в крупных проектах.</p>
                    <p>Достижение является подтверждением высокого уровня компетенции и профессионализма сотрудников КРЭТ. Желаем дальнейших успехов и новых инновационных проектов!</p>
                `
    },
    {
        id: 8,
        date: '05.12.2025',
        timestamp: new Date('2025-12-05').getTime(),
        category: 'hr',
        categoryLabel: 'HR / Персонал',
        title: 'От рабочего места — в Кремль: билет за мастерство и результаты в труде',
        preview: 'Награждение лучших сотрудников за выдающиеся достижения',
        content: `
                    <p>Уважаемые коллеги!</p>
                    <p>Лучшие сотрудники компании получили уникальную возможность <strong>посетить Кремль</strong> и принять участие в официальной церемонии награждения за выдающиеся достижения в профессиональной деятельности.</p>
                    <p>Эта инициатива направлена на поощрение сотрудников, демонстрирующих высокий уровень мастерства, инициативности и преданности компании.</p>
                    <p>Поздравляем всех участников и желаем дальнейших профессиональных успехов!</p>
                `
    },
    {
        id: 9,
        date: '04.12.2025',
        timestamp: new Date('2025-12-04').getTime(),
        category: 'event',
        categoryLabel: 'Мероприятия',
        title: 'Приглашаем на предновогоднюю интеллектуально-развлекательную игру!',
        preview: 'Викторины, командные задания и памятные призы',
        content: `
                    <p>Дорогие коллеги!</p>
                    <p>Приглашаем вас принять участие в <strong>корпоративной интеллектуально-развлекательной игре</strong>, которая пройдет 15 декабря 2025 года в конференц-зале головного офиса.</p>
                    <p><strong>Программа мероприятия включает:</strong></p>
                    <ul>
                        <li>Викторины по истории компании и отрасли</li>
                        <li>Командные задания на логику и смекалку</li>
                        <li>Подарки и памятные сувениры для победителей</li>
                    </ul>
                    <p>Регистрация обязательна до <strong>10 декабря 2025 года</strong> через внутренний портал.</p>
                    <p>Не упустите шанс интересно провести время с коллегами и проявить свои интеллектуальные способности!</p>
                `
    },
    {
        id: 10,
        date: '28.12.2025',
        timestamp: new Date('2025-12-28').getTime(),
        category: 'results',
        categoryLabel: 'Итоги',
        title: 'Подведение итогов 2025 года: достижения и планы на 2026',
        preview: 'Выручка выросла на 23%, открыт филиал в Екатеринбурге',
        content: `
                    <p>Уважаемые коллеги!</p>
                    <p>Подводим итоги уходящего 2025 года. Это был насыщенный и продуктивный год для нашей компании.</p>
                    <p><strong>Основные достижения:</strong></p>
                    <ul>
                        <li>Выручка выросла на 23% по сравнению с прошлым годом</li>
                        <li>Открыт филиал в Екатеринбурге</li>
                        <li>Запущено 5 новых продуктовых линий</li>
                        <li>Численность персонала увеличилась на 150 сотрудников</li>
                        <li>Компания получила статус «Лучший работодатель года»</li>
                    </ul>
                    <p><strong>Планы на 2026 год:</strong></p>
                    <ul>
                        <li>Модернизация производственных мощностей</li>
                        <li>Выход на международные рынки</li>
                        <li>Внедрение новых технологий и цифровизация процессов</li>
                        <li>Расширение программ обучения и развития персонала</li>
                    </ul>
                    <p>Благодарим всех сотрудников за вклад в успех компании и желаем продуктивного и успешного нового года!</p>
                `
    }
];

// State
let currentFilter = {
    search: '',
    category: 'all',
    sort: 'desc'
};

// DOM элементы
const listView = document.getElementById('listView');
const detailView = document.getElementById('detailView');
const newsList = document.getElementById('newsList');
const backToList = document.getElementById('backToList');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortOrder = document.getElementById('sortOrder');
const heroBlock = document.getElementById('heroBlock');
const newsCount = document.getElementById('newsCount');

// LocalStorage для прочитанных новостей
function getReadNews() {
    const read = localStorage.getItem('readNews');
    return read ? JSON.parse(read) : [];
}

function markAsRead(newsId) {
    const readNews = getReadNews();
    if (!readNews.includes(newsId)) {
        readNews.push(newsId);
        localStorage.setItem('readNews', JSON.stringify(readNews));
    }
}

function isRead(newsId) {
    return getReadNews().includes(newsId);
}

// Проверка свежести новости (меньше 7 дней)
function isFresh(timestamp) {
    const now = new Date().getTime();
    const daysDiff = (now - timestamp) / (1000 * 60 * 60 * 24);
    return daysDiff <= 7;
}

// Получить SVG иконку для категории
function getCategoryIcon(category) {
    const iconId = categoryIcons[category] || 'icon-document';
    return `<svg><use href="#${iconId}"/></svg>`;
}

// Фильтрация и сортировка
function getFilteredNews() {
    let filtered = [...newsData];

    // Поиск
    if (currentFilter.search) {
        const query = currentFilter.search.toLowerCase();
        filtered = filtered.filter(news =>
            news.title.toLowerCase().includes(query) ||
            news.content.toLowerCase().includes(query) ||
            news.date.includes(query) ||
            (news.preview && news.preview.toLowerCase().includes(query))
        );
    }

    // Категория
    if (currentFilter.category !== 'all') {
        filtered = filtered.filter(news => news.category === currentFilter.category);
    }

    // Сортировка
    filtered.sort((a, b) => {
        if (currentFilter.sort === 'desc') {
            return b.timestamp - a.timestamp;
        } else {
            return a.timestamp - b.timestamp;
        }
    });

    return filtered;
}

// Рендер списка новостей
function renderNewsList() {
    const filtered = getFilteredNews();

    // Обновить счетчик
    newsCount.textContent = filtered.length;

    if (filtered.length === 0) {
        newsList.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">
                            <svg><use href="#icon-document"/></svg>
                        </div>
                        <div class="empty-state-text">Новости не найдены</div>
                    </div>
                `;
        return;
    }

    newsList.innerHTML = filtered.map(news => `
                <article 
                    class="news-item ${isRead(news.id) ? 'read' : ''} ${news.pinned ? 'pinned' : ''}" 
                    data-news-id="${news.id}"
                    tabindex="0"
                    role="link"
                    aria-label="Открыть новость: ${news.title}"
                >
                    <div class="news-meta">
                        <time class="news-date" datetime="${news.date}">
                            ${isFresh(news.timestamp) ? '<span class="fresh-indicator"></span>' : ''}
                            ${news.date}
                        </time>
                        <span class="news-category ${news.pinned ? 'pinned-badge' : ''}">
                            ${getCategoryIcon(news.category)}
                            ${news.pinned ? 'Важно' : news.categoryLabel}
                        </span>
                    </div>
                    <h2 class="news-title">${news.title}</h2>
                    ${news.preview ? `<p class="news-preview">${news.preview}</p>` : ''}
                </article>
            `).join('');

    // Event listeners для новостей
    document.querySelectorAll('.news-item').forEach(item => {
        const newsId = parseInt(item.dataset.newsId);

        item.addEventListener('click', () => showNewsDetail(newsId));

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showNewsDetail(newsId);
            }
        });
    });
}

// Показ детальной информации
function showNewsDetail(newsId) {
    const news = newsData.find(n => n.id === newsId);
    if (!news) return;

    // Отметить как прочитанную
    markAsRead(newsId);

    detailView.innerHTML = `
                <article>
                    <header class="detail-header">
                        <div class="detail-meta">
                            <time class="detail-date" datetime="${news.date}">${news.date}</time>
                            <span class="news-category ${news.pinned ? 'pinned-badge' : ''}">
                                ${getCategoryIcon(news.category)}
                                ${news.pinned ? 'Важно' : news.categoryLabel}
                            </span>
                        </div>
                        <h1 class="detail-title">${news.title}</h1>
                    </header>
                    <div class="detail-content">
                        ${news.content}
                    </div>
                </article>
            `;

    listView.style.display = 'none';
    detailView.classList.add('active');
    backToList.style.display = 'inline';
    heroBlock.style.display = 'none';

    // Обновить URL
    history.pushState({ newsId }, '', `?id=${newsId}`);

    // Прокрутка наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Возврат к списку
function showNewsList() {
    listView.style.display = 'block';
    detailView.classList.remove('active');
    backToList.style.display = 'none';
    heroBlock.style.display = 'block';

    // Обновить URL
    history.pushState({}, '', window.location.pathname);

    // Перерендерить список (обновить прочитанные)
    renderNewsList();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listeners
backToList.addEventListener('click', showNewsList);

searchInput.addEventListener('input', (e) => {
    currentFilter.search = e.target.value;
    renderNewsList();
});

categoryFilter.addEventListener('change', (e) => {
    currentFilter.category = e.target.value;
    renderNewsList();
});

sortOrder.addEventListener('change', (e) => {
    currentFilter.sort = e.target.value;
    renderNewsList();
});

// История браузера
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.newsId) {
        showNewsDetail(e.state.newsId);
    } else {
        showNewsList();
    }
});

// Инициализация с URL
function initFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');

    if (newsId) {
        const id = parseInt(newsId);
        const news = newsData.find(n => n.id === id);
        if (news) {
            showNewsDetail(id);
            return;
        }
    }

    renderNewsList();
}

// Запуск
initFromURL();