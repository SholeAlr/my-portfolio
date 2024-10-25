import { RoutesConfig } from '../routes/RoutesConfig'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='h-[calc(100vh-40px)] w-40 absolute top-10 bg-zinc-700 p-2 text-slate-900 font-bold'>
      <ul className='flex flex-col gap-y-2'>
        {RoutesConfig.map((eachRoute) => (
          <Link
            to={eachRoute.path}
            key={eachRoute.title}
            className='flex justify-between'
          >
            <li>{eachRoute.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
