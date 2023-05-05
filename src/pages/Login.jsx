import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Path from '../components/Path'

export default function Login() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required !').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'),
            password: Yup.string().required('Required !').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Minimum eight characters, at least one letter and one number')
        }),
        onSubmit: values => {

            navigate('/')
        }
    })

    // console.log(formik.errors)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center text-center py-5">
                        <div className="form-login">

                            <h1 className='py-3 text-white'>Login</h1>
                            <form action="" className='form-login-content flex-column d-flex' onSubmit={formik.handleSubmit}>
                                <div className='py-2'>

                                    <input className='input-form' type="email" name='email' value={formik.values.email} onChange={formik.handleChange} placeholder='Enter your email' />
                                    {formik.errors.email && <div className='msgError'>{formik.errors.email}</div>}
                                </div>

                                <div className='py-2'>

                                    <input className='input-form' type="password" name="password" id="" value={formik.values.password} onChange={formik.handleChange} placeholder='Enter your password' />
                                    {formik.errors.password && <div className='msgError'>{formik.errors.password}</div>}
                                </div>
                                <div>

                                    <button className='mt-5 fw-bold login-button' type='submit'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
