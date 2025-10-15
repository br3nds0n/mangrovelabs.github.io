import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[#26C8B9]/10 rounded-full">
            <span className="text-[#326D6B]">Inovação & Tecnologia</span>
          </div>
          
          <h1 className="mb-6 text-[#011C25]">
            Construindo o Futuro com
            <span className="block mt-2 bg-gradient-to-r from-[#FF611A] to-[#26C8B9] bg-clip-text text-transparent">
              Soluções de Ponta
            </span>
          </h1>

          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            A Mangrove Labs é sua parceira na transformação digital. Criamos soluções 
            de software inovadoras que impulsionam o crescimento e elevam o seu negócio a novos patamares.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#FF611A] hover:bg-[#FF611A]/90 text-white"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-[#326D6B] text-[#326D6B] hover:bg-[#326D6B]/10"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-[#FF611A]">100+</div>
              <p className="text-gray-600">Projetos Entregues</p>
            </div>
            <div>
              <div className="text-[#26C8B9]">50+</div>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="text-[#326D6B]">10+</div>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
