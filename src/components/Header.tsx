"use client";

import { 
  MoonIcon, 
  SunIcon, 
  UserCircleIcon,
  BellIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(darkModePreference);

    // Add dark class to html element
    document.documentElement.classList.toggle('dark', darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 h-14 flex items-center px-4 z-40 shrink-0">
      <div className="flex-1 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="text-base font-semibold ml-2 border-l border-zinc-300 dark:border-zinc-700 pl-2">AI-SOP Manager</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            className="relative p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          <button 
            className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <QuestionMarkCircleIcon className="w-5 h-5" />
          </button>
          
          <button 
            onClick={toggleDarkMode}
            className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
          
          <div className="flex items-center gap-2 ml-2">
            <div className="text-sm text-right">
              <div className="font-medium">Mo Thompson</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Process Engineer</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white font-medium">
              MT
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 