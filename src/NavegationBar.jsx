import React from "react";


const NavegationBar = () => {
  return (
    <nav className="w-100 h-screen fixed top-0 left-0 flex flex-col items-center p-6 bg-black min(m-) text-white">
    <div className=""  >
        
        <section className="flex flex-col justify-center items-center space-y-3 pt-5 fixed top-50 left-35 font-bold gap-2 text-lg"> 

            <h3><a href="#Profile" className="hover:text-amber-800 transition-all 2s ">Sobre</a></h3>
            <h3><a href="#Experiencia"className="hover:text-amber-400 transition-all 2s">Experiencias</a></h3>
            <h3><a href="#Projects"className="hover:text-amber-800 transition-all 2s">Projetos</a></h3>
            <h3><a href="#Services"className="hover:text-amber-800 transition-all 2s">Serviços</a></h3>
            <h3><a href="#Habilidades"className="hover:text-amber-800 transition-all 2s" >Habilidades</a></h3>
            <h3><a href=""className="hover:text-amber-800 transition-all 2s">Contato</a></h3>
            
        </section>
      </div>
      </nav>
  );
}
export default NavegationBar;