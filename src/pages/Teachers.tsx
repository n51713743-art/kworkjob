import { Link } from 'react-router-dom';
import { FaMusic, FaGraduationCap, FaAward, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function Teachers() {
  const teachers = [
    {
      name: 'Алексей Петров',
      role: 'Преподаватель гитары',
      experience: '12 лет',
      education: 'Мурманский колледж искусств',
      specialization: ['Акустическая гитара', 'Электрогитара', 'Фингерстайл'],
      achievements: 'Участник международных фестивалей, лауреат конкурсов',
      bio: 'Профессиональный музыкант с большим сценическим опытом. Ученики Алексея регулярно побеждают на конкурсах.',
      emoji: '🎸'
    },
    {
      name: 'Мария Иванова',
      role: 'Преподаватель вокала',
      experience: '10 лет',
      education: 'СПбГИК (академический вокал)',
      specialization: ['Эстрадный вокал', 'Джаз', 'Академический вокал'],
      achievements: 'Солистка камерного хора, стажировка в Германии',
      bio: 'Мастер раскрытия голоса. Работает со страхом сцены, помогает найти свой тембр.',
      emoji: '🎤'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Преподаватель саксофона',
      experience: '15 лет',
      education: 'Московская консерватория им. Чайковского',
      specialization: ['Альт-саксофон', 'Тенор-саксофон', 'Джазовая импровизация'],
      achievements: 'Член джазового квартета, гастроли по Европе',
      bio: 'Профессиональный джазовый музыкант. Ученики Дмитрия играют в городском джаз-бенде.',
      emoji: '🎷'
    },
    {
      name: 'Елена Смирнова',
      role: 'Преподаватель вокала',
      experience: '8 лет',
      education: 'Кемеровский институт культуры',
      specialization: ['Детский вокал', 'Эстрада', 'Мюзикл'],
      achievements: 'Постановщик детских мюзиклов, автор методики',
      bio: 'Находит подход к каждому ребенку. Дети с удежием приходят на занятия.',
      emoji: '🎤'
    },
    {
      name: 'Сергей Волков',
      role: 'Преподаватель гитары',
      experience: '7 лет',
      education: 'Мурманский колледж искусств',
      specialization: ['Классическая гитара', 'Акустическая гитара', 'Бас-гитара'],
      achievements: 'Бас-гитарист рок-группы, студийный музыкант',
      bio: 'Специализируется на работе с начинающими взрослыми. Понятно объясняет сложные вещи.',
      emoji: '🎸'
    },
    {
      name: 'Анна Кузнецова',
      role: 'Преподаватель саксофона',
      experience: '6 лет',
      education: 'Ростовская консерватория',
      specialization: ['Сопрано-саксофон', 'Классика', 'Современная музыка'],
      achievements: 'Солистка духового оркестра',
      bio: 'Специализируется на классическом репертуаре и работе с детьми.',
      emoji: '🎷'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Наши <span className="text-yellow-400">преподаватели</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Профессиональные музыканты с педагогическим опытом, 
            которые любят музыку и умеют вдохновлять учеников
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 group"
              >
                {/* Photo Placeholder */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                    {teacher.emoji}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {teacher.experience} опыта
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                  <p className="text-yellow-400 mb-4">{teacher.role}</p>
                  
                  <p className="text-gray-300 text-sm mb-4">{teacher.bio}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <FaGraduationCap className="text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-400">{teacher.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaAward className="text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-400">{teacher.achievements}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500 mb-2">Специализация:</p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="bg-white/10 px-2 py-1 rounded text-xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/trial"
                    className="mt-6 block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    Записаться к преподавателю
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Teachers */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему наши <span className="text-yellow-400">преподаватели</span> особенные
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaGraduationCap />,
                title: 'Музыкальное образование',
                desc: 'Дипломы консерваторий и институтов культуры'
              },
              {
                icon: <FaMusic />,
                title: 'Сценический опыт',
                desc: 'Концерты, фестивали, студийная работа'
              },
              {
                icon: <FaAward />,
                title: 'Конкурсные победы',
                desc: 'Лауреаты и участники престижных конкурсов'
              },
              {
                icon: <FaClock />,
                title: 'Педагогический стаж',
                desc: 'Минимум 5 лет преподавания'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-4xl text-yellow-400 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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
              title="Хотите попасть на занятие?"
              subtitle="Оставьте заявку, и мы подберем преподавателя под ваши цели"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
