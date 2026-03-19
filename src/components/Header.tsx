import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMusic, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/guitar', label: 'Гитара' },
    { path: '/vocal', label: 'Вокал' },
    { path: '/saxophone', label: 'Саксофон' },
    { path: '/teachers', label: 'Преподаватели' },
    { path: '/prices', label: 'Цены' },
    { path: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <FaMusic className="text-3xl text-yellow-400 group-hover:animate-pulse" />
            <div>
              <h1 className="text-2xl font-bold text-white">MurmanskWave</h1>
              <p className="text-xs text-purple-300">Школа музыки</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-yellow-500 text-slate-900'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/trial"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Пробный урок
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-center font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-yellow-500 text-slate-900'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/trial"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-3 rounded-full font-bold text-center mt-4"
              >
                Пробный урок
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
