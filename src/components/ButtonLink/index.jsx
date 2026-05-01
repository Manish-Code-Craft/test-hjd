"use client";

import Link from "next/link";

export default function ButtonLink({
  href,
  variant = "primary",
  size = "default",
  children,
  className = "",
  onClick,
  icon,
  iconPosition = "left",
  ...props
}) {
  const isExternal = !!href && href.startsWith("http");
  const isIconOnly = !children;

  const handleClick = (event) => {
    if (variant === "whatsapp") {
      event.preventDefault();
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("open-whatsapp-chat"));
      }
      return;
    }
    if (onClick) onClick(event);
  };

  const sizeClasses = isIconOnly
    ? size === "sm"
      ? "w-11 h-11 p-0"
      : "w-[60px] h-[60px] p-0"
    : size === "sm"
    ? "px-5 min-h-[42px] text-xs"
    : "px-6 min-h-[52px] text-sm";

  const baseClasses = `rounded-full flex items-center justify-center chakra tracking-[0.32px] uppercase text-[16px] font-bold transition-all duration-300 ${sizeClasses}`;

  const variants = {
    primary: "bg-transparent border border-[#10C8F0] text-white hover:bg-[#10C8F0] hover:text-white",
    secondary: "bg-transparent border border-white text-white hover:border-[#10C8F0] hover:text-[#10C8F0]",
    whatsapp: "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:from-[#128C7E] hover:to-[#25D366]",
  };

  const renderContent = () => {
    if (isIconOnly && icon) {
      return icon;
    }
    if (icon) {
      return iconPosition === "left" ? (
        <>
          {icon}
          <span className="ml-2">{children}</span>
        </>
      ) : (
        <>
          <span className="mr-2">{children}</span>
          {icon}
        </>
      );
    }
    return <span>{children}</span>;
  };

  const content = renderContent();

  if (variant === "whatsapp") {
    return (
      <button
        type="button"
        className={`${baseClasses} ${variants[variant]} ${className}`}
        onClick={handleClick}
        {...props}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href || "#"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {content}
    </Link>
  );
}
