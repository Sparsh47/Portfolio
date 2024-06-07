import Link from "next/link";

interface NavLinkProps {
  handleHover: (event: any) => void;
  handleHoverOut: (event: any) => void;
  link: String;
  onClick: () => void;
}

const NavLink = ({
  handleHover,
  handleHoverOut,
  link,
  onClick,
}: NavLinkProps) => {
  return (
    <div
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
      onClick={onClick}
      className="relative cursor-pointer"
    >
      <div className="animate absolute bottom-0 w-0 h-[2px] bg-accent"></div>
      <Link href={`#${link.toLowerCase()}`}>{link}</Link>
    </div>
  );
};

export default NavLink;
