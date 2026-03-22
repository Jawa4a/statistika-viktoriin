export type Option = {
    id: string;
    text: string;
  };
  
  export type Question = {
    id: number;
    question: string;
    options: Option[];
    correctOptionId: string;
    fact: string;
  };
  
  export type AnswerRecord = {
    questionId: number;
    question: string;
    selectedOptionId: string;
    selectedOptionText: string;
    isCorrect: boolean;
  };