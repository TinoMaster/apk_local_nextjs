import React from "react";
import { Logo } from "./Logo";
import { Name_Page } from "./Name_Page";
import { Button_Notes } from "./Button_Notes";
import { User_Image } from "./User_Image";

export const Menu = () => {
  return (
    <div className="flex h-16 justify-between z-40 items-center bg-primary">
      <div className="flex items-center p-3">
        <Logo />
        <Name_Page />
      </div>
      <div className="flex items-center">
        <Button_Notes />
        <User_Image />
      </div>
    </div>
  );
};
