'use client'
import React, { useRef } from 'react'
import { signIn } from 'next-auth/react'
import {redirect} from "next/navigation";
import {setToken} from "@/utils/localStorage/token";
import Link from "next/link";

function Signup() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = async () => {
        console.log('signup')
        // const result = await sign("credentials", {
        //     email: emailRef.current,
        //     password: passwordRef.current,
        //     redirect: true,
        //     callbackUrl: '/',
        // })
    }
    return (
        <main className='container'>
            <div className={'loginContainer'}>
                <h1>SIGN UP</h1>
                <div className={'loginForm'}>
                    <div className={'loginInput'}>
                        <input
                            ref={emailRef}
                            onChange={(e: any) => {
                                emailRef.current = e.target.value
                            }}
                            id='email'
                            name='email'
                            type='email'
                            required
                            placeholder={'Email'}
                            autoFocus={true}
                        />
                        <input
                            type='password'
                            id='password'
                            name='password'
                            ref={passwordRef}
                            placeholder={'Password'}
                            onChange={(e: any) => (passwordRef.current = e.target.value)}
                        />
                    </div>
                    <div className='signupButton'>
                        <button
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Signup
