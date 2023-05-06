import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';


export default function Product() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {

            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const Loading = () => {
        return (
            <>Loading...</>
        )
    }

    const handleAdd = item => {
        dispatch(addCart(item))
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <img src={product.image} width={400} height={450} alt="" />
                        </div>
                        <div className="col-lg-6 mt-5">
                            <h2 className='text-uppercase text-black-50 py-2'>{product.category}</h2>
                            <h4 className='py-2'>{product.title}</h4>
                            <h6>Rating: {product.rating && product.rating.rate} <AiFillStar className='text-warning fs-6' /></h6>
                            <p className='lead'>{product.description}</p>
                            <h2>$ {product.price}</h2>
                            <div className="buttons py-4">
                                <button className='btn btn-outline-dark me-3' onClick={() => handleAdd(product)}>Add to Cart</button>
                                <Link className='btn btn-dark' to='/cart'>Go to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div>
            <div className="container product-content">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
