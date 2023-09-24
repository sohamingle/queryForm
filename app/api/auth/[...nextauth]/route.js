import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth(
    {

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
        ]
    }
)

export { handler as GET, handler as POST }
