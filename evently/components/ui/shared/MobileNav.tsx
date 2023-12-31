import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          Open
          <Image
            src="/"
            alt="menu"
            className="cursor-pointer"
            width={24}
            height={24}
          ></Image>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src="" alt="logo" width={128} height={38}></Image>
         <Separator className="border border-gray-50"/>
         <NavItems></NavItems>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
