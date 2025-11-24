import React from "react";

function Projects() {
    return (  
        <div id="Projects" className="flex flex-col font-sans w-full border-yellow-900  ">
            <h3 className="  top-50 text-3xl pb-5 font-bold flex ">Projetos</h3>
            <ul className=" top-60 list-disc space-y-4 border  justify-center rounded-2xl p-10  border-yellow-900">
                <li className=" font-bold ">Sistema de Gerenciamento de Tarefas
                    <p className=" font-normal ">Aplicação web desenvolvida com React.js e Node.js para gerenciar tarefas diárias. Inclui funcionalidades como criação, edição e exclusão de tarefas, além de categorização e prazos. Utiliza MongoDB para armazenamento de dados.</p>
                </li>
                <li className=" font-bold ">Portal de Notícias em Tempo Real
                    <p className=" font-normal ">Desenvolvimento de um portal de notícias que consome APIs públicas para exibir notícias em tempo real. Implementado com React para o front-end e Express.js para o back-end, garantindo uma experiência de usuário fluida e responsiva.</p>       
                </li>
                <li className=" font-bold ">Loja Online de Produtos Sustentáveis
                    <p class=" font-normal ">E-commerce focado em produtos sustentáveis, construído com React e Stripe para processamento de pagamentos. Inclui funcionalidades como carrinho de compras, sistema de avaliação de produtos e integração com redes sociais para compartilhamento.</p>
                </li>
            </ul>       
        </div>
        );  
}   
export default Projects;