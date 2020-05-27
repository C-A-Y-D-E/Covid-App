<script context="module">
  import requests from "../data/requests.js";
  import stateNames from "../data/stateNames.js";
  export async function preload(page) {
    let state = page.params["state"];
    if (stateNames.find(s => s.abbreviation === state) === undefined) {
      this.error(404, "State Not Found");
      return;
    }
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  import TableContainer from "../components/TableContainer.svelte";

  export let state;
</script>

<svelte:head>
  <title>Covid - {state}</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid - {state}</h1>
  </div>
</div>

<CovidStat />
