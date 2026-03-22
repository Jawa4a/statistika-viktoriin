import { useMemo, useState } from "react";
import FactBox from "./components/FactBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PatternSection from "./components/PatternSection";
import QuestionOptions from "./components/QuestionOptions";
import QuestionnaireButton from "./components/QuestionnaireButton";
import QuizProgress from "./components/QuizProgress";
import ResultsSummary from "./components/ResultsSummary";
import ResultsTable from "./components/ResultsTable";
import TopHeader from "./components/TopHeader";
import { questions } from "./data/questions";
import type { AnswerRecord } from "./types/quiz";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];

  const score = useMemo(
    () => answers.filter((answer) => answer.isCorrect).length,
    [answers]
  );

  function handleSelect(optionId: string) {
    if (selectedOptionId) return;

    const selectedOption = currentQuestion.options.find(
      (option) => option.id === optionId
    );

    if (!selectedOption) return;

    const isCorrect = optionId === currentQuestion.correctOptionId;

    setSelectedOptionId(optionId);
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedOptionId: selectedOption.id,
        selectedOptionText: selectedOption.text,
        isCorrect,
      },
    ]);
  }

  function handleNext() {
    const isLastQuestion = currentIndex === questions.length - 1;

    if (isLastQuestion) {
      setShowResults(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedOptionId(null);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setAnswers([]);
    setShowResults(false);
  }

  return (
    <div className="page-shell">
      <TopHeader />
      <Header />

      <PatternSection>
        {!showResults ? (
          <>
            <QuizProgress
              current={currentIndex + 1}
              total={questions.length}
              answeredCount={answers.length}
            />

            <QuestionOptions
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedOptionId={selectedOptionId}
              correctOptionId={currentQuestion.correctOptionId}
              onSelect={handleSelect}
            />

            {selectedOptionId && <FactBox text={currentQuestion.fact} />}

            {selectedOptionId && (
              <div className="action-row">
                <QuestionnaireButton onClick={handleNext} icon="arrow">
                  {currentIndex === questions.length - 1
                    ? "Vaata tulemusi"
                    : "Järgmine küsimus"}
                </QuestionnaireButton>
              </div>
            )}
          </>
        ) : (
          <>
            <ResultsSummary score={score} total={questions.length} />
            <ResultsTable answers={answers} />

            <div className="action-row">
              <QuestionnaireButton onClick={handleRestart} icon="refresh">
                Alusta uuesti
              </QuestionnaireButton>
            </div>
          </>
        )}
      </PatternSection>

      <Footer />
    </div>
  );
}