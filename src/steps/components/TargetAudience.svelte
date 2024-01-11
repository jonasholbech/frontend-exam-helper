<script>
  import { reportData } from "../../stores/reportData";
</script>

<details class:completed={$reportData.targetAudience} id="TargetAudience">
  <summary>Target Audience</summary>
  <label><input type="text" bind:value={$reportData.targetAudience} /></label>
</details>
