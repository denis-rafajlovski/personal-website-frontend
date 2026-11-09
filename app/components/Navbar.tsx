import { useEffect, useState } from 'react';
import { FaBars, FaLaptopCode, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const location = useLocation();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#030712' : '#ffffff');
  };

  const base =
    'transition text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400';
  const active = 'text-blue-600 dark:text-blue-400 font-semibold';
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? active : base;
  const homeActive = location.pathname === '/';

  const ThemeButton = ({ className = '' }: { className?: string }) => (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 ${className}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          reloadDocument
          className="flex items-center gap-2 text-lg font-bold text-blue-600 dark:text-blue-300"
        >
          <FaLaptopCode className="text-blue-500 dark:text-blue-400 text-xl" /> Denis
          The Friendly Developer
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link className={homeActive ? active : base} to="/" reloadDocument>
            Home
          </Link>
          <NavLink className={linkClass} to="/projects">
            Projects
          </NavLink>
          <NavLink className={linkClass} to="/blog">
            Blog
          </NavLink>
          <NavLink className={linkClass} to="/about">
            About
          </NavLink>
          <NavLink className={linkClass} to="/contact">
            Contact
          </NavLink>
          <ThemeButton />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeButton />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-500 dark:text-blue-400 text-xl cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex flex-col items-center gap-3 text-sm">
          <Link
            className={homeActive ? active : base}
            to="/"
            reloadDocument
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <NavLink className={linkClass} to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink className={linkClass} to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
          <NavLink className={linkClass} to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink className={linkClass} to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
