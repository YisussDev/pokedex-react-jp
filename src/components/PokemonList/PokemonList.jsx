import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import './PokemonList.css'
import { Route, Routes, Navigate } from 'react-router'
import ListDefault from './ListDefault'
import FilterList from './FilterList'
import SearchList from './SearchList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { SETTRAINER } from '../../store/slices/trainer.slice'
import Configure from '../Configure/Configure'


const PokemonList = () => {
  const dispatch = useDispatch();
  const {trainer} = useSelector(state => state)
  const token = localStorage.getItem('trainer')

  useEffect(()=>{
    if(token){
      dispatch(SETTRAINER(token))
    }
  },[token, dispatch])


  return (
    <>
    {!token && <Navigate to='/' />}
      <div className='pokemonList'>
          <Nav />
          <h4><strong>Bienvenido {trainer},</strong> aquí podrás encontrar tu Pokémon favorito.</h4>
          <Search />
          <Routes>
            <Route path='/' element={<ListDefault />}/>
            <Route path='/:option' element={<FilterList />} />
            <Route path='/search/:id' element={<SearchList />} />
          </Routes>
          <Configure />
      </div>
    </>
  )
}

export default PokemonList