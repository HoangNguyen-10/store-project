import React from 'react'
import Path from '../components/Path'

export default function About() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-page">
                            <div className="about-page-top text-center ">
                                <Path title='About' />
                                <img style={{ width: '1000px', height: '500px' }} src="https://media.istockphoto.com/id/1272744431/photo/theyre-ready-to-push-towards-success-with-tenacity-and-confidence.jpg?s=612x612&w=0&k=20&c=H-e_iD5k3NK9PrzVFZWPM8TXCLmW4nv88B9PxqmZlys=" alt="" />
                                <p className='lead py-4'>Established in 2014, the men's fashion brand 360 defines the mission of helping boys become more beautiful and confident in themselves. Nowadays young men are standing the great opportunities of modern society, development of information technology, revolution of social networking sites to assert themselves. Besides, 360 understands that young people are also facing pressures and challenges that urge themselves to show themselves compared to others.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-6">
                        <img style={{ width: '100%', borderRadius: '1rem' }} src="https://imageio.forbes.com/specials-images/dam/imageserve/982403996/960x0.jpg?format=jpg&width=960" alt="" />
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <h1>Our culture</h1>
                        <p className='lead'>"As entrepreneurs, we understand the importance of company teamwork. We also recognize the challenges that come with blending individual talents and personalities."</p>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <h1>Team building</h1>
                        <p className='lead'>"As well as corporate team building activities, we can plan entire conferences and events for your organisation, so you can leave everything in our hands."</p>
                    </div>
                    <div className="col-6">
                        <img style={{ width: '100%', borderRadius: '1rem' }} src="https://srn.vn/wp-content/uploads/in-ao-team-building.jpg" alt="" />
                    </div>

                </div>
                <div className="row py-3">
                    <div className="col-6">
                        <img style={{ width: '100%', borderRadius: '1rem' }} src="https://www.studytienganh.vn/upload/2021/06/104538.jpg" alt="" />
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <h1>Activities</h1>
                        <p className='lead'>"You care about others and want to make a difference in their lives — that’s so needed! "</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
