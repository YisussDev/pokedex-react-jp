import React, { useState } from 'react'
import './Configure.css'
import { BsFillGearFill, BsMoon, BsSun, BsXCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGETHEME } from '../../store/slices/theme.slice'
import { CHANGEPAGE } from '../../store/slices/pages.slice'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { BsDoorClosed } from 'react-icons/bs';


const Configure = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { theme, trainer } = useSelector(state => state)
    const [panelConfig, setPanelConfig] = useState(false)

    const openPanel = {
        width: '300px',
        height: '400px',
        borderRadius: '10px',
    }
    const closePanel = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    }
    const changeTheme = () => {
        dispatch(CHANGETHEME())

    }
    const changePage = (e) => {
        dispatch(CHANGEPAGE(e.target.value))
        localStorage.setItem('pages', e.target.value)
    }
    const closeSesion = () => {
        localStorage.clear()
        navigate('/')
        Swal.fire({
            icon: 'error',
            title: 'Sesión cerrada',
            text: 'Se ha cerrado tu sesión!'
        })
    }

    return (
        <div className='configure_container' style={panelConfig ? (openPanel) : (closePanel)}>
            <div className='container'>
                <img src="./images/Login/profile.png" alt="" />
                <h2>Hola, <strong>{trainer}</strong></h2>
                <p>Elige cuantos Pokemon quieres ver por página.</p>
                <select name="" onChange={changePage}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <p>Cambiar tema:</p>
                <div className='control_theme' onClick={changeTheme}>{!theme ? (<BsMoon />) : (<BsSun />)}</div>
                <p>Cerrar sesión:</p>
                <div className='control_theme' onClick={closeSesion}><BsDoorClosed /></div>
            </div>
                <div className='control_configure' onClick={() => setPanelConfig(!panelConfig)} style={{ borderRadius: panelConfig ? ('10px') : ('50%') }}>{!panelConfig ? (<BsFillGearFill />) : (<BsXCircleFill />)}</div>
        </div>
    )
}

export default Configure