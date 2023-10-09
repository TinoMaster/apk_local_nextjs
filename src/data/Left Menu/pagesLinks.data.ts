import { modelLink } from "@/models/typescript/interfaces/Left Menu/linksTypes";
import { HiOutlineHome } from "react-icons/hi";
import { FaSellsy } from "react-icons/fa";
import { MdInventory, MdOutlineDataExploration } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";


export const pagesLinks: modelLink[] = [
  {
    title: "Inicio",
    icon: HiOutlineHome,
    link: "/",
  },
  {
    title: "Ventas",
    icon: FaSellsy,
    link: "/ventas",
  },
  {
    title: "Inventario",
    icon: MdInventory,
    link: "/inventario",
  },
  {
    title: "Personal",
    icon: HiUserGroup,
    link: "/personal",
  },
  {
    title: "Miron",
    icon: MdOutlineDataExploration,
    link: "/miron",
  },
];
