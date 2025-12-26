import React from "react";
import Assets from "./Assets/fotoProfile.jpg";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import TextType from './TextType';



const Profile = () => {
    return (  
    
   <section id="Profile" className="grid grid-cols-2 place-self-center mt-40 "> 
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 w-110 justify-center items-center  "> 
        <h1 className="text-base sm:text-4xl md:text-4xl lg:text-4xl font-bold text-yellow-900  ">Joao Victor Anjos</h1>
            <TextType 
                text={["Desenvolvedor Front-end ", "Desenvolvedor Web", "Desenvolvedor UI"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-base sm:text-4xl md:text-4xl lg:text-4xl font-bold text-yellow-900 "
                />
                
            <p 
                className="w-110  text-base sm:text-lg md:text-xl lg:text-sm font-bold  " >
                    Desenvolvedor Front-End React, JavaScript e Tailwind criando interfaces modernas, responsivas e de alto desempenho. Experiência em desenvolvimento web voltado à experiência do usuário, performance e boas práticas de código. Apaixonado por design funcional, código limpo e aprendizado contínuo.
            </p> 
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-40 mt-8 ml-2  gap-3 justify-center items-center">
            <li className=""    >
                <a href="https://www.linkedin.com/in/joao-victor-1234567890/" target="_blank" rel="noopener noreferrer" 
                className="hover:text-white  hover:bg-yellow-900 transition duration-300 rounded-full w-10 h-10 justify-center items-center flex">
                    <Linkedin /></a>
            </li>
            <li className=""    >
                <a href="https://github.com/jaumm0" target="_blank" rel="noopener noreferrer" 
                className="hover:text-white  hover:bg-yellow-900 transition duration-300 rounded-full w-10 h-10 justify-center items-center flex">
                    <Github /></a>       

            </li>
            <li className="">
                <a href="https://github.com/jaumm0" target="_blank" rel="noopener noreferrer" 
                className="hover:text-white  hover:bg-yellow-900 transition duration-300 rounded-full w-10 h-10 justify-center items-center flex"><MessageCircle /></a>       
            </li>
        </ul>
    </div> 
        <div 
            className=" grid grid-cols-1 md:grid-cols-1 hidden md:block  lg:grid-cols-1 place-items-end  place-items-end "> 
            <span className="flex justify-center align-center">  
                <span className=" border-yellow-900  "> 
                    <img src={Assets} alt="Foto de Perfil" width={300} className="border-4 place-self-center border-yellow-900 rounded-full " /> 
                </span> 
            </span>
        </div> 
        </section>
     );
}
export default Profile;  