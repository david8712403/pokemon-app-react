import React, {useState, useEffect} from 'react'

export default function PokemonDetail({ match }) {

  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({
    sprites: {
      front_default: {}
    }
  })

  useEffect(() => {
    // 當curPageUrl改變，就會執行
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`, {method: 'GET'}).then((res) => {
      return res.json()
    }).then((data) => {
      setLoading(false)
      setPokemon(data)
    })

    // return () => cancel()
  }, [])

  if(loading) return ("loading...")
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt=''></img>
    </div>
  )
}
