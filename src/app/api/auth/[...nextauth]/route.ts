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
                const user = { id: '1', name: 'test', email: 'test@test.com'}
                if(user) return user
                else return null
            }
        })
    ]
})

export { handler as GET, handler as POST }