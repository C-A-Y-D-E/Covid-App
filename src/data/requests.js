import axios from "axios"
import parser from "./parser";

async function usStats() {
    const response = await axios.get(`https://covidtracking.com/api/v1/US/current.json`);
    return parser.usStat(response.data)
}

async function stateStat(state) {
    const response = await axios.get(`https://covidtracking.com/api/v1/states/current.json`);
    return parser.stateParse(state, response.data)
}

export default {
    usStats, stateStat
}