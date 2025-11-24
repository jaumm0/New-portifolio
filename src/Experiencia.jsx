import React from "react";

function Experiencia() {
    return (  
        <div id="Experiencia" className="flex flex-col mt-50 font-sans  border-yellow-900  ">
            <h3 className="  top-50 text-3xl pb-5 font-bold flex ">Experiências</h3>
            <ul className=" top-60 list-disc space-y-4 border justify-center rounded-2xl p-10  border-yellow-900">
                <li className=" font-bold ">Desenvolvedor Front-end na Tech Solutions (2022 - Presente)
                    <p className=" font-normal ">Responsável pelo desenvolvimento de interfaces de usuário responsivas utilizando React.js e Tailwind CSS. Colaborei com designers para transformar wireframes em componentes reutilizáveis, melhorando a experiência do usuário em 30%.</p>
                </li>
                <li className=" font-bold ">Estagiário em Desenvolvimento Web na Web Innovators (2021 - 2022)
                    <p className=" font-normal ">Apoiei a equipe de desenvolvimento na criação de páginas web dinâmicas usando HTML, CSS e JavaScript. Participei de reuniões de sprint e contribuí para a resolução de bugs, adquirindo experiência prática em metodologias ágeis.</p>
                </li>
                <li className=" font-bold ">Projetos Freelance (2020 - Presente)
                    <p class=" font-normal ">Desenvolvi diversos projetos freelance para pequenos negócios, incluindo sites institucionais e lojas online. Utilizei React para construir interfaces interativas e implementei soluções de back-end simples com Node.js, garantindo a satisfação do cliente.</p>
                </li>
            </ul>       
        </div>
        );  
}
export default Experiencia; 