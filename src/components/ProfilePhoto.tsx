import Image from "next/image";
import profile from "../assets/images/profile.png";

const ProfilePhoto = () => {
  return (
    <div className="w-full h-auto md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full stroke-accent"
      >
        <defs>
          <clipPath id="circleClip">
            <circle cx="100" cy="100" r="90" />
          </clipPath>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="90"
          strokeWidth="1.6"
          fill="none"
          strokeDasharray="2,40"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="100"
          cy="100"
          r="90"
          strokeWidth="1.6"
          fill="none"
          strokeDasharray="20,60"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="25s"
            repeatCount="indefinite"
          />
        </circle>
        <foreignObject
          x="10"
          y="10"
          width="180"
          height="180"
          clipPath="url(#circleClip)"
        >
          <div className="w-full h-full">
            <Image
              src={profile}
              alt="Profile"
              className="w-full h-full rounded-full p-1 object-cover"
            />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default ProfilePhoto;
