<script context="module">
  import requests from "../data/requests.js";
  export async function preload({ params }) {
    try {
      const usStat = await requests.usStats();
      return { usStat };
    } catch (e) {
      this.error(500, "There was a problem in calling an api");
    }
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  import TableContainer from "../components/TableContainer.svelte";
  export let usStat;
</script>

<svelte:head>
  <title>Covid App</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Home</h1>
  </div>
</div>

<CovidStat {...usStat} />
