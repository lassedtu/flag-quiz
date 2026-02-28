interface AnswerButtonProps {
    countryName: string
    isSelected: boolean
    isCorrect: boolean
    showResult: boolean
    onClick: () => void
}

export default function AnswerButton({
    countryName,
    isSelected,
    isCorrect,
    showResult,
    onClick,
}: AnswerButtonProps) {
    let buttonStyle = 'bg-white text-gray-800 hover:bg-gray-100'

    if (showResult && isCorrect) {
        buttonStyle = 'bg-green-500 text-white'
    } else if (showResult && isSelected && !isCorrect) {
        buttonStyle = 'bg-red-500 text-white'
    }

    return (
        <button
            onClick={onClick}
            disabled={showResult}
            className={`
        px-6 py-4 rounded-lg font-semibold text-lg
        transition-all duration-200 
        disabled:cursor-not-allowed
        ${buttonStyle}
      `}
        >
            {countryName}
        </button>
    )
}
