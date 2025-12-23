import React from "react";
import Assets from "./Assets/fotoProfile.jpg";

const Profile = () => {
    return (  
    
   <section id="Profile" className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-1 gap-3  justify-center flex ml-auto mt-20 items-center"> 
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 w-110 justify-center items-center  "> 
        <h1 
            className="text-base sm:text-4xl md:text-4xl lg:text-4xl font-bold text-yellow-900  ">JOAO VICTOR
        </h1> 
        <p 
            className=" font-bold text-base sm:text-4xl md:text-4xl lg:text-4xl  text-yellow-900">Front-end Developer
        </p>
        <p 
            className="w-110  text-base sm:text-lg md:text-xl lg:text-sm font-bold  " >Desenvolvedor Front-End focado em React, JavaScript e Tailwind criando interfaces modernas, responsivas e de alto desempenho. Experiência em desenvolvimento web voltado à experiência do usuário, performance e boas práticas de código. Apaixonado por design funcional, código limpo e aprendizado contínuo.
        </p> 
    </div> 
        <div 
            className=" grid grid-cols-1 md:grid-cols-1 hidden md:block   lg:grid-cols-1 place-items-end w-75 place-items-end "> 
            <span className="flex justify-center align-center">  
                <span className=" border-yellow-900  "> 
                    <img src={Assets} alt="Foto de Perfil" width={300} className="border-4 border-yellow-900 rounded-full " /> 
                </span> 
            </span>
        </div> 
        </section>
     );
}
export default Profile;  