import NextAuth from "next-auth/next";
import { Provider } from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ],
});
