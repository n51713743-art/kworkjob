import { Link } from 'react-router-dom';
import { FaClock, FaUsers, FaStar } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function Saxophone() {
  const types = [
    {
      name: 'Сопрано-саксофон',
      desc: 'Высокий, пронзительный звук. Идеален для соло.',
      emoji: '🎷'
    },
    {
      name: 'Альт-саксофон',
      desc: 'Самый популярный вид. Отлично подходит для начинающих.',
      emoji: '🎷'
    },
    {
      name: 'Тенор-саксофон',
      desc: 'Глубокий, бархатный тембр. Основа джаза и соула.',
      emoji: '🎷'
    }
  ];

  const programs = [
    {
      name: 'Дети (8+ лет)',
      description: 'Основы игры, развитие дыхания и слуха, простые пьесы',
      duration: '45 мин',
      group: 'Индивидуально'
    },
    {
      name: 'Подростки',
      description: 'Джаз, поп-музыка, импровизация, ансамблевая игра',
      duration: '60 мин',
      group: '1-2 человека'
    },
    {
      name: 'Взрослые (начинающие)',
      description: 'От первого звука до уверенной игры за 4 месяца',
      duration: '60 мин',
      group: 'Индивидуально'
    },
    {
      name: 'Взрослые (продвинутые)',
      description: 'Джазовая импровизация, сложная техника, концертная деятельность',
      duration: '60-90 мин',
      group: 'Индивидуально'
    }
  ];

  const whatYouLearn = [
    '🎷 Правильная постановка аппарата',
    '💨 Дыхательные техники',
    '🎼 Чтение нот и табулатур',
    '🎹 Импровизация и джаз',
    '👥 Ансамблевая игра',
    '🎤 Концертные выступления'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-[200px]">🎷</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Обучение <span className="text-yellow-400">саксофону</span> в Мурманске
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Джаз, классика, современная музыка. Освойте один из самых 
              выразительных инструментов под руководством профессионалов!
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

      {/* Types Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Виды <span className="text-yellow-400">саксофонов</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="text-5xl mb-4">{type.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                <p className="text-gray-400">{type.desc}</p>
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

      {/* What You Learn */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Чему вы <span className="text-yellow-400">научитесь</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouLearn.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                <span className="text-2xl">{item.split(' ')[0]}</span>
                <span>{item.substring(item.indexOf(' ') + 1)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Saxophone */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему <span className="text-yellow-400">саксофон</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Универсальность', desc: 'Джаз, классика, поп, рок - саксофон звучит везде' },
              { title: 'Выразительность', desc: 'Ближе всего к человеческому голосу среди инструментов' },
              { title: 'Быстрый старт', desc: 'Уже через месяц вы сыграете простые мелодии' },
              { title: 'Востребованность', desc: 'Саксофонисты нужны в группах и на мероприятиях' }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Отзывы наших <span className="text-yellow-400">саксофонистов</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Мечтал играть саксофон с детства. В 45 лет решился - и не пожалел! 
                Преподаватель находит подход к взрослому ученику."
              </p>
              <p className="font-bold">— Игорь, 47 лет</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Дочь мечтала играть в школьном оркестре. Благодаря занятиям 
                прошла прослушивание и теперь ведущий саксофонист!"
              </p>
              <p className="font-bold">— Татьяна, мама Сони</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Запишитесь на пробный урок игры на саксофоне"
              subtitle="Почувствуйте магию джаза на бесплатном занятии"
              compact
            />
          </div>
        </div>
      </section>
    </div>
  );
}
