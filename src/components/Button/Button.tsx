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
  index = 0, // default value
  totalButtons = 1, // default value
  setFocus = () => {}, // default value
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          button.click();
          break;
        case "ArrowRight":
          if (totalButtons > 1) {
            event.preventDefault();
            const nextIndex = (index + 1) % totalButtons;
            console.log(`ArrowRight pressed, setting focus to button ${nextIndex}`);
            setFocus(nextIndex);
          }
          break;
        case "ArrowLeft":
          if (totalButtons > 1) {
            event.preventDefault();
            const prevIndex = (index - 1 + totalButtons) % totalButtons;
            console.log(`ArrowLeft pressed, setting focus to button ${prevIndex}`);
            setFocus(prevIndex);
          }
          break;
        default:
          break;
      }
    };

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

    button.addEventListener("mouseenter", hoverEnter);
    button.addEventListener("mouseleave", hoverLeave);
    button.addEventListener("keydown", handleKeyDown);

    hoverLeave();

    return () => {
      if (button) {
        button.removeEventListener("mouseenter", hoverEnter);
        button.removeEventListener("mouseleave", hoverLeave);
        button.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [activated, index, totalButtons, setFocus]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`text-dark-text bg-button-color body-m px-3 py-1 mt-2 rounded-full min-w-4 hover:text-active-text capitalize ${
        activated ? "text-active-text border-button-color bg-card-bg" : ""
      }`}
    >
      {content}
    </button>
  );
};
export default Button;
