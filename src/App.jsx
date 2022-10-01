import './App.css';
import { useEffect } from 'react';
import {  Routes, Route, HashRouter } from 'react-router-dom'
import Login from './components/Login/Login';
import PokemonList from './components/PokemonList/PokemonList';
import { useSelector, useDispatch } from 'react-redux'
import PokemonInfo from './components/Pokemon/PokemonInfo';
import { CHANGEPAGE } from './store/slices/pages.slice';
import { SETTRAINER } from './store/slices/trainer.slice';


function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  useEffect(()=>{
    const pages = localStorage.getItem('pages');
    const trainer = localStorage.getItem('trainer');
    if(pages){
      dispatch(SETTRAINER(trainer))
    }
    if(trainer){
      dispatch(CHANGEPAGE(pages))
    }
  },[dispatch])

  document.body.style=`
  ${
    theme && `
    --color-first: #1f1f1f;
    --color-red: #db1212;
    background-color: var(--color-first);
    --color-font: #FFFFFF;
    `
  }
  `
  

  return (
    <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/pokemon/*' element={<PokemonList />} />
          <Route path='/pokemonInfo/:id' element={<PokemonInfo />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
