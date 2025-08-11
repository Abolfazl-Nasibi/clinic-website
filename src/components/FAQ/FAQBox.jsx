import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function FAQBox({ question, answer, isOpen, onToggle }) {
  return (
    <div>
      {/* title & icon */}
      <div
        onClick={onToggle}
        className={`flex justify-between w-[1000px] px-4 py-2 cursor-pointer bg-primary-dark ${isOpen ? 'rounded-t-xl' : 'rounded-xl' }  font-bold text-lg text-secondary transition-all top-l`}
      >
        <span>{question}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      {/* answer */}
      {isOpen ? (
        <div className="text-secondary bg-primary-dark px-4 pb-2 w-[1000px] rounded-b-xl">{answer}</div>
      ) : (
        ""
      )}
    </div>
  );
}
