"use client";

import {
  ChevronRightIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentCheckIcon,
  UserCircleIcon,
  PencilIcon,
  XCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ApprovalsPage() {
  const pendingApprovals = [
    {
      id: 'sop-8',
      title: 'Texture Analyzer Calibration Procedure',
      requestedBy: 'Sarah Johnson',
      department: 'Quality',
      requestedDate: 'Mar 4, 2024',
      status: 'Pending Your Approval',
      priority: 'High'
    },
    {
      id: 'sop-9',
      title: 'Liquid Sweetener Transfer Protocol',
      requestedBy: 'Michael Chen',
      department: 'Production',
      requestedDate: 'Mar 3, 2024',
      status: 'Pending Your Approval',
      priority: 'Medium'
    },
    {
      id: 'sop-10',
      title: 'Product Recall Procedure Update',
      requestedBy: 'Jennifer Mills',
      department: 'Quality',
      requestedDate: 'Mar 2, 2024',
      status: 'In Technical Review',
      priority: 'High'
    }
  ];

  const recentlyApproved = [
    {
      id: 'sop-4',
      title: 'Aseptic Packaging Quality Control',
      approvedBy: 'Jennifer Mills',
      role: 'VP Quality',
      approvedDate: 'Mar 3, 2024',
      signatureId: 'SIG-2024-0301-JM'
    },
    {
      id: 'sop-1',
      title: 'High-Intensity Sweetener Blending Process',
      approvedBy: 'Robert Taylor',
      role: 'Production Manager',
      approvedDate: 'Mar 2, 2024',
      signatureId: 'SIG-2024-0302-RT'
    },
    {
      id: 'sop-2',
      title: 'Clean-in-Place Validation Protocol',
      approvedBy: 'David Wilson',
      role: 'Engineering Lead',
      approvedDate: 'Mar 1, 2024',
      signatureId: 'SIG-2024-0301-DW'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 h-full p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
            <ChevronRightIcon className="w-4 h-4 mx-2" />
            <span>Approvals</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Approval Workflow</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Review and approve SOPs using our secure electronic signature system
          </p>
        </div>
        
        <div className="mb-8 bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-0.5">
            <DocumentCheckIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium mb-1">21 CFR Part 11 Compliant Signatures</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              All electronic signatures are compliant with FDA 21 CFR Part 11 regulations and include audit trails. Each approval is securely logged with timestamp, user verification, and intended attribution statement.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Approvals */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="font-semibold text-lg">Pending Approvals</h2>
              <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300 text-xs rounded-full px-2 py-1">
                3 Pending
              </span>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className="p-4">
                  <div className="flex justify-between mb-2">
                    <Link 
                      href={`/approvals/${approval.id}`}
                      className="font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {approval.title}
                    </Link>
                    <div>
                      {approval.priority === 'High' ? (
                        <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 text-xs rounded px-2 py-1">
                          High Priority
                        </span>
                      ) : (
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded px-2 py-1">
                          {approval.priority} Priority
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div>
                      Requested by {approval.requestedBy} · {approval.department}
                    </div>
                    <div>
                      {approval.requestedDate}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {approval.status === 'Pending Your Approval' ? (
                        <ClockIcon className="w-4 h-4 text-amber-500 mr-1.5" />
                      ) : (
                        <ArrowPathIcon className="w-4 h-4 text-blue-500 mr-1.5" />
                      )}
                      <span className="text-sm">{approval.status}</span>
                    </div>
                    
                    {approval.status === 'Pending Your Approval' && (
                      <div className="flex space-x-2">
                        <button className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-xs">
                          <XCircleIcon className="w-3.5 h-3.5 mr-1" />
                          Reject
                        </button>
                        <button className="inline-flex items-center px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                          <CheckCircleIcon className="w-3.5 h-3.5 mr-1" />
                          Approve
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Electronic Signatures */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-semibold text-lg">Recently Approved</h2>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentlyApproved.map((approval) => (
                <div key={approval.id} className="p-4">
                  <div className="mb-3">
                    <Link 
                      href={`/sops/${approval.id}`}
                      className="font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {approval.title}
                    </Link>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-2">
                          <UserCircleIcon className="w-5 h-5 text-green-700 dark:text-green-400" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{approval.approvedBy}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{approval.role}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {approval.approvedDate}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <PencilIcon className="w-3.5 h-3.5 mr-1" />
                        Electronic Signature ID: {approval.signatureId}
                      </div>
                      <button className="text-blue-600 dark:text-blue-400 hover:underline">
                        View Audit Log
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750 text-center">
              <Link 
                href="/approvals/history" 
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View All Approval History
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 