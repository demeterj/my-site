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
      <div 
        className="fixed top-[var(--page-offset)] left-[var(--page-offset)] w-[calc(100vw-2*var(--page-offset))] z-10 flex justify-between items-center"
        style={{'--page-offset': '45px'} as React.CSSProperties}
      >
        <div className="flex items-center">
          <Logo />
          <div className="ml-[20px] my-auto py-[5px] overflow-hidden pl-[20px] border-l-[1px] border-solid border-black">
            <button
              className={ menuOpen ? 'animate-bounceInFromAbove' : 'animate-bounceInFromBelow' }
              onClick={handleMenuClick}
            >
              { menuOpen ? 'CLOSE' : 'MENU' }
            </button>
          </div>
        </div>
        <a
          href="mailto:demeterj@umich.edu"
        >
          CONTACT ME
        </a>
      </div>
      {menuOpen && <Menu closeMenu={handleMenuClick} />}
    </>
  )
}