import { Link } from 'react-router-dom';
import { FaClock, FaUsers, FaCheck, FaStar } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function Guitar() {
  const programs = [
    {
      name: 'Дети (5-10 лет)',
      description: 'Игровая форма обучения, развитие чувства ритма и координации',
      duration: '45 мин',
      group: '1-2 человека'
    },
    {
      name: 'Подростки (11-17 лет)',
      description: 'Современные хиты, основы импровизации, создание каверов',
      duration: '60 мин',
      group: '1-2 человека'
    },
    {
      name: 'Взрослые (начинающие)',
      description: 'От основ до любимых песен за 3 месяца',
      duration: '60 мин',
      group: 'Индивидуально'
    },
    {
      name: 'Взрослые (продвинутые)',
      description: 'Сложная техника, джаз, фингерстайл',
      duration: '60-90 мин',
      group: 'Индивидуально'
    }
  ];

  const styles = [
    '🎸 Акустическая гитара',
    '⚡ Электрогитара',
    '🎵 Классическая гитара',
    '🎶 Бас-гитара',
    '🔥 Фингерстайл',
    '🎷 Джазовая гитара'
  ];

  const learningSteps = [
    { step: 1, title: 'Основы', desc: 'Постановка рук, базовые аккорды, простые песни' },
    { step: 2, title: 'Развитие', desc: 'Баррэ, переборы, ритмические рисунки' },
    { step: 3, title: 'Мастерство', desc: 'Соло-партии, импровизация, сложные композиции' },
    { step: 4, title: 'Творчество', desc: 'Собственные произведения, концертные выступления' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-[200px]">🎸</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Обучение <span className="text-yellow-400">гитаре</span> в Мурманске
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Научитесь играть на гитаре от основ до продвинутого уровня. 
              Акустическая, электрическая, классика и современные стили!
            </p>
            <Link
              to="/trial"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Записаться на пробный урок
            </Link>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Стили и <span className="text-yellow-400">направления</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {styles.map((style, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-amber-500/50 transition-colors"
              >
                <span className="text-lg">{style}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Программы <span className="text-yellow-400">обучения</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{prog.name}</h3>
                <p className="text-gray-300 mb-4">{prog.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <FaClock className="text-yellow-400" /> {prog.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaUsers className="text-yellow-400" /> {prog.group}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Steps */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Этапы <span className="text-yellow-400">обучения</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {learningSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Что вы <span className="text-yellow-400">получите</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Индивидуальный план обучения',
              'Разбор любимых песен',
              'Запись в собственной студии',
              'Участие в концертах школы',
              'Методические материалы',
              'Поддержка между занятиями'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                <FaCheck className="text-green-400 text-xl flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Отзывы наших <span className="text-yellow-400">гитаристов</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Никогда не думал, что смогу играть. Через 3 месяца уже исполнил 
                "Wonderwall" на семейном празднике. Жена в шоке!"
              </p>
              <p className="font-bold">— Максим, 32 года</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Сын в 8 лет попросил гитару на день рождения. Спасибо преподавателю 
                за терпение - теперь играет каждый день!"
              </p>
              <p className="font-bold">— Ольга, мама Саши</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Запишитесь на пробный урок игры на гитаре"
              subtitle="Бесплатное занятие для знакомства с преподавателем"
              compact
            />
          </div>
        </div>
      </section>
    </div>
  );
}
