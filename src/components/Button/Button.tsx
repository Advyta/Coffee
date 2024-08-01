import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

interface ButtonProps {
  content: string;
}

const Button: React.FC<ButtonProps> = ({content}) => {

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const hoverEnter = () => {
      gsap.to(button, {
        duration: 0.4,
        backgroundColor: 'oklch(13.35% 0.041 45.95)',
        color: 'oklch(95% 0.02 90)',
        scale: 1.1,
        ease: 'power1.in',
        fontWeight: 500
      });
    }

    const hoverLeave = () => {
      gsap.to(button, {
        duration: 0.4,
        backgroundColor: 'oklch(80% 0.05 80)',
        color: 'oklch(10% 0.05 270)', 
        scale: 1.1,
        ease: 'power1.in'
      });
    };    

    button.addEventListener('mouseenter', hoverEnter)
    button.addEventListener('mouseleave', hoverLeave);

    return () => {
      if (button) {
        button.removeEventListener('mouseenter', hoverEnter);
        button.removeEventListener('mouseleave', hoverLeave);
      }
    };
  }, [])

  return (
    <button ref={buttonRef} className='text-dark-text bg-button-color body-m px-3 py-1 mt-2 rounded-full min-w-4 hover:text-active-text font-semibold'>
      {content}
    </button>
  )
}
export default Button;