<script>
  import { reportData } from "../../stores/reportData";
  export let cat;
  export let site;
</script>

<div>
  <label>
    {cat} ({$reportData[site][cat].grade || "??"}/10)
    <input
      type="range"
      bind:value={$reportData[site][cat].grade}
      min="0"
      max="10"
    />
  </label>
  <textarea bind:value={$reportData[site][cat].comment} />
  <hr />
</div>

<style>
  div {
    margin-bottom: 1rem;
  }
</style>
