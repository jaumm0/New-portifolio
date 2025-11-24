import React from "react";
import Assets from "./assets/fotoProfile.jpg";

const Profile = () => {
    return (  
    
    <nav id="Profile" className="flex items-center h-200 relative left-50 top-[1vh] space-y-2 font-sans "> 
        <h1 className=" text-4xl font-bold relative left-58 top-0  ">JOAO VICTOR</h1>
        <div className="flex items-center justify-center mt-20  space-y-1 ">   
                <p className="text-4xl font-bold top-52 left-141 text-yellow-900">Front-end Developer</p>
                <p className="w-150  relative top-[10vh] right-[36vh] font-bold " >Desenvolvedor Front-End focado em React, JavaScript e Tailwind criando interfaces modernas, responsivas e de alto desempenho. Experiência em desenvolvimento web voltado à experiência do usuário, performance e boas práticas de código. Apaixonado por design funcional, código limpo e aprendizado contínuo.</p>

            <span flex justify-center align-center> 
                <span className=" border-yellow-900  rounded-full relative ">
                    <img src={Assets} alt="Foto de Perfil" width={300} className="relative right-[25vh] border-4 border-yellow-900 rounded-full "  />
                </span>
            </span>
          
        </div>
       
     </nav>
     );
}
export default Profile;  