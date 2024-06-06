import Link from "next/link";
import { IconType } from "react-icons";

const HomeLink = ({ link, Icon }: { link: String; Icon: IconType }) => {
  return (
    <Link
      href={`${link}`}
      target="_blank"
      className="w-14 h-14 border p-[14px] border-accent rounded-full cursor-pointer transition-all duration-200 hover:bg-accent hover:text-black"
    >
      <Icon className="w-full h-full" />
    </Link>
  );
};

export default HomeLink;
