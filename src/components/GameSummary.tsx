import type { GameConfig } from '../types'

interface GameSummaryProps {
    config: GameConfig
}

export default function GameSummary({ config }: GameSummaryProps) {
    return (
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                    <div className="text-sm text-gray-600 mb-1">Difficulty</div>
                    <div className="text-lg font-semibold text-gray-800 capitalize">
                        {config.difficulty}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-600 mb-1">Region</div>
                    <div className="text-lg font-semibold text-gray-800">
                        {config.region === 'all' ? 'All Regions' : config.region}
                    </div>
                </div>
            </div>
        </div>
    )
}
