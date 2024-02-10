import NextAuth from "next-auth/next";
import CredentialProvider from 'next-auth/providers/credentials'

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
                const res = await fetch(`${process.env.SERVER_API_URL}/auth/login`, {
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
                else return null
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
    }
})

export { handler as GET, handler as POST }
