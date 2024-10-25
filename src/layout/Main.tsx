import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { MainProps } from './@types/main.type'
import clsx from 'clsx'

export const Main: FC<MainProps> = ({ isSidebarOpen }) => {
  return (
    <main className={clsx('absolute pt-12 px-2 w-full h-full bg-zinc-900', { 'w-[calc(100vw-160px)] left-40': isSidebarOpen })}>
      <Outlet />
    </main>
  )
}
