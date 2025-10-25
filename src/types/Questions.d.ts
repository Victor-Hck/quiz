export interface Questions {
    question: string;
    options: string[];
    answer: number;
}

export interface Props {
    questions: Questions[];
    answer: number[];
}