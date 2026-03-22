type ResultsSummaryProps = {
    score: number;
    total: number;
  };
  
  function getMessage(score: number, total: number) {
    const percentage = (score / total) * 100;
  
    if (percentage === 100) {
      return "Suurepärane tulemus.";
    }
  
    if (percentage >= 75) {
      return "Väga hea tulemus.";
    }
  
    if (percentage >= 50) {
      return "Tubli. Mõned küsimused vajavad veel kinnistamist.";
    }
  
    return "Hea algus. Proovi veel ja paranda tulemust.";
  }
  
  export default function ResultsSummary({
    score,
    total,
  }: ResultsSummaryProps) {
    const percentage = Math.round((score / total) * 100);
  
    return (
      <section className="results-summary">
        <div className="results-summary__left">
          <p className="results-summary__eyebrow">Tulemus: {score} / {total}</p>
          <p className="results-summary__message">{getMessage(score, total)}</p>
        </div>
  
        <div className="results-summary__right">
          <strong className="results-summary__value">{percentage}%</strong>
        </div>
      </section>
    );
  }