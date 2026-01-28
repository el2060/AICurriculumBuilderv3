import React, { useState } from 'react';

interface FormData {
  curriculumName: string;
  curriculumType: string;
  description: string;
  modules: string;
  assessmentMethods: string;
  passMark: string;
}

interface CurriculumBuilderProps {
  onCancel: () => void;
}

export const CurriculumBuilder: React.FC<CurriculumBuilderProps> = ({ onCancel }) => {
  const [formData, setFormData] = useState<FormData>({
    curriculumName: '',
    curriculumType: 'Short Course',
    description: '',
    modules: '',
    assessmentMethods: '',
    passMark: ''
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => {
    console.log('Curriculum design:', formData);
    alert('✓ CURRICULUM COMPLETE\n\nYour curriculum outline is ready.');
    onCancel();
  };

  const steps = [
    { num: 1, label: 'Details' },
    { num: 2, label: 'Structure' },
    { num: 3, label: 'Assessment' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center border-8 border-black p-8 bg-black text-white">
          <h2 className="text-6xl font-black uppercase tracking-widest mb-4">STEP {step} OF 3</h2>
          <p className="text-3xl uppercase tracking-widest font-black">{steps[step - 1].label}</p>
        </div>

        {/* Step Progress Bar */}
        <div className="flex gap-4">
          {steps.map((s) => (
            <div 
              key={s.num}
              className={`flex-1 border-6 border-black text-center py-8 transition-all ${
                step === s.num 
                  ? 'bg-black text-white' 
                  : step > s.num 
                  ? 'bg-gray-200 text-black' 
                  : 'bg-white text-gray-400'
              }`}
            >
              <div className="text-5xl font-black mb-2">{s.num}</div>
              <div className="text-xl uppercase tracking-widest font-black">{s.label}</div>
            </div>
          ))}
        </div>

      {/* Form Content */}
      <div className="border-8 border-black p-12 bg-white space-y-12">
        {step === 1 && (
          <>
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">▣</span>
                <label className="text-3xl font-black uppercase tracking-wider">
                  CURRICULUM NAME
                </label>
              </div>
              <input
                type="text"
                name="curriculumName"
                value={formData.curriculumName}
                onChange={handleInputChange}
                placeholder="e.g., Advanced Wound Care"
                className="border-6 border-black w-full p-6 text-2xl font-bold uppercase tracking-wide focus:bg-black focus:text-white transition-all"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">▤</span>
                <label className="text-3xl font-black uppercase tracking-wider">
                  TYPE
                </label>
              </div>
              <select
                name="curriculumType"
                value={formData.curriculumType}
                onChange={handleInputChange}
                className="border-6 border-black w-full p-6 text-2xl font-bold uppercase tracking-wide"
              >
                <option>Short Course</option>
                <option>PET (Professional Education & Training)</option>
                <option>CET (Continuing Education & Training)</option>
                <option>Full Programme</option>
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">▥</span>
                <label className="text-3xl font-black uppercase tracking-wider">
                  DESCRIPTION
                </label>
              </div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="What will students learn?"
                rows={4}
                className="border-6 border-black w-full p-6 font-mono text-xl font-bold uppercase tracking-wide focus:bg-black focus:text-white transition-all"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">⏱</span>
                <label className="text-3xl font-black uppercase tracking-wider">
                  DURATION (WEEKS)
                </label>
              </div>
              <input
                type="number"
                placeholder="e.g., 12"
                className="border-6 border-black w-full p-6 text-2xl font-bold uppercase tracking-wide focus:bg-black focus:text-white transition-all"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">▦</span>
                <label className="text-3xl font-black uppercase tracking-wider">
                  NUMBER OF MODULES
                </label>
              </div>
              <input
                type="number"
                placeholder="e.g., 4"
                className="border-6 border-black w-full p-6 text-2xl font-bold uppercase tracking-wide focus:bg-black focus:text-white transition-all"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">◉</span>
                <label className="text-3xl font-black uppercase tracking-wider">
                  LEARNING OUTCOMES
                </label>
              </div>
              <textarea
                placeholder="e.g., Students will understand core concepts..."
                rows={5}
                className="border-6 border-black w-full p-6 font-mono text-xl font-bold uppercase tracking-wide focus:bg-black focus:text-white transition-all"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">✓</span>
                <label className="text-3xl font-black uppercase tracking-wider">
                  ASSESSMENT METHODS
                </label>
              </div>
              <textarea
                name="assessmentMethods"
                value={formData.assessmentMethods}
                onChange={handleInputChange}
                placeholder="e.g., Practical exam 40%, assignments 30%, portfolio 30%"
                rows={5}
                className="border-6 border-black w-full p-6 font-mono text-xl font-bold uppercase tracking-wide focus:bg-black focus:text-white transition-all"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">%</span>
                <label className="text-3xl font-black uppercase tracking-wider">
                  PASS MARK (%)
                </label>
              </div>
              <input
                type="number"
                name="passMark"
                value={formData.passMark}
                onChange={handleInputChange}
                placeholder="e.g., 50"
                min="0"
                max="100"
                className="border-6 border-black w-full p-6 text-2xl font-bold uppercase tracking-wide focus:bg-black focus:text-white transition-all"
              />
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-6 pt-8">
        <button 
          onClick={onCancel}
          className="border-6 border-black bg-white text-black text-2xl py-6 px-12 font-black uppercase tracking-wider hover:bg-black hover:text-white transition-all"
        >
          ◄ CANCEL
        </button>
        <div className="flex gap-6">
          {step > 1 && (
            <button 
              onClick={() => setStep(step - 1)}
              className="border-6 border-black bg-white text-black text-2xl py-6 px-12 font-black uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              ◄ BACK
            </button>
          )}
          {step < 3 ? (
            <button 
              onClick={handleNext}
              className="border-6 border-black bg-black text-white text-2xl py-6 px-16 font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all"
            >
              NEXT ►
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              className="border-6 border-black bg-black text-white text-2xl py-6 px-16 font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all"
            >
              ✓ DONE
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};
