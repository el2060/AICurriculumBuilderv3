import React from 'react';
import { Card, AIRecommendation } from './Layout';

export const MyCurricula: React.FC = () => {
  const curricula = [
    {
      id: '1',
      title: 'Basic Nursing Skills',
      type: 'Short Course',
      status: 'Completed' as const,
      progress: 100,
      modules: 4,
      students: 45,
      lastModified: '2024-01-15'
    },
    {
      id: '2',
      title: 'Advanced Wound Care',
      type: 'PET',
      status: 'In Progress' as const,
      progress: 65,
      modules: 6,
      students: 0,
      lastModified: '2024-01-22'
    },
    {
      id: '3',
      title: 'Infection Control',
      type: 'CET',
      status: 'Draft' as const,
      progress: 30,
      modules: 5,
      students: 0,
      lastModified: '2024-01-20'
    },
    {
      id: '4',
      title: 'Healthcare Management Diploma',
      type: 'Full Programme',
      status: 'In Progress' as const,
      progress: 55,
      modules: 12,
      students: 120,
      lastModified: '2024-01-18'
    }
  ];

  const getStatusColor = (status: 'Draft' | 'In Progress' | 'Completed') => {
    switch (status) {
      case 'Completed':
        return 'bg-black text-white border-4 border-black';
      case 'In Progress':
        return 'bg-white text-black border-4 border-black';
      case 'Draft':
        return 'bg-white text-black border-4 border-gray-400';
    }
  };

  return (
    <div className="space-y-10">
      <div className="border-b-4 border-black pb-8">
        <h2 className="text-5xl font-black uppercase tracking-widest mb-3">MY CURRICULA</h2>
        <p className="text-lg uppercase tracking-widest font-bold">View and manage all your curricula</p>
      </div>

      {/* Filter/Search */}
      <div className="flex gap-4">
        <input
          type="search"
          placeholder="SEARCH CURRICULA..."
          className="flex-1 text-base"
        />
        <select className="border-3 border-black p-4 font-black uppercase tracking-wider text-base min-w-max">
          <option>ALL STATUS</option>
          <option>DRAFT</option>
          <option>IN PROGRESS</option>
          <option>COMPLETED</option>
        </select>
      </div>

      {/* Curricula List */}
      <div className="space-y-4">
        {curricula.map((curriculum) => (
          <div key={curriculum.id} className="border-4 border-black p-8 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between gap-8 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-2xl font-black uppercase tracking-wider">{curriculum.title}</h3>
                  <span className={`text-sm px-4 py-2 font-black uppercase tracking-wider ${getStatusColor(curriculum.status)}`}>
                    {curriculum.status}
                  </span>
                </div>

                <p className="text-base font-bold uppercase tracking-wider mb-4">
                  {curriculum.type} • {curriculum.modules} MODULES • {curriculum.students > 0 ? `${curriculum.students} STUDENTS` : 'NOT PUBLISHED'}
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <p className="text-sm font-black uppercase tracking-wider mb-2">LAST MODIFIED</p>
                <p className="text-base font-bold mb-8">{curriculum.lastModified}</p>

                <div className="space-y-2 flex gap-2 flex-col">
                  <button className="btn-primary bg-black text-white text-base py-3 px-6">
                    [✎] EDIT
                  </button>
                  <button className="btn-secondary text-base py-3 px-6">
                    [◇] VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="border-t-3 border-black pt-6">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-black uppercase tracking-wider">COMPLETION</p>
                <p className="text-sm font-black uppercase tracking-wider">{curriculum.progress}%</p>
              </div>
              <div className="w-full bg-white border-3 border-black h-8 overflow-hidden">
                <div
                  className="h-full bg-black transition-all"
                  style={{ width: `${curriculum.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <Card title="CURRICULUM STATISTICS">
        <div className="grid grid-cols-4 gap-8">
          {[
            { label: 'TOTAL CURRICULA', value: curricula.length },
            { label: 'COMPLETED', value: curricula.filter(c => c.status === 'Completed').length },
            { label: 'IN PROGRESS', value: curricula.filter(c => c.status === 'In Progress').length },
            { label: 'TOTAL STUDENTS', value: curricula.reduce((sum, c) => sum + c.students, 0) }
          ].map((stat, idx) => (
            <div key={idx} className="text-center border-r-3 border-black pr-8 last:border-0 last:pr-0">
              <div className="text-5xl font-black mb-3">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Recommendations */}
      <AIRecommendation 
        title="RECOMMENDED NEXT STEPS"
        items={[
          'Complete draft curricula and submit for review',
          'Publish completed curricula to make available to students',
          'Gather feedback from students in active programmes',
          'Review assessment results and update learning outcomes'
        ]}
      />
    </div>
  );
};
