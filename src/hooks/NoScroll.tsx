import {useEffect} from 'react';

const NoScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // 클링 함수
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
};

export default NoScroll;
