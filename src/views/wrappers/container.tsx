"use client";

import React, { PropsWithChildren } from "react";

const Container = ({ children = null }: PropsWithChildren) => {
  return (
    <div className="fixed h-full w-full">
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
};

export default Container;
