import { modelLink } from "@/models/typescript/interfaces/Left Menu/linksTypes";
import { FaCartFlatbed } from "react-icons/fa6";
import { LiaWpforms } from "react-icons/lia";

export const entriesLinks: modelLink[] = [
  {
    title: "Cuadre",
    icon: LiaWpforms,
    link: "/cuadre",
  },
  {
    title: "Almacen",
    icon: FaCartFlatbed,
    link: "/almacen",
  },
];
