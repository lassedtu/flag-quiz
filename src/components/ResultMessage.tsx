import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

interface ResultMessageProps {
    isCorrect: boolean
}

export default function ResultMessage({ isCorrect }: ResultMessageProps) {
    return (
        <div className={`flex items-center gap-3 text-2xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? <FaCheckCircle /> : <FaTimesCircle />}
            <span>{isCorrect ? 'Correct!' : 'Wrong!'}</span>
        </div>
    )
}
