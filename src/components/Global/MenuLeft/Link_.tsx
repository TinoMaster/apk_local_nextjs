import { modelLink } from "@/models/typescript/interfaces/Left Menu/links.model";
import Link from "next/link";
import React from "react";

export const Link_ = ({ Elem }: { Elem: modelLink }) => {
  return (
    <li className="link_leftMenu">
      <Elem.icon className="bg-white/50 text-primary shadow rounded-full p-1" />
      <Link href={Elem.link}>{Elem.title}</Link>
    </li>
  );
};
