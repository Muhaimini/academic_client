import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface NavbarProps extends ChildrenProps {
  className: string;
}
