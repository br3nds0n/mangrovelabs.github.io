import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Plataforma de E-commerce",
    description: "Uma solução de e-commerce moderna com análises avançadas e recomendações com IA.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop",
    tags: ["Web", "Mobile", "IA"],
    color: "#FF611A",
  },
  {
    title: "Dashboard de Saúde",
    description: "Sistema de monitoramento de pacientes em tempo real com visualização de dados intuitiva.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tags: ["Dashboard", "Analytics"],
    color: "#26C8B9",
  },
  {
    title: "App Mobile Fintech",
    description: "Aplicativo bancário seguro com autenticação biométrica e transações em tempo real.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["Mobile", "Segurança"],
    color: "#326D6B",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#011C25] text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Projetos em Destaque</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore alguns dos nossos trabalhos recentes e veja como ajudamos empresas a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-white/10 text-white hover:bg-white/20"
                      style={{ borderColor: project.color }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
