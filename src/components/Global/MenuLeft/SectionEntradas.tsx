import Link from "next/link";

const SectionEntradas = () => {
  return (
    <div className="flex p-2">
      <h6 className="flex items-center text-white p-1 text-sm rounded font-medium bg-yellow-400 shadow-lg shadow-yellow-400/50">
        Pages
      </h6>
      <ul className="flex flex-col my-2 justify-center items-center">
        <li className="link_leftMenu">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="link_leftMenu">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="link_leftMenu">
          <Link href={"/"}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default SectionEntradas;
