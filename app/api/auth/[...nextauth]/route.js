import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth(
    {

        providers: [
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
