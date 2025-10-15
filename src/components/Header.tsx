"use client";
import Group2 from "../imports/Group2";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 text-[#EC6229]">
              <Group2 />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-[#FF611A] tracking-tight">MANGROVE</span>
              <span className="text-[#26C8B9]">labs</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-[#FF611A] transition-colors">
              Sobre
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#FF611A] transition-colors">
              Serviços
            </a>
            <a href="#projects" className="text-gray-700 hover:text-[#FF611A] transition-colors">
              Projetos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#FF611A] transition-colors">
              Contato
            </a>
            <Button className="bg-[#FF611A] hover:bg-[#FF611A]/90 text-white">
              Começar
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <a
              href="#about"
              className="block text-gray-700 hover:text-[#FF611A] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-[#FF611A] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#projects"
              className="block text-gray-700 hover:text-[#FF611A] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-[#FF611A] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <Button className="w-full bg-[#FF611A] hover:bg-[#FF611A]/90 text-white">
              Começar
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
