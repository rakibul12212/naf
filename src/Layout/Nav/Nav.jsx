import React from "react";
import "./Nav.css";
import Logo from "../../assets/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Projects", "Events", "Blogs", "Contact"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} id="font">
      <NavbarContent justify="start">
        <NavbarBrand>
          <a href="#" id="logo">
            <div className="flex items-center gap-x-2 ">
              <div>
                <img
                  src={Logo}
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 "
                />
              </div>
              <div className="text-white">
                <p
                  className="font-extrabold text-xl sm:text-xl md:text-xl lg:text-xl text-[#4a7c59] m-0 leading-none"
                  id="logo-font"
                >
                  NATION AID
                </p>
                <p className="font-light text-md sm:text-lg md:text-lg lg:text-lg text-[#9cc069] m-0 leading-none">
                  FOUNDATION
                </p>
              </div>
            </div>
          </a>
        </NavbarBrand>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden px-5 text-[#4a7c59] font-bold"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-x-8" justify="center">
        <NavbarItem isActive>
          <Link
            href="#"
            className="text-gray-400 font-medium hover:text-[#4a7c59] hover:border-b-2 hover:pb-2 hover:border-[#4a7c59]"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-gray-400 font-medium hover:text-[#4a7c59] hover:border-b-2 hover:pb-2 hover:border-[#4a7c59]"
            href="#"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-gray-400 font-medium hover:text-[#4a7c59] hover:border-b-2 hover:pb-2 hover:border-[#4a7c59]"
            href="#"
          >
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-gray-400 font-medium hover:text-[#4a7c59] hover:border-b-2 hover:pb-2 hover:border-[#4a7c59]"
            href="#"
          >
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-gray-400 font-medium hover:text-[#4a7c59] hover:border-b-2 hover:pb-2 hover:border-[#4a7c59]  "
            href="#"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-x-16" justify="end">
        <NavbarItem>
          <a href="/buttons/41" className="btn41-43 btn-41">
            Donate
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className="bg-black
      "
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // color={
              //   index === 2 ? "black" : index === menuItems.length -1 ? "red" : "green"
              // }
              className="w-full hover:text-emerald-700 text-[#4a7c59] font-medium "
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="pt-4">
          <a href="/buttons/41" className="btn41-43 btn-41">
            Donate
          </a>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
