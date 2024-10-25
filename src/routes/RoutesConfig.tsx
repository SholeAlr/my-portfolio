import { Games } from '@/pages/games/Games'
import { AppLayout } from '../layout/AppLayout'
import { Home } from '../pages/Home/Home'
import { MemoryGame } from '@/pages/games/memory-game/MemoryGame'

export const RoutesConfig = [
  {
    layout: <AppLayout />,
    path: '/',
    element: <Home />,
    title: 'Home',
  },
  {
    layout: <AppLayout />,
    path: '/games',
    element: <Games />,
    title: 'Games',
  },
  {
    layout: <AppLayout />,
    path: '/games/memory-game',
    element: <MemoryGame />,
    title: 'MemoryGame',
  },
]
