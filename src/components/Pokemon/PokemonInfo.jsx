import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router'
import Nav from '../Nav/Nav.jsx'
import './PokemonInfo.css'


const PokemonInfo = () => {
  const {id} = useParams()
  const token = localStorage.getItem('trainer')
  const backgrounds = {
    electric: 'linear-gradient(rgb(229, 255, 0), rgb(176, 196, 0))',
    normal: 'linear-gradient(#825861, #D49BA6)',
    fire: 'linear-gradient(#E95E39, #E68E1F)',
    water: 'linear-gradient(#145EBC, #59a1ff)',
    grass: 'linear-gradient(#84C9C5,#C6E09F)',
    poison: 'linear-gradient(#4c005f, #940099)',
    bug: 'linear-gradient(#3EB43C, #83D482)',
    rock: 'linear-gradient(#442900, #755000)',
    ground: 'linear-gradient(#ffcb7e, #45461e)',
    steel: 'linear-gradient(#b1b1b1, #696969)',
    dragon: 'linear-gradient(#630a0a, #db6a00)',
    dark: 'linear-gradient(#272727, #250020)',
    fairy: 'linear-gradient(#00638afb, #ff89ef)',
    psychic: 'linear-gradient(#6bfda3fa, #942685)',
    ice: 'linear-gradient(rgba(143, 223, 255, 0.984), rgb(98, 122, 255))',
    ghost: 'linear-gradient(#9717fffa, #120c68)',
}
const fontColor = {
    electric: 'rgb(229, 255, 0)',
    normal: '#825861',
    fire: '#E95E39',
    water: '#145EBC',
    poison: '#940099' ,
    grass: '#84C9C5',
    bug: '#3EB43C',
    rock: '#442900',
    ground: '#ffcb7e',
    steel: '#696969',
    dragon: '#630a0a',
    dark: '#250020',
    fairy: '#ff89ef',
    psychic: '#6bfda3fa',
    ghost: '#9717fffa',
    ice: 'rgba(143, 223, 255, 0.984)',


}

  const [dataPokemon, setDataPokemon] = useState({})
    useEffect(() => {
      window.scroll(0,0)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setDataPokemon(res.data))
    },[id])


  return (
    <>
    {!token&&(<Navigate to='/' />)}
      <div className='pokemon_info'>
        <Nav />
        <div className='pokemon_card' name='pokemon'>
          <div className='image_container' style={{background:backgrounds[dataPokemon.types?.[0].type.name]}}>
            <img src={dataPokemon.sprites?.other['official-artwork'].front_default} alt="" />
          </div>
          <h3>#{dataPokemon.id}</h3>
          <div className='name_card' style={{color:fontColor[dataPokemon.types?.[0].type.name]}}><hr /><h2>{dataPokemon.name}</h2><hr /></div>
          <div className='pokemon_pyh'>
              <div>Peso <br /> <h3>{dataPokemon.weight}</h3></div>
              <div>Altura <br /> <h3>{dataPokemon.height}</h3></div>
          </div>
          <div className='pokemon_pyh'>
              <div>Tipo
              <div>
                  {dataPokemon.types?.map((res, ind) => {
                  return  <h4 key={ind} className='abilities' style={{background:backgrounds[res.type.name]}}>{res.type.name}</h4>
                  })}
              </div>
              </div>
              <div>Habilidades
                <div>
                  {dataPokemon.abilities?.map((res) =>{
                    return <h4 key={res.ability.name} className='abilities'>{res.ability.name}</h4>
                  })}
                </div>
              </div>
          </div>
          <div className='pokemon_stats'>
            <div><h2>Stats</h2><hr /></div>
            {dataPokemon.stats?.map(res => {
                return <div key={res.stat?.name}className='stat'>
                  <div><p>{res.stat?.name}:</p><p>{res.base_stat}/150</p></div>
                  <div className='bar' ><div style={{width: ((res.base_stat*100)/150 +'%')}}></div></div>
              </div>
            })}
            
          </div>
        </div>
        <div className='pokemon_moves'>
          <div className='title'><h2>Movements</h2><hr /></div>
          <div className='movements_pokemon'>
            {dataPokemon.moves?.map((res, ind )=> {
              if(ind < 20){
                return <div key={res.move?.name}>{res.move?.name}</div>
              }
              return null
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonInfo