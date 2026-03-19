import { Link } from 'react-router-dom';
import { FaMusic, FaVk, FaTelegram, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FaMusic className="text-2xl text-yellow-400" />
              <span className="text-xl font-bold">MurmanskWave</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Музыкальная школа в Мурманске для детей и взрослых. 
              Учим играть на любимых инструментах с 2015 года.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Направления</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guitar" className="text-gray-400 hover:text-white transition-colors">
                  🎸 Гитара
                </Link>
              </li>
              <li>
                <Link to="/vocal" className="text-gray-400 hover:text-white transition-colors">
                  🎤 Вокал
                </Link>
              </li>
              <li>
                <Link to="/saxophone" className="text-gray-400 hover:text-white transition-colors">
                  🎷 Саксофон
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <FaPhone className="text-yellow-400" />
                <a href="tel:+78152123456" className="hover:text-white transition-colors">
                  +7 (8152) 12-34-56
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FaEnvelope className="text-yellow-400" />
                <a href="mailto:info@murmanskwave.ru" className="hover:text-white transition-colors">
                  info@murmanskwave.ru
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <span>г. Мурманск, ул. Ленина, 45</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaVk className="text-xl" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-sky-500 transition-colors"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
            <Link
              to="/trial"
              className="inline-block mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Записаться на урок
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          <p>© 2024 MurmanskWave. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
