import React, { ReactNode } from 'react';

interface HeaderProps {
  userName: string;
  schoolName: string;
  role: string;
}

export const Header: React.FC<HeaderProps> = ({ userName, schoolName, role }) => {
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  });

  return (
    <header className="border-b-8 border-black bg-white sticky top-0 z-50">
      <div className="max-w-full px-8 py-4 flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-6">
          <img 
            src="https://www.np.edu.sg/images/default-source/default-album/img-logo.png?sfvrsn=764583a6_19" 
            alt="NP Logo"
            className="h-16 w-auto"
          />
          <div>
            <p className="text-sm uppercase tracking-widest font-black text-gray-600">Proof-of-Concept</p>
            <h1 className="text-3xl font-black uppercase tracking-widest">
              AI CURRICULUM BUILDER
            </h1>
          </div>
        </div>

        {/* Right: User Info */}
        <div className="flex items-center gap-12 text-right">
          <div>
            <p className="text-base font-black uppercase tracking-wider">{userName}</p>
            <p className="text-sm uppercase tracking-widest mt-1 font-bold">{role}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest font-bold">UPDATED</p>
            <p className="text-2xl font-black uppercase tracking-wider">{today}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

interface SidebarItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-8 py-5 text-base uppercase tracking-widest font-black border-r-4 border-b-4 transition-all ${
      isActive
        ? 'bg-black text-white border-black'
        : 'bg-white text-black border-black hover:bg-gray-100'
    }`}
  >
    <span className="text-2xl mr-4 font-bold">{icon}</span> {label}
  </button>
);

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <aside className="hidden">
      <nav className="p-0">
        <SidebarItem
          icon="[■]"
          label="Dashboard"
          isActive={activeSection === 'dashboard'}
          onClick={() => onSectionChange('dashboard')}
        />
        <SidebarItem
          icon="[►]"
          label="Create Curriculum"
          isActive={activeSection === 'create'}
          onClick={() => onSectionChange('create')}
        />
        <SidebarItem
          icon="[◆]"
          label="AI Assistant"
          isActive={activeSection === 'ai-assistant'}
          onClick={() => onSectionChange('ai-assistant')}
        />
        <SidebarItem
          icon="[▬]"
          label="Templates"
          isActive={activeSection === 'templates'}
          onClick={() => onSectionChange('templates')}
        />
      </nav>
    </aside>
  );
};

interface MainLayoutProps {
  children: ReactNode;
  sidebarOpen?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, sidebarOpen = true }) => (
  <main className="flex-1 p-8 max-w-full">
    {children}
  </main>
);

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  highlight?: 'ai' | 'none';
}

export const Card: React.FC<CardProps> = ({ title, children, className = '', highlight = 'none' }) => {
  const highlightClass = highlight === 'ai' ? 'bg-black text-white' : 'bg-white text-black';
  const borderClass = highlight === 'ai' ? 'border-4 border-black' : 'border-3 border-black';
  
  return (
    <div className={`${borderClass} p-8 bg-white ${className}`}>
      {title && <h3 className="section-title">{title}</h3>}
      <div className={highlight === 'ai' ? 'text-white' : 'text-black'}>
        {children}
      </div>
    </div>
  );
};

interface AIRecommendationProps {
  title: string;
  items: string[];
}

export const AIRecommendation: React.FC<AIRecommendationProps> = ({ title, items }) => (
  <div className="bg-black text-white p-8 border-4 border-black mb-8">
    <h4 className="font-black uppercase tracking-widest mb-4 text-2xl">{title}</h4>
    <span className="ai-badge mb-6 inline-block">◆ AI POWERED</span>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="text-base uppercase tracking-wider border-l-4 border-white pl-4">
          ▸ {item}
        </li>
      ))}
    </ul>
  </div>
);
