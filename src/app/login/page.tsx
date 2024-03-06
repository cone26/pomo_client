'use client'
import React, { useRef } from 'react'
import { signIn } from 'next-auth/react'
import BackToHome from "@/Component/BackToHome";

function Login() {

    const handleSubmit = async () => {
      await signIn("credentials")
    }
    return (
        <main className='container'>
            <div className={'loginContainer'}>
                <h1>LOGIN</h1>
                <div className='loginButton'>
                    <button
                        onClick={handleSubmit}
                    >
                        Login by Google
                        <img className={'googleLogo'} src={'/google.png'}/>
                    </button>
                </div>
                <BackToHome/>
            </div>
        </main>
    )
}

export default Login
