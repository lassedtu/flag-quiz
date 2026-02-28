export interface Country {
    code: string        // e.g., "us", "gb", "fr"
    name: string        // e.g., "United States"
    region: string      // e.g., "North America", "Europe"
    capital?: string    // e.g., "Washington, D.C."
}

export type Difficulty = 'easy' | 'medium' | 'hard'

export type GameScreen = 'home' | 'game' | 'results'

export interface QuizConfig {
    difficulty: Difficulty
    correctCode: string
    answerCodes?: string[] // Only for easy/medium (multiple choice)
}

export interface GameConfig {
    difficulty: Difficulty
    questionCount: number
    region: string // 'all' or specific region name
}

export interface GameState {
    screen: GameScreen
    config: GameConfig | null
    currentQuestion: number
    score: number
    answers: boolean[] // Track correct/incorrect for each question
}
