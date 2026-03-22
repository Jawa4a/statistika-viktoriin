import nextIcon from "../assets/next.svg";
import refreshIcon from "../assets/refresh.svg";
import type { ReactNode } from "react";

type QuestionnaireButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: "arrow" | "refresh";
  type?: "button" | "submit";
};

export default function QuestionnaireButton({
  children,
  onClick,
  disabled,
  icon = "arrow",
  type = "button",
}: QuestionnaireButtonProps) {
  const iconSrc = icon === "arrow" ? nextIcon : refreshIcon;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="questionnaire-button"
    >
      <span>{children}</span>
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="questionnaire-button__svg"
      />
    </button>
  );
}