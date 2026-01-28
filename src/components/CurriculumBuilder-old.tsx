import React, { useState } from 'react';
import { Card, AIRecommendation } from './Layout';

interface FormData {
  curriculumName: string;
  curriculumType: string;
  description: string;
  discipline: string;
  level: string;
  duration: string;
}

interface CurriculumBuilderProps {
  onCancel: () => void;
}

export const CurriculumBuilder: React.FC<CurriculumBuilderProps> = ({ onCancel }) => {
  const [formData, setFormData] = useState<FormData>({
    curriculumName: '',
    curriculumType: 'Short Course',
    description: '',
    discipline: '',
    level: '',
    duration: ''
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Curriculum created! Ready for content building.');
    onCancel();
  };

  const aiSuggestions = {
    1: [
      'Based on "Nursing Skills" programmes, suggest 10-12 week duration',
      'Include assessment checkpoints every 2 weeks',
      'Consider online + in-person hybrid format for flexibility'
    ],
    2: [
      'Recommended structure: Foundation (2 weeks) → Core Skills (6 weeks) → Application (4 weeks)',
      'Add capstone project for practical validation',
      'Include peer review components for engagement'
    ],
    3: [
      'Consider assessment methods: Practical exams (40%), Written assignments (30%), Portfolio (30%)',
      'Align with NQF Level 5 standards',
      'Include formative assessments throughout'
    ],
    4: [
      'AI can generate module learning outcomes',
      'Auto-create assessment rubrics',
      'Generate course syllabus and materials outline'
    ]
  };

  const steps = [
    { num: 1, label: 'Curriculum Details' },
    { num: 2, label: 'Structure & Duration' },
    { num: 3, label: 'Assessment Plan' },
    { num: 4, label: 'Review & Confirm' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-2">Create New Curriculum</h2>
        <p className="text-gray-600 uppercase tracking-wider text-sm">Step-by-step guided curriculum design with AI assistance</p>
      </div>

      {/* Step Indicator */}
      <div className="flex gap-2 border border-dark rounded">
        {steps.map((s) => (
          <div 
            key={s.num}
            className={`flex-1 p-4 text-center border-r border-dark last:border-0 ${
              step === s.num ? 'bg-dark text-white' : 'bg-white'
            }`}
          >
            <div className="font-bold text-lg mb-1">{s.num}</div>
            <div className="text-xs uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* AI Suggestions */}
      <AIRecommendation 
        title={`AI Suggestions for Step ${step}`}
        items={aiSuggestions[step as keyof typeof aiSuggestions] || []}
      />

      {/* Form Content */}
      <Card title={`Step ${step}: ${steps[step - 1].label}`} highlight="ai">
        <div className="space-y-6">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                  Curriculum Name *
                </label>
                <input
                  type="text"
                  name="curriculumName"
                  value={formData.curriculumName}
                  onChange={handleInputChange}
                  placeholder="e.g., Advanced Wound Care Management"
                  className="w-full border border-dark p-3 rounded text-sm uppercase focus:outline-none focus:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                  Curriculum Type *
                </label>
                <select
                  name="curriculumType"
                  value={formData.curriculumType}
                  onChange={handleInputChange}
                  className="w-full border border-dark p-3 rounded text-sm uppercase focus:outline-none focus:bg-gray-50"
                >
                  <option>Short Course</option>
                  <option>PET (Professional Education & Training)</option>
                  <option>CET (Continuing Education & Training)</option>
                  <option>Full Programme</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                  Description / Overview
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the curriculum objectives and scope..."
                  rows={4}
                  className="w-full border border-dark p-3 rounded text-sm focus:outline-none focus:bg-gray-50"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                    Discipline / Subject Area *
                  </label>
                  <input
                    type="text"
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleInputChange}
                    placeholder="e.g., Health Sciences, Nursing"
                    className="w-full border border-dark p-3 rounded text-sm uppercase focus:outline-none focus:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                    NQF Level / Study Level
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full border border-dark p-3 rounded text-sm uppercase focus:outline-none focus:bg-gray-50"
                  >
                    <option>---</option>
                    <option>Level 1-3 (Foundation)</option>
                    <option>Level 4-5 (Diploma)</option>
                    <option>Level 6-7 (Advanced)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                  Recommended Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 12 weeks, 6 months"
                  className="w-full border border-dark p-3 rounded text-sm uppercase focus:outline-none focus:bg-gray-50"
                />
              </div>

              <div className="bg-gray-50 border border-dark p-4 rounded">
                <p className="text-sm font-semibold uppercase tracking-wider mb-2">📋 Suggested Structure:</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Foundation / Orientation Phase</li>
                  <li>• Core Knowledge & Skills Modules</li>
                  <li>• Practical Application & Projects</li>
                  <li>• Assessment & Evaluation Phase</li>
                </ul>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="bg-gray-50 border border-dark p-4 rounded mb-6">
                <p className="text-sm font-semibold uppercase tracking-wider mb-3">Assessment Methods Recommended:</p>
                <div className="space-y-3">
                  {['Practical Exams (40%)', 'Written Assignments (30%)', 'Portfolio (20%)', 'Participation (10%)'].map((method) => (
                    <label key={method} className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-sm uppercase tracking-wider">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                  Total Pass Mark %
                </label>
                <input
                  type="number"
                  placeholder="e.g., 50"
                  min="0"
                  max="100"
                  className="w-full border border-dark p-3 rounded text-sm uppercase focus:outline-none focus:bg-gray-50"
                />
              </div>

              <div className="bg-blue-50 border-l-4 border-primary-blue p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>💡 AI Insight:</strong></p>
                <p className="text-sm text-gray-600">Blended assessment methods improve student engagement by 45% and provide comprehensive skill evaluation.</p>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="bg-gray-50 border border-dark p-6 rounded">
                <h4 className="font-semibold uppercase tracking-wider mb-4">Review Your Curriculum</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-sm font-semibold uppercase tracking-wider">Name:</span>
                    <span className="text-sm">{formData.curriculumName || '—'}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-sm font-semibold uppercase tracking-wider">Type:</span>
                    <span className="text-sm">{formData.curriculumType}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-sm font-semibold uppercase tracking-wider">Discipline:</span>
                    <span className="text-sm">{formData.discipline || '—'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold uppercase tracking-wider">Duration:</span>
                    <span className="text-sm">{formData.duration || '—'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-blue text-white p-6 rounded border-4 border-primary-blue">
                <p className="text-sm font-semibold uppercase tracking-wider mb-2">✨ Next Steps:</p>
                <ul className="text-sm space-y-2">
                  <li>✓ Add modules and learning outcomes</li>
                  <li>✓ Generate assessment rubrics with AI assistance</li>
                  <li>✓ Create course materials and timeline</li>
                  <li>✓ Export and share with colleagues</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4">
        <button 
          onClick={onCancel}
          className="btn-secondary"
        >
          Cancel
        </button>
        <div className="space-x-4">
          {step > 1 && (
            <button 
              onClick={() => setStep(step - 1)}
              className="btn-secondary"
            >
              ← Back
            </button>
          )}
          {step < 4 ? (
            <button 
              onClick={handleNext}
              className="btn-primary"
            >
              Next →
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              className="btn-primary bg-green-600 hover:bg-green-700"
            >
              ✓ Create Curriculum
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
