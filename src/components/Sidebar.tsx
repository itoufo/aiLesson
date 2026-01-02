import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import type { Section } from '../data/curriculum';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SectionItem = ({ section }: { section: Section }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="sidebar-section">
      <button
        className="section-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="section-title">{section.title}</span>
        <span className={`chevron ${isExpanded ? 'expanded' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M4 2L8 6L4 10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
        </span>
      </button>
      {isExpanded && (
        <ul className="section-items">
          {section.items.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/doc/${item.id}`}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>AI活用人材育成</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close sidebar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="sidebar-nav">
          {curriculum.map((section) => (
            <SectionItem key={section.id} section={section} />
          ))}
        </nav>
      </aside>
    </>
  );
};
