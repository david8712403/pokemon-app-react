import React, {useState, useEffect} from 'react'
import Pagination from '../../Pagination'
import {Link} from 'react-router-dom'

export default function PokemonList() {

  const [pokemon, setPokemon] = useState([])
  const [curPageUrl, setCurPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 當curPageUrl改變，就會執行
    setLoading(true)

    fetch(curPageUrl, {method: 'GET'}).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
      setLoading(false)
      setNextPageUrl(data.next)
      setPrevPageUrl(data.previous)
      setPokemon(data.results.map(p => p))
    })

    // return () => cancel()
  }, [curPageUrl])
  
  function gotoNextPage() {
    setCurPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurPageUrl(prevPageUrl)
  }

  if(loading) return ("loading...")
  return (
    <>
      <h1>Pokemon List</h1>
      <div>
        {pokemon.map(p => (
          <div key={p.name}>
            <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
          </div>
        ))}
      </div>
      <Pagination 
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
      />
    </>
  );
}
