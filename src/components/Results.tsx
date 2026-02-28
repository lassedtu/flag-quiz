import type { GameConfig } from '../types'
import PerformanceIcon from './PerformanceIcon'
import ScoreDisplay from './ScoreDisplay'
import GameSummary from './GameSummary'

interface ResultsProps {
    score: number
    totalQuestions: number
    config: GameConfig
    onReturnHome: () => void
}

export default function Results({ score, totalQuestions, config, onReturnHome }: ResultsProps) {
    const percentage = Math.round((score / totalQuestions) * 100)

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-xl w-full">
            <PerformanceIcon percentage={percentage} />

            <ScoreDisplay score={score} totalQuestions={totalQuestions} />

            <GameSummary config={config} />

            {/* Return Home Button */}
            <button
                onClick={onReturnHome}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold 
                   py-3 px-5 rounded-lg text-lg transition-all duration-200 shadow-lg"
            >
                Play Again
            </button>
        </div>
    )
}
