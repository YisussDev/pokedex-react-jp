import React from 'react'
import axios from 'axios'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from 'react'
import Card from '../Cards/Card'
import { useSelector } from 'react-redux';
import './PokemonList.css'
import Swal from 'sweetalert2';

const ListDefault = () => {
    const [pokemons, setPokemons] = useState([])
    const {pages} = useSelector(state => state)

  const fetchPetition = url => {
    if(url === null){
      Swal.fire({
        icon: 'error',
        title: 'No hay más páginas',
        text: 'No se encontraron más páginas'
      })
    }
    axios.get(url)
    .then( res => setPokemons(res.data))
    .catch( error => console.log(error))
  }

  useEffect(()=> {
    fetchPetition(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${pages}`)
  },[pages])
  return (
    <>
        <section>
          {
            pokemons.results?.map( res => {
              return <Card
              key={res.name}
              url={res.url}
              />
            })
          }
        </section>
        <button className='backButton' onClick={()=>fetchPetition(pokemons.previous)} ><FaArrowLeft /></button>
        <button className='nextButton' onClick={()=>fetchPetition(pokemons.next)}><FaArrowRight /></button>
    </>
  )
}

export default ListDefault