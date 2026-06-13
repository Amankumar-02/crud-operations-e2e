import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext.jsx';
import { removeAuthToken, logout } from '../utils/authService.js';

const menuItems = [
  { icon: '📊', label: 'Dashboard', path: '/dashboard' },
  { icon: '📁', label: 'Projects', path: null },
  { icon: '✓', label: 'Tasks', path: null },
  { icon: '👥', label: 'Teams', path: null },
  { icon: '🎯', label: 'Goals', path: null },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      removeAuthToken();
      navigate('/');
    }
  };

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-slate-900 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} z-40 flex flex-col`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-700 p-4">
        <Link to="/" className="flex-1">
          {isOpen && <span className="text-xl font-semibold hover:text-indigo-400 transition">TaskFlow</span>}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 hover:bg-slate-800"
        >
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item, index) => {
          const itemPath = item.path || '/dashboard';
          return (
            <Link
              key={`${item.label}-${index}`}
              to={itemPath}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                location.pathname === item.path
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-slate-700 p-4">
        <button
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition hover:bg-blue-900/20 hover:text-blue-400"
        >
          <span className="text-xl">⚙️</span>
          {isOpen && <span className="text-sm font-medium">Settings</span>}
        </button>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition hover:bg-red-900/20 hover:text-red-400"
        >
          <span className="text-xl">🚪</span>
          {isOpen && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
