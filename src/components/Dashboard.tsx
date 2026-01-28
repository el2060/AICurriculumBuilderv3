import React from 'react';

interface DashboardProps {
  onCreateNew: () => void;
  onDesignModule?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onCreateNew, onDesignModule }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-16 px-8">
        {/* Hero */}
        <div className="text-center space-y-8">
          <div className="inline-block border-8 border-black p-12 bg-white">
            <h1 className="text-8xl font-black uppercase tracking-widest mb-6">CURRICULUM<br/>BUILDER</h1>
            <div className="border-t-4 border-black pt-6">
              <p className="text-3xl uppercase tracking-widest font-black">3 SIMPLE STEPS</p>
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="flex gap-6 justify-center">
            <button 
              onClick={onCreateNew}
              className="bg-black text-white text-2xl py-6 px-12 font-black uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-all"
            >
              [■] Build Curriculum
            </button>
            {onDesignModule && (
              <button 
                onClick={onDesignModule}
                className="bg-white text-black text-2xl py-6 px-12 font-black uppercase tracking-widest border-4 border-black hover:bg-black hover:text-white transition-all"
              >
                [◆] Design Module
              </button>
            )}
          </div>
        </div>

        {/* Main CTA */}
        <button 
          onClick={onCreateNew}
          className="w-full bg-black text-white text-4xl py-12 px-32 font-black uppercase tracking-widest border-8 border-black hover:bg-white hover:text-black transition-all"
        >
          ▶ START
        </button>

        {/* Steps Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="border-6 border-black bg-white p-8 hover:bg-black hover:text-white transition-all group">
            <div className="text-center space-y-4">
              <div className="text-7xl font-black border-b-4 border-black pb-4 group-hover:border-white">1</div>
              <div className="text-2xl font-black uppercase tracking-wider">▣ DETAILS</div>
              <div className="text-base uppercase tracking-wider font-bold">Name + Type</div>
            </div>
          </div>
          
          <div className="border-6 border-black bg-white p-8 hover:bg-black hover:text-white transition-all group">
            <div className="text-center space-y-4">
              <div className="text-7xl font-black border-b-4 border-black pb-4 group-hover:border-white">2</div>
              <div className="text-2xl font-black uppercase tracking-wider">▤ STRUCTURE</div>
              <div className="text-base uppercase tracking-wider font-bold">Duration + Modules</div>
            </div>
          </div>
          
          <div className="border-6 border-black bg-white p-8 hover:bg-black hover:text-white transition-all group">
            <div className="text-center space-y-4">
              <div className="text-7xl font-black border-b-4 border-black pb-4 group-hover:border-white">3</div>
              <div className="text-2xl font-black uppercase tracking-wider">✓ ASSESSMENT</div>
              <div className="text-base uppercase tracking-wider font-bold">Evaluation Methods</div>
            </div>
          </div>
        </div>

        {/* Module Designer Info */}
        <div className="border-4 border-black bg-white p-8 space-y-4">
          <h3 className="text-3xl font-black uppercase tracking-wider border-b-4 border-black pb-4">
            [◆] MODULE DESIGNER
          </h3>
          <p className="text-lg font-bold uppercase tracking-wider">
            AI-powered module design with automatic generation of:
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="border-2 border-black p-4 text-center">
              <div className="text-4xl mb-2">📋</div>
              <div className="font-black uppercase text-sm">Module Outline</div>
            </div>
            <div className="border-2 border-black p-4 text-center">
              <div className="text-4xl mb-2">📝</div>
              <div className="font-black uppercase text-sm">Lesson Plans</div>
            </div>
            <div className="border-2 border-black p-4 text-center">
              <div className="text-4xl mb-2">✎</div>
              <div className="font-black uppercase text-sm">Activities</div>
            </div>
            <div className="border-2 border-black p-4 text-center">
              <div className="text-4xl mb-2">◆</div>
              <div className="font-black uppercase text-sm">Assessments</div>
            </div>
          </div>
          {onDesignModule && (
            <button 
              onClick={onDesignModule}
              className="w-full bg-black text-white py-6 font-black uppercase tracking-wider text-xl hover:bg-gray-900"
            >
              → Start Designing Module
            </button>
          )}
        </div>

        {/* Final CTA */}
        <div className="flex justify-center">
          <button 
            onClick={onCreateNew}
            className="btn-primary bg-black text-white text-2xl py-8 px-16 font-black"
          >
            ► START BUILDING
          </button>
        </div>
      </div>
    </div>
  );
};

