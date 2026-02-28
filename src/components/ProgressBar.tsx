interface ProgressBarProps {
    currentQuestion: number
    totalQuestions: number
    score: number
}

export default function ProgressBar({ currentQuestion, totalQuestions, score }: ProgressBarProps) {
    const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100

    return (
        <div className="bg-white rounded-lg p-4 mb-6 shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-semibold">
                    Question {currentQuestion + 1} of {totalQuestions}
                </span>
                <span className="text-gray-700 font-semibold">
                    Score: {score}
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
        </div>
    )
}
