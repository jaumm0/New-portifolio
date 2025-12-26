import React from "react";
import { Code, CodeXml } from 'lucide-react';

function Services() {
    return (
        
    <div id="Services" className="grid grid-cols-1 items-center justify-center text-center mb-40 mt-20 gap-4 ">
        <h3 className="  top-50 text-3xl pb-5 font-bold flex ">Serviços</h3>
        <ul className="flex flex-row items-center justify-center text-start  gap-4 ">
            <li className="border border-gray-800 rounded-2xl text-sm  w-120 h-60  ">
                <CodeXml  className="ml-6 size-8 mt-5"/>
                <h3 className="pl-5 pt-3 font-bold text-">Desenolvimento Frontend</h3>
                <p className="p-5 ">Criação de sistemas robustos e escaláveis, focados na lógica de negócio e integração com bancos de dados, APIs e servidores.</p>
            </li>
            <li className="border border-gray-800 rounded-2xl text-sm  w-120 h-60  ">
                <CodeXml  className="ml-6 size-8 mt-5"/>
                <h3 className="pl-5 pt-3 font-bold text-">Desenolvimento Frontend</h3>
                <p className="p-5">Criação de sistemas robustos e escaláveis, focados na lógica de negócio e integração com bancos de dados, APIs e servidores.</p>
            </li>
            <li className="border border-gray-800 rounded-2xl text-sm   w-120 h-60  ">
                <CodeXml  className="ml-6 size-8 mt-5"/>
                <h3 className="pl-5 pt-3 font-bold text-">Desenolvimento Frontend</h3>
                <p className="p-5">Criação de sistemas robustos e escaláveis, focados na lógica de negócio e integração com bancos de dados, APIs e servidores.</p>
            </li>
        </ul>
    </div>
    )
}
export default Services;