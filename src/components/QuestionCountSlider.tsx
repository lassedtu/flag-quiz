interface QuestionCountSliderProps {
    questionCount: number
    onQuestionCountChange: (count: number) => void
    min?: number
    max?: number
    step?: number
}

export default function QuestionCountSlider({
    questionCount,
    onQuestionCountChange,
    min = 5,
    max = 50,
    step = 5
}: QuestionCountSliderProps) {
    return (
        <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
                Number of Questions: {questionCount}
            </label>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={questionCount}
                onChange={(e) => onQuestionCountChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    )
}
