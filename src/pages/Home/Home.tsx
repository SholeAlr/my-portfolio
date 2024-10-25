import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  const navigateToGamesClick = () => {
    navigate('/games')
  }
  return <div>
    <button onClick={navigateToGamesClick}>Games</button>
  </div>
}
