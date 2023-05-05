import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi';
import { AiOutlineFacebook, AiOutlineYoutube, AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className='footer-container'>
            <footer className="footer-top py-3 mt-5">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-6">

                            <h5> <GiCommercialAirplane /> Sign up for Newsletter</h5>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-4">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Find everything..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2">Submit</span>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <footer className="footer-middle py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h5>Contact Us</h5>
                            <p className='d-flex flex-column lead fs-6' ><span>Email: 360boutique@gmail.com</span>
                                <span>Tel: +123456789</span>
                                <span>Add: 1 Hoan Kiem, Dong Da, HN</span>

                            </p>
                            <div className='social-icon'>
                                <Link to='https://www.facebook.com/profile.php?id=100011418014686'><AiOutlineFacebook className='text-white fs-4 me-2' /></Link>
                                <Link to='https://www.youtube.com/'><AiOutlineYoutube className='text-white fs-4 me-2' /></Link>
                                <Link to='https://twitter.com/?lang=vi'><AiFillTwitterCircle className='text-white fs-4 me-2' /></Link>
                                <Link to='https://www.instagram.com/'><AiOutlineInstagram className='text-white fs-4 me-2' /></Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5>
                                Information
                            </h5>
                            <p className='lead fs-6'>Privacy Policy</p>
                            <p className='lead fs-6'>Refund Policy</p>
                            <p className='lead fs-6'>Shipping Policy</p>
                        </div>
                        <div className="col-3">
                            <h5>
                                Account
                            </h5>
                            <p className='lead fs-6'>Search</p>
                            <p className='lead fs-6'>About Us</p>
                            <p className='lead fs-6'>Faq</p>
                            <p className='lead fs-6'>Contact</p>
                        </div>
                        <div className="col-2">
                            <h5>
                                Quick Links
                            </h5>
                            <p className='lead fs-6'>Clothings</p>
                            <p className='lead fs-6'>Accessories</p>

                        </div>

                    </div>
                </div>
            </footer>
            <footer className="footer-bottom py-1 text-center">
                &copy; All rights reserved
            </footer>
        </div>
    )
}
