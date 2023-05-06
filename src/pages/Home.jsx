import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export default function Home() {
    return (
        <div className='homepage'>
            <div className="card bg-dark text-white border-0">
                <img src="https://360.com.vn/wp-content/uploads/2023/04/Banner-web-1350x490-1.png" className="card-img" alt="..." />
                <div className="card-img-overlay d-flex align-items-center">
                    <h1 className="card-title fw-bold">NEW SEASON ARIVAL</h1>
                </div>
            </div>
            <div className="homepage-container mt-4">
                <h1 className='text-center display-3  fst-italic py-5'>Products List</h1>
                <div className="container py-3">
                    <div className="row ">
                        <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                            <div className='homepage-item  align-items-center d-flex position-relative '>
                                <h5 className='homepage-item-des text-black-50 position-absolute'>T-shirt</h5>
                                <img className='homepage-item-image position-absolute' src="https://360.com.vn/wp-content/uploads/2023/04/Tach-nen-APHTK422-Copy-1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                            <div className='homepage-item  align-items-center d-flex position-relative '>
                                <h5 className='homepage-item-des text-black-50 position-absolute'>Polo-shirt</h5>
                                <img className='homepage-item-image position-absolute' src="https://360.com.vn/wp-content/uploads/2023/02/Aso-polo.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                            <div className='homepage-item  align-items-center d-flex position-relative '>
                                <h5 className='homepage-item-des text-black-50 position-absolute'>Long-shirt</h5>
                                <img className='homepage-item-image position-absolute' src="https://360.com.vn/wp-content/uploads/2023/01/anh6-2048x2048.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                            <div className='homepage-item  align-items-center d-flex position-relative '>
                                <h5 className='homepage-item-des text-black-50 position-absolute'>Blazer</h5>
                                <img className='homepage-item-image position-absolute' src="https://360.com.vn/wp-content/uploads/2023/01/anh4.webp" alt="" />
                            </div>
                        </div>


                    </div>
                </div>
                <div className="container py-3">
                    <div className="row ">
                        <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                            <div className='homepage-item  align-items-center d-flex position-relative '>
                                <h5 className='homepage-item-des text-black-50 position-absolute'>Jogger Pants</h5>
                                <img className='homepage-item-image position-absolute' src="https://360.com.vn/wp-content/uploads/2023/01/anh8.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                            <div className='homepage-item  align-items-center d-flex position-relative '>
                                <h5 className='homepage-item-des text-black-50 position-absolute'>Short</h5>
                                <img className='homepage-item-image position-absolute' src="https://360.com.vn/wp-content/uploads/2023/02/Quan-short.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                            <div className='homepage-item  align-items-center d-flex position-relative '>
                                <h5 className='homepage-item-des text-black-50 position-absolute'>Jeans</h5>
                                <img className='homepage-item-image position-absolute' src="https://360.com.vn/wp-content/uploads/2023/01/anh7.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 py-3">
                            <div className='homepage-item  align-items-center d-flex position-relative '>
                                <h5 className='homepage-item-des text-black-50 position-absolute'>Trousers</h5>
                                <img className='homepage-item-image position-absolute' src="https://360.com.vn/wp-content/uploads/2023/02/Quan-au.png" alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleIndicators" className="carousel slide mt-4" data-bs-ride="carousel">
                            <h3 className='lead text-center display-3  fst-italic py-5 '>HOT TRENDS</h3>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner ">

                                <div className="carousel-item active d-flex justify-content-center ">
                                    <img src="https://360.com.vn/wp-content/uploads/2023/02/APHTK401-QSNTK403-3.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/QSVTK410-4-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/STDTK408-QATTK401-7-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/QSGTK405-4-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/QSGTK412-2-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/APTTK423-QSNTK404-2-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/STDTK411-QATTK401-1-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/APHTK444-QSKTK408-2-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/QSNTK411-2-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/QGKTK401-2-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/QSVTK410-4-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/QSGTK405-4-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/SHNTK409-QSKTK408-12-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/QSGTK412-2-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                    <img src="https://360.com.vn/wp-content/uploads/2023/04/APHTK444-QSKTK408-2-Copy.jpg" className="me-3" style={{ width: '240px' }} alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev pt-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next pt-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-2">
                <h1 className='lead text-center display-3 mt-5 fst-italic'>Everything in your eyes</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12 py-3 ">
                        <img style={{ width: '100%', height: '360px', borderRadius: '1rem' }} src="https://www.papercitymag.com/wp-content/uploads/2017/02/175-4x6-Baanou-image-by-Pete-Molick-scaled.jpg" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 py-3">
                        <img style={{ width: '100%', height: '360px', borderRadius: '1rem' }} src="https://360.com.vn/wp-content/uploads/2022/10/DSC04216-copy-2048x1365.jpg" alt="" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://canifa.com/img/486/733/resize/8/t/8tp23a001-sb422-2-thumb.webp" style={{ width: '100%', height: '450px', borderRadius: '1rem' }} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://canifa.com/img/486/733/resize/8/t/8tp23a002-sw011-2-thumb.webp" style={{ width: '100%', height: '450px', borderRadius: '1rem' }} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://canifa.com/img/486/733/resize/8/t/8tp22a003-sb060-1-thumb-a.webp" style={{ width: '100%', height: '450px', borderRadius: '1rem' }} className="d-block w-100" alt="..." />

                                </div>
                                x
                            </div>

                        </div>
                        <figure>
                            <blockquote className="blockquote">
                                <p>The new colection.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="homepage-bottom-banner d-flex justify-content-center position-relative">
                            <Link className='text-center d-flex justify-content-center' >
                                <img className='homepage-bottom-image' src="https://360.com.vn/wp-content/uploads/2023/03/POMTK416-POMTK415-QATTK312-QATTK319-1-1024x683.jpg" alt="" />
                            </Link>
                            <h6 className='position-absolute homepage-bottom-banner-text'>See more <MdKeyboardDoubleArrowRight /> </h6>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}
