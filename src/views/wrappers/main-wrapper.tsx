"use client";

import React, { Fragment } from "react";
import Navbar from "~/components/navbar";
import cx from "classnames";

import type { ChildrenProps } from "~/types/components";
import { useRouter } from "next/navigation";

interface MainWrapper extends ChildrenProps {
  activeValue?: string;
}

const LEFT_MENU = [
  { value: "Home", path: "/home" },
  { value: "Profile", path: "/profile" },
];

const MainWrapper = ({ children, activeValue = "" }: MainWrapper) => {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar>
        <Navbar.Left>
          {LEFT_MENU.map((nav, idx) => (
            <div
              className={cx("flex items-center h-full cursor-pointer", {
                "border-b-2 border-b-black": activeValue === nav.path,
              })}
              onClick={() => router.push(nav.path)}
              key={idx}
            >
              {nav.value}
            </div>
          ))}
        </Navbar.Left>
        <Navbar.Right>Hi</Navbar.Right>
      </Navbar>
      {children}
    </Fragment>
  );
};

export default MainWrapper;
