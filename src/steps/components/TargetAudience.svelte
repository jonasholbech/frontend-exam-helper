<script>
  import { reportData } from "../../stores/reportData";
</script>

<details class:completed={$reportData.targetAudience}>
  <summary>Target Audience</summary>
  <label><input type="text" bind:value={$reportData.targetAudience} /></label>
</details>
