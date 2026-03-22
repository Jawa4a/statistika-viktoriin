import informationIcon from "../assets/information.svg";

type FactBoxProps = {
  text: string;
};

export default function FactBox({ text }: FactBoxProps) {
  return (
    <aside className="fact-box">
      <div className="fact-box__accent" aria-hidden="true" />
      <div className="fact-box__body">
        <div className="fact-box__header">
          <img
            src={informationIcon}
            alt=""
            aria-hidden="true"
            className="fact-box__icon"
          />
          <span className="fact-box__title">Kas teadsid?</span>
        </div>

        <p className="fact-box__text">{text}</p>
      </div>
    </aside>
  );
}