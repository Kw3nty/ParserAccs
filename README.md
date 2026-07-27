<a id="top"></a>
<div align="center">

# ParserAccs

**🇷🇺 Русский** | [🇬🇧 English](#english)

![Graph API](https://img.shields.io/badge/Facebook%20Graph%20API-v20.0-1877F2?logo=facebook)
![Type](https://img.shields.io/badge/type-bookmarklet-orange)
![License](https://img.shields.io/badge/license-MIT-green)

<img src="preview.jpg" width="49%" alt="ParserAccs — главное окно"> <img src="recount.png" width="49%" alt="ParserAccs — оверлей пересчёта">

</div>

<a id="russian"></a>
## 🇷🇺 Русский

> Букмарклет для массового парсинга рекламных кабинетов **Facebook Ads Manager**: баланс, траты по любому периоду, лимиты, биллинг, статусы объявлений и привязка к Business Manager — всё в одной таблице с экспортом в CSV.

### ✨ Возможности

- 📊 **Полная сводка по кабинетам**: ID, имя, статус, баланс, валюта, траты за всё время и за выбранный период, дневной лимит, порог биллинга, счётчики активных/отклонённых объявлений, привязка к BM.
- 📅 **Гибкие периоды**: Today, Yesterday, 7 / 14 / 30 дней, This month, Last month, Lifetime + произвольный диапазон дат. Популярные периоды берутся из кэша мгновенно, остальные считаются на лету с живым прогрессом.
- 🔍 **Фильтры и поиск**: Все / Активные / Неактивные + поиск по ID, имени кабинета и имени/ID BM. Сортировка кликом по любой колонке.
- ☑️ **Выделение кабинетов** чекбоксами (поодиночке или все видимые) → **Copy IDs** и **Export CSV** по выбранным.
- 📄 **CSV для Excel**: корректная кириллица (BOM) и разделитель `sep=,` — файл сразу разъезжается по столбцам.
- 🎨 **Живой интерфейс**: тёмная тема, анимация частиц на фоне окна, градиентный заголовок, оверлей пересчёта поверх таблицы.
- 🔗 **Прямые ссылки** на каждый кабинет в Ads Manager (без редиректов).
- 🔒 **Read-only**: скрипт только *читает* данные через Graph API, ничего не изменяет в кабинетах.

### 🧩 Установка

Это букмарклет — закладка, в которой вместо адреса лежит JavaScript-код.

1. Скопируйте содержимое файла `parseraccs.js` целиком.
2. Создайте новую закладку в браузере:
   - **Chrome / Edge**: ПКМ по панели закладок → *Добавить страницу…* → в поле **URL** вставьте скопированный код → сохраните.
   - **Firefox**: ПКМ по панели закладок → *Новая закладка…* → вставьте код в поле **Адрес**.
3. Откройте `business.facebook.com` или Ads Manager и нажмите на закладку.

> ⚠️ При обновлении скрипта создавайте **новую** закладку (или полностью заменяйте URL старой) — редактирование длинного `javascript:`-кода некоторые браузеры молча не сохраняют.

### 🔑 Токен доступа

Скрипт пытается подхватить токен автоматически из открытой страницы Ads Manager. Если не получилось — попросит ввести токен вручную (`EAAB...`), его можно взять, например, из FBhelper. Токен используется только для запросов к Graph API от вашего имени.

### 🚀 Использование

1. Запустите закладку в Ads Manager → дождитесь загрузки кабинетов (появится оверлей с прогрессом).
2. Отфильтруйте список и/или выберите период — траты пересчитаются (для «тяжёлых» периодов всплывёт оверлей «Пересчёт трат…»).
3. Отметьте нужные кабинеты чекбоксами (или чекбоксом в заголовке — все видимые).
4. Нажмите **⬇ CSV** (выгрузка) или **📋 Copy IDs** (копирование ID). Без выделения обе кнопки работают по всем видимым кабинетам.

#### Колонки CSV

| Колонка | Описание |
|---|---|
| `ID` | ID рекламного кабинета |
| `Name` | Название кабинета |
| `Status` | Статус (Active / Disabled / Unsettled / …) |
| `Balance` / `Currency` | Баланс и валюта |
| `Spend Life` | Траты за всё время |
| `Spend Period` / `Period` | Траты за выбранный период и его название |
| `Limit` | Дневной лимит (`INF`, если без лимита) |
| `Billing` | Порог биллинга |
| `Ads OK` / `Ads No` | Кол-во активных / отклонённых объявлений |
| `BM Name` / `BM ID` | Привязанный Business Manager |

### ❓ FAQ

**Ссылка на кабинет редиректит на другой кабинет.**
Обновитесь до актуальной версии — ссылки формируются в прямом формате `https://www.facebook.com/adsmanager/manage/campaigns?act=<число>` без параметра `business_id`, который и вызывал редирект.

**CSV открывается в Excel одной колонкой.**
В актуальной версии в начало файла пишется `sep=,` — Excel сам разбивает столбцы. Если у вас старая версия — обновите закладку.

**Поиск не находит кабинет по букве.**
Проверьте раскладку: имена и BM обычно в латинице, а русская «В» и латинская `B` — разные символы.

**Это безопасно?**
Скрипт выполняет только GET-запросы к официальному Graph API (чтение), обрабатывает данные локально в браузере и ничего не отправляет на сторонние серверы. Тем не менее вы используете его на свой риск и со своим токеном.

[🇬🇧 English ↓](#english) · [⬆ Наверх](#top)

---

<a id="english"></a>
## 🇬🇧 English

> A bookmarklet for bulk parsing of **Facebook Ads Manager** accounts: balance, spend for any period, daily limits, billing, ad status and Business Manager mapping — all in one table with CSV export.

### ✨ Features

- 📊 **Full account overview**: ID, name, status, balance, currency, lifetime and period spend, daily limit, billing threshold, active/disapproved ad counters, BM mapping.
- 📅 **Flexible periods**: Today, Yesterday, 7 / 14 / 30 days, This month, Last month, Lifetime + a custom date range. Popular periods are instant from cache; the rest are computed on the fly with a live progress overlay.
- 🔍 **Filters & search**: All / Active / Disabled + search by ID, account name and BM name/ID. Click any column to sort.
- ☑️ **Select accounts** with checkboxes (one by one or all visible) → **Copy IDs** and **Export CSV** for the selected ones.
- 📄 **Excel-ready CSV**: proper Cyrillic (BOM) and the `sep=,` hint — the file splits into columns on open.
- 🎨 **Living UI**: dark theme, particle animation behind the window, gradient title, recompute overlay on top of the table.
- 🔗 **Direct links** to each account in Ads Manager (no redirects).
- 🔒 **Read-only**: the script only *reads* data via the Graph API and changes nothing in your accounts.

### 🧩 Install

This is a bookmarklet — a bookmark whose URL is a piece of JavaScript code.

1. Copy the entire contents of `parseraccs.js`.
2. Create a new bookmark in your browser:
   - **Chrome / Edge**: right-click the bookmarks bar → *Add page…* → paste the code into the **URL** field → save.
   - **Firefox**: right-click the bookmarks bar → *New Bookmark…* → paste the code into the **Location** field.
3. Open `business.facebook.com` or Ads Manager and click the bookmark.

> ⚠️ When updating the script, create a **new** bookmark (or fully replace the old URL) — some browsers silently fail to save edits to long `javascript:` code.

### 🔑 Access token

The script tries to pick up the token automatically from the open Ads Manager page. If it can't, it will ask you to paste a token manually (`EAAB...`) — you can grab one from FBhelper, for example. The token is used only for Graph API requests on your behalf.

### 🚀 Usage

1. Run the bookmark in Ads Manager → wait for the accounts to load (a progress overlay appears).
2. Filter the list and/or pick a period — spend will be recomputed (a "Recomputing spend…" overlay pops up for heavy periods).
3. Tick the accounts you need (or the header checkbox for all visible).
4. Click **⬇ CSV** (export) or **📋 Copy IDs**. With nothing selected, both buttons work on all visible accounts.

#### CSV columns

| Column | Description |
|---|---|
| `ID` | Ad account ID |
| `Name` | Account name |
| `Status` | Status (Active / Disabled / Unsettled / …) |
| `Balance` / `Currency` | Balance and currency |
| `Spend Life` | Lifetime spend |
| `Spend Period` / `Period` | Spend for the selected period and its label |
| `Limit` | Daily limit (`INF` if unlimited) |
| `Billing` | Billing threshold |
| `Ads OK` / `Ads No` | Active / disapproved ad counts |
| `BM Name` / `BM ID` | Linked Business Manager |

### ❓ FAQ

**Account link redirects to a different account.**
Update to the latest version — links now use the direct format `https://www.facebook.com/adsmanager/manage/campaigns?act=<number>` without the `business_id` parameter that caused the redirect.

**CSV opens as a single column in Excel.**
The current version writes `sep=,` at the top of the file — Excel splits the columns itself. If you're on an old version, update the bookmark.

**Search doesn't find an account by a letter.**
Check your keyboard layout: names and BMs are usually in Latin script, and the Cyrillic "В" and Latin `B` are different characters.

**Is it safe?**
The script makes only GET requests to the official Graph API (read-only), processes data locally in the browser and sends nothing to third-party servers. Still, you use it at your own risk and with your own token.

[🇷🇺 Русский ↑](#russian) · [⬆ Top](#top)

---

<div align="center">

🇷🇺 Сделал [Kwenty](https://t.me/kw33nty) · 🇬🇧 Built by [Kwenty](https://t.me/kw33nty) · [GitHub](https://github.com/Kw3nty/ParserAccs) · MIT

</div>
