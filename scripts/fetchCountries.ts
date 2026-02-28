// Run this script once with: npx tsx scripts/fetchCountries.ts
// It will fetch all countries and save them to src/data/countries.json

import { writeFileSync } from 'fs'
import type { Country } from '../src/types'

interface RestCountryResponse {
    cca2: string
    name: {
        common: string
    }
    region: string
    capital?: string[]
}

async function fetchCountries() {
    try {
        const url = 'https://restcountries.com/v3.1/independent?status=true&fields=cca2,name,region,capital'

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
            }
        })

        if (!response.ok) {
            const text = await response.text()
            console.error('Response:', text)
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        // Check if data is an array
        if (!Array.isArray(data)) {
            console.error('Response is not an array:', data)
            throw new Error('API response is not an array')
        }

        const countries: RestCountryResponse[] = data

        // Transform to your Country type format
        const transformedCountries: Country[] = countries
            .map(country => ({
                code: country.cca2.toLowerCase(), // 2-letter code (us, gb, fr)
                name: country.name.common,
                region: country.region,
                capital: country.capital?.[0] || '',
            }))
            .sort((a, b) => a.name.localeCompare(b.name))

        // Save to JSON file
        writeFileSync(
            './src/data/countries.json',
            JSON.stringify(transformedCountries, null, 2)
        )

        console.log(`Saved ${transformedCountries.length} countries to src/data/countries.json`)
    } catch (error) {
        console.error('Error:', error)
    }
}

fetchCountries()
