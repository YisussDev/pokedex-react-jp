import React from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { SETTRAINER } from '../../store/slices/trainer.slice'
import { useNavigate, Navigate } from 'react-router'
import Swal from 'sweetalert2'


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('trainer')

  const setNameTrainer = (e) => {
    e.preventDefault()
    const name = e.target.name.value.trim()
    if(name.length > 0){
      dispatch(SETTRAINER(name))
      localStorage.setItem('trainer', name)
      navigate('/pokemon')
      Swal.fire({
        icon: 'success',
        title: 'Registro',
        text: 'Registrado con éxito!'
      })
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Ingresa tu nombre'
      })
    }
    
  }

  return (
    <>
      {token&&(<Navigate to='/pokemon/' />)}
      <form className='setup_name' onSubmit={setNameTrainer}>
        <img src="./images/Login/logopokedex.png" alt="" />
        <h1>¡Hola Entrenador!</h1>
        <p>¡Para poder comenzar, dame tu nombre!</p>
        <div>
        <input type="text" placeholder='Tu nombre...' name='name'/>
        <button type='submit'>COMENZAR</button>
        </div>

      </form>


      <div className='footer_login'>
        <div className='ball_ext'>
          <div className='ball_int'>
          </div>
        </div>
      </div>
    </>
  )
  }
export default Login