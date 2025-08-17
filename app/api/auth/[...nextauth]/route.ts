import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'

const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER_URL || "smtp://localhost:1025",
      from: process.env.EMAIL_FROM || "noreply@protrue.co",
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify-request',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user }) {
      return token
    },
  },
  debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }