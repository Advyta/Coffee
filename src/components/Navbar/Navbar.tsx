"use client";
import React, { useEffect, useTransition } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import coffeeIcon from "../../assets/coffee-cup.png";
import toast from "react-hot-toast";

const navigation: {
  name: string;
  href: string;
}[] = [
  { name: "Recipes", href: "/recipes" },
  { name: "Coffee's Journey", href: "/journey" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    toast.dismiss("page-load");
  }, [pathname]);

  const handleNavigation = (href: string) => {
    toast.loading("Loading...", { id: "page-load" });

    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <Disclosure as="nav" className="absolute z-20 w-full mx-auto">
      {({ open }) => (
        <>
          <div
            className={`relative flex h-16 items-center px-5 md:px-16 justify-between backdrop-blur-sm ${
              open
                ? "backdrop-blur-2xl transition-all duration-300"
                : "backdrop-blur-sm"
            }`}
          >
            <div className="absolute inset-y-0 right-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-inactive-text hover:bg-gray-700 hover:text-active-text focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className={`block h-6 w-6 ${
                    open
                      ? "hidden transition duration-600 ease-in"
                      : "block transition duration-600 ease-in"
                  }`}
                />
                <XMarkIcon
                  aria-hidden="true"
                  className={`h-6 w-6 ${
                    open
                      ? "block transition duration-600 ease-in "
                      : "hidden transition duration-600 ease-in "
                  }`}
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 justify-between items-center">
              <Link
                href="/"
                className="body-l sm:heading-3 p-2 flex items-center"
              >
                <img
                  src={coffeeIcon.src}
                  alt="Coffee Creations"
                  className="w-[54px] h-[45px] pr-1 pb-1"
                />
                <p className="underline decoration-1 underline-offset-4 italic">
                  Coffee Creations
                </p>
              </Link>

              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className={`p-2 cursor-pointer ${
                        pathname === item.href ? "" : "text-inactive-text"
                      } body-l hover:text-active-text`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel
            className={`md:hidden transition-all duration-300 ${
              open ? "backdrop-blur-2xl" : ""
            }`}
          >
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col z-20">
              {navigation.map((item) => (
                <div key={item.name} className="flex justify-center">
                  <DisclosureButton
                    as="a"
                    onClick={() => handleNavigation(item.href)}
                    className={`${
                      pathname === item.href ? "underline" : ""
                    } heading-3 rounded-md px-3 py-2 hover:underline underline-offset-2 cursor-pointer`}
                  >
                    {item.name}
                  </DisclosureButton>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
