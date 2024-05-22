"use client";
import React, { useState, useEffect } from "react";
import logo from "@/assets/images/nav-logo.png";
import Image from "next/image";
import { IoChevronDownOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isShrunk, setIsShrunk] = useState(false);

  const handleDropdownToggle = (id) => {
    setDropdownOpen((prev) => (prev === id ? null : id));
  };

  const handleBodyClick = (event) => {
    if (dropdownOpen) {
      const dropdown = document.getElementById(dropdownOpen);
      if (!dropdown.contains(event.target)) {
        setDropdownOpen(null);
      }
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      window.addEventListener("mouseup", handleBodyClick);
    } else {
      window.removeEventListener("mouseup", handleBodyClick);
    }
    return () => {
      window.removeEventListener("mouseup", handleBodyClick);
    };
  }, [dropdownOpen]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? "shrink" : ""}`}>
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggler"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Image src={logo} alt="logo" width={200} />
        </div>
        <div className={`navbar-menu ${navbarOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <Dropdown
              title="Categories"
              id="my-dropdown-id"
              isOpen={dropdownOpen === "my-dropdown-id"}
              onToggle={handleDropdownToggle}
              items={[
                { text: "Actions", link: "#" },
                { text: "Something else here", link: "#" },
                { separator: true },
                { text: "Separated link", link: "#" },
                { separator: true },
                { text: "One more separated link", link: "#" },
              ]}
            />
            <Dropdown
              title="Blog"
              id="blog"
              isOpen={dropdownOpen === "blog"}
              onToggle={handleDropdownToggle}
              items={[
                { text: "Some category", link: "#" },
                { text: "Some another category", link: "#" },
                { separator: true },
                { text: "Separated link", link: "#" },
                { separator: true },
                { text: "One more separated link", link: "#" },
              ]}
            />
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Signin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Dropdown = ({ title, id, isOpen, onToggle, items }) => (
  <li className="navbar-dropdown">
    <Link href="#" className="dropdown-toggler" onClick={() => onToggle(id)}>
      {title} <IoChevronDownOutline />
    </Link>
    <ul className={`dropdown ${isOpen ? "show" : ""}`} id={id}>
      {items.map((item, index) =>
        item.separator ? (
          <li key={index} className="separator"></li>
        ) : (
          <li key={index}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        )
      )}
    </ul>
  </li>
);

export default Navbar;
