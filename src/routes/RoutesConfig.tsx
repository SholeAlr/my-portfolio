import { AppLayout } from '../layout/AppLayout'
import { Home } from '../pages/Home/Home'

export const RoutesConfig = [
  {
    layout: <AppLayout />,
    path: '/',
    element: <Home />,
    title: 'Home',
  },
]
