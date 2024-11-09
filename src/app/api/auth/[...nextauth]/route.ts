import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  pages: {
    signIn: "/"
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if(!credentials) {
          return null
        }
        if(credentials.email === "henriquemitchel@gmail.com" &&
           credentials.password === "123") {
          return {
            id: "1",
            name: "Henrique",
            email: "henriquemitchel@gmail.com",
          }         
        }

        return null        
      }
    })
  ]
})

export const GET = handler;
export const POST = handler;