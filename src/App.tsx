const directions = [
  {
    id: "guitar",
    title: "Гитара",
    description:
      "Акустика и электрогитара: постановка рук, ритмика и любимые песни с первого месяца занятий.",
    details: ["Индивидуальные и парные занятия", "Классика, рок, поп", "Подготовка к выступлениям"],
  },
  {
    id: "vocal",
    title: "Вокал",
    description:
      "Развитие голоса, дыхания и артикуляции для детей и взрослых. Эстрадный и академический вокал.",
    details: ["Работа с микрофоном", "Сценическая практика", "Подбор репертуара"],
  },
  {
    id: "sax",
    title: "Саксофон",
    description:
      "Джазовый и эстрадный саксофон, техника дыхания и уверенное звучание в ансамбле.",
    details: ["Импровизация", "Сольная программа", "Подготовка к концертам"],
  },
];

const teachers = [
  {
    name: "Ольга Мельникова",
    role: "Вокал",
    experience: "Педагог с 11-летним стажем, куратор детских коллективов",
  },
  {
    name: "Артём Романов",
    role: "Гитара",
    experience: "Сессионный музыкант, 9 лет преподавания",
  },
  {
    name: "Никита Кузнецов",
    role: "Саксофон",
    experience: "Лауреат джазовых конкурсов, концертная практика в Мурманске",
  },
  {
    name: "Светлана Юрьева",
    role: "Музыкальная грамотность",
    experience: "Сольфеджио и развитие слуха для новичков",
  },
];

const prices = [
  {
    title: "Пробный урок",
    price: "0 ₽",
    note: "30 минут, знакомство с педагогом и инструментом.",
  },
  {
    title: "Индивидуальное занятие",
    price: "1 700 ₽",
    note: "60 минут, персональная программа и гибкий график.",
  },
  {
    title: "Абонемент 4 занятия",
    price: "6 200 ₽",
    note: "Экономия 10%, можно совмещать направления.",
  },
  {
    title: "Детская группа",
    price: "4 500 ₽",
    note: "4 занятия, до 6 учеников, развитие слуха и ритма.",
  },
];

const socials = [
  {
    title: "ВКонтакте",
    link: "https://vk.com",
  },
  {
    title: "Telegram",
    link: "https://t.me",
  },
  {
    title: "YouTube",
    link: "https://youtube.com",
  },
  {
    title: "Instagram*",
    link: "https://instagram.com",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Школа музыки</p>
            <h1 className="text-2xl font-semibold">MurmanskWave</h1>
            <p className="text-sm text-slate-300">Взрослые и дети • Мурманск</p>
          </div>
          <nav className="grid gap-3 text-sm text-slate-200 md:grid-cols-3">
            <a className="transition hover:text-cyan-300" href="#home">
              Главная
            </a>
            <a className="transition hover:text-cyan-300" href="#directions">
              Направления
            </a>
            <a className="transition hover:text-cyan-300" href="#teachers">
              Преподаватели
            </a>
            <a className="transition hover:text-cyan-300" href="#prices">
              Цены
            </a>
            <a className="transition hover:text-cyan-300" href="#contacts">
              Контакты
            </a>
            <a className="transition hover:text-cyan-300" href="#trial">
              Пробный урок
            </a>
          </nav>
        </div>
      </header>

      <main className="space-y-20 pb-20">
        <section id="home" className="mx-auto w-full max-w-6xl px-6 pt-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Музыкальная школа в Мурманске
              </p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                MurmanskWave — школа, где дети и взрослые выходят на сцену уже через месяц занятий.
              </h2>
              <p className="text-lg text-slate-300">
                Индивидуальные программы, поддержка наставников и уютные студии в центре города.
                Помогаем выбрать инструмент и держим связь с родителями и учениками.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  href="#trial"
                >
                  Записаться на пробный урок
                </a>
                <a
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                  href="#directions"
                >
                  Смотреть направления
                </a>
              </div>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[
                  "Уроки офлайн и онлайн",
                  "Удобный график для семей",
                  "Концерты учеников каждый сезон",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 shadow-lg">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Что входит в обучение</h3>
                <ul className="space-y-4 text-slate-200">
                  {[
                    "Диагностика навыков и целей",
                    "Персональный план занятий",
                    "Репетиции и подготовка к концертам",
                    "Поддержка куратора 7 дней в неделю",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-sm text-cyan-100">
                  Первый урок бесплатно — оцените формат и познакомьтесь с преподавателем.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="directions" className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Направления</p>
              <h2 className="text-3xl font-semibold">Гитара, вокал, саксофон</h2>
            </div>
            <p className="max-w-md text-slate-300">
              Обучаем с нуля и помогаем подготовиться к конкурсам, выступлениям и записи треков.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {directions.map((direction) => (
              <article
                id={direction.id}
                key={direction.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-semibold">{direction.title}</h3>
                <p className="mt-3 text-slate-300">{direction.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  {direction.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="text-cyan-300">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                  href="#trial"
                >
                  Записаться →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="teachers" className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Преподаватели</p>
              <h2 className="text-3xl font-semibold">Команда MurmanskWave</h2>
            </div>
            <p className="max-w-md text-slate-300">
              Педагоги с концертной практикой и опытом работы с детьми и взрослыми.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {teachers.map((teacher) => (
              <article
                key={teacher.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/20 text-lg font-semibold text-cyan-200">
                    {teacher.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{teacher.name}</h3>
                    <p className="text-sm text-cyan-200">{teacher.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-300">{teacher.experience}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200">
                  Помогаем подобрать программу и темп обучения под цель ученика.
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="prices" className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Цены</p>
              <h2 className="text-3xl font-semibold">Прозрачные тарифы</h2>
            </div>
            <p className="max-w-md text-slate-300">
              Подберем формат занятий и поможем рассчитать оптимальный график.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {prices.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-3xl font-semibold text-cyan-300">{item.price}</p>
                <p className="mt-4 text-sm text-slate-300">{item.note}</p>
                <a
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-cyan-400/50 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100"
                  href="#trial"
                >
                  Оставить заявку
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="trial" className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Запись</p>
              <h2 className="mt-3 text-3xl font-semibold">Записаться на пробный урок</h2>
              <p className="mt-4 text-slate-200">
                Оставьте заявку, и администратор свяжется с вами в течение 15 минут в рабочее
                время.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <p>• Индивидуальная программа под ваш запрос.</p>
                <p>• Возможность занятий для всей семьи.</p>
                <p>• Скидки на абонементы для учеников MurmanskWave.</p>
              </div>
            </div>
            <form
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
              action="mailto:hello@murmanskwave.ru"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4">
                <label className="text-sm text-slate-300">
                  Имя
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                    placeholder="Как к вам обращаться"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  Телефон
                  <input
                    required
                    name="phone"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                    placeholder="+7 (___) ___-__-__"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  Направление
                  <select
                    name="direction"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                  >
                    {directions.map((direction) => (
                      <option key={direction.id} value={direction.title}>
                        {direction.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm text-slate-300">
                  Комментарий
                  <textarea
                    name="message"
                    className="mt-2 min-h-[120px] w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                    placeholder="Расскажите о цели или уровне подготовки"
                  />
                </label>
              </div>
              <button
                className="mt-6 w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                type="submit"
              >
                Отправить заявку
              </button>
              <p className="mt-4 text-xs text-slate-400">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </div>
        </section>

        <section id="contacts" className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Контакты</p>
                <h2 className="mt-3 text-3xl font-semibold">Мы находимся в центре Мурманска</h2>
                <p className="mt-3 text-slate-300">
                  Запишитесь на консультацию и приходите на экскурсию по студиям.
                </p>
              </div>
              <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                <div>
                  <p className="text-cyan-200">Адрес</p>
                  <p>г. Мурманск, пр. Ленина, 52</p>
                </div>
                <div>
                  <p className="text-cyan-200">Телефон</p>
                  <p>+7 (8152) 00-00-00</p>
                </div>
                <div>
                  <p className="text-cyan-200">Email</p>
                  <p>hello@murmanskwave.ru</p>
                </div>
                <div>
                  <p className="text-cyan-200">График</p>
                  <p>Пн–Вс: 10:00 – 21:00</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">Мы в соцсетях</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map((item) => (
                    <a
                      key={item.title}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  *Instagram принадлежит Meta, деятельность которой признана экстремистской на
                  территории РФ.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <iframe
                title="Карта"
                className="h-96 w-full border-0"
                loading="lazy"
                src="https://yandex.ru/map-widget/v1/?ll=33.081%2C68.970&mode=search&ol=geo&oid=1030318443&z=13"
              />
              <form
                className="space-y-4 border-t border-white/10 p-6"
                action="mailto:hello@murmanskwave.ru"
                method="post"
                encType="text/plain"
              >
                <div className="grid gap-3 text-sm text-slate-300">
                  <label>
                    Быстрый вопрос
                    <input
                      name="question"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                      placeholder="Напишите ваш вопрос"
                    />
                  </label>
                  <label>
                    Email или телефон
                    <input
                      name="contact"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                      placeholder="Для связи"
                    />
                  </label>
                </div>
                <button
                  className="w-full rounded-full border border-cyan-400/50 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100"
                  type="submit"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MurmanskWave. Все права защищены.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-cyan-200" href="#directions">
              Направления
            </a>
            <a className="transition hover:text-cyan-200" href="#prices">
              Цены
            </a>
            <a className="transition hover:text-cyan-200" href="#trial">
              Пробный урок
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
