import Group2 from "../imports/Group2";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#011C25] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 text-[#EC6229]">
                <Group2 />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[#FF611A] tracking-tight">MANGROVE</span>
                <span className="text-[#26C8B9]">labs</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Construindo soluções digitais inovadoras para o futuro.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF611A] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#26C8B9] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#326D6B] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-white">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                  Aplicativos Mobile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                  Soluções em Nuvem
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                mangrove@mangrovelabs.com
              </li>
              <li className="text-gray-400">
                +1 (234) 567-890
              </li>
              <li className="text-gray-400">
                123 Innovation Street<br />
                Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 Mangrove Labs. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[#26C8B9] transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
