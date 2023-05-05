import React from 'react'

export default function Register() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="signupForm text-center">
                            <h1 className='py-4 text-white'>Sign Up</h1>
                            <form action="" className='d-flex flex-column gap-20'>
                                <div>
                                    <input className='signup-input' type="text" placeholder='Name' />
                                </div>
                                <div>
                                    <input className='signup-input' type="text" placeholder='Email' />
                                </div>
                                <div>
                                    <input className='signup-input' type="text" placeholder='Mobile Number' />
                                </div>
                                <div>
                                    <input className='signup-input' type="password" placeholder='Password' />
                                </div>
                                <div>

                                    <button className='signup-button fw-bold mt-4'>Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
