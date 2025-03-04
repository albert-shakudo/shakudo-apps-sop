"use client";

import { useState } from 'react';
import { 
  AcademicCapIcon,
  CheckIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  QrCodeIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function TrainingPage() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'sweetener-blending': true,
    'cip': false,
    'quality-checks': false,
  });

  const toggleSection = (id: string) => {
    setExpandedSections({
      ...expandedSections,
      [id]: !expandedSections[id]
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 h-full p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
            <ChevronRightIcon className="w-4 h-4 mx-2" />
            <span>Operator Training</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Operator Training</h1>
          <p className="text-gray-600 dark:text-gray-400">
            AI-generated training materials from approved SOPs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            {/* Training Modules */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
              <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Training Modules</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">3 modules available</span>
              </div>
              
              {/* Sweetener Blending Module */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div 
                  className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750"
                  onClick={() => toggleSection('sweetener-blending')}
                >
                  <div className="flex items-center">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-3">
                      <AcademicCapIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">High-Intensity Sweetener Blending</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Equipment: T&L Mixer System (Model TL-500)</p>
                    </div>
                  </div>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections['sweetener-blending'] ? 'transform rotate-180' : ''}`} 
                  />
                </div>
                
                {expandedSections['sweetener-blending'] && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-750">
                    <div className="mb-6">
                      <h4 className="font-medium mb-2 text-sm">Training Steps</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-0.5">
                            <CheckIcon className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Pre-operation Equipment Check</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Verify all components are clean and properly assembled
                            </p>
                          </div>
                          <div className="ml-4">
                            <div className="border border-gray-200 dark:border-gray-700 rounded p-1">
                              <QrCodeIcon className="w-8 h-8 text-gray-400" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-0.5">
                            <CheckIcon className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Mixer Operation</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Set parameters according to SOP specifications
                            </p>
                          </div>
                          <div className="ml-4">
                            <div className="border border-gray-200 dark:border-gray-700 rounded p-1">
                              <QrCodeIcon className="w-8 h-8 text-gray-400" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full mr-3 mt-0.5">
                            <CheckIcon className="w-3 h-3 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Quality Verification</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Sample testing protocol and acceptance criteria
                            </p>
                          </div>
                          <div className="ml-4">
                            <div className="border border-gray-200 dark:border-gray-700 rounded p-1">
                              <QrCodeIcon className="w-8 h-8 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">Equipment Reference</h4>
                        <Link 
                          href="#" 
                          className="text-xs text-blue-600 dark:text-blue-400 flex items-center"
                        >
                          View in SAP
                          <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex items-center">
                        <Image 
                          src="/mixer-equipment.png" 
                          alt="T&L Mixer System" 
                          width={80} 
                          height={80} 
                          className="mr-3 rounded border border-gray-200 dark:border-gray-700"
                        />
                        <div>
                          <p className="text-sm font-medium">T&L Mixer System (Model TL-500)</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Last maintenance: Jan 15, 2024
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Calibration due: Apr 15, 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded text-xs">
                        Print Training Material
                      </button>
                      <Link 
                        href="/training/sweetener-blending" 
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs"
                      >
                        Start Training
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {/* CIP Module */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div 
                  className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750"
                  onClick={() => toggleSection('cip')}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                      <AcademicCapIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Clean-in-Place Protocol</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Equipment: HTST Pasteurization System</p>
                    </div>
                  </div>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections['cip'] ? 'transform rotate-180' : ''}`} 
                  />
                </div>
                
                {expandedSections['cip'] && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-750">
                    {/* CIP Module content - would be similar to the first module */}
                    <div className="text-center py-4">
                      <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                        Expand Training Module
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Quality Checks Module */}
              <div>
                <div 
                  className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750"
                  onClick={() => toggleSection('quality-checks')}
                >
                  <div className="flex items-center">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                      <AcademicCapIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Quality Check Procedures</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Equipment: Lab Testing Equipment</p>
                    </div>
                  </div>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections['quality-checks'] ? 'transform rotate-180' : ''}`} 
                  />
                </div>
                
                {expandedSections['quality-checks'] && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-750">
                    {/* Quality Checks Module content - would be similar to the first module */}
                    <div className="text-center py-4">
                      <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                        Expand Training Module
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Approval Workflow */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                <h2 className="text-lg font-semibold">Approval Workflow</h2>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                    <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">SOP Created</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mar 02, 2024</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">By AI Assistant</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                    <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">Technical Review</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mar 03, 2024</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Approved by Michael Chen</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                    <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">Quality Approval</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mar 04, 2024</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Approved by Jennifer Mills, VP Quality</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                    <ClipboardDocumentCheckIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">Training Materials Generated</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mar 04, 2024</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Automatically created from approved SOP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
              <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                <h3 className="font-semibold">Training Statistics</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">Completion Rate</div>
                  <div className="text-sm font-medium">92%</div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Active SOPs</span>
                      <span className="font-medium">143</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Training Modules</span>
                      <span className="font-medium">86</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Operators Trained</span>
                      <span className="font-medium">34</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                <h3 className="font-semibold">Time Saved with AI</h3>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">78%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Time reduction</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Traditional SOP Creation</span>
                    <span className="font-medium">~16 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI-Assisted Creation</span>
                    <span className="font-medium">~3.5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Training Material Generation</span>
                    <span className="font-medium">Automatic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 