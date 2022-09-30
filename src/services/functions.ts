export interface Country {
    name: {
        common: string;
        official: string;
    };
    cca2: string;
    cca3: string;
    currencies: object;
    timezones: string[];
    region: string;
    subregion: string;
    continents: string[];
    languages: string[];
    population: number;
    area: number;
    capital: string[];
    flags: {
        svg: string;
        png: string;
    };
}
