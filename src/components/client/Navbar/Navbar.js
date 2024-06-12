"use client";
import {Fragment} from "react";
import {Disclosure} from "@headlessui/react";
import MobileMenuButton from "@/components/client/Navbar/MobileMenuButton";
import LeftHeaderMenu from "@/components/client/Navbar/LeftHeaderMenu";
import ProfileMenu from "@/components/client/Navbar/ProfileMenu";
import BurgerMenu from "@/components/client/Navbar/BurgerMenu";
import LoginButton from "@/components/client/Navbar/LoginButton";

const navigation = [
  {name: "Fullstack Web Development", href: "/", current: false},
];

export default function Navbar({user}) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({open}) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <MobileMenuButton open={open}/>
              <LeftHeaderMenu navigation={navigation}/>
              {!!user ? <ProfileMenu/> : <LoginButton/>}
            </div>
          </div>
          
          <BurgerMenu navigation={navigation}/>
        </>
      )}
    </Disclosure>
  );
}
