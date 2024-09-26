import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between mt-4 fixed top-0 left-0 right-0  section-container">
      <h1 className="text-3xl text-white">MARINA</h1>
      <nav className="hidden md:flex space-x-6 text-2xl text-white">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Book Now</a>
      </nav>
    </header>
  );
};

export default Navbar;
