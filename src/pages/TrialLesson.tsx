import { useState } from 'react';
import { FaCheck, FaStar, FaClock, FaUser, FaMusic } from 'react-icons/fa';

export default function TrialLesson() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    direction: '',
    experience: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const directions = [
    { value: 'guitar', label: 'Гитара', emoji: '🎸' },
    { value: 'vocal', label: 'Вокал', emoji: '🎤' },
    { value: 'saxophone', label: 'Саксофон', emoji: '🎷' }
  ];

  const ageGroups = [
    { value: '5-10', label: '5-10 лет' },
    { value: '11-17', label: '11-17 лет' },
    { value: '18+', label: '18+ лет' }
  ];

  const experienceLevels = [
    { value: 'none', label: 'Никогда не играл(а)' },
    { value: 'beginner', label: 'Немного знаю основы' },
    { value: 'intermediate', label: 'Имею опыт игры' }
  ];

  const timeSlots = [
    { value: 'morning', label: 'Утром (10:00-13:00)' },
    { value: 'afternoon', label: 'Днём (13:00-17:00)' },
    { value: 'evening', label: 'Вечером (17:00-21:00)' },
    { value: 'weekend', label: 'В выходные' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация отправки на почту
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Trial lesson request:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-900">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-3xl p-12">
            <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-4xl text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Отлично! Заявка отправлена!</h1>
            <p className="text-gray-300 mb-6">
              Мы свяжемся с вами в ближайшее время для уточнения деталей 
              и записи на пробный урок.
            </p>
            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-400">Ваша заявка:</p>
              <p className="font-bold">
                {directions.find(d => d.value === formData.direction)?.emoji}{' '}
                {directions.find(d => d.value === formData.direction)?.label}
              </p>
            </div>
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              На главную
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🎵</div>
          <div className="absolute bottom-10 right-10 text-9xl">🎶</div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Запишитесь на <span className="text-white">бесплатный</span> пробный урок
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Познакомьтесь с преподавателем, попробуйте инструмент и убедитесь, 
            что музыка — это ваше!
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <FaClock />, title: '45 минут', desc: 'Полноценное занятие' },
              { icon: <FaUser />, title: 'Бесплатно', desc: 'Никаких обязательств' },
              { icon: <FaStar />, title: 'Подарок', desc: 'Методичка в подарок' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="text-yellow-400 text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-center mb-8">
                Заполните форму записи
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                    <FaUser /> Личные данные
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Имя *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Телефон *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Возраст ученика *</label>
                      <select
                        name="age"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      >
                        <option value="" className="bg-slate-800">Выберите возраст</option>
                        {ageGroups.map((group) => (
                          <option key={group.value} value={group.value} className="bg-slate-800">
                            {group.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Lesson Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                    <FaMusic /> Параметры занятия
                  </h3>

                  <div>
                    <label className="block text-sm text-gray-400 mb-3">Направление *</label>
                    <div className="grid grid-cols-3 gap-3">
                      {directions.map((dir) => (
                        <label
                          key={dir.value}
                          className={`cursor-pointer border rounded-xl p-4 text-center transition-all ${
                            formData.direction === dir.value
                              ? 'border-yellow-400 bg-yellow-400/20'
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          <input
                            type="radio"
                            name="direction"
                            value={dir.value}
                            checked={formData.direction === dir.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="text-4xl mb-2">{dir.emoji}</div>
                          <div className="font-medium">{dir.label}</div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Опыт занятий *</label>
                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      >
                        <option value="" className="bg-slate-800">Ваш опыт</option>
                        {experienceLevels.map((level) => (
                          <option key={level.value} value={level.value} className="bg-slate-800">
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Удобное время *</label>
                      <select
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      >
                        <option value="" className="bg-slate-800">Выберите время</option>
                        {timeSlots.map((slot) => (
                          <option key={slot.value} value={slot.value} className="bg-slate-800">
                            {slot.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Ваши пожелания</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о ваших целях и пожеланиях..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Записаться на бесплатный урок</span>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных 
                  в соответствии с политикой конфиденциальности.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Что вас <span className="text-yellow-400">ждет</span> на пробном уроке
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Знакомство',
                desc: 'Поговорим о ваших целях и музыкальных предпочтениях'
              },
              {
                step: '2',
                title: 'Основы',
                desc: 'Преподаватель покажет базовые приемы игры'
              },
              {
                step: '3',
                title: 'Практика',
                desc: 'Вы попробуете сыграть или спеть что-то простое'
              },
              {
                step: '4',
                title: 'План',
                desc: 'Составим индивидуальный план обучения'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Отзывы после <span className="text-yellow-400">пробного урока</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                text: "Пришел на пробный урок и понял - это мое! Преподаватель сразу нашел подход.",
                name: "Алексей, 28 лет"
              },
              {
                text: "Дочка была в восторге! Теперь ходим на занятия каждую неделю.",
                name: "Ирина, мама Ани"
              },
              {
                text: "Думал, что поздно начинать в 50 лет. Оказалось - никогда не поздно!",
                name: "Виктор, 52 года"
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">"{review.text}"</p>
                <p className="text-sm font-medium">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
