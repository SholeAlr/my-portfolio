import { Route, Routes } from 'react-router-dom'
import { RoutesConfig } from './routes/RoutesConfig'

function App() {
  return (
    <Routes>
      {RoutesConfig.map((eachRoute) => (
        <Route
          key={eachRoute.title}
          path={eachRoute.path}
          element={eachRoute.element}
        />
      ))}
    </Routes>
  )
}

export default App
