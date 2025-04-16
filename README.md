Це тестове завдання — React-додаток для перегляду та редагування популярних мемів. Побудовано з використанням **React**, **HeroUI**, **TailwindCSS** та деплоєно на **Railway**.

## 🔗 Онлайн-демо

👉 [Відкрити додаток](https://leimememes-production.up.railway.app)

## ✨ Функціональність

- 📄 **Дві сторінки**:
  - **Таблиця мемів** — список у вигляді таблиці
  - **Картки мемів** — візуальний список у 4 колонки
- ✏️ **Редагування мемів** у модальному вікні (HeroUI Dialog)
- ✅ **Валідація** полів:
  - Назва: обов’язково, від 3 до 100 символів
  - Картинка: обов’язково, коректний JPG URL
  - Лайки: число від 0 до 99
- 💾 Збереження змін у `localStorage`
- 🎨 Єдиний стиль з кастомним дизайном Tailwind
- 📱 Повністю адаптивний інтерфейс
- ⚡ Підтримка прямого доступу до `/list` (SPA routing)

## 🧰 Технології

- React
- React Router DOM
- HeroUI (Dialog, Transition)
- TailwindCSS
- LocalStorage
- Railway (хостинг)

## 🛠 Як запустити локально

```bash
git clone https://github.com/your-username/leime_memes.git
cd leime_memes
npm install
npm start
