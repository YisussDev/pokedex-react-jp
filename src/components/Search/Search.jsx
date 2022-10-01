import React from 'react'
import './Search.css'
import { useNavigate } from 'react-router'

const Search = () => {
  let navigate = useNavigate();
  const changeFilter = e => {
    const id = parseInt(e.target.value)
    if(id===0){
    navigate('/pokemon');
    }else {
      navigate('/pokemon/' + id);
    }
  }
  const sendSearch = e => {
    e.preventDefault();
    const name = e.target.name.value.trim()
    navigate('/pokemon/search/' + name);
  }
  return (
    <div className='search_pokemon'>
        <form className='form_search' onSubmit={sendSearch}>
            <input type="text" placeholder='Busca un Pokemon...' name='name'/>
            <button type='submit'>Buscar</button>
        </form>
        <select name="typePokemons" id="" onChange={changeFilter}>
            <option value="0">Todos los Pokemones</option>
            <option value="1">Normal</option>
            <option value="2">Luchador</option>
            <option value="3">Volador</option>
            <option value="4">Venenoso</option>
            <option value="5">Terrestre</option>
            <option value="6">Roca</option>
            <option value="7">Insecto</option>
            <option value="8">Fantasma</option>
            <option value="9">Acero</option>
            <option value="10">Fuego</option>
            <option value="11">Agua</option>
            <option value="12">Planta</option>
            <option value="13">Eléctrico</option>
            <option value="14">Psiquíco</option>
            <option value="15">Frío</option>
            <option value="16">Dragón</option>
            <option value="17">Oscuro</option>
            <option value="18">Mágico</option>
        </select>
    </div>
  )
}

export default Search