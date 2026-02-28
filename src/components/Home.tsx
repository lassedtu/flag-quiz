import { useState } from 'react'
import type { Difficulty, GameConfig } from '../types'
import { getUniqueRegions, getCountryCountByRegion } from '../utils/gameHelpers'
import DifficultySelector from './DifficultySelector'
import QuestionCountSlider from './QuestionCountSlider'
import RegionSelector from './RegionSelector'

interface HomeProps {
    onStartGame: (config: GameConfig) => void
}

export default function Home({ onStartGame }: HomeProps) {
    const [difficulty, setDifficulty] = useState<Difficulty>('easy')
    const [region, setRegion] = useState('all')
    const [questionCount, setQuestionCount] = useState(10)

    const regions = getUniqueRegions()
    const maxQuestions = getCountryCountByRegion(region)
    // Ensure min is always at least 1 and doesn't exceed max
    const minQuestions = Math.max(1, Math.min(5, Math.floor(maxQuestions / 2)))

    const handleRegionChange = (newRegion: string) => {
        setRegion(newRegion)
        const newMax = getCountryCountByRegion(newRegion)
        const newMin = Math.max(1, Math.min(5, Math.floor(newMax / 2)))

        // Adjust question count to fit within new region's constraints
        let adjustedCount = questionCount

        // If current count exceeds max, set to max
        if (adjustedCount > newMax) {
            adjustedCount = newMax
        }
        // If current count is below min, set to min
        if (adjustedCount < newMin) {
            adjustedCount = newMin
        }

        setQuestionCount(adjustedCount)
    }

    const handleStart = () => {
        onStartGame({ difficulty, questionCount, region })
    }

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-xl w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Flag Quiz Game
            </h1>

            <DifficultySelector
                difficulty={difficulty}
                onDifficultyChange={setDifficulty}
            />

            <QuestionCountSlider
                questionCount={questionCount}
                onQuestionCountChange={setQuestionCount}
                min={minQuestions}
                max={maxQuestions}
                step={1}
            />

            <RegionSelector
                region={region}
                regions={regions}
                onRegionChange={handleRegionChange}
            />

            {/* Start Button */}
            <button
                onClick={handleStart}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold 
                   py-3 px-5 rounded-lg text-lg transition-all duration-200 shadow-lg"
            >
                Start Quiz
            </button>
        </div>
    )
}
