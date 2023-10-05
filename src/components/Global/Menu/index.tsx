import React from "react";
import { Logo } from "./Logo";
import { Name_Page } from "./Name_Page";
import { Button_Notes } from "./Button_Notes";
import { User_Image } from "./User_Image";

export const Menu = () => {
  return (
    <div className="flex h-16 justify-between items-center bg-primary">
      <div className="flex items-center gap-2 px-2">
        <Logo />
        <Name_Page />
      </div>
      <div className="flex items-center gap-2">
        <Button_Notes />
        <User_Image />
      </div>
    </div>
  );
};
