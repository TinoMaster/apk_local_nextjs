import { modelLink } from "@/interfaces/Left Menu/links.model";
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
