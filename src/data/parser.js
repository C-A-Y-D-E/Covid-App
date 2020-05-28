import format from "./format.js"
import moment from "moment"

function usStat(data) {
    const [usStatRaw] = data;
    return parseStat(usStatRaw);

}

function stateParse(state, data) {
    const stateRaw = data.find((s) => s.state === state)
    return parseStat(stateRaw);
}

function parseStat(rawStats) {
    return {
        cases: format.number(rawStats.positive),
        deaths: format.number(rawStats.death),
        recovered: format.number(rawStats.recovered),
        ventilator: format.number(rawStats.onVentilatorCurrently),
        hospitalized: format.number(rawStats.hospitalized),
        icu: format.number(rawStats.inIcuCurrently),
        tested: format.number(rawStats.totalTestResults),
        updated: moment(rawStats.lastModified).format('LLLL')
    }

}

export default { usStat, stateParse };