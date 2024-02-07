'use client'

import {signIn, signOut} from "next-auth/react";

function SignInButton() {
    return (
        <div className='space-x-10'>
            <button
                className='rounded-xl border bg-yellow-300 px-12 py-4'
                onClick={() => signIn()}
            >
                LogIn
            </button>
            <button
                className='rounded-xl border bg-red-300 px-12 py-4'
                onClick={() => signOut()}
            >
                Log Out
            </button>
        </div>
    )
}

export default SignInButton