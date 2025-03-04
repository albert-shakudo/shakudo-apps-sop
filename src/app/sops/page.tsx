"use client";

import { useState } from 'react';
import {
  DocumentTextIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
  ChevronRightIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SOPLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: 'all', name: 'All Categories', count: 143 },
    { id: 'beverage', name: 'Beverage', count: 58 },
    { id: 'dairy', name: 'Dairy', count: 32 },
    { id: 'sauces', name: 'Sauces', count: 30 },
    { id: 'bakery', name: 'Bakery', count: 23 },
  ];

  const sops = [
    {
      id: 'sop-1',
      title: 'High-Intensity Sweetener Blending Process',
      category: 'Beverage',
      status: 'Active',
      lastUpdated: '2 hours ago',
      updatedBy: 'Sarah Johnson',
      department: 'Production'
    },
    {
      id: 'sop-2',
      title: 'Clean-in-Place Validation Protocol',
      category: 'All Departments',
      status: 'Active',
      lastUpdated: 'Yesterday',
      updatedBy: 'Michael Chen',
      department: 'Quality'
    },
    {
      id: 'sop-3',
      title: 'HTST Pasteurization Operating Procedure',
      category: 'Dairy',
      status: 'Active',
      lastUpdated: '3 days ago',
      updatedBy: 'David Wilson',
      department: 'Production'
    },
    {
      id: 'sop-4',
      title: 'Aseptic Packaging Quality Control',
      category: 'Beverage',
      status: 'Active',
      lastUpdated: '3 days ago',
      updatedBy: 'David Wilson',
      department: 'Quality'
    },
    {
      id: 'sop-5',
      title: 'Sauce Viscosity Measurement Protocol',
      category: 'Sauces',
      status: 'Update Required',
      lastUpdated: '2 weeks ago',
      updatedBy: 'Jennifer Mills',
      department: 'R&D'
    },
    {
      id: 'sop-6',
      title: 'Mixer Cleaning and Maintenance',
      category: 'All Departments',
      status: 'Active',
      lastUpdated: '1 month ago',
      updatedBy: 'Robert Taylor',
      department: 'Engineering'
    },
    {
      id: 'sop-7',
      title: 'Bakery Ingredient Handling Guidelines',
      category: 'Bakery',
      status: 'Update Required',
      lastUpdated: '2 months ago',
      updatedBy: 'Emma Rodriguez',
      department: 'Production'
    },
  ];

  const filteredSOPs = sops.filter(sop => {
    const matchesSearch = sop.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || 
                            sop.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white dark:bg-gray-900 h-full p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
            <ChevronRightIcon className="w-4 h-4 mx-2" />
            <span>SOP Library</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">SOP Library</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Browse, search and manage Standard Operating Procedures
              </p>
            </div>
            <Link 
              href="/sops/create" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              <DocumentTextIcon className="w-5 h-5 mr-2" />
              Create New SOP
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-medium">Categories</h3>
              </div>
              <div className="p-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm mb-1 flex justify-between items-center ${
                      selectedCategory === category.id 
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-750'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-medium">Filters</h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Status</h4>
                  <div className="space-y-2">
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Active
                    </label>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Update Required
                    </label>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" />
                      Archive
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Department</h4>
                  <div className="space-y-2">
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Production
                    </label>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Quality
                    </label>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      R&D
                    </label>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Engineering
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Search Bar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search SOPs by title, content or ID"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm">
                  <FunnelIcon className="w-4 h-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm">
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
            
            {/* SOP List */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-medium">Standard Operating Procedures</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredSOPs.length} results
                </span>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredSOPs.map(sop => (
                  <div key={sop.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <div className="flex justify-between mb-2">
                      <Link href={`/sops/${sop.id}`} className="font-medium hover:text-blue-600 dark:hover:text-blue-400">
                        {sop.title}
                      </Link>
                      <div className="flex items-center">
                        {sop.status === 'Active' ? (
                          <span className="inline-flex items-center px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs rounded">
                            <CheckCircleIcon className="w-3 h-3 mr-1" />
                            {sop.status}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300 text-xs rounded">
                            <ClockIcon className="w-3 h-3 mr-1" />
                            {sop.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <span className="border-r border-gray-300 dark:border-gray-600 pr-2 mr-2">{sop.category}</span>
                        <span>{sop.department}</span>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">
                        Updated by {sop.updatedBy} · {sop.lastUpdated}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 