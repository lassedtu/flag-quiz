import type { Country } from '../types'
import countriesData from './countries.json'

export const countries: Country[] = countriesData

// Helper: Get only countries with capitals (for capital quiz)
export const getCountriesWithCapitals = (): Country[] => {
    return countries.filter(country => country.capital && country.capital.trim() !== '')
}

// Helper: Get countries by region
export const getCountriesByRegion = (region: string): Country[] => {
    return countries.filter(country => country.region === region)
}