import React, { useState, useEffect } from "react";
import PokemonList from './PokemonList'
import Pagination from './Pagination'

function App() {
  const [pokemon, setPokemon] = useState(["test", "hi"])
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
      setPokemon(data.results.map(p => p.name))
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
      <PokemonList pokemon={pokemon}/>
      <Pagination 
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
      />
    </>
  );
}

export default App;
