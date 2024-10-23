import { RoutesConfig } from '../routes/RoutesConfig'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='h-full mt-10 w-40 bg-red-500 p-2 text-slate-900 font-bold'>
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
