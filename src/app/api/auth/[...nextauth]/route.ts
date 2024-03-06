import NextAuth from "next-auth/next";
import CredentialProvider from 'next-auth/providers/credentials'
import {CONFIG} from "../../../../../config";
import {setToken} from "@/utils/localStorage/token";
import {useSession} from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        // GoogleProvider({
        //     clientId: CONFIG.GCP_ID || "",
        //     clientSecret: CONFIG.GCP_PW || "",
        // }),
        CredentialProvider({
            name: 'Credentials',
            // login form
            credentials: {
                email: { label: 'email', type: 'text', placeholder:'email'},
                password: { label: 'Password', type: 'password'},
            },
            async authorize(credentials, req) {
                try{
                    const res = await fetch(`${CONFIG.SERVER}/auth/google/login`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            // TODO: localstorage 사용 수정
                            // Authorization: `Bearer ${getToken().accessToken}`,
                            // Authorization: `Bearer ${accessToken}`,
                        },
                    });
                    // const user = await res.json()
                    // if(user) return user
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
