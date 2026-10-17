import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'compact' | 'segmented';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'compact', className = '' }) => {
  const { theme, toggleTheme, setTheme } = useTheme();

  if (variant === 'segmented') {
    return (
      <div className={`theme-toggle-segmented ${className}`}>
        <button
          type="button"
          className={`segmented-btn ${theme === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
          aria-pressed={theme === 'light'}
          aria-label="Select Light Theme"
        >
          <Sun size={15} className="segmented-icon" />
          <span>Light</span>
        </button>
        <button
          type="button"
          className={`segmented-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => setTheme('dark')}
          aria-pressed={theme === 'dark'}
          aria-label="Select Dark Theme"
        >
          <Moon size={15} className="segmented-icon" />
          <span>Dark</span>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={`theme-toggle-icon-wrap ${theme}`}>
        {theme === 'dark' ? (
          <Sun size={18} className="theme-toggle-icon sun" />
        ) : (
          <Moon size={18} className="theme-toggle-icon moon" />
        )}
      </div>
      <span className="theme-toggle-tooltip">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
};
