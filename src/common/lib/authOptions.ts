import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { compare } from "bcrypt";
import { db } from "@/common/lib/db";
// import { UserRole } from "@prisma/client";
export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "gomeal@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("Authorize function recieved credentials:", credentials);
          // Check if user credentials are they are Not empty
          if (!credentials?.email || !credentials?.password) {
            throw { error: "No Inputs Found", status: 401 };
          }
          // console.log("Passed Check 1 ");
          //Check if user exists
          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          });
          if (!existingUser) {
            // console.log("No user found");
            throw { error: "No user found", status: 401 };
          }

          // console.log("Passed Check 2");

          //Check if Password is correct
          const passwordMatch = await compare(
            credentials.password,
            existingUser.password
          );
          if (!passwordMatch) {
            console.log("Password incorrect");
            throw { error: "Password Incorrect", status: 401 };
          }
          // console.log("Pass 3 Checked");
          const user = {
            id: existingUser.id,
            name: existingUser.fullname,
            email: existingUser.email,
            role: existingUser.role,
            image: existingUser.image,
            emailVerified: existingUser.emailVerified,
          };
          //
          // console.log("User Compiled");
          console.log(user);
          return user;
        } catch (error) {
          console.log("All Failed");
          console.log(error);
          throw { error: "Something went wrong", status: 401 };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
        token.emailVerified = user.emailVerified;
      }
      // console.dir(`token:${JSON.stringify(token, null, 2)}`);
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        // console.log(`token:${token} in session`);
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.emailVerified = token.emailVerified;
      }
      // console.log(`session:${session.user}`);
      return session;
    },
  },
};
