"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const appRoutes = [
    '/login',
    '/cadastro',
    '/finalizar-cadastro',
    '/dashboard',
    '/simulacao',
    '/atendimento'
  ];

  const isAppPage = appRoutes.some(route => pathname.startsWith(route));

  return (
    <header className="bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-light-border dark:border-dark-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          <Link href="/">RW IA</Link>
        </div>

        {/* Desktop Navigation */}
        {!isAppPage && (
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/solucoes" className="text-light-foreground/80 dark:text-dark-foreground/80 hover:text-primary transition-colors">Soluções</Link>
            <Link href="/como-funciona" className="text-light-foreground/80 dark:text-dark-foreground/80 hover:text-primary transition-colors">Como Funciona</Link>
            <Link href="/casos-de-uso" className="text-light-foreground/80 dark:text-dark-foreground/80 hover:text-primary transition-colors">Casos de Uso</Link>
            <Link href="/planos" className="text-light-foreground/80 dark:text-dark-foreground/80 hover:text-primary transition-colors">Planos</Link>
          </nav>
        )}

        <div className="flex items-center space-x-4">
          {!isAppPage && (
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-light-foreground/80 dark:text-dark-foreground/80 hover:text-primary transition-colors font-semibold">
                Login
              </Link>
            </div>
          )}
          <ThemeSwitcher />
          {!isAppPage && (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <svg className="w-6 h-6 text-light-foreground dark:text-dark-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !isAppPage && (
        <div className="md:hidden bg-light-card dark:bg-dark-card p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/solucoes" onClick={() => setIsMenuOpen(false)} className="text-light-foreground dark:text-dark-foreground">Soluções</Link>
            <Link href="/como-funciona" onClick={() => setIsMenuOpen(false)} className="text-light-foreground dark:text-dark-foreground">Como Funciona</Link>
            <Link href="/casos-de-uso" onClick={() => setIsMenuOpen(false)} className="text-light-foreground dark:text-dark-foreground">Casos de Uso</Link>
            <Link href="/planos" onClick={() => setIsMenuOpen(false)} className="text-light-foreground dark:text-dark-foreground">Planos</Link>
            <Link href="/login" onClick={() => setIsMenuOpen(false)} className="text-light-foreground dark:text-dark-foreground">Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;