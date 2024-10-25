import { Header } from './Header'
import { Main } from './Main'
import { useState } from 'react'

export const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  return (
    <div className='h-screen w-screen'>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />


      <Main isSidebarOpen={isSidebarOpen} />
    </div>
  )
}
