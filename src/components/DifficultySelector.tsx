import type { Difficulty } from '../types'

interface DifficultySelectorProps {
    difficulty: Difficulty
    onDifficultyChange: (difficulty: Difficulty) => void
}

export default function DifficultySelector({ difficulty, onDifficultyChange }: DifficultySelectorProps) {
    const descriptions = {
        easy: '4 multiple choice options',
        medium: '6 multiple choice options',
        hard: 'Type the country name'
    }

    return (
        <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
                Difficulty
            </label>
            <div className="grid grid-cols-3 gap-3">
                {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
                    <button
                        key={diff}
                        onClick={() => onDifficultyChange(diff)}
                        className={`
              px-6 py-3 rounded-lg font-semibold capitalize transition-all
              ${difficulty === diff
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }
            `}
                    >
                        {diff}
                    </button>
                ))}
            </div>
            <p className="mt-2 text-sm text-gray-600">
                {descriptions[difficulty]}
            </p>
        </div>
    )
}
