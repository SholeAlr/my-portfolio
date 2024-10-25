import { Add, HambergerMenu } from 'iconsax-react'
import React, { FC, useEffect } from 'react'
import { HeaderProps } from './@types/header.type'
import { useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export const Header: FC<HeaderProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation()

  const toggleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  return (
    <>
      <div className='h-10 bg-zinc-800 p-2 fixed top-0 w-screen flex gap-x-4 z-40'>
        {isSidebarOpen ? (
          <Add className='text-gray-300 rotate-45' onClick={toggleSidebarClick} />
        ) : (
          <HambergerMenu className='text-gray-300' onClick={toggleSidebarClick} />
        )}

        <h4 className='text-gray-300'>Shole Portfolio</h4>
      </div>
      {isSidebarOpen ? <Sidebar /> : null}
    </>
  )
}
