import { authOptions } from "@/src/common/lib/authOptions";
import { AuthOptions, SessionStrategy } from "next-auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(
  authOptions as AuthOptions & {
    session: { strategy: SessionStrategy | undefined };
  }
);

export { handler as GET, handler as POST };
