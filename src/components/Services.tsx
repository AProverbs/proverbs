import React from 'react';
import { BookOpen, Headphones, PenTool, Users } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'ensino',
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Ensino Personalizado',
    description: 'Aulas de línguas adaptadas ao seu nível e objectivos',
    features: ['Aulas individuais', 'Programas personalizados', 'Métodos comprovados'],
  },
  {
    id: 'interpretacao',
    icon: <Headphones className="w-8 h-8" />,
    title: 'Interpretação Simultânea',
    description: 'Serviço de interpretação para conferências e eventos',
    features: ['Conferências', 'Eventos corporativos', 'Múltiplas línguas'],
  },
  {
    id: 'traducao',
    icon: <PenTool className="w-8 h-8" />,
    title: 'Tradução & Revisão',
    description: 'Tradução profissional e revisão de textos técnicos',
    features: ['Textos técnicos', 'Documentos legais', 'Conteúdo multimédia'],
  },
  {
    id: 'consultoria',
    icon: <Users className="w-8 h-8" />,
    title: 'Consultoria Linguística',
    description: 'Orientação linguística para empresas e instituições',
    features: ['Diagnóstico linguístico', 'Formação corporativa', 'Estratégia multilingue'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c3d] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Oferecemos soluções linguísticas completas para atender às suas necessidades profissionais e pessoais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#e67e22]"
            >
              <div className="text-[#e67e22] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0f2c3d] mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-500 flex items-start">
                    <span className="text-[#e67e22] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
