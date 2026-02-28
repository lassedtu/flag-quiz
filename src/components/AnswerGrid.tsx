import AnswerButton from './AnswerButton'
import { countries } from '../data/countries'

interface AnswerGridProps {
    answerCodes: string[]
    correctCode: string
    selectedAnswer: string | null
    showResult: boolean
    onAnswer: (code: string) => void
}

export default function AnswerGrid({
    answerCodes,
    correctCode,
    selectedAnswer,
    showResult,
    onAnswer,
}: AnswerGridProps) {
    const getCountryName = (code: string): string => {
        const country = countries.find(c => c.code === code)
        return country?.name || code
    }

    return (
        <div className={`grid ${answerCodes.length === 4 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-4 w-full max-w-2xl`}>
            {answerCodes.map((code) => (
                <AnswerButton
                    key={code}
                    countryName={getCountryName(code)}
                    isSelected={selectedAnswer === code}
                    isCorrect={code === correctCode}
                    showResult={showResult}
                    onClick={() => onAnswer(code)}
                />
            ))}
        </div>
    )
}
