import { NavBar, Options } from "@components/index";
import Image from "next/image";
import marvelLogo from "@assets/images/marvel.png";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-afterHeader after:bg-gray-3 ">
      <div className="flex justify-between items-center h-header z-10 text-white xs:px-2 sm:px-6 md:px-8 lg:px-12 xl:px-0 max-w-header mx-auto">
        <section className="flex justify-between items-center h-full">
          <Link href="/">
            <Image
              className="hidden h-full xs:flex xs:w-36 xs:mx-2 sm:w-40 sm:mx-4 md:w-48 "
              priority
              src={marvelLogo}
              alt="logoMarvel"
              style={{ objectFit: "contain" }}
            />
          </Link>

          <NavBar />
        </section>
        <section className="flex justify-between items-center h-full">
          <Options />
        </section>
      </div>
    </header>
  );
};
