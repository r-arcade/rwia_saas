"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Equipe', href: '/dashboard/equipe' },
  { name: 'Simulação', href: '/dashboard/simulacao' },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-light-card dark:bg-dark-card p-fluid-5">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-2 rounded-md text-fluid-body font-semibold transition-colors ${
              pathname === item.href
                ? 'bg-primary text-white'
                : 'text-light-foreground/70 dark:text-dark-foreground/70 hover:bg-light-border dark:hover:bg-dark-border hover:text-light-foreground dark:hover:text-dark-foreground'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
