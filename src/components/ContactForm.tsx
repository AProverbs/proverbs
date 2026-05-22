import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulando envio de formulário
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Formulário enviado:', formData);
      setSubmitted(true);
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2c3d] mb-4">
            Entre em Contacto
          </h2>
          <p className="text-lg text-slate-600">
            Estamos prontos para ajudar com suas necessidades linguísticas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-[#e67e22] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0f2c3d] mb-1">Email</h3>
                <a href="mailto:alvaroproverbs90@gmail.com" className="text-slate-600 hover:text-[#e67e22]">
                  alvaroproverbs90@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-[#e67e22] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0f2c3d] mb-1">Telefone</h3>
                <a href="tel:+55..." className="text-slate-600 hover:text-[#e67e22]">
                  +55 (XX) XXXXX-XXXX
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-[#e67e22] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#0f2c3d] mb-1">Localização</h3>
                <p className="text-slate-600">
                  Disponível online e presencialmente
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nome"
                placeholder="Seu Nome *"
                value={formData.nome}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#e67e22]"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#e67e22]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#e67e22]"
              />
              <select
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#e67e22]"
              >
                <option value="">Selecionar Assunto *</option>
                <option value="ensino">Ensino Personalizado</option>
                <option value="interpretacao">Interpretação</option>
                <option value="traducao">Tradução & Revisão</option>
                <option value="consultoria">Consultoria</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <textarea
              name="mensagem"
              placeholder="Sua Mensagem *"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#e67e22] resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#e67e22] hover:bg-[#d35400] disabled:bg-gray-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              {loading ? 'Enviando...' : submitted ? 'Enviado com Sucesso! ✓' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
