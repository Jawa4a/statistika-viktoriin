type QuizProgressProps = {
    current: number;
    total: number;
    answeredCount: number;
  };
  
  export default function QuizProgress({
    current,
    total,
    answeredCount,
  }: QuizProgressProps) {
    const percent = Math.round((answeredCount / total) * 100);
  
    return (
      <section className="quiz-progress">
        <div className="quiz-progress__meta">
          <span className="quiz-progress__step">
            Küsimus {current}/{total}
          </span>
          <span className="quiz-progress__percent">{percent}%</span>
        </div>
  
        <div className="quiz-progress__track" aria-hidden="true">
          <div className="quiz-progress__fill" style={{ width: `${percent}%` }} />
        </div>
      </section>
    );
  }