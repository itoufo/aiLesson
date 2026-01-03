import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import './Layout.css';

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-area">
        <header className="top-bar">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <h1 className="top-bar-title">AI活用人材育成カリキュラム</h1>
          <img
            src="/docs/images/common/haiia_logo-1-300x297.png"
            alt="一般社団法人 健全AI教育協会"
            className="top-bar-logo"
          />
        </header>
        <main className="main-content">
          <Outlet />
        </main>
        <footer className="site-footer">
          <p>©健全AI教育協会</p>
        </footer>
      </div>
    </div>
  );
};
