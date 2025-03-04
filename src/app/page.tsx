import Link from 'next/link';
import { 
  DocumentTextIcon, 
  DocumentPlusIcon, 
  ClockIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-900 h-full p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Shakudo AI SOP Management</h1>
          <div className="flex items-center">
            <div className="mr-4 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-1" />
              21 CFR Part 11 Compliant
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-1" />
              ISO 9001:2015 Validated
            </div>
          </div>
        </div>
        
        <div className="mb-6 bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm flex items-center">
          <ShieldCheckIcon className="w-5 h-5 mr-2 text-zinc-600 dark:text-zinc-400" />
          <span>VPC: All data remains within your infrastructure</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Active SOPs</h3>
              <DocumentTextIcon className="w-6 h-6 text-zinc-500" />
            </div>
            <p className="text-4xl font-bold">143</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Across all departments</p>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Pending Updates</h3>
              <ClockIcon className="w-6 h-6 text-amber-500" />
            </div>
            <p className="text-4xl font-bold">37</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Require review by Dec 15</p>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Beverage</h3>
              <ChartBarIcon className="w-6 h-6 text-zinc-500" />
            </div>
            <p className="text-4xl font-bold">58</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Active procedures</p>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Dairy, Sauces & Bakery</h3>
              <ChartBarIcon className="w-6 h-6 text-zinc-500" />
            </div>
            <p className="text-4xl font-bold">85</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Active procedures</p>
          </div>
        </div>
        
        {/* Recent Activity and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Link href="/activity" className="text-zinc-600 dark:text-zinc-400 text-sm hover:underline">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="border-b border-zinc-100 dark:border-zinc-700 pb-4">
                <div className="flex items-start">
                  <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-full mr-3">
                    <DocumentTextIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="font-medium">High-Intensity Sweetener Blending Process</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      Updated by Sarah Johnson · 2 hours ago
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-zinc-100 dark:border-zinc-700 pb-4">
                <div className="flex items-start">
                  <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-full mr-3">
                    <DocumentTextIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="font-medium">Clean-in-Place Validation Protocol</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      Updated by Michael Chen · Yesterday
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-full mr-3">
                    <DocumentTextIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="font-medium">Aseptic Packaging Quality Control</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      Created by David Wilson · 3 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full mb-4">
                <DocumentPlusIcon className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
              </div>
              <h2 className="text-xl font-semibold">Create New SOP</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Use AI-assisted templates to quickly create compliant SOPs
              </p>
            </div>
            
            <Link 
              href="/sops/create" 
              className="block w-full py-2 px-4 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white font-medium rounded-lg text-center transition duration-150"
            >
              Create New SOP
            </Link>
            
            <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-700">
              <h3 className="font-medium mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link 
                  href="/sops"
                  className="block p-2 bg-zinc-50 dark:bg-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-md text-sm transition duration-150"
                >
                  Browse All SOPs
                </Link>
                <Link 
                  href="/training"
                  className="block p-2 bg-zinc-50 dark:bg-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-md text-sm transition duration-150"
                >
                  Operator Training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
