import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="" width={128} height={36} alt="Evently Logo"></Image>
        </Link>
        
        {/* code for navbar and responsiveness */}
        <SignedIn> 
            <nav className="md:flex-between hidden w-full max-w-sx">
                <NavItems></NavItems>
            </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
            <SignedIn>
                <UserButton afterSignOutUrl='/'></UserButton>
                <MobileNav></MobileNav>
            </SignedIn>
          <SignedOut>
            <Button className="rounded-full" size="lg" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
