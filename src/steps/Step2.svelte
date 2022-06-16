<script>
  import { onMount } from "svelte";
  import { autoExpandTextarea } from "../modules/autoExpander";
  import { reportData } from "../stores/reportData";
  import { step } from "../stores/step";
  let isMonoRepo = false;
  function submit() {
    if (isMonoRepo) {
      $reportData.links.dashboardGH = $reportData.links.formGH;
    }
    step.next();
  }
  console.log($reportData.links);
  onMount(() => {
    autoExpandTextarea();
  });
</script>

<form on:submit|preventDefault={submit}>
  <fieldset>
    <legend>Links</legend>
    <label>
      Form/Booking link
      <input type="url" bind:value={$reportData.links.form} required />
    </label>
    <label>
      Dashboard/App link
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
      Form/Booking GitHub
      <input type="url" bind:value={$reportData.links.formGH} required />
    </label>
    <label
      >Notes
      <textarea bind:value={$reportData.links.formNotes} />
    </label>
    {#if !isMonoRepo}
      <label>
        Dashboard/App GitHub
        <input type="url" bind:value={$reportData.links.dashboardGH} required />
      </label>
      <label
        >Notes
        <textarea bind:value={$reportData.links.dashboardNotes} />
      </label>
    {/if}
  </fieldset>
  <input type="submit" value="Next" />
</form>
