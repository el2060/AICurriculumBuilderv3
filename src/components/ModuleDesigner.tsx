import React, { useState } from 'react';
import { queryDanteAI } from '../utils/danteAI';

interface ModuleDesignFormData {
  moduleName: string;
  moduleNumber: number;
  learningOutcomes: string;
  duration: string;
  prerequisites: string;
  targetAudience: string;
}

interface GeneratedContent {
  outline?: string;
  lessonPlan?: string;
  activities?: string;
  assessments?: string;
}

export const ModuleDesigner: React.FC<{ onClose: () => void; onSave?: (data: any) => void }> = ({ 
  onClose, 
  onSave 
}) => {
  const [formData, setFormData] = useState<ModuleDesignFormData>({
    moduleName: '',
    moduleNumber: 1,
    learningOutcomes: '',
    duration: '1 week',
    prerequisites: '',
    targetAudience: ''
  });
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent>({});
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'outline' | 'lessonPlan' | 'activities' | 'assessments'>('outline');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'moduleNumber' ? parseInt(value) : value
    }));
  };

  const isFormValid = formData.moduleName && formData.learningOutcomes && formData.duration;

  const generateOutline = async () => {
    setLoading(true);
    try {
      const prompt = `Create a detailed module outline for:
Module: ${formData.moduleName}
Learning Outcomes: ${formData.learningOutcomes}
Duration: ${formData.duration}
Prerequisites: ${formData.prerequisites || 'None'}

Format as:
- Main Topics (3-5 topics)
- Subtopics under each
- Time allocation per topic
- Key resources needed`;

      const response = await queryDanteAI(prompt, 'gpt-5.1');
      setGeneratedContent(prev => ({ ...prev, outline: response || '' }));
      setActiveTab('outline');
    } catch (error) {
      console.error('Error generating outline:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateLessonPlan = async () => {
    setLoading(true);
    try {
      const prompt = `Create a comprehensive lesson plan for:
Module: ${formData.moduleName}
Duration: ${formData.duration}
Learning Outcomes: ${formData.learningOutcomes}
Target Audience: ${formData.targetAudience || 'General students'}

Include for each lesson:
1. Learning Objectives (SMART)
2. Introduction/Hook (5 min)
3. Main Content (with sections)
4. Engagement/Interaction points
5. Closure/Summary
6. Assessment method
7. Resources needed`;

      const response = await queryDanteAI(prompt, 'gpt-5.1');
      setGeneratedContent(prev => ({ ...prev, lessonPlan: response || '' }));
      setActiveTab('lessonPlan');
    } catch (error) {
      console.error('Error generating lesson plan:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateActivities = async () => {
    setLoading(true);
    try {
      const prompt = `Design practical learning activities for:
Module: ${formData.moduleName}
Learning Outcomes: ${formData.learningOutcomes}
Duration: ${formData.duration}
Target Audience: ${formData.targetAudience || 'General students'}

Create 5-7 activities including:
- Activity name and type (individual/group/hands-on)
- Time required
- Learning objectives it addresses
- Instructions/steps
- Resources needed
- Assessment criteria
- Differentiation strategies`;

      const response = await queryDanteAI(prompt, 'gpt-5.1');
      setGeneratedContent(prev => ({ ...prev, activities: response || '' }));
      setActiveTab('activities');
    } catch (error) {
      console.error('Error generating activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateAssessments = async () => {
    setLoading(true);
    try {
      const prompt = `Design comprehensive assessment methods for:
Module: ${formData.moduleName}
Learning Outcomes: ${formData.learningOutcomes}

Create assessment strategy including:
1. Formative Assessments (during learning)
   - Type, timing, method
   - Feedback mechanism
2. Summative Assessment (end of module)
   - Type and format
   - Rubric/scoring criteria
3. Self-Assessment tools
4. Peer Assessment options
5. Accommodations for different learners`;

      const response = await queryDanteAI(prompt, 'gpt-5.1');
      setGeneratedContent(prev => ({ ...prev, assessments: response || '' }));
      setActiveTab('assessments');
    } catch (error) {
      console.error('Error generating assessments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveModule = () => {
    const moduleData = {
      ...formData,
      generatedContent
    };
    if (onSave) {
      onSave(moduleData);
    }
    alert('✓ MODULE DESIGN SAVED\n\nYour module is ready for implementation.');
    onClose();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-4 border-black bg-black text-white p-8 mb-8">
          <h2 className="text-5xl font-black uppercase tracking-widest mb-2">MODULE DESIGNER</h2>
          <p className="text-xl uppercase tracking-wider">AI-Powered Module Curriculum Design</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Form */}
          <div className="lg:col-span-1">
            <div className="border-4 border-black bg-white p-6 space-y-6 sticky top-8">
              <div className="border-b-4 border-black pb-4">
                <h3 className="text-2xl font-black uppercase">Module Info</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-black uppercase mb-2">Module #</label>
                  <input
                    type="number"
                    name="moduleNumber"
                    value={formData.moduleNumber}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-3 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase mb-2">Module Name *</label>
                  <input
                    type="text"
                    name="moduleName"
                    placeholder="e.g., React Fundamentals"
                    value={formData.moduleName}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase mb-2">Duration *</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-3"
                  >
                    <option>1 week</option>
                    <option>2 weeks</option>
                    <option>3 weeks</option>
                    <option>4 weeks</option>
                    <option>6 weeks</option>
                    <option>8 weeks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black uppercase mb-2">Target Audience</label>
                  <input
                    type="text"
                    name="targetAudience"
                    placeholder="e.g., Beginners, Advanced"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase mb-2">Prerequisites</label>
                  <input
                    type="text"
                    name="prerequisites"
                    placeholder="e.g., HTML basics"
                    value={formData.prerequisites}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Learning Outcomes */}
            <div className="border-4 border-black bg-white p-6">
              <div className="border-b-4 border-black pb-4 mb-4">
                <h3 className="text-2xl font-black uppercase">Learning Outcomes *</h3>
              </div>
              <textarea
                name="learningOutcomes"
                placeholder="Define 3-5 specific, measurable learning outcomes for this module..."
                value={formData.learningOutcomes}
                onChange={handleInputChange}
                rows={4}
                className="w-full border-2 border-black p-4 font-mono"
              />
            </div>

            {/* Generation Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={generateOutline}
                disabled={!isFormValid || loading}
                className="border-4 border-black bg-white p-6 font-black uppercase tracking-wider text-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '⟳ Generating...' : '[⬚] Module Outline'}
              </button>
              <button
                onClick={generateLessonPlan}
                disabled={!isFormValid || loading}
                className="border-4 border-black bg-white p-6 font-black uppercase tracking-wider text-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '⟳ Generating...' : '[📋] Lesson Plan'}
              </button>
              <button
                onClick={generateActivities}
                disabled={!isFormValid || loading}
                className="border-4 border-black bg-white p-6 font-black uppercase tracking-wider text-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '⟳ Generating...' : '[✎] Activities'}
              </button>
              <button
                onClick={generateAssessments}
                disabled={!isFormValid || loading}
                className="border-4 border-black bg-white p-6 font-black uppercase tracking-wider text-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '⟳ Generating...' : '[◆] Assessments'}
              </button>
            </div>

            {/* Generated Content Tabs */}
            {Object.keys(generatedContent).length > 0 && (
              <div className="border-4 border-black bg-white">
                {/* Tab Navigation */}
                <div className="flex border-b-4 border-black">
                  {[
                    { id: 'outline', label: 'Outline', icon: '⬚' },
                    { id: 'lessonPlan', label: 'Lesson Plan', icon: '📋' },
                    { id: 'activities', label: 'Activities', icon: '✎' },
                    { id: 'assessments', label: 'Assessments', icon: '◆' }
                  ].map(tab => (
                    generatedContent[tab.id as keyof GeneratedContent] && (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as typeof activeTab)}
                        className={`flex-1 p-4 font-black uppercase tracking-wider text-center border-r-2 border-black transition ${
                          activeTab === tab.id
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-gray-100'
                        }`}
                      >
                        {tab.icon} {tab.label}
                      </button>
                    )
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  <div className="max-h-96 overflow-y-auto font-mono text-sm whitespace-pre-wrap">
                    {activeTab === 'outline' && generatedContent.outline}
                    {activeTab === 'lessonPlan' && generatedContent.lessonPlan}
                    {activeTab === 'activities' && generatedContent.activities}
                    {activeTab === 'assessments' && generatedContent.assessments}
                  </div>
                </div>

                {/* Copy & Download Options */}
                <div className="border-t-4 border-black p-4 flex gap-2">
                  <button
                    onClick={() => {
                      const content = generatedContent[activeTab];
                      if (content) navigator.clipboard.writeText(content);
                      alert('Copied to clipboard!');
                    }}
                    className="flex-1 border-2 border-black bg-white p-3 font-black uppercase text-sm hover:bg-gray-100"
                  >
                    📋 Copy
                  </button>
                  <button
                    onClick={() => {
                      const element = document.createElement('a');
                      const content = generatedContent[activeTab];
                      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content || ''));
                      element.setAttribute('download', `${formData.moduleName}-${activeTab}.txt`);
                      element.style.display = 'none';
                      document.body.appendChild(element);
                      element.click();
                      document.body.removeChild(element);
                    }}
                    className="flex-1 border-2 border-black bg-white p-3 font-black uppercase text-sm hover:bg-gray-100"
                  >
                    💾 Download
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 border-4 border-black bg-white p-6 font-black uppercase tracking-wider text-lg hover:bg-gray-100"
              >
                [←] Cancel
              </button>
              <button
                onClick={handleSaveModule}
                disabled={Object.keys(generatedContent).length === 0}
                className="flex-1 border-4 border-black bg-black text-white p-6 font-black uppercase tracking-wider text-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                [✓] Save Module
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
