interface FlagProps {
    code: string
}

export default function Flag({ code }: FlagProps) {
    return (
        <img
            src={`https://flagcdn.com/${code}.svg`}
            alt={`Flag of ${code}`}
        />
    )
}