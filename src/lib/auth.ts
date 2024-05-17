import nextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) return null;

        const decodedPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!decodedPassword) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (!user) return token;

      return {
        ...token,
        id: user.id,
      };
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          id: token.id,
        },
      };
    },
  },
  pages: {
    signIn: "/login",
  },
};
