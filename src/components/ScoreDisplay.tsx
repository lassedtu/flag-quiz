interface ScoreDisplayProps {
    score: number
    totalQuestions: number
}

export default function ScoreDisplay({ score, totalQuestions }: ScoreDisplayProps) {
    const percentage = Math.round((score / totalQuestions) * 100)

    return (
        <div className="text-center mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-2">
                {score}/{totalQuestions}
            </div>
            <div className="text-2xl text-gray-600">
                {percentage}% Correct
            </div>
        </div>
    )
}
