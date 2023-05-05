import React from 'react'
import { Link } from 'react-router-dom'

export default function Path({ title }) {
    return (
        <div className='text-center py-3'>
            <Link className='text-dark' to='/'>Home / </Link>
            {title}
        </div>
    )
}
