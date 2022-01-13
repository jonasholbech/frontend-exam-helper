<script>
  import { reportData } from "../../stores/reportData";
  $: correctAmountOfExtras =
    $reportData.extras &&
    $reportData.extras.split("\n").filter((line) => line.trim() != "").length >=
      $reportData.members.length;
</script>

<details class:completed={correctAmountOfExtras}>
  <summary>Extras</summary>
  <textarea bind:value={$reportData.extras} />
</details>
