import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Games = () => {
    const navigate = useNavigate()

    const navigateToMemoryGameClick = () => {
        navigate('/games/memory-game')
    }
    return (
        <div>
            <h1>Games!</h1>

            <button onClick={navigateToMemoryGameClick}>Memory Game</button>
        </div>
    )
}
