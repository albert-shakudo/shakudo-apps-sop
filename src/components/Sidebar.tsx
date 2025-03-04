import { 
  HomeIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  DocumentPlusIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  BellIcon,
  DocumentChartBarIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export function Sidebar() {
  const navigationItems = [
    { icon: <HomeIcon className="sidebar-icon" />, href: "/", tooltip: "Dashboard" },
    { icon: <DocumentTextIcon className="sidebar-icon" />, href: "/sops", tooltip: "SOP Library" },
    { icon: <DocumentPlusIcon className="sidebar-icon" />, href: "/sops/create", tooltip: "Create SOP" },
    { icon: <AcademicCapIcon className="sidebar-icon" />, href: "/training", tooltip: "Operator Training" },
    { icon: <ClipboardDocumentCheckIcon className="sidebar-icon" />, href: "/approvals", tooltip: "Approvals" },
    { icon: <DocumentChartBarIcon className="sidebar-icon" />, href: "/reports", tooltip: "Compliance Reports" },
    { icon: <BellIcon className="sidebar-icon" />, href: "/notifications", tooltip: "Notifications" },
    { icon: <Cog6ToothIcon className="sidebar-icon" />, href: "/settings", tooltip: "Settings" },
  ];

  return (
    <aside className="w-14 h-full bg-zinc-900 flex flex-col items-center py-4 fixed left-0 top-0 z-50">
      <div className="mb-8">
        <Image
          src="/ShakudoAISuite-Operations-SOP.svg"
          alt="Shakudo AI Suite"
          width={20}
          height={20}
          className="text-white invert" 
        />
      </div>
      
      <nav className="flex flex-col gap-8">
        {navigationItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className="transition-colors duration-200 text-zinc-400 hover:text-white group relative"
            title={item.tooltip}
          >
            {item.icon}
            {item.tooltip && (
              <span className="absolute left-full ml-2 px-2 py-1 bg-zinc-800 text-zinc-100 text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap">
                {item.tooltip}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

/* Add this to globals.css if not already present */
/*
.sidebar-icon {
  width: 20px;
  height: 20px;
}
*/ 