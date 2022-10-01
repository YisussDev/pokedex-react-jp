import React from 'react'
import './Nav.css'
import logo from './logopokedex.png'
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<div className='Nav' name='arriba'>
				<Link to='/pokemon'>
					<img src={logo} alt="" className='logo_nav'/>
				</Link>


					<div className='balltop_ext'>
						<div className='balltop_int'>
						</div>
					</div>	
			</div>
	)
}

export default Nav