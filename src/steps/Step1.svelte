<script>
  import { reportData } from "../stores/reportData";
  import { step } from "../stores/step";
  function submit() {
    step.next();
  }
  //TODO: import data
  //TODO: skal jeg fjerne dashboardnotes fra step4 hvis de er monorepo?
</script>

<div class="flex">
  <button
    class="secondary"
    on:click={() => {
      localStorage.clear();
      window.location = "";
    }}>Clear Storage</button
  >
  <button class="secondary" on:click={() => {}}>Load data</button>
</div>
<form on:submit|preventDefault={submit}>
  <label>
    Group #
    <input
      required
      type="number"
      pattern="[0-9]+"
      name="group_number"
      bind:value={$reportData.group_number}
    />
  </label>
  <label>
    Group Name
    <input
      required
      type="text"
      name="group_name"
      bind:value={$reportData.group_name}
    />
  </label>
  <input type="submit" value="Next" />
</form>

<style>
  .flex {
    display: flex;
    gap: 1rem;
  }
</style>
