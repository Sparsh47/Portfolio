import Link from "next/link";

interface NavLinkProps {
  handleHover: (event: any) => void;
  handleHoverOut: (event: any) => void;
  link: String;
}

const NavLink = ({ handleHover, handleHoverOut, link }: NavLinkProps) => {
  return (
    <div
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
      className="relative cursor-pointer"
    >
      <div className="animate absolute bottom-0 w-0 h-[2px] bg-accent"></div>
      <Link
        href={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
      >
        {link}
      </Link>
    </div>
  );
};

export default NavLink;
