import { Props } from "@/types/Questions";

export const Results = ({ questions, answer }: Props) => {
    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-bold">{key + 1}.{item.question}</div>
                    <div>
                        <span>({item.answer === answer[key] ? "Acertô" : "Errrroou!"}) - </span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    );
};