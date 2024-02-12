'use client'

import {signIn, signOut, useSession} from "next-auth/react";

function SignInButton() {
    const { data: session } = useSession();
    const handleSubmit = () => {
        alert(`This feature is not ready yet.`);
    }
    if(session && session.user) {
        return (
            <button
                className="logout"
                onClick={() => signOut()}
            >
                {session.user.name}님 Log Out
            </button>
        )
    }
    return (
        <button
            className="login"
            onClick={
            handleSubmit
            // () => signIn()
        }
        >
            LogIn
        </button>
    )
}

export default SignInButton
