import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongo } from "database/connect";
import User from "model/userSchema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: " Credentials",
      async authorize(credentials: any, req: any) {
        connectMongo().catch((error) => {
          error: "Connection failed";
        });

        // Check user existance
        const result = await User.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user found with email...");
        }

        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or password does not match!");
        }
        return result;
      },
    } as any),
  ],
  secret: "nAGuBhAJoCucImHewFCKS1BA5I+SjH7xTJ+7R7kSWqPRzhw8vM8sNO4vJ94n2Y+3sMwQvYTBhfRwquJGpszmaw=="
});
