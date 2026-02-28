import { useState } from 'react'
import Flag from './Flag'
import ResultMessage from './ResultMessage'
import { countries } from '../data/countries'

interface TextInputQuizProps {
    correctCode: string
    onAnswer?: (isCorrect: boolean) => void
}

export default function TextInputQuiz({ correctCode, onAnswer }: TextInputQuizProps) {
    const [userInput, setUserInput] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    const correctCountry = countries.find(c => c.code === correctCode)
    const correctName = correctCountry?.name || ''

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Normalize both strings: lowercase, trim, remove extra spaces
        const normalizedInput = userInput.toLowerCase().trim().replace(/\s+/g, ' ')
        const normalizedCorrect = correctName.toLowerCase().trim().replace(/\s+/g, ' ')

        const correct = normalizedInput === normalizedCorrect
        setIsCorrect(correct)
        setShowResult(true)
        onAnswer?.(correct)
    }

    return (
        <div className="flex flex-col items-center gap-8">
            {/* Flag Display */}
            <div className="w-full max-w-md">
                <Flag code={correctCode} />
            </div>

            {/* Text Input Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={showResult}
                    placeholder="Type the country name..."
                    className="w-full px-6 py-4 rounded-lg text-lg font-semibold text-gray-800 
                     border-2 border-white focus:border-blue-300 focus:outline-none
                     disabled:bg-gray-200 disabled:cursor-not-allowed"
                    autoFocus
                />

                {!showResult && (
                    <button
                        type="submit"
                        className="w-full mt-4 px-6 py-4 bg-white text-gray-800 rounded-lg 
                       font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
                    >
                        Submit Answer
                    </button>
                )}
            </form>

            {/* Result Message */}
            {showResult && (
                <>
                    <ResultMessage isCorrect={isCorrect} />
                    {!isCorrect && (
                        <div className="text-white text-lg">
                            Correct answer: <span className="font-bold">{correctName}</span>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
