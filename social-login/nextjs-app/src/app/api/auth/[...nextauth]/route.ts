import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from "next-auth/providers/github";

 const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID!,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    GithubProvider({
        clientId:process.env.CLIENT_ID!,
        clientSecret:process.env.CLIENT_SECRET!
    }),
  ]
});

export {handler as GET, handler as POST}