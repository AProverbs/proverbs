import React from 'react';

export default function Hero() {
  return (
    <header className="max-w-6xl mx-auto px-4 py-16 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
      <div className="md:w-2/3">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f2c3d] tracking-tight mb-4">
          Álvaro Paulino Chimbungule
        </h1>
        <p className="text-lg md:text-xl font-medium text-[#e67e22] mb-6">
          Prof. & Consultor Linguístico | Tradutor, Intérprete & Revisor
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2c3d] mb-4">
          Soluções Linguísticas de Alta Performance
        </h2>
        <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
          Do ensino personalizado à Interpretação simultânea, conectamos você e/ou a sua marca ao mercado global com precisão, rigor técnico e fluência.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#contacto"
            className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Contacte-nos
          </a>
          <a
            href="#servicos"
            className="border-2 border-[#0f2c3d] text-[#0f2c3d] hover:bg-[#0f2c3d] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Ver Serviços
          </a>
        </div>
      </div>

      {/* Logo Section */}
      <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://raw.githubusercontent.com/Proverbios/proverbios/principal/client/src/index.png"
          alt="Logotipo Álvaro Paulino Chimbungule"
          className="max-w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>
    </header>
  );
}
