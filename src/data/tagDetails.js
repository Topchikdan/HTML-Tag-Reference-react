// Подробная информация по каждому тегу: атрибуты, пример кода, советы, MDN-ссылка.
// Ключ — slug из tags.js.

export const tagDetails = {
  doctype: {
    fullDesc: `<!DOCTYPE html> — это не HTML-тег, а инструкция для браузера. Она сообщает, что документ написан на HTML5 и должен обрабатываться по современным стандартам. Без неё браузер переключается в режим «quirks mode» — режим совместимости со старыми браузерами, в котором многие CSS-свойства ведут себя непредсказуемо.`,
    attrs: [],
    example: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Моя страница</title>
  </head>
  <body>
    <p>Привет, мир!</p>
  </body>
</html>`,
    notes: [
      'Всегда первая строка файла — перед ней не должно быть ничего, даже пробела.',
      'Регистр не важен: <!doctype html>, <!DOCTYPE HTML> — всё работает.',
      'В HTML5 это единственная нужная форма. Старые DOCTYPE были длинными и сложными.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Glossary/Doctype',
  },

  html: {
    fullDesc: `<html> — корневой элемент страницы. Все остальные элементы вкладываются внутрь него. Атрибут lang очень важен: он сообщает браузеру, поисковикам и программам чтения с экрана (скринридерам) основной язык страницы.`,
    attrs: [
      { name: 'lang', desc: 'Код языка содержимого страницы. Например: lang="ru", lang="en", lang="uk".' },
      { name: 'dir', desc: 'Направление текста: ltr (слева направо) или rtl (справа налево).' },
      { name: 'xmlns', desc: 'Пространство имён XML — нужно только для XHTML-документов.' },
    ],
    example: `<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>...</head>
  <body>...</body>
</html>`,
    notes: [
      'lang="ru" влияет на переносы слов, расстановку кавычек в CSS и озвучку скринридером.',
      'Для страниц с несколькими языками атрибут lang можно ставить на отдельные блоки.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/html',
  },

  head: {
    fullDesc: `<head> содержит метаданные документа — информацию о странице, которая не отображается напрямую пользователю, но используется браузером, поисковиками и другими сервисами. Здесь подключаются стили, шрифты, скрипты и иконки.`,
    attrs: [],
    example: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Краткое описание страницы для поисковиков">
  <title>Название вкладки</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
</head>`,
    notes: [
      'Всё содержимое <head> невидимо пользователю напрямую — только эффект на страницу.',
      '<meta charset="UTF-8"> должна идти как можно раньше — до <title>.',
      'Скрипты без defer/async в <head> блокируют рендер страницы — лучше ставить перед </body>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/head',
  },

  title: {
    fullDesc: `<title> задаёт заголовок страницы — текст, который показывается во вкладке браузера и в результатах поисковых систем. Это один из важнейших SEO-элементов. Хороший title кратко описывает содержимое и помогает пользователю понять, на какой странице он находится.`,
    attrs: [],
    example: `<head>
  <title>Главная — Справочник HTML-тегов</title>
</head>

<!-- Для разных страниц сайта: -->
<title>Тег <table> — Справочник HTML-тегов</title>`,
    notes: [
      'Оптимальная длина: 50–60 символов. Поисковики обрезают длинные заголовки.',
      'Не дублируйте title на каждой странице — он должен описывать конкретную страницу.',
      'Хороший паттерн: «Название страницы — Название сайта».',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/title',
  },

  meta: {
    fullDesc: `<meta> — одиночный тег, который хранит различные метаданные страницы. В зависимости от атрибутов он задаёт кодировку, описание для поисковиков, поведение при масштабировании на мобильных, данные для соцсетей и многое другое.`,
    attrs: [
      { name: 'charset', desc: 'Кодировка документа. Почти всегда UTF-8.' },
      { name: 'name', desc: 'Имя метаданных: viewport, description, keywords, author и др.' },
      { name: 'content', desc: 'Значение для атрибута name или http-equiv.' },
      { name: 'http-equiv', desc: 'Имитирует HTTP-заголовок: refresh, content-type и др.' },
      { name: 'property', desc: 'Используется для Open Graph (og:title, og:image и т.д.).' },
    ],
    example: `<!-- Кодировка -->
<meta charset="UTF-8">

<!-- Адаптивная верстка на мобильных -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO-описание -->
<meta name="description" content="Онлайн-справочник по тегам HTML с примерами">

<!-- Данные для соцсетей (Open Graph) -->
<meta property="og:title" content="Справочник HTML-тегов">
<meta property="og:image" content="https://example.com/preview.png">`,
    notes: [
      'meta viewport без initial-scale=1.0 может давать неожиданный зум на iOS.',
      'description влияет на сниппет в поисковике, но не напрямую на ранжирование.',
      'Open Graph нужен для красивого превью при шаринге в Telegram, VK, Twitter.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/meta',
  },

  body: {
    fullDesc: `<body> — контейнер для всего видимого содержимого страницы: текста, изображений, форм, видео и всего остального. На странице может быть только один <body>. Именно здесь живёт весь контент, с которым пользователь видит и взаимодействует.`,
    attrs: [],
    example: `<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <h1>Заголовок страницы</h1>
    <p>Основной контент...</p>
  </main>
  <footer>...</footer>
</body>`,
    notes: [
      'В современном HTML атрибуты bgcolor, text, link на <body> не используются — всё делается через CSS.',
      'JavaScript-обработчики событий onload лучше заменить addEventListener("DOMContentLoaded", ...).',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/body',
  },

  'h1-h6': {
    fullDesc: `Теги <h1>–<h6> задают заголовки шести уровней. Они создают иерархическую структуру страницы: <h1> — главный заголовок, <h2> — подраздел, <h3> — раздел внутри подраздела и т.д. Заголовки критически важны для SEO и доступности — скринридеры используют их для навигации по странице.`,
    attrs: [],
    example: `<h1>Справочник по HTML-тегам</h1>

<h2>Основы документа</h2>
<p>Теги, из которых строится каркас страницы...</p>

<h3>Тег &lt;html&gt;</h3>
<p>Корневой элемент...</p>

<h3>Тег &lt;head&gt;</h3>
<p>Метаданные страницы...</p>

<h2>Текст и форматирование</h2>`,
    notes: [
      'На одной странице должен быть только один <h1> — главный заголовок документа.',
      'Не пропускайте уровни: после <h2> должен идти <h3>, а не <h4>.',
      'Не используйте заголовки для стилизации текста — только для структуры.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements',
  },

  p: {
    fullDesc: `<p> — тег абзаца, базовый строительный блок для текстового контента. Браузер автоматически добавляет отступы сверху и снизу. Абзац закрывается при встрече следующего блочного элемента.`,
    attrs: [],
    example: `<p>
  Это обычный абзац текста. Браузер добавит отступы автоматически.
</p>

<p>
  Второй абзац. Здесь можно использовать <strong>жирный текст</strong>,
  <em>курсив</em> и другие строчные элементы.
</p>`,
    notes: [
      'Нельзя вкладывать блочные элементы (div, h1–h6, ul...) внутрь <p>.',
      'Для переноса строки внутри абзаца используйте <br>, но не злоупотребляйте им.',
      'Убирать отступы <p> лучше через CSS margin, а не заменять его на <div>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/p',
  },

  div: {
    fullDesc: `<div> — универсальный блочный контейнер без собственного смысла. Он занимает всю доступную ширину и начинается с новой строки. Используется для группировки элементов с целью применения стилей или скриптов, когда нет подходящего семантического тега.`,
    attrs: [
      { name: 'class', desc: 'CSS-класс для стилизации или JavaScript-выборки.' },
      { name: 'id', desc: 'Уникальный идентификатор элемента на странице.' },
      { name: 'style', desc: 'Встроенные CSS-стили (лучше избегать).' },
      { name: 'data-*', desc: 'Произвольные данные для JavaScript. Например: data-user-id="42".' },
    ],
    example: `<!-- Контейнер для макета -->
<div class="container">
  <div class="sidebar">Боковая колонка</div>
  <div class="content">Основной контент</div>
</div>

<!-- Карточка товара -->
<div class="product-card" data-product-id="123">
  <div class="product-card__image">...</div>
  <div class="product-card__info">...</div>
</div>`,
    notes: [
      'Если есть семантически подходящий тег (article, section, header, nav...) — используйте его.',
      '<div> невидим для скринридеров как структурный элемент — это просто контейнер.',
      'Методология БЭМ (.block__element--modifier) хорошо сочетается с <div>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/div',
  },

  span: {
    fullDesc: `<span> — строчный аналог <div>: не создаёт разрыв строки, не имеет собственного смысла. Используется для применения стилей или скриптов к части текста или к группе строчных элементов.`,
    attrs: [
      { name: 'class', desc: 'CSS-класс для выделения части текста стилем.' },
      { name: 'id', desc: 'Уникальный идентификатор.' },
      { name: 'style', desc: 'Встроенные стили.' },
      { name: 'data-*', desc: 'Произвольные данные.' },
    ],
    example: `<p>
  Цена: <span class="price">1 490 ₽</span>
</p>

<p>
  Нажмите <span class="key">Ctrl</span> + <span class="key">S</span>
  чтобы сохранить файл.
</p>

<p>
  Статус: <span class="status status--active">Активен</span>
</p>`,
    notes: [
      'Если нужен семантический смысл, используйте <strong>, <em>, <mark>, <time> и т.д.',
      '<span> внутри <p> не создаёт разрыв строки, в отличие от <div>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/span',
  },

  // === ФОРМАТИРОВАНИЕ ===

  address: {
    fullDesc: `<address> предназначен для контактной информации автора или владельца документа/раздела. Это не почтовый адрес в общем смысле, а именно контактные данные: email, ссылки на профили, телефон. Скринридеры могут озвучивать его особым образом.`,
    attrs: [],
    example: `<address>
  Автор: <a href="mailto:dev@example.com">Иван Петров</a><br>
  Telegram: <a href="https://t.me/ivanpetrov">@ivanpetrov</a>
</address>

<!-- В футере сайта -->
<footer>
  <address>
    ООО «Рога и копыта», Москва, ул. Примерная, д. 1
  </address>
</footer>`,
    notes: [
      'По умолчанию браузеры отображают <address> курсивом.',
      'Не используйте для произвольных адресов — только для контактов автора.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/address',
  },

  blockquote: {
    fullDesc: `<blockquote> — блочная цитата из внешнего источника. Обычно отображается с отступом слева. Атрибут cite указывает URL источника (машиночитаемый, не отображается). Для отображаемой подписи используется <footer> или <cite> внутри blockquote.`,
    attrs: [
      { name: 'cite', desc: 'URL источника цитаты (для машинного чтения, не отображается).' },
    ],
    example: `<blockquote cite="https://example.com/article">
  <p>Любой достаточно продвинутый HTML — неотличим от магии.</p>
  <footer>— <cite>Кто-то умный</cite></footer>
</blockquote>`,
    notes: [
      'Для короткой строчной цитаты используйте <q> — браузер сам добавит кавычки.',
      'Атрибут cite не отображается — его нельзя использовать вместо видимой ссылки.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/blockquote',
  },

  q: {
    fullDesc: `<q> — строчная цитата. Браузер автоматически оборачивает содержимое в кавычки в зависимости от языка документа. Атрибут cite указывает источник.`,
    attrs: [
      { name: 'cite', desc: 'URL источника цитаты.' },
    ],
    example: `<p>
  Как говорил Линус Торвальдс:
  <q cite="https://example.com">Talk is cheap. Show me the code.</q>
</p>`,
    notes: [
      'Не добавляйте кавычки вручную — браузер делает это сам через CSS quotes.',
      'Язык кавычек берётся из атрибута lang ближайшего родительского элемента.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/q',
  },

  br: {
    fullDesc: `<br> создаёт принудительный перевод строки внутри текстового блока. Это одиночный тег, не требующий закрытия. Используется там, где разрыв строки является частью содержимого — например, в стихах или адресах.`,
    attrs: [],
    example: `<p>
  Иван Иванович Иванов<br>
  ул. Пушкина, д. 10, кв. 5<br>
  г. Москва, 123456
</p>

<address>
  Почта: info@example.com<br>
  Телефон: +7 (495) 000-00-00
</address>`,
    notes: [
      'Не используйте несколько <br> подряд для создания отступов — для этого есть CSS margin.',
      'Не используйте <br> для разделения абзацев — для этого есть <p>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/br',
  },

  wbr: {
    fullDesc: `<wbr> (Word Break Opportunity) указывает браузеру возможное место для разрыва длинного слова, если оно не помещается в строку. В отличие от дефиса, <wbr> не добавляет никакого символа при разрыве.`,
    attrs: [],
    example: `<p>
  URL страницы: https://example.com<wbr>/very<wbr>/long<wbr>/path<wbr>/to<wbr>/resource
</p>

<p>
  Имя файла: super<wbr>long<wbr>filename<wbr>2024<wbr>.pdf
</p>`,
    notes: [
      'Полезен для URL, длинных технических строк или сложных слов.',
      'Не добавляет дефис при разрыве. Если нужен дефис, используйте мягкий перенос &shy;.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/wbr',
  },

  hr: {
    fullDesc: `<hr> (Horizontal Rule) — тематический разрыв между частями контента, например переход к другой теме. Браузер отображает его как горизонтальную линию, но смысл — именно тематическое разделение, а не декоративная линия.`,
    attrs: [],
    example: `<section>
  <h2>Введение</h2>
  <p>Текст введения...</p>
</section>

<hr>

<section>
  <h2>Основная часть</h2>
  <p>Основной текст...</p>
</section>`,
    notes: [
      'Для декоративных линий используйте CSS border — <hr> несёт смысловую нагрузку.',
      'Стилизуйте через CSS: border: none; border-top: 1px solid #ccc;',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/hr',
  },

  b: {
    fullDesc: `<b> выделяет текст жирным шрифтом визуально, без передачи особой важности. Используется для ключевых слов, названий продуктов, терминов в их первом употреблении. Если текст важен по смыслу — используйте <strong>.`,
    attrs: [],
    example: `<p>
  В меню выберите <b>Файл → Сохранить как</b>.
</p>

<p>
  Ингредиенты: <b>мука</b>, <b>яйца</b>, <b>молоко</b>, <b>сахар</b>.
</p>`,
    notes: [
      'По умолчанию выглядит так же, как <strong>, но смысл разный.',
      '<strong> — важно, <b> — просто выделено визуально.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/b',
  },

  strong: {
    fullDesc: `<strong> обозначает текст с высокой смысловой важностью, серьёзностью или срочностью. Скринридеры могут озвучивать его с усилением. Визуально браузеры отображают его жирным шрифтом.`,
    attrs: [],
    example: `<p>
  <strong>Внимание!</strong> Не удаляйте этот файл — он нужен для работы системы.
</p>

<p>
  Пароль должен содержать <strong>не менее 8 символов</strong>.
</p>`,
    notes: [
      'Можно вкладывать для усиления: <strong><strong>очень важно</strong></strong>.',
      'Отличие от <b>: <strong> говорит «это важно», <b> говорит «это выделено».',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/strong',
  },

  i: {
    fullDesc: `<i> отображает текст курсивом для обозначения технических терминов, иностранных слов, мыслей персонажа, названий или других случаев, где курсив несёт типографский смысл, но не является интонационным акцентом.`,
    attrs: [],
    example: `<p>
  Слово <i>синергия</i> часто используется в бизнес-контексте.
</p>

<p>
  Корабль назывался <i>Santa María</i>.
</p>

<p class="thought">
  <i>Неужели это правда?</i> — подумал он.
</p>`,
    notes: [
      'Для смыслового акцента используйте <em> (его скринридер произнесёт с ударением).',
      'Часто используется для иконок через библиотеки вроде Font Awesome: <i class="fa fa-star">.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/i',
  },

  em: {
    fullDesc: `<em> (Emphasis) — интонационный акцент, который меняет смысл предложения. Скринридеры озвучивают его с ударением. Вложенные <em> усиливают акцент. Визуально браузеры отображают его курсивом.`,
    attrs: [],
    example: `<!-- Смысл меняется от позиции ударения -->
<p><em>Я</em> не говорил, что он украл деньги.</p>
<p>Я не говорил, что <em>он</em> украл деньги.</p>
<p>Я не говорил, что он украл <em>деньги</em>.</p>`,
    notes: [
      'Вложенность усиливает акцент: <em><em>очень важно</em></em>.',
      'Отличие от <i>: <em> — интонация и смысл, <i> — типографика.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/em',
  },

  s: {
    fullDesc: `<s> (Strikethrough) помечает текст как устаревший, недостоверный или больше не актуальный. Браузер отображает его перечёркнутым. Не путайте с <del> — тот используется для обозначения удалённого текста в документе с отслеживанием изменений.`,
    attrs: [],
    example: `<p>
  Старая цена: <s>2 990 ₽</s>
  Новая цена: <strong>1 490 ₽</strong>
</p>

<p>
  <s>Этот метод устарел, используйте fetch() вместо XMLHttpRequest.</s>
</p>`,
    notes: [
      '<s> — стало неактуальным, <del> — было удалено при редактировании документа.',
      'Часто используется в интернет-магазинах для зачёркнутых старых цен.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/s',
  },

  u: {
    fullDesc: `<u> обозначает текст с нетекстовой аннотацией: орфографическая ошибка (красное подчёркивание), имя на китайском, специальный термин. По умолчанию браузеры подчёркивают текст — это может путать со ссылками.`,
    attrs: [],
    example: `<p>
  Не забудь написать <u class="spelling-error">Москва</u> с заглавной буквы.
</p>`,
    notes: [
      'Внешне похож на ссылку — используйте осторожно, добавляйте стили для различия.',
      'Не используйте для декоративного подчёркивания — для этого есть CSS text-decoration.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/u',
  },

  mark: {
    fullDesc: `<mark> выделяет текст как релевантный в текущем контексте — например, результаты поиска, на которые ссылается пользователь. По умолчанию браузеры окрашивают фон в жёлтый цвет, имитируя маркер.`,
    attrs: [],
    example: `<!-- Подсветка результатов поиска -->
<p>
  Результаты для «<mark>HTML теги</mark>»: найдено 42 статьи.
</p>

<!-- Важный фрагмент в цитате -->
<blockquote>
  Создание сайтов начинается с изучения
  <mark>семантической структуры HTML</mark>.
</blockquote>`,
    notes: [
      'Для SEO полезно в контексте выдачи результатов поиска.',
      'Стилизуйте через CSS: mark { background: #fff176; color: inherit; }',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/mark',
  },

  sub: {
    fullDesc: `<sub> отображает текст в нижнем индексе — меньшим размером ниже базовой линии. Используется в химических формулах, математических индексах и сносках.`,
    attrs: [],
    example: `<p>Вода: H<sub>2</sub>O</p>
<p>CO<sub>2</sub> — диоксид углерода</p>
<p>x<sub>1</sub> + x<sub>2</sub> = 10</p>`,
    notes: [
      'Не используйте для декоративного уменьшения текста — для этого есть CSS font-size.',
      'Сноска: <sup><a href="#fn1">[1]</a></sup> — принято использовать <sup> для сносок.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/sub',
  },

  sup: {
    fullDesc: `<sup> отображает текст в верхнем индексе — меньшим размером выше базовой линии. Используется для степеней, математических формул, сносок и порядковых суффиксов.`,
    attrs: [],
    example: `<p>E = mc<sup>2</sup></p>
<p>2<sup>10</sup> = 1024</p>
<p>1<sup>й</sup> результат, 2<sup>й</sup> результат</p>
<p>Согласно исследованию<sup><a href="#ref1">[1]</a></sup>...</p>`,
    notes: [
      'Для математических формул лучше использовать MathML или LaTeX + библиотеки.',
      'Сноски традиционно оформляются через <sup>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/sup',
  },

  bdo: {
    fullDesc: `<bdo> (Bidirectional Override) переопределяет направление отображения текста. Атрибут dir обязателен и определяет направление: ltr (слева направо) или rtl (справа налево).`,
    attrs: [
      { name: 'dir', desc: 'Обязательный: "ltr" или "rtl" — направление текста.' },
    ],
    example: `<p>Обычный текст: <bdo dir="rtl">Hello World</bdo></p>
<!-- Отобразится: dlroW olleH -->`,
    notes: [
      'Используется для вставки текста на языках RTL (арабский, иврит) в контекст LTR.',
      'Не путайте с dir на других элементах — <bdo> более жёсткий: он переопределяет Unicode-алгоритм.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/bdo',
  },

  bdi: {
    fullDesc: `<bdi> (Bidirectional Isolation) изолирует фрагмент текста с неизвестным направлением (например, имя пользователя, введённое им самим) от окружающего текста. Это предотвращает «заражение» направлением письма.`,
    attrs: [],
    example: `<ul>
  <li>Пользователь <bdi>@user123</bdi> написал сообщение.</li>
  <!-- Если имя на арабском: -->
  <li>Пользователь <bdi>أحمد</bdi> написал сообщение.</li>
</ul>`,
    notes: [
      'Очень важен для сайтов с UGC-контентом (User Generated Content) при поддержке RTL-языков.',
      'Без <bdi> арабское имя пользователя может сломать порядок окружающего текста.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/bdi',
  },

  small: {
    fullDesc: `<small> обозначает «мелкий шрифт» — дополнительные комментарии, юридические оговорки, авторские права, сноски. Это семантически «менее важная» информация, хотя и присутствующая на странице.`,
    attrs: [],
    example: `<p>
  Купите сейчас за 999 ₽!
  <small>*Цена действительна до конца месяца</small>
</p>

<footer>
  <small>&copy; 2024 Моя Компания. Все права защищены.</small>
</footer>`,
    notes: [
      'Уменьшает шрифт на один размер относительно родителя, но можно переопределить через CSS.',
      'Семантически отличается от span с CSS font-size: small — несёт смысл «мелкий шрифт/оговорка».',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/small',
  },

  pre: {
    fullDesc: `<pre> (Preformatted) сохраняет пробелы, переводы строк и отступы точно как в исходном коде. Использует моноширинный шрифт. Незаменим для отображения кода, ASCII-арта или любого текста, где форматирование важно.`,
    attrs: [],
    example: `<pre>
  def hello():
      print("Привет, мир!")
      return True

  hello()
</pre>

<!-- Обычно в паре с code: -->
<pre><code class="language-js">
  const x = 42;
  console.log(x);
</code></pre>`,
    notes: [
      'Обязательно экранируйте < и > как &lt; и &gt; внутри <pre><code>.',
      'Для подсветки синтаксиса используйте Prism.js или Highlight.js.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/pre',
  },

  code: {
    fullDesc: `<code> обозначает фрагмент компьютерного кода — имя переменной, функции, команду, путь к файлу. Отображается моноширинным шрифтом. Для многострочного кода используется внутри <pre>.`,
    attrs: [],
    example: `<p>
  Для выхода из vim нажмите <code>:q!</code>.
</p>

<p>
  Используйте <code>Array.map()</code> для преобразования массива.
</p>

<pre><code>
const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);
</code></pre>`,
    notes: [
      'Строчный <code> — для имён, команд, путей. <pre><code> — для блоков кода.',
      'Атрибут class="language-js" используют библиотеки подсветки синтаксиса.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/code',
  },

  kbd: {
    fullDesc: `<kbd> (Keyboard) обозначает ввод с клавиатуры — нажатие клавиш или команды. Часто стилизуется как кнопка клавиши. Можно вкладывать для обозначения комбинаций.`,
    attrs: [],
    example: `<p>Сохраните файл: <kbd>Ctrl</kbd> + <kbd>S</kbd></p>
<p>Чтобы скопировать: <kbd><kbd>Ctrl</kbd>+<kbd>C</kbd></kbd></p>
<p>Введите команду: <kbd>npm install</kbd></p>`,
    notes: [
      'Стилизуйте как кнопку: kbd { border: 1px solid #ccc; padding: 2px 6px; border-radius: 4px; }',
      'Вложенный <kbd> в <kbd> обозначает комбинацию клавиш.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/kbd',
  },

  samp: {
    fullDesc: `<samp> (Sample output) обозначает вывод программы, скрипта или системы. Отображается моноширинным шрифтом. Используется в документации и руководствах, где нужно показать, что напечатает программа.`,
    attrs: [],
    example: `<p>
  Введите <kbd>node -v</kbd> и вы увидите:
  <samp>v20.11.0</samp>
</p>

<p>
  При ошибке консоль покажет:
  <br><samp>TypeError: Cannot read properties of undefined</samp>
</p>`,
    notes: [
      'Трио для документации кода: <code> — фрагмент кода, <kbd> — ввод, <samp> — вывод.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/samp',
  },

  var: {
    fullDesc: `<var> обозначает имя переменной в математическом выражении или программном коде. Браузеры традиционно отображают его курсивом. Используется в математической и технической документации.`,
    attrs: [],
    example: `<p>Площадь: <var>S</var> = <var>a</var> × <var>b</var></p>
<p>Переменная <var>userCount</var> хранит число пользователей.</p>`,
    notes: [
      'Семантически отличается от <i> — <var> конкретно говорит «это имя переменной».',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/var',
  },

  time: {
    fullDesc: `<time> обозначает конкретный момент времени или диапазон. Атрибут datetime содержит машиночитаемый формат даты/времени, а содержимое тега — читаемое для человека представление. Это важно для поисковиков и агрегаторов новостей.`,
    attrs: [
      { name: 'datetime', desc: 'Машиночитаемая дата/время. Форматы: 2024-01-15, 2024-01-15T14:30, PT2H (2 часа).' },
    ],
    example: `<p>Статья опубликована <time datetime="2024-01-15">15 января 2024</time>.</p>

<p>Событие начнётся <time datetime="2024-06-01T18:00:00+03:00">1 июня в 18:00 МСК</time>.</p>

<p>Фильм длится <time datetime="PT2H30M">2 часа 30 минут</time>.</p>`,
    notes: [
      'Google использует <time datetime="..."> для Rich Snippets в поисковой выдаче.',
      'Формат datetime следует стандарту ISO 8601.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/time',
  },

  abbr: {
    fullDesc: `<abbr> обозначает аббревиатуру или акроним. Атрибут title содержит полную расшифровку, которая обычно показывается при наведении мыши в виде подсказки. Браузеры часто добавляют пунктирное подчёркивание.`,
    attrs: [
      { name: 'title', desc: 'Полная расшифровка аббревиатуры — показывается в тултипе.' },
    ],
    example: `<p>
  <abbr title="HyperText Markup Language">HTML</abbr> — язык разметки веб-страниц.
</p>

<p>
  Скорость соединения: 100 <abbr title="мегабит в секунду">Мбит/с</abbr>.
</p>`,
    notes: [
      'При первом употреблении аббревиатуры на странице всегда расшифровывайте её через title.',
      'Стилизуйте: abbr[title] { text-decoration: underline dotted; cursor: help; }',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/abbr',
  },

  cite: {
    fullDesc: `<cite> обозначает название произведения, на которое ссылается текст: книга, статья, фильм, музыкальный альбом, сайт, картина. По умолчанию отображается курсивом. Не путайте с атрибутом cite у <blockquote>.`,
    attrs: [],
    example: `<p>
  Рекомендую прочитать <cite>Структуру и интерпретацию компьютерных программ</cite>.
</p>

<p>
  Эффект описан в статье <cite>«Как работает браузер»</cite> на MDN.
</p>

<blockquote>
  <p>«Делай проще.»</p>
  <footer>— <cite>Антуан де Сент-Экзюпери</cite></footer>
</blockquote>`,
    notes: [
      '<cite> — название произведения. Для имени автора цитаты используйте просто текст или другие теги.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/cite',
  },

  dfn: {
    fullDesc: `<dfn> (Definition) обозначает термин, который определяется в данном месте текста. Ближайший абзац или секция является определением этого термина. Браузеры часто отображают его курсивом.`,
    attrs: [
      { name: 'title', desc: 'Если содержимое — аббревиатура, title содержит полную форму термина.' },
    ],
    example: `<p>
  <dfn>Семантическая вёрстка</dfn> — написание HTML с использованием тегов по их смысловому
  предназначению, а не ради визуального эффекта.
</p>

<p>
  <dfn><abbr title="Document Object Model">DOM</abbr></dfn> —
  программный интерфейс для HTML-документов.
</p>`,
    notes: [
      'Один тег <dfn> — одно определение термина.',
      'Полезно в технических статьях и справочниках для обозначения первого вхождения термина.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/dfn',
  },

  // === ССЫЛКИ И НАВИГАЦИЯ ===

  a: {
    fullDesc: `<a> (Anchor) — гиперссылка. Один из самых важных тегов HTML: именно ссылки связывают веб-страницы в паутину. Может ссылаться на другие страницы, якоря на текущей странице, файлы, email и телефоны. Содержимое может быть текстом, изображением или блоком элементов.`,
    attrs: [
      { name: 'href', desc: 'URL назначения. Может быть абсолютным, относительным, якорем (#id), mailto:, tel:.' },
      { name: 'target', desc: 'Где открыть: _self (текущая вкладка, по умолчанию), _blank (новая вкладка).' },
      { name: 'rel', desc: 'Отношение к целевому ресурсу. При target="_blank" важно добавить rel="noopener noreferrer".' },
      { name: 'download', desc: 'Указывает, что ссылку надо скачать, а не открыть. Значение — имя файла.' },
      { name: 'hreflang', desc: 'Язык целевого ресурса.' },
    ],
    example: `<!-- Обычная ссылка -->
<a href="https://example.com">Перейти на сайт</a>

<!-- Открыть в новой вкладке (с защитой) -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Открыть в новой вкладке
</a>

<!-- Якорь на текущей странице -->
<a href="#section2">Перейти к разделу 2</a>

<!-- Email и телефон -->
<a href="mailto:hello@example.com">Написать письмо</a>
<a href="tel:+74951234567">+7 (495) 123-45-67</a>

<!-- Скачать файл -->
<a href="/files/report.pdf" download="отчёт.pdf">Скачать отчёт</a>`,
    notes: [
      'target="_blank" без rel="noopener" — уязвимость (tabnabbing)! Всегда добавляйте rel.',
      'Текст ссылки должен быть понятен без контекста — не «нажмите здесь», а «скачать отчёт».',
      'Ссылки на якоря работают с любым атрибутом id на странице: <div id="section2">.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/a',
  },

  link: {
    fullDesc: `<link> подключает внешние ресурсы к документу: таблицы стилей, иконки, шрифты, альтернативные версии страницы. Одиночный тег, размещается в <head>. Самое частое применение — подключение CSS.`,
    attrs: [
      { name: 'rel', desc: 'Тип связи: stylesheet, icon, preload, canonical, alternate и др.' },
      { name: 'href', desc: 'URL подключаемого ресурса.' },
      { name: 'type', desc: 'MIME-тип ресурса: text/css, image/png и др.' },
      { name: 'media', desc: 'Медиавыражение: screen, print, (max-width: 600px) и др.' },
      { name: 'as', desc: 'Тип ресурса при rel="preload": style, script, image, font и др.' },
    ],
    example: `<head>
  <!-- Подключение CSS -->
  <link rel="stylesheet" href="styles.css">

  <!-- Иконка вкладки -->
  <link rel="icon" href="favicon.ico">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">

  <!-- Предзагрузка критического шрифта -->
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

  <!-- Канонический URL (для SEO) -->
  <link rel="canonical" href="https://example.com/page">
</head>`,
    notes: [
      'rel="preload" для ключевых ресурсов ускоряет загрузку страницы.',
      'Для шрифтов с rel="preload" обязательно добавьте атрибут crossorigin.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/link',
  },

  nav: {
    fullDesc: `<nav> — семантический контейнер для навигационных ссылок: главное меню сайта, хлебные крошки, пагинация, содержание статьи. Скринридеры используют его для навигации по странице. На одной странице может быть несколько <nav>.`,
    attrs: [
      { name: 'aria-label', desc: 'Описание навигации при наличии нескольких <nav> на странице.' },
    ],
    example: `<!-- Главное меню -->
<nav aria-label="Главное меню">
  <ul>
    <li><a href="/">Главная</a></li>
    <li><a href="/about">О нас</a></li>
    <li><a href="/blog">Блог</a></li>
    <li><a href="/contact">Контакты</a></li>
  </ul>
</nav>

<!-- Хлебные крошки -->
<nav aria-label="Хлебные крошки">
  <ol>
    <li><a href="/">Главная</a></li>
    <li><a href="/blog">Блог</a></li>
    <li>Статья о HTML</li>
  </ol>
</nav>`,
    notes: [
      'Не оборачивайте в <nav> каждую ссылку — только основные навигационные блоки.',
      'При нескольких <nav> на странице добавляйте aria-label для различия.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/nav',
  },

  map: {
    fullDesc: `<map> определяет карту кликабельных областей для изображения. Связывается с изображением через атрибут name (и атрибут usemap у <img>). Внутри размещаются теги <area>, определяющие кликабельные зоны.`,
    attrs: [
      { name: 'name', desc: 'Уникальное имя карты, на которое ссылается usemap у <img>.' },
    ],
    example: `<img src="map.png" alt="Карта офиса" usemap="#office-map">

<map name="office-map">
  <area shape="rect" coords="10,10,100,100"
        href="/room/1" alt="Переговорная">
  <area shape="circle" coords="200,150,50"
        href="/room/2" alt="Кухня">
  <area shape="poly" coords="300,10,400,50,380,100,320,100"
        href="/room/3" alt="Опенспейс">
</map>`,
    notes: [
      'Карты изображений плохо адаптируются под мобильные устройства — используйте с осторожностью.',
      'Для интерактивных карт лучше использовать CSS-позиционирование или SVG.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/map',
  },

  area: {
    fullDesc: `<area> определяет кликабельную область внутри карты изображения (<map>). Форма области задаётся атрибутом shape, координаты — атрибутом coords. Аналог ссылки для определённой зоны изображения.`,
    attrs: [
      { name: 'shape', desc: 'Форма: rect (прямоугольник), circle (круг), poly (многоугольник), default.' },
      { name: 'coords', desc: 'Координаты в пикселях. Для rect: x1,y1,x2,y2. Для circle: x,y,r. Для poly: x1,y1,x2,y2,...' },
      { name: 'href', desc: 'URL назначения при клике на область.' },
      { name: 'alt', desc: 'Описание области для скринридеров (обязательно при наличии href).' },
      { name: 'target', desc: 'Где открыть ссылку: _blank, _self и др.' },
    ],
    example: `<map name="solar-system">
  <area shape="circle" coords="100,100,30"
        href="/sun" alt="Солнце">
  <area shape="circle" coords="200,100,10"
        href="/earth" alt="Земля">
</map>`,
    notes: [
      'Атрибут alt обязателен для доступности если есть href.',
      'Координаты считаются от верхнего левого угла изображения.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/area',
  },

  // === МЕДИА ===

  img: {
    fullDesc: `<img> встраивает изображение в страницу. Одиночный тег. Атрибут alt обязателен для доступности и SEO: он описывает изображение для скринридеров и отображается, если изображение не загружается. Современные атрибуты loading и decoding помогают оптимизировать загрузку.`,
    attrs: [
      { name: 'src', desc: 'URL изображения.' },
      { name: 'alt', desc: 'Текстовое описание. Пустой alt="" для декоративных изображений.' },
      { name: 'width', desc: 'Ширина в пикселях. Задание помогает избежать CLS (сдвига макета).' },
      { name: 'height', desc: 'Высота в пикселях.' },
      { name: 'loading', desc: '"lazy" — ленивая загрузка. "eager" — загрузка сразу (по умолчанию).' },
      { name: 'decoding', desc: '"async" — асинхронное декодирование. Улучшает производительность.' },
      { name: 'srcset', desc: 'Набор изображений для разных разрешений экрана.' },
      { name: 'sizes', desc: 'Правила выбора изображения из srcset в зависимости от условий.' },
    ],
    example: `<!-- Базовое изображение -->
<img src="photo.jpg" alt="Вид на горы с перевала">

<!-- С оптимизацией производительности -->
<img
  src="photo.jpg"
  alt="Фото команды на конференции"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
>

<!-- Адаптивное изображение -->
<img
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  src="photo-800.jpg"
  alt="Описание изображения"
>`,
    notes: [
      'Всегда указывайте width и height — это предотвращает скачок макета при загрузке (CLS).',
      'loading="lazy" для изображений ниже первого экрана экономит трафик.',
      'Декоративные изображения: alt="" (пустой, но обязательный).',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/img',
  },

  figure: {
    fullDesc: `<figure> оборачивает самостоятельный блок контента, который можно вынести из основного потока — изображение, диаграмму, фрагмент кода, видео, таблицу. Часто содержит <figcaption> с подписью. Может перемещаться по документу без потери смысла.`,
    attrs: [],
    example: `<figure>
  <img src="architecture.png" alt="Схема микросервисной архитектуры">
  <figcaption>Рис. 1. Взаимодействие микросервисов в продакшн-окружении.</figcaption>
</figure>

<figure>
  <pre><code>
    const result = await fetch('/api/data');
    const json = await result.json();
  </code></pre>
  <figcaption>Листинг 2. Получение данных через Fetch API.</figcaption>
</figure>`,
    notes: [
      '<figure> — это «самостоятельный элемент», который мог бы стоять в приложении к статье.',
      '<figcaption> должен быть первым или последним дочерним элементом внутри <figure>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/figure',
  },

  figcaption: {
    fullDesc: `<figcaption> — подпись к содержимому <figure>. Должна быть первым или последним дочерним элементом <figure>. Описывает, объясняет или даёт источник для контента внутри figure.`,
    attrs: [],
    example: `<figure>
  <img src="chart.png" alt="График роста пользователей за 2024 год">
  <figcaption>
    График роста числа пользователей за 2024 год.
    Источник: внутренняя аналитика.
  </figcaption>
</figure>`,
    notes: [
      'Может быть только один <figcaption> на один <figure>.',
      'Alt у изображения внутри figure не должен дублировать figcaption.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/figcaption',
  },

  picture: {
    fullDesc: `<picture> — контейнер для адаптивных изображений. Позволяет задать разные форматы и версии изображения для разных условий: размер экрана, тип дисплея, поддерживаемые форматы. Браузер выбирает первый подходящий <source> или откатывается к <img>.`,
    attrs: [],
    example: `<picture>
  <!-- Современный формат для поддерживающих браузеров -->
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">

  <!-- Разные размеры для разных экранов -->
  <source
    srcset="image-desktop.jpg"
    media="(min-width: 1024px)"
  >

  <!-- Запасной вариант -->
  <img src="image.jpg" alt="Описание изображения" width="800" height="600">
</picture>`,
    notes: [
      'Тег <img> внутри <picture> обязателен — он работает как fallback.',
      'Порядок важен: браузер выбирает первый подходящий <source>.',
      'AVIF > WebP > JPEG по степени сжатия при том же качестве.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/picture',
  },

  source: {
    fullDesc: `<source> задаёт альтернативный источник медиафайла внутри <picture>, <video> или <audio>. Позволяет предлагать несколько форматов — браузер выберет первый, который поддерживает.`,
    attrs: [
      { name: 'src', desc: 'URL файла (для audio/video).' },
      { name: 'srcset', desc: 'Набор URL с дескрипторами ширины (для picture).' },
      { name: 'type', desc: 'MIME-тип: image/webp, video/mp4, audio/ogg и др.' },
      { name: 'media', desc: 'Медиавыражение для выбора источника (для picture).' },
    ],
    example: `<!-- В picture -->
<picture>
  <source srcset="img.webp" type="image/webp">
  <img src="img.jpg" alt="Описание">
</picture>

<!-- В video -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <p>Ваш браузер не поддерживает видео.</p>
</video>`,
    notes: [
      'Браузер перебирает <source> сверху вниз и использует первый поддерживаемый.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/source',
  },

  svg: {
    fullDesc: `<svg> (Scalable Vector Graphics) позволяет встраивать векторную графику прямо в HTML. Векторные изображения не теряют качества при масштабировании. Можно анимировать через CSS и JS. Инлайн-SVG легче стилизовать и лучше для иконок.`,
    attrs: [
      { name: 'viewBox', desc: 'Координатная система: "minX minY width height". Например: "0 0 24 24".' },
      { name: 'width / height', desc: 'Размеры SVG-элемента.' },
      { name: 'xmlns', desc: 'Пространство имён: http://www.w3.org/2000/svg (обязательно в файлах .svg).' },
      { name: 'fill', desc: 'Цвет заливки фигур.' },
      { name: 'stroke', desc: 'Цвет обводки.' },
    ],
    example: `<!-- Простая иконка стрелки -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path
    d="M5 12h14M12 5l7 7-7 7"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
  />
</svg>

<!-- SVG как иконка с наследованием цвета -->
<button style="color: #c8521d;">
  <svg width="20" height="20" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
  </svg>
  Кнопка с иконкой
</button>`,
    notes: [
      'currentColor наследует цвет от CSS — удобно для иконок в тёмной теме.',
      'aria-hidden="true" на декоративных SVG — они не должны читаться скринридером.',
      'Для иконок, несущих смысл, добавьте <title>Описание иконки</title> внутри <svg>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/SVG/Element/svg',
  },

  audio: {
    fullDesc: `<audio> встраивает аудиофайл с встроенным плеером. Атрибут controls показывает стандартные элементы управления. Можно добавить несколько форматов через <source> для максимальной совместимости.`,
    attrs: [
      { name: 'src', desc: 'URL аудиофайла (или используйте <source> внутри).' },
      { name: 'controls', desc: 'Показывает встроенные элементы управления.' },
      { name: 'autoplay', desc: 'Автоматическое воспроизведение (работает только совместно с muted).' },
      { name: 'loop', desc: 'Зацикливание воспроизведения.' },
      { name: 'muted', desc: 'Отключить звук по умолчанию.' },
      { name: 'preload', desc: '"auto" | "metadata" | "none" — стратегия предзагрузки.' },
    ],
    example: `<!-- Простой аудиоплеер -->
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  <p>Ваш браузер не поддерживает тег audio.</p>
</audio>

<!-- Фоновая музыка (только с muted из-за политики браузеров) -->
<audio src="background.mp3" loop muted autoplay></audio>`,
    notes: [
      'autoplay без muted блокируется большинством браузеров для защиты пользователей.',
      'MP3 — самый совместимый формат. OGG — открытый альтернативный формат.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/audio',
  },

  video: {
    fullDesc: `<video> встраивает видеофайл с плеером. Поддерживает несколько форматов через <source>, субтитры через <track>, управление через JavaScript API. Заменил Flash для воспроизведения видео в браузере.`,
    attrs: [
      { name: 'src', desc: 'URL видеофайла.' },
      { name: 'controls', desc: 'Показывает встроенные элементы управления.' },
      { name: 'width / height', desc: 'Размеры плеера в пикселях.' },
      { name: 'poster', desc: 'URL изображения-заглушки до начала воспроизведения.' },
      { name: 'autoplay', desc: 'Автовоспроизведение (нужен muted).' },
      { name: 'muted', desc: 'Без звука по умолчанию.' },
      { name: 'loop', desc: 'Зацикливание.' },
      { name: 'playsinline', desc: 'Воспроизведение на месте на iOS (без открытия полноэкранного плеера).' },
    ],
    example: `<video
  controls
  width="854"
  height="480"
  poster="preview.jpg"
>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <track src="subtitles-ru.vtt" kind="subtitles" srclang="ru" label="Русский">
  <p>Ваш браузер не поддерживает тег video.</p>
</video>

<!-- Фоновое видео -->
<video autoplay muted loop playsinline>
  <source src="hero.mp4" type="video/mp4">
</video>`,
    notes: [
      'playsinline обязателен для автовоспроизведения в Safari на iPhone.',
      'poster улучшает восприятие — пользователь видит стоп-кадр до загрузки видео.',
      'WebM — более эффективное сжатие, но MP4 совместим со всеми браузерами.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/video',
  },

  track: {
    fullDesc: `<track> подключает текстовую дорожку к <video> или <audio>: субтитры, описание, главы. Файл в формате WebVTT (.vtt) содержит временные метки и текст. Критически важен для доступности.`,
    attrs: [
      { name: 'src', desc: 'URL файла субтитров в формате WebVTT.' },
      { name: 'kind', desc: 'Тип: subtitles, captions, descriptions, chapters, metadata.' },
      { name: 'srclang', desc: 'Язык дорожки: ru, en и т.д.' },
      { name: 'label', desc: 'Отображаемое название дорожки в меню плеера.' },
      { name: 'default', desc: 'Атрибут-флаг: эта дорожка включается по умолчанию.' },
    ],
    example: `<video controls>
  <source src="film.mp4" type="video/mp4">

  <track
    src="subtitles-ru.vtt"
    kind="subtitles"
    srclang="ru"
    label="Русский"
    default
  >
  <track
    src="subtitles-en.vtt"
    kind="subtitles"
    srclang="en"
    label="English"
  >
</video>

<!-- Содержимое файла subtitles-ru.vtt: -->
<!--
WEBVTT

00:00:01.000 --> 00:00:04.000
Добро пожаловать в наш сервис.

00:00:05.000 --> 00:00:08.000
Сегодня мы рассмотрим HTML-теги.
-->`,
    notes: [
      'kind="captions" — для субтитров с описанием звуков (для слабослышащих).',
      'kind="descriptions" — звуковое описание видеоряда (для слабовидящих).',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/track',
  },

  canvas: {
    fullDesc: `<canvas> создаёт область для рисования растровой графики через JavaScript (2D Canvas API или WebGL). Используется для игр, визуализации данных, обработки изображений, анимаций. Без JavaScript элемент отображается пустым.`,
    attrs: [
      { name: 'width', desc: 'Ширина холста в пикселях (по умолчанию 300).' },
      { name: 'height', desc: 'Высота холста в пикселях (по умолчанию 150).' },
    ],
    example: `<canvas id="myCanvas" width="400" height="300">
  Ваш браузер не поддерживает canvas.
</canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Прямоугольник
  ctx.fillStyle = '#c8521d';
  ctx.fillRect(50, 50, 100, 100);

  // Круг
  ctx.beginPath();
  ctx.arc(250, 100, 50, 0, Math.PI * 2);
  ctx.fillStyle = '#1a1d1f';
  ctx.fill();

  // Текст
  ctx.font = '20px sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText('Hello Canvas!', 60, 200);
</script>`,
    notes: [
      'canvas — растровый. SVG — векторный. Для иконок и логотипов лучше SVG.',
      'Размер canvas задавайте атрибутами, а не CSS — иначе изображение будет размытым.',
      'WebGL открывает 3D-возможности через тот же <canvas>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/canvas',
  },

  iframe: {
    fullDesc: `<iframe> (Inline Frame) встраивает другую HTML-страницу внутрь текущей. Используется для YouTube-видео, карт Google/Yandex, виджетов оплаты, встроенных документов. Каждый iframe — это отдельный браузерный контекст.`,
    attrs: [
      { name: 'src', desc: 'URL встраиваемой страницы.' },
      { name: 'width / height', desc: 'Размеры фрейма.' },
      { name: 'title', desc: 'Описание содержимого для скринридеров (обязательно!).' },
      { name: 'allow', desc: 'Разрешения: camera, microphone, fullscreen, payment и др.' },
      { name: 'sandbox', desc: 'Ограничения безопасности. Значения: allow-scripts, allow-forms и др.' },
      { name: 'loading', desc: '"lazy" — ленивая загрузка iframe.' },
    ],
    example: `<!-- YouTube видео -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Название видео"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen"
  loading="lazy"
></iframe>

<!-- Яндекс.Карты -->
<iframe
  src="https://yandex.ru/map-widget/v1/?ll=37.6,55.75&z=12"
  width="600"
  height="400"
  title="Карта Москвы"
></iframe>

<!-- Изолированный виджет -->
<iframe
  src="widget.html"
  sandbox="allow-scripts allow-forms"
  title="Форма подписки"
></iframe>`,
    notes: [
      'Атрибут title обязателен для доступности — скринридеры его озвучивают.',
      'sandbox без значений = максимальные ограничения. Добавляйте только нужные allow-*.',
      'loading="lazy" экономит ресурсы для iframe ниже первого экрана.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/iframe',
  },

  // === СПИСКИ И ТАБЛИЦЫ ===

  ul: {
    fullDesc: `<ul> (Unordered List) создаёт маркированный список. Порядок пунктов не имеет значения. Прямые дочерние элементы — только <li>. Браузеры отображают маркеры по умолчанию, но их легко изменить через CSS.`,
    attrs: [],
    example: `<ul>
  <li>HTML — язык разметки</li>
  <li>CSS — язык стилей</li>
  <li>JavaScript — язык программирования</li>
</ul>

<!-- Вложенные списки -->
<ul>
  <li>Фрукты
    <ul>
      <li>Яблоко</li>
      <li>Груша</li>
    </ul>
  </li>
  <li>Овощи</li>
</ul>`,
    notes: [
      'Внутри <ul> могут быть только <li> — не кладите другие теги напрямую.',
      'Маркеры убираются так: ul { list-style: none; padding: 0; }',
      'Навигационные меню традиционно делаются на <ul> + <li> + <a>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/ul',
  },

  ol: {
    fullDesc: `<ol> (Ordered List) создаёт нумерованный список. Порядок пунктов важен. Атрибуты start и reversed позволяют управлять нумерацией. Атрибут type задаёт тип маркера: цифры, буквы, римские цифры.`,
    attrs: [
      { name: 'start', desc: 'Начальный номер. Например: start="5" начнёт список с 5.' },
      { name: 'reversed', desc: 'Флаг: нумерация в обратном порядке.' },
      { name: 'type', desc: 'Тип: 1 (цифры), a (буквы), A (заглавные), i (рим. цифры), I (заглавные рим.).' },
    ],
    example: `<ol>
  <li>Установить Node.js</li>
  <li>Создать проект: npm init</li>
  <li>Установить зависимости</li>
  <li>Запустить сервер</li>
</ol>

<!-- Список с буквами -->
<ol type="a">
  <li>Вариант А</li>
  <li>Вариант Б</li>
</ol>

<!-- Продолжение нумерации -->
<ol start="6">
  <li>Шестой пункт</li>
  <li>Седьмой пункт</li>
</ol>`,
    notes: [
      'Используйте <ol> когда порядок важен (инструкции, рейтинги, шаги алгоритма).',
      'Атрибут type меняет только визуальное отображение, а не значение атрибута value у <li>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/ol',
  },

  li: {
    fullDesc: `<li> — элемент списка внутри <ul>, <ol> или <menu>. Может содержать любой поточный контент, включая другие списки, заголовки, изображения.`,
    attrs: [
      { name: 'value', desc: 'Числовой номер пункта (только для <ol>). Переопределяет счётчик.' },
    ],
    example: `<ul>
  <li>Простой пункт</li>
  <li>
    <strong>Пункт со вложением</strong>
    <ul>
      <li>Вложенный пункт</li>
    </ul>
  </li>
  <li>
    <img src="icon.png" alt=""> Пункт с иконкой
  </li>
</ul>`,
    notes: [
      'Атрибут value работает только для <li> внутри <ol>.',
      'В <ul> порядок не важен — используйте <ol> если порядок значим.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/li',
  },

  dl: {
    fullDesc: `<dl> (Description List) — список определений: пары «термин → описание». Используется для глоссариев, FAQ, метаданных (ключ-значение). Один <dt> может иметь несколько <dd>.`,
    attrs: [],
    example: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — язык разметки веб-страниц.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — язык стилей для оформления HTML.</dd>

  <dt>JavaScript</dt>
  <dd>Язык программирования для интерактивности в браузере.</dd>
  <dd>Также используется на сервере (Node.js).</dd>
</dl>`,
    notes: [
      'Один термин (<dt>) может иметь несколько описаний (<dd>).',
      'Хорошо подходит для FAQ (вопрос = dt, ответ = dd) и словарей.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/dl',
  },

  dt: {
    fullDesc: `<dt> (Description Term) — термин в списке определений <dl>. Обычно отображается жирным. Может идти несколько <dt> подряд перед одним <dd>.`,
    attrs: [],
    example: `<dl>
  <dt>Семантика</dt>
  <dt>Semantic HTML</dt>
  <dd>Использование HTML-тегов по их смысловому предназначению.</dd>
</dl>`,
    notes: [
      'Допустимо несколько <dt> перед одним <dd> (синонимы одного понятия).',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/dt',
  },

  dd: {
    fullDesc: `<dd> (Description Details) — описание или определение для термина <dt> в списке <dl>. Браузеры отображают его с отступом. Может содержать любой поточный контент.`,
    attrs: [],
    example: `<dl>
  <dt>API</dt>
  <dd>
    Application Programming Interface — набор правил и протоколов,
    позволяющих приложениям общаться между собой.
  </dd>
</dl>`,
    notes: [
      'Один <dt> может иметь несколько <dd> — разные аспекты определения.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/dd',
  },

  table: {
    fullDesc: `<table> — контейнер для табличных данных, организованных строками и столбцами. Используйте таблицы только для настоящих данных, а не для макета страницы. Правильная семантическая таблица важна для доступности.`,
    attrs: [],
    example: `<table>
  <caption>Сравнение браузеров</caption>
  <thead>
    <tr>
      <th scope="col">Браузер</th>
      <th scope="col">Доля рынка</th>
      <th scope="col">Движок</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chrome</th>
      <td>65%</td>
      <td>Blink</td>
    </tr>
    <tr>
      <th scope="row">Firefox</th>
      <td>4%</td>
      <td>Gecko</td>
    </tr>
  </tbody>
</table>`,
    notes: [
      'Не используйте <table> для макета страницы — для этого есть Flexbox и Grid.',
      'scope="col/row" на <th> важен для скринридеров.',
      'Добавляйте <caption> — он описывает содержимое таблицы.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/table',
  },

  thead: {
    fullDesc: `<thead> группирует строки заголовков таблицы. При печати длинной таблицы браузеры могут повторять <thead> на каждой странице. Улучшает семантику и доступность.`,
    attrs: [],
    example: `<table>
  <thead>
    <tr>
      <th>Имя</th>
      <th>Email</th>
      <th>Роль</th>
    </tr>
  </thead>
  <tbody>...</tbody>
</table>`,
    notes: [
      'Может быть только один <thead> в таблице.',
      'Не обязателен, но хорошая практика для любой таблицы с заголовками.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/thead',
  },

  tbody: {
    fullDesc: `<tbody> группирует строки основного содержимого таблицы. Если не указан явно, браузер всё равно создаёт его в DOM. В одной таблице может быть несколько <tbody> для группировки связанных данных.`,
    attrs: [],
    example: `<table>
  <thead>...</thead>
  <tbody>
    <tr><td>Январь</td><td>1000</td></tr>
    <tr><td>Февраль</td><td>1200</td></tr>
  </tbody>
  <tbody>
    <tr><td>Итого Q1</td><td>2200</td></tr>
  </tbody>
</table>`,
    notes: [
      'Несколько <tbody> удобны для визуальной группировки разделов таблицы через CSS.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/tbody',
  },

  tfoot: {
    fullDesc: `<tfoot> группирует строки итогов в нижней части таблицы. Размещается после <tbody> в разметке, но может отображаться внизу таблицы при скролле. При печати браузеры могут повторять <tfoot> на каждой странице.`,
    attrs: [],
    example: `<table>
  <thead>
    <tr><th>Товар</th><th>Цена</th><th>Количество</th></tr>
  </thead>
  <tbody>
    <tr><td>Книга</td><td>500 ₽</td><td>2</td></tr>
    <tr><td>Ручка</td><td>50 ₽</td><td>5</td></tr>
  </tbody>
  <tfoot>
    <tr><th>Итого</th><td>1250 ₽</td><td>7</td></tr>
  </tfoot>
</table>`,
    notes: [
      'В разметке <tfoot> следует после <tbody>, но отображается внизу таблицы.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/tfoot',
  },

  tr: {
    fullDesc: `<tr> (Table Row) — строка таблицы. Содержит ячейки <td> (данные) и <th> (заголовки). Может находиться внутри <thead>, <tbody> или <tfoot>.`,
    attrs: [],
    example: `<tr>
  <th scope="row">Иван</th>
  <td>ivan@example.com</td>
  <td>Разработчик</td>
</tr>`,
    notes: [
      'Прямые дочерние элементы <tr> — только <td> и <th>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/tr',
  },

  th: {
    fullDesc: `<th> — ячейка-заголовок таблицы. Семантически обозначает, что содержимое является заголовком для строки или столбца. Атрибут scope указывает, к чему относится заголовок. По умолчанию браузеры отображают его жирным и по центру.`,
    attrs: [
      { name: 'scope', desc: '"col" — заголовок столбца, "row" — заголовок строки, "colgroup"/"rowgroup" — группы.' },
      { name: 'colspan', desc: 'Объединение нескольких столбцов.' },
      { name: 'rowspan', desc: 'Объединение нескольких строк.' },
      { name: 'abbr', desc: 'Сокращённая версия заголовка для скринридеров.' },
    ],
    example: `<table>
  <tr>
    <th scope="col">Имя</th>
    <th scope="col">Возраст</th>
  </tr>
  <tr>
    <th scope="row">Иван</th>
    <td>25</td>
  </tr>
</table>`,
    notes: [
      'Атрибут scope критически важен для доступности таблиц.',
      'colspan и rowspan позволяют создавать сложные объединённые ячейки.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/th',
  },

  td: {
    fullDesc: `<td> (Table Data) — обычная ячейка с данными в таблице. Находится внутри <tr>. Атрибуты colspan и rowspan позволяют ячейке занимать несколько столбцов или строк.`,
    attrs: [
      { name: 'colspan', desc: 'Число столбцов, которые занимает ячейка.' },
      { name: 'rowspan', desc: 'Число строк, которые занимает ячейка.' },
      { name: 'headers', desc: 'ID заголовков, к которым относится ячейка (для сложных таблиц).' },
    ],
    example: `<table>
  <tr>
    <td colspan="2">Объединённая ячейка (два столбца)</td>
  </tr>
  <tr>
    <td>Ячейка 1</td>
    <td>Ячейка 2</td>
  </tr>
</table>`,
    notes: [
      'Не злоупотребляйте colspan/rowspan — это усложняет поддержку и доступность.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/td',
  },

  caption: {
    fullDesc: `<caption> задаёт заголовок или описание таблицы. Должен быть первым дочерним элементом <table>. Важен для доступности: скринридеры читают его перед содержимым таблицы.`,
    attrs: [],
    example: `<table>
  <caption>Расписание поездов Москва — Санкт-Петербург</caption>
  <thead>
    <tr><th>Поезд</th><th>Отправление</th><th>Прибытие</th></tr>
  </thead>
  <tbody>
    <tr><td>Сапсан</td><td>06:45</td><td>10:20</td></tr>
  </tbody>
</table>`,
    notes: [
      '<caption> позиционируется через CSS caption-side: top (по умолчанию) или bottom.',
      'Заменяет необходимость в дополнительном параграфе перед таблицей.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/caption',
  },

  colgroup: {
    fullDesc: `<colgroup> группирует столбцы таблицы для применения общего оформления через CSS. Содержит теги <col>, каждый из которых соответствует одному или нескольким столбцам.`,
    attrs: [
      { name: 'span', desc: 'Число столбцов, к которым применяется colgroup.' },
    ],
    example: `<table>
  <colgroup>
    <col style="background-color: #f5f5f5">
    <col span="2" style="background-color: #e8f4f8">
  </colgroup>
  <tr>
    <th>Имя</th><th>Оценка 1</th><th>Оценка 2</th>
  </tr>
  <tr>
    <td>Иван</td><td>5</td><td>4</td>
  </tr>
</table>`,
    notes: [
      'CSS-свойств, которые работают на <col>/<colgroup>, немного: background, width, border, visibility.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/colgroup',
  },

  col: {
    fullDesc: `<col> — одиночный тег, настраивающий отдельный столбец или группу столбцов внутри <colgroup>. Позволяет применять стили к целому столбцу без изменения каждой ячейки.`,
    attrs: [
      { name: 'span', desc: 'Количество столбцов, к которым применяется <col>.' },
    ],
    example: `<table>
  <colgroup>
    <col>
    <col style="width: 120px; background: #fffde7">
    <col>
  </colgroup>
  <tr>
    <td>A1</td><td>B1 (выделен)</td><td>C1</td>
  </tr>
</table>`,
    notes: [
      'Работает только внутри <colgroup>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/col',
  },

  // === СЕМАНТИКА ===

  header: {
    fullDesc: `<header> обозначает вводный блок для страницы или раздела. Обычно содержит логотип, заголовок, навигацию, поиск. Может использоваться несколько раз на странице — как для всего документа, так и внутри <article> или <section>.`,
    attrs: [],
    example: `<!-- Шапка сайта -->
<header>
  <a href="/" class="logo">МойСайт</a>
  <nav>
    <a href="/about">О нас</a>
    <a href="/blog">Блог</a>
  </nav>
  <button>Войти</button>
</header>

<!-- Заголовок статьи -->
<article>
  <header>
    <h2>Заголовок статьи</h2>
    <p>Автор: <a href="/author">Иван</a> · 15 января 2024</p>
  </header>
  <p>Текст статьи...</p>
</article>`,
    notes: [
      'На одной странице может быть несколько <header>.',
      'Внутри <header> нельзя вкладывать другой <header> или <footer>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/header',
  },

  footer: {
    fullDesc: `<footer> обозначает завершающий блок страницы или раздела. Обычно содержит информацию об авторе, копирайт, ссылки на связанные страницы. Как и <header>, может использоваться многократно.`,
    attrs: [],
    example: `<!-- Подвал сайта -->
<footer>
  <p>© 2024 МойСайт. Все права защищены.</p>
  <nav>
    <a href="/privacy">Политика конфиденциальности</a>
    <a href="/terms">Условия использования</a>
  </nav>
  <address>
    <a href="mailto:hello@example.com">hello@example.com</a>
  </address>
</footer>

<!-- Футер статьи -->
<article>
  <p>Текст статьи...</p>
  <footer>
    <p>Опубликовано: <time datetime="2024-01-15">15 января 2024</time></p>
    <p>Теги: <a href="/tags/html">HTML</a>, <a href="/tags/css">CSS</a></p>
  </footer>
</article>`,
    notes: [
      'Нельзя вкладывать <footer> внутрь другого <footer> или <header>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/footer',
  },

  main: {
    fullDesc: `<main> обозначает основное уникальное содержимое страницы. На странице должен быть только один <main>, и он не должен вкладываться в <article>, <aside>, <header>, <footer> или <nav>. Скринридеры используют его для перехода к основному контенту.`,
    attrs: [],
    example: `<body>
  <header>Шапка сайта</header>

  <main>
    <h1>Заголовок основного контента</h1>
    <p>Уникальный контент страницы...</p>
  </main>

  <aside>Боковая панель</aside>
  <footer>Подвал сайта</footer>
</body>`,
    notes: [
      'Только один <main> на страницу (видимый). Второй может быть с hidden.',
      'Многие сайты добавляют <a href="#main">Перейти к основному контенту</a> перед <header> — для доступности.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/main',
  },

  section: {
    fullDesc: `<section> — тематически самостоятельный раздел документа, который обычно имеет заголовок. В отличие от <div>, несёт смысловую нагрузку. Используется для глав, вкладок, нумерованных разделов страницы.`,
    attrs: [
      { name: 'aria-label', desc: 'Описание раздела если нет заголовка.' },
      { name: 'aria-labelledby', desc: 'ID заголовка, описывающего раздел.' },
    ],
    example: `<article>
  <h1>Руководство по HTML</h1>

  <section>
    <h2>Введение</h2>
    <p>HTML — это...</p>
  </section>

  <section>
    <h2>Основные теги</h2>
    <p>Список тегов...</p>
  </section>

  <section>
    <h2>Заключение</h2>
    <p>Теперь вы знаете...</p>
  </section>
</article>`,
    notes: [
      'Если раздел не имеет заголовка — возможно, <div> подойдёт лучше.',
      'Не используйте <section> как универсальный контейнер вместо <div>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/section',
  },

  article: {
    fullDesc: `<article> — самодостаточный независимый блок контента, который можно распространять отдельно: статья, пост в блоге, комментарий, карточка товара, виджет. Проверка: «имело бы это смысл на другой странице или в RSS-ленте?».`,
    attrs: [],
    example: `<!-- Статья в блоге -->
<article>
  <header>
    <h2><a href="/post/1">Как работают CSS Grid</a></h2>
    <time datetime="2024-01-15">15 января 2024</time>
  </header>
  <p>CSS Grid — это двумерная система раскладки...</p>
  <footer>
    <a href="/post/1">Читать полностью →</a>
  </footer>
</article>

<!-- Комментарий -->
<article>
  <header>
    <strong>Иван Петров</strong>
    <time datetime="2024-01-16T14:30">16 янв, 14:30</time>
  </header>
  <p>Отличная статья!</p>
</article>`,
    notes: [
      '<article> может содержать <header>, <footer>, другие <article> (вложенные комментарии).',
      'Можно вкладывать <article> в <article> — например, комментарии к статье.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/article',
  },

  aside: {
    fullDesc: `<aside> — содержимое, косвенно связанное с основным текстом. Не является второстепенным — важен контекст: это то, что можно убрать, не нарушив основной поток. Сайдбар, врезка, цитата-выноска, реклама, биография автора.`,
    attrs: [],
    example: `<article>
  <h2>История интернета</h2>
  <p>В 1969 году ARPANET...</p>

  <aside>
    <h3>Интересный факт</h3>
    <p>Первое сообщение, отправленное через ARPANET, было «lo» —
    компьютер упал после двух букв слова «login».</p>
  </aside>

  <p>К 1990 году...</p>
</article>

<!-- Сайдбар -->
<aside aria-label="Популярные статьи">
  <h2>Читайте также</h2>
  <ul>...</ul>
</aside>`,
    notes: [
      'Тест: «можно ли убрать этот блок без потери смысла основного текста?» — если да, это <aside>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/aside',
  },

  details: {
    fullDesc: `<details> создаёт раскрывающийся блок с дополнительной информацией. Работает без JavaScript — браузер обрабатывает открытие/закрытие нативно. Содержит <summary> (заголовок-переключатель) и любое содержимое.`,
    attrs: [
      { name: 'open', desc: 'Флаг: блок раскрыт по умолчанию.' },
    ],
    example: `<details>
  <summary>Показать пример кода</summary>
  <pre><code>const x = 42;
console.log(x);</code></pre>
</details>

<details open>
  <summary>Технические характеристики (раскрыто по умолчанию)</summary>
  <dl>
    <dt>Процессор</dt><dd>Apple M3</dd>
    <dt>ОЗУ</dt><dd>16 ГБ</dd>
  </dl>
</details>`,
    notes: [
      'Не требует JavaScript — чистый HTML-аккордеон.',
      'Атрибут open может управляться через JS: element.open = true/false.',
      'Событие toggle срабатывает при открытии/закрытии.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/details',
  },

  summary: {
    fullDesc: `<summary> — заголовок-переключатель для блока <details>. При клике на него блок открывается или закрывается. По умолчанию отображается с треугольником раскрытия. Должен быть первым дочерним элементом <details>.`,
    attrs: [],
    example: `<details>
  <summary>Почему HTML важен?</summary>
  <p>
    HTML — основа любого сайта. Без него нет структуры,
    а значит, нет ни стилей, ни интерактивности.
  </p>
</details>`,
    notes: [
      'Треугольник можно убрать через CSS: summary { list-style: none; } или summary::marker { display: none; }',
      'Если <summary> нет, браузер создаёт дефолтный заголовок «Подробности».',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/summary',
  },

  dialog: {
    fullDesc: `<dialog> — нативный HTML-элемент для диалоговых и модальных окон. Поддерживается без JavaScript для открытия, но JS нужен для управления. Метод showModal() создаёт настоящее модальное окно с backdrop и ловушкой фокуса.`,
    attrs: [
      { name: 'open', desc: 'Флаг: диалог открыт (не рекомендуется устанавливать напрямую для модального).' },
    ],
    example: `<dialog id="my-dialog">
  <h2>Подтверждение</h2>
  <p>Вы уверены, что хотите удалить запись?</p>
  <div>
    <button id="confirm-btn">Удалить</button>
    <button id="cancel-btn">Отмена</button>
  </div>
</dialog>

<button id="open-btn">Открыть диалог</button>

<script>
  const dialog = document.getElementById('my-dialog');

  document.getElementById('open-btn')
    .addEventListener('click', () => dialog.showModal());

  document.getElementById('cancel-btn')
    .addEventListener('click', () => dialog.close());

  document.getElementById('confirm-btn')
    .addEventListener('click', () => {
      // действие подтверждено
      dialog.close('confirmed');
    });
</script>`,
    notes: [
      'showModal() создаёт модальное окно с ::backdrop. show() — немодальное.',
      'Нативный <dialog> автоматически ловит фокус внутри — это улучшает доступность.',
      'ESC автоматически закрывает модальный диалог.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog',
  },

  template: {
    fullDesc: `<template> содержит HTML-разметку, которая не рендерится при загрузке страницы и не исполняет скрипты. Клонируется и вставляется через JavaScript для создания повторяющихся элементов. Предшественник компонентного подхода в нативном HTML.`,
    attrs: [],
    example: `<template id="card-template">
  <div class="card">
    <h3 class="card__title"></h3>
    <p class="card__description"></p>
    <button class="card__button">Подробнее</button>
  </div>
</template>

<div id="cards-container"></div>

<script>
  const template = document.getElementById('card-template');
  const container = document.getElementById('cards-container');

  const items = [
    { title: 'Карточка 1', desc: 'Описание первой' },
    { title: 'Карточка 2', desc: 'Описание второй' },
  ];

  items.forEach(item => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.card__title').textContent = item.title;
    clone.querySelector('.card__description').textContent = item.desc;
    container.appendChild(clone);
  });
</script>`,
    notes: [
      'Содержимое template.content — это DocumentFragment, не обычный DOM.',
      'Используется совместно с Web Components и Shadow DOM.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/template',
  },

  // === ФОРМЫ ===

  form: {
    fullDesc: `<form> — контейнер для полей ввода данных, которые отправляются на сервер. Атрибуты action и method определяют, куда и как отправляются данные. Атрибут novalidate отключает встроенную браузерную валидацию.`,
    attrs: [
      { name: 'action', desc: 'URL, куда отправляются данные формы.' },
      { name: 'method', desc: '"get" — данные в URL. "post" — в теле запроса (для чувствительных данных и файлов).' },
      { name: 'enctype', desc: 'Для загрузки файлов: multipart/form-data.' },
      { name: 'novalidate', desc: 'Отключает встроенную валидацию браузера.' },
      { name: 'autocomplete', desc: '"on"/"off" — включить/отключить автозаполнение формы.' },
    ],
    example: `<!-- Форма входа -->
<form action="/login" method="post">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Пароль</label>
  <input type="password" id="password" name="password" required>

  <button type="submit">Войти</button>
</form>

<!-- Форма с файлом -->
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" accept="image/*">
  <button type="submit">Загрузить</button>
</form>`,
    notes: [
      'Файлы загружаются только через method="post" + enctype="multipart/form-data".',
      'Пароли и личные данные — только method="post", никогда "get".',
      'Для одностраничных приложений отправку формы обычно перехватывают через JavaScript event.preventDefault().',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/form',
  },

  input: {
    fullDesc: `<input> — универсальный элемент ввода данных. Одиночный тег. Поведение полностью определяется атрибутом type: текст, число, дата, файл, цвет, чекбокс, радиокнопка и ещё более десяти вариантов.`,
    attrs: [
      { name: 'type', desc: 'Тип поля: text, email, password, number, tel, url, date, file, checkbox, radio, range, color, submit, reset, hidden, search, month, week, datetime-local.' },
      { name: 'name', desc: 'Ключ, под которым значение отправляется на сервер.' },
      { name: 'value', desc: 'Значение по умолчанию (или текущее значение).' },
      { name: 'placeholder', desc: 'Подсказка внутри поля до ввода.' },
      { name: 'required', desc: 'Поле обязательно для заполнения.' },
      { name: 'disabled', desc: 'Поле неактивно — не отправляется с формой.' },
      { name: 'readonly', desc: 'Только для чтения — отправляется, но не редактируется.' },
      { name: 'min / max', desc: 'Минимальное/максимальное значение (для числовых и дат).' },
      { name: 'step', desc: 'Шаг изменения значения (для числовых).' },
      { name: 'pattern', desc: 'Регулярное выражение для валидации.' },
      { name: 'autocomplete', desc: 'Подсказки автозаполнения: email, current-password, username и др.' },
    ],
    example: `<!-- Текст, email, пароль -->
<input type="text" name="username" placeholder="Имя пользователя" required>
<input type="email" name="email" placeholder="your@email.com" autocomplete="email">
<input type="password" name="password" minlength="8">

<!-- Числа и диапазон -->
<input type="number" name="age" min="0" max="150" step="1">
<input type="range" name="volume" min="0" max="100" value="50">

<!-- Дата и время -->
<input type="date" name="birthday">
<input type="datetime-local" name="event-time">

<!-- Файл -->
<input type="file" name="photo" accept="image/*" multiple>

<!-- Чекбокс и радио -->
<input type="checkbox" name="agree" id="agree">
<input type="radio" name="color" value="red" id="red">

<!-- Скрытое поле -->
<input type="hidden" name="csrf-token" value="abc123">`,
    notes: [
      'Всегда используйте <label> с input — это критично для доступности.',
      'autocomplete="off" на формах входа уже не работает в большинстве браузеров.',
      'Мобильные браузеры показывают разную клавиатуру в зависимости от type.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/input',
  },

  textarea: {
    fullDesc: `<textarea> — многострочное текстовое поле. Размер задаётся атрибутами rows и cols или через CSS. В отличие от <input type="text">, содержит текст между тегами, а не в атрибуте value.`,
    attrs: [
      { name: 'name', desc: 'Имя поля для отправки на сервер.' },
      { name: 'rows', desc: 'Число видимых строк.' },
      { name: 'cols', desc: 'Ширина в символах.' },
      { name: 'placeholder', desc: 'Подсказка до ввода.' },
      { name: 'required', desc: 'Обязательное поле.' },
      { name: 'maxlength', desc: 'Максимальное число символов.' },
      { name: 'resize', desc: 'Управляется через CSS: resize: none | vertical | horizontal | both.' },
    ],
    example: `<label for="message">Сообщение</label>
<textarea
  id="message"
  name="message"
  rows="5"
  placeholder="Введите ваше сообщение..."
  maxlength="500"
  required
></textarea>`,
    notes: [
      'Текст по умолчанию пишется между тегами, а не в value: <textarea>текст</textarea>.',
      'Пользователь может изменять размер textarea. Запрет: textarea { resize: none; }',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/textarea',
  },

  button: {
    fullDesc: `<button> — кнопка для взаимодействия. Тип type определяет поведение: submit отправляет форму, reset сбрасывает, button не делает ничего (для JavaScript). В отличие от <input type="submit">, может содержать HTML-контент: иконки, форматированный текст.`,
    attrs: [
      { name: 'type', desc: '"submit" (по умолчанию) — отправить форму. "reset" — сбросить форму. "button" — без действия.' },
      { name: 'disabled', desc: 'Кнопка неактивна.' },
      { name: 'form', desc: 'ID формы, с которой связана кнопка (если вне формы).' },
      { name: 'name / value', desc: 'Передаются при отправке формы (для кнопки типа submit).' },
    ],
    example: `<!-- Кнопка отправки формы -->
<button type="submit">Отправить</button>

<!-- Кнопка сброса -->
<button type="reset">Очистить форму</button>

<!-- JavaScript-кнопка с иконкой -->
<button type="button" onclick="openModal()">
  <svg>...</svg>
  Открыть настройки
</button>

<!-- Кнопка вне формы -->
<button type="submit" form="contact-form">
  Отправить форму
</button>
<form id="contact-form" action="/contact">...</form>`,
    notes: [
      'Внутри <form> кнопка без type работает как type="submit" — будьте осторожны!',
      'Не используйте <a> как кнопку и <button> как ссылку — у них разная семантика и доступность.',
      '<button> стилизуется через CSS легче, чем <input type="submit">.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/button',
  },

  select: {
    fullDesc: `<select> — раскрывающийся список вариантов выбора. Содержит <option> и <optgroup>. Атрибут multiple позволяет выбирать несколько вариантов (Ctrl/Cmd + клик). Атрибут size показывает несколько строк без раскрытия.`,
    attrs: [
      { name: 'name', desc: 'Имя для отправки на сервер.' },
      { name: 'multiple', desc: 'Позволяет выбрать несколько вариантов.' },
      { name: 'size', desc: 'Число видимых строк (превращает в список прокрутки).' },
      { name: 'required', desc: 'Обязательный выбор.' },
      { name: 'disabled', desc: 'Список неактивен.' },
    ],
    example: `<label for="city">Город</label>
<select id="city" name="city" required>
  <option value="">Выберите город...</option>
  <optgroup label="Россия">
    <option value="msk">Москва</option>
    <option value="spb">Санкт-Петербург</option>
  </optgroup>
  <optgroup label="Беларусь">
    <option value="mns">Минск</option>
  </optgroup>
</select>`,
    notes: [
      'Стилизация <select> ограничена на разных ОС. Для полного контроля — custom select на JS.',
      'Первый option с пустым value — хорошая практика для обязательного выбора.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/select',
  },

  option: {
    fullDesc: `<option> — один пункт внутри <select> или <datalist>. Атрибут value — это то, что отправляется на сервер. Если value не задан, отправляется текстовое содержимое. Атрибут selected задаёт выбранный по умолчанию вариант.`,
    attrs: [
      { name: 'value', desc: 'Значение, отправляемое на сервер.' },
      { name: 'selected', desc: 'Выбран по умолчанию.' },
      { name: 'disabled', desc: 'Пункт недоступен для выбора.' },
    ],
    example: `<select name="size">
  <option value="" disabled selected>Выберите размер</option>
  <option value="s">S — маленький</option>
  <option value="m" selected>M — средний (по умолчанию)</option>
  <option value="l">L — большой</option>
  <option value="xl" disabled>XL — нет в наличии</option>
</select>`,
    notes: [
      'disabled + selected на первом option — частый паттерн для плейсхолдера.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/option',
  },

  optgroup: {
    fullDesc: `<optgroup> группирует связанные пункты <option> внутри <select>. Группа отображается с заголовком (атрибут label) и небольшим отступом. Сам <optgroup> не выбирается.`,
    attrs: [
      { name: 'label', desc: 'Название группы (обязательный).' },
      { name: 'disabled', desc: 'Делает все пункты группы недоступными.' },
    ],
    example: `<select name="language">
  <optgroup label="Фронтенд">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </optgroup>
  <optgroup label="Бэкенд">
    <option value="python">Python</option>
    <option value="go">Go</option>
  </optgroup>
</select>`,
    notes: [
      '<optgroup> не может быть вложен в другой <optgroup>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/optgroup',
  },

  label: {
    fullDesc: `<label> связывает текстовую подпись с элементом формы. Клик на <label> активирует связанный элемент. Это критично для доступности: скринридеры зачитывают label при фокусе на поле. Связывание — через атрибут for (равен id поля) или вложением.`,
    attrs: [
      { name: 'for', desc: 'ID связанного элемента формы.' },
    ],
    example: `<!-- Метод 1: атрибут for -->
<label for="username">Имя пользователя</label>
<input type="text" id="username" name="username">

<!-- Метод 2: вложение -->
<label>
  Запомнить меня
  <input type="checkbox" name="remember">
</label>

<!-- Для чекбоксов и радио — вложение часто удобнее -->
<label>
  <input type="radio" name="color" value="red"> Красный
</label>
<label>
  <input type="radio" name="color" value="blue"> Синий
</label>`,
    notes: [
      'Никогда не используйте placeholder вместо label — placeholder исчезает при вводе.',
      'Клик на label переносит фокус на связанное поле или переключает чекбокс.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/label',
  },

  fieldset: {
    fullDesc: `<fieldset> группирует связанные элементы формы визуальной рамкой. Часто используется для группы радиокнопок или чекбоксов. Атрибут disabled отключает все поля группы разом. Внутри первым обычно идёт <legend>.`,
    attrs: [
      { name: 'disabled', desc: 'Отключает все дочерние поля формы.' },
      { name: 'form', desc: 'ID формы, которой принадлежит fieldset.' },
      { name: 'name', desc: 'Имя группы.' },
    ],
    example: `<fieldset>
  <legend>Способ доставки</legend>
  <label>
    <input type="radio" name="delivery" value="courier"> Курьером
  </label>
  <label>
    <input type="radio" name="delivery" value="pickup"> Самовывоз
  </label>
  <label>
    <input type="radio" name="delivery" value="post"> Почтой России
  </label>
</fieldset>

<!-- Отключить группу целиком -->
<fieldset disabled>
  <legend>Платёжные данные (недоступно)</legend>
  <input type="text" placeholder="Номер карты">
</fieldset>`,
    notes: [
      'disabled на <fieldset> отключает сразу все вложенные поля — удобно для условных блоков.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/fieldset',
  },

  legend: {
    fullDesc: `<legend> — заголовок группы <fieldset>. Должен быть первым дочерним элементом. Скринридеры читают его перед каждым полем внутри fieldset, предоставляя контекст.`,
    attrs: [],
    example: `<fieldset>
  <legend>Личные данные</legend>
  <label for="name">Имя</label>
  <input type="text" id="name" name="name">

  <label for="birth">Дата рождения</label>
  <input type="date" id="birth" name="birth">
</fieldset>`,
    notes: [
      'Скринридер озвучивает legend перед каждым полем: «Личные данные: Имя».',
      'Стилизовать <legend> сложнее, чем обычные заголовки — помните об этом при дизайне.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/legend',
  },

  datalist: {
    fullDesc: `<datalist> содержит список <option> с подсказками для автозаполнения текстового поля. Связывается с <input> через атрибут list. Пользователь может выбрать вариант из списка или ввести своё значение — в отличие от <select>.`,
    attrs: [
      { name: 'id', desc: 'ID, на который ссылается атрибут list у <input>.' },
    ],
    example: `<label for="browser">Любимый браузер</label>
<input type="text" id="browser" list="browsers-list" name="browser">

<datalist id="browsers-list">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
  <option value="Opera">
</datalist>`,
    notes: [
      'Отличие от <select>: пользователь может ввести значение, которого нет в списке.',
      'Подходит для городов, имён, тегов — везде, где нужна подсказка, но не жёсткий выбор.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/datalist',
  },

  output: {
    fullDesc: `<output> отображает результат вычисления или действия пользователя с формой. Обычно обновляется через JavaScript при изменении других полей. Семантически обозначает «вот результат того, что вы ввели».`,
    attrs: [
      { name: 'for', desc: 'ID элементов, значения которых использовались для вычисления.' },
      { name: 'name', desc: 'Имя для отправки с формой.' },
    ],
    example: `<form oninput="result.value = Number(a.value) + Number(b.value)">
  <label>Слагаемое A: <input type="number" id="a" name="a" value="0"></label>
  +
  <label>Слагаемое B: <input type="number" id="b" name="b" value="0"></label>
  =
  <output name="result" for="a b">0</output>
</form>`,
    notes: [
      'Не путайте с <samp> — тот для вывода программ, <output> — для результатов форм.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/output',
  },

  progress: {
    fullDesc: `<progress> отображает индикатор выполнения задачи. Без атрибутов показывает «неопределённое» состояние (крутится). С атрибутами value и max показывает процент выполнения.`,
    attrs: [
      { name: 'value', desc: 'Текущее значение прогресса.' },
      { name: 'max', desc: 'Максимальное значение (по умолчанию 1).' },
    ],
    example: `<!-- 70% выполнено -->
<progress value="70" max="100">70%</progress>

<!-- Неопределённый прогресс (загрузка) -->
<progress>Загрузка...</progress>

<!-- Управление через JS -->
<progress id="file-progress" max="100">0%</progress>
<script>
  const bar = document.getElementById('file-progress');
  // Обновление: bar.value = 50;
</script>`,
    notes: [
      'Текст внутри тега — для браузеров без поддержки progress.',
      'Стилизация progress через CSS ограничена и различается между браузерами и ОС.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/progress',
  },

  meter: {
    fullDesc: `<meter> показывает измеримое значение в известном диапазоне — уровень заряда, результат теста, заполненность диска. В отличие от <progress>, подразумевает статическое или скалярное значение, а не прогресс задачи. Атрибуты low, high, optimum задают цветовую индикацию.`,
    attrs: [
      { name: 'value', desc: 'Текущее значение (обязательный).' },
      { name: 'min / max', desc: 'Диапазон значений (по умолчанию 0 и 1).' },
      { name: 'low', desc: 'Граница «низкого» значения.' },
      { name: 'high', desc: 'Граница «высокого» значения.' },
      { name: 'optimum', desc: 'Оптимальное значение. Влияет на цвет: зелёный (оптимально), жёлтый (субоптимально), красный (плохо).' },
    ],
    example: `<!-- Результат теста -->
<meter value="8" min="0" max="10" low="4" high="7" optimum="9">
  8 из 10
</meter>

<!-- Заряд батареи -->
<meter value="0.2" low="0.25" high="0.75" optimum="1">
  20%
</meter>

<!-- Использование диска -->
<meter value="75" min="0" max="100" high="80" optimum="50">
  75 ГБ из 100 ГБ
</meter>`,
    notes: [
      'Цвет зависит от соотношения value к low/high/optimum и различается в браузерах.',
      'Для прогресса загрузки используйте <progress>, для измерений — <meter>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/meter',
  },

  // === СКРИПТЫ ===

  script: {
    fullDesc: `<script> встраивает или подключает JavaScript-код. Без атрибутов блокирует парсинг HTML до выполнения скрипта. Атрибуты defer и async меняют это поведение. Размещение перед </body> или использование defer — лучшие практики.`,
    attrs: [
      { name: 'src', desc: 'URL внешнего JS-файла.' },
      { name: 'type', desc: '"module" для ES-модулей. По умолчанию — text/javascript (можно не указывать).' },
      { name: 'defer', desc: 'Скрипт загружается параллельно, выполняется после парсинга HTML.' },
      { name: 'async', desc: 'Скрипт загружается параллельно, выполняется сразу после загрузки (без гарантии порядка).' },
      { name: 'crossorigin', desc: 'Политика CORS для внешних скриптов.' },
      { name: 'nonce', desc: 'Значение для Content Security Policy.' },
    ],
    example: `<!-- В <head> с defer — рекомендуемый подход -->
<head>
  <script src="main.js" defer></script>
</head>

<!-- ES-модуль (автоматически defer) -->
<script type="module" src="app.js"></script>

<!-- Встроенный скрипт -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена!');
  });
</script>

<!-- async для независимых скриптов -->
<script src="analytics.js" async></script>`,
    notes: [
      'defer — для скриптов, работающих с DOM. async — для независимых (аналитика).',
      'type="module" автоматически добавляет defer и изолирует область видимости.',
      'Встроенный <script> не может иметь src — это либо/либо.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/script',
  },

  noscript: {
    fullDesc: `<noscript> содержит альтернативный контент для браузеров с отключённым JavaScript или без его поддержки. В <head> может содержать только <link>, <style>, <meta>. В <body> — любое содержимое.`,
    attrs: [],
    example: `<head>
  <!-- Альтернативные стили без JS -->
  <noscript>
    <style>.js-only { display: none; }</style>
  </noscript>
</head>

<body>
  <div class="app">
    <!-- Контент создаётся JS -->
  </div>

  <noscript>
    <p>
      Для работы этого приложения необходим JavaScript.
      <a href="/no-js-version">Перейти к версии без JavaScript</a>
    </p>
  </noscript>
</body>`,
    notes: [
      'Поисковые боты (Google) выполняют JavaScript, но <noscript> всё равно полезен для доступности.',
      'Хорошая практика — предоставлять базовую функциональность без JS.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/noscript',
  },

  style: {
    fullDesc: `<style> встраивает CSS-стили прямо в HTML-документ. Обычно размещается в <head>. Полезен для критических стилей первого экрана (inline critical CSS) и для изоляции стилей компонентов в Web Components.`,
    attrs: [
      { name: 'media', desc: 'Медиавыражение: screen, print и др. Стили применяются только при совпадении.' },
      { name: 'nonce', desc: 'Для Content Security Policy.' },
    ],
    example: `<head>
  <!-- Критические стили для первого экрана -->
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #faf9f5;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  </style>

  <!-- Внешние стили загружаются позже -->
  <link rel="stylesheet" href="main.css">
</head>

<!-- Стили только для печати -->
<style media="print">
  .no-print { display: none; }
</style>`,
    notes: [
      'Инлайн-стили загружаются с HTML без дополнительного запроса — ускоряет первый рендер.',
      'Для большого количества стилей используйте внешний файл через <link>.',
    ],
    mdn: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/style',
  },
};
