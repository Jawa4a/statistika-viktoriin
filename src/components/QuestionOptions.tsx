import correctIcon from "../assets/correct.svg";
import wrongIcon from "../assets/wrong.svg";
import type { Option } from "../types/quiz";

type QuestionOptionsProps = {
  question: string;
  options: Option[];
  selectedOptionId: string | null;
  correctOptionId: string;
  onSelect: (optionId: string) => void;
};

export default function QuestionOptions({
  question,
  options,
  selectedOptionId,
  correctOptionId,
  onSelect,
}: QuestionOptionsProps) {
  const answered = selectedOptionId !== null;

  return (
    <section className="survey-question">
      <h1 className="survey-question__title">{question}</h1>

      <div className="survey-question__grid" role="radiogroup" aria-label={question}>
        {options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.id === correctOptionId;
          const selectedCorrect = answered && isSelected && isCorrect;
          const selectedWrong = answered && isSelected && !isCorrect;
          const showCorrectIcon = answered && isCorrect;

          let className = "survey-option";

          if (selectedCorrect) {
            className += " survey-option--selected-correct";
          } else if (selectedWrong) {
            className += " survey-option--selected-wrong";
          }

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={className}
              disabled={answered}
              onClick={() => {
                if (!answered) onSelect(option.id);
              }}
            >
              <span className="survey-option__indicator" aria-hidden="true">
                {selectedWrong ? (
                  <img src={wrongIcon} alt="" className="survey-option__icon" />
                ) : showCorrectIcon ? (
                  <img src={correctIcon} alt="" className="survey-option__icon" />
                ) : (
                  <span className="survey-option__circle" />
                )}
              </span>

              <span className="survey-option__text">{option.text}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}