"use client";

import { useState } from 'react';
import { 
  CheckCircleIcon, 
  ChevronRightIcon, 
  DocumentTextIcon,
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  BeakerIcon,
  DocumentCheckIcon,
  ArrowPathIcon,
  ClockIcon,
  PencilIcon,
  ArrowDownTrayIcon,
  CheckIcon,
  CheckBadgeIcon,
  SparklesIcon,
  ChatBubbleLeftIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { marked } from 'marked';
import { useRouter } from 'next/navigation';

export default function CreateSOP() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [processingType, setProcessingType] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSOP, setGeneratedSOP] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [editHistory, setEditHistory] = useState<Array<{timestamp: Date, section: string, change: string}>>([]);
  const [aiSuggestions, setAiSuggestions] = useState<Array<{section: string, suggestion: string}>>([]);
  const [showVersionHistory, setShowVersionHistory] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);

  const templates = [
    { 
      id: 'beverage', 
      name: 'Beverage Processing', 
      description: 'Standard procedures for beverage production, blending, and QA', 
      icon: <BeakerIcon className="w-5 h-5" />,
      tags: ['GxP', 'FDA Compliant', 'ISO 9001'],
    },
    { 
      id: 'dairy', 
      name: 'Dairy Processing', 
      description: 'Dairy handling, pasteurization, and product formulation', 
      icon: <DocumentTextIcon className="w-5 h-5" />,
      tags: ['GxP', 'FDA Compliant', 'ISO 9001'],
    },
    { 
      id: 'sauce', 
      name: 'Sauce & Condiment', 
      description: 'Sauce preparation, thermal processing, and packaging', 
      icon: <DocumentTextIcon className="w-5 h-5" />,
      tags: ['GxP', 'FDA Compliant'],
    },
    { 
      id: 'bakery', 
      name: 'Bakery Processing', 
      description: 'Baking processes, mix preparation, and QC testing', 
      icon: <DocumentTextIcon className="w-5 h-5" />,
      tags: ['GxP', 'FDA Compliant', 'ISO 9001'],
    },
    { 
      id: 'validation', 
      name: 'Process Validation', 
      description: 'Documentation templates for process validation', 
      icon: <DocumentCheckIcon className="w-5 h-5" />,
      tags: ['GxP', 'FDA Compliant', '21 CFR Part 11'],
    },
    { 
      id: 'cip', 
      name: 'Clean-in-Place (CIP)', 
      description: 'CIP process documentation for equipment sanitation', 
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      tags: ['GxP', 'FDA Compliant', 'HACCP'],
    },
  ];

  const selectTemplate = (id: string) => {
    setSelectedTemplate(id);
    if (id === 'beverage') {
      setTimeout(() => {
        setShowAIAssistant(true);
      }, 500);
    }
  };

  const handleProcessingSelection = (type: string) => {
    setProcessingType(type);
  };

  const handleGenerateSOP = () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedSOP(`
# High-Intensity Sweetener Blending Process
## Standard Operating Procedure
**Document #:** SOP-BEV-001  
**Revision:** 1.0  
**Effective Date:** ${new Date().toLocaleDateString()}  
**Supersedes:** N/A  

## 1. Purpose
This Standard Operating Procedure (SOP) defines the process for blending high-intensity sweeteners in beverage formulations to ensure consistent product quality and compliance with specifications.

## 2. Scope
This procedure applies to all blending operations involving high-intensity sweeteners in the Beverage Processing Department.

## 3. Responsibilities
- **Production Operators:** Execute blending operations according to this SOP
- **Quality Assurance:** Monitor compliance and verify product specifications
- **Production Supervisor:** Ensure operators are trained on this procedure

## 4. Equipment and Materials
- T&L Mixer System (Model TL-500)
- Calibrated scales (±0.01g precision)
- Approved sweetener ingredients
- Personal Protective Equipment (PPE)
- Cleaning supplies compliant with sanitation SOP

## 5. Safety Precautions
- Wear appropriate PPE: gloves, safety glasses, dust mask
- Follow equipment lockout/tagout procedures during maintenance
- Adhere to all facility safety protocols

## 6. Procedure
### 6.1 Pre-Operation Checks
1. Verify mixer is clean and properly assembled
2. Confirm all ingredients meet quality specifications
3. Check calibration status of all measurement equipment
4. Ensure batch record documentation is prepared

### 6.2 Blending Operation
1. Set mixer parameters:
   - Temperature: 65-85°C
   - Mixing time: 20-30 minutes
   - Agitation speed: 60-75 RPM
2. Add ingredients in the following order:
   - Base liquid (water/concentrate)
   - Bulking agents
   - High-intensity sweeteners
   - Remaining ingredients
3. Monitor pH during process (target range: 3.5-4.5)
4. Record all process parameters in batch record

### 6.3 Quality Verification
1. After blending completion, collect samples for QC testing
2. Perform sensory evaluation per QC protocol
3. Verify sweetness level meets product specification
4. Hold product until laboratory testing confirms specifications

### 6.4 Post-Operation
1. Initiate CIP cycle following SOP-SAN-003
2. Complete all batch documentation
3. Transfer product to appropriate storage or next process step

## 7. Documentation
- Batch Production Record
- Equipment Cleaning Log
- Process Deviation Reports (if applicable)
- QC Test Results

## 8. References
- Raw Material Specifications
- Product Formulation Sheet
- Equipment Manual for T&L Mixer System
- Clean-in-Place Protocol (SOP-SAN-003)

## 9. Change History
| Version | Date | Description of Change | Author | Approved By |
|---------|------|------------------------|--------|-------------|
| 1.0 | ${new Date().toLocaleDateString()} | Initial Release | AI Assistant | Pending |

## 10. Approvals
| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | AI Assistant | ${new Date().toLocaleDateString()} | GENERATED BY AI |
| Technical Review | | | |
| Quality Approval | | | |
| Department Head | | | |
      `);

      // Simulate AI suggestions
      setAiSuggestions([
        {
          section: "Safety Precautions",
          suggestion: "Consider adding specific temperature handling precautions for high-temperature operations."
        },
        {
          section: "Procedure",
          suggestion: "You may want to add a troubleshooting section for common mixing issues."
        }
      ]);
    }, 3000);
  };

  const handleSaveAndApprove = () => {
    setIsSaving(true);
    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false);
      setShowSaveSuccess(true);
      // Redirect to library after showing success message
      setTimeout(() => {
        router.push('/sops');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 h-full p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            <Link href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300">Dashboard</Link>
            <ChevronRightIcon className="w-4 h-4 mx-2" />
            <span>Create New SOP</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Create New SOP</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Choose a template to get started or create a custom SOP
          </p>
        </div>
        
        <div className="mb-6 bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm flex items-center">
          <ShieldCheckIcon className="w-5 h-5 mr-2 text-zinc-600 dark:text-zinc-400" />
          <span>VPC: All data remains within your infrastructure</span>
        </div>

        {!selectedTemplate ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Select a Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div 
                  key={template.id}
                  className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6 cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-500 transition duration-150"
                  onClick={() => selectTemplate(template.id)}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-full mr-3">
                      {template.icon}
                    </div>
                    <h3 className="text-lg font-medium">{template.name}</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : !generatedSOP ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Beverage Processing SOP</h2>
                  <button 
                    onClick={() => setSelectedTemplate(null)}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
                  >
                    Change Template
                  </button>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="title" className="block mb-2 text-sm font-medium">
                    SOP Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm"
                    placeholder="e.g. High-Intensity Sweetener Blending Process"
                    defaultValue="High-Intensity Sweetener Blending Process"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">
                    Processing Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Batch', 'Continuous', 'Semi-Continuous', 'Aseptic'].map((type) => (
                      <div 
                        key={type}
                        onClick={() => handleProcessingSelection(type)}
                        className={`cursor-pointer rounded-md border ${processingType === type ? 'border-zinc-500 bg-zinc-50 dark:bg-zinc-700/30' : 'border-zinc-300 dark:border-zinc-700'} p-3 text-sm`}
                      >
                        <div className="flex items-center">
                          <div className={`mr-2 h-4 w-4 rounded-full border ${processingType === type ? 'border-zinc-500 bg-zinc-500' : 'border-zinc-400'}`}>
                            {processingType === type && (
                              <CheckCircleIcon className="h-4 w-4 text-white" />
                            )}
                          </div>
                          {type}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium">
                    Process Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm"
                    placeholder="Describe the process requirements and parameters..."
                    defaultValue="This procedure defines the process for blending high-intensity sweeteners in beverage formulations to ensure consistent product quality and compliance with specifications."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="department" className="block mb-2 text-sm font-medium">
                      Department
                    </label>
                    <select
                      id="department"
                      className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm"
                      defaultValue="production"
                    >
                      <option value="">Select Department</option>
                      <option value="production">Production</option>
                      <option value="quality">Quality Assurance</option>
                      <option value="rd">R&D</option>
                      <option value="engineering">Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="equipment" className="block mb-2 text-sm font-medium">
                      Primary Equipment
                    </label>
                    <select
                      id="equipment"
                      className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm"
                      defaultValue="mixer"
                    >
                      <option value="">Select Equipment</option>
                      <option value="mixer">T&L Mixer System (Model TL-500)</option>
                      <option value="htst">HTST Pasteurization System</option>
                      <option value="blender">High-Shear Blender</option>
                      <option value="filler">Aseptic Filler</option>
                    </select>
                  </div>
                </div>
                
                <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
                  <div className="flex justify-end gap-3">
                    <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm">
                      Save as Draft
                    </button>
                    <button 
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white rounded-lg text-sm flex items-center"
                      onClick={handleGenerateSOP}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        'Generate SOP'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-300 ${showAIAssistant ? 'opacity-100' : 'opacity-0'}`}>
              {showAIAssistant && (
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-full mr-3">
                      <DocumentMagnifyingGlassIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    </div>
                    <h3 className="text-lg font-medium">AI Assistant</h3>
                  </div>
                  
                  <div className="mb-4 bg-zinc-50 dark:bg-zinc-900 p-3 rounded-lg text-sm">
                    I found these related documents in your system that might be helpful:
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-750 cursor-pointer">
                      <p className="font-medium text-sm">Existing CIP Protocol</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Last updated: Nov 15, 2023</p>
                    </div>
                    <div className="p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-750 cursor-pointer">
                      <p className="font-medium text-sm">Sweetener Quality Testing</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Last updated: Jan 22, 2024</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                      Suggested process parameters:
                    </p>
                    <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
                      <li>• Temperature range: 65-85°C</li>
                      <li>• pH monitoring: 3.5-4.5</li>
                      <li>• Mixing time: 20-30 minutes</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Generated SOP</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowVersionHistory(!showVersionHistory)}
                  className="px-3 py-1.5 border border-zinc-300 dark:border-zinc-600 rounded text-sm flex items-center gap-2"
                >
                  <ClockIcon className="w-4 h-4" />
                  History
                </button>
                <button 
                  className="px-3 py-1.5 border border-zinc-300 dark:border-zinc-600 rounded text-sm flex items-center gap-2"
                >
                  <PencilIcon className="w-4 h-4" />
                  Edit
                </button>
                <button 
                  className="px-3 py-1.5 border border-zinc-300 dark:border-zinc-600 rounded text-sm flex items-center gap-2"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Download
                </button>
                <button 
                  onClick={handleSaveAndApprove}
                  disabled={isSaving}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white rounded text-sm flex items-center gap-2"
                >
                  {isSaving ? (
                    <>
                      <ArrowPathIcon className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <CheckIcon className="w-4 h-4" />
                      Save & Approve
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DocumentTextIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                        <h3 className="font-medium">SOP Content</h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <span>Last edited 2 mins ago</span>
                        <span>·</span>
                        <button className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                          View all changes
                        </button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute right-4 top-4 flex gap-2">
                        <button className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded">
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded">
                          <ChatBubbleLeftIcon className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: marked(generatedSOP) }} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <SparklesIcon className="w-5 h-5 text-blue-500" />
                      <h3 className="font-medium">AI Suggestions</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {aiSuggestions.map((suggestion, index) => (
                        <div key={index} className="p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                          <p className="text-sm font-medium mb-1">{suggestion.section}</p>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">{suggestion.suggestion}</p>
                          <div className="mt-2 flex gap-2">
                            <button className="text-xs text-blue-500 hover:text-blue-600">Apply</button>
                            <button className="text-xs text-zinc-500 hover:text-zinc-600">Dismiss</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {showVersionHistory && (
                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <ClockIcon className="w-5 h-5 text-zinc-600" />
                        <h3 className="font-medium">Version History</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Initial Generation</p>
                            <p className="text-xs text-zinc-500">2 mins ago · AI Assistant</p>
                          </div>
                          <button className="text-xs text-blue-500 hover:text-blue-600">View</button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckBadgeIcon className="w-5 h-5 text-zinc-600" />
                      <h3 className="font-medium">Approval Status</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Generated by AI</p>
                          <p className="text-xs text-zinc-500">2 mins ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Technical Review</p>
                          <p className="text-xs text-zinc-500">Pending</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Quality Approval</p>
                          <p className="text-xs text-zinc-500">Pending</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showSaveSuccess && (
        <div className="fixed top-4 right-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top-2">
          <CheckCircleIcon className="w-5 h-5" />
          <div>
            <p className="font-medium">SOP Successfully Saved</p>
            <p className="text-sm text-green-600 dark:text-green-300">Redirecting to SOP Library...</p>
          </div>
          <button 
            onClick={() => setShowSaveSuccess(false)}
            className="ml-4 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
} 