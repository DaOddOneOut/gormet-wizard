//import React from 'react'
//import Recipe from '../recipe/recipe'

import { useFetch } from '../../hooks/useFetch'

// home
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'


export default function Home() {
const { data, isPending, error} = useFetch('http://localhost:3000/recipes')

    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}
