"use client";
import Loading from "@/app/loading";
import { Button } from "@/common/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-5/6 mx-auto">
      <div className="flex justify-between py-4 gap-x-8 md:gap-x-0">
        <h1 className="text-3xl font-bold">
          GoMeal<span className="text-primary">.</span>
        </h1>
        <div className="flex gap-x-3 md:gap-x-6">
          <Button>
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
          <Button variant={"ghost"}>
            <Link href={"/sign-up"}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
