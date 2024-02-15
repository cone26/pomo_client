import NextAuth from "next-auth/next";
import CredentialProvider from 'next-auth/providers/credentials'
import {CONFIG} from "../../../../../config";
import {setToken} from "@/utils/localStorage/token";
import {useSession} from "next-auth/react";

const handler = NextAuth({
    providers: [
        CredentialProvider({
            name: 'Credentials',
            // login form
            credentials: {
                email: { label: 'email', type: 'text', placeholder:'email'},
                password: { label: 'Password', type: 'password'},
            },
            async authorize(credentials, req) {
                try{
                    const res = await fetch(`${CONFIG.SERVER}/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    });
                    const user = await res.json()
                    if(user) return user
                } catch (e) {
                    console.log(e)
                }


                return null
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },

        async session({session, token}) {
            session.user = token as any;
            return session;
        }
    },
    pages: {
        signIn: "/login",
    }
})

export { handler as GET, handler as POST }
