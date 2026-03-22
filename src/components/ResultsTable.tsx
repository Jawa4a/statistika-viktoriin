import type { AnswerRecord } from "../types/quiz";
import correctIcon from "../assets/correct.svg";
import wrongIcon from "../assets/wrong.svg";
type ResultsTableProps = {
  answers: AnswerRecord[];
};

export default function ResultsTable({ answers }: ResultsTableProps) {
  return (
    <section className="results-table-section">
      <div className="results-table-section__header">
        <h3 className="results-table-section__title">Tulemuste tabel</h3>
      </div>

      <div className="results-table-wrapper">
        <table className="results-table">
          <thead>
            <tr>
              <th>Küsimus</th>
              <th>Valitud vastus</th>
              <th>Tulemus</th>
            </tr>
          </thead>

          <tbody>
            {answers.map((answer) => (
              <tr key={answer.questionId}>
                <td>{answer.question}</td>
                <td>{answer.selectedOptionText}</td>
                <td>
                  <span
                    className={
                      answer.isCorrect
                        ? "results-badge results-badge--correct"
                        : "results-badge results-badge--wrong"
                    }>
                    <img src={answer.isCorrect ? correctIcon : wrongIcon} alt=""/>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}