import React, { useState } from 'react';
import { Card, AIRecommendation } from './Layout';

interface Template {
  id: string;
  name: string;
  type: string;
  description: string;
  modulesCount: number;
  estimatedDuration: string;
}

export const Templates: React.FC = () => {
  const [templates] = useState<Template[]>([
    {
      id: '1',
      name: 'Healthcare Diploma Programme',
      type: 'Full Programme',
      description: 'Complete 2-year nursing and healthcare management programme with core and elective modules',
      modulesCount: 12,
      estimatedDuration: '104 weeks'
    },
    {
      id: '2',
      name: 'Advanced Clinical Skills',
      type: 'PET',
      description: 'Professional education programme for clinical skill enhancement and specialization',
      modulesCount: 6,
      estimatedDuration: '12 weeks'
    },
    {
      id: '3',
      name: 'Infection Control Fundamentals',
      type: 'Short Course',
      description: 'Quick-start curriculum for infection prevention and control standards compliance',
      modulesCount: 4,
      estimatedDuration: '4 weeks'
    },
    {
      id: '4',
      name: 'Patient Communication & Care',
      type: 'CET',
      description: 'Continuing education on effective patient interaction and holistic care approaches',
      modulesCount: 5,
      estimatedDuration: '8 weeks'
    },
    {
      id: '5',
      name: 'Digital Health Integration',
      type: 'PET',
      description: 'Training on healthcare technology, EHR systems, and digital transformation',
      modulesCount: 7,
      estimatedDuration: '10 weeks'
    },
    {
      id: '6',
      name: 'Leadership in Healthcare',
      type: 'Full Programme',
      description: 'Executive development programme for healthcare managers and organizational leaders',
      modulesCount: 14,
      estimatedDuration: '36 weeks'
    }
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <div className="border-b-4 border-black pb-8">
        <h2 className="text-5xl font-black uppercase tracking-widest mb-3">CURRICULUM TEMPLATES</h2>
        <p className="text-lg uppercase tracking-widest font-bold">Browse examples and use as reference for your curriculum</p>
      </div>

      {/* Filter/Search */}
      <div className="flex gap-4">
        <input
          type="search"
          placeholder="SEARCH TEMPLATES..."
          className="flex-1 text-base"
        />
        <select className="border-3 border-black p-4 font-black uppercase tracking-wider text-base min-w-max">
          <option>ALL TYPES</option>
          <option>Full Programme</option>
          <option>PET</option>
          <option>CET</option>
          <option>Short Course</option>
        </select>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-2 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer transition border-4 border-black p-8 ${
              selectedTemplate === template.id ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-black uppercase tracking-wider flex-1">{template.name}</h3>
                <span className="text-sm px-4 py-2 border-2 border-current font-black uppercase tracking-wider whitespace-nowrap ml-4">
                  {template.type}
                </span>
              </div>
              <p className="text-base font-bold uppercase tracking-wider">{template.description}</p>
            </div>

            <div className="border-t-3 border-current pt-6 grid grid-cols-2 gap-6">
              <div className="border-r-3 border-current pr-6">
                <div className="text-4xl font-black">{template.modulesCount}</div>
                <div className="text-sm uppercase tracking-widest font-bold">MODULES</div>
              </div>
              <div>
                <div className="text-3xl font-black">{template.estimatedDuration}</div>
                <div className="text-sm uppercase tracking-widest font-bold">DURATION</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Template Details */}
      {selectedTemplate && (
        <Card title="TEMPLATE REFERENCE">
          <div className="space-y-10">
            <div>
              <h4 className="font-black uppercase tracking-wider mb-6 text-2xl border-b-3 border-black pb-4">SUGGESTED MODULE STRUCTURE</h4>
              <div className="space-y-3 font-mono">
                <div className="flex items-center justify-between border-b-3 border-black pb-4">
                  <span className="font-bold uppercase tracking-wider text-base">Foundation & Orientation</span>
                  <span className="font-black text-lg">2 WEEKS</span>
                </div>
                <div className="flex items-center justify-between border-b-3 border-black pb-4">
                  <span className="font-bold uppercase tracking-wider text-base">Core Knowledge & Skills</span>
                  <span className="font-black text-lg">4 WEEKS</span>
                </div>
                <div className="flex items-center justify-between border-b-3 border-black pb-4">
                  <span className="font-bold uppercase tracking-wider text-base">Practical Application</span>
                  <span className="font-black text-lg">3 WEEKS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold uppercase tracking-wider text-base">Assessment & Review</span>
                  <span className="font-black text-lg">1 WEEK</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-wider mb-6 text-2xl border-b-3 border-black pb-4">USE THIS AS REFERENCE</h4>
              <p className="text-base font-bold uppercase tracking-wider">Click "Create Curriculum" in the sidebar to start building your own curriculum. Use this template as a reference for structure and timing.</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
