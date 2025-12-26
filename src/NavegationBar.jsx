import React from "react";


const NavegationBar = () => {
  return (
    <nav className="">

        <aside className="font-bold gap-4 items-center justify-center flex flex-col"> 
            <h3>
              <a href="#Profile" className="hover:text-black hover:bg-gray-100 rounded-sm p-2 transition-all 2s ">
                Sobre
              </a>
            </h3>
            <h3>
              <a href="#Experiencia"className="hover:text-black hover:bg-gray-100 rounded-sm p-2 transition-all 2s">
                Experiencias
              </a>
            </h3>
            <h3>
              <a href="#Projects"className="hover:text-black hover:bg-gray-100 rounded-sm p-2 transition-all 2s">
                Projetos
              </a>
            </h3>
            <h3>
              <a href="#Services"className="hover:text-black hover:bg-gray-100 rounded-sm p-2 transition-all 2s">
                Serviços
              </a>
            </h3>
            <h3>
              <a href="#Habilidades"className="hover:text-black hover:bg-gray-100 rounded-sm p-2 transition-all 2s" >
                Habilidades
              </a>
            </h3>
            <h3>
              <a href=""className="hover:text-black hover:bg-gray-100 rounded-sm p-2 transition-all 2s">
                Contato
              </a>
            </h3>
            
        </aside>
      </nav>
  );
}
export default NavegationBar;