'use client'

import {signIn, signOut, useSession} from "next-auth/react";

function SignInButton() {
    const { data: session } = useSession();
    if(session && session.user) {
        return (
            <button
                className="logout"
                onClick={() => signOut()}
            >
                Log Out
            </button>
        )
    }
    return (
        <button
            className="login"
            onClick={
            () => signIn()
        }
        >
            LogIn
        </button>
    )
}

export default SignInButton
