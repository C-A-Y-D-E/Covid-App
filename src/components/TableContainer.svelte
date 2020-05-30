<script>
  import TableFilter from "./TableFilter.svelte";
  import Table from "./Table.svelte";
  export let stateTable;
  export let search = "";
  export let selected = "byState";
  $: state = filterAndSort(stateTable, search, selected);

  function filterAndSort(stateTable, search, selected) {
    const filterStates = stateTable.filter(
      st => st.fullStateName.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    if (selected !== "byState") {
      return filterStates.sort((a, b) => {
        return b[selected] - a[selected];
      });
    }
    return filterStates;
  }
</script>

<TableFilter bind:stateTable bind:search bind:selected />
<Table stateTable={state} />
