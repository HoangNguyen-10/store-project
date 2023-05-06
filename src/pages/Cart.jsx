import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, delCart } from '../redux/action'

export default function Cart() {
    const state = useSelector(state => state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = item => {
        dispatch(addCart(item))
    }

    const handleDel = item => {
        dispatch(delCart(item))
    }
    return (
        <div>
            <div className="container cart-content">
                {state.length > 0 ? (state.map(product => (
                    <div key={product.id} className='row py-5 align-items-center'>
                        <div className="col-md-4 text-center">
                            <img height={200} width={200} src={product.image} alt="" />
                        </div>
                        <div className="col-md-4 text-center py-3">
                            <h4 className='text-black-50'> {product.title}</h4>
                            <h4 className='fw-bold'>{product.qty} x $ {product.price} = $ {product.qty * product.price}</h4>
                            <button style={{ width: '40px' }} className='btn btn-secondary mt-3 me-3' onClick={() => handleAdd(product)}>+</button>
                            <button style={{ width: '40px' }} className='btn btn-secondary mt-3' onClick={() => handleDel(product)}>-</button>
                        </div>
                    </div>
                ))) : <h1 className='text-center'>Your Cart Is Empty</h1>}
            </div>
        </div>
    )
}
