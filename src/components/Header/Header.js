import Image from "next/image";
import React, { useState } from "react";
import {
  ContainerHeader,
  DropDownContent,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  DropDown,
  Menu,
  Close,
  Div1,
} from "./HeaderStyles";
import { IoMdArrowDropdownCircle } from "react-icons/io";

import { navBarLinks, DropDownList } from "../../constants/constants";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Menu>
        {!showMenu && (
          <Div1
            onClick={() => setShowMenu(true)}
            style={{ transform: "translateY(1rem)" }}
          >
            <Image
              layout="responsive"
              width={100}
              height={100}
              src={"/images/menuW.png"}
              alt="menu"
            />
          </Div1>
        )}

        <Div1
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "20%" }}>
            <Image
              layout="responsive"
              width={20}
              height={20}
              src={"/images/pngegg.png"}
              alt="Close"
            />
          </div>
        </Div1>
      </Menu>
      <ContainerHeader
        id="#"
        onMouseLeave={() => setIsShown(false)}
        style={{
          left: showMenu ? 0 : "-50rem",
        }}
      >
        <Close onClick={() => setShowMenu(false)}>
          <Image
            layout="responsive"
            width={100}
            height={100}
            src={"/images/closeW.png"}
            alt="Close"
          />
        </Close>
        <Div2>
          {navBarLinks.map(({ name, arrow, id }, i) => (
            <a href={id} key={i + name} onClick={() => setShowMenu(false)}>
              <Label
                name={name}
                arrow={arrow}
                setIsShown={setIsShown}
                isShown={isShown}
              />
            </a>
          ))}
        </Div2>

        <Div3>
          <SocialIcons
            id="facebook"
            href="https://www.facebook.com/abdelwaheb.bouden.14"
            target="_blank"
            aria-label="facebook"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/facebook-logo-2019.png"}
              width="40"
              height="40"
              alt="facebook"
            />
          </SocialIcons>
          <SocialIcons
            id="Youtube"
            aria-label="Youtube"
            target="_blank"
            href="https://www.youtube.com/channel/UCBIcAr1BWp7z2Rbskvm9tvg"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/play.png"}
              width="45"
              height="45"
              alt="youtube"
            />
          </SocialIcons>
        </Div3>
      </ContainerHeader>
    </>
  );
};

const Label = ({ name, arrow, setIsShown, isShown }) => (
  <>
    {
      <NavLink>
        {name}
        {arrow ? (
          <>
            <IoMdArrowDropdownCircle
              onClick={() => setIsShown(!isShown)}
              size="2rem"
              name="dropDown"
              style={{ marginLeft: 10 }}
            />
            {isShown && (
              <DropDown
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setIsShown(!isShown)}
              >
                {DropDownList.map(({ item }, i) => (
                  <DropDownContent key={i + item}>
                    {item + item}
                  </DropDownContent>
                ))}
              </DropDown>
            )}
          </>
        ) : null}
      </NavLink>
    }
  </>
);
export default Header;
