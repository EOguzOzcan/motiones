import React, { useEffect, useState } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: React.ReactNode;
};

const NavSection = (props: ISectionProps) => {
  const [scrollBg, setScrollBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      setScrollBg(window.scrollY > 368 ? "bg-gray-900/90" : "bg-transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 mx-auto w-full z-20 ${
        props.yPadding ? props.yPadding : ""
      } ${scrollBg}`}
    >
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
};

export { NavSection };
