import React, { useMemo, JSX } from "react";
import type { NavbarProps, ChildrenProps } from "~/types/components";

import cx from "classnames";

enum CHIDLREN_TYPE {
  LEFT = "Left",
  RIGHT = "Right",
}

const Navbar = ({ children, className = "bg-white" }: Partial<NavbarProps>) => {
  const dynamicOptionalChildrenClass = useMemo(() => {
    const isArrayChildren = Array.isArray(children);
    const childrenTypeName: string = (children as JSX.Element)?.type?.name;

    if (isArrayChildren) {
      const typesChildren = children.map((cn) => cn?.type?.name);

      if (
        typesChildren.includes(CHIDLREN_TYPE.LEFT) &&
        typesChildren.includes(CHIDLREN_TYPE.RIGHT)
      ) {
        return "justify-between";
      }

      if (typesChildren.includes(CHIDLREN_TYPE.RIGHT)) {
        return "justify-end";
      }

      return "";
    }

    if (childrenTypeName === CHIDLREN_TYPE.RIGHT) {
      return "justify-end";
    }

    return "";
  }, [children]);

  return (
    <div
      className={cx(
        "flex h-20 items-center shadow px-5",
        dynamicOptionalChildrenClass,
        className
      )}
    >
      {children}
    </div>
  );
};

const Left = ({ children }: ChildrenProps) => {
  return (
    <div className="flex items-center gap-3 h-full justify-center">
      {children}
    </div>
  );
};

const Right = ({ children }: ChildrenProps) => {
  return (
    <div className="flex items-center gap-3 h-full justify-center">
      {children}
    </div>
  );
};

Navbar.Left = Left;
Navbar.Right = Right;

interface NavbarComponent extends React.FC<Partial<NavbarProps>> {
  Left: React.FC<ChildrenProps>;
  Right: React.FC<ChildrenProps>;
}

export default Navbar as NavbarComponent;
