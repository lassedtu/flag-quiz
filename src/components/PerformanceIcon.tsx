import { FaTrophy, FaStar, FaMedal } from 'react-icons/fa'

interface PerformanceIconProps {
    percentage: number
}

export default function PerformanceIcon({ percentage }: PerformanceIconProps) {
    let icon = null
    let colorClass = ''
    let message = ''

    if (percentage === 100) {
        message = 'Perfect Score!'
        icon = <FaTrophy className="text-6xl" />
        colorClass = 'text-yellow-400'
    } else if (percentage >= 80) {
        message = 'Excellent!'
        icon = <FaStar className="text-6xl" />
        colorClass = 'text-yellow-500'
    } else if (percentage >= 60) {
        message = 'Good Job!'
        icon = <FaMedal className="text-6xl" />
        colorClass = 'text-orange-400'
    } else {
        message = 'Keep Practicing!'
        icon = <FaMedal className="text-6xl" />
        colorClass = 'text-gray-400'
    }

    return (
        <>
            <div className={`flex justify-center mb-6 ${colorClass}`}>
                {icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                {message}
            </h1>
        </>
    )
}
