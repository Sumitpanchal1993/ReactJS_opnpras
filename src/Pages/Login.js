import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className='base2'>
                <div>

                </div>
                <div className='logincard'>
                    <div className='container'>
                        <label htmlFor="">Username :</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" />
                        <div>
                            <button type='Submit'> Login</button>
                            forgot Password <span><Link to="/register">Click Here </Link> </span> to Reset Password
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
