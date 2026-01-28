import React, { useState } from 'react';

interface FormData {
  curriculumName: string;
  curriculumType: string;
  description: string;
  duration: string;
  numberOfModules: string;
  learningOutcomes: string;
  modules: string;
  assessmentMethods: string;
  passMark: string;
}

interface CurriculumBuilderProps {
  onCancel: () => void;
}

// Sample curriculums for quick testing
const SAMPLE_CURRICULUMS: Record<string, FormData> = {
  'business-dip': {
    curriculumName: 'Diploma in Business Studies',
    curriculumType: 'Full Diploma',
    description: 'Comprehensive 2-year business education covering management, finance, marketing, and entrepreneurship aligned with industry standards and SkillsFuture framework.',
    duration: '80',
    numberOfModules: '6',
    learningOutcomes: 'Students will understand core business concepts and organizational structures. Students will analyze financial statements and make business decisions. Students will develop marketing strategies for products and services. Students will apply entrepreneurial thinking to identify opportunities.',
    modules: 'DIP-BUS-1101: Business Fundamentals (5 credits)\nDIP-BUS-1102: Financial Accounting (5 credits)\nDIP-BUS-2201: Marketing Management (5 credits)\nDIP-BUS-2202: Strategic Management (5 credits)\nDIP-BUS-2301: Entrepreneurship (5 credits)\nDIP-BUS-2302: Business Capstone Project (10 credits)',
    assessmentMethods: 'Continuous Assessment (40%): Assignments, Projects, Class Participation\nMidterm Exam (15%): Mid-semester evaluation\nFinal Exam (35%): Comprehensive final assessment\nCapstone Project (10%): Industry-relevant business project',
    passMark: '50'
  },
  'it-dip': {
    curriculumName: 'Diploma in Information Technology',
    curriculumType: 'Full Diploma',
    description: 'Industry-focused 2-year IT program covering software development, networking, cybersecurity, and cloud technologies. Prepares students for professional certifications.',
    duration: '80',
    numberOfModules: '6',
    learningOutcomes: 'Students will design and develop software applications using industry-standard frameworks. Students will implement secure network configurations and cybersecurity protocols. Students will manage databases and optimize query performance. Students will deploy applications to cloud platforms.',
    modules: 'DIP-IT-1101: Programming Fundamentals (5 credits)\nDIP-IT-1102: Web Development Basics (5 credits)\nDIP-IT-2201: Software Development (5 credits)\nDIP-IT-2202: Network & Cybersecurity (5 credits)\nDIP-IT-2301: Database Systems (5 credits)\nDIP-IT-2302: IT Capstone Project (10 credits)',
    assessmentMethods: 'Continuous Assessment (40%): Coding assignments, Practical labs\nQuizzes (10%): Online quizzes\nMidterm Exam (15%): Programming and theory\nFinal Project (35%): Capstone application development',
    passMark: '50'
  },
  'healthcare-dip': {
    curriculumName: 'Diploma in Healthcare Management',
    curriculumType: 'Full Diploma',
    description: '2-year healthcare program focusing on patient care, health information systems, quality assurance, and healthcare operations. PDPA and MOH compliant.',
    duration: '80',
    numberOfModules: '6',
    learningOutcomes: 'Students will manage patient records using healthcare information systems. Students will ensure PDPA compliance in health data handling. Students will implement quality assurance protocols in healthcare settings. Students will analyze health data for clinical decision-making.',
    modules: 'DIP-HS-1101: Healthcare Fundamentals (5 credits)\nDIP-HS-1102: Patient Care Basics (5 credits)\nDIP-HS-2201: Healthcare Management (5 credits)\nDIP-HS-2202: Health Informatics (5 credits)\nDIP-HS-2301: Quality & Safety (5 credits)\nDIP-HS-2302: Clinical Practice Project (10 credits)',
    assessmentMethods: 'Continuous Assessment (40%): Clinical practice, Case studies\nQuizzes (10%): Regular knowledge checks\nMidterm Exam (15%): Theory and concepts\nFinal Project (35%): Healthcare improvement initiative',
    passMark: '50'
  },
  'engineering-dip': {
    curriculumName: 'Diploma in Engineering (Mechanical)',
    curriculumType: 'Full Diploma',
    description: 'Technical 2-year engineering program emphasizing CAD, mechanical design, manufacturing, and project management. Industry-ready with hands-on labs.',
    duration: '80',
    numberOfModules: '6',
    learningOutcomes: 'Students will design complex mechanical systems using industry-standard CAD software. Students will apply engineering principles to solve technical problems. Students will conduct stress analysis and simulations. Students will create manufacturing-ready technical drawings and prototypes.',
    modules: 'DIP-ENG-1101: Engineering Fundamentals (5 credits)\nDIP-ENG-1102: Technical Drawing & CAD (5 credits)\nDIP-ENG-2201: Mechanical Design (5 credits)\nDIP-ENG-2202: Manufacturing Processes (5 credits)\nDIP-ENG-2301: Control Systems (5 credits)\nDIP-ENG-2302: Engineering Project (10 credits)',
    assessmentMethods: 'Lab Work (30%): CAD drawings, simulations\nAssignments (20%): Design calculations\nMidterm Exam (15%): Theory and calculations\nFinal Project (35%): Full design & prototype development',
    passMark: '50'
  },
  'hospitality-dip': {
    curriculumName: 'Diploma in Hospitality Management',
    curriculumType: 'Full Diploma',
    description: '2-year hospitality program covering hotel operations, food service, event management, and customer service excellence for tourism industry.',
    duration: '80',
    numberOfModules: '6',
    learningOutcomes: 'Students will plan and execute events from concept to completion. Students will manage vendor relationships and event budgets. Students will apply customer service excellence in hospitality contexts. Students will operate hotel management software and systems.',
    modules: 'DIP-BHM-1101: Hospitality Fundamentals (5 credits)\nDIP-BHM-1102: Customer Service Excellence (5 credits)\nDIP-BHM-2201: Hotel Operations (5 credits)\nDIP-BHM-2202: Food & Beverage Management (5 credits)\nDIP-BHM-2301: Event Management (5 credits)\nDIP-BHM-2302: Hospitality Capstone (10 credits)',
    assessmentMethods: 'Continuous Assessment (40%): Practical skills, Service simulations\nClass Participation (10%): Group work and discussions\nMidterm Exam (15%): Operations and theory\nFinal Project (35%): Event planning & execution',
    passMark: '50'
  }
};

export const CurriculumBuilder: React.FC<CurriculumBuilderProps> = ({ onCancel }) => {
  const [formData, setFormData] = useState<FormData>({
    curriculumName: '',
    curriculumType: 'Short Course',
    description: '',
    duration: '',
    numberOfModules: '',
    learningOutcomes: '',
    modules: '',
    assessmentMethods: '',
    passMark: ''
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const loadSample = (sampleKey: string) => {
    const sample = SAMPLE_CURRICULUMS[sampleKey];
    if (sample) {
      setFormData(sample);
      setStep(1);
    }
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

        {/* Sample Selection - Show on Step 1 */}
        {step === 1 && (
          <div className="border-4 border-green-600 bg-green-50 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-2xl">⚡</div>
              <h3 className="text-lg font-black uppercase">Quick Start - Load a Sample Curriculum</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <button onClick={() => loadSample('business-dip')} className="border-2 border-green-600 bg-white hover:bg-green-100 p-3 text-xs font-black uppercase text-center">Business (BUS)</button>
              <button onClick={() => loadSample('it-dip')} className="border-2 border-green-600 bg-white hover:bg-green-100 p-3 text-xs font-black uppercase text-center">IT (IT)</button>
              <button onClick={() => loadSample('healthcare-dip')} className="border-2 border-green-600 bg-white hover:bg-green-100 p-3 text-xs font-black uppercase text-center">Healthcare (HS)</button>
              <button onClick={() => loadSample('engineering-dip')} className="border-2 border-green-600 bg-white hover:bg-green-100 p-3 text-xs font-black uppercase text-center">Engineering (ENG)</button>
              <button onClick={() => loadSample('hospitality-dip')} className="border-2 border-green-600 bg-white hover:bg-green-100 p-3 text-xs font-black uppercase text-center">Hospitality (BHM)</button>
            </div>
            <p className="text-xs mt-4 text-gray-600">💡 Click any sample to auto-populate all 3 steps. Then click NEXT to see the full curriculum structure!</p>
          </div>
        )}

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
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
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
                name="numberOfModules"
                value={formData.numberOfModules}
                onChange={handleInputChange}
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
                name="learningOutcomes"
                value={formData.learningOutcomes}
                onChange={handleInputChange}
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
