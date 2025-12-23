import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "tailwindcss";
import Profile from './Profile.jsx'
import NavegationBar from './NavegationBar.jsx'
import Experiencia from './Experiencia.jsx' 
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import Habilidades from './Habilidades.jsx'
import Contato from './Contato.jsx'
import Icons from './icons.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body className=''>
   <header className='grid grid-cols-1 w-60 h-full text-white  fixed bg-yellow-900'> 
      <nav className=' justify-center items-center fixed left-18 top-40 '>
        <NavegationBar/>  
      </nav>
    </header>
    <main className='flex justify-center flex-col items-center  w-full h-full'>
      <Profile/>
      
        <section className=' flex justify-center items-center relative left-42 w-195'> 
          <Experiencia/>
        </section>
        <section className=' flex justify-center items-center relative left-42 mt-30 w-195'>
          <Projects/>
        </section>
        <section className=' flex justify-center items-center relative left-42 w-195 '>
          <Services/>
        </section>
        <section className='flex justify-center items-center relative left-42 w-195 '> 
          <Habilidades/>
        </section>
        <section className='flex justify-center items-center  w-3/6 border rounded-2xl h-full mt-30 '>
         
        </section>
    </main>
    </body>
    
    
  </StrictMode>,
)
