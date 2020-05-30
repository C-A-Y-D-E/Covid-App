<script>
  export let selected;
  export let search;
</script>

<style>
  .select,
  select {
    width: 100%;
  }
</style>

<div class="section header">
  <div class="container flex">
    <div class="columns">
      <div class="column ">
        <input
          class="input"
          bind:value={search}
          type="text"
          placeholder="Filter States" />
      </div>
      <div class="column">
        <div class="select">
          <select bind:value={selected}>
            <option value="byState">By State Name</option>
            <option value="cases">Cases</option>
            <option value="deaths">Death</option>
            <option value="total">Total Tested</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
