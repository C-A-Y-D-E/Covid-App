import axios from "axios"
import parser from "./parser";

async function usStats() {
    const response = await axios.get(`https://covidtracking.com/api/v1/US/current.json`);
    return parser.usStat(response.data)
}

export default {
    usStats
}