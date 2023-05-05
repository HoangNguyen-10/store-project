import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function Header() {
    const state = useSelector(state => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
                <div className="container navbar-content">
                    <NavLink className="navbar-brand fw-bold store-brand" to="/"> 360 STORE</NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/products">Our Store</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                    <div className="buttons ">
                        <Link className='btn btn-outline-dark  me-2 ' to='/login'><AiOutlineLogin className='fs-5' /> Login</Link>
                        <Link className='btn btn-outline-dark me-2' to='/register'><BsFillPersonPlusFill className='fs-5' /> Register</Link>
                        <Link className='btn btn-outline-dark' to='/cart'><AiOutlineShoppingCart className='fs-5' /> Cart ({state.length})</Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}
