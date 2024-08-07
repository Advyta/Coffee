import gsap from "gsap";
import React, { useEffect, useRef } from "react";

interface ButtonProps {
  content: string;
  onClick?: () => void;
  activated?: boolean;
}

const Button: React.FC<ButtonProps> = ({ content, onClick, activated }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const hoverEnter = () => {
      gsap.to(button, {
        duration: 0.3,
        backgroundColor: "oklch(13.35% 0.041 45.95)",
        color: "oklch(95% 0.02 90)",
        scale: 1.1,
        ease: "power1.in",
        fontWeight: 500,
      });
    };

    const hoverLeave = () => {
      if (activated) {
        gsap.to(button, {
          duration: 0.3,
          backgroundColor: "oklch(32% 0.041 45.95)",
          color: "oklch(95% 0.02 90)",
          scale: 1,
          ease: "power1.in",
          fontWeight: 500,
        });
      } else {
        gsap.to(button, {
          duration: 0.3,
          backgroundColor: "oklch(80% 0.05 80)",
          color: "oklch(10% 0.05 270)",
          scale: 1,
          ease: "power1.in",
        });
      }
    };

    button.addEventListener("mouseenter", hoverEnter);
    button.addEventListener("mouseleave", hoverLeave);

    return () => {
      if (button) {
        button.removeEventListener("mouseenter", hoverEnter);
        button.removeEventListener("mouseleave", hoverLeave);
      }
    };
  }, [activated]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`text-dark-text bg-button-color body-m px-3 py-1 mt-2 rounded-full min-w-4 hover:text-active-text capitalize ${
        activated ? "border-button-color bg-card-bg text-active-text" : ""
      }`}
    >
      {content}
    </button>
  );
};
export default Button;
