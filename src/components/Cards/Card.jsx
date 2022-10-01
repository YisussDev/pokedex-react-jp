import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useLoad from '../../functions/useLoad'
import { Link } from 'react-router-dom'
import './Cards.css'
import Spinner from '../Spinner/Spinner.jsx'

const Card = ({url}) => {
    const [dataPokemon, setDataPokemon] = useState({})
    const { loading } = useLoad()
    
    useEffect(() => {
        axios.get(url)
        .then(res => setDataPokemon(res.data))

    },[url])

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


  return (
    <>{!loading?
    (<Link  to={'/pokemonInfo/'+ dataPokemon.id} >
    <div  className='card' style={{background:backgrounds[dataPokemon.types?.[0].type.name]}}>
        <div className='container_img_hover' style={{background:backgrounds[dataPokemon.types?.[0].type.name]}}>
                <img src={dataPokemon.sprites?.other['official-artwork'].front_default} alt="" />
        </div>
        <div className='card_info'>
            <div className='container_img'>
                <img src={dataPokemon.sprites?.other['official-artwork'].front_default} alt="" />
            </div>
            <div className='container_info'>
                <h3 style={{color:fontColor[dataPokemon.types?.[0].type.name]}}>{dataPokemon.name}</h3>
                <h5>{dataPokemon.types?.[0].type.name}</h5>
                <h6>Tipo</h6>
            </div>
            <div className='constainer_stats'>
                <div className='stats'>Hp <br /><h3 style={{color:fontColor[dataPokemon.types?.[0].type.name]}}>{dataPokemon.stats?.[0].base_stat}</h3></div>
                <div className='stats'>Ataque<br /><h3 style={{color:fontColor[dataPokemon.types?.[0].type.name]}}>{dataPokemon.stats?.[1].base_stat}</h3></div>
                <div className='stats'>Defensa<br /><h3 style={{color:fontColor[dataPokemon.types?.[0].type.name]}}>{dataPokemon.stats?.[2].base_stat}</h3></div>
                <div className='stats'>Velocidad<br /><h3 style={{color:fontColor[dataPokemon.types?.[0].type.name]}}>{dataPokemon.stats?.[5].base_stat}</h3></div>
            </div>
        </div>
    </div>
    </Link>): (<Spinner />)}
    </>
  )
}

export default Card