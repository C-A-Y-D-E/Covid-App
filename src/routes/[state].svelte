<script context="module">
  import requests from "../data/requests.js";
  import stateNames from "../data/stateNames.js";

  export async function preload(page) {
    let state = page.params.state;
    if (stateNames.find(s => s.abbreviation === state) === undefined) {
      return this.error(404, "State Not Found");
    }
    try {
      let stateStat = await requests.stateStat(state);
      let historicState = await requests.historicState(state);
      return { state, stateStat, historicState };
    } catch (e) {
      this.error(500, "There was a problem in calling an api");
    }
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  import TableContainer from "../components/TableContainer.svelte";
  export let stateStat;
  export let state;
  export let historicState;
  const fullStateName = stateNames.find(s => s.abbreviation === state).name;
</script>

<svelte:head>
  <title>Covid - {fullStateName}</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid - {fullStateName}</h1>
  </div>
</div>

<CovidStat {...stateStat} />

<CovidChart historic={historicState} title={fullStateName} />
