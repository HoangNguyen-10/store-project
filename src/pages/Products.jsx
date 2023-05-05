import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Path from '../components/Path'
export default function Products() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                // console.log(data)
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>Loading...</>
        )
    }

    const filterProducts = cat => {
        const listProducts = data.filter(x => x.category === cat)
        setFilter(listProducts)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons text-center py-4">
                    <button className='btn btn-outline-dark ms-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark ms-2' onClick={() => filterProducts("men's clothing")}>Men' Clothing</button>
                    <button className='btn btn-outline-dark ms-2' onClick={() => filterProducts("women's clothing")}>Women' Clothing</button>
                    <button className='btn btn-outline-dark ms-2' onClick={() => filterProducts("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark ms-2' onClick={() => filterProducts("electronics")}>Electronics</button>
                </div>
                {filter.map(product => (
                    <div className="col-md-3 mb-3" key={product.id}>
                        <div className="card h-100 text-center " >
                            <img height={250} src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                                <p className="card-text fw-bold lead">$ {product.price}</p>
                                <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
    return (
        <div>
            <div className="container products-content">
                <div className="row">
                    <div className="col-12">
                        <Path title="Our store" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card bg-dark text-white border-0">
                            <img src="https://media.gucci.com/content/DiaryHeroArticle_Standard_950x680/1681401652/DiaryHeroArticle_Beyond-Heritage-01_001_Default.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center  flex-column">
                                <h5 className="card-title fs-1 fw-bold" >NEW SEASON ARRIVAL</h5>
                                <p className="card-text">CHECK OUR PRODUCTS</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <h3 className='text-center fs-5  mt-5'>Latest Products</h3>
                    <hr />
                </div>
                <div className="row">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
