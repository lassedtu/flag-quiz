import Quiz from './Quiz'
import TextInputQuiz from './TextInputQuiz'
import type { QuizConfig } from '../types'

interface QuizWrapperProps extends QuizConfig {
    onAnswer?: (isCorrect: boolean) => void
}

export default function QuizWrapper({ difficulty, correctCode, answerCodes, onAnswer }: QuizWrapperProps) {
    // Hard mode: Text input
    if (difficulty === 'hard') {
        return <TextInputQuiz correctCode={correctCode} onAnswer={onAnswer} />
    }

    // Easy/Medium mode: Multiple choice
    if (!answerCodes) {
        throw new Error('answerCodes required for easy/medium difficulty')
    }

    return (
        <Quiz
            correctCode={correctCode}
            answerCodes={answerCodes}
            onAnswer={onAnswer}
        />
    )
}
