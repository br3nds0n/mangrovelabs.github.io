import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

const features = [
  "Equipe experiente de desenvolvedores e designers",
  "Metodologia ágil de desenvolvimento",
  "Abordagem focada no cliente",
  "Pilha de tecnologia de ponta",
  "Suporte e manutenção 24/7",
  "Histórico comprovado de sucesso",
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-[#011C25]">Sobre a Mangrove Labs</h2>
            <p className="mb-6 text-gray-600">
              Na Mangrove Labs, somos apaixonados por criar soluções digitais inovadoras que
              fazem a diferença de verdade. Nossa equipe de desenvolvedores, designers e estrategistas
              trabalha em conjunto para dar vida à sua visão.
            </p>
            <p className="mb-8 text-gray-600">
              Com anos de experiência em diversos setores, entendemos os desafios únicos
              que as empresas enfrentam no cenário digital atual. Não construímos apenas
              software – construímos parcerias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#26C8B9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Colaboração em equipe"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#26C8B9] rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FF611A] rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
