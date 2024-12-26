import { StaticImageData } from "next/image";
import "./Question.css"

interface Option {
  label: string;
  imageSrc?: string | StaticImageData; // Agora `imageSrc` é opcional
}

interface QuestionProps {
  question: string;
  options: Option[];
  onAnswer: (answer: string) => void;
}

export default function Question({ question, options, onAnswer }: QuestionProps) {
  return (
    <div className="text-white p-6 rounded-lg questions">
      <h2 className="text-4xl text-center font-semibold mb-8">{question}</h2>
      <div className="flex gap-4 justify-center flex-col">
        {options.map((option, index) => (
          <button
            style={{ backgroundColor: "rgb(40, 41, 43)" }}
            key={index}
            className="hover:bg-green-700 hover:border-green-500 hover:shadow-xl border-2 border-transparent pl-4 rounded-xl mt-2 options text-white transition-all flex items-center justify-between w-full h-28"
            onClick={() => onAnswer(option.label)}
          >
            <span>{option.label}</span>
            {option.imageSrc && (
              <img
                src={option.imageSrc as string}
                alt={option.label}
                className="w-32 h-full inline-block ml-2"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
