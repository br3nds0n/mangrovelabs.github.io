import { Code, Smartphone, Cloud, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Aplicações web sob medida com tecnologias modernas e boas práticas.",
    color: "#FF611A",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Soluções móveis nativas e multiplataforma para iOS e Android.",
    color: "#26C8B9",
  },
  {
    icon: Cloud,
    title: "Soluções em Nuvem",
    description: "Infraestrutura em nuvem escalável e serviços de migração.",
    color: "#326D6B",
  },
  {
    icon: Database,
    title: "Análise de Dados",
    description: "Transforme seus dados em insights acionáveis e inteligência.",
    color: "#FF611A",
  },
  {
    icon: Globe,
    title: "Estratégia Digital",
    description: "Consultoria e planejamento completos de transformação digital.",
    color: "#26C8B9",
  },
  {
    icon: Zap,
    title: "Desenvolvimento de API",
    description: "Projetos de API robustos e seguros: design, desenvolvimento e integração.",
    color: "#326D6B",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#011C25]">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para ajudar seu negócio a prosperar na era digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>
                  <h3 className="mb-2 text-[#011C25]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
