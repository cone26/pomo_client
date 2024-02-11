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
                className="px-12 py-4 border rounded-xl bg-red-300 logout"
                onClick={() => signOut()}
            >
                {session.user.name}님 Log Out
            </button>
        )
    }
    return (
        <button
            className="px-12 py-4 border rounded-xl bg-yellow-300 login"
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
