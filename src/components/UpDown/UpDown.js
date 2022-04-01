import React, { useState, useEffect } from "react";
import { DownContainer, UpContainer } from "./UpDownStyles";
import Image from "next/image";

const UpDown = () => {
  const UP = "/images/up2.png";
  const DOWN = "/images/down2.png";
  const [show, setShow] = useState(true);
  const ScrollToDown = () => window.scrollTo(0, document.body.scrollHeight);
  const ScrollToUp = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  useEffect(() => {
    window.onscroll = function () {
      this.scrollY >= 500 ? setShow(false) : setShow(true);
    };
  }, []);

  return (
    <>
      {!show && (
        <UpContainer onClick={() => ScrollToUp()}>
          <Image
            src={UP}
            alt="down"
            width={80}
            height={80}
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            priority
            blurDataURL
          />
        </UpContainer>
      )}
    </>
  );
};

export default UpDown;

/**
 * 
 * <DownContainer onClick={() => ScrollToDown()}>
          <Image
            src={DOWN}
            alt="down"
            width={80}
            height={80}
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            priority
            blurDataURL
          />
        </DownContainer> 
 * 

 */
