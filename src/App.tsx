import React, { useState } from 'react';
import { Header, Sidebar, MainLayout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { CurriculumBuilder } from './components/CurriculumBuilder';
import { AIAssistant } from './components/AIAssistant';
import { ModuleDesigner } from './components/ModuleDesigner';
import { Templates } from './components/Templates';
import './index.css';

type Section = 'dashboard' | 'create' | 'ai-assistant' | 'module-designer' | 'templates';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard');

  const handleCreateNew = () => {
    setActiveSection('create');
  };

  const handleDesignModule = () => {
    setActiveSection('module-designer');
  };

  const handleBackToDashboard = () => {
    setActiveSection('dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userName="User" 
        schoolName="Ngee Ann Polytechnic"
        role="AI Curriculum Builder"
      />
      
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={(section) => setActiveSection(section as Section)}
        />
        
        <MainLayout>
          {activeSection === 'dashboard' && <Dashboard onCreateNew={handleCreateNew} onDesignModule={handleDesignModule} />}
          {activeSection === 'create' && <CurriculumBuilder onCancel={handleBackToDashboard} />}
          {activeSection === 'ai-assistant' && <AIAssistant />}
          {activeSection === 'module-designer' && <ModuleDesigner onClose={handleBackToDashboard} />}
          {activeSection === 'templates' && <Templates />}
        </MainLayout>
      </div>
    </div>
  );
}

export default App;
