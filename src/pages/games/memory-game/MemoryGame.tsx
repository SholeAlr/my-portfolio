import { useState } from "react"
import { Card } from "./components/Card"


export const MemoryGame = () => {

    const [items, setItems] = useState([])
    return (
        <div>
            <h1 className="text-gray-300">Lets Test Your Memory!</h1>

            <div className=''>
                <Card />
            </div>
        </div>
    )
}
