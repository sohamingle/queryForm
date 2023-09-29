import prisma from "@/prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export const authOptions ={

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder:"password"}
      },
      async authorize(credentials, req) {
        if (credentials.username ==="admin" && credentials.password==="Root@123") {
          return true
        }
        return null
      }
    })
  ],
  adapter:PrismaAdapter(prisma),
  pages:{
    signIn:"/auth/signIn"
  },
  session:{
    stratergy:"jwt"
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
