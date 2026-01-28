import React, { useState } from 'react';
import { Card, AIRecommendation } from './Layout';

interface SettingsSection {
  title: string;
  items: SettingItem[];
}

interface SettingItem {
  id: string;
  label: string;
  type: 'text' | 'password' | 'select' | 'toggle' | 'textarea';
  value: string | boolean;
  placeholder?: string;
  options?: string[];
}

export const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiModel, setApiModel] = useState('gpt-4-turbo');
  const [showApiKey, setShowApiKey] = useState(false);

  const [settings, setSettings] = useState({
    email: 'educator@napolytech.edu.sg',
    institution: 'Ngee Ann Polytechnic',
    role: 'Curriculum Designer',
    aiEnabled: true,
    autoSave: true,
    notifications: true,
    darkMode: false,
    language: 'English'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <div className="border-b-4 border-black pb-6">
        <h2 className="text-4xl font-black uppercase tracking-widest mb-2">SETTINGS</h2>
        <p className="text-sm uppercase tracking-widest font-bold">Configure your AI Curriculum Builder preferences</p>
      </div>

      {/* Application Preferences */}
      <Card title="APPLICATION PREFERENCES">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-black uppercase tracking-wider mb-3">YOUR ROLE</label>
              <input
                type="text"
                value="Curriculum Educator"
                disabled
                className="w-full border-3 border-gray-300 bg-gray-100 p-4 text-sm uppercase font-bold tracking-wider"
              />
            </div>

            <div>
              <label className="block text-sm font-black uppercase tracking-wider mb-3">EMAIL</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleSettingChange('email', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-black uppercase tracking-wider mb-3">INSTITUTION</label>
              <input
                type="text"
                value={settings.institution}
                onChange={(e) => handleSettingChange('institution', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-black uppercase tracking-wider mb-3">CURRICULUM TYPE</label>
              <select
                value={settings.role}
                onChange={(e) => handleSettingChange('role', e.target.value)}
              >
                <option>CURRICULUM DESIGNER</option>
                <option>PROGRAMME COORDINATOR</option>
                <option>INSTRUCTIONAL DEVELOPER</option>
                <option>EDUCATIONAL SPECIALIST</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* API Configuration */}
      <Card title="API CONFIGURATION">
        <div className="space-y-6">
          <div className="border-3 border-black bg-white p-6">
            <p className="text-sm font-black uppercase tracking-wider mb-2">⚠️ IMPORTANT NOTICE</p>
            <p className="text-sm font-bold uppercase tracking-wider">Your API key is encrypted and stored securely. It is never shared or logged.</p>
          </div>

          <div>
            <label className="block text-sm font-black uppercase tracking-wider mb-3">LLM PROVIDER</label>
            <select className="border-3 border-black">
              <option>OPENAI (GPT-4, GPT-4 TURBO)</option>
              <option>ANTHROPIC (CLAUDE)</option>
              <option>GOOGLE GEMINI</option>
              <option>AZURE OPENAI</option>
              <option>OTHER (CUSTOM)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-black uppercase tracking-wider mb-3">API KEY</label>
            <div className="flex gap-3">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-... or your-api-key"
              />
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                className="btn-secondary min-w-max"
              >
                {showApiKey ? '🙈 HIDE' : '👁️ SHOW'}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-black uppercase tracking-wider mb-3">MODEL SELECTION</label>
            <select
              value={apiModel}
              onChange={(e) => setApiModel(e.target.value)}
            >
              <option value="gpt-4-turbo">GPT-4 TURBO (RECOMMENDED)</option>
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-35-turbo">GPT-3.5 TURBO (FASTER, LOWER COST)</option>
              <option value="claude-3-opus">CLAUDE 3 OPUS</option>
              <option value="claude-3-sonnet">CLAUDE 3 SONNET</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button className="btn-primary bg-black text-white">SAVE API CONFIGURATION</button>
            <button className="btn-secondary">TEST CONNECTION</button>
          </div>
        </div>
      </Card>

      {/* Feature Preferences */}
      <Card title="FEATURE PREFERENCES">
        <div className="space-y-4">
          {[
            { key: 'aiEnabled', label: 'ENABLE AI ASSISTANCE', desc: 'Use AI for suggestions and content generation' },
            { key: 'autoSave', label: 'AUTO-SAVE', desc: 'Automatically save changes as you work' },
            { key: 'notifications', label: 'ENABLE NOTIFICATIONS', desc: 'Receive updates about curriculum changes' },
            { key: 'darkMode', label: 'DARK MODE', desc: 'Use dark theme for easier on the eyes' }
          ].map((pref) => (
            <div key={pref.key} className="flex items-center justify-between border-b-3 border-black pb-4 last:border-0">
              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-wider">{pref.label}</p>
                <p className="text-xs font-bold uppercase tracking-wider mt-1">{pref.desc}</p>
              </div>
              <label className="relative inline-block w-14 h-8 ml-4 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={settings[pref.key as keyof typeof settings] as boolean}
                  onChange={(e) => handleSettingChange(pref.key, e.target.checked)}
                  className="opacity-0 w-0 h-0"
                />
                <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 border-3 border-black ${
                  settings[pref.key as keyof typeof settings] ? 'bg-black' : 'bg-white'
                }`}></span>
                <span className={`absolute left-1 top-1 w-4 h-4 bg-white border-2 border-black transition-transform ${
                  settings[pref.key as keyof typeof settings] ? 'translate-x-6' : ''
                }`}></span>
              </label>
            </div>
          ))}
        </div>
      </Card>

      {/* Data & Privacy */}
      <Card title="DATA & PRIVACY">
        <div className="space-y-6">
          <div>
            <h4 className="font-black uppercase tracking-wider mb-3 text-lg">DATA RETENTION</h4>
            <select className="border-3 border-black">
              <option>KEEP ALL DATA (DEFAULT)</option>
              <option>30 DAYS</option>
              <option>90 DAYS</option>
              <option>1 YEAR</option>
              <option>DELETE UPON COMPLETION</option>
            </select>
            <p className="text-xs font-bold uppercase tracking-wider mt-3">Choose how long your curriculum data is retained in our system.</p>
          </div>

          <div className="border-4 border-black bg-black text-white p-6">
            <p className="text-sm font-black uppercase tracking-wider mb-4">🔒 YOUR PRIVACY MATTERS</p>
            <div className="space-y-2 text-xs font-bold uppercase tracking-wider">
              <div>✓ All data is encrypted in transit and at rest</div>
              <div>✓ AI processing is done in secure environments</div>
              <div>✓ Your curriculum content is never used to train models</div>
              <div>✓ You can request data deletion anytime</div>
            </div>
          </div>

          <button className="btn-secondary">DOWNLOAD MY DATA</button>
        </div>
      </Card>

      {/* Support & About */}
      <Card title="SUPPORT & ABOUT">
        <div className="space-y-2 mb-6">
          <div className="flex justify-between items-center border-b-3 border-black pb-3">
            <span className="text-sm font-black uppercase tracking-wider">VERSION</span>
            <span className="text-sm font-bold">1.0.0</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-black uppercase tracking-wider">LAST UPDATED</span>
            <span className="text-sm font-bold">JANUARY 28, 2026</span>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="btn-secondary">📚 DOCUMENTATION</button>
          <button className="btn-secondary">💬 CONTACT SUPPORT</button>
          <button className="btn-secondary">📧 FEEDBACK</button>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <button className="btn-secondary">CANCEL</button>
        <button className="btn-primary bg-black text-white">SAVE ALL SETTINGS</button>
      </div>
    </div>
  );
};
