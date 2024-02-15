'use client'
import React, { useRef } from 'react'
import { signIn } from 'next-auth/react'
import {redirect} from "next/navigation";
import {setToken} from "@/utils/localStorage/token";

function Login() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = async () => {
        console.log(emailRef.current)
      const result = await signIn("credentials", {
          email: emailRef.current,
          password: passwordRef.current,
          redirect: true,
          callbackUrl: '/',
      })
    }
    return (
        <main className='container'>
            <div className={'loginContainer'}>
                <h1>Login</h1>
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
                <div className='loginButton'>
                    <button
                        onClick={handleSubmit}
                    >
                        Log In
                    </button>
                </div>
                </div>
            </div>
        </main>
    )
}

export default Login
