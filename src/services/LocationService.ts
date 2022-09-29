import axios from "axios";

export class LocationService {
    static getContinentList() {
        return axios.get(`http://localhost:5000/continents`);
    }

    static getCountriesByContinent(continent: string | string[]) {
        return axios.get(`http://localhost:5000/countries?continent=${continent}`);
    }
}
