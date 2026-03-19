import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaVk, FaTelegram, FaInstagram } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function Contacts() {
  const schedule = [
    { day: 'Понедельник', time: '10:00 - 21:00' },
    { day: 'Вторник', time: '10:00 - 21:00' },
    { day: 'Среда', time: '10:00 - 21:00' },
    { day: 'Четверг', time: '10:00 - 21:00' },
    { day: 'Пятница', time: '10:00 - 21:00' },
    { day: 'Суббота', time: '10:00 - 18:00' },
    { day: 'Воскресенье', time: '10:00 - 16:00' }
  ];

  const contacts = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Телефон',
      value: '+7 (8152) 12-34-56',
      link: 'tel:+78152123456',
      desc: 'Звоните с 10:00 до 21:00'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'info@murmanskwave.ru',
      link: 'mailto:info@murmanskwave.ru',
      desc: 'Ответим в течение 24 часов'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Адрес',
      value: 'г. Мурманск, ул. Ленина, 45',
      link: 'https://maps.yandex.ru',
      desc: '5 минут от станции метро'
    }
  ];

  const socials = [
    { icon: <FaVk className="text-2xl" />, name: 'ВКонтакте', link: 'https://vk.com', color: 'hover:bg-blue-600' },
    { icon: <FaTelegram className="text-2xl" />, name: 'Telegram', link: 'https://t.me', color: 'hover:bg-sky-500' },
    { icon: <FaInstagram className="text-2xl" />, name: 'Instagram', link: 'https://instagram.com', color: 'hover:bg-pink-600' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Наши <span className="text-yellow-400">контакты</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши вопросы!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300 group"
              >
                <div className="text-yellow-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                <p className="text-xl font-semibold text-yellow-400 mb-1">{contact.value}</p>
                <p className="text-sm text-gray-400">{contact.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Schedule */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  Как нас найти
                </h2>
              </div>
              {/* Yandex Map Embed */}
              <div className="relative h-[400px] bg-slate-800">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Af1e6b7c7e7d7c7b7a7f7e7d7c7b7a7f7e7d7c7b7a7f7e7d7c7b7a7f7e7d7c7b7a&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта расположения школы музыки MurmanskWave"
                  className="absolute inset-0"
                ></iframe>
                {/* Fallback if iframe doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700">
                  <div className="text-center p-8">
                    <FaMapMarkerAlt className="text-6xl text-yellow-400 mx-auto mb-4" />
                    <p className="text-xl font-bold mb-2">г. Мурманск</p>
                    <p className="text-gray-400">ул. Ленина, 45</p>
                    <a
                      href="https://yandex.ru/maps/?text=Мурманск ул. Ленина 45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors"
                    >
                      Открыть в Яндекс.Картах
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Как добраться:</h3>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>🚇 От метро «Площадь Ленина» — 5 минут пешком</li>
                  <li>🚌 Остановка «ул. Ленина» — маршруты 5, 10, 18</li>
                  <li>🚗 Парковка во дворе дома</li>
                </ul>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FaClock className="text-yellow-400" />
                  Расписание работы
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {schedule.map((item, index) => {
                    const today = new Date().getDay();
                    const dayIndex = index === 6 ? 0 : index + 1;
                    const isToday = today === dayIndex;
                    
                    return (
                      <div
                        key={index}
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          isToday ? 'bg-yellow-400/20 border border-yellow-400/30' : 'bg-white/5'
                        }`}
                      >
                        <span className={`font-medium ${isToday ? 'text-yellow-400' : ''}`}>
                          {item.day} {isToday && '(сегодня)'}
                        </span>
                        <span className={isToday ? 'font-bold' : 'text-gray-400'}>
                          {item.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 text-sm text-gray-500">
                  * Занятия проводятся по предварительной записи. 
                  Возможны индивидуальные слоты вне расписания.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Мы в <span className="text-yellow-400">соцсетях</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl ${social.color} transition-all duration-300 hover:-translate-y-1`}
              >
                {social.icon}
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8 max-w-xl mx-auto">
            Подписывайтесь на наши соцсети, чтобы быть в курсе новостей, 
            акций и видео с выступлений наших учеников!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Напишите нам"
              subtitle="Заполните форму, и мы свяжемся с вами в ближайшее время"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
