import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Basic/NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from './component/Basic/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='grid grid-cols-12 h-screen overflow-y-hidden'>
      <div className='col-span-2'>
        <SideBar/>
      </div>
      <div className='col-span-10 relative h-screen'>
        <Header/>
        <main className='absolute top-[70px] left-0 right-0 bottom-0 px-3 py-5 bg-blue-100 overflow-y-scroll' >
          <Outlet/>
        </main>
      </div>
    </main>
  )
}

export default App
