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
      authorize: async (credentials, req) => {
        const { username, password } = credentials;
      
        // Implement your authentication logic here
        if (username === "admin" && (password === "Root@123" || password === 'Root@100')) {
          return true;  // Credentials are valid
        }
      
        return null;  // Credentials are invalid
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
