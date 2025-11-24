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
    <body className='w-full h-full'>
      
    
   <header className='flex '>
      <nav className='flex w-400'>
        <NavegationBar/>
      </nav>
    </header>
    <main className='flex justify-center flex-col items-center  '>
      <Profile/>
      <Icons/>
        <section className='w-3/6 flex justify-center items-center relative left-42 '>
          <Experiencia/>
        </section>
        <section className='w-3/6 flex justify-center items-center relative left-42 mt-30'>
          <Projects/>
        </section>
        <section className=' flex justify-center items-center relative left-42 w-3/6 '>
          <Services/>
        </section>
        <section className='flex justify-center items-center relative left-42 w-3/6 '> 
          <Habilidades/>
        </section>
        <section className='flex justify-center items-center  w-3/6 border rounded-2xl h-full mt-30 '>
         
        </section>
    </main>
    </body>
    
    
  </StrictMode>,
)
