// components/ScrollLink.jsx
import Link from "next/link";
import React from "react";

// Component definition
const ScrollLink = ({ children, href, ...props }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    // Remove everything before the hash
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  return (
    <Link href={href} {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};

export default ScrollLink;
