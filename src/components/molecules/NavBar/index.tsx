"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import iconActive from "@assets/LinkActive.svg";
import Image from "next/image";

export const NavBar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Characters",
      path: "/characters",
    },
  ];

  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="h-full">
      <ul className="flex justify-center items-center h-full">
        {routes.map((route, index) => (
          <li
            key={index}
            className={`${
              route.path === pathname
                ? " bg-gradient-link text-golden-2"
                : "bg-transparent text-golden-1"
            }   h-full flex justify-center items-center`}
          >
            <Link
              href={route.path}
              className=" text-sm h-full flex justify-center items-center   ease-in-out transition-all duration-300 cursor-pointer min-w-100  px-3 sm:px-4 sm:min-w-120 lg:px-6"
            >
              {route.name.toUpperCase()}
              {route.path === pathname ? (
                <Image
                  className="absolute top-0 object-contain w-10 h-5"
                  src={iconActive}
                  alt="iconActive"
                  width={40}
                  height={20}
                  style={{
                    objectFit: "contain",
                  }}
                />
              ) : (
                ""
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
