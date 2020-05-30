<script>
  export let stateTable;
</script>

<style>
  .table {
    width: 100%;
  }
</style>

<div class="section header">
  <div class="container">
    <table class="table is-striped is-bordered">
      <thead>
        <tr>
          <th>States</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Total Tested</th>
        </tr>
      </thead>
      <tbody>
        {#each stateTable as data (data.state)}
          <tr>
            <td>
              <a href={data.state}>{data.fullStateName}</a>
            </td>
            <td>{data.cases}</td>
            <td>{data.deaths}</td>
            <td>{data.total}</td>
          </tr>
        {/each}

      </tbody>
    </table>
  </div>
</div>
