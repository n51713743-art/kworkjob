import { Link } from 'react-router-dom';
import { FaCheck, FaGift, FaPercent, FaUsers } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function Prices() {
  const prices = [
    {
      direction: 'Гитара',
      emoji: '🎸',
      packages: [
        { lessons: 1, name: 'Разовое занятие', price: 1500 },
        { lessons: 4, name: 'Месяц (1 раз/нед)', price: 5200, discount: '13%' },
        { lessons: 8, name: 'Месяц (2 раза/нед)', price: 9600, discount: '20%' },
        { lessons: 12, name: 'Месяц (3 раза/нед)', price: 13200, discount: '27%' }
      ]
    },
    {
      direction: 'Вокал',
      emoji: '🎤',
      packages: [
        { lessons: 1, name: 'Разовое занятие', price: 1500 },
        { lessons: 4, name: 'Месяц (1 раз/нед)', price: 5200, discount: '13%' },
        { lessons: 8, name: 'Месяц (2 раза/нед)', price: 9600, discount: '20%' },
        { lessons: 12, name: 'Месяц (3 раза/нед)', price: 13200, discount: '27%' }
      ]
    },
    {
      direction: 'Саксофон',
      emoji: '🎷',
      packages: [
        { lessons: 1, name: 'Разовое занятие', price: 1800 },
        { lessons: 4, name: 'Месяц (1 раз/нед)', price: 6400, discount: '11%' },
        { lessons: 8, name: 'Месяц (2 раза/нед)', price: 12000, discount: '17%' },
        { lessons: 12, name: 'Месяц (3 раза/нед)', price: 16800, discount: '22%' }
      ]
    }
  ];

  const discounts = [
    {
      icon: <FaUsers />,
      title: 'Семейная скидка',
      discount: '-10%',
      desc: 'При записи двух и более членов семьи'
    },
    {
      icon: <FaGift />,
      title: 'День рождения',
      discount: '-15%',
      desc: 'Скидка в течение недели после вашего дня рождения'
    },
    {
      icon: <FaPercent />,
      title: 'Студенческая',
      discount: '-10%',
      desc: 'При наличии студенческого билета'
    }
  ];

  const whatIncluded = [
    'Индивидуальный подход к ученику',
    'Методические материалы',
    'Доступ в репетиционную базу',
    'Участие в концертах школы',
    'Запись на видео для отслеживания прогресса',
    'Поддержка преподавателя между занятиями'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Наши <span className="text-yellow-400">цены</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. 
            Абонементы выгоднее разовых занятий!
          </p>
        </div>
      </section>

      {/* Prices Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
                  <div className="text-5xl mb-2">{price.emoji}</div>
                  <h2 className="text-2xl font-bold">{price.direction}</h2>
                </div>

                {/* Packages */}
                <div className="p-6 space-y-4">
                  {price.packages.map((pkg, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl border transition-all ${
                        pkg.discount
                          ? 'bg-yellow-400/10 border-yellow-400/30'
                          : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold">{pkg.name}</h3>
                          {pkg.discount && (
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                              Экономия {pkg.discount}
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-yellow-400">
                            {pkg.price.toLocaleString()} ₽
                          </div>
                          <div className="text-xs text-gray-500">
                            {(pkg.price / pkg.lessons).toLocaleString()} ₽/занятие
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Link
                    to="/trial"
                    className="block w-full text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity mt-6"
                  >
                    Записаться
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Included */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Что входит в <span className="text-yellow-400">стоимость</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whatIncluded.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                <FaCheck className="text-green-400 text-xl flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Скидки и <span className="text-yellow-400">акции</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {discounts.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl text-yellow-400 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{item.discount}</div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Частые <span className="text-yellow-400">вопросы</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Можно ли перенести занятие?',
                a: 'Да, при предупреждении за 24 часа занятие можно перенести без потери.'
              },
              {
                q: 'Есть ли пробный урок?',
                a: 'Да! Пробное занятие бесплатно, чтобы вы могли познакомиться с преподавателем.'
              },
              {
                q: 'Нужен ли свой инструмент?',
                a: 'Для саксофона - свой обязателен. Для гитары и вокала на первых занятиях можно пользоваться нашим.'
              },
              {
                q: 'Как оплатить абонемент?',
                a: 'Наличными, переводом на карту или через СБП. Рассрочка возможна по согласованию.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Остались вопросы?"
              subtitle="Свяжитесь с нами, и мы ответим на все ваши вопросы о ценах и расписании"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
