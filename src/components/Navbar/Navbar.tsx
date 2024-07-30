'use client'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation: {
  name: string; href: string;
}[] = [
    { name: 'Coffee\'s Journey', href: '/' },
    { name: 'Recipes', href: '/recipes' },
  ];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Disclosure as='nav' className='absolute z-20 w-full mx-auto'>
      {({ open }) => (
        <>
          <div className={`relative flex h-16 items-center px-5 md:px-16 justify-between backdrop-blur-sm ${open ? 'backdrop-blur-2xl transition-all duration-300' : 'backdrop-blur-sm'}`}>
            <div className="absolute inset-y-0 right-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-inactive-text hover:bg-gray-700 hover:text-active-text focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className={`block h-6 w-6 ${open ? 'hidden transition duration-600 ease-in' : 'block transition duration-600 ease-in'}`} />
                <XMarkIcon aria-hidden="true" className={`h-6 w-6 ${open ? 'block transition duration-600 ease-in ' : 'hidden transition duration-600 ease-in '}`} />
              </DisclosureButton>
            </div>
            <div className='flex flex-1 items-stretch justify-between'>
              <Link href='/' className='body-l p-2'>Coffee Creations</Link>

              <div className="hidden md:ml-6 md:block">
                <div className='flex space-x-4'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}
                      className={`p-2 ${pathname === item.href ? '' : 'text-inactive-text'} body-l hover:text-active-text`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel className={`md:hidden transition-all duration-300 ${open ? 'backdrop-blur-2xl' : ''}`}>
            <div className='space-y-1 px-2 pb-3 pt-2 flex flex-col z-20'>
              {navigation.map((item) => (
                <div key={item.name} className='flex justify-center'>
                  <DisclosureButton
                    as='a'
                    href={item.href}
                    className={`${pathname === item.href ? 'underline' : ''} heading-3 rounded-md px-3 py-2 hover:underline underline-offset-2`}
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
  )
}

export default Navbar;