import { useState, useEffect } from "react";
import { ArrowBigRightDash } from 'lucide-react';
import { ArrowBigLeftDash } from 'lucide-react';
import Assets from "./Assets/test.png";

function Projects() {
  const projects = [
    {
      title: "Landing Page ",
      image: "https://acdn-us.mitiendanube.com/stores/001/929/213/themes/atlantico/2-slide-1734049808011-3571780959-ac8720bc9fe5a2c6e971c0536ef96b651734049810-1920-1920.webp?272675730",
      link: "https://jaumm0.github.io/Landing-page-react/",
      description:
        "Landing page desenvolvida com foco na venda de produtos gamer de alta qualidade, priorizando performance, design moderno e experiência do usuário. O projeto foi construído com React e Vite para garantir carregamento rápido e uma estrutura eficiente, Tailwind CSS para estilização responsiva e consistente, e Lucide Icons para ícones leves e modernos. O layout foi pensado para destacar os produtos, reforçar a identidade gamer e incentivar a conversão.",
    },
    {
      title: "Portal de Notícias em Tempo Real",
      image: Assets,
      link: "https://jaumm0.github.io/Landing-page-react/",
      description:
        "Portal de notícias que consome APIs públicas para exibir notícias em tempo real, com React no front-end.",
    },
    {
      title: "Loja Online de Produtos Sustentáveis",
      image: "https://via.placeholder.com/600x300",
      link: "https://jaumm0.github.io/Landing-page-react/",
      description:
        "E-commerce focado em produtos sustentáveis, com carrinho de compras e integração com pagamentos.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ▶ Próximo
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  // ◀ Anterior
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // // ⏱ Auto-play
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 900000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section
      id="Projects"
      className="w-full max-w-4xl mx-auto font-sans"
    >
      <h3 className="text-3xl font-bold mb-6">Projetos</h3>

      {/* Viewport */}
      <div className="relative overflow-hidden rounded-2xl border border-yellow-900">
        {/* Faixa */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full p-8 bg-yellow-900 text-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />

              <h4 className="text-xl font-bold mb-2 item-center justify-center flex">
                {project.title}
              </h4>

              <p className="text-gray-300 mb-4 font-medium">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="inline-block bg-yellow-700 px-4 py-2 rounded hover:bg-yellow-800 transition"
              >
                Ver projeto
              </a>
            </div>
          ))}
        </div>

        {/* Botões */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-70 -translate-y-1/2 transition duration-300 hover:bg-black/60 cursor-pointer text-white px-3 py-2 rounded-full"
        >
          <ArrowBigLeftDash />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-70 -translate-y-1/2 cursor-pointer transition duration-300 hover:bg-black/60 text-white px-3 py-2 rounded-full"
        >
          <ArrowBigRightDash />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-yellow-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
