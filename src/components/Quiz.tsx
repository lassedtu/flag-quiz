import { useState } from 'react'
import Flag from './Flag'
import AnswerGrid from './AnswerGrid'
import ResultMessage from './ResultMessage'

interface QuizProps {
    correctCode: string
    answerCodes: string[] // Array of 4 or 6 country codes including the correct one
    onAnswer?: (isCorrect: boolean) => void
}

export default function Quiz({ correctCode, answerCodes, onAnswer }: QuizProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [showResult, setShowResult] = useState(false)

    const handleAnswer = (code: string) => {
        setSelectedAnswer(code)
        setShowResult(true)
        const correct = code === correctCode
        onAnswer?.(correct)
    }

    const isCorrect = selectedAnswer === correctCode

    return (
        <div className="flex flex-col items-center gap-6">
            {/* Flag Display */}
            <div className="w-full max-w-md">
                <Flag code={correctCode} />
            </div>

            {/* Answer Options */}
            <AnswerGrid
                answerCodes={answerCodes}
                correctCode={correctCode}
                selectedAnswer={selectedAnswer}
                showResult={showResult}
                onAnswer={handleAnswer}
            />

            {/* Result Message - reserve space to prevent layout shift */}
            <div className="h-14 flex items-center justify-center">
                {showResult && <ResultMessage isCorrect={isCorrect} />}
            </div>
        </div>
    )
}
