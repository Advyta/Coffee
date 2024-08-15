import gsap from "gsap";
import React, { useEffect, useRef } from "react";

interface ButtonProps {
  content: string;
  onClick?: () => void;
  activated?: boolean;
  index?: number;
  totalButtons?: number;
  setFocus?: (index: number) => void;
}

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  activated,
  index = 0,
  totalButtons = 1,
  setFocus = () => {},
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        onClick && onClick();
        break;
      case "ArrowRight":
        if (totalButtons > 1) {
          event.preventDefault();
          const nextIndex = (index + 1) % totalButtons;
          setFocus(nextIndex);
        }
        break;
      case "ArrowLeft":
        if (totalButtons > 1) {
          event.preventDefault();
          const prevIndex = (index - 1 + totalButtons) % totalButtons;
          setFocus(prevIndex);
        }
        break;
      default:
        break;
    }
  };

  const hoverEnter = () => {
    const button = buttonRef.current;
    if (!button) return;

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
    const button = buttonRef.current;
    if (!button) return;

    gsap.to(button, {
      duration: 0.3,
      backgroundColor: activated
        ? "oklch(32% 0.041 45.95)"
        : "oklch(80% 0.05 80)",
      color: activated ? "oklch(95% 0.02 90)" : "oklch(10% 0.05 270)",
      scale: 1,
      ease: "power1.in",
      fontWeight: activated ? 500 : undefined,
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
      onKeyDown={handleKeyDown}
      className={`bg-button-color body-m px-3 py-1 mt-2 rounded-full min-w-4 hover:text-active-text capitalize ${
        activated ? "text-active-text border-button-color bg-card-bg" : "text-dark-text"
      }`}
    >
      {content}
    </button>
  );
};
export default Button;
