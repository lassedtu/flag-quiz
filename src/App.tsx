import { useState } from 'react'
import Home from './components/Home'
import Game from './components/Game'
import Results from './components/Results'
import type { GameScreen, GameConfig } from './types'

function App() {
  const [screen, setScreen] = useState<GameScreen>('home')
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null)
  const [finalScore, setFinalScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleStartGame = (config: GameConfig) => {
    setGameConfig(config)
    setScreen('game')
  }

  const handleGameComplete = (score: number, total: number) => {
    setFinalScore(score)
    setTotalQuestions(total)
    setScreen('results')
  }

  const handleReturnHome = () => {
    setScreen('home')
    setGameConfig(null)
    setFinalScore(0)
    setTotalQuestions(0)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 p-8">
      {screen === 'home' && <Home onStartGame={handleStartGame} />}

      {screen === 'game' && gameConfig && (
        <Game config={gameConfig} onComplete={handleGameComplete} />
      )}

      {screen === 'results' && gameConfig && (
        <Results
          score={finalScore}
          totalQuestions={totalQuestions}
          config={gameConfig}
          onReturnHome={handleReturnHome}
        />
      )}
    </div>
  )
}

export default App