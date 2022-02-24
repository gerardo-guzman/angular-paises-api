export interface Country {
    name: Name;
    population: number;
    region: string;
    capital: string[] | string;
    area: string;
    flags: Flags;
    subregion: string;
    independent: boolean
    landlocked: boolean
    continents: string[] | string;
}

interface Name {
    common: string;
    official: string;
}

interface Flags {
    png: string;
    svg: string;
}