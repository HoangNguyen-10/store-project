import React from 'react'
import Path from '../components/Path'

export default function Contact() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-image">
                            <Path title='Contact' />
                            <img style={{ width: '100%' }} src="https://360.com.vn/wp-content/uploads/2022/05/278672548_2261681403995390_6346177036556070290_n-1536x1024-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-map d-flex py-5">

                        <div className="col-6 text-center">
                            <iframe style={{ width: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3283301142988!2d105.79984217492873!3d21.019544780627456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab473c61a6dd%3A0xc28407fa2a30e3d7!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gVGjhu51pIFRyYW5nIDM2MA!5e0!3m2!1svi!2s!4v1683274719731!5m2!1svi!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-6 text-center">
                            <div className='contact-wrapper d-flex flex-column justify-content-center '>
                                <h4 className=''>List of branches</h4>
                                <div className='mt-3'>
                                    <h6>11 Dương Quảng Hàm, Quận Cầu Giấy, Hà Nội</h6>
                                    <p className='fw-bold text-black-50 fs-5'>096 1829 615</p>
                                </div>
                                <div className='mt-3'>
                                    <h6>29 Phố Nhổn, Quận Nam Từ Liêm, Hà Nội</h6>
                                    <p className='fw-bold text-black-50 fs-5'>0971 624 938</p>
                                </div>
                                <div className='mt-3'>
                                    <h6>69 Quang Trung, Quận Hà Đông, Hà Nội</h6>
                                    <p className='fw-bold text-black-50 fs-5'>0987 84 17 38</p>
                                </div>
                                <div className='mt-3'>
                                    <h6>346 Cầu Giấy, Quận Cầu Giấy, Hà Nội</h6>
                                    <p className='fw-bold text-black-50 fs-5'>0866 604 738</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
