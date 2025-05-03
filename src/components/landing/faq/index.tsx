import Image from "next/image";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => (
  <article
    className={`${
      isOpen ? "bg-[#C7DEFF]" : "bg-[#F7FAFF]"
    } flex w-full cursor-pointer flex-row gap-2 border-b border-[#D9E8FF] py-8 px-10 rounded-2xl`}
    onClick={onClick}
  >
    {/* <Image
      src="/images/plus-icon.svg"
      width={24}
      height={24}
      className={`h-6 w-6 transform transition ${isOpen ? "rotate-45" : ""}`}
      alt=""
    /> */}
    <div className="flex w-full flex-col">
      <h3 className="text-2xl font-medium tracking-tight">{question}</h3>
      <div
        className={`w-full overflow-clip transition-all duration-300 transition-discrete  ${
          isOpen ? "max-h-24 mt-6" : "max-h-0"
        }`}
      >
        {isOpen && (
          <p
            className={`text-2xl py-2 tracking-tight text-[#1E1E1E] font-medium`}
          >
            {answer}
          </p>
        )}
      </div>
    </div>
  </article>
);

export default FaqItem;
