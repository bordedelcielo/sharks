import { useEffect, useState } from 'react'

export default function Home() {
    const [pokemonId, setPokemonId] = useState(1)
    const [pokemon, setPokemon] = useState({})
    const [increment, setIncrement] = useState(0)
    const [loadState, setLoadState] = useState('LOADING')

    useEffect(() => {
        console.log('useEffect triggered by modified increment.')
        setTimeout(() => {
            setIncrement(increment + 1)
        }, 3000)
    }, [increment])

    useEffect(() => {
        // https://pokeapi.co/api/v2/pokemon/${id or name}/
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPokemon(data)
                setLoadState('LOADED')
            })
    }, [pokemonId])


    return (
        <>
            <h1>Home</h1>
            <p>Current increment: {increment}</p>
            <p>Current Pokemon ID: {pokemonId}</p>
            <div className="pokemon">
                {
                    (loadState === 'LOADING') ?
                    (
                        <>
                            <img src={ pokemon.sprites.front_default } alt="" />
                            <h2>{ pokemon.name }</h2>
                            <p>Height: { pokemon.height }</p>
                            <p>Weight: { pokemon.weight }</p>
                        </>
                    ) :
                    (
                        <p>Loading...</p>
                    )
                }

            </div>
            {
                (pokemonId > 1) ?
                <button onClick={ () => setPokemonId(pokemonId-1)}>Previous Pokemon</button>
                :
                <></>
            }
            {
                (pokemonId < 10) ?
                <button onClick = {() => setPokemonId(pokemonId+1)}>Next Pokemon</button>
                :
                <></>
            }
        </>
    )
}