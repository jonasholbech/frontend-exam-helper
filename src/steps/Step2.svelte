<script>
  import { reportData } from "../stores/reportData";
  import { step } from "../stores/step";
  let isMonoRepo = false;
  function submit() {
    if (isMonoRepo) {
      $reportData.links.dashboardGH = $reportData.links.formGH;
    }
    step.next();
  }
</script>

<form on:submit|preventDefault={submit}>
  <fieldset>
    <legend>Links</legend>
    <label>
      Form link
      <input type="url" bind:value={$reportData.links.form} required />
    </label>
    <label>
      Dashboard link
      <input type="url" bind:value={$reportData.links.dashboard} required />
    </label>
  </fieldset>
  <fieldset>
    <legend>GitHub</legend>
    <label
      >Mono-repo?
      <input type="checkbox" bind:checked={isMonoRepo} />
    </label>
    <label>
      Form GitHub
      <input type="url" bind:value={$reportData.links.formGH} required />
    </label>
    {#if !isMonoRepo}
      <label>
        Dashboard GitHub
        <input type="url" bind:value={$reportData.links.dashboardGH} required />
      </label>
    {/if}
  </fieldset>
  <input type="submit" value="Next" />
</form>
