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

function historicUS(historicData) {
    return parseHistoric(historicData);
}

function parseHistoric(historicData) {
    return [
        {
            label: 'Cases',
            key: 'positive',
            color: 'rgb(100, 0, 200)',
        },
        {
            label: 'Recovered',
            key: 'recovered',
            color: 'rgb(100, 100, 200)',
        },
        {
            label: 'Total Tested',
            key: 'totalTestResults',
            color: 'rgb(10, 30, 100)',
        },
        {
            label: 'Hospitalized',
            key: 'hospitalizedCurrently',
            color: 'rgb(20, 100, 230)',
        },
        {
            label: 'Deaths',
            key: 'death',
            color: 'rgb(255, 99, 132)',
        },
    ].reduce((prev, next) => {
        if (historicData.filter(d => d[next.key]).length > 4) {
            prev.push(parseChart(historicData, next.key, next.label, next.color))
        }
        return prev;
    }, [])

}

function parseChart(historicData, key, label, color) {
    const chartData = historicData.map(his => {
        return {
            x: moment(his.date, 'YYYYMMDD'),
            y: his[key] || 0,
        }
    })

    return {
        label,
        fill: false,
        borderColor: color,
        data: chartData
    }
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

export default { usStat, stateParse, historicUS };