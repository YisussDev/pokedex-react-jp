import React from 'react'
import axios from 'axios'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from 'react'
import Card from '../Cards/Card'
import './PokemonList.css'
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const FilterList = () => {

    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(0)
    const { option } = useParams()

    const fetchPetition = option => {
        axios.get(`https://pokeapi.co/api/v2/type/${option}/`)
        .then( res => setPokemons(res.data.pokemon))
        .catch( error => console.log(error))
    }

    useEffect(()=> {
        fetchPetition(option)
        setPage(0)
    },[option])
    const changePage = e => {
        console.log(pokemons);
        const option = parseInt(e.target.getAttribute('optionpage'))
        if((option===2) && (page < (parseInt(pokemons.length/20))) ){
            setPage(page+1)
        }
        else if((option===1) && (page > 0)){
            setPage(page-1)
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'No hay más páginas',
                text: 'No se encontraron más páginas'
              })
        }
    }

  return (
    <>
        <section>
          {
            pokemons.map( (res, ind) => {
                if(ind >= page*20 && ind < page*20 + 20 ){
                    return (<Card
                    key={res.pokemon.name}
                    url={res.pokemon.url}
                    />)
                }
                else{
                    return null
                }
            })
          }
        </section>
        <button className='backButton' optionpage='1' onClick={changePage}><FaArrowLeft /></button>
        <button className='nextButton' optionpage='2' onClick={changePage}><FaArrowRight /></button>
    </>
  )
}

export default FilterList