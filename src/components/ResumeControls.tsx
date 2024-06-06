import { controlOptions } from "@/constants/constants";

interface resumeControlsProps {
  section: number;
  handleSectionSelect: (number: number) => void;
}

const ResumeControls = ({
  section,
  handleSectionSelect,
}: resumeControlsProps) => {
  return (
    <div className="w-full h-full p-5 mt-20 md:mt-0">
      <h2 className="text-3xl md:text-5xl">
        Why hire me<span className="text-accent">?</span>
      </h2>
      <p className="text-[#ccc] my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-col items-center justify-center gap-5">
        {controlOptions.map((option, index) => (
          <button
            onClick={() => handleSectionSelect(index + 1)}
            key={index}
            className={`w-full p-3 rounded-lg font-medium ${
              section === index + 1
                ? "bg-[#00ff99] text-black"
                : "bg-[#28272c] text-white hover:opacity-60"
            } transition-all duration-200 ease-in-out`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResumeControls;
