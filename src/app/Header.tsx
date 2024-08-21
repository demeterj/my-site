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
      <div className="fixed top-8 left-8 z-10">
        <Logo />
      </div>
      <button className="fixed top-[43px] left-[100px] z-10" onClick={handleMenuClick}>MENU</button>
      <a
        href="mailto:demeterj@umich.edu"
        className="fixed top-[43px] right-[40px] z-10"
      >
        CONTACT ME
      </a>
      {menuOpen && <Menu closeMenu={handleMenuClick} />}
    </>
  )
}