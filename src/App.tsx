import Navbar from '@/scenes/navbar'
import './App.css'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'
import Home from '@/scenes/home';
import Benefits from './scenes/benefits';
import OurClasses from './scenes/ourClasses';
import ContactUs from './scenes/contactUs';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfThePage, setIsTopOfThePage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY === 0) {
        setIsTopOfThePage(true);
        setSelectedPage(SelectedPage.Home)
      }
      else setIsTopOfThePage(false)
    }
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
      <div className='app bg-gray-20'>
       <Navbar 
       isTopOfThePage= {isTopOfThePage} 
       selectedPage={selectedPage} 
       setSelectedPage={setSelectedPage}/>
       <Home setSelectedPage={setSelectedPage}/>
       <Benefits setSelectedPage={setSelectedPage}/>
       <OurClasses setSelectedPage={setSelectedPage}/>
       <ContactUs setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
