import React from "react";

function Experiencia() {
    return (  
        <div id="Experiencia" className="flex flex-col mt-50 font-sans  border-yellow-900  ">
            <h3 className="  top-50 text-3xl pb-5 font-bold flex ">Experiências</h3>
            <ul className=" top-60 list-disc space-y-4 border justify-center rounded-2xl p-10  border-yellow-900">
                <li className=" font-bold ">Auxiliar de TI — (1 mês – Atual)
                    <p className=" font-normal ">Atuação no suporte e apoio técnico, com envolvimento em atividades relacionadas à tecnologia e desenvolvimento de sistemas. Auxílio na manutenção de sistemas, configuração de ambientes, testes básicos de aplicações e apoio na resolução de problemas técnicos. Contato com lógica de programação, organização de código e boas práticas de tecnologia, contribuindo para o desenvolvimento de habilidades voltadas ao desenvolvimento front-end.</p>
                </li>
                <li className=" font-bold ">Projeto Pessoal – Buscador de Perfis do GitHub
                    <p className=" font-normal ">Desenvolvimento de uma aplicação front-end utilizando React.js e Tailwind CSS, integrada à GitHub REST API, permitindo a busca de usuários do GitHub e a visualização de informações como nome, foto de perfil, seguidores, quantidade de repositórios e listagem de repositórios com nome e descrição.</p>
                </li>
            </ul>       
        </div>
        );  
}
export default Experiencia; 