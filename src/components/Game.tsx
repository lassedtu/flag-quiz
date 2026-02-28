import { useState, useEffect } from 'react'
import type { GameConfig } from '../types'
import { generateQuestions } from '../utils/gameHelpers'
import QuizWrapper from './QuizWrapper'
import ProgressBar from './ProgressBar'
import NextButton from './NextButton'

interface GameProps {
    config: GameConfig
    onComplete: (score: number, totalQuestions: number) => void
}

export default function Game({ config, onComplete }: GameProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [gameData] = useState(() => generateQuestions(config))
    const [answered, setAnswered] = useState(false)

    const questions = gameData.questionCodes
    const answerOptions = gameData.allAnswers

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        setAnswered(true)
    }

    const handleNext = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            setAnswered(false)
        } else {
            // Quiz complete
            onComplete(score, questions.length)
        }
    }

    // Handle Enter key to move to next question
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (answered && event.key === 'Enter') {
                event.preventDefault()
                if (currentQuestion + 1 < questions.length) {
                    setCurrentQuestion(currentQuestion + 1)
                    setAnswered(false)
                } else {
                    onComplete(score, questions.length)
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [answered, currentQuestion, score, questions.length, onComplete])

    // Wait for questions to be generated
    if (questions.length === 0) {
        return <div className="text-white text-2xl">Loading...</div>
    }

    const correctCode = questions[currentQuestion]
    const answerCodes = config.difficulty === 'hard' ? undefined : answerOptions[currentQuestion]

    return (
        <div className="w-full max-w-3xl space-y-4">
            <ProgressBar
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                score={score}
            />

            {/* Quiz Component */}
            <QuizWrapper
                key={currentQuestion}
                difficulty={config.difficulty}
                correctCode={correctCode}
                answerCodes={answerCodes}
                onAnswer={handleAnswer}
            />

            {/* Next Button - reserve space when not visible to prevent layout shift */}
            <div className="h-20 flex items-center justify-center">
                {answered && (
                    <NextButton
                        onClick={handleNext}
                        isLastQuestion={currentQuestion + 1 >= questions.length}
                    />
                )}
            </div>
        </div>
    )
}