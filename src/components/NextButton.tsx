interface NextButtonProps {
    onClick: () => void
    isLastQuestion: boolean
}

export default function NextButton({ onClick, isLastQuestion }: NextButtonProps) {
    return (
        <button
            onClick={onClick}
            className="mt-6 w-full max-w-md mx-auto block bg-white hover:bg-gray-100 
             text-gray-800 font-bold py-4 px-6 rounded-lg text-xl 
             transition-all duration-200 shadow-lg"
        >
            {isLastQuestion ? 'See Results' : 'Next Question'}
        </button>
    )
}
