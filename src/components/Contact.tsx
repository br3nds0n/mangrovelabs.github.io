"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Obrigado pela sua mensagem! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#011C25]">Fale Conosco</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pronto para iniciar seu projeto? Adoraríamos conversar com você. Fale conosco hoje e vamos construir algo incrível juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre o seu projeto..."
                  rows={6}
                  required
                  className="border-gray-300"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#FF611A] hover:bg-[#FF611A]/90 text-white"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-[#011C25]">Informações de Contato</h3>
              <p className="text-gray-600 mb-8">
                Fale conosco por qualquer um destes canais e responderemos o quanto antes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF611A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FF611A]" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">E-mail</p>
                  <a href="mailto:hello@mangrovelabs.com" className="text-[#011C25] hover:text-[#FF611A]">
                    hello@mangrovelabs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#26C8B9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#26C8B9]" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Telefone</p>
                  <a href="tel:+1234567890" className="text-[#011C25] hover:text-[#26C8B9]">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#326D6B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#326D6B]" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Endereço</p>
                  <p className="text-[#011C25]">
                    123 Innovation Street<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
