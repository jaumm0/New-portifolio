import React,{useState} from "react";

function Contato() {
    const [nome, setNome] = useState("");
    return (
        <div className="w-full h-full flex flex-col justify-center items-center font-sans ">
            <h3 className="text-3xl font-bold ">Contato</h3>
            <input 
            type="text" 
            name="" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu Nome" 
            id="" />
            <button  className="bg-black cursor-pointer hover:bg-yellow-900 text-white font-bold rounded-md w-100 h-10 mt-5">Enviar</button>
        </div>
    )
}
export default Contato;

