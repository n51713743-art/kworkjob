import { Link } from 'react-router-dom';
import { FaGuitar, FaMicrophone, FaMusic, FaUsers, FaAward, FaClock, FaStar } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const directions = [
    {
      icon: <FaGuitar className="text-5xl" />,
      title: 'Гитара',
      description: 'Акустическая, электрическая, классическая. От основ до виртуозной игры.',
      link: '/guitar',
      color: 'from-amber-500 to-orange-600',
      emoji: '🎸'
    },
    {
      icon: <FaMicrophone className="text-5xl" />,
      title: 'Вокал',
      description: 'Эстрадный, джазовый, академический. Раскрой свой голос!',
      link: '/vocal',
      color: 'from-pink-500 to-rose-600',
      emoji: '🎤'
    },
    {
      icon: <FaMusic className="text-5xl" />,
      title: 'Саксофон',
      description: 'Сопрано, альт, тенор. Джазовая импровизация и классика.',
      link: '/saxophone',
      color: 'from-blue-500 to-indigo-600',
      emoji: '🎷'
    }
  ];

  const advantages = [
    {
      icon: <FaUsers />,
      title: 'Для всех возрастов',
      description: 'Обучаем детей от 5 лет и взрослых любого уровня подготовки'
    },
    {
      icon: <FaAward />,
      title: 'Опытные педагоги',
      description: 'Преподаватели с музыкальным образованием и сценическим опытом'
    },
    {
      icon: <FaClock />,
      title: 'Гибкое расписание',
      description: 'Занятия утром, днем и вечером в будни и выходные'
    },
    {
      icon: <FaStar />,
      title: 'Индивидуальный подход',
      description: 'Программа адаптируется под ваши цели и темп обучения'
    }
  ];

  const reviews = [
    {
      name: 'Анна М.',
      text: 'Дочь занимается вокалом уже год. Прогресс невероятный! Спасибо преподавателям за терпение и профессионализм.',
      rating: 5,
      direction: 'Вокал'
    },
    {
      name: 'Дмитрий К.',
      text: 'В 35 лет решился на мечту детства - научиться играть на гитаре. Через 6 месяцев уже играю любимые песни!',
      rating: 5,
      direction: 'Гитара'
    },
    {
      name: 'Елена С.',
      text: 'Сын в восторге от занятий саксофоном. Преподаватель находит подход к подростку, что очень ценно.',
      rating: 5,
      direction: 'Саксофон'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-9xl animate-pulse">🎵</div>
          <div className="absolute top-40 right-20 text-8xl animate-bounce">🎶</div>
          <div className="absolute bottom-20 left-1/4 text-7xl animate-pulse">🎼</div>
          <div className="absolute bottom-40 right-1/4 text-9xl animate-bounce">🎹</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Откройте мир <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                музыки
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Музыкальная школа в Мурманске для детей и взрослых.<br />
              Научим играть на любимом инструменте за 3 месяца!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/trial"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Записаться на пробный урок
              </Link>
              <Link
                to="/prices"
                className="bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 text-center"
              >
                Посмотреть цены
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0f172a"/>
          </svg>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="text-yellow-400">направления</span>
            </h2>
            <p className="text-xl text-gray-400">Выберите инструмент своей мечты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directions.map((dir, index) => (
              <Link
                key={index}
                to={dir.link}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dir.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">{dir.emoji}</div>
                  <h3 className="text-2xl font-bold mb-3">{dir.title}</h3>
                  <p className="text-gray-400 mb-6">{dir.description}</p>
                  <span className="text-yellow-400 font-semibold group-hover:underline">
                    Подробнее →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают <span className="text-yellow-400">нас</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="text-4xl text-yellow-400 mb-4 flex justify-center">{adv.icon}</div>
                <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                <p className="text-gray-400">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-slate-900">
            <div>
              <div className="text-4xl md:text-5xl font-bold">500+</div>
              <div className="text-lg">Учеников</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">8</div>
              <div className="text-lg">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">15</div>
              <div className="text-lg">Преподавателей</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">95%</div>
              <div className="text-lg">Довольных учеников</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Отзывы <span className="text-yellow-400">учеников</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{review.name}</span>
                  <span className="text-yellow-400 text-sm">{review.direction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Запишитесь на бесплатный пробный урок"
              subtitle="Попробуйте занятие бесплатно и убедитесь в качестве обучения"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать музыкальный путь?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Первый шаг к мечте — это записаться на пробный урок. 
            Это бесплатно и ни к чему не обязывает!
          </p>
          <Link
            to="/trial"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-10 py-4 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Записаться на пробный урок
          </Link>
        </div>
      </section>
    </div>
  );
}
