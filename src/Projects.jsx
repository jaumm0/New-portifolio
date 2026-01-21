import { useState, useEffect } from "react";
import { ArrowBigRightDash } from 'lucide-react';
import { ArrowBigLeftDash } from 'lucide-react';
import Assets from "./Assets/DevStack.png";
import Psicologo from "./Assets/Psicologo.png";

function Projects() {
  const projects = [
    {
      title: "Search Github Profile",
      image: Assets,
      link: "https://jaumm0.github.io/SeachProfilleGitHubAPI/",
      description:
      "Projeto desenvolvido em React.js com Tailwind CSS, utilizando a GitHub REST API para buscar e exibir informações de usuários do GitHub. A aplicação permite visualizar dados do perfil, como foto, seguidores, número de repositórios, além da listagem detalhada de repositórios com nome e descrição. O projeto foca em componentização, consumo de APIs REST e criação de uma interface responsiva e moderna."
    },
    {
      title: "Landing Page",
      image: "https://acdn-us.mitiendanube.com/stores/001/929/213/themes/atlantico/2-slide-1734049808011-3571780959-ac8720bc9fe5a2c6e971c0536ef96b651734049810-1920-1920.webp?272675730",
      link: "https://jaumm0.github.io/Landing-page-react/",
      description:
        "Landing page desenvolvida com foco na venda de produtos gamer de alta qualidade, priorizando performance, design moderno e experiência do usuário. O projeto foi construído com React e Vite para garantir carregamento rápido e uma estrutura eficiente, Tailwind CSS para estilização responsiva e consistente, e Lucide Icons para ícones leves e modernos. O layout foi pensado para destacar os produtos, reforçar a identidade gamer e incentivar a conversão.",
    },
    {
      title: "Landing Page Psicóloga Freelancer",
      image: Psicologo,
      link: "https://jaumm0.github.io/Page-psicologa-freela/#Contact",
      description:
        "Desenvolvido como freelancer, este projeto consiste em uma landing page moderna e responsiva para psicólogo, construída com React 19.2.0 para criação de interfaces dinâmicas, Vite 7.2.4 como ferramenta de build e servidor de desenvolvimento, e estilizada com Tailwind CSS 4.1.18 para um design limpo e funcional. Foram utilizados ícones SVG do Lucide React 0.562.0 e implementadas boas práticas de código com ESLint 9.39.1. O projeto foi publicado com sucesso no GitHub Pages (gh-pages 6.3.0), garantindo fácil acesso online.",
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
    // const interval = setInterval(nextSlide, 3000);
   //  return () => clearInterval(interval);
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
              className="min-w-full p-8   text-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />

              <h4 className="text-xl font-bold mb-2 text-black item-center justify-center flex">
                {project.title}
              </h4>

              <p className="text-black mb-4 font-medium">
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
          <ArrowBigLeftDash  className="text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-70 -translate-y-1/2 cursor-pointer transition duration-300 hover:bg-black/60 text-white px-3 py-2 rounded-full"
        >
          <ArrowBigRightDash className="text-black" />
        </button>
      </div>

      
    </section>
  );
}

export default Projects;
