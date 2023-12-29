import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="" width={128} height={36} alt="Evently Logo"></Image>
        </Link>

        <div className="flex w-32 justify-end gap-3">
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
