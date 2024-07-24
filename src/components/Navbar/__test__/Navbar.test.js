// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Navbar from '../Navbar';
// import { usePathname } from 'next/navigation';
// import { Disclosure } from '@headlessui/react';

// jest.mock('next/navigation', () => ({
//   usePathname: jest.fn(),
// }));

// jest.mock('@headlessui/react', () => {
//   const originalModule = jest.requireActual('@headlessui/react');
//   return {
//     ...originalModule,
//     Disclosure: ({ children }) => children({ open: false })
//   };
// });

// describe('Navbar', () => {
//   beforeEach(() => {
//     usePathname.mockReturnValue('/');
//   });

//   it('should render the Navbar component', () => {
//     expect(screen.getByText(/Coffee Creations/i)).toBeInTheDocument();
//     expect(screen.getByText(/Coffee's Journey/i)).toBeInTheDocument();
//     expect(screen.getByText(/Recipies/i)).toBeInTheDocument();
//   })

//   it('should open and close the menu on mobile screens when clicked', () => {
//     jest.spyOn(Disclosure, 'Disclosure').mockImplementation(({children}) => children({open: true}));
//     const {rerender} = render(<Navbar/>);
//     const buttton = screen.getByRole('button', {name: /Open main menu/i})
//     fireEvent.click(buttton);
//     rerender(<Navbar/>);
//     expect(screen.getByText(/Coffee's Journey/i)).toBeInTheDocument();
//     expect(screen.getByText(/Recipies/i)).toBeInTheDocument();
//   })

//   it('should indicate the active page', () => {
//     usePathname.mockReturnValue('/recipies');
//     render(<Navbar/>);
//     const activeLink = screen.getByText(/Recipies/i);
//     expect(activeLink).not.toHaveClass('text-inactive-text');
//   })

// })