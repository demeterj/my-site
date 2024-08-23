'use client'
import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  let [menuOpen, setMenuOpen] = useState(false);
  function handleMenuClick() {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className="fixed top-[65px] left-[65px] z-10">
        <Logo />
      </div>
      <div className="fixed top-[71px] left-[130px] z-10 overflow-hidden pl-[20px] py-1 border-l-[1px] border-solid border-black">
        <button
          className={ menuOpen ? 'animate-bounceInFromAbove' : 'animate-bounceInFromBelow'}
          onClick={handleMenuClick}
        >
          { menuOpen ? 'CLOSE' : 'MENU' }
        </button>
      </div>
      <a
        href="mailto:demeterj@umich.edu"
        className="fixed top-[75px] right-[65px] z-10"
      >
        CONTACT ME
      </a>
      {menuOpen && <Menu closeMenu={handleMenuClick} />}
    </>
  )
}