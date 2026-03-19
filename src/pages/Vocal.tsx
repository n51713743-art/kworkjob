import { Link } from 'react-router-dom';
import { FaClock, FaUsers, FaCheck, FaStar } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function Vocal() {
  const programs = [
    {
      name: 'Дети (5-10 лет)',
      description: 'Развитие слуха, постановка голоса, детские песни и выступления',
      duration: '45 мин',
      group: '1-2 человека'
    },
    {
      name: 'Подростки (11-17 лет)',
      description: 'Эстрадный вокал, современные хиты, подготовка к конкурсам',
      duration: '60 мин',
      group: '1-2 человека'
    },
    {
      name: 'Взрослые (начинающие)',
      description: 'Преодоление страха сцены, базовая техника, любимые песни',
      duration: '60 мин',
      group: 'Индивидуально'
    },
    {
      name: 'Взрослые (продвинутые)',
      description: 'Джаз, соул, расширение диапазона, студийная работа',
      duration: '60-90 мин',
      group: 'Индивидуально'
    }
  ];

  const whatYouLearn = [
    '🎤 Правильное дыхание и опора звука',
    '🎵 Постановка голоса и диапазон',
    '🎭 Работа с микрофоном',
    '🌟 Преодоление страха сцены',
    '🎼 Чтение с листа и сольфеджио',
    '❤️ Эмоциональная подача'
  ];

  const achievements = [
    'Выступления на концертах школы',
    'Участие в городских конкурсах',
    'Запись вокала в студии',
    'Сольные и групповые номера'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pink-900 via-rose-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-[200px]">🎤</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Обучение <span className="text-yellow-400">вокалу</span> в Мурманске
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Раскройте свой голос! Эстрадный, джазовый, академический вокал 
              для детей и взрослых любого уровня.
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
            Направления <span className="text-yellow-400">вокала</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '🎵 Эстрадный',
              '🎷 Джазовый',
              '🎭 Академический',
              '🎸 Рок-вокал',
              '💜 Соул и R&B',
              '🎹 Поп',
              '🎤 Мюзикл',
              '🔥 Авторская песня'
            ].map((style, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-pink-500/50 transition-colors"
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

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ваши <span className="text-yellow-400">достижения</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {achievements.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                <FaCheck className="text-green-400 text-xl flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Истории <span className="text-yellow-400">успеха</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Боялась петь даже в караоке. После полугода занятий выступила 
                на школьном концерте! Дочь теперь тоже занимается."
              </p>
              <p className="font-bold">— Марина, 38 лет</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Сын выиграл городской конкурс вокала! Спасибо преподавателю 
                за профессионализм и веру в ребенка."
              </p>
              <p className="font-bold">— Андрей, папа Димы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Запишитесь на пробный урок вокала"
              subtitle="Откройте свой голос на бесплатном занятии"
              compact
            />
          </div>
        </div>
      </section>
    </div>
  );
}
