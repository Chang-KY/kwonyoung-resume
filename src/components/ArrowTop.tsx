'use client';

import {useEffect, useState} from "react";
import {FaArrowUp} from "react-icons/fa6";
import clsx from "clsx";

const ArrowTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <button className={clsx(`fixed bottom-4 right-2.5 bg-indigo-100/50 rounded-full
            p-2 hover:scale-110 transition duration-200 cursor-pointer`,
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none")}
            onClick={scrollToTop}>
      <FaArrowUp className="size-3"/>
    </button>
  );
};

export default ArrowTop;
