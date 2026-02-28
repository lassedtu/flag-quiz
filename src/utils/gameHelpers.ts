import type { GameConfig } from '../types'
import { countries } from '../data/countries'

interface GameQuestions {
    questionCodes: string[]
    allAnswers: string[][]
}

export function generateQuestions(config: GameConfig): GameQuestions {
    // Filter countries by region
    const availableCountries = config.region === 'all'
        ? countries
        : countries.filter(c => c.region === config.region)

    // Shuffle and pick N countries
    const shuffled = [...availableCountries].sort(() => Math.random() - 0.5)
    const selectedCountries = shuffled.slice(0, config.questionCount)
    const questionCodes = selectedCountries.map(c => c.code)

    // Generate answer options for each question (for easy/medium)
    const allAnswers: string[][] = []

    if (config.difficulty !== 'hard') {
        const optionsCount = config.difficulty === 'easy' ? 4 : 6

        questionCodes.forEach(correctCode => {
            // Get wrong answers
            const wrongAnswers = availableCountries
                .filter(c => c.code !== correctCode)
                .sort(() => Math.random() - 0.5)
                .slice(0, optionsCount - 1)
                .map(c => c.code)

            // Combine and shuffle
            const options = [correctCode, ...wrongAnswers].sort(() => Math.random() - 0.5)
            allAnswers.push(options)
        })
    }

    return { questionCodes, allAnswers }
}

export function getUniqueRegions(): string[] {
    return ['all', ...new Set(countries.map(c => c.region).filter(Boolean))]
}

export function getCountryCountByRegion(region: string): number {
    if (region === 'all') {
        return countries.length
    }
    return countries.filter(c => c.region === region).length
}

export function determineSliderStep(maxQuestions: number): number {
    // For smaller regions, use step of 1
    if (maxQuestions <= 20) {
        return 1
    }
    // For medium regions, use step of 5
    if (maxQuestions <= 50) {
        return 5
    }
    // For larger regions, use step of 10
    return 10
}
