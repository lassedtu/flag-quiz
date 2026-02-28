interface RegionSelectorProps {
    region: string
    regions: string[]
    onRegionChange: (region: string) => void
}

export default function RegionSelector({ region, regions, onRegionChange }: RegionSelectorProps) {
    return (
        <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
                Region
            </label>
            <select
                value={region}
                onChange={(e) => onRegionChange(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 
                 focus:border-blue-600 focus:outline-none text-gray-700 font-medium"
            >
                {regions.map((r) => (
                    <option key={r} value={r}>
                        {r === 'all' ? 'All Regions' : r}
                    </option>
                ))}
            </select>
        </div>
    )
}
