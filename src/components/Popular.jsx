import React, { useEffect, useState } from 'react'

function Popular() {
    const [popular, setPopular] = useState([]);
    
    useEffect(() =>{
        getPopular();
    },[]);
const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data);
}
  return (
    <div>
        {popular.map(recipe => {
            return(
                <ul>
                    <li key={recipe.id}>
                        {recipe.title}
                    </li>
                </ul>
            )
        })}
    </div>
  )
}

export default Popular